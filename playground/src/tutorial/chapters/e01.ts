import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "e01",
  level: "elementary",
  order: 1,
  titleEn: "Noun sentences: the copula 이다",
  titleZh: "名词谓语句：이다",
  summaryEn:
    "Korean noun sentences follow the pattern **A는 B이에요/예요** (polite informal, 해요체) or **A는 B입니다** (formal polite, 합니다체). The copula **이다** attaches directly to the preceding noun — there is no space before it. Its exact shape depends on whether that noun ends in a consonant (받침): a consonant-final noun takes **이에요**, while a vowel-final noun contracts to **예요**.\n\n" +
    "The **topic particle** 은/는 introduces the subject of the sentence. It too has two forms: **은** after a consonant-final noun and **는** after a vowel-final noun. Learning to spot 받침 is therefore the single most important skill for Korean particle and copula selection.",
  summaryZh:
    "韩语名词谓语句的基本句式是 **A는 B이에요/예요**（非正式尊敬体，해요체）或 **A는 B입니다**（正式尊敬体，합니다체）。系动词 **이다** 直接附在名词后，中间不加空格。具体形态取决于前面名词是否有收音（받침）：有收音时用 **이에요**，无收音时缩合为 **예요**。\n\n" +
    "**主题助词** 은/는 用于引出句子的话题。它同样有两个形态：名词有收音时用 **은**，无收音时用 **는**。因此，判断 받침 是掌握韩语助词和系动词变形最关键的能力。",
  points: [
    {
      id: "e01-1",
      titleEn: "The topic particle 은/는",
      titleZh: "主题助词 은/는",
      bodyEn:
        "Before you can build a noun sentence, you need the **topic particle** 은/는. It marks what the sentence is *about*.\n\n" +
        "The rule is purely phonological: if the noun ends in a **consonant (받침)**, attach **은**; if it ends in a **vowel**, attach **는**. For example, **이것** ends in ㅅ → **이것은**; **저** ends in ㅓ (a vowel) → **저는**.\n\n" +
        "In the `Sentence<[...]>` style the particle is a `ParticlePart<\"은\">` or `ParticlePart<\"는\">` placed immediately after the noun part — no space is inserted between them because particles are *attaching* parts.",
      bodyZh:
        "构成名词谓语句之前，先要掌握**主题助词** 은/는，它用于标记句子所谈论的主题。\n\n" +
        "规则完全基于音韵：名词末尾有**收音（받침）**时接 **은**，末尾为**元音**时接 **는**。例如 **이것** 末尾是 ㅅ → **이것은**；**저** 末尾是元音 ㅓ → **저는**。\n\n" +
        "在 `Sentence<[...]>` 写法中，助词写作 `ParticlePart<\"은\">` 或 `ParticlePart<\"는\">`，紧跟在名词词部之后——因为助词是'附着型'词部，系统不会在其前插入空格。",
      examples: [
        {
          jp: "저는 학생이에요",
          reading: "jeoneun haksaengieyo",
          en: "I am a student.",
          zh: "我是学生。",
          code: `import type { CopulaPart, PronounPart, ParticlePart, Sentence } from "typed-korean";


// 저 ends in a vowel → 는; 학생 ends in ㅇ (consonant) → 이에요
type S = Sentence<[
  PronounPart<"저">,
  ParticlePart<"는">,
  CopulaPart<"학생", "Haeyo">
]>;
// S resolves to "저는 학생이에요"`,
        },
        {
          jp: "이것은 책이에요",
          reading: "igeoseun chaegieyo",
          en: "This is a book.",
          zh: "这是书。",
          code: `import type { CopulaPart, PronounPart, ParticlePart, Sentence } from "typed-korean";


// 이것 ends in ㅅ (consonant) → 은; 책 ends in ㄱ (consonant) → 이에요
type S = Sentence<[
  PronounPart<"이것">,
  ParticlePart<"은">,
  CopulaPart<"책", "Haeyo">
]>;
// S resolves to "이것은 책이에요"`,
        },
        {
          jp: "그는 친구예요",
          reading: "geuneun chinguye yo",
          en: "He is a friend.",
          zh: "他是朋友。",
          code: `import type { CopulaPart, PronounPart, ParticlePart, Sentence } from "typed-korean";


// 그 ends in a vowel → 는; 친구 ends in 구 (vowel ㅜ) → 예요 (Batchim false)
type S = Sentence<[
  PronounPart<"그">,
  ParticlePart<"는">,
  CopulaPart<"친구", "Haeyo", false>
]>;
// S resolves to "그는 친구예요"`,
        },
      ],
    },
    {
      id: "e01-2",
      titleEn: "해요체 copula after a consonant-final noun: 이에요",
      titleZh: "해요체系动词接有收音名词：이에요",
      bodyEn:
        "When the noun before 이다 ends in a **consonant (받침)**, the polite informal (해요체) form is **이에요**. The linking vowel 이 is required to bridge the consonant coda and the ending.\n\n" +
        "In the DSL, use `CopulaPart<\"학생\", \"Haeyo\">` — the third argument defaults to `true` (has 받침), so you can omit it. The `Sentence` builder concatenates it directly to the previous eojeol *without* a space, producing **학생이에요**.\n\n" +
        "Common consonant-final nouns: 학생 ㅇ, 선생님 ㅁ, 책 ㄱ, 집 ㅂ, 친구 — wait, 친구 ends in 구 (vowel). Always check the final jamo!",
      bodyZh:
        "当 이다 前面的名词末尾有**收音（받침）**时，非正式尊敬体（해요체）的形态是 **이에요**。이 作为连接母音，将收音和词尾衔接起来。\n\n" +
        "在 DSL 中写作 `CopulaPart<\"학생\", \"Haeyo\">`——第三个参数默认为 `true`（有收音），可以省略。`Sentence` 构建器会将其直接与前一어절拼接，中间无空格，结果为 **학생이에요**。\n\n" +
        "常见有收音名词举例：학생（ㅇ收音）、선생님（ㅁ收音）、책（ㄱ收音）、집（ㅂ收音）。注意每次都要确认最后一个字母！",
      examples: [
        {
          jp: "저는 학생이에요",
          reading: "jeoneun haksaengieyo",
          en: "I am a student.",
          zh: "我是学生。",
          code: `import type { CopulaPart, PronounPart, ParticlePart, Sentence } from "typed-korean";


// 학생 ends in ㅇ → Batchim true (default) → 이에요
type S = Sentence<[
  PronounPart<"저">,
  ParticlePart<"는">,
  CopulaPart<"학생", "Haeyo">
]>;
// S = "저는 학생이에요"`,
        },
        {
          jp: "저는 선생님이에요",
          reading: "jeoneun seonsaengnim ieyo",
          en: "I am a teacher.",
          zh: "我是老师。",
          code: `import type { CopulaPart, PronounPart, ParticlePart, Sentence } from "typed-korean";


// 선생님 ends in ㅁ (consonant) → Batchim true → 이에요
type S = Sentence<[
  PronounPart<"저">,
  ParticlePart<"는">,
  CopulaPart<"선생님", "Haeyo">
]>;
// S = "저는 선생님이에요"`,
        },
        {
          jp: "이것은 책이에요",
          reading: "igeoseun chaegieyo",
          en: "This is a book.",
          zh: "这是书。",
          code: `import type { CopulaPart, PronounPart, ParticlePart, Sentence } from "typed-korean";


// 이것 ends in ㅅ → 은; 책 ends in ㄱ → Batchim true → 이에요
type S = Sentence<[
  PronounPart<"이것">,
  ParticlePart<"은">,
  CopulaPart<"책", "Haeyo">
]>;
// S = "이것은 책이에요"`,
        },
      ],
    },
    {
      id: "e01-3",
      titleEn: "해요체 copula after a vowel-final noun: 예요",
      titleZh: "해요체系动词接无收音名词：예요",
      bodyEn:
        "When the noun ends in a **vowel** (no 받침), the copula contracts: 이에요 → **예요**. The 이 elides into the preceding vowel. This is a regular phonological contraction and applies to all vowel-final nouns without exception.\n\n" +
        "In the DSL, pass `false` as the third argument to `CopulaPart`: `CopulaPart<\"의자\", \"Haeyo\", false>` → **의자예요**.\n\n" +
        "Common vowel-final nouns: 의자 (chair), 가수 (singer), 학교 (school), 커피 (coffee), 영화 (movie), 나무 (tree).",
      bodyZh:
        "当名词末尾是**元音**（无收音）时，系动词发生缩合：이에요 → **예요**，即 이 融入前面的元音。这是一种规律性的音韵缩合，适用于所有无收音名词，无例外。\n\n" +
        "在 DSL 中，将第三个参数设为 `false`：`CopulaPart<\"의자\", \"Haeyo\", false>` → **의자예요**。\n\n" +
        "常见无收音名词：의자（椅子）、가수（歌手）、학교（学校）、커피（咖啡）、영화（电影）、나무（树）。",
      examples: [
        {
          jp: "이것은 의자예요",
          reading: "igeoseun uijayeyo",
          en: "This is a chair.",
          zh: "这是椅子。",
          code: `import type { CopulaPart, PronounPart, ParticlePart, Sentence } from "typed-korean";


// 의자 ends in 자 (vowel ㅏ) → Batchim false → 예요
type S = Sentence<[
  PronounPart<"이것">,
  ParticlePart<"은">,
  CopulaPart<"의자", "Haeyo", false>
]>;
// S = "이것은 의자예요"`,
        },
        {
          jp: "그는 가수예요",
          reading: "geuneun gasuyeyo",
          en: "He is a singer.",
          zh: "他是歌手。",
          code: `import type { CopulaPart, PronounPart, ParticlePart, Sentence } from "typed-korean";


// 가수 ends in 수 (vowel ㅜ) → Batchim false → 예요
type S = Sentence<[
  PronounPart<"그">,
  ParticlePart<"는">,
  CopulaPart<"가수", "Haeyo", false>
]>;
// S = "그는 가수예요"`,
        },
        {
          jp: "이것은 커피예요",
          reading: "igeoseun keopiyeyo",
          en: "This is coffee.",
          zh: "这是咖啡。",
          code: `import type { CopulaPart, PronounPart, ParticlePart, Sentence } from "typed-korean";


// 커피 ends in 피 (vowel ㅣ) → Batchim false → 예요
type S = Sentence<[
  PronounPart<"이것">,
  ParticlePart<"은">,
  CopulaPart<"커피", "Haeyo", false>
]>;
// S = "이것은 커피예요"`,
        },
      ],
    },
    {
      id: "e01-4",
      titleEn: "합니다체: the formal copula 입니다",
      titleZh: "합니다체：正式系动词 입니다",
      bodyEn:
        "Korean has two levels of polite speech. The **해요체** (informal polite) forms 이에요/예요 are used in everyday conversation. The **합니다체** (formal polite) form **입니다** is used in presentations, news broadcasts, official announcements, and formal writing.\n\n" +
        "Crucially, 입니다 does **not** change with 받침 — it always attaches as-is regardless of whether the noun ends in a consonant or a vowel. In the DSL: `CopulaPart<\"학생\", \"Hamnida\">` → **학생입니다**; `CopulaPart<\"가수\", \"Hamnida\", false>` → **가수입니다**.\n\n" +
        "Compare the two registers side by side: 학생**이에요** (casual polite) vs 학생**입니다** (formal polite). The meaning is identical; only the register differs.",
      bodyZh:
        "韩语有两种礼貌语体。**해요체**（非正式尊敬体）的形态 이에요/예요 用于日常对话；**합니다체**（正式尊敬体）的形态 **입니다** 用于演讲、新闻播报、官方通知及正式书面语。\n\n" +
        "关键一点：입니다 **不随收音变化**——无论名词末尾是辅音还是元音，均直接附加 입니다。DSL 写法：`CopulaPart<\"학생\", \"Hamnida\">` → **학생입니다**；`CopulaPart<\"가수\", \"Hamnida\", false>` → **가수입니다**（第三参数可省略，不影响结果）。\n\n" +
        "两种语体对比：학생**이에요**（非正式礼貌）vs 학생**입니다**（正式礼貌）。含义相同，仅语域不同。",
      examples: [
        {
          jp: "저는 학생입니다",
          reading: "jeoneun haksaengimnida",
          en: "I am a student. (formal)",
          zh: "我是学生。（正式）",
          code: `import type { CopulaPart, PronounPart, ParticlePart, Sentence } from "typed-korean";


// Hamnida form: always 입니다, regardless of 받침
type S = Sentence<[
  PronounPart<"저">,
  ParticlePart<"는">,
  CopulaPart<"학생", "Hamnida">
]>;
// S = "저는 학생입니다"`,
        },
        {
          jp: "그는 가수입니다",
          reading: "geuneun gasuimnida",
          en: "He is a singer. (formal)",
          zh: "他是歌手。（正式）",
          code: `import type { CopulaPart, PronounPart, ParticlePart, Sentence } from "typed-korean";


// 가수 is vowel-final, but Hamnida is always 입니다 — no Batchim split
type S = Sentence<[
  PronounPart<"그">,
  ParticlePart<"는">,
  CopulaPart<"가수", "Hamnida", false>
]>;
// S = "그는 가수입니다"`,
        },
        {
          jp: "이것은 의자입니다",
          reading: "igeoseun uijaimnida",
          en: "This is a chair. (formal)",
          zh: "这是椅子。（正式）",
          code: `import type { CopulaPart, PronounPart, ParticlePart, Sentence } from "typed-korean";


// Contrast: 의자예요 (해요체) vs 의자입니다 (합니다체)
type S = Sentence<[
  PronounPart<"이것">,
  ParticlePart<"은">,
  CopulaPart<"의자", "Hamnida", false>
]>;
// S = "이것은 의자입니다"`,
        },
      ],
    },
  ],
};

export default chapter;
