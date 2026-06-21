import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "e10",
  level: "elementary",
  order: 10,
  titleEn: "Adjectives (형용사)",
  titleZh: "形容词",
  summaryEn:
    "Korean adjectives (형용사, also called *descriptive verbs*) conjugate like verbs — they take the same 해요체 and 합니다체 endings — but they differ in two key ways: (1) the **plain present tense is the dictionary form itself** (좋다, not 좋는다); and (2) the **present attributive modifier** (the form that comes before a noun) is **-(으)ㄴ** (좋은, 작은), not -는. The one exception is adjectives built on 있다/없다: because 있다 is originally a verb, its attributive is **-는** (맛있는, 재미있는).\n\nThis chapter covers the two most important forms: the polite present **해요체 Haeyo** and the **attributive -(으)ㄴ / -는**, which lets you place an adjective directly before a noun to describe it.",
  summaryZh:
    "韩语形容词（형용사，又称\"描述动词\"）的变位方式与动词相同——使用同一套해요체和합니다체词尾。但有两点关键差异：(1) **基本现在时就是词典形本身**（좋다，而非好는다）；(2) **现在时定语形**（修饰名词的形式）是 **-(으)ㄴ**（좋은、작은），而非 -는。唯一的例外是以 있다/없다 构成的形容词：因为 있다 本为动词，其定语形仍是 **-는**（맛있는、재미있는）。\n\n本章重点介绍两种最常用的形式：礼貌现在时 **해요체 Haeyo** 以及 **定语形 -(으)ㄴ / -는**，后者可让形容词直接置于名词前起修饰作用。",
  points: [
    {
      id: "e10-1",
      titleEn: "Plain present = dictionary form",
      titleZh: "基本现在时 = 词典形",
      bodyEn:
        "Unlike verbs, which add -는다/-ㄴ다 in the plain (written) present, **adjectives use the dictionary form as-is** for the plain present. So 좋다 means both \"to be good (infinitive)\" and \"it is good (plain present).\" In formal writing or inner monologue, 날씨가 좋다 is perfectly natural — it simply states the fact without the softening of 해요체.\n\nThis is also why the **present attributive of a normal adjective is -(으)ㄴ**, not -는: a verb's attributive is -는 because verbs have -는다 in the plain present; adjectives use -(으)ㄴ because their plain present already ends in -다 without any -는.",
      bodyZh:
        "动词的基本现在时需要加 -는다/-ㄴ다，但**形容词直接用词典形作为基本现在时**。因此 좋다 既是\"好（词典形）\"，也是\"是好的（基本现在时）\"。在正式文章或内心独白中，날씨가 좋다 完全自然，表达一个不带 해요체 柔化色彩的客观陈述。\n\n这也正是**普通形容词的现在时定语形是 -(으)ㄴ** 而非 -는 的原因：动词定语形是 -는，因为动词基本现在时有 -는다；形容词定语形用 -(으)ㄴ，因为它的基本现在时本来就以 -다 结尾，没有 -는。",
      examples: [
        {
          jp: "날씨가 좋다",
          reading: "nalssiga jota",
          en: "The weather is good. (plain/written style)",
          zh: "天气好。（基本/书面体）",
          code: `import type { Adjective, AdjectivePart, NounPart, ParticlePart, Sentence } from "typed-korean";


type 좋다 = Adjective & { dict:"좋다"; stem:"좋"; inf:"좋아"; past:"좋았"; eu:"좋으"; prospective:"좋을"; formalStem:"좋습니"; attr:"좋은" };

// 날씨 ends in ㅣ (vowel-class for particles: 날씨가)
// Dictionary form IS the plain present for adjectives
type 날씨가_좋다 = Sentence<[
  NounPart<"날씨">,
  ParticlePart<"가">,
  AdjectivePart<좋다, "Dictionary">
]>;`,
        },
        {
          jp: "음식이 많다",
          reading: "eumsigi manta",
          en: "There is a lot of food. (plain style)",
          zh: "食物很多。（基本体）",
          code: `import type { Adjective, AdjectivePart, NounPart, ParticlePart, Sentence } from "typed-korean";


type 많다 = Adjective & { dict:"많다"; stem:"많"; inf:"많아"; past:"많았"; eu:"많으"; prospective:"많을"; formalStem:"많습니"; attr:"많은" };

// 음식 ends in ㄱ (받침) → subject particle 이
type 음식이_많다 = Sentence<[
  NounPart<"음식">,
  ParticlePart<"이">,
  AdjectivePart<많다, "Dictionary">
]>;`,
        },
      ],
    },
    {
      id: "e10-2",
      titleEn: "Haeyo polite present — ConjugateAdjective<A, \"Haeyo\">",
      titleZh: "해요체礼貌现在时 — ConjugateAdjective<A, \"Haeyo\">",
      bodyEn:
        "The **해요체 (Haeyo)** form is the default polite spoken register. For adjectives it is formed exactly like a verb: take the 아/어 infinitive and add 요. Because Korean vowel harmony still applies, bright-vowel stems (아/오) take 아요, and all others take 어요.\n\nExamples: 좋다 → 좋아요 (inf 좋아 + 요), 크다 → 커요 (inf 커 + 요), 비싸다 → 비싸요, 맛있다 → 맛있어요.\n\nThe formal equivalent (**합니다체**) uses the pre-니다 formal stem + 다: 좋습니다, 맛있습니다. Use 합니다체 in presentations or formal writing; 해요체 in everyday conversation.",
      bodyZh:
        "**해요체 (Haeyo)** 是默认的礼貌口语形式。形容词的변位方式和动词完全一致：取 아/어 词干再加 요。韩语母音调和依然适用：亮母音词干（아/오）加 아요，其余加 어요。\n\n例如：좋다 → 좋아요（词干 좋아 + 요）、크다 → 커요（词干 커 + 요）、비싸다 → 비싸요、맛있다 → 맛있어요。\n\n正式场合的等价形式（**합니다체**）使用正式词干 + 다：좋습니다、맛있습니다。演讲或正式文章用 합니다체；日常对话用 해요체。",
      examples: [
        {
          jp: "날씨가 좋아요",
          reading: "nalssiga joayo",
          en: "The weather is good.",
          zh: "天气很好。",
          code: `import type { Adjective, AdjectivePart, NounPart, ParticlePart, Sentence } from "typed-korean";


type 좋다 = Adjective & { dict:"좋다"; stem:"좋"; inf:"좋아"; past:"좋았"; eu:"좋으"; prospective:"좋을"; formalStem:"좋습니"; attr:"좋은" };

// Haeyo = inf + "요" = "좋아" + "요" = "좋아요"
type 날씨가_좋아요 = Sentence<[
  NounPart<"날씨">,
  ParticlePart<"가">,
  AdjectivePart<좋다, "Haeyo">
]>;`,
        },
        {
          jp: "음식이 맛있어요",
          reading: "eumsigi masisseoyo",
          en: "The food is delicious.",
          zh: "食物很好吃。",
          code: `import type { Adjective, AdjectivePart, NounPart, ParticlePart, Sentence } from "typed-korean";


// 맛있다 is an 있다-type adjective — Haeyo: inf "맛있어" + 요 = "맛있어요"
type 맛있다 = Adjective & { dict:"맛있다"; stem:"맛있"; inf:"맛있어"; past:"맛있었"; eu:"맛있으"; prospective:"맛있을"; formalStem:"맛있습니"; attr:"맛있는" };

type 음식이_맛있어요 = Sentence<[
  NounPart<"음식">,
  ParticlePart<"이">,
  AdjectivePart<맛있다, "Haeyo">
]>;`,
        },
        {
          jp: "이 옷이 비싸요",
          reading: "i osi bissayo",
          en: "These clothes are expensive.",
          zh: "这件衣服很贵。",
          code: `import type { Adjective, AdjectivePart, NounPart, ParticlePart, Sentence } from "typed-korean";


// 비싸다: inf "비싸" + 요 = "비싸요" (bright vowel ㅏ → 아요, but stem already ends in 아 so 비싸 + 요)
type 비싸다 = Adjective & { dict:"비싸다"; stem:"비싸"; inf:"비싸"; past:"비쌌"; eu:"비싸"; prospective:"비쌀"; formalStem:"비쌉니"; attr:"비싼" };

// 이 = demonstrative "this" (adnominal); 옷 ends in ㅅ (받침) → subject particle 이
type 이_옷이_비싸요 = Sentence<[
  NounPart<"이">,
  NounPart<"옷">,
  ParticlePart<"이">,
  AdjectivePart<비싸다, "Haeyo">
]>;`,
        },
      ],
    },
    {
      id: "e10-3",
      titleEn: "Attributive -(으)ㄴ — adjective before a noun",
      titleZh: "定语形 -(으)ㄴ —— 形容词修饰名词",
      bodyEn:
        "To place an adjective directly before a noun (attributive position), use the **-(으)ㄴ** form — stored in the `attr` field of each adjective type. After a vowel-final stem, just ㄴ is added: 크다 → 큰, 비싸다 → 비싼. After a consonant-final stem, 은 is added: 좋다 → 좋은, 작다 → 작은.\n\nThe word order is **[adjective in -(으)ㄴ form] + [noun]** — the modifier always comes before the modified noun.\n\n**Important exception:** adjectives derived from 있다/없다 (맛있다, 재미있다, 맛없다 …) use **-는** for the attributive, not -(으)ㄴ. This is because 있다 is historically a verb. So: 맛있는 음식 (NOT 맛있은 음식), 재미있는 영화.",
      bodyZh:
        "要将形容词直接置于名词前（定语位置），需使用 **-(으)ㄴ** 形式——即每个形容词类型的 `attr` 字段。母音结尾词干直接加 ㄴ：크다 → 큰、비싸다 → 비싼。子音结尾词干加 은：좋다 → 좋은、작다 → 작은。\n\n词序为 **[形容词-(으)ㄴ形] + [名词]**，修饰语始终置于被修饰名词之前。\n\n**重要例外：** 由 있다/없다 构成的形容词（맛있다、재미있다、맛없다……）定语形用 **-는** 而非 -(으)ㄴ，因为 있다 历史上是动词。因此：맛있는 음식（不是 맛있은 음식）、재미있는 영화。",
      examples: [
        {
          jp: "좋은 사람",
          reading: "joeun saram",
          en: "A good person",
          zh: "好人",
          code: `import type { Adjective, AdjectivePart, NounPart, Sentence } from "typed-korean";


type 좋다 = Adjective & { dict:"좋다"; stem:"좋"; inf:"좋아"; past:"좋았"; eu:"좋으"; prospective:"좋을"; formalStem:"좋습니"; attr:"좋은" };

// Attributive = attr field = "좋은"
// [좋은] + [사람] — modifier before noun
type 좋은_사람 = Sentence<[
  AdjectivePart<좋다, "Attributive">,
  NounPart<"사람">
]>;`,
        },
        {
          jp: "맛있는 음식",
          reading: "masinneun eumsik",
          en: "Delicious food",
          zh: "美味的食物",
          code: `import type { Adjective, AdjectivePart, NounPart, Sentence } from "typed-korean";


// 맛있다 is 있다-type → attributive is -는 (stored in attr:"맛있는"), NOT -은
type 맛있다 = Adjective & { dict:"맛있다"; stem:"맛있"; inf:"맛있어"; past:"맛있었"; eu:"맛있으"; prospective:"맛있을"; formalStem:"맛있습니"; attr:"맛있는" };

type 맛있는_음식 = Sentence<[
  AdjectivePart<맛있다, "Attributive">,
  NounPart<"음식">
]>;`,
        },
        {
          jp: "재미있는 영화",
          reading: "jaemiinneun yeonghwa",
          en: "An interesting / fun movie",
          zh: "有趣的电影",
          code: `import type { Adjective, AdjectivePart, NounPart, Sentence } from "typed-korean";


// 재미있다 is also 있다-type → attributive is -는 (attr:"재미있는")
type 재미있다 = Adjective & { dict:"재미있다"; stem:"재미있"; inf:"재미있어"; past:"재미있었"; eu:"재미있으"; prospective:"재미있을"; formalStem:"재미있습니"; attr:"재미있는" };

// 영화 = movie (vowel-final noun, no 받침)
type 재미있는_영화 = Sentence<[
  AdjectivePart<재미있다, "Attributive">,
  NounPart<"영화">
]>;`,
        },
      ],
    },
    {
      id: "e10-4",
      titleEn: "Hamnida formal polite — 해요체 vs 합니다체",
      titleZh: "합니다체正式礼貌体 —— 해요체 vs 합니다체",
      bodyEn:
        "For formal situations — presentations, news broadcasts, business emails, meeting speeches — use the **합니다체 (Hamnida)** form. It is built from the pre-니다 formal stem + 다: 좋습니다 (formalStem 좋습니 + 다), 춥습니다, 어렵습니다.\n\nIn everyday conversation, 해요체 is warmer and more natural. In formal or public contexts, 합니다체 is expected. Both are fully polite — the distinction is one of register and context, not of respect level.\n\nA handy rule: if you can imagine a news anchor saying the sentence on TV, 합니다체 is appropriate. If it's a chat with a colleague or shopkeeper, 해요체 is the right choice.",
      bodyZh:
        "在正式场合——演讲、新闻播报、商务邮件、会议发言——请使用 **합니다체 (Hamnida)** 形式。其构成方式为：正式词干 + 다。例如：좋습니다（正式词干 좋습니 + 다）、춥습니다、어렵습니다。\n\n日常对话中，해요체 更亲切自然；正式或公开场合，합니다체 是社会期待的选择。两者都是礼貌体——区别在于语域和语境，而非敬意等级。\n\n一个实用判断法则：如果能想象电视新闻主播说这句话，용합니다체；如果是和同事或店员的日常对话，用해요체。",
      examples: [
        {
          jp: "날씨가 좋습니다",
          reading: "nalssiga josseumnida",
          en: "The weather is good. (formal polite)",
          zh: "天气很好。（正式礼貌体）",
          code: `import type { Adjective, AdjectivePart, NounPart, ParticlePart, Sentence } from "typed-korean";


type 좋다 = Adjective & { dict:"좋다"; stem:"좋"; inf:"좋아"; past:"좋았"; eu:"좋으"; prospective:"좋을"; formalStem:"좋습니"; attr:"좋은" };

// Hamnida = formalStem + "다" = "좋습니" + "다" = "좋습니다"
type 날씨가_좋습니다 = Sentence<[
  NounPart<"날씨">,
  ParticlePart<"가">,
  AdjectivePart<좋다, "Hamnida">
]>;`,
        },
        {
          jp: "한국어가 어렵습니다",
          reading: "hangugeo ga eo ryeopseumnida",
          en: "Korean is difficult. (formal polite)",
          zh: "韩语很难。（正式礼貌体）",
          code: `import type { Adjective, AdjectivePart, NounPart, ParticlePart, Sentence } from "typed-korean";


// 어렵다 — ㅂ-irregular: formalStem "어렵습니"
type 어렵다 = Adjective & { dict:"어렵다"; stem:"어렵"; inf:"어려워"; past:"어려웠"; eu:"어려우"; prospective:"어려울"; formalStem:"어렵습니"; attr:"어려운" };

// 한국어 ends in vowel ㅓ → subject particle 가
// Hamnida = "어렵습니" + "다" = "어렵습니다"
type 한국어가_어렵습니다 = Sentence<[
  NounPart<"한국어">,
  ParticlePart<"가">,
  AdjectivePart<어렵다, "Hamnida">
]>;`,
        },
        {
          jp: "날씨가 춥습니다",
          reading: "nalssiga chupseumnida",
          en: "The weather is cold. (formal polite)",
          zh: "天气很冷。（正式礼貌体）",
          code: `import type { Adjective, AdjectivePart, NounPart, ParticlePart, Sentence } from "typed-korean";


// 춥다 — ㅂ-irregular: formalStem "춥습니"
type 춥다 = Adjective & { dict:"춥다"; stem:"춥"; inf:"추워"; past:"추웠"; eu:"추우"; prospective:"추울"; formalStem:"춥습니"; attr:"추운" };

// Hamnida = "춥습니" + "다" = "춥습니다"
type 날씨가_춥습니다 = Sentence<[
  NounPart<"날씨">,
  ParticlePart<"가">,
  AdjectivePart<춥다, "Hamnida">
]>;`,
        },
      ],
    },
  ],
};

export default chapter;
