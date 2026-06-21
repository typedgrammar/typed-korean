import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "e03",
  level: "elementary",
  order: 3,
  titleEn: "있다 / 없다 and the Location Particle 에",
  titleZh: "存在与处所：있다/없다、에",
  summaryEn:
    "Korean uses **있다** (있어요/있습니다) to say something *exists* or that you *have* something, " +
    "and **없다** (없어요/없습니다) to say it *does not exist* or you *do not have* it.\n\n" +
    "The particle **에** marks a static location — the place where something *is*. " +
    "Combine it with 있어요/없어요 to say \"X is at Y\" or \"X is not at Y\".",
  summaryZh:
    "韩语用 **있다**（있어요/있습니다）表示某事物「存在」或「拥有」，" +
    "用 **없다**（없어요/없습니다）表示「不存在」或「没有」。\n\n" +
    "助词 **에** 标记静态处所——某物所在的地点。将它与 있어요/없어요 连用，" +
    "即可表达「某物在某处」或「某物不在某处」。",

  points: [
    // ─────────────────────────────────────────────────────────────────────
    {
      id: "e03-1",
      titleEn: "있어요 — existence and possession",
      titleZh: "있어요 — 存在与拥有",
      bodyEn:
        "**있다** is the existential/possessive verb. In 해요체 (polite informal) it becomes **있어요**.\n\n" +
        "The subject takes **이** after a consonant-final noun and **가** after a vowel-final noun. " +
        "In a possession reading (\"I have…\") the possessor is the topic (는/은) and the possessed item is the subject.\n\n" +
        "합니다체 (formal polite) gives **있습니다**.",
      bodyZh:
        "**있다** 是表示存在或拥有的动词。해요체（礼貌非正式体）变为 **있어요**。\n\n" +
        "主语助词：辅音结尾名词接 **이**，元音结尾名词接 **가**。" +
        "表示「拥有」时，拥有者做话题（는/은），被拥有物做主语。\n\n" +
        "합니다체（正式礼貌体）为 **있습니다**。",
      examples: [
        {
          jp: "책이 있어요",
          reading: "chaegi isseoyo",
          en: "There is a book. / I have a book.",
          zh: "有书。/ 我有书。",
          code: `import type { Verb, VerbPart, NounPart, ParticlePart, Sentence } from "typed-korean";

type 있다 = Verb & { dict:"있다"; stem:"있"; inf:"있어"; past:"있었"; eu:"있으"; prospective:"있을"; formalStem:"있습니" };

// 책 ends in ㄱ (consonant) → subject particle 이
type Result = Sentence<[
  NounPart<"책">,
  ParticlePart<"이">,
  VerbPart<있다, "Haeyo">
]>;
// Result = "책이 있어요"`,
        },
        {
          jp: "친구가 있어요",
          reading: "chinguga isseoyo",
          en: "I have a friend. / There is a friend.",
          zh: "有朋友。/ 我有朋友。",
          code: `import type { Verb, VerbPart, NounPart, ParticlePart, Sentence } from "typed-korean";

type 있다 = Verb & { dict:"있다"; stem:"있"; inf:"있어"; past:"있었"; eu:"있으"; prospective:"있을"; formalStem:"있습니" };

// 친구 ends in 우 (vowel) → subject particle 가
type Result = Sentence<[
  NounPart<"친구">,
  ParticlePart<"가">,
  VerbPart<있다, "Haeyo">
]>;
// Result = "친구가 있어요"`,
        },
        {
          jp: "시간이 있어요",
          reading: "sigani isseoyo",
          en: "I have time. / There is time.",
          zh: "有时间。",
          code: `import type { Verb, VerbPart, NounPart, ParticlePart, Sentence } from "typed-korean";

type 있다 = Verb & { dict:"있다"; stem:"있"; inf:"있어"; past:"있었"; eu:"있으"; prospective:"있을"; formalStem:"있습니" };

// 시간 ends in ㄴ (consonant) → subject particle 이
type Result = Sentence<[
  NounPart<"시간">,
  ParticlePart<"이">,
  VerbPart<있다, "Haeyo">
]>;
// Result = "시간이 있어요"`,
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────────────
    {
      id: "e03-2",
      titleEn: "없어요 — non-existence and lack",
      titleZh: "없어요 — 不存在与没有",
      bodyEn:
        "**없다** is the negative counterpart of 있다: it means \"there is no…\" or \"I don't have…\". " +
        "In 해요체 it becomes **없어요**; in 합니다체 it becomes **없습니다**.\n\n" +
        "The subject particle allomorphs are the same as with 있다: **이** after a consonant, **가** after a vowel.",
      bodyZh:
        "**없다** 是 있다 的否定对应词，意为「不存在」或「没有」。" +
        "해요체 变为 **없어요**，합니다체 变为 **없습니다**。\n\n" +
        "주어（主语）助词与 있다 相同：辅音结尾名词接 **이**，元音结尾名词接 **가**。",
      examples: [
        {
          jp: "시간이 없어요",
          reading: "sigani eopseoyo",
          en: "I don't have time. / There is no time.",
          zh: "没有时间。",
          code: `import type { Verb, VerbPart, NounPart, ParticlePart, Sentence } from "typed-korean";

type 없다 = Verb & { dict:"없다"; stem:"없"; inf:"없어"; past:"없었"; eu:"없으"; prospective:"없을"; formalStem:"없습니" };

// 시간 ends in ㄴ (consonant) → subject particle 이
type Result = Sentence<[
  NounPart<"시간">,
  ParticlePart<"이">,
  VerbPart<없다, "Haeyo">
]>;
// Result = "시간이 없어요"`,
        },
        {
          jp: "책이 없어요",
          reading: "chaegi eopseoyo",
          en: "There is no book. / I don't have a book.",
          zh: "没有书。",
          code: `import type { Verb, VerbPart, NounPart, ParticlePart, Sentence } from "typed-korean";

type 없다 = Verb & { dict:"없다"; stem:"없"; inf:"없어"; past:"없었"; eu:"없으"; prospective:"없을"; formalStem:"없습니" };

// 책 ends in ㄱ (consonant) → subject particle 이
type Result = Sentence<[
  NounPart<"책">,
  ParticlePart<"이">,
  VerbPart<없다, "Haeyo">
]>;
// Result = "책이 없어요"`,
        },
        {
          jp: "친구가 없어요",
          reading: "chinguga eopseoyo",
          en: "I don't have any friends.",
          zh: "没有朋友。",
          code: `import type { Verb, VerbPart, NounPart, ParticlePart, Sentence } from "typed-korean";

type 없다 = Verb & { dict:"없다"; stem:"없"; inf:"없어"; past:"없었"; eu:"없으"; prospective:"없을"; formalStem:"없습니" };

// 친구 ends in 우 (vowel) → subject particle 가
type Result = Sentence<[
  NounPart<"친구">,
  ParticlePart<"가">,
  VerbPart<없다, "Haeyo">
]>;
// Result = "친구가 없어요"`,
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────────────
    {
      id: "e03-3",
      titleEn: "에 — the static location particle",
      titleZh: "에 — 静态处所助词",
      bodyEn:
        "The particle **에** marks the location where something *is* (or the destination of movement). " +
        "When combined with 있어요/없어요 it answers the question \"where is X?\".\n\n" +
        "에 has **no allomorphs** — it attaches to any noun regardless of 받침. " +
        "Do not confuse it with **에서**, which marks the place where an *action* occurs.",
      bodyZh:
        "助词 **에** 标记某物所在的静态位置（或移动的目标）。" +
        "与 있어요/없어요 搭配，用于回答「X 在哪里？」。\n\n" +
        "에 **没有变体**——无论名词是否有받침，一律接 에。" +
        "注意与 **에서** 区分：에서 表示动作发生的场所。",
      examples: [
        {
          jp: "집에 있어요",
          reading: "jibe isseoyo",
          en: "I am at home. / (Someone/it) is at home.",
          zh: "在家。",
          code: `import type { Verb, VerbPart, NounPart, ParticlePart, Sentence } from "typed-korean";

type 있다 = Verb & { dict:"있다"; stem:"있"; inf:"있어"; past:"있었"; eu:"있으"; prospective:"있을"; formalStem:"있습니" };

// 에 attaches to 집 (no space); 있어요 follows with a space
type Result = Sentence<[
  NounPart<"집">,
  ParticlePart<"에">,
  VerbPart<있다, "Haeyo">
]>;
// Result = "집에 있어요"`,
        },
        {
          jp: "저는 집에 있어요",
          reading: "jeoneun jibe isseoyo",
          en: "I am at home.",
          zh: "我在家。",
          code: `import type { Verb, VerbPart, NounPart, PronounPart, ParticlePart, Sentence } from "typed-korean";

type 있다 = Verb & { dict:"있다"; stem:"있"; inf:"있어"; past:"있었"; eu:"있으"; prospective:"있을"; formalStem:"있습니" };

// 저 is vowel-final → topic 는; 집에 = location; 있어요 = Haeyo
type Result = Sentence<[
  PronounPart<"저">,
  ParticlePart<"는">,
  NounPart<"집">,
  ParticlePart<"에">,
  VerbPart<있다, "Haeyo">
]>;
// Result = "저는 집에 있어요"`,
        },
        {
          jp: "방에 없어요",
          reading: "bange eopseoyo",
          en: "(It/they) is not in the room.",
          zh: "不在房间里。",
          code: `import type { Verb, VerbPart, NounPart, ParticlePart, Sentence } from "typed-korean";

type 없다 = Verb & { dict:"없다"; stem:"없"; inf:"없어"; past:"없었"; eu:"없으"; prospective:"없을"; formalStem:"없습니" };

// 방 ends in ㅇ (consonant) → 에 attaches with no space
type Result = Sentence<[
  NounPart<"방">,
  ParticlePart<"에">,
  VerbPart<없다, "Haeyo">
]>;
// Result = "방에 없어요"`,
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────────────
    {
      id: "e03-4",
      titleEn: "합니다체 — 있습니다 / 없습니다",
      titleZh: "합니다체 — 있습니다 / 없습니다",
      bodyEn:
        "Korean has two main polite registers. **해요체** (있어요/없어요) is used in everyday conversation. " +
        "**합니다체** (있습니다/없습니다) is the formal written or professional register — " +
        "typical in presentations, news broadcasts, and official settings.\n\n" +
        "Both registers use the same subject and location particles; only the verb ending changes. " +
        "The `Hamnida` form appends **다** to the `formalStem` (있습니 → 있습니다; 없습니 → 없습니다).",
      bodyZh:
        "韩语有两种主要的礼貌语体。**해요체**（있어요/없어요）用于日常对话；" +
        "**합니다체**（있습니다/없습니다）是正式的书面或职业语体——" +
        "常见于演讲、新闻播报和官方场合。\n\n" +
        "两种语体使用相同的主语和处所助词，只有动词结尾不同。" +
        "`Hamnida` 形式将 **다** 附加在 `formalStem` 之后（있습니→있습니다；없습니→없습니다）。",
      examples: [
        {
          jp: "책이 있습니다",
          reading: "chaegi itsseumnida",
          en: "There is a book. (formal)",
          zh: "有书。（正式）",
          code: `import type { Verb, VerbPart, NounPart, ParticlePart, Sentence } from "typed-korean";

type 있다 = Verb & { dict:"있다"; stem:"있"; inf:"있어"; past:"있었"; eu:"있으"; prospective:"있을"; formalStem:"있습니" };

// Hamnida: formalStem + 다 = "있습니다"
type Result = Sentence<[
  NounPart<"책">,
  ParticlePart<"이">,
  VerbPart<있다, "Hamnida">
]>;
// Result = "책이 있습니다"`,
        },
        {
          jp: "시간이 없습니다",
          reading: "sigani eopseumnida",
          en: "There is no time. (formal)",
          zh: "没有时间。（正式）",
          code: `import type { Verb, VerbPart, NounPart, ParticlePart, Sentence } from "typed-korean";

type 없다 = Verb & { dict:"없다"; stem:"없"; inf:"없어"; past:"없었"; eu:"없으"; prospective:"없을"; formalStem:"없습니" };

// Hamnida: formalStem + 다 = "없습니다"
type Result = Sentence<[
  NounPart<"시간">,
  ParticlePart<"이">,
  VerbPart<없다, "Hamnida">
]>;
// Result = "시간이 없습니다"`,
        },
        {
          jp: "저는 학교에 있습니다",
          reading: "jeoneun hakgyoe itsseumnida",
          en: "I am at school. (formal)",
          zh: "我在学校。（正式）",
          code: `import type { Verb, VerbPart, NounPart, PronounPart, ParticlePart, Sentence } from "typed-korean";

type 있다 = Verb & { dict:"있다"; stem:"있"; inf:"있어"; past:"있었"; eu:"있으"; prospective:"있을"; formalStem:"있습니" };

// 학교 is vowel-final → 에 attaches directly; Hamnida = "있습니다"
type Result = Sentence<[
  PronounPart<"저">,
  ParticlePart<"는">,
  NounPart<"학교">,
  ParticlePart<"에">,
  VerbPart<있다, "Hamnida">
]>;
// Result = "저는 학교에 있습니다"`,
        },
      ],
    },
  ],
};

export default chapter;
