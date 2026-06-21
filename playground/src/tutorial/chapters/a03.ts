import type { Chapter } from "../types";

// ---------------------------------------------------------------------------
// Chapter definition
// ---------------------------------------------------------------------------
const chapter: Chapter = {
  id: "a03",
  level: "advanced",
  order: 3,
  titleEn: "Contrast: -지만 and -는데",
  titleZh: "转折：-지만 与 -는데",
  summaryEn:
    `Korean has two primary connective endings for expressing contrast or background concession: **-지만** and **-는데/은데/ㄴ데**. ` +
    `Both mean roughly "but" or "however", yet they carry different nuances. ` +
    `**-지만** is a direct, unambiguous adversative ("A, but B"); it attaches to the same bare stem regardless of the predicate class or tense. ` +
    `**-는데** is softer — it sets up background context and lets the listener infer the contrast. ` +
    `Its form varies: verbs (present) take **-는데**, adjectives take **-(으)ㄴ데** (vowel stem → **-ㄴ데**, consonant stem → **-은데**), and past-tense forms of both take **-았/었는데**.\n\n` +
    `Because neither ending is in the DSL's form set, we build the contrasting clause with \`LiteralPart\` and keep the result clause fully typed. ` +
    `This approach lets TypeScript verify the result-clause conjugation while leaving the connective form as a readable string literal.`,
  summaryZh:
    `韩语中表达转折或背景让步的连接词尾主要有两个：**-지만** 和 **-는데/은데/ㄴ데**。` +
    `两者都有"但是"或"然而"的含义，但语感有所不同。` +
    `**-지만** 是直接、明确的逆接（"A，但是 B"）；无论谓词类型和时态如何，均接在同一裸词干之后。` +
    `**-는데** 语气更柔和——它引出背景信息，让听者自行推断转折关系。` +
    `其形态因谓词类型而异：动词（现在时）接 **-는데**，形容词接 **-(으)ㄴ데**（元音词干接 **-ㄴ데**，辅音词干接 **-은데**），过去时则两者均用 **-았/었는데**。\n\n` +
    `由于这两个词尾均不在 DSL 的形式集中，我们用 \`LiteralPart\` 构建转折从句，而将结果从句保持完整类型化。` +
    `这种方法让 TypeScript 验证结果从句的活用，同时将连接词尾以可读的字符串字面量形式保留。`,
  points: [
    {
      id: "a03-1",
      titleEn: "-지만 with adjectives: direct contrast",
      titleZh: "-지만 接形容词：直接转折",
      bodyEn:
        `**-지만** attaches directly to the adjective stem (dictionary form minus 다). ` +
        `It is completely invariant: vowel-final and consonant-final stems are treated identically, and there are no irregular alternations to worry about.\n\n` +
        `Examples of formation:\n` +
        `- 비싸다 (expensive): stem **비싸** → **비싸지만**\n` +
        `- 작다 (small): stem **작** → **작지만**\n` +
        `- 어렵다 (difficult): stem **어렵** → **어렵지만**\n\n` +
        `In 합니다체, the result clause changes to -습니다/-ㄴ/습니다, but **-지만** itself is unchanged: ` +
        `e.g. 비싸지만 좋습니다 (formal) vs 비싸지만 좋아요 (informal polite). ` +
        `Because the DSL has no -지만 form, we use \`LiteralPart<"stem지만">\` for the contrast clause and a typed \`AdjectivePart\` for the result.`,
      bodyZh:
        `**-지만** 直接附加在形容词词干（词典形去掉 다）之后，完全没有形态变化：` +
        `元音词干和辅音词干的处理方式完全相同，也不存在不规则变化。\n\n` +
        `构成示例：\n` +
        `- 비싸다（贵）：词干 **비싸** → **비싸지만**\n` +
        `- 작다（小）：词干 **작** → **작지만**\n` +
        `- 어렵다（难）：词干 **어렵** → **어렵지만**\n\n` +
        `합니다体中结果从句改用 -습니다，但 **-지만** 本身不变：` +
        `如 비싸지만 좋습니다（正式）vs 비싸지만 좋아요（非正式尊敬体）。` +
        `由于 DSL 没有 -지만 形式，我们用 \`LiteralPart<"词干지만">\` 构建转折从句，用类型化的 \`AdjectivePart\` 表达结果从句。`,
      examples: [
        {
          jp: "비싸지만 좋아요",
          reading: "bissajiman joayo",
          en: "It's expensive, but it's good.",
          zh: "虽然贵，但很好。",
          code: `import type { Adjective, AdjectivePart, LiteralPart, Sentence } from "typed-korean";


// 비싸다: stem = "비싸" → 비싸 + 지만 = 비싸지만 (invariant; no allomorph)
type 좋다 = Adjective & { dict:"좋다"; stem:"좋"; inf:"좋아"; past:"좋았"; eu:"좋으"; prospective:"좋을"; formalStem:"좋습니"; attr:"좋은" };

// LiteralPart holds the -지만 clause; AdjectivePart types the result clause
type 비싸지만좋아요 = Sentence<[
  LiteralPart<"비싸지만">,
  AdjectivePart<좋다, "Haeyo">
]>;
type result = 비싸지만좋아요;`,
        },
        {
          jp: "작지만 예뻐요",
          reading: "jakjiman yeppeoyo",
          en: "It's small, but it's pretty.",
          zh: "虽然小，但很漂亮。",
          code: `import type { Adjective, AdjectivePart, LiteralPart, Sentence } from "typed-korean";


// 작다: stem = "작" → 작 + 지만 = 작지만 (consonant stem — still no 으 needed for -지만)
// 예쁘다: 으-irregular; Haeyo = 예뻐요
type 예쁘다 = Adjective & { dict:"예쁘다"; stem:"예쁘"; inf:"예뻐"; past:"예뻤"; eu:"예쁘"; prospective:"예쁠"; formalStem:"예쁩니"; attr:"예쁜" };

type 작지만예뻐요 = Sentence<[
  LiteralPart<"작지만">,
  AdjectivePart<예쁘다, "Haeyo">
]>;
type result = 작지만예뻐요;`,
        },
        {
          jp: "어렵지만 재미있어요",
          reading: "eoryeopjiman jaemiisseoyo",
          en: "It's difficult, but it's fun.",
          zh: "虽然难，但很有趣。",
          code: `import type { Adjective, AdjectivePart, LiteralPart, Sentence } from "typed-korean";


// 어렵다: ㅂ-irregular; stem = "어렵" → 어렵 + 지만 = 어렵지만
// (ㅂ-irregularity only triggers before vowel-initial endings; -지만 is consonant-initial → no change)
// 재미있다: 있다-type adjective; Haeyo = 재미있어요
type 재미있다 = Adjective & { dict:"재미있다"; stem:"재미있"; inf:"재미있어"; past:"재미있었"; eu:"재미있으"; prospective:"재미있을"; formalStem:"재미있습니"; attr:"재미있는" };

type 어렵지만재미있어요 = Sentence<[
  LiteralPart<"어렵지만">,
  AdjectivePart<재미있다, "Haeyo">
]>;
type result = 어렵지만재미있어요;`,
        },
      ],
    },
    {
      id: "a03-2",
      titleEn: "-지만 with verbs and richer sentences",
      titleZh: "-지만 接动词与更丰富的句子",
      bodyEn:
        `**-지만** works equally well with verbs. The rule is the same: strip 다 to get the stem, then append **-지만** with no further changes. ` +
        `하다-verbs are no exception: 공부하다 → **공부하지만**, 일하다 → **일하지만**.\n\n` +
        `Because the -지만 clause comes first, anything in the second clause can be independently typed. ` +
        `This lets you mix a \`LiteralPart\` for the contrasting predicate with fully typed nouns, particles, and predicates in the result clause, ` +
        `giving you compile-time checking on the second half of the sentence.\n\n` +
        `In 합니다체, once again only the result clause ending changes; the -지만 stem stays the same.`,
      bodyZh:
        `**-지만** 同样适用于动词，规则完全相同：去掉 다 得到词干，直接接 **-지만**，无需任何额外变化。` +
        `하다 动词也不例外：공부하다 → **공부하지만**，일하다 → **일하지만**。\n\n` +
        `由于 -지만 从句在前，结果从句可以独立类型化。` +
        `这样就可以用 \`LiteralPart\` 处理转折谓语，同时对结果从句中的名词、助词和谓语进行完整的类型检查，` +
        `实现对句子后半部分的编译期验证。\n\n` +
        `합니다体中同样只有结果从句词尾改变；-지만 词干本身保持不变。`,
      examples: [
        {
          jp: "공부하지만 시험이 어려워요",
          reading: "gongbuhajiman siheomi eoryeowoyo",
          en: "I study, but the exam is difficult.",
          zh: "虽然学习了，但考试还是很难。",
          code: `import type { Adjective, AdjectivePart, NounPart, ParticlePart, LiteralPart, Sentence } from "typed-korean";


// 공부하다: stem = "공부하" → 공부하 + 지만 = 공부하지만
// 어렵다: ㅂ-irregular; Haeyo = 어려워요
type 어렵다 = Adjective & { dict:"어렵다"; stem:"어렵"; inf:"어려워"; past:"어려웠"; eu:"어려우"; prospective:"어려울"; formalStem:"어렵습니"; attr:"어려운" };

// 시험 ends in ㅁ (consonant) → subject particle 이
type 공부하지만시험이어려워요 = Sentence<[
  LiteralPart<"공부하지만">,
  NounPart<"시험">, ParticlePart<"이">,
  AdjectivePart<어렵다, "Haeyo">
]>;
type result = 공부하지만시험이어려워요;`,
        },
        {
          jp: "일하지만 돈이 없어요",
          reading: "ilhajiman doni eopseoyo",
          en: "I work, but I have no money.",
          zh: "虽然在工作，但没有钱。",
          code: `import type { Verb, VerbPart, NounPart, ParticlePart, LiteralPart, Sentence } from "typed-korean";


// 일하다: stem = "일하" → 일하 + 지만 = 일하지만
// 없다: Haeyo = 없어요
type 없다 = Verb & { dict:"없다"; stem:"없"; inf:"없어"; past:"없었"; eu:"없으"; prospective:"없을"; formalStem:"없습니" };

// 돈 ends in ㄴ (consonant) → subject particle 이
type 일하지만돈이없어요 = Sentence<[
  LiteralPart<"일하지만">,
  NounPart<"돈">, ParticlePart<"이">,
  VerbPart<없다, "Haeyo">
]>;
type result = 일하지만돈이없어요;`,
        },
        {
          jp: "한국어를 배우지만 아직 어려워요",
          reading: "hangugeoreul baeujiman ajik eoryeowoyo",
          en: "I am learning Korean, but it is still difficult.",
          zh: "虽然在学韩语，但还是很难。",
          code: `import type { Adjective, AdjectivePart, NounPart, AdverbPart, ParticlePart, LiteralPart, Sentence } from "typed-korean";


// 배우다: stem = "배우" → 배우 + 지만 = 배우지만
// 어렵다: ㅂ-irregular; Haeyo = 어려워요
type 어렵다 = Adjective & { dict:"어렵다"; stem:"어렵"; inf:"어려워"; past:"어려웠"; eu:"어려우"; prospective:"어려울"; formalStem:"어렵습니"; attr:"어려운" };

// 한국어 ends in vowel → object particle 를
type 한국어를배우지만아직어려워요 = Sentence<[
  NounPart<"한국어">, ParticlePart<"를">,
  LiteralPart<"배우지만">,
  AdverbPart<"아직">,
  AdjectivePart<어렵다, "Haeyo">
]>;
type result = 한국어를배우지만아직어려워요;`,
        },
      ],
    },
    {
      id: "a03-3",
      titleEn: "-는데 with verbs: background contrast",
      titleZh: "-는데 接动词：背景式转折",
      bodyEn:
        `**-는데** is a multifunctional ending that sets up background information and invites the listener to infer a connection — often contrast, surprise, or an implicit question. ` +
        `Compared with -지만, it feels softer and less confrontational.\n\n` +
        `For **verbs in the present tense**, attach **-는데** to the plain stem: 먹다 → **먹는데**, 가다 → **가는데**. ` +
        `For **past tense** (both verbs and adjectives), attach **-는데** directly after the past-tense marker: 먹었 + 는데 → **먹었는데**, 갔 + 는데 → **갔는데**.\n\n` +
        `Because the DSL does not include a -는데 form, we write the contrast clause as a \`LiteralPart\` and keep the result clause typed. ` +
        `결과절(result clause)에 나오는 어휘가 vetted predicate라면, TypeScript가 그 활용을 검증합니다.`,
      bodyZh:
        `**-는데** 是一个多功能词尾，用于引出背景信息，让听者自行推断联系——通常是转折、意外或隐含的疑问。` +
        `与 -지만 相比，语气更柔和，对比感更弱。\n\n` +
        `**动词现在时**直接在词干后接 **-는데**：먹다 → **먹는데**，가다 → **가는데**。` +
        `**过去时**（动词和形容词均如此）则在过去时标记后接 **-는데**：먹었 + 는데 → **먹었는데**，갔 + 는데 → **갔는데**。\n\n` +
        `由于 DSL 不包含 -는데 形式，我们将转折从句写为 \`LiteralPart\`，结果从句保持类型化。` +
        `若结果从句中的词汇是已核验的谓词，TypeScript 将对其活用进行验证。`,
      examples: [
        {
          jp: "밥을 먹었는데 배가 고파요",
          reading: "babeul meogeonnneunde baega gopayo",
          en: "I ate, but I'm (still) hungry.",
          zh: "虽然吃了饭，但还是饿。",
          code: `import type { NounPart, ParticlePart, LiteralPart, Sentence } from "typed-korean";


// 먹다: past stem "먹었" + 는데 = 먹었는데 (past-tense -는데: past-stem + 는데)
// 고프다 (to be hungry) is not in the vetted lexicon → 고파요 as LiteralPart
// 배 (belly) ends in vowel → subject particle 가

type 밥을먹었는데배가고파요 = Sentence<[
  NounPart<"밥">, ParticlePart<"을">,
  LiteralPart<"먹었는데">,
  NounPart<"배">, ParticlePart<"가">,
  LiteralPart<"고파요">
]>;
type result = 밥을먹었는데배가고파요;`,
        },
        {
          jp: "집에 갔는데 친구가 없었어요",
          reading: "jibe ganneunde chinguga eopseosseoyo",
          en: "I went home, but my friend wasn't there.",
          zh: "去家里了，但朋友不在。",
          code: `import type { Verb, VerbPart, NounPart, ParticlePart, LiteralPart, Sentence } from "typed-korean";


// 가다: past stem "갔" + 는데 = 갔는데
// 없다: PastHaeyo = 없었어요
type 없다 = Verb & { dict:"없다"; stem:"없"; inf:"없어"; past:"없었"; eu:"없으"; prospective:"없을"; formalStem:"없습니" };

// 집 ends in ㅂ (consonant) → 집에 | 친구 ends in vowel → subject particle 가
type 집에갔는데친구가없었어요 = Sentence<[
  NounPart<"집">, ParticlePart<"에">,
  LiteralPart<"갔는데">,
  NounPart<"친구">, ParticlePart<"가">,
  VerbPart<없다, "PastHaeyo">
]>;
type result = 집에갔는데친구가없었어요;`,
        },
        {
          jp: "지금 먹는데 전화가 왔어요",
          reading: "jigeum meongneunde jeonhwaga wasseoyo",
          en: "I was eating, and a phone call came (interrupting me).",
          zh: "正在吃饭，却来了个电话。",
          code: `import type { Verb, VerbPart, NounPart, AdverbPart, ParticlePart, LiteralPart, Sentence } from "typed-korean";


// 먹다: present-tense -는데 attaches to the plain stem → 먹 + 는데 = 먹는데
// 오다: PastHaeyo = 왔어요
type 오다 = Verb & { dict:"오다"; stem:"오"; inf:"와"; past:"왔"; eu:"오"; prospective:"올"; formalStem:"옵니" };

// 전화 ends in vowel → subject particle 가
type 지금먹는데전화가왔어요 = Sentence<[
  AdverbPart<"지금">,
  LiteralPart<"먹는데">,
  NounPart<"전화">, ParticlePart<"가">,
  VerbPart<오다, "PastHaeyo">
]>;
type result = 지금먹는데전화가왔어요;`,
        },
      ],
    },
    {
      id: "a03-4",
      titleEn: "-ㄴ데/은데 with adjectives: the allomorph rule",
      titleZh: "-ㄴ데/은데 接形容词：异形词规则",
      bodyEn:
        `When **-는데** follows an **adjective** in the present tense, it takes a different shape: **-(으)ㄴ데**. ` +
        `The allomorph rule mirrors the familiar (으)-insertion pattern:\n\n` +
        `- **Vowel-final adjective stem** (no 받침): attach **-ㄴ데** directly.\n` +
        `  예) 비싸다 → stem 비싸 → **비싼데** (비싸 + ㄴ → ㄴ fuses onto the last syllable)\n` +
        `- **Consonant-final adjective stem** (받침 present): insert 으 and attach **ㄴ데** → **-은데**.\n` +
        `  예) 좋다 → stem 좋 → **좋은데** (좋 + 은데)\n\n` +
        `Note the contrast with -지만: for -지만 the stem is unchanged regardless of final phoneme, ` +
        `but for -ㄴ데/은데 the (으) insertion rule applies to adjectives in the present tense. ` +
        `(Past-tense adjectives use the same -았/었는데 as verbs, with no (으) insertion.)\n\n` +
        `In 합니다체, the -ㄴ데/은데 connector itself does not change — only the result clause shifts to -(스)ㅂ니다.`,
      bodyZh:
        `**-는데** 接**形容词**现在时时，形态发生变化：变为 **-(으)ㄴ데**。` +
        `其异形词规则与常见的（으）插入规则一致：\n\n` +
        `- **元音结尾词干**（无 받침）：直接接 **-ㄴ데**。\n` +
        `  例：비싸다 → 词干 비싸 → **비싼데**（비싸 + ㄴ，ㄴ 并入末音节）\n` +
        `- **辅音结尾词干**（有 받침）：插入 으 再接 ㄴ데 → **-은데**。\n` +
        `  例：좋다 → 词干 좋 → **좋은데**（좋 + 은데）\n\n` +
        `注意与 -지만 的区别：-지만 无论词干末音如何均不变，` +
        `而 -ㄴ데/은데 对形容词现在时适用（으）插入规则。` +
        `（过去时形容词与动词相同，使用 -았/었는데，不插入（으）。）\n\n` +
        `합니다体中 -ㄴ데/은데 连接词本身不变，只有结果从句改用 -(스)ㅂ니다。`,
      examples: [
        {
          jp: "비싼데 사고 싶어요",
          reading: "bissande sago sipeoyo",
          en: "It's expensive, but I want to buy it.",
          zh: "虽然贵，但想买。",
          code: `import type { Verb, VerbPart, LiteralPart, Sentence } from "typed-korean";


// 비싸다: vowel-final stem 비싸 → 비싸 + ㄴ데 = 비싼데 (ㄴ fuses onto 싸 → 싼)
// 사다: Want form = 사고 싶어요
type 사다 = Verb & { dict:"사다"; stem:"사"; inf:"사"; past:"샀"; eu:"사"; prospective:"살"; formalStem:"삽니" };

type 비싼데사고싶어요 = Sentence<[
  LiteralPart<"비싼데">,
  VerbPart<사다, "Want">
]>;
type result = 비싼데사고싶어요;`,
        },
        {
          jp: "좋은데 비싸요",
          reading: "joeunde bissayo",
          en: "It's good, but it's expensive.",
          zh: "虽然好，但很贵。",
          code: `import type { Adjective, AdjectivePart, LiteralPart, Sentence } from "typed-korean";


// 좋다: consonant-final stem 좋 → 좋 + 은데 = 좋은데 (으 inserted before ㄴ데)
// 비싸다: Haeyo = 비싸요
type 비싸다 = Adjective & { dict:"비싸다"; stem:"비싸"; inf:"비싸"; past:"비쌌"; eu:"비싸"; prospective:"비쌀"; formalStem:"비쌉니"; attr:"비싼" };

type 좋은데비싸요 = Sentence<[
  LiteralPart<"좋은데">,
  AdjectivePart<비싸다, "Haeyo">
]>;
type result = 좋은데비싸요;`,
        },
        {
          jp: "날씨가 좋은데 집에 있어요",
          reading: "nalssiga joeunde jibe isseoyo",
          en: "The weather is nice, but (I'm) staying home.",
          zh: "天气很好，但（我）还是待在家里。",
          code: `import type { Verb, VerbPart, NounPart, ParticlePart, LiteralPart, Sentence } from "typed-korean";


// 좋다: consonant-final stem 좋 → 좋 + 은데 = 좋은데
// 있다: Haeyo = 있어요
type 있다 = Verb & { dict:"있다"; stem:"있"; inf:"있어"; past:"있었"; eu:"있으"; prospective:"있을"; formalStem:"있습니" };

// 날씨 ends in vowel → subject particle 가
// 집 ends in ㅂ (consonant) → 집에 (location particle 에 attaches with no space)
type 날씨가좋은데집에있어요 = Sentence<[
  NounPart<"날씨">, ParticlePart<"가">,
  LiteralPart<"좋은데">,
  NounPart<"집">, ParticlePart<"에">,
  VerbPart<있다, "Haeyo">
]>;
type result = 날씨가좋은데집에있어요;`,
        },
      ],
    },
  ],
};

export default chapter;
