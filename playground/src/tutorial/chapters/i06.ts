import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "i06",
  level: "intermediate",
  order: 6,
  titleEn: "Suggestions: -(으)ㄹ까요?",
  titleZh: "提议：-(으)ㄹ까요?",
  summaryEn:
    "**-(으)ㄹ까요?** is the standard Korean propositive: it invites your listener to do something together, or tentatively asks for the listener's opinion. English equivalents include *Shall we …?*, *How about we …?*, or *What do you think about …?*.\n\nThe ending attaches to the verb's **prospective stem** (the field `prospective` in the DSL): if that stem already ends in **-ㄹ** (vowel-final or ㄹ-final stems), add only **까요?**; if it ends in **-을** (consonant-final stems), the full suffix is **을까요?**. The two shapes together give the traditional alternation **-ㄹ까요 / -을까요**.",
  summaryZh:
    "**-(으)ㄹ까요?** 是韩语标准的提议/商量句型，用于邀请对方一起做某事，或试探性地询问对方意见。英语对应表达包括 *Shall we …?*、*How about we …?* 或 *What do you think about …?*。\n\n该结尾附加在动词的**展望词干**（DSL 中的 `prospective` 字段）上：若展望词干已以 **-ㄹ** 结尾（元音结尾或 ㄹ-结尾词干），只需加 **까요?**；若以 **-을** 结尾（辅音结尾词干），则完整后缀为 **을까요?**。这两种形式合称 **-ㄹ까요 / -을까요** 交替变化。",
  points: [
    {
      id: "i06-1",
      titleEn: "Core pattern: -(으)ㄹ까요? with common verbs",
      titleZh: "核心句型：常见动词 + -(으)ㄹ까요?",
      bodyEn:
        "The `Propositive` form in the DSL appends **까요** to the verb's `prospective` stem. For vowel-final stems the prospective already carries **-ㄹ** (갈, 볼), giving **갈까요, 볼까요**. For consonant-final stems the prospective carries **-을** (먹을), giving **먹을까요**.\n\nThe resulting form is 해요체 in register — polite but informal, suitable for friends and colleagues. There is no separate 합니다체 propositive that ends in -까요?; the same form is used across situations. A written **?** is conventionally placed at the end of the sentence.",
      bodyZh:
        "DSL 中的 `Propositive` 形式将 **까요** 附加到动词的 `prospective` 词干上。元音结尾词干的展望形已带有 **-ㄹ**（갈、볼），得到 **갈까요、볼까요**。辅音结尾词干的展望形带有 **-을**（먹을），得到 **먹을까요**。\n\n该形式属于 해요체语域——礼貌但非正式，适用于朋友和同事之间。-(으)ㄹ까요? 本身不区分 합니다체，同一形式适用于各种语境。书写时句末惯例加上 **?**。",
      examples: [
        {
          jp: "같이 갈까요?",
          reading: "gachi galkkayo",
          en: "Shall we go together?",
          zh: "我们一起去吗？",
          code: `import type { Verb, Adverb, VerbPart, AdverbPart, PunctuationPart, Sentence } from "typed-korean";


type 가다 = Verb & { dict:"가다"; stem:"가"; inf:"가"; past:"갔"; eu:"가"; prospective:"갈"; formalStem:"갑니" };

type S = Sentence<[
  AdverbPart<Adverb<"같이">>,
  VerbPart<가다, "Propositive">,
  PunctuationPart<"?">
]>;
// S = "같이 갈까요?"`,
        },
        {
          jp: "영화를 볼까요?",
          reading: "yeonghwareul bolkkayo",
          en: "Shall we watch a movie?",
          zh: "我们看电影吗？",
          code: `import type { CommonNoun, Verb, VerbPart, NounPart, ParticlePart, PunctuationPart, Sentence } from "typed-korean";


type 보다 = Verb & { dict:"보다"; stem:"보"; inf:"봐"; past:"봤"; eu:"보"; prospective:"볼"; formalStem:"봅니" };

type S = Sentence<[
  NounPart<CommonNoun<"영화">>,
  ParticlePart<"를">,
  VerbPart<보다, "Propositive">,
  PunctuationPart<"?">
]>;
// S = "영화를 볼까요?"`,
        },
        {
          jp: "밥을 먹을까요?",
          reading: "babeul meogeulkkayo",
          en: "Shall we eat?",
          zh: "我们吃饭吗？",
          code: `import type { CommonNoun, Verb, VerbPart, NounPart, ParticlePart, PunctuationPart, Sentence } from "typed-korean";


type 먹다 = Verb & { dict:"먹다"; stem:"먹"; inf:"먹어"; past:"먹었"; eu:"먹으"; prospective:"먹을"; formalStem:"먹습니" };

type S = Sentence<[
  NounPart<CommonNoun<"밥">>,
  ParticlePart<"을">,
  VerbPart<먹다, "Propositive">,
  PunctuationPart<"?">
]>;
// S = "밥을 먹을까요?"`,
        },
      ],
    },
    {
      id: "i06-2",
      titleEn: "받침 allomorphs: -ㄹ까요 vs -을까요",
      titleZh: "받침 变体：-ㄹ까요 与 -을까요",
      bodyEn:
        "The choice between **-ㄹ까요** and **-을까요** depends entirely on the shape of the `prospective` stem stored in each verb definition:\n\n- **Vowel-final stem** (가다, 보다, 마시다, 만나다): prospective ends in **-ㄹ** → suffix is just **까요** → 갈까요, 볼까요, 마실까요, 만날까요.\n- **Consonant-final stem** (먹다, 읽다, 받다): prospective ends in **-을** → suffix is **까요** appended after the -을 → 먹을까요, 읽을까요, 받을까요.\n- **하다 verbs** (공부하다, 일하다): prospective ends in **-할** → 공부할까요, 일할까요.\n\nThe DSL encodes all of this in the `prospective` field, so `ConjugateVerb<V, \"Propositive\">` always produces the correct surface form.",
      bodyZh:
        "**-ㄹ까요** 和 **-을까요** 的选择完全取决于每个动词定义中存储的 `prospective` 词干的形态：\n\n- **元音结尾词干**（가다、보다、마시다、만나다）：展望形以 **-ㄹ** 结尾 → 后缀仅为 **까요** → 갈까요、볼까요、마실까요、만날까요。\n- **辅音结尾词干**（먹다、읽다、받다）：展望形以 **-을** 结尾 → 在 -을 之后附加 **까요** → 먹을까요、읽을까요、받을까요。\n- **하다 类动词**（공부하다、일하다）：展望形以 **-할** 结尾 → 공부할까요、일할까요。\n\nDSL 已将这一切编码在 `prospective` 字段中，因此 `ConjugateVerb<V, \"Propositive\">` 始终生成正确的表层形式。",
      examples: [
        {
          jp: "커피를 마실까요?",
          reading: "keopireul masilkkayo",
          en: "Shall we drink some coffee?",
          zh: "我们喝咖啡吗？",
          code: `import type { CommonNoun, Verb, VerbPart, NounPart, ParticlePart, PunctuationPart, Sentence } from "typed-korean";


type 마시다 = Verb & { dict:"마시다"; stem:"마시"; inf:"마셔"; past:"마셨"; eu:"마시"; prospective:"마실"; formalStem:"마십니" };

type S = Sentence<[
  NounPart<CommonNoun<"커피">>,
  ParticlePart<"를">,
  VerbPart<마시다, "Propositive">,
  PunctuationPart<"?">
]>;
// S = "커피를 마실까요?"`,
        },
        {
          jp: "같이 공부할까요?",
          reading: "gachi gongbuhalkkayo",
          en: "Shall we study together?",
          zh: "我们一起学习吗？",
          code: `import type { HadaVerb, Adverb, VerbPart, AdverbPart, PunctuationPart, Sentence } from "typed-korean";


type 공부하다 = HadaVerb & { dict:"공부하다"; stem:"공부하"; inf:"공부해"; past:"공부했"; eu:"공부하"; prospective:"공부할"; formalStem:"공부합니" };

type S = Sentence<[
  AdverbPart<Adverb<"같이">>,
  VerbPart<공부하다, "Propositive">,
  PunctuationPart<"?">
]>;
// S = "같이 공부할까요?"`,
        },
        {
          jp: "음악을 들을까요?",
          reading: "eumageul deureulkkayo",
          en: "Shall we listen to some music?",
          zh: "我们听音乐吗？",
          code: `import type { CommonNoun, IrregularVerb, VerbPart, NounPart, ParticlePart, PunctuationPart, Sentence } from "typed-korean";


// 듣다 is a ㄷ-irregular verb; its prospective stem is "들을"
type 듣다 = IrregularVerb & { dict:"듣다"; stem:"듣"; inf:"들어"; past:"들었"; eu:"들으"; prospective:"들을"; formalStem:"듣습니" };

type S = Sentence<[
  NounPart<CommonNoun<"음악">>,
  ParticlePart<"을">,
  VerbPart<듣다, "Propositive">,
  PunctuationPart<"?">
]>;
// S = "음악을 들을까요?"`,
        },
      ],
    },
    {
      id: "i06-3",
      titleEn: "Adding a subject or adverb: 우리, 같이, 내일",
      titleZh: "添加主语或副词：우리、같이、내일",
      bodyEn:
        "In natural Korean speech, propositive sentences often include the first-person plural pronoun **우리** (we/our) as the subject, or time and manner adverbs like **내일** (tomorrow) and **같이** (together). These elements precede the verb in the order: [subject] [time] [object] [manner] **verb + -(으)ㄹ까요?**\n\nThe topic/subject particle after 우리 is often **dropped** in casual speech (우리 갈까요? is more natural than 우리가 갈까요?), but both are grammatical. In the typed examples below, we include the particle to keep the structure explicit.",
      bodyZh:
        "在自然的韩语口语中，提议句常包含第一人称复数代词 **우리**（我们）作主语，或时间/方式副词如 **내일**（明天）和 **같이**（一起）。这些成分在动词前的顺序为：[主语] [时间] [宾语] [方式] **动词 + -(으)ㄹ까요?**\n\n우리 后的主题/主格助词在口语中经常**省略**（우리 갈까요? 比 우리가 갈까요? 更自然），但两者语法上均正确。下面的类型示例为了使结构清晰，保留了助词。",
      examples: [
        {
          jp: "우리 내일 만날까요?",
          reading: "uri naeil mannalkkayo",
          en: "Shall we meet tomorrow?",
          zh: "我们明天见面吗？",
          code: `import type { Pronoun, Verb, Adverb, VerbPart, PronounPart, AdverbPart, PunctuationPart, Sentence } from "typed-korean";


type 만나다 = Verb & { dict:"만나다"; stem:"만나"; inf:"만나"; past:"만났"; eu:"만나"; prospective:"만날"; formalStem:"만납니" };

type S = Sentence<[
  PronounPart<Pronoun<"우리">>,
  AdverbPart<Adverb<"내일">>,
  VerbPart<만나다, "Propositive">,
  PunctuationPart<"?">
]>;
// S = "우리 내일 만날까요?"`,
        },
        {
          jp: "우리 같이 영화를 볼까요?",
          reading: "uri gachi yeonghwareul bolkkayo",
          en: "Shall we watch a movie together?",
          zh: "我们一起看电影吗？",
          code: `import type { CommonNoun, Pronoun, Verb, Adverb, VerbPart, NounPart, PronounPart, AdverbPart, ParticlePart, PunctuationPart, Sentence } from "typed-korean";


type 보다 = Verb & { dict:"보다"; stem:"보"; inf:"봐"; past:"봤"; eu:"보"; prospective:"볼"; formalStem:"봅니" };

type S = Sentence<[
  PronounPart<Pronoun<"우리">>,
  AdverbPart<Adverb<"같이">>,
  NounPart<CommonNoun<"영화">>,
  ParticlePart<"를">,
  VerbPart<보다, "Propositive">,
  PunctuationPart<"?">
]>;
// S = "우리 같이 영화를 볼까요?"`,
        },
        {
          jp: "우리 내일 밥을 먹을까요?",
          reading: "uri naeil babeul meogeulkkayo",
          en: "Shall we eat together tomorrow?",
          zh: "我们明天一起吃饭吗？",
          code: `import type { CommonNoun, Pronoun, Verb, Adverb, VerbPart, NounPart, PronounPart, AdverbPart, ParticlePart, PunctuationPart, Sentence } from "typed-korean";


type 먹다 = Verb & { dict:"먹다"; stem:"먹"; inf:"먹어"; past:"먹었"; eu:"먹으"; prospective:"먹을"; formalStem:"먹습니" };

type S = Sentence<[
  PronounPart<Pronoun<"우리">>,
  AdverbPart<Adverb<"내일">>,
  NounPart<CommonNoun<"밥">>,
  ParticlePart<"을">,
  VerbPart<먹다, "Propositive">,
  PunctuationPart<"?">
]>;
// S = "우리 내일 밥을 먹을까요?"`,
        },
      ],
    },
    {
      id: "i06-4",
      titleEn: "Propositive with place: 에서 + -(으)ㄹ까요?",
      titleZh: "加地点的提议句：에서 + -(으)ㄹ까요?",
      bodyEn:
        "When suggesting doing something **at a specific place**, add a 에서 (location of action) phrase before the verb. The word order is: [place에서] [object를/을] **verb-(으)ㄹ까요?** This pattern produces richer, more contextual suggestions.\n\nNaturally, 우리 and adverbs like 같이 or 내일 can be stacked on top for even fuller sentences. Pay attention to particle choice: the **location of action** always takes **에서**, not **에**.",
      bodyZh:
        "当提议在**特定地点**做某事时，在动词前添加 에서（动作发生地）短语。语序为：[地点에서] [宾语를/을] **动词-(으)ㄹ까요?** 这一句型能产生更丰富、更具语境的提议。\n\n当然，也可以在前面叠加 우리 以及 같이、내일 等副词，构成更完整的句子。注意助词选择：**动作发生地**始终用 **에서**，而非 **에**。",
      examples: [
        {
          jp: "카페에서 커피를 마실까요?",
          reading: "kapeseo keopireul masilkkayo",
          en: "Shall we drink coffee at a café?",
          zh: "我们去咖啡馆喝咖啡吗？",
          code: `import type { CommonNoun, Verb, VerbPart, NounPart, ParticlePart, PunctuationPart, Sentence } from "typed-korean";


type 마시다 = Verb & { dict:"마시다"; stem:"마시"; inf:"마셔"; past:"마셨"; eu:"마시"; prospective:"마실"; formalStem:"마십니" };

type S = Sentence<[
  NounPart<CommonNoun<"카페">>,
  ParticlePart<"에서">,
  NounPart<CommonNoun<"커피">>,
  ParticlePart<"를">,
  VerbPart<마시다, "Propositive">,
  PunctuationPart<"?">
]>;
// S = "카페에서 커피를 마실까요?"`,
        },
        {
          jp: "도서관에서 같이 공부할까요?",
          reading: "doseogwaneseo gachi gongbuhalkkayo",
          en: "Shall we study together at the library?",
          zh: "我们一起去图书馆学习吗？",
          code: `import type { CommonNoun, HadaVerb, Adverb, VerbPart, NounPart, AdverbPart, ParticlePart, PunctuationPart, Sentence } from "typed-korean";


type 공부하다 = HadaVerb & { dict:"공부하다"; stem:"공부하"; inf:"공부해"; past:"공부했"; eu:"공부하"; prospective:"공부할"; formalStem:"공부합니" };

type S = Sentence<[
  NounPart<CommonNoun<"도서관">>,
  ParticlePart<"에서">,
  AdverbPart<Adverb<"같이">>,
  VerbPart<공부하다, "Propositive">,
  PunctuationPart<"?">
]>;
// S = "도서관에서 같이 공부할까요?"`,
        },
        {
          jp: "집에서 같이 밥을 먹을까요?",
          reading: "jibeseo gachi babeul meogeulkkayo",
          en: "Shall we eat together at home?",
          zh: "我们一起在家吃饭吗？",
          code: `import type { CommonNoun, Verb, Adverb, VerbPart, NounPart, AdverbPart, ParticlePart, PunctuationPart, Sentence } from "typed-korean";


type 먹다 = Verb & { dict:"먹다"; stem:"먹"; inf:"먹어"; past:"먹었"; eu:"먹으"; prospective:"먹을"; formalStem:"먹습니" };

type S = Sentence<[
  NounPart<CommonNoun<"집">>,
  ParticlePart<"에서">,
  AdverbPart<Adverb<"같이">>,
  NounPart<CommonNoun<"밥">>,
  ParticlePart<"을">,
  VerbPart<먹다, "Propositive">,
  PunctuationPart<"?">
]>;
// S = "집에서 같이 밥을 먹을까요?"`,
        },
      ],
    },
  ],
};

export default chapter;
