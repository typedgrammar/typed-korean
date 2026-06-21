import type { PartOfSpeech } from "./types";

/**
 * Pull the content words (nouns, verbs, adjectives) out of an example's Typed
 * Korean snippet. The snippets follow a consistent shape, so lightweight
 * regexes are reliable here — and synchronous, so cards can render word lists
 * without invoking the compiler. Headwords are dictionary forms (먹다, 좋다, …)
 * so they index straight into the vocabulary table.
 */
export interface ExtractedWord {
  word: string;
  pos: PartOfSpeech;
}

export function extractWords(code: string): ExtractedWord[] {
  const found: ExtractedWord[] = [];
  const seen = new Set<string>();
  const push = (word: string, pos: PartOfSpeech) => {
    if (word && !seen.has(word)) {
      seen.add(word);
      found.push({ word, pos });
    }
  };

  // Wrapper→POS mirror of scripts/extract-words.mjs WRAPPER_POS (regex vs AST).
  // Noun subclasses: CommonNoun / ProperNoun / Pronoun<"X">
  for (const m of code.matchAll(/CommonNoun<\s*"([^"]+)"\s*>/g)) push(m[1]!, "noun");
  for (const m of code.matchAll(/ProperNoun<\s*"([^"]+)"\s*>/g)) push(m[1]!, "proper-noun");
  for (const m of code.matchAll(/Pronoun<\s*"([^"]+)"\s*>/g)) push(m[1]!, "pronoun");
  // Adverb / Adnominal<"X">
  for (const m of code.matchAll(/(?<![A-Za-z])Adverb<\s*"([^"]+)"\s*>/g)) push(m[1]!, "adverb");
  for (const m of code.matchAll(/Adnominal<\s*"([^"]+)"\s*>/g)) push(m[1]!, "adnominal");
  // Noun-subclass parts in the Sentence path
  for (const m of code.matchAll(/NounPart<\s*"([^"]+)"\s*>/g)) push(m[1]!, "noun");
  for (const m of code.matchAll(/PronounPart<\s*"([^"]+)"\s*>/g)) push(m[1]!, "pronoun");
  for (const m of code.matchAll(/ProperNounPart<\s*"([^"]+)"\s*>/g)) push(m[1]!, "proper-noun");
  // Copula attaches to a noun: CopulaPart<"학생", …> / ConjugateCopula<"학생", …>
  for (const m of code.matchAll(/CopulaPart<\s*"([^"]+)"/g)) push(m[1]!, "noun");
  for (const m of code.matchAll(/ConjugateCopula<\s*"([^"]+)"/g)) push(m[1]!, "noun");

  // Verb classes: (Regular|Irregular|Hada)?Verb & { dict: "X"; … } → headword X
  for (const m of code.matchAll(
    /[A-Za-z]*Verb\s*&\s*\{[^}]*?dict:\s*"([^"]+)"/g
  ))
    push(m[1]!, "verb");

  // Adjective & { dict: "X"; … attr: "…" } → headword X
  for (const m of code.matchAll(/Adjective\s*&\s*\{[^}]*?dict:\s*"([^"]+)"/g))
    push(m[1]!, "adjective");

  return found;
}
