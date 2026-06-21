import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "a05",
  level: "advanced",
  order: 5,
  titleEn: "Quotation: -라고 하다 (introduction)",
  titleZh: "引用：-라고 하다（入门）",
  summaryEn:
    "Korean marks **direct quotations** with the particle-like ending **-라고** (or **-이라고** after a consonant-final noun) attached immediately to the last element of the quoted clause, followed by a reporting verb such as **하다** (say). Because the quotative ending -라고 is not part of the DSL's built-in form set, the quoted chunk plus -라고 is assembled as a `LiteralPart`, while the surrounding subject phrase and the reporting verb **하다** remain fully typed.\n\nThe reporting verb 하다 conjugates normally: **해요** (해요체, informal polite), **합니다** (합니다체, formal polite), **했어요** (past 해요체), **했습니다** (past 합니다체). Understanding this pattern unlocks a wide range of hearsay, quotation, and paraphrasing sentences in Korean.",
  summaryZh:
    "韩语用**直接引用**助词形式 **-라고**（辅音结尾名词后为 **-이라고**）紧接在被引用小句的最后一个词之后，再跟报告动词 **하다**（说）来标记直接引语。由于 -라고 不属于 DSL 内置的形态变化集，被引用的片段加上 -라고 整体放入 `LiteralPart`，而前面的主语短语和报告动词 **하다** 则保持完整的类型化形式。\n\n报告动词 하다 按常规变化：**해요**（해요체，非正式礼貌体）、**합니다**（합니다体，正式礼貌体）、**했어요**（过去 해요체）、**했습니다**（过去 합니다体）。掌握这一句型，可以在韩语中表达广泛的传闻、引用和转述句。",
  points: [
    {
      id: "a05-1",
      titleEn: "Core pattern: [clause]라고 해요",
      titleZh: "核心句型：[小句]라고 해요",
      bodyEn:
        "The basic quotation frame in 해요체 is:\n\n**[subject이/가] [quoted clause]라고 해요**\n\nThe ending **-라고** clings directly to the last syllable of the quoted clause with no space. Because -라고 is not a DSL-recognised conjugation form, wrap the entire quoted expression (including the quotation-mark delimiters if present) together with -라고 in a single `LiteralPart`. The reporting verb **하다** is then typed with `VerbPart<하다, \"Haeyo\">`, which yields **해요**.\n\n**받침 note:** -라고 is used when the quoted clause ends in a vowel-final syllable (and generally for verbal/adjectival clauses). A copula-based quotation ending in -이다 uses **-라고** when the preceding noun is vowel-final, and **-이라고** when it ends in a consonant — but for clauses ending in polite -요 forms this distinction does not apply.",
      bodyZh:
        "해요体的基本引用句型为：\n\n**[主语이/가] [被引用小句]라고 해요**\n\n**-라고** 直接紧贴被引用小句的最后一个音节，不加空格。因为 -라고 不是 DSL 的内置变化形式，所以将整个被引用表达（包括引号）与 -라고 一起放入一个 `LiteralPart`。报告动词 **하다** 则用 `VerbPart<하다, \"Haeyo\">` 类型化，输出 **해요**。\n\n**받침 说明：** -라고 用于被引用小句以元音结尾的情况（以及一般的动词/形容词小句）。当引用涉及 -이다（系动词）时：前接名词为元音结尾时用 **-라고**，辅音结尾时用 **-이라고**——但对于以礼貌体 -요 结尾的小句，这一区别不适用。",
      examples: [
        {
          jp: '친구가 "바빠요"라고 해요',
          reading: 'chinguga "bappayo"rago haeyo',
          en: "My friend says they are busy.",
          zh: "朋友说他/她很忙。",
          code: `import type { CommonNoun, HadaVerb, VerbPart, NounPart, ParticlePart, LiteralPart, Sentence } from "typed-korean";


type 하다 = HadaVerb & { dict:"하다"; stem:"하"; inf:"해"; past:"했"; eu:"하"; prospective:"할"; formalStem:"합니" };

type S = Sentence<[
  NounPart<CommonNoun<"친구">>,
  ParticlePart<"가">,
  LiteralPart<'"바빠요"라고'>,
  VerbPart<하다, "Haeyo">
]>;
// S = '친구가 "바빠요"라고 해요'`,
        },
        {
          jp: '선생님이 "좋아요"라고 해요',
          reading: 'seonsaengnimi "joayo"rago haeyo',
          en: "The teacher says it is good.",
          zh: "老师说很好。",
          code: `import type { CommonNoun, HadaVerb, VerbPart, NounPart, ParticlePart, LiteralPart, Sentence } from "typed-korean";


type 하다 = HadaVerb & { dict:"하다"; stem:"하"; inf:"해"; past:"했"; eu:"하"; prospective:"할"; formalStem:"합니" };

type S = Sentence<[
  NounPart<CommonNoun<"선생님">>,
  ParticlePart<"이">,
  LiteralPart<'"좋아요"라고'>,
  VerbPart<하다, "Haeyo">
]>;
// S = '선생님이 "좋아요"라고 해요'`,
        },
        {
          jp: '어머니가 "집에 있어요"라고 해요',
          reading: 'eomeoniga "jibe isseoyo"rago haeyo',
          en: "Mother says she is at home.",
          zh: "妈妈说她在家。",
          code: `import type { CommonNoun, HadaVerb, VerbPart, NounPart, ParticlePart, LiteralPart, Sentence } from "typed-korean";


type 하다 = HadaVerb & { dict:"하다"; stem:"하"; inf:"해"; past:"했"; eu:"하"; prospective:"할"; formalStem:"합니" };

// The inner clause "집에 있어요" is typed as a LiteralPart together with 라고
// because -라고 must attach directly to 있어요 with no space.
type S = Sentence<[
  NounPart<CommonNoun<"어머니">>,
  ParticlePart<"가">,
  LiteralPart<'"집에 있어요"라고'>,
  VerbPart<하다, "Haeyo">
]>;
// S = '어머니가 "집에 있어요"라고 해요'`,
        },
      ],
    },
    {
      id: "a05-2",
      titleEn: "Past quotation: [clause]라고 했어요",
      titleZh: "过去式引用：[小句]라고 했어요",
      bodyEn:
        "To report something that was **said in the past**, conjugate 하다 to the past 해요체 form **했어요** using `VerbPart<하다, \"PastHaeyo\">`. The quoted clause itself keeps whatever tense it had when spoken — including future-tense forms such as **갈 거예요** (will go), which is the `Future` form of 가다.\n\nThis is one of the most natural quotation patterns in everyday Korean speech: **[subject]이/가 [quoted clause]라고 했어요** literally means \"[subject] said [quoted clause]\".\n\nNote how the inner clause can be any polite-style sentence — adjectives in 아/어요, verbs in past or future forms, even full object + verb clauses.",
      bodyZh:
        "要转述**过去说过的话**，将 하다 用 `VerbPart<하다, \"PastHaeyo\">` 变为过去 해요体形式 **했어요**。被引用的小句本身保留其说话时的时态——包括将来时形式 **갈 거예요**（将要去），这是 가다 的 `Future` 变化形式。\n\n这是日常韩语口语中最自然的引用句型之一：**[主语]이/가 [被引用小句]라고 했어요** 字面意思为\"[主语] 说了 [被引用小句]\"。\n\n注意被引用的小句可以是任何礼貌体句子——形容词的 아/어요 形，动词的过去时或将来时，甚至带宾语的完整小句。",
      examples: [
        {
          jp: '친구가 "갈 거예요"라고 했어요',
          reading: 'chinguga "gal geoyeyo"rago haesseoyo',
          en: "My friend said they would go.",
          zh: "朋友说他/她要去。",
          code: `import type { CommonNoun, HadaVerb, VerbPart, NounPart, ParticlePart, LiteralPart, Sentence } from "typed-korean";


type 하다 = HadaVerb & { dict:"하다"; stem:"하"; inf:"해"; past:"했"; eu:"하"; prospective:"할"; formalStem:"합니" };

// Inner clause: 갈 거예요 = Future form of 가다 (갈 + 거예요)
// The entire quoted chunk + 라고 is a LiteralPart so -라고 clings with no space.
type S = Sentence<[
  NounPart<CommonNoun<"친구">>,
  ParticlePart<"가">,
  LiteralPart<'"갈 거예요"라고'>,
  VerbPart<하다, "PastHaeyo">
]>;
// S = '친구가 "갈 거예요"라고 했어요'`,
        },
        {
          jp: '선생님이 "어려워요"라고 했어요',
          reading: 'seonsaengnimi "eoryeowoyo"rago haesseoyo',
          en: "The teacher said it was difficult.",
          zh: "老师说很难。",
          code: `import type { CommonNoun, HadaVerb, VerbPart, NounPart, ParticlePart, LiteralPart, Sentence } from "typed-korean";


type 하다 = HadaVerb & { dict:"하다"; stem:"하"; inf:"해"; past:"했"; eu:"하"; prospective:"할"; formalStem:"합니" };

// Inner clause: 어려워요 = Haeyo form of 어렵다 (ㅂ-irregular → 어려워요)
type S = Sentence<[
  NounPart<CommonNoun<"선생님">>,
  ParticlePart<"이">,
  LiteralPart<'"어려워요"라고'>,
  VerbPart<하다, "PastHaeyo">
]>;
// S = '선생님이 "어려워요"라고 했어요'`,
        },
        {
          jp: '친구가 "밥을 먹었어요"라고 했어요',
          reading: 'chinguga "babeul meogeosseoyo"rago haesseoyo',
          en: "My friend said they had eaten.",
          zh: "朋友说他/她已经吃饭了。",
          code: `import type { CommonNoun, HadaVerb, VerbPart, NounPart, ParticlePart, LiteralPart, Sentence } from "typed-korean";


type 하다 = HadaVerb & { dict:"하다"; stem:"하"; inf:"해"; past:"했"; eu:"하"; prospective:"할"; formalStem:"합니" };

// Inner clause: 밥을 먹었어요 = PastHaeyo form of 먹다 with object 밥을
type S = Sentence<[
  NounPart<CommonNoun<"친구">>,
  ParticlePart<"가">,
  LiteralPart<'"밥을 먹었어요"라고'>,
  VerbPart<하다, "PastHaeyo">
]>;
// S = '친구가 "밥을 먹었어요"라고 했어요'`,
        },
      ],
    },
    {
      id: "a05-3",
      titleEn: "Formal register: -라고 합니다 / 했습니다",
      titleZh: "正式体：-라고 합니다 / 했습니다",
      bodyEn:
        "In formal or written Korean (합니다체), the reporting verb 하다 takes its formal polite forms: **합니다** (present) or **했습니다** (past). These are produced with `VerbPart<하다, \"Hamnida\">` and `VerbPart<하다, \"PastHamnida\">` respectively. The quoted clause itself is unchanged — the register shift applies only to the reporting verb.\n\nThe 합니다체 is typically used in news broadcasts, formal announcements, business settings, and academic writing. Contrast:\n\n- **해요체 (informal polite):** …라고 해요 / 했어요\n- **합니다체 (formal polite):** …라고 합니다 / 했습니다",
      bodyZh:
        "在正式或书面韩语（합니다体）中，报告动词 하다 采用其正式礼貌体形式：**합니다**（现在时）或 **했습니다**（过去时）。分别用 `VerbPart<하다, \"Hamnida\">` 和 `VerbPart<하다, \"PastHamnida\">` 生成。被引用的小句本身不变——语域转变仅体现在报告动词上。\n\n합니다체 通常用于新闻播报、正式通知、商务场合和学术写作。对比如下：\n\n- **해요体（非正式礼貌体）：** …라고 해요 / 했어요\n- **합니다体（正式礼貌体）：** …라고 합니다 / 했습니다",
      examples: [
        {
          jp: '친구가 "바빠요"라고 합니다',
          reading: 'chinguga "bappayo"rago hamnida',
          en: "My friend says they are busy. (formal)",
          zh: "朋友说他/她很忙。（正式）",
          code: `import type { CommonNoun, HadaVerb, VerbPart, NounPart, ParticlePart, LiteralPart, Sentence } from "typed-korean";


type 하다 = HadaVerb & { dict:"하다"; stem:"하"; inf:"해"; past:"했"; eu:"하"; prospective:"할"; formalStem:"합니" };

type S = Sentence<[
  NounPart<CommonNoun<"친구">>,
  ParticlePart<"가">,
  LiteralPart<'"바빠요"라고'>,
  VerbPart<하다, "Hamnida">
]>;
// S = '친구가 "바빠요"라고 합니다'`,
        },
        {
          jp: '선생님이 "갈 거예요"라고 했습니다',
          reading: 'seonsaengnimi "gal geoyeyo"rago haesseumnida',
          en: "The teacher said they would go. (formal)",
          zh: "老师说他/她要去。（正式）",
          code: `import type { CommonNoun, HadaVerb, VerbPart, NounPart, ParticlePart, LiteralPart, Sentence } from "typed-korean";


type 하다 = HadaVerb & { dict:"하다"; stem:"하"; inf:"해"; past:"했"; eu:"하"; prospective:"할"; formalStem:"합니" };

type S = Sentence<[
  NounPart<CommonNoun<"선생님">>,
  ParticlePart<"이">,
  LiteralPart<'"갈 거예요"라고'>,
  VerbPart<하다, "PastHamnida">
]>;
// S = '선생님이 "갈 거예요"라고 했습니다'`,
        },
      ],
    },
    {
      id: "a05-4",
      titleEn: "Richer inner clauses: object + verb and negative forms",
      titleZh: "更丰富的内部小句：带宾语的动词和否定形式",
      bodyEn:
        "The quoted clause can be any Korean sentence in its polite or plain form — including sentences with objects, negative constructions, or future/progressive forms. The typed structure stays the same: the entire quoted string together with -라고 forms one `LiteralPart`, the subject phrase uses standard typed particles, and the reporting verb 하다 is `VerbPart<하다, Form>`.\n\nFor **negative inner clauses**, Korean uses **안 + verb** (short negation) or **verb-지 않아요** (long negation). Both appear naturally inside quotation frames.\n\nAs sentences grow more complex, the `LiteralPart` for the inner clause can contain multi-word clauses — this is the idiomatic way to handle quotation in the typed system, keeping the outer grammar fully typed while the quoted speech is represented as a literal string.",
      bodyZh:
        "被引用的小句可以是任何礼貌体或普通体的韩语句子——包括带宾语的句子、否定结构或将来时/进行时形式。类型结构保持不变：整个被引用字符串加上 -라고 构成一个 `LiteralPart`，主语短语使用标准类型化的助词，报告动词 하다 为 `VerbPart<하다, Form>`。\n\n对于**否定内部小句**，韩语使用 **안 + 动词**（短否定）或 **动词-지 않아요**（长否定）。两种形式都能自然地出现在引用句型中。\n\n随着句子变得更复杂，内部小句的 `LiteralPart` 可以包含多词小句——这是类型化系统中处理引用的惯用方式，使外部语法保持完整类型化，而被引用的话语则表示为字面量字符串。",
      examples: [
        {
          jp: '오빠가 "안 먹었어요"라고 했어요',
          reading: 'oppaga "an meogeosseoyo"rago haesseoyo',
          en: "My older brother said he did not eat.",
          zh: "哥哥说他没吃。",
          code: `import type { CommonNoun, HadaVerb, VerbPart, NounPart, ParticlePart, LiteralPart, Sentence } from "typed-korean";


type 하다 = HadaVerb & { dict:"하다"; stem:"하"; inf:"해"; past:"했"; eu:"하"; prospective:"할"; formalStem:"합니" };

// Inner clause: 안 먹었어요 = short negation (안) + PastHaeyo of 먹다
type S = Sentence<[
  NounPart<CommonNoun<"오빠">>,
  ParticlePart<"가">,
  LiteralPart<'"안 먹었어요"라고'>,
  VerbPart<하다, "PastHaeyo">
]>;
// S = '오빠가 "안 먹었어요"라고 했어요'`,
        },
        {
          jp: '친구가 "책을 읽을 거예요"라고 했어요',
          reading: 'chinguga "chaegeul ilgeul geoyeyo"rago haesseoyo',
          en: "My friend said they would read a book.",
          zh: "朋友说他/她要看书。",
          code: `import type { CommonNoun, HadaVerb, VerbPart, NounPart, ParticlePart, LiteralPart, Sentence } from "typed-korean";


type 하다 = HadaVerb & { dict:"하다"; stem:"하"; inf:"해"; past:"했"; eu:"하"; prospective:"할"; formalStem:"합니" };

// Inner clause: 책을 읽을 거예요 = Future of 읽다 (읽을 거예요) with object 책을
type S = Sentence<[
  NounPart<CommonNoun<"친구">>,
  ParticlePart<"가">,
  LiteralPart<'"책을 읽을 거예요"라고'>,
  VerbPart<하다, "PastHaeyo">
]>;
// S = '친구가 "책을 읽을 거예요"라고 했어요'`,
        },
        {
          jp: '어머니가 "한국어가 재미있어요"라고 하셨어요',
          reading: 'eomeoniga "hangugeoga jaemiisseoyo"rago hasyeosseoyo',
          en: "Mother said Korean is fun.",
          zh: "妈妈说韩语很有趣。",
          code: `import type { CommonNoun, NounPart, ParticlePart, LiteralPart, Sentence } from "typed-korean";


// 하셨어요 is the honorific past form of 하다 (하시다 → 하셨어요).
// It is not in the DSL form set, so we represent it as a LiteralPart.
// The inner clause "한국어가 재미있어요" is also a LiteralPart (with 라고 attached).
type S = Sentence<[
  NounPart<CommonNoun<"어머니">>,
  ParticlePart<"가">,
  LiteralPart<'"한국어가 재미있어요"라고'>,
  LiteralPart<"하셨어요">
]>;
// S = '어머니가 "한국어가 재미있어요"라고 하셨어요'`,
        },
      ],
    },
  ],
};

export default chapter;
