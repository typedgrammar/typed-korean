import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "e09",
  level: "elementary",
  order: 9,
  titleEn: "Negation: 안 and -지 않다",
  titleZh: "否定：안 与 -지 않다",
  summaryEn:
    "Korean has two ways to negate a verb or adjective. **Short negation** places the adverb **안** directly before the predicate: 안 가요 (don't go). **Long negation** attaches **-지 않아요** to the verb/adjective stem: 가지 않아요 (do not go). Both produce polite 해요체 sentences; the 합니다체 equivalents use 안 + 합니다체 or -지 않습니다.\n\nThe two patterns are largely interchangeable, but long negation is slightly more formal and is required when the predicate is a 하다 verb split across an object (공부를 안 해요 is fine, but 공부를 안 공부해요 is not — say 공부를 하지 않아요 instead).",
  summaryZh:
    "韩语有两种否定动词或形容词的方式。**短否定**将副词 **안** 直接放在谓语前：안 가요（不去）。**长否定**将 **-지 않아요** 附加在动词/形容词词干后：가지 않아요（不去）。两者均为 해요체（非正式礼貌体）；합니다체（正式礼貌体）对应형式为 안 + 합니다体 或 -지 않습니다。\n\n两种形式在大多数情况下可互换，但长否定略显正式。当 하다 动词与宾语拆分使用时，须用长否定：공부를 하지 않아요（不学习），而非 *안 공부해요。",
  points: [
    {
      id: "e09-1",
      titleEn: "Short negation: 안 before a verb",
      titleZh: "短否定：안 放在动词前",
      bodyEn:
        "Place **안** immediately before any action verb in its conjugated form. The verb itself is conjugated normally; 안 simply negates it.\n\n안 가요 (안 + 가요) — the verb 가다 is still conjugated to 해요체 (가요); 안 precedes it with a space. This pattern works for all simple verbs in any tense or speech level: 안 갔어요 (didn't go), 안 갑니다 (don't go, formal).\n\nNote: 안 cannot be used with 하다 verbs in their fused form (you cannot say *안 공부해요 meaning 'don't study'; instead say 공부를 안 해요 — see point 2).",
      bodyZh:
        "将 **안** 直接置于动词变位形式之前。动词本身按正常규则变位，안 仅起否定作用。\n\n안 가요 = 안 + 가요：动词 가다 仍按 해요체 变位为 가요，안 在其前加空格。此格式适用于所有简单动词的任意时态和语体：안 갔어요（没去）、안 갑니다（不去，正式体）。\n\n注意：안 不能直接用于 하다 动词的合并形式（不可说 *안 공부해요 表示\"不学习\"；应说 공부를 안 해요——见第2点）。",
      examples: [
        {
          jp: "안 가요",
          reading: "an gayo",
          en: "I don't go. / (Someone) doesn't go.",
          zh: "（我/他）不去。",
          code: `import type { Verb, VerbPart, LiteralPart, Sentence } from "typed-korean";


type 가다 = Verb & { dict:"가다"; stem:"가"; inf:"가"; past:"갔"; eu:"가"; prospective:"갈"; formalStem:"갑니" };

type S = Sentence<[LiteralPart<"안">, VerbPart<가다, "Haeyo">]>;
//   ^? "안 가요"`,
        },
        {
          jp: "저는 학교에 안 가요",
          reading: "jeoneun hakgyoe an gayo",
          en: "I don't go to school.",
          zh: "我不去学校。",
          code: `import type { Verb, VerbPart, NounPart, PronounPart, ParticlePart, LiteralPart, Sentence } from "typed-korean";


type 가다 = Verb & { dict:"가다"; stem:"가"; inf:"가"; past:"갔"; eu:"가"; prospective:"갈"; formalStem:"갑니" };

type S = Sentence<[
  PronounPart<"저">,
  ParticlePart<"는">,
  NounPart<"학교">,
  ParticlePart<"에">,
  LiteralPart<"안">,
  VerbPart<가다, "Haeyo">
]>;
//   ^? "저는 학교에 안 가요"`,
        },
        {
          jp: "저도 안 와요",
          reading: "jeodo an wayo",
          en: "I'm not coming either.",
          zh: "我也不来。",
          code: `import type { Verb, VerbPart, PronounPart, ParticlePart, LiteralPart, Sentence } from "typed-korean";


type 오다 = Verb & { dict:"오다"; stem:"오"; inf:"와"; past:"왔"; eu:"오"; prospective:"올"; formalStem:"옵니" };

type S = Sentence<[
  PronounPart<"저">,
  ParticlePart<"도">,
  LiteralPart<"안">,
  VerbPart<오다, "Haeyo">
]>;
//   ^? "저도 안 와요"`,
        },
      ],
    },
    {
      id: "e09-2",
      titleEn: "Short negation 안 with an object noun",
      titleZh: "短否定 안 与宾语名词",
      bodyEn:
        "When a verb takes an object, 안 still goes immediately before the verb — after the object phrase. The word order is: **Subject + Object + 안 + Verb**.\n\n밥을 안 먹어요 — the object 밥을 comes first, then 안 먹어요. This mirrors the standard Korean SOV order.\n\nFor 하다 verbs, Korean splits the noun and 하다 and inserts 안 before 해요: 공부를 안 해요 (don't study), 일을 안 해요 (don't work). This is the only correct short-negation form for 하다 verbs.",
      bodyZh:
        "当动词带有宾语时，안 仍紧接在动词之前——即置于宾语短语之后。语序为：**主语 + 宾语 + 안 + 动词**。\n\n밥을 안 먹어요——宾语 밥을 在前，然后是 안 먹어요。这符合韩语标准的 SOV 语序。\n\n对于 하다 动词，韩语将名词与 하다 拆开，在 해요 前插入 안：공부를 안 해요（不学习）、일을 안 해요（不工作）。这是 하다 动词短否定的唯一正确形式。",
      examples: [
        {
          jp: "밥을 안 먹어요",
          reading: "babeul an meogeoyo",
          en: "I don't eat (rice/food).",
          zh: "（我）不吃饭。",
          code: `import type { Verb, VerbPart, NounPart, ParticlePart, LiteralPart, Sentence } from "typed-korean";


type 먹다 = Verb & { dict:"먹다"; stem:"먹"; inf:"먹어"; past:"먹었"; eu:"먹으"; prospective:"먹을"; formalStem:"먹습니" };

type S = Sentence<[
  NounPart<"밥">,
  ParticlePart<"을">,
  LiteralPart<"안">,
  VerbPart<먹다, "Haeyo">
]>;
//   ^? "밥을 안 먹어요"`,
        },
        {
          jp: "커피를 안 마셔요",
          reading: "keopireul an masyeoyo",
          en: "I don't drink coffee.",
          zh: "（我）不喝咖啡。",
          code: `import type { Verb, VerbPart, NounPart, ParticlePart, LiteralPart, Sentence } from "typed-korean";


type 마시다 = Verb & { dict:"마시다"; stem:"마시"; inf:"마셔"; past:"마셨"; eu:"마시"; prospective:"마실"; formalStem:"마십니" };

type S = Sentence<[
  NounPart<"커피">,
  ParticlePart<"를">,
  LiteralPart<"안">,
  VerbPart<마시다, "Haeyo">
]>;
//   ^? "커피를 안 마셔요"`,
        },
        {
          jp: "오늘은 공부를 안 해요",
          reading: "oneureun gongbureul an haeyo",
          en: "Today I'm not studying.",
          zh: "今天（我）不学习。",
          code: `import type { HadaVerb, VerbPart, NounPart, ParticlePart, LiteralPart, Sentence } from "typed-korean";


type 하다 = HadaVerb & { dict:"하다"; stem:"하"; inf:"해"; past:"했"; eu:"하"; prospective:"할"; formalStem:"합니" };

type S = Sentence<[
  NounPart<"오늘">,
  ParticlePart<"은">,
  NounPart<"공부">,
  ParticlePart<"를">,
  LiteralPart<"안">,
  VerbPart<하다, "Haeyo">
]>;
//   ^? "오늘은 공부를 안 해요"`,
        },
      ],
    },
    {
      id: "e09-3",
      titleEn: "Long negation: -지 않아요",
      titleZh: "长否定：-지 않아요",
      bodyEn:
        "Long negation attaches **-지 않아요** to the verb **stem** (the dictionary form minus 다). This is more formal and emphatic than 안 and is always grammatically safe — even with 하다 verbs.\n\n가다 → 가지 않아요 (stem 가 + -지 않아요). 먹다 → 먹지 않아요 (stem 먹 + -지 않아요).\n\nThe 합니다체 equivalent replaces 않아요 with 않습니다: 가지 않습니다, 먹지 않습니다. Long negation is the form you should use in writing and formal speech.",
      bodyZh:
        "长否定将 **-지 않아요** 附加在动词**词干**（词典形去掉다）之后。比 안 更正式、更有强调意味，且对所有动词（包括 하다 动词）均适用。\n\n가다 → 가지 않아요（词干 가 + -지 않아요）；먹다 → 먹지 않아요（词干 먹 + -지 않아요）。\n\n합니다체（正式礼貌体）将 않아요 替换为 않습니다：가지 않습니다、먹지 않습니다。长否定是书面语和正式场合的首选形式。",
      examples: [
        {
          jp: "가지 않아요",
          reading: "gaji anayo",
          en: "I don't go. / (Someone) doesn't go.",
          zh: "（我/他）不去。",
          code: `import type { Verb, ConjugateVerb } from "typed-korean";


type 가다 = Verb & { dict:"가다"; stem:"가"; inf:"가"; past:"갔"; eu:"가"; prospective:"갈"; formalStem:"갑니" };

type S = ConjugateVerb<가다, "Negative">;
//   ^? "가지 않아요"`,
        },
        {
          jp: "저는 학교에 가지 않아요",
          reading: "jeoneun hakgyoe gaji anayo",
          en: "I don't go to school.",
          zh: "我不去学校。",
          code: `import type { Verb, VerbPart, NounPart, PronounPart, ParticlePart, Sentence } from "typed-korean";


type 가다 = Verb & { dict:"가다"; stem:"가"; inf:"가"; past:"갔"; eu:"가"; prospective:"갈"; formalStem:"갑니" };

type S = Sentence<[
  PronounPart<"저">,
  ParticlePart<"는">,
  NounPart<"학교">,
  ParticlePart<"에">,
  VerbPart<가다, "Negative">
]>;
//   ^? "저는 학교에 가지 않아요"`,
        },
        {
          jp: "밥을 먹지 않아요",
          reading: "babeul meokji anayo",
          en: "I don't eat (rice/food).",
          zh: "（我）不吃饭。",
          code: `import type { Verb, VerbPart, NounPart, ParticlePart, Sentence } from "typed-korean";


type 먹다 = Verb & { dict:"먹다"; stem:"먹"; inf:"먹어"; past:"먹었"; eu:"먹으"; prospective:"먹을"; formalStem:"먹습니" };

type S = Sentence<[
  NounPart<"밥">,
  ParticlePart<"을">,
  VerbPart<먹다, "Negative">
]>;
//   ^? "밥을 먹지 않아요"`,
        },
      ],
    },
    {
      id: "e09-4",
      titleEn: "Negating adjectives with -지 않아요",
      titleZh: "用 -지 않아요 否定形容词",
      bodyEn:
        "Adjectives use exactly the same long-negation pattern: **adjective stem + -지 않아요**. The short-negation adverb 안 also works before adjectives (안 바빠요), but -지 않아요 is more common in writing.\n\n좋다 → 좋지 않아요 · 바쁘다 → 바쁘지 않아요 · 춥다 → 춥지 않아요.\n\nFor formal 합니다체, replace 않아요 with 않습니다. Because the DSL's `Negative` form for adjectives resolves to -지 않아요, the 합니다체 version is built with a `LiteralPart<\"않습니다\">` after the stem+지 fragment.",
      bodyZh:
        "形容词使用与动词完全相同的长否定形式：**形容词词干 + -지 않아요**。안 也可置于形容词前（안 바빠요），但 -지 않아요 在书面语中更常用。\n\n좋다 → 좋지 않아요 · 바쁘다 → 바쁘지 않아요 · 춥다 → 춥지 않아요。\n\n합니다体将 않아요 替换为 않습니다。由于 DSL 的 `Negative` 形容词形式固定解析为 -지 않아요，합니다体版本需在词干+지 之后使用 `LiteralPart<\"않습니다\">`。",
      examples: [
        {
          jp: "좋지 않아요",
          reading: "jochi anayo",
          en: "It's not good.",
          zh: "不好。",
          code: `import type { Adjective, ConjugateAdjective } from "typed-korean";


type 좋다 = Adjective & { dict:"좋다"; stem:"좋"; inf:"좋아"; past:"좋았"; eu:"좋으"; prospective:"좋을"; formalStem:"좋습니"; attr:"좋은" };

type S = ConjugateAdjective<좋다, "Negative">;
//   ^? "좋지 않아요"`,
        },
        {
          jp: "오늘은 바쁘지 않아요",
          reading: "oneureun bapeuji anayo",
          en: "I'm not busy today.",
          zh: "今天不忙。",
          code: `import type { Adjective, AdjectivePart, NounPart, ParticlePart, Sentence } from "typed-korean";


type 바쁘다 = Adjective & { dict:"바쁘다"; stem:"바쁘"; inf:"바빠"; past:"바빴"; eu:"바쁘"; prospective:"바쁠"; formalStem:"바쁩니"; attr:"바쁜" };

type S = Sentence<[
  NounPart<"오늘">,
  ParticlePart<"은">,
  AdjectivePart<바쁘다, "Negative">
]>;
//   ^? "오늘은 바쁘지 않아요"`,
        },
        {
          jp: "날씨가 춥지 않습니다",
          reading: "nalssiga chupji aneumnida",
          en: "The weather is not cold. (formal)",
          zh: "天气不冷。（正式体）",
          code: `import type { Adjective, NounPart, ParticlePart, LiteralPart, Sentence } from "typed-korean";


type 춥다 = Adjective & { dict:"춥다"; stem:"춥"; inf:"추워"; past:"추웠"; eu:"추우"; prospective:"추울"; formalStem:"춥습니"; attr:"추운" };

// 합니다체 long negation: stem + "지 않습니다"
// Not in the DSL's Negative form (which gives -지 않아요), so we use LiteralPart.
type S = Sentence<[
  NounPart<"날씨">,
  ParticlePart<"가">,
  LiteralPart<"춥지 않습니다">
]>;
//   ^? "날씨가 춥지 않습니다"`,
        },
      ],
    },
  ],
};

export default chapter;
