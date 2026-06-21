import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "a06",
  level: "advanced",
  order: 6,
  titleEn: "Putting it together: longer sentences",
  titleZh: "综合：更长的句子",
  summaryEn:
    "Real Korean conversation rarely stops at a single clause. This chapter builds multi-clause sentences by chaining connectives: **-고** (sequential / additive 'and'), **-아서/어서** (causal or immediate-sequential 'and then'), and **-(으)면** (conditional 'if'). Each connective attaches to the preceding verb and leaves the final clause free to carry tense and politeness. By the end you will be able to type-check full chains like *저는 매일 학교에 가서 한국어를 공부해요* or *시간이 있으면 친구를 만나서 영화를 봐요* directly in TypeScript.\n\nAll examples use **해요체** (polite informal). The final predicate determines the overall tense and register; intermediate clauses ending in -고 / -아서/-어서 / -(으)면 are always tenseless and register-neutral.",
  summaryZh:
    "真实的韩语对话很少停留在单一分句。本章通过串联连接词来构建多分句句子：**-고**（顺序/并列'和'）、**-아서/어서**（因果或紧接顺序的'然后'）以及 **-(으)면**（条件'如果'）。每个连接词附加在前一动词之后，最后一个分句负责表达时态和敬语等级。学完本章，你将能够直接在 TypeScript 中类型检查完整的连锁句，例如*저는 매일 학교에 가서 한국어를 공부해요*或*시간이 있으면 친구를 만나서 영화를 봐요*。\n\n所有示例均使用 **해요체**（礼貌非正式体）。最终谓语决定整体时态和语域；以 -고 / -아서/-어서 / -(으)면 结尾的中间分句始终是无时态、无语域标记的。",
  points: [
    {
      id: "a06-1",
      titleEn: "-고: sequential 'and then'",
      titleZh: "-고：顺序'然后'",
      bodyEn:
        "The **-고** connective is formed by appending **고** directly to the verb stem (the `stem` field in the DSL). It links two or more actions in sequence without implying cause or strong temporal dependency — simply 'A and B', often 'A and then B'.\n\nIn the DSL, `-고` is the `And` form: `ConjugateVerb<V, \"And\">` = `${stem}고`. Because the batchim of every stem already ends in a full syllable before 고, no allomorphic variation occurs — **-고 is always -고** regardless of the preceding stem shape. This contrasts with -아서/어서 and -(으)면, which do show stem-conditioned allomorphs.\n\nWord order: **[S-는/은] [O-를/을] Verb-고 [O-를/을] Verb-해요**. The final verb carries the tense and speech level; the -고 clause is always present-stem and register-neutral.",
      bodyZh:
        "**-고** 连接词通过将 **고** 直接附加在动词词干（DSL 中的 `stem` 字段）上来构成，用于将两个或多个动作顺序串联，不暗示因果或强烈的时间依存关系——仅表示'A 和 B'，通常是'A 然后 B'。\n\n在 DSL 中，`-고` 对应 `And` 形式：`ConjugateVerb<V, \"And\">` = `${stem}고`。由于每个词干的受格音节已完整，-고 之前不需要任何语音变体调整——**-고 始终是 -고**，不受前接词干形态影响。这与 -아서/어서 和 -(으)면 形成对比，后两者确实存在词干条件变体。\n\n语序：**[主语-는/은] [宾语-를/을] 动词-고 [宾语-를/을] 动词-해요**。最终动词承载时态和言语等级；-고 分句始终使用现在词干，不标记语域。",
      examples: [
        {
          jp: "저는 밥을 먹고 학교에 가요",
          reading: "jeoneun babeul meokgo haggyoe gayo",
          en: "I eat a meal and go to school.",
          zh: "我吃饭然后去学校。",
          code: `import type { CommonNoun, Pronoun, Verb, VerbPart, NounPart, PronounPart, ParticlePart, Sentence } from "typed-korean";


type 먹다 = Verb & { dict:"먹다"; stem:"먹"; inf:"먹어"; past:"먹었"; eu:"먹으"; prospective:"먹을"; formalStem:"먹습니" };
type 가다 = Verb & { dict:"가다"; stem:"가"; inf:"가"; past:"갔"; eu:"가"; prospective:"갈"; formalStem:"갑니" };

type S = Sentence<[
  PronounPart<Pronoun<"저">>,
  ParticlePart<"는">,
  NounPart<CommonNoun<"밥">>,
  ParticlePart<"을">,
  VerbPart<먹다, "And">,
  NounPart<CommonNoun<"학교">>,
  ParticlePart<"에">,
  VerbPart<가다, "Haeyo">
]>;
// S = "저는 밥을 먹고 학교에 가요"`,
        },
        {
          jp: "저는 친구를 만나고 영화를 봐요",
          reading: "jeoneun chingureul mannago yeonghwareul bwayo",
          en: "I meet a friend and watch a movie.",
          zh: "我见了朋友然后看电影。",
          code: `import type { CommonNoun, Pronoun, Verb, VerbPart, NounPart, PronounPart, ParticlePart, Sentence } from "typed-korean";


type 만나다 = Verb & { dict:"만나다"; stem:"만나"; inf:"만나"; past:"만났"; eu:"만나"; prospective:"만날"; formalStem:"만납니" };
type 보다 = Verb & { dict:"보다"; stem:"보"; inf:"봐"; past:"봤"; eu:"보"; prospective:"볼"; formalStem:"봅니" };

type S = Sentence<[
  PronounPart<Pronoun<"저">>,
  ParticlePart<"는">,
  NounPart<CommonNoun<"친구">>,
  ParticlePart<"를">,
  VerbPart<만나다, "And">,
  NounPart<CommonNoun<"영화">>,
  ParticlePart<"를">,
  VerbPart<보다, "Haeyo">
]>;
// S = "저는 친구를 만나고 영화를 봐요"`,
        },
        {
          jp: "저는 한국어를 공부하고 집에 가요",
          reading: "jeoneun hangugeoreul gongbuhago jibe gayo",
          en: "I study Korean and then go home.",
          zh: "我学习韩语然后回家。",
          code: `import type { CommonNoun, Pronoun, Verb, HadaVerb, VerbPart, NounPart, PronounPart, ParticlePart, Sentence } from "typed-korean";


type 공부하다 = HadaVerb & { dict:"공부하다"; stem:"공부하"; inf:"공부해"; past:"공부했"; eu:"공부하"; prospective:"공부할"; formalStem:"공부합니" };
type 가다 = Verb & { dict:"가다"; stem:"가"; inf:"가"; past:"갔"; eu:"가"; prospective:"갈"; formalStem:"갑니" };

type S = Sentence<[
  PronounPart<Pronoun<"저">>,
  ParticlePart<"는">,
  NounPart<CommonNoun<"한국어">>,
  ParticlePart<"를">,
  VerbPart<공부하다, "And">,
  NounPart<CommonNoun<"집">>,
  ParticlePart<"에">,
  VerbPart<가다, "Haeyo">
]>;
// S = "저는 한국어를 공부하고 집에 가요"`,
        },
      ],
    },
    {
      id: "a06-2",
      titleEn: "-아서/-어서: causal and sequential 'and so / and then'",
      titleZh: "-아서/-어서：因果与紧接顺序的'因此/然后'",
      bodyEn:
        "**-아서/어서** connects two clauses where the first event either *causes* the second or *immediately precedes* it in a tightly linked sequence — the two actions share the same subject and happen at the same location or in immediate succession. The suffix attaches to the **아/어 infinitive** (`inf` field): if `inf` ends in 아/ㅏ-vowel stems, you get **-아서**; if 어/other, **-어서**; if 해, **-해서**. In the DSL this is the `Seo` form: `ConjugateVerb<V, \"Seo\">` = `${inf}서`.\n\nBecause -아서/어서 implies shared subject and situational continuity, **you cannot use it with tense markers** in the connecting clause — the past tense is expressed only on the final verb. Also, unlike -고, the subject *must* be the same in both clauses.",
      bodyZh:
        "**-아서/어서** 连接两个分句，其中第一个事件*导致*第二个，或在紧密联系的顺序中*紧接*第二个——两个动作共享同一主语，发生在同一地点或紧接发生。后缀附加在 **아/어 不定式**（`inf` 字段）上：若 `inf` 以 아/ㅏ-元音词干结尾，得到 **-아서**；其他情况为 **-어서**；若为 해，则为 **-해서**。在 DSL 中这是 `Seo` 形式：`ConjugateVerb<V, \"Seo\">` = `${inf}서`。\n\n因为 -아서/어서 暗含共同主语和情境连续性，**连接分句中不能使用时态标记**——过去时态仅在最终动词上表达。此外，与 -고 不同，两个分句的主语*必须*相同。",
      examples: [
        {
          jp: "저는 매일 학교에 가서 한국어를 공부해요",
          reading: "jeoneun maeil haggyoe gaseo hangugeoreul gongbuhaeyo",
          en: "Every day I go to school and study Korean (there).",
          zh: "我每天去学校学习韩语。",
          code: `import type { CommonNoun, Pronoun, Verb, HadaVerb, Adverb, VerbPart, NounPart, PronounPart, AdverbPart, ParticlePart, Sentence } from "typed-korean";


type 가다 = Verb & { dict:"가다"; stem:"가"; inf:"가"; past:"갔"; eu:"가"; prospective:"갈"; formalStem:"갑니" };
type 공부하다 = HadaVerb & { dict:"공부하다"; stem:"공부하"; inf:"공부해"; past:"공부했"; eu:"공부하"; prospective:"공부할"; formalStem:"공부합니" };

type S = Sentence<[
  PronounPart<Pronoun<"저">>,
  ParticlePart<"는">,
  AdverbPart<Adverb<"매일">>,
  NounPart<CommonNoun<"학교">>,
  ParticlePart<"에">,
  VerbPart<가다, "Seo">,
  NounPart<CommonNoun<"한국어">>,
  ParticlePart<"를">,
  VerbPart<공부하다, "Haeyo">
]>;
// S = "저는 매일 학교에 가서 한국어를 공부해요"`,
        },
        {
          jp: "친구를 만나서 영화를 봐요",
          reading: "chingureul mannaseo yeonghwareul bwayo",
          en: "I meet a friend and (then) watch a movie.",
          zh: "我见了朋友然后看电影。",
          code: `import type { CommonNoun, Verb, VerbPart, NounPart, ParticlePart, Sentence } from "typed-korean";


type 만나다 = Verb & { dict:"만나다"; stem:"만나"; inf:"만나"; past:"만났"; eu:"만나"; prospective:"만날"; formalStem:"만납니" };
type 보다 = Verb & { dict:"보다"; stem:"보"; inf:"봐"; past:"봤"; eu:"보"; prospective:"볼"; formalStem:"봅니" };

type S = Sentence<[
  NounPart<CommonNoun<"친구">>,
  ParticlePart<"를">,
  VerbPart<만나다, "Seo">,
  NounPart<CommonNoun<"영화">>,
  ParticlePart<"를">,
  VerbPart<보다, "Haeyo">
]>;
// S = "친구를 만나서 영화를 봐요"`,
        },
        {
          jp: "저는 집에 와서 밥을 먹어요",
          reading: "jeoneun jibe waseo babeul meogeoyo",
          en: "I come home and then eat.",
          zh: "我回家然后吃饭。",
          code: `import type { CommonNoun, Pronoun, Verb, VerbPart, NounPart, PronounPart, ParticlePart, Sentence } from "typed-korean";


type 오다 = Verb & { dict:"오다"; stem:"오"; inf:"와"; past:"왔"; eu:"오"; prospective:"올"; formalStem:"옵니" };
type 먹다 = Verb & { dict:"먹다"; stem:"먹"; inf:"먹어"; past:"먹었"; eu:"먹으"; prospective:"먹을"; formalStem:"먹습니" };

type S = Sentence<[
  PronounPart<Pronoun<"저">>,
  ParticlePart<"는">,
  NounPart<CommonNoun<"집">>,
  ParticlePart<"에">,
  VerbPart<오다, "Seo">,
  NounPart<CommonNoun<"밥">>,
  ParticlePart<"을">,
  VerbPart<먹다, "Haeyo">
]>;
// S = "저는 집에 와서 밥을 먹어요"`,
        },
      ],
    },
    {
      id: "a06-3",
      titleEn: "-(으)면: the conditional 'if'",
      titleZh: "-(으)면：条件'如果'",
      bodyEn:
        "**-(으)면** introduces a condition: 'if [condition], [result]'. The suffix attaches to the **으-linking stem** (`eu` field): vowel-final stems use just **-면** (가 → 가면, 오 → 오면), while consonant-final stems use **-으면** (있 → 있으면, 먹 → 먹으면). In the DSL: `ConjugateVerb<V, \"If\">` = `${eu}면`; the same `\"If\"` form works for adjectives too.\n\nThe DSL type `ConditionalPhrase<Condition, Result>` joins a condition clause string and a result clause string with a single space, matching Korean's written convention (no comma between -(으)면 clause and the main clause in polite speech).\n\nNote the 받침-driven allomorphy: **가면** (vowel stem 가) vs **있으면** (consonant stem 있). This is the same 으-insertion rule seen in -(으)세요 and -(으)ㄹ까요.",
      bodyZh:
        "**-(으)면** 引入条件从句：'如果[条件]，[结果]'。后缀附加在 **으-连接词干**（`eu` 字段）上：元音结尾词干直接加 **-면**（가 → 가면、오 → 오면），辅音结尾词干加 **-으면**（있 → 있으면、먹 → 먹으면）。在 DSL 中：`ConjugateVerb<V, \"If\">` = `${eu}면`；`\"If\"` 形式同样适用于形容词。\n\nDSL 类型 `ConditionalPhrase<Condition, Result>` 将条件从句字符串和结果从句字符串用一个空格连接，符合韩语书写惯例（礼貌语体中 -(으)면 从句和主句之间不加逗号）。\n\n注意受 받침 驱动的变体：**가면**（元音词干 가）vs **있으면**（辅音词干 있）。这与 -(으)세요 和 -(으)ㄹ까요 中看到的 으-插入规则相同。",
      examples: [
        {
          jp: "시간이 있으면 공부해요",
          reading: "sigani isseumyeon gongbuhaeyo",
          en: "If there is time, I study.",
          zh: "如果有时间，就学习。",
          code: `import type { CommonNoun, Verb, HadaVerb, ConditionalPhrase, VerbPart, NounPart, ParticlePart, Sentence } from "typed-korean";


type 있다 = Verb & { dict:"있다"; stem:"있"; inf:"있어"; past:"있었"; eu:"있으"; prospective:"있을"; formalStem:"있습니" };
type 공부하다 = HadaVerb & { dict:"공부하다"; stem:"공부하"; inf:"공부해"; past:"공부했"; eu:"공부하"; prospective:"공부할"; formalStem:"공부합니" };

type Condition = Sentence<[
  NounPart<CommonNoun<"시간">>,
  ParticlePart<"이">,
  VerbPart<있다, "If">
]>;
// Condition = "시간이 있으면"

type Result = Sentence<[
  VerbPart<공부하다, "Haeyo">
]>;
// Result = "공부해요"

type S = ConditionalPhrase<Condition, Result>;
// S = "시간이 있으면 공부해요"`,
        },
        {
          jp: "시간이 있으면 친구를 만나요",
          reading: "sigani isseumyeon chingureul mannayo",
          en: "If I have time, I meet a friend.",
          zh: "如果有时间，我就去见朋友。",
          code: `import type { CommonNoun, Verb, ConditionalPhrase, VerbPart, NounPart, ParticlePart, Sentence } from "typed-korean";


type 있다 = Verb & { dict:"있다"; stem:"있"; inf:"있어"; past:"있었"; eu:"있으"; prospective:"있을"; formalStem:"있습니" };
type 만나다 = Verb & { dict:"만나다"; stem:"만나"; inf:"만나"; past:"만났"; eu:"만나"; prospective:"만날"; formalStem:"만납니" };

type Condition = Sentence<[
  NounPart<CommonNoun<"시간">>,
  ParticlePart<"이">,
  VerbPart<있다, "If">
]>;
// Condition = "시간이 있으면"

type Result = Sentence<[
  NounPart<CommonNoun<"친구">>,
  ParticlePart<"를">,
  VerbPart<만나다, "Haeyo">
]>;
// Result = "친구를 만나요"

type S = ConditionalPhrase<Condition, Result>;
// S = "시간이 있으면 친구를 만나요"`,
        },
        {
          jp: "날씨가 좋으면 학교에 가요",
          reading: "nalssiga joheumyeon haggyoe gayo",
          en: "If the weather is good, I go to school.",
          zh: "如果天气好，我就去学校。",
          code: `import type { CommonNoun, Verb, Adjective, ConditionalPhrase, VerbPart, AdjectivePart, NounPart, ParticlePart, Sentence } from "typed-korean";


type 좋다 = Adjective & { dict:"좋다"; stem:"좋"; inf:"좋아"; past:"좋았"; eu:"좋으"; prospective:"좋을"; formalStem:"좋습니"; attr:"좋은" };
type 가다 = Verb & { dict:"가다"; stem:"가"; inf:"가"; past:"갔"; eu:"가"; prospective:"갈"; formalStem:"갑니" };

type Condition = Sentence<[
  NounPart<CommonNoun<"날씨">>,
  ParticlePart<"가">,
  AdjectivePart<좋다, "If">
]>;
// Condition = "날씨가 좋으면"

type Result = Sentence<[
  NounPart<CommonNoun<"학교">>,
  ParticlePart<"에">,
  VerbPart<가다, "Haeyo">
]>;
// Result = "학교에 가요"

type S = ConditionalPhrase<Condition, Result>;
// S = "날씨가 좋으면 학교에 가요"`,
        },
      ],
    },
    {
      id: "a06-4",
      titleEn: "Putting it all together: multi-clause chains",
      titleZh: "综合：多分句连锁句",
      bodyEn:
        "Fluent Korean frequently stacks two or more connectives before the final verb: *go → (가서) study → (공부하고) come home → 와요*. The rule is simple: every intermediate clause ends with a connective form (-고 / -아서/-어서 / -(으)면), and the **last clause alone** carries 해요 / 합니다 and optionally a past tense.\n\nIn the typed DSL, you extend the `Sentence` parts array with as many intermediate `VerbPart<…, \"And\">` or `VerbPart<…, \"Seo\">` entries as you need before the final `VerbPart<…, \"Haeyo\">`. For -(으)면 conditions, compose a `ConditionalPhrase` whose `Result` argument is itself a `Sentence` containing any further -아서/-어서 chains.\n\nPay careful attention to 띄어쓰기: every predicate form (-고, -아서, -으면) is a separate eojeol and gets a space before the next word.",
      bodyZh:
        "流利的韩语常常在最终动词之前叠加两个或多个连接词：*去 → （가서）学习 → （공부하고）回家 → 와요*。规则很简单：每个中间分句以连接词形式结尾（-고 / -아서/-어서 / -(으)면），**只有最后一个分句**携带 해요 / 합니다，以及可选的过去时态。\n\n在类型化 DSL 中，你可以在最终 `VerbPart<…, \"Haeyo\">` 之前，在 `Sentence` 的 parts 数组中添加任意数量的中间 `VerbPart<…, \"And\">` 或 `VerbPart<…, \"Seo\">` 条目。对于 -(으)면 条件句，将 `ConditionalPhrase` 的 `Result` 参数本身设为包含进一步 -아서/-어서 链的 `Sentence`。\n\n请注意띄어쓰기：每个谓语形式（-고、-아서、-으면）都是独立的어절，在下一个词之前需要空格。",
      examples: [
        {
          jp: "저는 매일 학교에 가서 한국어를 공부하고 집에 와요",
          reading: "jeoneun maeil haggyoe gaseo hangugeoreul gongbuhago jibe wayo",
          en: "Every day I go to school, study Korean, and come home.",
          zh: "我每天去学校学习韩语，然后回家。",
          code: `import type { CommonNoun, Pronoun, Verb, HadaVerb, Adverb, VerbPart, NounPart, PronounPart, AdverbPart, ParticlePart, Sentence } from "typed-korean";


type 가다 = Verb & { dict:"가다"; stem:"가"; inf:"가"; past:"갔"; eu:"가"; prospective:"갈"; formalStem:"갑니" };
type 공부하다 = HadaVerb & { dict:"공부하다"; stem:"공부하"; inf:"공부해"; past:"공부했"; eu:"공부하"; prospective:"공부할"; formalStem:"공부합니" };
type 오다 = Verb & { dict:"오다"; stem:"오"; inf:"와"; past:"왔"; eu:"오"; prospective:"올"; formalStem:"옵니" };

type S = Sentence<[
  PronounPart<Pronoun<"저">>,
  ParticlePart<"는">,
  AdverbPart<Adverb<"매일">>,
  NounPart<CommonNoun<"학교">>,
  ParticlePart<"에">,
  VerbPart<가다, "Seo">,
  NounPart<CommonNoun<"한국어">>,
  ParticlePart<"를">,
  VerbPart<공부하다, "And">,
  NounPart<CommonNoun<"집">>,
  ParticlePart<"에">,
  VerbPart<오다, "Haeyo">
]>;
// S = "저는 매일 학교에 가서 한국어를 공부하고 집에 와요"`,
        },
        {
          jp: "시간이 있으면 친구를 만나서 영화를 봐요",
          reading: "sigani isseumyeon chingureul mannaseo yeonghwareul bwayo",
          en: "If I have time, I meet a friend and watch a movie.",
          zh: "如果有时间，我就见朋友然后看电影。",
          code: `import type { CommonNoun, Verb, ConditionalPhrase, VerbPart, NounPart, ParticlePart, Sentence } from "typed-korean";


type 있다 = Verb & { dict:"있다"; stem:"있"; inf:"있어"; past:"있었"; eu:"있으"; prospective:"있을"; formalStem:"있습니" };
type 만나다 = Verb & { dict:"만나다"; stem:"만나"; inf:"만나"; past:"만났"; eu:"만나"; prospective:"만날"; formalStem:"만납니" };
type 보다 = Verb & { dict:"보다"; stem:"보"; inf:"봐"; past:"봤"; eu:"보"; prospective:"볼"; formalStem:"봅니" };

type Condition = Sentence<[
  NounPart<CommonNoun<"시간">>,
  ParticlePart<"이">,
  VerbPart<있다, "If">
]>;
// Condition = "시간이 있으면"

type Result = Sentence<[
  NounPart<CommonNoun<"친구">>,
  ParticlePart<"를">,
  VerbPart<만나다, "Seo">,
  NounPart<CommonNoun<"영화">>,
  ParticlePart<"를">,
  VerbPart<보다, "Haeyo">
]>;
// Result = "친구를 만나서 영화를 봐요"

type S = ConditionalPhrase<Condition, Result>;
// S = "시간이 있으면 친구를 만나서 영화를 봐요"`,
        },
        {
          jp: "저는 매일 밥을 먹고 학교에 가서 한국어를 배워요",
          reading: "jeoneun maeil babeul meokgo haggyoe gaseo hangugeoreul baeweoyo",
          en: "Every day I eat, go to school, and learn Korean.",
          zh: "我每天吃饭，然后去学校学习韩语。",
          code: `import type { CommonNoun, Pronoun, Verb, Adverb, VerbPart, NounPart, PronounPart, AdverbPart, ParticlePart, Sentence } from "typed-korean";


type 먹다 = Verb & { dict:"먹다"; stem:"먹"; inf:"먹어"; past:"먹었"; eu:"먹으"; prospective:"먹을"; formalStem:"먹습니" };
type 가다 = Verb & { dict:"가다"; stem:"가"; inf:"가"; past:"갔"; eu:"가"; prospective:"갈"; formalStem:"갑니" };
type 배우다 = Verb & { dict:"배우다"; stem:"배우"; inf:"배워"; past:"배웠"; eu:"배우"; prospective:"배울"; formalStem:"배웁니" };

type S = Sentence<[
  PronounPart<Pronoun<"저">>,
  ParticlePart<"는">,
  AdverbPart<Adverb<"매일">>,
  NounPart<CommonNoun<"밥">>,
  ParticlePart<"을">,
  VerbPart<먹다, "And">,
  NounPart<CommonNoun<"학교">>,
  ParticlePart<"에">,
  VerbPart<가다, "Seo">,
  NounPart<CommonNoun<"한국어">>,
  ParticlePart<"를">,
  VerbPart<배우다, "Haeyo">
]>;
// S = "저는 매일 밥을 먹고 학교에 가서 한국어를 배워요"`,
        },
      ],
    },
  ],
};

export default chapter;
