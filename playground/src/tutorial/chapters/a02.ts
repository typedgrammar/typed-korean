import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "a02",
  level: "advanced",
  order: 2,
  titleEn: "Reasons: -아서 vs -(으)니까",
  titleZh: "原因：-아서 与 -(으)니까",
  summaryEn:
    "Korean has two primary connectors that express **cause or reason**: **-아서/어서** and **-(으)니까**. Both translate loosely as \"because\" or \"so\", yet they behave differently. -아서/어서 (the `Seo` form in the DSL) presents the cause as sequential background — the result flows naturally from it. -(으)니까 offers an explanation or assertion, and crucially it **can** precede imperatives and proposals; -아서/어서 cannot.\n\n" +
    "Stem shape determines the allomorph: vowel-final stems take **-니까** (오다 → 오니까), consonant-final stems take **-으니까** (없다 → 없으니까). Because -(으)니까 is not in the DSL's built-in form set, we build it with `LiteralPart<\"…니까\">` while keeping the surrounding sentence parts fully typed.",
  summaryZh:
    "韩语中表达**原因或理由**的两个主要连接词尾是 **-아서/어서** 和 **-(으)니까**，均可译作『因为』或『所以』，但用法有所不同。-아서/어서（DSL 中的 `Seo` 形式）将原因作为顺承背景呈现，结果自然随之而来；-(으)니까 则带有解释或断言语气，并且关键在于它**可以**出现在命令句和建议句之前，而 -아서/어서 不能。\n\n" +
    "词干末尾形态决定异形体：元音结尾词干接 **-니까**（오다 → 오니까），辅音结尾词干接 **-으니까**（없다 → 없으니까）。由于 -(으)니까 不在 DSL 内置形式集中，我们用 `LiteralPart<\"…니까\">` 来构建它，同时保持句子其余部分的完整类型推导。",
  points: [
    {
      id: "a02-1",
      titleEn: "-아서/어서 — background cause flowing into a result",
      titleZh: "-아서/어서：顺承背景原因",
      bodyEn:
        "Attach **-아서** (after 아/오 harmony vowel stems: inf ends in 아) or **-어서** (all other stems: inf ends in 어/여) to a verb or adjective to express that the second clause results naturally from the first. The DSL provides this as the `Seo` form for both `VerbPart` and `AdjectivePart`: it appends **서** to the `inf` base, producing the correct surface automatically.\n\n" +
        "Key allomorphs:\n" +
        "- 오다 (come): inf = 와 → **와서**\n" +
        "- 없다 (not exist): inf = 없어 → **없어서**\n" +
        "- 바쁘다 (busy, 으-irregular): inf = 바빠 → **바빠서**\n" +
        "- 어렵다 (difficult, ㅂ-irregular): inf = 어려워 → **어려워서**\n\n" +
        "**Restriction**: -아서/어서 cannot be followed by a command or suggestion. Use -(으)니까 in those cases.",
      bodyZh:
        "在动词或形容词后接 **-아서**（阳性元音词干：inf 以 아 结尾）或 **-어서**（其余词干：inf 以 어/여 结尾），表示第二小句的结果自然承接第一小句。DSL 为 `VerbPart` 和 `AdjectivePart` 均提供 `Seo` 形式：在 `inf` 词基上附加 **서** 自动生成正确的表层形式。\n\n" +
        "常见异形体：\n" +
        "- 오다（来）：inf = 와 → **와서**\n" +
        "- 없다（没有）：inf = 없어 → **없어서**\n" +
        "- 바쁘다（忙，으-不规则）：inf = 바빠 → **바빠서**\n" +
        "- 어렵다（难，ㅂ-不规则）：inf = 어려워 → **어려워서**\n\n" +
        "**限制**：-아서/어서 后不能接命令句或建议句，此时须改用 -(으)니까。",
      examples: [
        {
          jp: "비가 와서 안 가요",
          reading: "biga waseo an gayo",
          en: "Because it's raining, I'm not going.",
          zh: "因为下雨，所以不去。",
          code: `import type { Verb, VerbPart, NounPart, AdverbPart, ParticlePart, Sentence } from "typed-korean";


type 오다 = Verb & { dict:"오다"; stem:"오"; inf:"와"; past:"왔"; eu:"오"; prospective:"올"; formalStem:"옵니" };
type 가다 = Verb & { dict:"가다"; stem:"가"; inf:"가"; past:"갔"; eu:"가"; prospective:"갈"; formalStem:"갑니" };

type S = Sentence<[
  NounPart<"비">,
  ParticlePart<"가">,
  VerbPart<오다, "Seo">,
  AdverbPart<"안">,
  VerbPart<가다, "Haeyo">
]>;
// S = "비가 와서 안 가요"`,
        },
        {
          jp: "시간이 없어서 빨리 가요",
          reading: "sigani eopseo ppalli gayo",
          en: "Because I have no time, I'm going quickly.",
          zh: "因为没时间，所以快点去。",
          code: `import type { Verb, VerbPart, NounPart, AdverbPart, ParticlePart, Sentence } from "typed-korean";


type 없다 = Verb & { dict:"없다"; stem:"없"; inf:"없어"; past:"없었"; eu:"없으"; prospective:"없을"; formalStem:"없습니" };
type 가다 = Verb & { dict:"가다"; stem:"가"; inf:"가"; past:"갔"; eu:"가"; prospective:"갈"; formalStem:"갑니" };

type S = Sentence<[
  NounPart<"시간">,
  ParticlePart<"이">,
  VerbPart<없다, "Seo">,
  AdverbPart<"빨리">,
  VerbPart<가다, "Haeyo">
]>;
// S = "시간이 없어서 빨리 가요"`,
        },
        {
          jp: "바빠서 못 왔어요",
          reading: "bbappaseo mot wasseoyo",
          en: "Because I was busy, I couldn't come.",
          zh: "因为太忙，所以没能来。",
          code: `import type { Verb, Adjective, VerbPart, AdjectivePart, AdverbPart, Sentence } from "typed-korean";


type 바쁘다 = Adjective & { dict:"바쁘다"; stem:"바쁘"; inf:"바빠"; past:"바빴"; eu:"바쁘"; prospective:"바쁠"; formalStem:"바쁩니"; attr:"바쁜" };
type 오다 = Verb & { dict:"오다"; stem:"오"; inf:"와"; past:"왔"; eu:"오"; prospective:"올"; formalStem:"옵니" };

type S = Sentence<[
  AdjectivePart<바쁘다, "Seo">,
  AdverbPart<"못">,
  VerbPart<오다, "PastHaeyo">
]>;
// S = "바빠서 못 왔어요"`,
        },
      ],
    },
    {
      id: "a02-2",
      titleEn: "-(으)니까 — assertive explanation and 받침 allomorphs",
      titleZh: "-(으)니까：断言性解释与收音异形体",
      bodyEn:
        "**-(으)니까** also means \"because\" but carries a stronger, more assertive tone — the speaker explains or justifies their statement. The allomorph rule is driven by the **dictionary stem** (not the inf base):\n\n" +
        "- Vowel-final stem → **-니까**: 오다 (stem 오) → **오니까**, 가다 (stem 가) → **가니까**, 바쁘다 (stem 바쁘) → **바쁘니까**\n" +
        "- Consonant-final stem → **-으니까**: 없다 (stem 없) → **없으니까**, 먹다 (stem 먹) → **먹으니까**, 많다 (stem 많) → **많으니까**\n\n" +
        "Because -(으)니까 is not in the DSL's form set, we model it with `LiteralPart<\"…으니까\">` (or `LiteralPart<\"…니까\">`) placed at the end of the cause clause, then continue with fully typed parts for the result clause.",
      bodyZh:
        "**-(으)니까** 同样表示『因为』，但语气更强烈、更具断言性——说话者对自己的陈述进行解释或辩护。异形体规则取决于**词典词干**（不是 inf 词基）：\n\n" +
        "- 元音结尾词干 → **-니까**：오다（词干 오）→ **오니까**，가다（词干 가）→ **가니까**，바쁘다（词干 바쁘）→ **바쁘니까**\n" +
        "- 辅音结尾词干 → **-으니까**：없다（词干 없）→ **없으니까**，먹다（词干 먹）→ **먹으니까**，많다（词干 많）→ **많으니까**\n\n" +
        "由于 -(으)니까 不在 DSL 的形式集中，我们用 `LiteralPart<\"…으니까\">` 或 `LiteralPart<\"…니까\">` 对原因小句结尾建模，然后继续用完整类型的部分构建结果小句。",
      examples: [
        {
          jp: "시간이 없으니까 빨리 가요",
          reading: "sigani eopseunikka ppalli gayo",
          en: "Because there is no time, let's go quickly.",
          zh: "因为没时间，快点走吧。",
          code: `import type { Verb, VerbPart, NounPart, AdverbPart, ParticlePart, LiteralPart, Sentence } from "typed-korean";


type 가다 = Verb & { dict:"가다"; stem:"가"; inf:"가"; past:"갔"; eu:"가"; prospective:"갈"; formalStem:"갑니" };

// 없다 has consonant-final stem 없 → 없으니까
type S = Sentence<[
  NounPart<"시간">,
  ParticlePart<"이">,
  LiteralPart<"없으니까">,
  AdverbPart<"빨리">,
  VerbPart<가다, "Haeyo">
]>;
// S = "시간이 없으니까 빨리 가요"`,
        },
        {
          jp: "비가 오니까 집에 있어요",
          reading: "biga onikka jibe isseoyo",
          en: "Because it's raining, I'm staying home.",
          zh: "因为下雨，所以待在家里。",
          code: `import type { Verb, VerbPart, NounPart, ParticlePart, LiteralPart, Sentence } from "typed-korean";


type 있다 = Verb & { dict:"있다"; stem:"있"; inf:"있어"; past:"있었"; eu:"있으"; prospective:"있을"; formalStem:"있습니" };

// 오다 has vowel-final stem 오 → 오니까
type S = Sentence<[
  NounPart<"비">,
  ParticlePart<"가">,
  LiteralPart<"오니까">,
  NounPart<"집">,
  ParticlePart<"에">,
  VerbPart<있다, "Haeyo">
]>;
// S = "비가 오니까 집에 있어요"`,
        },
        {
          jp: "한국어가 어려우니까 많이 공부해요",
          reading: "hangugeoga eoryeounikka mani gongbuhaeyo",
          en: "Because Korean is difficult, I study a lot.",
          zh: "因为韩语很难，所以努力学习。",
          code: `import type { HadaVerb, VerbPart, NounPart, AdverbPart, ParticlePart, LiteralPart, Sentence } from "typed-korean";


type 공부하다 = HadaVerb & { dict:"공부하다"; stem:"공부하"; inf:"공부해"; past:"공부했"; eu:"공부하"; prospective:"공부할"; formalStem:"공부합니" };

// 어렵다 (ㅂ-irregular): eu base = 어려우 → 어려우니까
type S = Sentence<[
  NounPart<"한국어">,
  ParticlePart<"가">,
  LiteralPart<"어려우니까">,
  AdverbPart<"많이">,
  VerbPart<공부하다, "Haeyo">
]>;
// S = "한국어가 어려우니까 많이 공부해요"`,
        },
      ],
    },
    {
      id: "a02-3",
      titleEn: "-(으)니까 before imperatives and proposals — where -아서 is blocked",
      titleZh: "-(으)니까 接命令句与建议句——-아서 被禁止的场合",
      bodyEn:
        "The most important practical difference: **-아서/어서 cannot precede a command (imperative) or suggestion (propositive)**. -(으)니까 has no such restriction and is the natural choice when the result clause tells someone to do something.\n\n" +
        "Blocked: ~~바빠서 빨리 오세요~~ ✗\n" +
        "Correct: 바쁘니까 빨리 오세요 ✓\n\n" +
        "The DSL's `Honorific` form (`VerbPart<V, \"Honorific\">`) produces polite commands like **오세요**, **사세요**. Combine it with a `LiteralPart` cause clause ending in -니까 or -으니까 to build these natural request sentences.",
      bodyZh:
        "最重要的实用区别：**-아서/어서 后不能接命令句（命令式）或建议句（共动式）**，而 -(으)니까 没有此限制，是结果小句为请求或命令时的自然选择。\n\n" +
        "错误用法：~~바빠서 빨리 오세요~~ ✗\n" +
        "正确用法：바쁘니까 빨리 오세요 ✓\n\n" +
        "DSL 的 `Honorific` 形式（`VerbPart<V, \"Honorific\">`）生成礼貌命令句，如 **오세요**、**사세요**。将其与以 -니까 或 -으니까 结尾的 `LiteralPart` 原因小句组合，即可构建自然的请求句。",
      examples: [
        {
          jp: "바쁘니까 빨리 오세요",
          reading: "bbapeunikka ppalli oseyo",
          en: "Because I'm busy, please come quickly.",
          zh: "因为我很忙，请快点来。",
          code: `import type { Verb, VerbPart, AdverbPart, LiteralPart, Sentence } from "typed-korean";


type 오다 = Verb & { dict:"오다"; stem:"오"; inf:"와"; past:"왔"; eu:"오"; prospective:"올"; formalStem:"옵니" };

// 바쁘다 has vowel-final stem 바쁘 → 바쁘니까
// -(으)니까 before 오세요 (Honorific) is grammatical; -아서 would be blocked here.
type S = Sentence<[
  LiteralPart<"바쁘니까">,
  AdverbPart<"빨리">,
  VerbPart<오다, "Honorific">
]>;
// S = "바쁘니까 빨리 오세요"`,
        },
        {
          jp: "좋으니까 많이 사세요",
          reading: "joeunikka mani saseyo",
          en: "Because it's good, please buy a lot.",
          zh: "因为很好，请多买。",
          code: `import type { Verb, VerbPart, AdverbPart, LiteralPart, Sentence } from "typed-korean";


type 사다 = Verb & { dict:"사다"; stem:"사"; inf:"사"; past:"샀"; eu:"사"; prospective:"살"; formalStem:"삽니" };

// 좋다 has consonant-final stem 좋 → 좋으니까
type S = Sentence<[
  LiteralPart<"좋으니까">,
  AdverbPart<"많이">,
  VerbPart<사다, "Honorific">
]>;
// S = "좋으니까 많이 사세요"`,
        },
        {
          jp: "친구가 오니까 같이 먹어요",
          reading: "chinguga onikka gachi meogeoyo",
          en: "Because my friend is coming, let's eat together.",
          zh: "因为朋友要来，我们一起吃吧。",
          code: `import type { Verb, VerbPart, NounPart, AdverbPart, ParticlePart, LiteralPart, Sentence } from "typed-korean";


type 먹다 = Verb & { dict:"먹다"; stem:"먹"; inf:"먹어"; past:"먹었"; eu:"먹으"; prospective:"먹을"; formalStem:"먹습니" };

// 오다 has vowel-final stem 오 → 오니까
// 같이 먹어요 here acts as an informal proposal ("let's eat together")
type S = Sentence<[
  NounPart<"친구">,
  ParticlePart<"가">,
  LiteralPart<"오니까">,
  AdverbPart<"같이">,
  VerbPart<먹다, "Haeyo">
]>;
// S = "친구가 오니까 같이 먹어요"`,
        },
      ],
    },
    {
      id: "a02-4",
      titleEn: "Side-by-side contrast and the formal 합니다체 register",
      titleZh: "对比总结与正式语体 합니다체",
      bodyEn:
        "Both connectors work in the formal **합니다체** register — simply change the result clause verb to the `Hamnida` form. The cause clause itself (-아서/어서 and -(으)니까) is invariant across speech levels: it does **not** change to 합니다체.\n\n" +
        "Contrast summary:\n" +
        "| Feature | -아서/어서 | -(으)니까 |\n" +
        "| --- | --- | --- |\n" +
        "| Tone | neutral sequence | assertive explanation |\n" +
        "| Before imperative/proposal | ✗ blocked | ✓ allowed |\n" +
        "| Allomorph rule | inf base + 서 | dict stem + (으)니까 |\n" +
        "| DSL | `Seo` form | `LiteralPart<\"…니까\">` |\n\n" +
        "Tip: when in doubt, -(으)니까 is almost always safe; -아서/어서 sounds more natural for simple sequential cause-and-effect.",
      bodyZh:
        "两种连接词尾在正式语体 **합니다체** 中均可使用——只需将结果小句动词改为 `Hamnida` 形式。原因小句本身（-아서/어서 或 -(으)니까）在任何语体中**均不改变**。\n\n" +
        "对比总结：\n" +
        "| 特征 | -아서/어서 | -(으)니까 |\n" +
        "| --- | --- | --- |\n" +
        "| 语气 | 中性顺承 | 断言性解释 |\n" +
        "| 接命令/建议句 | ✗ 不可 | ✓ 可以 |\n" +
        "| 异形体规则 | inf词基 + 서 | 词典词干 + (으)니까 |\n" +
        "| DSL 用法 | `Seo` 形式 | `LiteralPart<\"…니까\">` |\n\n" +
        "提示：不确定时几乎总可以用 -(으)니까；-아서/어서 在单纯的顺承因果关系中听起来更自然。",
      examples: [
        {
          jp: "비가 와서 안 갑니다",
          reading: "biga waseo an gamnida",
          en: "Because it's raining, I am not going. (formal)",
          zh: "因为下雨，所以不去。（正式体）",
          code: `import type { Verb, VerbPart, NounPart, AdverbPart, ParticlePart, Sentence } from "typed-korean";


type 오다 = Verb & { dict:"오다"; stem:"오"; inf:"와"; past:"왔"; eu:"오"; prospective:"올"; formalStem:"옵니" };
type 가다 = Verb & { dict:"가다"; stem:"가"; inf:"가"; past:"갔"; eu:"가"; prospective:"갈"; formalStem:"갑니" };

// -아서/어서 stays the same in 합니다체; only the result verb changes.
type S = Sentence<[
  NounPart<"비">,
  ParticlePart<"가">,
  VerbPart<오다, "Seo">,
  AdverbPart<"안">,
  VerbPart<가다, "Hamnida">
]>;
// S = "비가 와서 안 갑니다"`,
        },
        {
          jp: "시간이 없으니까 빨리 갑니다",
          reading: "sigani eopseunikka ppalli gamnida",
          en: "Because there is no time, I will go quickly. (formal)",
          zh: "因为没时间，快点去。（正式体）",
          code: `import type { Verb, VerbPart, NounPart, AdverbPart, ParticlePart, LiteralPart, Sentence } from "typed-korean";


type 가다 = Verb & { dict:"가다"; stem:"가"; inf:"가"; past:"갔"; eu:"가"; prospective:"갈"; formalStem:"갑니" };

// -(으)니까 stays unchanged; the result verb uses Hamnida (합니다체).
type S = Sentence<[
  NounPart<"시간">,
  ParticlePart<"이">,
  LiteralPart<"없으니까">,
  AdverbPart<"빨리">,
  VerbPart<가다, "Hamnida">
]>;
// S = "시간이 없으니까 빨리 갑니다"`,
        },
      ],
    },
  ],
};

export default chapter;
