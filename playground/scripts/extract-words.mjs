/**
 * Extract every content word the tutorial uses, by parsing each example's
 * Typed Korean snippet with the TypeScript Compiler API. These are the words
 * the vocabulary table must cover.
 *
 *   node scripts/extract-words.mjs           # summary
 *   node scripts/extract-words.mjs --json    # { words: [{word,pos}], literals: [...] }
 *
 * "Words" = nouns (ProperNoun<"…">), verbs (Godan/Ichidan/Irregular) and
 * adjectives (I/Na) declared through the library's typed constructors. We also
 * collect the raw string literals used as glue, minus known grammar particles,
 * as adverb/expression candidates.
 */
import ts from "typescript";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PLAYGROUND = path.resolve(__dirname, "..");
const CHAPTERS_DIR = path.join(PLAYGROUND, "src/tutorial/chapters");

const GRAMMAR_LITERALS = new Set([
  // particles (조사)
  "은","는","이","가","을","를","의","에","에서","에게","한테","께","에게서","한테서",
  "로","으로","과","와","하고","랑","이랑","도","만","부터","까지","보다","처럼","같이",
  "마다","밖에","이나","나","요",
  // punctuation
  "、","。","！","？","「","」",".",",","?","!","…","·",
]);

function loadChapter(file) {
  const src = fs.readFileSync(file, "utf8");
  const js = ts.transpileModule(src, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
  }).outputText;
  const mod = { exports: {} };
  new Function("module", "exports", "require", js)(mod, mod.exports, () => ({}));
  return mod.exports.default;
}

const words = new Map(); // word -> Set(pos)
const literals = new Map(); // literal -> count
function addWord(w, pos) {
  if (!w) return;
  if (!words.has(w)) words.set(w, new Set());
  words.get(w).add(pos);
}

function objMembers(typeLiteral) {
  const out = {};
  for (const m of typeLiteral.members || []) {
    if (ts.isPropertySignature(m) && m.name && m.type && ts.isLiteralTypeNode(m.type) && ts.isStringLiteral(m.type.literal)) {
      out[m.name.getText()] = m.type.literal.text;
    }
  }
  return out;
}

function walk(node, sf) {
  // Noun subclasses + adverb/adnominal wrappers: <Ctor><"X">.
  // Wrapper→POS mirror of src/vocab/extract.ts (AST vs regex). Canonical wrapper
  // list: src/noun-types.d.ts + src/adverb-types.d.ts.
  const WRAPPER_POS = {
    CommonNoun: "noun",
    ProperNoun: "proper-noun",
    Pronoun: "pronoun",
    Adverb: "adverb",
    Adnominal: "adnominal",
    NounPart: "noun",
    PronounPart: "pronoun",
    ProperNounPart: "proper-noun",
    // copula attaches to a noun — first arg is the noun
    CopulaPart: "noun",
    ConjugateCopula: "noun",
  };
  if (ts.isTypeReferenceNode(node) && node.typeArguments?.[0]) {
    const wpos = WRAPPER_POS[node.typeName.getText()];
    const a = node.typeArguments[0];
    if (wpos && ts.isLiteralTypeNode(a) && ts.isStringLiteral(a.literal)) addWord(a.literal.text, wpos);
  }
  // Verb / adjective intersections: <Ctor> & { dict: "..."; ... }
  // Verb ctor is Verb / RegularVerb / IrregularVerb / HadaVerb (all end "Verb");
  // adjective ctor is Adjective. Headword = the dict form.
  if (ts.isIntersectionTypeNode(node)) {
    const ref = node.types.find((t) => ts.isTypeReferenceNode(t));
    const lit = node.types.find((t) => ts.isTypeLiteralNode(t));
    if (ref && lit) {
      const ctor = ref.typeName.getText();
      const props = objMembers(lit);
      if (/Verb$/.test(ctor) && props.dict) addWord(props.dict, "verb");
      else if (ctor === "Adjective" && props.dict) addWord(props.dict, "adjective");
    }
  }
  // raw string literals (candidates)
  if (ts.isLiteralTypeNode(node) && ts.isStringLiteral(node.literal)) {
    const v = node.literal.text;
    if (v && !GRAMMAR_LITERALS.has(v)) literals.set(v, (literals.get(v) || 0) + 1);
  }
  ts.forEachChild(node, (c) => walk(c, sf));
}

const files = fs.readdirSync(CHAPTERS_DIR).filter((f) => f.endsWith(".ts") && f !== "index.ts");
for (const f of files) {
  let chapter;
  try { chapter = loadChapter(path.join(CHAPTERS_DIR, f)); } catch { continue; }
  if (!chapter?.points) continue;
  for (const pt of chapter.points)
    for (const ex of pt.examples || []) {
      const sf = ts.createSourceFile("x.ts", ex.code || "", ts.ScriptTarget.Latest, true);
      walk(sf, sf);
    }
}

const wordList = [...words.entries()]
  .map(([word, set]) => ({ word, pos: [...set][0] }))
  .sort((a, b) => a.word.localeCompare(b.word, "ko"));
const litList = [...literals.entries()]
  .map(([word, count]) => ({ word, count }))
  .sort((a, b) => b.count - a.count);

if (process.argv.includes("--json")) {
  console.log(JSON.stringify({ words: wordList, literals: litList }, null, 2));
} else {
  console.log(`Words (typed constructors): ${wordList.length}`);
  const byPos = {};
  for (const w of wordList) byPos[w.pos] = (byPos[w.pos] || 0) + 1;
  console.log(byPos);
  console.log(`\nLiteral candidates (non-grammar): ${litList.length}`);
  console.log(litList.slice(0, 40).map((l) => l.word).join("  "));
}
