import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "i04",
  level: "intermediate",
  order: 4,
  titleEn: "Future and intention: -(으)ㄹ 거예요",
  titleZh: "将来与意图：-(으)ㄹ 거예요",
  summaryEn:
    "To express a future action or intention in Korean, attach **-(으)ㄹ 거예요** to the verb stem. The allomorph depends on the final sound of the stem: use **-ㄹ 거예요** after a vowel-final stem, and **-을 거예요** after a consonant-final stem (받침). This is the standard polite-informal (해요체) future; the formal 합니다체 equivalent is **-(으)ㄹ 것입니다**.\n\n거예요 is analysed as the dependent noun **거** (a colloquial reduction of 것, 'thing/fact') plus the copula **예요**. Because 것 is a noun, the whole construction literally means 'it is a thing that [one] will do' — so -(으)ㄹ 거예요 expresses both future prediction and speaker intention.",
  summaryZh:
    "韩语表达将来动作或意图时，在动词词干后加 **-(으)ㄹ 거예요**。具体形式取决于词干末尾的音：元音结尾的词干用 **-ㄹ 거예요**，辅音结尾（有尾音/받침）的词干用 **-을 거예요**。这是礼貌非正式体（해요체）的将来时；正式体（합니다체）对应的形式是 **-(으)ㄹ 것입니다**。\n\n거예요 由依存名词 **거**（것，\"事/物\"的口语缩略形式）和系动词 **예요** 组成，字面意思是\"是将要做某事的事\"，因此 -(으)ㄹ 거예요 既可以表达将来的预测，也可以表达说话人的意图。",
  points: [
    {
      id: "i04-1",
      titleEn: "-ㄹ 거예요 with vowel-final stems",
      titleZh: "元音结尾词干后接 -ㄹ 거예요",
      bodyEn:
        "When the verb stem ends in a vowel (no 받침), simply attach **-ㄹ 거예요** directly to the stem.\n\nExamples: 가다 → 가 + ㄹ 거예요 → **갈 거예요**; 오다 → 올 거예요; 보다 → 볼 거예요. In the DSL the `\"Future\"` form handles this automatically: `VerbPart<가다, \"Future\">` resolves to `갈 거예요`.\n\nTime adverbs like **내일** (tomorrow) and **이따가** (in a bit / later) typically precede the verb phrase and clarify the future time frame.",
      bodyZh:
        "当动词词干末尾没有尾音（元音收尾）时，直接在词干后加 **-ㄹ 거예요**。\n\n例如：가다 → 가 + ㄹ 거예요 → **갈 거예요**；오다 → 올 거예요；보다 → 볼 거예요。在 DSL 中，`\"Future\"` 形式会自动处理这一规则：`VerbPart<가다, \"Future\">` 解析为 `갈 거예요`。\n\n时间副词 **내일**（明天）、**이따가**（一会儿/稍后）等通常置于谓语前，用来明确将来的时间。",
      examples: [
        {
          jp: "내일 갈 거예요",
          reading: "naeil gal geoyeyo",
          en: "(I) will go tomorrow.",
          zh: "明天（我）要去。",
          code: `import type { Verb, VerbPart, AdverbPart, Sentence } from "typed-korean";


type 가다 = Verb & { dict:"가다"; stem:"가"; inf:"가"; past:"갔"; eu:"가"; prospective:"갈"; formalStem:"갑니" };

type result = Sentence<[
  AdverbPart<"내일">,
  VerbPart<가다, "Future">
]>;
// result = "내일 갈 거예요"`,
        },
        {
          jp: "친구가 올 거예요",
          reading: "chinguga ol geoyeyo",
          en: "A friend will come.",
          zh: "朋友要来。",
          code: `import type { Verb, VerbPart, NounPart, ParticlePart, Sentence } from "typed-korean";


type 오다 = Verb & { dict:"오다"; stem:"오"; inf:"와"; past:"왔"; eu:"오"; prospective:"올"; formalStem:"옵니" };

type result = Sentence<[
  NounPart<"친구">, ParticlePart<"가">,
  VerbPart<오다, "Future">
]>;
// result = "친구가 올 거예요"`,
        },
        {
          jp: "저는 영화를 볼 거예요",
          reading: "jeoneun yeonghwareul bol geoyeyo",
          en: "I will watch a movie.",
          zh: "我要看电影。",
          code: `import type { Verb, VerbPart, NounPart, PronounPart, ParticlePart, Sentence } from "typed-korean";


type 보다 = Verb & { dict:"보다"; stem:"보"; inf:"봐"; past:"봤"; eu:"보"; prospective:"볼"; formalStem:"봅니" };

type result = Sentence<[
  PronounPart<"저">, ParticlePart<"는">,
  NounPart<"영화">, ParticlePart<"를">,
  VerbPart<보다, "Future">
]>;
// result = "저는 영화를 볼 거예요"`,
        },
      ],
    },
    {
      id: "i04-2",
      titleEn: "-을 거예요 with consonant-final stems (받침)",
      titleZh: "辅音结尾词干（받침）后接 -을 거예요",
      bodyEn:
        "When the verb stem ends in a consonant (받침), insert the buffer vowel **으** before ㄹ: stem + **-을 거예요**.\n\nExamples: 먹다 → 먹 + 을 거예요 → **먹을 거예요**; 읽다 → 읽을 거예요; 받다 → 받을 거예요. The DSL `\"Future\"` form again handles the selection automatically.\n\nNote: this is the same 으-insertion rule you already know from 으면 (if) and 으세요 (honorific imperative). Whenever the stem ends in a consonant and the suffix starts with ㄹ, 으 is inserted as a buffer.",
      bodyZh:
        "当动词词干末尾有尾音（받침）时，需要在 ㄹ 前插入连接元音 **으**：词干 + **-을 거예요**。\n\n例如：먹다 → 먹 + 을 거예요 → **먹을 거예요**；읽다 → 읽을 거예요；받다 → 받을 거예요。DSL 的 `\"Future\"` 形式同样会自动选择正确的异形体。\n\n注意：这与你已经学过的 으 插入规则（으면 \"如果\"、으세요 \"尊敬命令\"）完全相同。每当词干末尾有尾音而后缀以 ㄹ 开头时，就会插入 으 作为连接音节。",
      examples: [
        {
          jp: "책을 읽을 거예요",
          reading: "chaegeul ilgeul geoyeyo",
          en: "(I) will read a book.",
          zh: "（我）要读书。",
          code: `import type { Verb, VerbPart, NounPart, ParticlePart, Sentence } from "typed-korean";


type 읽다 = Verb & { dict:"읽다"; stem:"읽"; inf:"읽어"; past:"읽었"; eu:"읽으"; prospective:"읽을"; formalStem:"읽습니" };

type result = Sentence<[
  NounPart<"책">, ParticlePart<"을">,
  VerbPart<읽다, "Future">
]>;
// result = "책을 읽을 거예요"`,
        },
        {
          jp: "저는 밥을 먹을 거예요",
          reading: "jeoneun babeul meogeul geoyeyo",
          en: "I will eat rice.",
          zh: "我要吃饭。",
          code: `import type { Verb, VerbPart, NounPart, PronounPart, ParticlePart, Sentence } from "typed-korean";


type 먹다 = Verb & { dict:"먹다"; stem:"먹"; inf:"먹어"; past:"먹었"; eu:"먹으"; prospective:"먹을"; formalStem:"먹습니" };

type result = Sentence<[
  PronounPart<"저">, ParticlePart<"는">,
  NounPart<"밥">, ParticlePart<"을">,
  VerbPart<먹다, "Future">
]>;
// result = "저는 밥을 먹을 거예요"`,
        },
        {
          jp: "선물을 받을 거예요",
          reading: "seonmureul badeul geoyeyo",
          en: "(I) will receive a gift.",
          zh: "（我）要收到礼物。",
          code: `import type { Verb, VerbPart, NounPart, ParticlePart, Sentence } from "typed-korean";


type 받다 = Verb & { dict:"받다"; stem:"받"; inf:"받아"; past:"받았"; eu:"받으"; prospective:"받을"; formalStem:"받습니" };

type result = Sentence<[
  NounPart<"선물">, ParticlePart<"을">,
  VerbPart<받다, "Future">
]>;
// result = "선물을 받을 거예요"`,
        },
      ],
    },
    {
      id: "i04-3",
      titleEn: "하다 verbs in -(으)ㄹ 거예요",
      titleZh: "하다 动词的将来形 -(으)ㄹ 거예요",
      bodyEn:
        "하다-compound verbs (하다 verbs) behave the same way. The stem always ends in the vowel 아 (from 하), so the future suffix is **-ㄹ 거예요** (no 으 needed).\n\n공부하다 → 공부하 + ㄹ 거예요 → **공부할 거예요**; 일하다 → 일할 거예요; 말하다 → 말할 거예요.\n\nBecause the stem is vowel-final, these follow the same rule as point 1 — attach -ㄹ directly. The DSL `\"Future\"` form on a `HadaVerb` produces the correct output.",
      bodyZh:
        "하다 复合动词的用法完全相同。하다 的词干末尾始终是元音 아（来自 하），所以将来形后缀为 **-ㄹ 거예요**（无需插入 으）。\n\n공부하다 → 공부하 + ㄹ 거예요 → **공부할 거예요**；일하다 → 일할 거예요；말하다 → 말할 거예요。\n\n由于词干以元音结尾，这类动词遵循第 1 点的规则——直接接 -ㄹ。DSL 中对 `HadaVerb` 使用 `\"Future\"` 形式，会产生正确的输出。",
      examples: [
        {
          jp: "저는 공부할 거예요",
          reading: "jeoneun gongbuhal geoyeyo",
          en: "I will study.",
          zh: "我要学习。",
          code: `import type { HadaVerb, VerbPart, PronounPart, ParticlePart, Sentence } from "typed-korean";


type 공부하다 = HadaVerb & { dict:"공부하다"; stem:"공부하"; inf:"공부해"; past:"공부했"; eu:"공부하"; prospective:"공부할"; formalStem:"공부합니" };

type result = Sentence<[
  PronounPart<"저">, ParticlePart<"는">,
  VerbPart<공부하다, "Future">
]>;
// result = "저는 공부할 거예요"`,
        },
        {
          jp: "저는 한국어를 공부할 거예요",
          reading: "jeoneun hangugeoreul gongbuhal geoyeyo",
          en: "I will study Korean.",
          zh: "我要学习韩语。",
          code: `import type { HadaVerb, VerbPart, PronounPart, ProperNounPart, ParticlePart, Sentence } from "typed-korean";


type 공부하다 = HadaVerb & { dict:"공부하다"; stem:"공부하"; inf:"공부해"; past:"공부했"; eu:"공부하"; prospective:"공부할"; formalStem:"공부합니" };

type result = Sentence<[
  PronounPart<"저">, ParticlePart<"는">,
  ProperNounPart<"한국어">, ParticlePart<"를">,
  VerbPart<공부하다, "Future">
]>;
// result = "저는 한국어를 공부할 거예요"`,
        },
        {
          jp: "내일 일할 거예요",
          reading: "naeil ilhal geoyeyo",
          en: "(I) will work tomorrow.",
          zh: "明天（我）要上班。",
          code: `import type { HadaVerb, VerbPart, AdverbPart, Sentence } from "typed-korean";


type 일하다 = HadaVerb & { dict:"일하다"; stem:"일하"; inf:"일해"; past:"일했"; eu:"일하"; prospective:"일할"; formalStem:"일합니" };

type result = Sentence<[
  AdverbPart<"내일">,
  VerbPart<일하다, "Future">
]>;
// result = "내일 일할 거예요"`,
        },
      ],
    },
    {
      id: "i04-4",
      titleEn: "Formal future: -(으)ㄹ 것입니다",
      titleZh: "正式体将来形：-(으)ㄹ 것입니다",
      bodyEn:
        "In formal registers (presentations, news broadcasts, written announcements), the future construction is **-(으)ㄹ 것입니다** — the uncontracted form of 거, which is **것**, followed by the formal copula **입니다**.\n\nThe rule for choosing 으 is identical: vowel-final stem → **-ㄹ 것입니다**; consonant-final stem → **-을 것입니다**.\n\nBecause -(으)ㄹ 것입니다 is not a single DSL form, we compose the subject with `PhraseWithParticle` and append the remainder as a typed literal. This keeps the subject's particle logic typed while marking the rest as a surface form.",
      bodyZh:
        "在正式语域（演讲、新闻播报、书面通知）中，将来时构式为 **-(으)ㄹ 것입니다**——它使用 **것**（거의非缩略形式）加上正式体系动词 **입니다**。\n\n으 插入规则与之前完全相同：元音结尾词干用 **-ㄹ 것입니다**，辅音结尾词干用 **-을 것입니다**。\n\n由于 -(으)ㄹ 것입니다 不是 DSL 的单一内置形式，我们用 `PhraseWithParticle` 处理主语的助词逻辑，其余部分写成字面字符串。这样既保留了类型检查，又能正确输出目标句子。",
      examples: [
        {
          jp: "저는 내일 갈 것입니다",
          reading: "jeoneun naeil gal geossimnida",
          en: "I will go tomorrow.",
          zh: "我明天要去。",
          code: `import type { PhraseWithParticle } from "typed-korean";


type result = \`\${PhraseWithParticle<"저", "는">} 내일 갈 것입니다\`;
// result = "저는 내일 갈 것입니다"`,
        },
        {
          jp: "책을 읽을 것입니다",
          reading: "chaegeul ilgeul geossimnida",
          en: "(I) will read a book.",
          zh: "（我）要读书。",
          code: `import type { PhraseWithParticle } from "typed-korean";


type result = \`\${PhraseWithParticle<"책", "을">} 읽을 것입니다\`;
// result = "책을 읽을 것입니다"`,
        },
        {
          jp: "저는 열심히 공부할 것입니다",
          reading: "jeoneun yeolsimhi gongbuhal geossimnida",
          en: "I will study hard.",
          zh: "我要努力学习。",
          code: `import type { PhraseWithParticle } from "typed-korean";


type result = \`\${PhraseWithParticle<"저", "는">} 열심히 공부할 것입니다\`;
// result = "저는 열심히 공부할 것입니다"`,
        },
      ],
    },
  ],
};

export default chapter;
