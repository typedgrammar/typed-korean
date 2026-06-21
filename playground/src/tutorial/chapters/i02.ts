import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "i02",
  level: "intermediate",
  order: 2,
  titleEn: "Desire and progressive: -고 싶다, -고 있다",
  titleZh: "愿望与进行：-고 싶다、-고 있다",
  summaryEn:
    "Two of the most useful verb endings in Korean are **-고 싶다** (want to do) and **-고 있다** (be doing / progressive). Both attach to the **verb stem** with -고 as a connector: stem + 고 + 싶어요 or stem + 고 + 있어요. Because -고 is invariant (it never changes regardless of the stem shape), you only need to know the dictionary stem of the verb.\n\n" +
    "In the 해요체 (informal polite) register these endings appear as **-고 싶어요** and **-고 있어요**. In the formal 합니다체 they become **-고 싶습니다** and **-고 있습니다**. The DSL provides dedicated `Want` and `Progressive` forms for `ConjugateVerb` / `VerbPart`, so you can express these patterns with a single type argument.",
  summaryZh:
    "韩语中两个最常用的动词词尾是 **-고 싶다**（想要做……）和 **-고 있다**（正在做……/进行体）。两者均以 -고 为连接成分附加在**动词词干**之后：词干 + 고 + 싶어요 或 词干 + 고 + 있어요。由于 -고 本身不随词干形态变化，只需掌握动词词干即可。\n\n" +
    "在 해요체（非正式尊敬体）中，这两个词尾表现为 **-고 싶어요** 和 **-고 있어요**；在 합니다체（正式尊敬体）中则变为 **-고 싶습니다** 和 **-고 있습니다**。DSL 为 `ConjugateVerb`／`VerbPart` 提供了专用的 `Want` 和 `Progressive` 形式，一个类型参数即可表达这两种语法结构。",
  points: [
    {
      id: "i02-1",
      titleEn: "Wanting to do something: -고 싶어요",
      titleZh: "想做某事：-고 싶어요",
      bodyEn:
        "Attach **-고 싶어요** to the verb stem to express a desire: *I want to ___*. The stem is the dictionary form minus 다. Because the connector -고 is invariant, this pattern is completely regular across all verbs — no stem alternations to worry about.\n\n" +
        "먹다 (eat) → 먹 + 고 싶어요 → **먹고 싶어요**\n" +
        "마시다 (drink) → 마시 + 고 싶어요 → **마시고 싶어요**\n" +
        "자다 (sleep) → 자 + 고 싶어요 → **자고 싶어요**\n\n" +
        "In the DSL, use `VerbPart<V, \"Want\">` inside a `Sentence<[...]>` to produce the full surface string automatically. The `Want` form resolves to **stem + 고 싶어요**.",
      bodyZh:
        "在动词词干后加 **-고 싶어요** 表达愿望：*想做……*。词干即词典形去掉 다。由于连接成分 -고 不变化，这一格式对所有动词完全规则，无需担心词干变化。\n\n" +
        "먹다（吃）→ 먹 + 고 싶어요 → **먹고 싶어요**\n" +
        "마시다（喝）→ 마시 + 고 싶어요 → **마시고 싶어요**\n" +
        "자다（睡）→ 자 + 고 싶어요 → **자고 싶어요**\n\n" +
        "在 DSL 中，在 `Sentence<[...]>` 内使用 `VerbPart<V, \"Want\">` 即可自动生成完整表层形式。`Want` 形式解析为 **词干 + 고 싶어요**。",
      examples: [
        {
          jp: "밥을 먹고 싶어요",
          reading: "babeul meokgo sipeoyo",
          en: "I want to eat (rice / a meal).",
          zh: "想吃饭。",
          code: `import type { Verb, VerbPart, NounPart, ParticlePart, Sentence } from "typed-korean";


type 먹다 = Verb & { dict:"먹다"; stem:"먹"; inf:"먹어"; past:"먹었"; eu:"먹으"; prospective:"먹을"; formalStem:"먹습니" };

type S = Sentence<[
  NounPart<"밥">,
  ParticlePart<"을">,
  VerbPart<먹다, "Want">
]>;
// S = "밥을 먹고 싶어요"`,
        },
        {
          jp: "물을 마시고 싶어요",
          reading: "mureul masigo sipeoyo",
          en: "I want to drink water.",
          zh: "想喝水。",
          code: `import type { Verb, VerbPart, NounPart, ParticlePart, Sentence } from "typed-korean";


type 마시다 = Verb & { dict:"마시다"; stem:"마시"; inf:"마셔"; past:"마셨"; eu:"마시"; prospective:"마실"; formalStem:"마십니" };

type S = Sentence<[
  NounPart<"물">,
  ParticlePart<"을">,
  VerbPart<마시다, "Want">
]>;
// S = "물을 마시고 싶어요"`,
        },
        {
          jp: "자고 싶어요",
          reading: "jago sipeoyo",
          en: "I want to sleep.",
          zh: "想睡觉。",
          code: `import type { Verb, VerbPart, Sentence } from "typed-korean";


type 자다 = Verb & { dict:"자다"; stem:"자"; inf:"자"; past:"잤"; eu:"자"; prospective:"잘"; formalStem:"잡니" };

type S = Sentence<[VerbPart<자다, "Want">]>;
// S = "자고 싶어요"`,
        },
      ],
    },
    {
      id: "i02-2",
      titleEn: "-고 싶어요 with subjects, objects, and destinations",
      titleZh: "-고 싶어요 与主语、宾语、目的地",
      bodyEn:
        "In full sentences the subject is marked with 은/는 (topic) or 이/가 (subject), objects with 을/를, and destination nouns with 에. All these particles follow the standard 받침 rules: use 을 after a consonant-final noun (밥을), 를 after a vowel-final noun (영화를).\n\n" +
        "To express *want to go somewhere*, attach the destination with 에 and use the `Want` form of 가다. For *I*, the pronoun 저 ends in a vowel, so the topic particle is **는**: 저는.\n\n" +
        "In formal 합니다체, simply swap 싶어요 for **싶습니다**. Because the DSL's `Want` form outputs -고 싶어요, build the 합니다체 version with a `LiteralPart<\"싶습니다\">` after the -고 connector — or just note that both registers differ only in that final word.",
      bodyZh:
        "在完整句子中，主语用 은/는（话题）或 이/가（主格），宾语用 을/를，目的地名词用 에。这些助词均遵循标准收音规则：有收音名词接 을（밥을），无收音名词接 를（영화를）。\n\n" +
        "表达「想去某地」时，目的地接 에，动词 가다 用 `Want` 形式。第一人称 저 末尾是元音，因此话题助词用 **는**：저는。\n\n" +
        "합니다体（正式尊敬体）只需将 싶어요 替换为 **싶습니다**。由于 DSL 的 `Want` 形式输出 -고 싶어요，합니다体版本可在 -고 连接成分后使用 `LiteralPart<\"싶습니다\">`，或直接记住两种语体仅末尾词不同。",
      examples: [
        {
          jp: "한국에 가고 싶어요",
          reading: "hanguge gago sipeoyo",
          en: "I want to go to Korea.",
          zh: "想去韩国。",
          code: `import type { Verb, VerbPart, ProperNounPart, ParticlePart, Sentence } from "typed-korean";


type 가다 = Verb & { dict:"가다"; stem:"가"; inf:"가"; past:"갔"; eu:"가"; prospective:"갈"; formalStem:"갑니" };

type S = Sentence<[
  ProperNounPart<"한국">,
  ParticlePart<"에">,
  VerbPart<가다, "Want">
]>;
// S = "한국에 가고 싶어요"`,
        },
        {
          jp: "저는 영화를 보고 싶어요",
          reading: "jeoneun yeonghwareul bogo sipeoyo",
          en: "I want to watch a movie.",
          zh: "我想看电影。",
          code: `import type { Verb, VerbPart, NounPart, PronounPart, ParticlePart, Sentence } from "typed-korean";


type 보다 = Verb & { dict:"보다"; stem:"보"; inf:"봐"; past:"봤"; eu:"보"; prospective:"볼"; formalStem:"봅니" };

type S = Sentence<[
  PronounPart<"저">,
  ParticlePart<"는">,
  NounPart<"영화">,
  ParticlePart<"를">,
  VerbPart<보다, "Want">
]>;
// S = "저는 영화를 보고 싶어요"`,
        },
        {
          jp: "저는 친구를 만나고 싶어요",
          reading: "jeoneun chingureul mannago sipeoyo",
          en: "I want to meet a friend.",
          zh: "我想见朋友。",
          code: `import type { Verb, VerbPart, NounPart, PronounPart, ParticlePart, Sentence } from "typed-korean";


type 만나다 = Verb & { dict:"만나다"; stem:"만나"; inf:"만나"; past:"만났"; eu:"만나"; prospective:"만날"; formalStem:"만납니" };

type S = Sentence<[
  PronounPart<"저">,
  ParticlePart<"는">,
  NounPart<"친구">,
  ParticlePart<"를">,
  VerbPart<만나다, "Want">
]>;
// S = "저는 친구를 만나고 싶어요"`,
        },
      ],
    },
    {
      id: "i02-3",
      titleEn: "Expressing an ongoing action: -고 있어요",
      titleZh: "表达正在进行的动作：-고 있어요",
      bodyEn:
        "The progressive form **-고 있어요** describes an action in progress right now: *I am ___-ing*. It is structurally parallel to -고 싶어요: the connector -고 is the same, but instead of 싶어요 (desire auxiliary) you append **있어요** (existence auxiliary).\n\n" +
        "읽다 (read) → 읽 + 고 있어요 → **읽고 있어요**\n" +
        "먹다 (eat) → 먹 + 고 있어요 → **먹고 있어요**\n" +
        "일하다 (work) → 일하 + 고 있어요 → **일하고 있어요**\n\n" +
        "The time adverb **지금** (now) often co-occurs to make the present-moment meaning explicit. It stands alone as its own eojeol before the verb phrase. In the DSL, `VerbPart<V, \"Progressive\">` produces the full **stem + 고 있어요** surface automatically.",
      bodyZh:
        "进行体 **-고 있어요** 表达「正在做……」。其结构与 -고 싶어요 平行：连接成分 -고 相同，只是将辅助词 싶어요（愿望）替换为 **있어요**（存在辅助词）。\n\n" +
        "읽다（读）→ 읽 + 고 있어요 → **읽고 있어요**\n" +
        "먹다（吃）→ 먹 + 고 있어요 → **먹고 있어요**\n" +
        "일하다（工作）→ 일하 + 고 있어요 → **일하고 있어요**\n\n" +
        "时间副词 **지금**（现在）常与进行体连用，明确表示当下时刻的意义。지금 作为独立어절置于动词短语之前。在 DSL 中，`VerbPart<V, \"Progressive\">` 自动生成 **词干 + 고 있어요** 的完整表层形式。",
      examples: [
        {
          jp: "책을 읽고 있어요",
          reading: "chaeguel ilkgo isseoyo",
          en: "I am reading a book.",
          zh: "正在读书。",
          code: `import type { Verb, VerbPart, NounPart, ParticlePart, Sentence } from "typed-korean";


type 읽다 = Verb & { dict:"읽다"; stem:"읽"; inf:"읽어"; past:"읽었"; eu:"읽으"; prospective:"읽을"; formalStem:"읽습니" };

type S = Sentence<[
  NounPart<"책">,
  ParticlePart<"을">,
  VerbPart<읽다, "Progressive">
]>;
// S = "책을 읽고 있어요"`,
        },
        {
          jp: "밥을 먹고 있어요",
          reading: "babeul meokgo isseoyo",
          en: "I am eating (rice / a meal).",
          zh: "正在吃饭。",
          code: `import type { Verb, VerbPart, NounPart, ParticlePart, Sentence } from "typed-korean";


type 먹다 = Verb & { dict:"먹다"; stem:"먹"; inf:"먹어"; past:"먹었"; eu:"먹으"; prospective:"먹을"; formalStem:"먹습니" };

type S = Sentence<[
  NounPart<"밥">,
  ParticlePart<"을">,
  VerbPart<먹다, "Progressive">
]>;
// S = "밥을 먹고 있어요"`,
        },
        {
          jp: "지금 일하고 있어요",
          reading: "jigeum ilhago isseoyo",
          en: "I am working right now.",
          zh: "现在正在工作。",
          code: `import type { HadaVerb, VerbPart, AdverbPart, Sentence } from "typed-korean";


type 일하다 = HadaVerb & { dict:"일하다"; stem:"일하"; inf:"일해"; past:"일했"; eu:"일하"; prospective:"일할"; formalStem:"일합니" };

type S = Sentence<[AdverbPart<"지금">, VerbPart<일하다, "Progressive">]>;
// S = "지금 일하고 있어요"`,
        },
      ],
    },
    {
      id: "i02-4",
      titleEn: "Richer progressives and the formal register -고 있습니다",
      titleZh: "更丰富的进行体以及正式语体 -고 있습니다",
      bodyEn:
        "Once you are comfortable with the basic progressive, add subject phrases (저는), complements, or longer object phrases to build fuller sentences. The pattern remains: **Subject + (Adverb) + Object + Verb-고 있어요**.\n\n" +
        "For formal 합니다체, replace 있어요 with **있습니다**: 공부하고 있습니다. Because the DSL's `Progressive` form fixes the output as -고 있어요, you build the formal variant using a `LiteralPart<\"있습니다\">` after the -고 connector, **or** simply use a full `LiteralPart` for the predicate.\n\n" +
        "Contrast register:\n" +
        "- 한국어를 배우고 있어요 — casual polite (해요체)\n" +
        "- 한국어를 배우고 있습니다 — formal polite (합니다체)",
      bodyZh:
        "掌握基础进行体之后，可以加入主语短语（저는）、补语或更长的宾语短语，构建更完整的句子。句式依然是：**主语 + （副词）+ 宾语 + 动词-고 있어요**。\n\n" +
        "합니다체（正式尊敬体）将 있어요 替换为 **있습니다**：공부하고 있습니다。由于 DSL 的 `Progressive` 形式固定输出 -고 있어요，正式语体可在 -고 连接成分后用 `LiteralPart<\"있습니다\">` 构建，或直接对整个谓语使用完整的 `LiteralPart`。\n\n" +
        "语体对比：\n" +
        "- 한국어를 배우고 있어요 — 非正式尊敬体（해요체）\n" +
        "- 한국어를 배우고 있습니다 — 正式尊敬体（합니다체）",
      examples: [
        {
          jp: "저는 한국어를 배우고 있어요",
          reading: "jeoneun hangugeoreul baeugo isseoyo",
          en: "I am learning Korean.",
          zh: "我正在学韩语。",
          code: `import type { Verb, VerbPart, NounPart, PronounPart, ParticlePart, Sentence } from "typed-korean";


type 배우다 = Verb & { dict:"배우다"; stem:"배우"; inf:"배워"; past:"배웠"; eu:"배우"; prospective:"배울"; formalStem:"배웁니" };

type S = Sentence<[
  PronounPart<"저">,
  ParticlePart<"는">,
  NounPart<"한국어">,
  ParticlePart<"를">,
  VerbPart<배우다, "Progressive">
]>;
// S = "저는 한국어를 배우고 있어요"`,
        },
        {
          jp: "친구를 기다리고 있어요",
          reading: "chingureul gidarigo isseoyo",
          en: "I am waiting for a friend.",
          zh: "正在等朋友。",
          code: `import type { Verb, VerbPart, NounPart, ParticlePart, Sentence } from "typed-korean";


type 기다리다 = Verb & { dict:"기다리다"; stem:"기다리"; inf:"기다려"; past:"기다렸"; eu:"기다리"; prospective:"기다릴"; formalStem:"기다립니" };

type S = Sentence<[
  NounPart<"친구">,
  ParticlePart<"를">,
  VerbPart<기다리다, "Progressive">
]>;
// S = "친구를 기다리고 있어요"`,
        },
        {
          jp: "지금 공부하고 있습니다",
          reading: "jigeum gongbuhago itsseumnida",
          en: "I am studying right now. (formal)",
          zh: "现在正在学习。（正式体）",
          code: `import type { AdverbPart, LiteralPart, Sentence } from "typed-korean";


// 합니다체 progressive: stem + 고 있습니다
// The DSL's Progressive form outputs -고 있어요 (해요체), so we use LiteralPart for the formal ending.
type S = Sentence<[
  AdverbPart<"지금">,
  LiteralPart<"공부하고 있습니다">
]>;
// S = "지금 공부하고 있습니다"`,
        },
      ],
    },
  ],
};

export default chapter;
