import type { Chapter } from "../types";

// ---------------------------------------------------------------------------
// Chapter definition
// ---------------------------------------------------------------------------
const chapter: Chapter = {
  id: "i03",
  level: "intermediate",
  order: 3,
  titleEn: "Ability: -(으)ㄹ 수 있다/없다",
  titleZh: "能力：-(으)ㄹ 수 있다/없다",
  summaryEn:
    `To express **ability** ("can do") or **inability** ("cannot do"), Korean uses the pattern **-(으)ㄹ 수 있다/없다**. ` +
    `The prospective adnominal ending -(으)ㄹ turns the verb into a modifier of the bound noun **수** (meaning roughly "way / means / possibility"). ` +
    `있다 ("to exist") then asserts that the possibility exists; 없다 ("to not exist") negates it.\n\n` +
    `The polite-informal (해요체) forms are **-(으)ㄹ 수 있어요** and **-(으)ㄹ 수 없어요**. ` +
    `The formal-polite (합니다체) equivalents are **-(으)ㄹ 수 있습니다** and **-(으)ㄹ 수 없습니다**. ` +
    `The allomorph rule follows the same (으)-insertion logic seen throughout Korean: after a vowel-final stem use **-ㄹ 수 있어요**; after a consonant-final stem use **-을 수 있어요**.`,
  summaryZh:
    `表达**能力**（"会做/能做"）或**无能力**（"不会/不能"），韩语使用结构 **-(으)ㄹ 수 있다/없다**。` +
    `展望性冠形词词尾 -(으)ㄹ 将动词变为修饰名词 **수**（"方法/可能性"）的定语形，再接 있다（"存在"）表示该可能性存在，接 없다（"不存在"）表示该可能性不存在。\n\n` +
    `非正式礼貌体（해요체）为 **-(으)ㄹ 수 있어요** 和 **-(으)ㄹ 수 없어요**；` +
    `正式礼貌体（합니다체）为 **-(으)ㄹ 수 있습니다** 和 **-(으)ㄹ 수 없습니다**。` +
    `元音词干（无 받침）接 **-ㄹ 수 있어요**，辅音词干（有 받침）接 **-을 수 있어요**，规则与韩语中常见的 (으) 插入规则完全一致。`,
  points: [
    {
      id: "i03-1",
      titleEn: "Vowel-stem verbs: -ㄹ 수 있어요",
      titleZh: "元音词干动词：-ㄹ 수 있어요",
      bodyEn:
        `When a verb stem ends in a **vowel** (no 받침), attach **-ㄹ** directly to form the prospective adnominal, then follow with **수 있어요**. ` +
        `For example, 가다 (to go) has stem 가 → **갈 수 있어요** (can go). ` +
        `하다-verbs follow the same rule: 하다 → **할 수 있어요**, 말하다 → **말할 수 있어요**.\n\n` +
        `In the DSL, the \`Potential\` form of \`ConjugateVerb\` produces the complete string including 수 있어요, so a bare \`ConjugateVerb<가다, "Potential">\` gives **"갈 수 있어요"** directly. ` +
        `Inside a \`Sentence<[...]>\`, use \`VerbPart<V, "Potential">\` and the auto-spacing handles the rest.`,
      bodyZh:
        `当动词词干末尾为**元音**（无 받침）时，直接在词干后加 **-ㄹ**，再接 **수 있어요**。` +
        `例如 가다（去）词干为 가 → **갈 수 있어요**（会去/能去）。` +
        `하다 类动词同理：하다 → **할 수 있어요**，말하다 → **말할 수 있어요**。\n\n` +
        `在 DSL 中，\`ConjugateVerb\` 的 \`Potential\` 形式直接产生含 수 있어요 的完整字符串：\`ConjugateVerb<가다, "Potential">\` 解析为 **"갈 수 있어요"**。` +
        `在 \`Sentence<[...]>\` 中使用 \`VerbPart<V, "Potential">\`，自动空格会处理好其余部分。`,
      examples: [
        {
          jp: "갈 수 있어요",
          reading: "gal su isseoyo",
          en: "I can go. / (Someone) can go.",
          zh: "（我/他）能去。",
          code: `import type { Verb, ConjugateVerb } from "typed-korean";


type 가다 = Verb & { dict:"가다"; stem:"가"; inf:"가"; past:"갔"; eu:"가"; prospective:"갈"; formalStem:"갑니" };

// prospective base "갈" + 수 있어요
type S = ConjugateVerb<가다, "Potential">;
//   ^? "갈 수 있어요"`,
        },
        {
          jp: "저는 한국어를 할 수 있어요",
          reading: "jeoneun hangugeoreul hal su isseoyo",
          en: "I can speak Korean.",
          zh: "我会说韩语。",
          code: `import type { HadaVerb, VerbPart, NounPart, PronounPart, ParticlePart, Sentence } from "typed-korean";


type 하다 = HadaVerb & { dict:"하다"; stem:"하"; inf:"해"; past:"했"; eu:"하"; prospective:"할"; formalStem:"합니" };

// 하다 prospective = "할" → 할 수 있어요
// 한국어 ends in vowel → object particle 를
type S = Sentence<[
  PronounPart<"저">, ParticlePart<"는">,
  NounPart<"한국어">, ParticlePart<"를">,
  VerbPart<하다, "Potential">
]>;
//   ^? "저는 한국어를 할 수 있어요"`,
        },
        {
          jp: "저는 영화를 볼 수 있어요",
          reading: "jeoneun yeonghwareul bol su isseoyo",
          en: "I can watch movies.",
          zh: "我能看电影。",
          code: `import type { Verb, VerbPart, NounPart, PronounPart, ParticlePart, Sentence } from "typed-korean";


type 보다 = Verb & { dict:"보다"; stem:"보"; inf:"봐"; past:"봤"; eu:"보"; prospective:"볼"; formalStem:"봅니" };

// 보다 prospective = "볼" → 볼 수 있어요  (vowel stem 보 → -ㄹ appended)
// 영화 ends in vowel → object particle 를
type S = Sentence<[
  PronounPart<"저">, ParticlePart<"는">,
  NounPart<"영화">, ParticlePart<"를">,
  VerbPart<보다, "Potential">
]>;
//   ^? "저는 영화를 볼 수 있어요"`,
        },
      ],
    },
    {
      id: "i03-2",
      titleEn: "Consonant-stem verbs: -을 수 있어요",
      titleZh: "辅音词干动词：-을 수 있어요",
      bodyEn:
        `When a verb stem ends in a **consonant** (받침 present), insert **으** before -ㄹ → **-을 수 있어요**. ` +
        `For example, 먹다 (to eat) has consonant-final stem 먹 → **먹을 수 있어요** (can eat). ` +
        `Similarly 읽다 → **읽을 수 있어요**.\n\n` +
        `The **ㄷ-irregular** verb 듣다 (to listen) provides a good illustration: the prospective base in the vetted lexicon is 들을 (ㄷ → ㄹ before a vowel-initial ending), giving **들을 수 있어요**. ` +
        `Always use the pre-computed \`prospective\` base from the cheat-sheet; never guess the irregular transform yourself.`,
      bodyZh:
        `当动词词干末尾为**辅音**（有 받침）时，需在 -ㄹ 前插入 으 → **-을 수 있어요**。` +
        `例如 먹다（吃）词干末为辅音 먹 → **먹을 수 있어요**（会吃/能吃）；` +
        `읽다（读）→ **읽을 수 있어요**。\n\n` +
        `**ㄷ 不规则**动词 듣다（听）是很好的例子：词汇表中其展望形为 들을（ㄷ 在元音起始词尾前变为 ㄹ），因此是 **들을 수 있어요**。` +
        `请始终使用词汇表中预先给出的 \`prospective\` 形式，不要自行推导不规则变化。`,
      examples: [
        {
          jp: "먹을 수 있어요",
          reading: "meogeul su isseoyo",
          en: "I can eat it.",
          zh: "（我）能吃。",
          code: `import type { Verb, ConjugateVerb } from "typed-korean";


type 먹다 = Verb & { dict:"먹다"; stem:"먹"; inf:"먹어"; past:"먹었"; eu:"먹으"; prospective:"먹을"; formalStem:"먹습니" };

// prospective base "먹을" + 수 있어요  (으 inserted: consonant-final stem)
type S = ConjugateVerb<먹다, "Potential">;
//   ^? "먹을 수 있어요"`,
        },
        {
          jp: "책을 읽을 수 있어요",
          reading: "chaekeul ilgeul su isseoyo",
          en: "I can read books.",
          zh: "（我）能读书。",
          code: `import type { Verb, VerbPart, NounPart, ParticlePart, Sentence } from "typed-korean";


type 읽다 = Verb & { dict:"읽다"; stem:"읽"; inf:"읽어"; past:"읽었"; eu:"읽으"; prospective:"읽을"; formalStem:"읽습니" };

// 읽다 prospective = "읽을" → 읽을 수 있어요
// 책 ends in consonant ㄱ → object particle 을
type S = Sentence<[
  NounPart<"책">, ParticlePart<"을">,
  VerbPart<읽다, "Potential">
]>;
//   ^? "책을 읽을 수 있어요"`,
        },
        {
          jp: "음악을 들을 수 있어요",
          reading: "eumageul deureul su isseoyo",
          en: "I can listen to music.",
          zh: "（我）能听音乐。",
          code: `import type { IrregularVerb, VerbPart, NounPart, ParticlePart, Sentence } from "typed-korean";


// 듣다 — ㄷ-irregular: ㄷ → ㄹ before vowel-initial endings
// prospective = "들을"  (NOT 듣을)
type 듣다 = IrregularVerb & { dict:"듣다"; stem:"듣"; inf:"들어"; past:"들었"; eu:"들으"; prospective:"들을"; formalStem:"듣습니" };

// 음악 ends in consonant ㄱ → object particle 을
type S = Sentence<[
  NounPart<"음악">, ParticlePart<"을">,
  VerbPart<듣다, "Potential">
]>;
//   ^? "음악을 들을 수 있어요"`,
        },
      ],
    },
    {
      id: "i03-3",
      titleEn: "Negation: -(으)ㄹ 수 없어요",
      titleZh: "否定：-(으)ㄹ 수 없어요",
      bodyEn:
        `To say someone **cannot** do something, replace 있어요 with **없어요**: **-(으)ㄹ 수 없어요**. ` +
        `The structure is identical to the affirmative; only the final predicate changes. ` +
        `갈 수 없어요 = "cannot go"; 먹을 수 없어요 = "cannot eat".\n\n` +
        `Because the DSL's \`Potential\` form is hard-wired to produce 있어요, the negated form is not available as a single \`ConjugateVerb\` call. ` +
        `Instead, use \`LiteralPart<"갈 수 없어요">\` for a bare negation, or combine a \`LiteralPart\` for the "없어요" tail inside a full \`Sentence\` to keep the subject and object typed. ` +
        `Note: 없어요 is the 해요체 form of 없다; the 합니다체 equivalent is 없습니다 (covered in point 4).`,
      bodyZh:
        `要表达**不能**做某事，将 있어요 替换为 **없어요**：**-(으)ㄹ 수 없어요**。` +
        `结构与肯定形式完全相同，只有句末谓语不同。` +
        `갈 수 없어요 = "不能去"；먹을 수 없어요 = "不能吃"。\n\n` +
        `由于 DSL 的 \`Potential\` 形式固定产生 있어요，否定形无法通过单一的 \`ConjugateVerb\` 调用得到。` +
        `因此，对于独立的否定形式使用 \`LiteralPart<"갈 수 없어요">\`；` +
        `在完整句子中，将主语、宾语保持为类型化部件，只用 \`LiteralPart\` 承载"X 수 없어요"尾部。` +
        `注意：없어요 是 없다 的 해요체；합니다체 形式为 없습니다（见第 4 点）。`,
      examples: [
        {
          jp: "갈 수 없어요",
          reading: "gal su eopseoyo",
          en: "I cannot go.",
          zh: "（我）不能去。",
          code: `import type { LiteralPart, Sentence } from "typed-korean";


// The DSL's Potential form always produces 있어요.
// For negation, we use a LiteralPart to substitute 없어요.
// prospective of 가다 = "갈"  →  갈 수 없어요
type S = Sentence<[LiteralPart<"갈 수 없어요">]>;
//   ^? "갈 수 없어요"`,
        },
        {
          jp: "저는 고기를 먹을 수 없어요",
          reading: "jeoneun gogireul meogeul su eopseoyo",
          en: "I cannot eat meat.",
          zh: "我不能吃肉。",
          code: `import type { NounPart, PronounPart, ParticlePart, LiteralPart, Sentence } from "typed-korean";


// Subject and object are typed; the potential-negative tail is a LiteralPart.
// prospective of 먹다 = "먹을"  →  먹을 수 없어요
// 고기 ends in vowel → object particle 를
type S = Sentence<[
  PronounPart<"저">, ParticlePart<"는">,
  NounPart<"고기">, ParticlePart<"를">,
  LiteralPart<"먹을 수 없어요">
]>;
//   ^? "저는 고기를 먹을 수 없어요"`,
        },
        {
          jp: "저는 한국어를 말할 수 없어요",
          reading: "jeoneun hangugeoreul malhal su eopseoyo",
          en: "I cannot speak Korean.",
          zh: "我不会说韩语。",
          code: `import type { NounPart, PronounPart, ParticlePart, LiteralPart, Sentence } from "typed-korean";


// 말하다 prospective = "말할"  →  말할 수 없어요  (vowel-final stem 말하 → -ㄹ)
// 한국어 ends in vowel → object particle 를
type S = Sentence<[
  PronounPart<"저">, ParticlePart<"는">,
  NounPart<"한국어">, ParticlePart<"를">,
  LiteralPart<"말할 수 없어요">
]>;
//   ^? "저는 한국어를 말할 수 없어요"`,
        },
      ],
    },
    {
      id: "i03-4",
      titleEn: "Formal speech: -ㄹ/을 수 있습니다 / 없습니다",
      titleZh: "正式体：-ㄹ/을 수 있습니다 / 없습니다",
      bodyEn:
        `In the formal polite register (합니다체), 있어요 → **있습니다** and 없어요 → **없습니다**. ` +
        `The -(으)ㄹ 수 part remains unchanged. ` +
        `갈 수 있습니다 (can go, formal) · 먹을 수 없습니다 (cannot eat, formal).\n\n` +
        `Because neither 있습니다 nor 없습니다 is produced by the DSL's built-in forms, the entire potential/ability tail is written as a \`LiteralPart\` — the subject, object, and topic phrases remain fully typed. ` +
        `This mirrors the approach used for the negation in point 3, and is the recommended pattern whenever the required ending falls outside the DSL's form set.`,
      bodyZh:
        `在正式礼貌体（합니다체）中，있어요 → **있습니다**，없어요 → **없습니다**；` +
        `-(으)ㄹ 수 部分保持不变。` +
        `갈 수 있습니다（能去，正式）· 먹을 수 없습니다（不能吃，正式）。\n\n` +
        `由于 있습니다 和 없습니다 均不在 DSL 的内置形式中，整个能力/否定尾部写为 \`LiteralPart\`，主语、宾语、话题等短语仍保持类型化。` +
        `这与第 3 点否定形的处理方式一致，也是当所需词尾不在 DSL 形式集内时的推荐做法。`,
      examples: [
        {
          jp: "갈 수 있습니다",
          reading: "gal su itseumnida",
          en: "I can go. (formal)",
          zh: "（我）能去。（正式体）",
          code: `import type { LiteralPart, Sentence } from "typed-korean";


// 합니다체: replace 있어요 with 있습니다
// prospective of 가다 = "갈"  →  갈 수 있습니다
type S = Sentence<[LiteralPart<"갈 수 있습니다">]>;
//   ^? "갈 수 있습니다"`,
        },
        {
          jp: "운전을 할 수 없습니다",
          reading: "unjeon-eul hal su eopseumnida",
          en: "I cannot drive. (formal)",
          zh: "（我）不会开车。（正式体）",
          code: `import type { NounPart, ParticlePart, LiteralPart, Sentence } from "typed-korean";


// 운전 ends in consonant ㄴ → object particle 을
// 하다 prospective = "할"  →  할 수 없습니다  (합니다체 negation)
type S = Sentence<[
  NounPart<"운전">, ParticlePart<"을">,
  LiteralPart<"할 수 없습니다">
]>;
//   ^? "운전을 할 수 없습니다"`,
        },
        {
          jp: "저는 차를 운전할 수 있습니다",
          reading: "jeoneun chareul unjeonhal su itseumnida",
          en: "I can drive a car. (formal)",
          zh: "我会开车。（正式体）",
          code: `import type { NounPart, PronounPart, ParticlePart, LiteralPart, Sentence } from "typed-korean";


// 운전하다 prospective = "운전할"  →  운전할 수 있습니다
// 차 ends in vowel → object particle 를
type S = Sentence<[
  PronounPart<"저">, ParticlePart<"는">,
  NounPart<"차">, ParticlePart<"를">,
  LiteralPart<"운전할 수 있습니다">
]>;
//   ^? "저는 차를 운전할 수 있습니다"`,
        },
      ],
    },
  ],
};

export default chapter;
