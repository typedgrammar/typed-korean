import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "i05",
  level: "intermediate",
  order: 5,
  titleEn: "Honorific requests: -(으)세요",
  titleZh: "尊敬与请求：-(으)세요",
  summaryEn:
    "The ending **-(으)세요** is one of the most important and frequently used forms in Korean. It serves two related functions: a **polite request** (\"please do …\") and an **honorific present tense** when describing what someone of higher social standing is doing. Both uses appear in 해요체 (informal polite) speech.\n\nThe allomorph rule is straightforward: if the verb stem ends in a **vowel**, attach **-세요** directly; if it ends in a **consonant**, insert a buffer vowel and use **-으세요**. 하다 verbs always yield **-하세요**. The formal 합니다체 equivalent is **-(으)십시오** for commands, but -(으)세요 is far more common in daily life.",
  summaryZh:
    "**-(으)세요** 是韩语中最重要、最常用的形式之一。它有两个相关用途：表示**礼貌请求**（\"请做……\"）以及在描述地位较高的人的行为时表示**尊敬现在时**。两种用法均出现在해요체（非正式敬语）中。\n\n语音变化规则很简单：若动词词干以**元音**结尾，直接加 **-세요**；若以**辅音（받침）**结尾，则加缓冲元音，使用 **-으세요**。하다 类动词始终变为 **-하세요**。正式체의 합니다체 对应形式为命令句的 **-(으)십시오**，但在日常生活中 -(으)세요 更为常见。",
  points: [
    {
      id: "i05-1",
      titleEn: "The -(으)세요 allomorph rule",
      titleZh: "-(으)세요 的语音变化规则",
      bodyEn:
        "The ending **-(으)세요** attaches to the verb's `eu` base:\n\n- **Vowel-final stem → -세요**: 가다 `eu:\"가\"` → **가세요**; 마시다 `eu:\"마시\"` → **마시세요**\n- **Consonant-final stem → -으세요**: 읽다 `eu:\"읽으\"` → **읽으세요**; 먹다 `eu:\"먹으\"` → **먹으세요**\n- **하다 verbs → -하세요**: 공부하다 `eu:\"공부하\"` → **공부하세요**\n\nIn the DSL, use `ConjugateVerb<V, \"Honorific\">` — the `eu` field is already encoded in the vetted type definitions, so the correct surface form is generated automatically.",
      bodyZh:
        "**-(으)세요** 附加到动词的 `eu` 词干上：\n\n- **元音结尾词干 → -세요**：가다 `eu:\"가\"` → **가세요**；마시다 `eu:\"마시\"` → **마시세요**\n- **辅音（받침）结尾词干 → -으세요**：읽다 `eu:\"읽으\"` → **읽으세요**；먹다 `eu:\"먹으\"` → **먹으세요**\n- **하다 类动词 → -하세요**：공부하다 `eu:\"공부하\"` → **공부하세요**\n\n在 DSL 中使用 `ConjugateVerb<V, \"Honorific\">` — `eu` 字段已在经过验证的类型定义中编码，因此会自动生成正确的表层形式。",
      examples: [
        {
          jp: "가세요",
          reading: "gaseyo",
          en: "Please go. / (You) are going.",
          zh: "请去。",
          code: `import type { Verb, VerbPart, Sentence } from "typed-korean";


type 가다 = Verb & { dict:"가다"; stem:"가"; inf:"가"; past:"갔"; eu:"가"; prospective:"갈"; formalStem:"갑니" };

type S = Sentence<[
  VerbPart<가다, "Honorific">
]>;
// "가세요"`,
        },
        {
          jp: "책을 읽으세요",
          reading: "chaegeul ilgeuseyо",
          en: "Please read a book.",
          zh: "请读书。",
          code: `import type { Verb, VerbPart, NounPart, ParticlePart, Sentence } from "typed-korean";


type 읽다 = Verb & { dict:"읽다"; stem:"읽"; inf:"읽어"; past:"읽었"; eu:"읽으"; prospective:"읽을"; formalStem:"읽습니" };

type S = Sentence<[
  NounPart<"책">,
  ParticlePart<"을">,
  VerbPart<읽다, "Honorific">
]>;
// "책을 읽으세요"`,
        },
        {
          jp: "한국어를 공부하세요",
          reading: "hangugeoreul gongbuhaseyo",
          en: "Please study Korean.",
          zh: "请学习韩语。",
          code: `import type { HadaVerb, VerbPart, ParticlePart, LiteralPart, Sentence } from "typed-korean";


type 공부하다 = HadaVerb & { dict:"공부하다"; stem:"공부하"; inf:"공부해"; past:"공부했"; eu:"공부하"; prospective:"공부할"; formalStem:"공부합니" };

type S = Sentence<[
  LiteralPart<"한국어">,
  ParticlePart<"를">,
  VerbPart<공부하다, "Honorific">
]>;
// "한국어를 공부하세요"`,
        },
      ],
    },
    {
      id: "i05-2",
      titleEn: "Polite requests in context",
      titleZh: "语境中的礼貌请求",
      bodyEn:
        "When -(으)세요 is used as a **request** (imperative nuance), it is the standard polite way to ask someone to do something in Korean — more polite than the plain imperative -(어/아)라, but softer than the very formal -(으)십시오.\n\nRequests often include a place word or object to give context: **여기** (here), **잠깐** (a moment), **천천히** (slowly). These adverbs precede the verb and are separated by a space. Particles still attach directly to the preceding noun with no space.",
      bodyZh:
        "当 -(으)세요 用作**请求**（命令语气）时，它是韩语中礼貌请求某人做某事的标准方式——比普通命令式 -(어/아)라 更礼貌，但比非常正式的 -(으)십시오 更柔和。\n\n请求中通常包含地点词或宾语以提供语境：**여기**（这里）、**잠깐**（一会儿）、**천천히**（慢慢地）。这些副词放在动词前，用空格隔开。助词依然直接附在前面的名词上，不加空格。",
      examples: [
        {
          jp: "여기 앉으세요",
          reading: "yeogi anjeuseyo",
          en: "Please sit here.",
          zh: "请坐这里。",
          code: `import type { Verb, VerbPart, LiteralPart, Sentence } from "typed-korean";


type 앉다 = Verb & { dict:"앉다"; stem:"앉"; inf:"앉아"; past:"앉았"; eu:"앉으"; prospective:"앉을"; formalStem:"앉습니" };

type S = Sentence<[
  LiteralPart<"여기">,
  VerbPart<앉다, "Honorific">
]>;
// "여기 앉으세요"`,
        },
        {
          jp: "물을 마시세요",
          reading: "mureul masiseyo",
          en: "Please drink water.",
          zh: "请喝水。",
          code: `import type { Verb, VerbPart, NounPart, ParticlePart, Sentence } from "typed-korean";


type 마시다 = Verb & { dict:"마시다"; stem:"마시"; inf:"마셔"; past:"마셨"; eu:"마시"; prospective:"마실"; formalStem:"마십니" };

type S = Sentence<[
  NounPart<"물">,
  ParticlePart<"을">,
  VerbPart<마시다, "Honorific">
]>;
// "물을 마시세요"`,
        },
        {
          jp: "잠깐 기다리세요",
          reading: "jamkkan gidariseyo",
          en: "Please wait a moment.",
          zh: "请稍等一下。",
          code: `import type { Verb, VerbPart, LiteralPart, Sentence } from "typed-korean";


type 기다리다 = Verb & { dict:"기다리다"; stem:"기다리"; inf:"기다려"; past:"기다렸"; eu:"기다리"; prospective:"기다릴"; formalStem:"기다립니" };

type S = Sentence<[
  LiteralPart<"잠깐">,
  VerbPart<기다리다, "Honorific">
]>;
// "잠깐 기다리세요"`,
        },
      ],
    },
    {
      id: "i05-3",
      titleEn: "-(으)세요 as honorific present",
      titleZh: "-(으)세요 用作尊敬现在时",
      bodyEn:
        "Beyond requests, -(으)세요 is used as an **honorific present-tense declarative** when the subject is someone you wish to show respect to — a teacher, parent, elder, or customer. In this use, it is not a request but a description.\n\nContrast:\n- 친구가 가요 — A friend is going. (plain 해요체)\n- 선생님이 가세요 — The teacher is going. (honorific)\n\nThe subject marker is the same (이/가 or 은/는), but -(으)세요 on the verb signals elevated register. This is a key politeness distinction in Korean.",
      bodyZh:
        "除了请求之外，-(으)세요 还用作**尊敬现在时陈述句**，当主语是您希望表示尊重的人时使用——老师、父母、长辈或顾客。在这种用法中，它不是请求，而是描述。\n\n对比：\n- 친구가 가요 — 朋友去了。（普通해요체）\n- 선생님이 가세요 — 老师去了。（尊敬语）\n\n主语助词相同（이/가 或 은/는），但动词上的 -(으)세요 表示更高的语体。这是韩语中礼貌程度的重要区分。",
      examples: [
        {
          jp: "선생님이 오세요",
          reading: "seonsaengnimi oseyo",
          en: "The teacher is coming.",
          zh: "老师来了。",
          code: `import type { Verb, VerbPart, NounPart, ParticlePart, Sentence } from "typed-korean";


type 오다 = Verb & { dict:"오다"; stem:"오"; inf:"와"; past:"왔"; eu:"오"; prospective:"올"; formalStem:"옵니" };

type S = Sentence<[
  NounPart<"선생님">,
  ParticlePart<"이">,
  VerbPart<오다, "Honorific">
]>;
// "선생님이 오세요"`,
        },
        {
          jp: "어머니가 책을 읽으세요",
          reading: "eomeoniga chaegeul ilgeuseyo",
          en: "Mother is reading a book.",
          zh: "妈妈在读书。",
          code: `import type { Verb, VerbPart, NounPart, ParticlePart, Sentence } from "typed-korean";


type 읽다 = Verb & { dict:"읽다"; stem:"읽"; inf:"읽어"; past:"읽었"; eu:"읽으"; prospective:"읽을"; formalStem:"읽습니" };

type S = Sentence<[
  NounPart<"어머니">,
  ParticlePart<"가">,
  NounPart<"책">,
  ParticlePart<"을">,
  VerbPart<읽다, "Honorific">
]>;
// "어머니가 책을 읽으세요"`,
        },
        {
          jp: "아버지가 일하세요",
          reading: "abeojiga ilhaseyo",
          en: "Father is working.",
          zh: "爸爸在工作。",
          code: `import type { HadaVerb, VerbPart, NounPart, ParticlePart, Sentence } from "typed-korean";


type 일하다 = HadaVerb & { dict:"일하다"; stem:"일하"; inf:"일해"; past:"일했"; eu:"일하"; prospective:"일할"; formalStem:"일합니" };

type S = Sentence<[
  NounPart<"아버지">,
  ParticlePart<"가">,
  VerbPart<일하다, "Honorific">
]>;
// "아버지가 일하세요"`,
        },
      ],
    },
    {
      id: "i05-4",
      titleEn: "Set phrases and 합니다체 comparison",
      titleZh: "固定表达与합니다체对比",
      bodyEn:
        "Some of the most common Korean set phrases use -(으)세요. The goodbye expression **안녕히 가세요** (lit. \"go peacefully\") is said to the person who is leaving; the reply **안녕히 계세요** (lit. \"stay peacefully\") is said by the one leaving to the one who stays. **잘 자세요** is the standard \"good night\".\n\nSpeech-level comparison for requests:\n| Style | Form | Example |\n|-------|------|---------|\n| 해요체 | -(으)세요 | 앉으세요 |\n| 합니다체 | -(으)십시오 | 앉으십시오 |\n| plain | -(어/아)라 | 앉아라 |\n\nIn everyday speech, -(으)세요 is the safest and most universally appropriate polite request form.",
      bodyZh:
        "一些最常见的韩语固定表达使用 -(으)세요。告别表达 **안녕히 가세요**（字面意思\"平安地去\"）用于对离开的人说；回应 **안녕히 계세요**（字面意思\"平安地留\"）由离开的人对留下来的人说。**잘 자세요** 是标准的\"晚安\"。\n\n请求的语体对比：\n| 语体 | 形式 | 示例 |\n|------|------|------|\n| 해요체 | -(으)세요 | 앉으세요 |\n| 합니다체 | -(으)십시오 | 앉으십시오 |\n| 普通体 | -(어/아)라 | 앉아라 |\n\n在日常对话中，-(으)세요 是最安全、最普遍适用的礼貌请求形式。",
      examples: [
        {
          jp: "안녕히 가세요",
          reading: "annyeonghi gaseyo",
          en: "Goodbye. (said to the person leaving)",
          zh: "再见。（对离开的人说）",
          code: `import type { Verb, VerbPart, AdverbPart, Sentence } from "typed-korean";


type 가다 = Verb & { dict:"가다"; stem:"가"; inf:"가"; past:"갔"; eu:"가"; prospective:"갈"; formalStem:"갑니" };

type S = Sentence<[
  AdverbPart<"안녕히">,
  VerbPart<가다, "Honorific">
]>;
// "안녕히 가세요"`,
        },
        {
          jp: "잘 자세요",
          reading: "jal jaseyo",
          en: "Good night. (sleep well)",
          zh: "晚安。（好好睡）",
          code: `import type { Verb, VerbPart, AdverbPart, Sentence } from "typed-korean";


type 자다 = Verb & { dict:"자다"; stem:"자"; inf:"자"; past:"잤"; eu:"자"; prospective:"잘"; formalStem:"잡니" };

type S = Sentence<[
  AdverbPart<"잘">,
  VerbPart<자다, "Honorific">
]>;
// "잘 자세요"`,
        },
        {
          jp: "천천히 말하세요",
          reading: "cheoncheonhi malhaseyo",
          en: "Please speak slowly.",
          zh: "请慢慢说。",
          code: `import type { HadaVerb, VerbPart, AdverbPart, Sentence } from "typed-korean";


type 말하다 = HadaVerb & { dict:"말하다"; stem:"말하"; inf:"말해"; past:"말했"; eu:"말하"; prospective:"말할"; formalStem:"말합니" };

type S = Sentence<[
  AdverbPart<"천천히">,
  VerbPart<말하다, "Honorific">
]>;
// "천천히 말하세요"`,
        },
      ],
    },
  ],
};

export default chapter;
