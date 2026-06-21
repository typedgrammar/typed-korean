import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "e05",
  level: "elementary",
  order: 5,
  titleEn: "합니다체: the formal style and questions",
  titleZh: "합니다체：格式体与疑问",
  summaryEn:
    "Korean has two main polite speech levels. The **해요체** (informal polite) is used in everyday conversation, while the **합니다체** (formal polite) appears in news broadcasts, public announcements, business presentations, and formal writing. This chapter introduces `ConjugateVerb<V, \"Hamnida\">` for declarative statements and `ConjugateVerb<V, \"HamnidaQ\">` for formal questions.\n\nThe key allomorph rule: if the verb's stem ends in a **vowel**, the formal ending is **-ㅂ니다** (갑니다, 옵니다); if the stem ends in a **consonant**, it is **-습니다** (먹습니다, 읽습니다). 하다 verbs always take **-합니다**. The same pattern applies to adjectives.",
  summaryZh:
    "韩语有两种主要的敬语体系。**해요체**（非正式敬语）用于日常对话，而**합니다체**（正式敬语）出现在新闻播报、公共广播、商务演示和正式写作中。本章介绍用于陈述句的 `ConjugateVerb<V, \"Hamnida\">` 和用于正式疑问句的 `ConjugateVerb<V, \"HamnidaQ\">`。\n\n关键的语音变化规则：若动词词干以**元音**结尾，正式结尾为**-ㅂ니다**（갑니다、옵니다）；若词干以**辅音**结尾，则为**-습니다**（먹습니다、읽습니다）。하다 类动词始终使用**-합니다**。形容词遵循相同的规则。",
  points: [
    {
      id: "e05-1",
      titleEn: "Declarative: Verb + 합니다 / 습니다",
      titleZh: "陈述句：动词 + 합니다 / 습니다",
      bodyEn:
        "To make a formal polite statement, use `ConjugateVerb<V, \"Hamnida\">`, which appends the invariant suffix **-다** to the verb's `formalStem`. The surface form is either **-ㅂ니다** (vowel-final stem) or **-습니다** (consonant-final stem).\n\nThis is the form you hear in flight-safety announcements (\"저희는 곧 착륙합니다\"), hotel lobbies, and formal speeches. It sounds more distant and professional than 해요체.",
      bodyZh:
        "要构成正式敬语的陈述句，使用 `ConjugateVerb<V, \"Hamnida\">`，它将不变后缀 **-다** 附加到动词的 `formalStem`。表层形式为 **-ㅂ니다**（元音结尾词干）或 **-습니다**（辅音结尾词干）。\n\n这是您在飞机安全广播（\"저희는 곧 착륙합니다\"）、酒店大堂和正式演讲中听到的形式。它比해요체听起来更加正式、疏远。",
      examples: [
        {
          jp: "저는 갑니다",
          reading: "jeoneun gamnida",
          en: "I am going.",
          zh: "我去。",
          code: `import type { Verb, VerbPart, PronounPart, ParticlePart, Sentence } from "typed-korean";


type 가다 = Verb & { dict:"가다"; stem:"가"; inf:"가"; past:"갔"; eu:"가"; prospective:"갈"; formalStem:"갑니" };

type S = Sentence<[
  PronounPart<"저">,
  ParticlePart<"는">,
  VerbPart<가다, "Hamnida">
]>;
// "저는 갑니다"`,
        },
        {
          jp: "책을 읽습니다",
          reading: "chaegeul ilseumnida",
          en: "I read a book.",
          zh: "我读书。",
          code: `import type { Verb, VerbPart, NounPart, ParticlePart, Sentence } from "typed-korean";


type 읽다 = Verb & { dict:"읽다"; stem:"읽"; inf:"읽어"; past:"읽었"; eu:"읽으"; prospective:"읽을"; formalStem:"읽습니" };

type S = Sentence<[
  NounPart<"책">,
  ParticlePart<"을">,
  VerbPart<읽다, "Hamnida">
]>;
// "책을 읽습니다"`,
        },
        {
          jp: "저는 학생입니다",
          reading: "jeoneun haksaengimnida",
          en: "I am a student.",
          zh: "我是学生。",
          code: `import type { CopulaPart, PronounPart, ParticlePart, Sentence } from "typed-korean";


type S = Sentence<[
  PronounPart<"저">,
  ParticlePart<"는">,
  CopulaPart<"학생", "Hamnida">
]>;
// "저는 학생입니다"`,
        },
      ],
    },
    {
      id: "e05-2",
      titleEn: "Questions: Verb + 합니까 / 습니까?",
      titleZh: "疑问句：动词 + 합니까 / 습니까？",
      bodyEn:
        "To form a formal polite yes/no question, use `ConjugateVerb<V, \"HamnidaQ\">`, which appends **-까** to the verb's `formalStem`. The result is **-ㅂ니까** or **-습니까** depending on whether the stem is vowel-final or consonant-final.\n\nA written question mark `?` is conventionally added after the sentence. Use a `PunctuationPart<\"?\">` in the `Sentence` builder — it attaches to the preceding word with no space.\n\nCompare: 해요체 rises in intonation to ask \"가요?\"; 합니다체 uses the dedicated question suffix \"갑니까?\".",
      bodyZh:
        "要构成正式敬语的是非疑问句，使用 `ConjugateVerb<V, \"HamnidaQ\">`，它将 **-까** 附加到动词的 `formalStem`。根据词干是否以元音或辅音结尾，结果为 **-ㅂ니까** 或 **-습니까**。\n\n书写时通常在句末加上问号 `?`。在 `Sentence` 构建器中使用 `PunctuationPart<\"?\">` — 它会紧贴前一个词，不加空格。\n\n对比：해요체 通过语调上升来提问\"가요?\"；합니다체 使用专用疑问后缀\"갑니까?\"。",
      examples: [
        {
          jp: "무엇을 합니까?",
          reading: "mueoseul hamnikka",
          en: "What do you do?",
          zh: "您做什么？",
          code: `import type { Verb, VerbPart, ParticlePart, PunctuationPart, LiteralPart, Sentence } from "typed-korean";


type 하다 = Verb & { dict:"하다"; stem:"하"; inf:"해"; past:"했"; eu:"하"; prospective:"할"; formalStem:"합니" };

type S = Sentence<[
  LiteralPart<"무엇">,
  ParticlePart<"을">,
  VerbPart<하다, "HamnidaQ">,
  PunctuationPart<"?">
]>;
// "무엇을 합니까?"`,
        },
        {
          jp: "어디에 갑니까?",
          reading: "eodie gamnikka",
          en: "Where are you going?",
          zh: "您去哪里？",
          code: `import type { Verb, VerbPart, ParticlePart, PunctuationPart, LiteralPart, Sentence } from "typed-korean";


type 가다 = Verb & { dict:"가다"; stem:"가"; inf:"가"; past:"갔"; eu:"가"; prospective:"갈"; formalStem:"갑니" };

type S = Sentence<[
  LiteralPart<"어디">,
  ParticlePart<"에">,
  VerbPart<가다, "HamnidaQ">,
  PunctuationPart<"?">
]>;
// "어디에 갑니까?"`,
        },
        {
          jp: "한국어를 배웁니까?",
          reading: "hangugeoreul baeumnikka",
          en: "Are you learning Korean?",
          zh: "您在学韩语吗？",
          code: `import type { Verb, VerbPart, ParticlePart, PunctuationPart, LiteralPart, Sentence } from "typed-korean";


type 배우다 = Verb & { dict:"배우다"; stem:"배우"; inf:"배워"; past:"배웠"; eu:"배우"; prospective:"배울"; formalStem:"배웁니" };

type S = Sentence<[
  LiteralPart<"한국어">,
  ParticlePart<"를">,
  VerbPart<배우다, "HamnidaQ">,
  PunctuationPart<"?">
]>;
// "한국어를 배웁니까?"`,
        },
      ],
    },
    {
      id: "e05-3",
      titleEn: "The ㅂ니다 vs 습니다 allomorph rule",
      titleZh: "ㅂ니다 与 습니다 的变体规则",
      bodyEn:
        "The formal ending has two surface shapes, determined entirely by the verb's `formalStem`:\n\n- **Vowel-final stem → -ㅂ니다 / -ㅂ니까**: 가다 → 갑니다, 오다 → 옵니다, 마시다 → 마십니다\n- **Consonant-final stem → -습니다 / -습니까**: 먹다 → 먹습니다, 읽다 → 읽습니다\n- **하다 verbs → -합니다 / -합니까**: 공부하다 → 공부합니다\n\nThe `formalStem` field in each vetted type definition already encodes this choice, so you never need to compute it yourself.",
      bodyZh:
        "正式结尾有两种表层形式，完全由动词的 `formalStem` 决定：\n\n- **元音结尾词干 → -ㅂ니다 / -ㅂ니까**：가다 → 갑니다，오다 → 옵니다，마시다 → 마십니다\n- **辅音结尾词干 → -습니다 / -습니까**：먹다 → 먹습니다，읽다 → 읽습니다\n- **하다 类动词 → -합니다 / -합니까**：공부하다 → 공부합니다\n\n每个经过验证的类型定义中的 `formalStem` 字段已经编码了这个选择，因此您无需自己计算。",
      examples: [
        {
          jp: "친구가 옵니다",
          reading: "chinguga omnida",
          en: "A friend is coming.",
          zh: "朋友来了。",
          code: `import type { Verb, VerbPart, NounPart, ParticlePart, Sentence } from "typed-korean";


type 오다 = Verb & { dict:"오다"; stem:"오"; inf:"와"; past:"왔"; eu:"오"; prospective:"올"; formalStem:"옵니" };

type S = Sentence<[
  NounPart<"친구">,
  ParticlePart<"가">,
  VerbPart<오다, "Hamnida">
]>;
// "친구가 옵니다"`,
        },
        {
          jp: "밥을 먹습니다",
          reading: "babeul meokseumnida",
          en: "I eat rice.",
          zh: "我吃饭。",
          code: `import type { Verb, VerbPart, NounPart, ParticlePart, Sentence } from "typed-korean";


type 먹다 = Verb & { dict:"먹다"; stem:"먹"; inf:"먹어"; past:"먹었"; eu:"먹으"; prospective:"먹을"; formalStem:"먹습니" };

type S = Sentence<[
  NounPart<"밥">,
  ParticlePart<"을">,
  VerbPart<먹다, "Hamnida">
]>;
// "밥을 먹습니다"`,
        },
        {
          jp: "한국어를 공부합니다",
          reading: "hangugeoreul gongbuhamnida",
          en: "I study Korean.",
          zh: "我学习韩语。",
          code: `import type { HadaVerb, VerbPart, ParticlePart, LiteralPart, Sentence } from "typed-korean";


type 공부하다 = HadaVerb & { dict:"공부하다"; stem:"공부하"; inf:"공부해"; past:"공부했"; eu:"공부하"; prospective:"공부할"; formalStem:"공부합니" };

type S = Sentence<[
  LiteralPart<"한국어">,
  ParticlePart<"를">,
  VerbPart<공부하다, "Hamnida">
]>;
// "한국어를 공부합니다"`,
        },
      ],
    },
    {
      id: "e05-4",
      titleEn: "Formal adjectives and contrasting 해요체 vs 합니다체",
      titleZh: "正式体形容词及해요체与합니다체的对比",
      bodyEn:
        "Adjectives (형용사) follow the exact same formal pattern as verbs: `ConjugateAdjective<A, \"Hamnida\">` appends **-다** to the adjective's `formalStem`.\n\nSpeech-level comparison:\n| Style | Declarative | Question |\n|-------|-------------|----------|\n| 해요체 | 날씨가 좋아요 | 날씨가 좋아요? |\n| 합니다체 | 날씨가 좋습니다 | 날씨가 좋습니까? |\n\nThe 합니다체 is preferred in formal contexts; 해요체 is natural in daily speech. Both are polite and acceptable.",
      bodyZh:
        "形容词（형용사）遵循与动词完全相同的正式体规则：`ConjugateAdjective<A, \"Hamnida\">` 将 **-다** 附加到形容词的 `formalStem`。\n\n语体对比：\n| 语体 | 陈述句 | 疑问句 |\n|------|--------|--------|\n| 해요체 | 날씨가 좋아요 | 날씨가 좋아요? |\n| 합니다체 | 날씨가 좋습니다 | 날씨가 좋습니까? |\n\n합니다체 更适合正式场合；해요체 在日常对话中更自然。两者都是礼貌的表达方式，均可接受。",
      examples: [
        {
          jp: "날씨가 좋습니다",
          reading: "nalssiga joseumnida",
          en: "The weather is good.",
          zh: "天气很好。",
          code: `import type { Adjective, AdjectivePart, NounPart, ParticlePart, Sentence } from "typed-korean";


type 좋다 = Adjective & { dict:"좋다"; stem:"좋"; inf:"좋아"; past:"좋았"; eu:"좋으"; prospective:"좋을"; formalStem:"좋습니"; attr:"좋은" };

type S = Sentence<[
  NounPart<"날씨">,
  ParticlePart<"가">,
  AdjectivePart<좋다, "Hamnida">
]>;
// "날씨가 좋습니다"`,
        },
        {
          jp: "커피가 비쌉니다",
          reading: "keopiga bissamnida",
          en: "Coffee is expensive.",
          zh: "咖啡很贵。",
          code: `import type { Adjective, AdjectivePart, NounPart, ParticlePart, Sentence } from "typed-korean";


type 비싸다 = Adjective & { dict:"비싸다"; stem:"비싸"; inf:"비싸"; past:"비쌌"; eu:"비싸"; prospective:"비쌀"; formalStem:"비쌉니"; attr:"비싼" };

type S = Sentence<[
  NounPart<"커피">,
  ParticlePart<"가">,
  AdjectivePart<비싸다, "Hamnida">
]>;
// "커피가 비쌉니다"`,
        },
        {
          jp: "한국어가 어렵습니다",
          reading: "hangugeoga eoryeopseumnida",
          en: "Korean is difficult.",
          zh: "韩语很难。",
          code: `import type { Adjective, AdjectivePart, ParticlePart, LiteralPart, Sentence } from "typed-korean";


type 어렵다 = Adjective & { dict:"어렵다"; stem:"어렵"; inf:"어려워"; past:"어려웠"; eu:"어려우"; prospective:"어려울"; formalStem:"어렵습니"; attr:"어려운" };

type S = Sentence<[
  LiteralPart<"한국어">,
  ParticlePart<"가">,
  AdjectivePart<어렵다, "Hamnida">
]>;
// "한국어가 어렵습니다"`,
        },
      ],
    },
  ],
};

export default chapter;
