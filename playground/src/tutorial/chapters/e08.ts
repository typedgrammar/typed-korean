import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "e08",
  level: "elementary",
  order: 8,
  titleEn: "Past tense: 았/었어요",
  titleZh: "过去时：았/었어요",
  summaryEn:
    "Korean marks the past by inserting the past base (already carrying vowel harmony and irregular stem changes) and appending **어요** (해요체) or **습니다** (합니다체). Because harmony is baked into each predicate's `past` field, conjugation in TypeScript is a single form swap — no extra computation needed.\n\nThis chapter covers past-tense verbs in both speech levels and past-tense adjectives, which follow the exact same pattern.",
  summaryZh:
    "韩语通过在动词/形容词词干后加入过去式词基（已内含元音和谐与不规则变化），再接 **어요**（해요체）或 **습니다**（합니다체）来表达过去时态。由于元音和谐已内嵌在每个谓词的 `past` 字段中，TypeScript 里只需切换一个 Form 参数即可。\n\n本章覆盖两种敬语等级的动词过去时，以及形容词过去时（规则完全相同）。",
  points: [
    {
      id: "e08-1",
      titleEn: "Verb past tense — 해요체 (았/었어요)",
      titleZh: "动词过去时 — 해요체（았/었어요）",
      bodyEn:
        "To express a past action in polite informal speech (**해요체**), use `ConjugateVerb<V, \"PastHaeyo\">`. The DSL appends **어요** to the verb's `past` base, which already encodes vowel harmony:\n\n- `past` ending in `ㅏ/ㅗ` stem → **았어요** (e.g. 가다 → 갔어요)\n- all other stems → **었어요** (e.g. 먹다 → 먹었어요)\n\nBecause harmony is pre-baked, you simply swap `\"Haeyo\"` → `\"PastHaeyo\"` — no extra work.",
      bodyZh:
        "在非正式礼貌体（**해요체**）中表达过去动作，使用 `ConjugateVerb<V, \"PastHaeyo\">`。DSL 将 **어요** 接在动词的 `past` 词基后，元音和谐已内嵌其中：\n\n- 词干含 `ㅏ/ㅗ` → **았어요**（如 가다 → 갔어요）\n- 其余词干 → **었어요**（如 먹다 → 먹었어요）\n\n由于和谐已预先计算，只需将 `\"Haeyo\"` 换成 `\"PastHaeyo\"` 即可，无需额外处理。",
      examples: [
        {
          jp: "밥을 먹었어요",
          reading: "babeul meogeosseoyo",
          en: "I ate rice.",
          zh: "我吃了饭。",
          code: `import type { Verb, VerbPart, NounPart, ParticlePart, Sentence } from "typed-korean";


type 먹다 = Verb & {
  dict: "먹다"; stem: "먹"; inf: "먹어"; past: "먹었";
  eu: "먹으"; prospective: "먹을"; formalStem: "먹습니";
};

// PastHaeyo appends 어요 to the past base: 먹었 + 어요 = 먹었어요
type 밥을먹었어요 = Sentence<
  [NounPart<"밥">, ParticlePart<"을">, VerbPart<먹다, "PastHaeyo">]
>;`,
        },
        {
          jp: "어제 갔어요",
          reading: "eoje gasseoyo",
          en: "I went yesterday.",
          zh: "昨天去了。",
          code: `import type { Verb, VerbPart, AdverbPart, Sentence } from "typed-korean";


// 가다: ㅏ-stem → past base 갔 (갔 + 어요 = 갔어요)
type 가다 = Verb & {
  dict: "가다"; stem: "가"; inf: "가"; past: "갔";
  eu: "가"; prospective: "갈"; formalStem: "갑니";
};

type 어제갔어요 = Sentence<
  [AdverbPart<"어제">, VerbPart<가다, "PastHaeyo">]
>;`,
        },
        {
          jp: "저는 한국어를 배웠어요",
          reading: "jeoneun hangugeoreul baewosseoyo",
          en: "I learned Korean.",
          zh: "我学了韩语。",
          code: `import type { Verb, VerbPart, NounPart, PronounPart, ParticlePart, Sentence } from "typed-korean";


type 배우다 = Verb & {
  dict: "배우다"; stem: "배우"; inf: "배워"; past: "배웠";
  eu: "배우"; prospective: "배울"; formalStem: "배웁니";
};

type 저는한국어를배웠어요 = Sentence<
  [
    PronounPart<"저">,
    ParticlePart<"는">,
    NounPart<"한국어">,
    ParticlePart<"를">,
    VerbPart<배우다, "PastHaeyo">,
  ]
>;`,
        },
      ],
    },
    {
      id: "e08-2",
      titleEn: "Verb past tense — 합니다체 (았/었습니다)",
      titleZh: "动词过去时 — 합니다체（았/었습니다）",
      bodyEn:
        "In formal polite speech (**합니다체**), use `ConjugateVerb<V, \"PastHamnida\">`. The DSL appends **습니다** to the same `past` base used for 해요체. The result is the standard written/formal register heard in news broadcasts, official announcements, and presentations.\n\nCompare: **먹었어요** (casual polite) vs **먹었습니다** (formal polite). Both refer to the same past event; only the register differs.",
      bodyZh:
        "在正式礼貌体（**합니다체**）中，使用 `ConjugateVerb<V, \"PastHamnida\">`。DSL 将 **습니다** 接在与해요체相同的 `past` 词基后。这一形式常见于新闻播报、官方公告和演讲等正式场合。\n\n对比：**먹었어요**（非正式礼貌）vs **먹었습니다**（正式礼貌）。两者描述相同的过去事件，区别仅在语域高低。",
      examples: [
        {
          jp: "영화를 봤습니다",
          reading: "yeonghwareul bwatsseumnida",
          en: "I watched a movie.",
          zh: "我看了电影。",
          code: `import type { Verb, VerbPart, NounPart, ParticlePart, Sentence } from "typed-korean";


// 보다: ㅗ-stem → past base 봤 (봤 + 습니다 = 봤습니다)
type 보다 = Verb & {
  dict: "보다"; stem: "보"; inf: "봐"; past: "봤";
  eu: "보"; prospective: "볼"; formalStem: "봅니";
};

type 영화를봤습니다 = Sentence<
  [NounPart<"영화">, ParticlePart<"를">, VerbPart<보다, "PastHamnida">]
>;`,
        },
        {
          jp: "어제 공부했습니다",
          reading: "eoje gongbuhaetsseumnida",
          en: "I studied yesterday.",
          zh: "昨天学习了。",
          code: `import type { HadaVerb, VerbPart, AdverbPart, Sentence } from "typed-korean";


// 하다-verbs: past base ends in 했 (했 + 습니다 = 했습니다)
type 공부하다 = HadaVerb & {
  dict: "공부하다"; stem: "공부하"; inf: "공부해"; past: "공부했";
  eu: "공부하"; prospective: "공부할"; formalStem: "공부합니";
};

type 어제공부했습니다 = Sentence<
  [AdverbPart<"어제">, VerbPart<공부하다, "PastHamnida">]
>;`,
        },
        {
          jp: "친구를 만났습니다",
          reading: "chingureul mannatsseumnida",
          en: "I met a friend.",
          zh: "见到了朋友。",
          code: `import type { Verb, VerbPart, NounPart, ParticlePart, Sentence } from "typed-korean";


type 만나다 = Verb & {
  dict: "만나다"; stem: "만나"; inf: "만나"; past: "만났";
  eu: "만나"; prospective: "만날"; formalStem: "만납니";
};

type 친구를만났습니다 = Sentence<
  [NounPart<"친구">, ParticlePart<"를">, VerbPart<만나다, "PastHamnida">]
>;`,
        },
      ],
    },
    {
      id: "e08-3",
      titleEn: "Vowel harmony is already baked in",
      titleZh: "元音和谐已内嵌于词基",
      bodyEn:
        "You never need to compute **았** vs **었** yourself — the vetted `past` base already encodes the result. For example:\n\n- 마시다 (`past: \"마셨\"`) — irregular ㅣ contraction: 마시 + 었 → 마셨\n- 받다 (`past: \"받았\"`) — ㅏ harmony: 받 + 았 → 받았\n- 듣다 (`past: \"들었\"`) — ㄷ-irregular: 들 + 었 → 들었\n\nJust copy the vetted definition verbatim and use `\"PastHaeyo\"` or `\"PastHamnida\"`.",
      bodyZh:
        "你不需要自己判断用 **았** 还是 **었** — 经过验证的 `past` 词基已内含正确形式。例如：\n\n- 마시다（`past: \"마셨\"`）— ㅣ 收缩不规则：마시 + 었 → 마셨\n- 받다（`past: \"받았\"`）— ㅏ 和谐：받 + 았 → 받았\n- 듣다（`past: \"들었\"`）— ㄷ 不规则：들 + 었 → 들었\n\n只需原样复制经过验证的词基定义，然后使用 `\"PastHaeyo\"` 或 `\"PastHamnida\"` 即可。",
      examples: [
        {
          jp: "커피를 마셨어요",
          reading: "keopireul masyeosseoyo",
          en: "I drank coffee.",
          zh: "喝了咖啡。",
          code: `import type { Verb, VerbPart, NounPart, ParticlePart, Sentence } from "typed-korean";


// 마시다: ㅣ contracts with 어 → 마셨 (not 마시었)
type 마시다 = Verb & {
  dict: "마시다"; stem: "마시"; inf: "마셔"; past: "마셨";
  eu: "마시"; prospective: "마실"; formalStem: "마십니";
};

type 커피를마셨어요 = Sentence<
  [NounPart<"커피">, ParticlePart<"를">, VerbPart<마시다, "PastHaeyo">]
>;`,
        },
        {
          jp: "책을 받았어요",
          reading: "chaegeul badasseoyo",
          en: "I received a book.",
          zh: "收到了书。",
          code: `import type { Verb, VerbPart, NounPart, ParticlePart, Sentence } from "typed-korean";


// 받다: ㅏ vowel harmony → 받았 (not 받었)
type 받다 = Verb & {
  dict: "받다"; stem: "받"; inf: "받아"; past: "받았";
  eu: "받으"; prospective: "받을"; formalStem: "받습니";
};

type 책을받았어요 = Sentence<
  [NounPart<"책">, ParticlePart<"을">, VerbPart<받다, "PastHaeyo">]
>;`,
        },
        {
          jp: "노래를 들었어요",
          reading: "noraereul deureosseoyo",
          en: "I listened to a song.",
          zh: "听了歌。",
          code: `import type { IrregularVerb, VerbPart, NounPart, ParticlePart, Sentence } from "typed-korean";


// 듣다: ㄷ-irregular — stem ㄷ → ㄹ before vowel: 들었
type 듣다 = IrregularVerb & {
  dict: "듣다"; stem: "듣"; inf: "들어"; past: "들었";
  eu: "들으"; prospective: "들을"; formalStem: "듣습니";
};

type 노래를들었어요 = Sentence<
  [NounPart<"노래">, ParticlePart<"를">, VerbPart<듣다, "PastHaeyo">]
>;`,
        },
      ],
    },
    {
      id: "e08-4",
      titleEn: "Adjective past tense — 았/었어요",
      titleZh: "形容词过去时 — 았/었어요",
      bodyEn:
        "Korean adjectives (형용사) conjugate just like verbs. Use `ConjugateAdjective<A, \"PastHaeyo\">` or `ConjugateAdjective<A, \"PastHamnida\">` — the pattern is identical to verbs.\n\nFor example, 좋다 (`past: \"좋았\"`) → **좋았어요** (it was good). Irregular adjectives like 바쁘다 (ㅡ-irregular, `past: \"바빴\"`) and 어렵다 (ㅂ-irregular, `past: \"어려웠\"`) also carry their correct past bases.",
      bodyZh:
        "韩语形容词（형용사）的变化方式与动词完全相同。使用 `ConjugateAdjective<A, \"PastHaeyo\">` 或 `ConjugateAdjective<A, \"PastHamnida\">`，规则与动词一致。\n\n例如，좋다（`past: \"좋았\"`）→ **좋았어요**（那时很好）。不规则形容词如 바쁘다（ㅡ 不规则，`past: \"바빴\"`）和 어렵다（ㅂ 不规则，`past: \"어려웠\"`）同样已在 `past` 词基中存储了正确形式。",
      examples: [
        {
          jp: "날씨가 좋았어요",
          reading: "nalssiga joasseoyo",
          en: "The weather was good.",
          zh: "天气很好（过去）。",
          code: `import type { Adjective, AdjectivePart, NounPart, ParticlePart, Sentence } from "typed-korean";


// 날씨 ends in a vowel (씨) → subject particle 가
type 좋다 = Adjective & {
  dict: "좋다"; stem: "좋"; inf: "좋아"; past: "좋았";
  eu: "좋으"; prospective: "좋을"; formalStem: "좋습니"; attr: "좋은";
};

type 날씨가좋았어요 = Sentence<
  [NounPart<"날씨">, ParticlePart<"가">, AdjectivePart<좋다, "PastHaeyo">]
>;`,
        },
        {
          jp: "어제 바빴어요",
          reading: "eoje bappasseoyo",
          en: "I was busy yesterday.",
          zh: "昨天很忙。",
          code: `import type { Adjective, AdjectivePart, AdverbPart, Sentence } from "typed-korean";


// 바쁘다: ㅡ-irregular → past base 바빴 (바쁘 + 았 → 바빴)
type 바쁘다 = Adjective & {
  dict: "바쁘다"; stem: "바쁘"; inf: "바빠"; past: "바빴";
  eu: "바쁘"; prospective: "바쁠"; formalStem: "바쁩니"; attr: "바쁜";
};

type 어제바빴어요 = Sentence<
  [AdverbPart<"어제">, AdjectivePart<바쁘다, "PastHaeyo">]
>;`,
        },
        {
          jp: "시험이 어려웠어요",
          reading: "siheomi eoryeowosseoyo",
          en: "The exam was difficult.",
          zh: "考试很难（过去）。",
          code: `import type { Adjective, AdjectivePart, NounPart, ParticlePart, Sentence } from "typed-korean";


// 어렵다: ㅂ-irregular → past base 어려웠 (어렵 + 었 → 어려웠)
// 시험 ends in ㅁ (consonant) → subject particle 이
type 어렵다 = Adjective & {
  dict: "어렵다"; stem: "어렵"; inf: "어려워"; past: "어려웠";
  eu: "어려우"; prospective: "어려울"; formalStem: "어렵습니"; attr: "어려운";
};

type 시험이어려웠어요 = Sentence<
  [NounPart<"시험">, ParticlePart<"이">, AdjectivePart<어렵다, "PastHaeyo">]
>;`,
        },
      ],
    },
  ],
};

export default chapter;
