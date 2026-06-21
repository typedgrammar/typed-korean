import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "a04",
  level: "advanced",
  order: 4,
  titleEn: "Commands and propositives in context",
  titleZh: "命令与提议的实际运用",
  summaryEn:
    "Korean has two major command forms and one propositive. The **plain imperative** (-아/어라) is used in casual or intimate speech — talking down to children, writing instructions, or addressing close friends in 반말. The **honorific imperative** (-세요, from -으시어요) is polite and is the default command form in everyday conversation. The **propositive** (-(으)ㄹ까요?) invites the listener to do something together: *Shall we …?*\n\nAll three forms appear frequently in dialogue. This chapter drills each form independently, then shows how speakers shift register — using 반말 vs 존댓말 — depending on who they are talking to.",
  summaryZh:
    "韩语有两种主要命令形式和一种提议形式。**반말命令句**（-아/어라）用于随意或亲密的场合——对孩子说话、书写指令，或在反语（반말）中与亲近的朋友交流。**尊称命令句**（-세요，源自-으시어요）礼貌得体，是日常对话中默认的命令形式。**提议句**（-(으)ㄹ까요?）邀请对方一起做某事：*我们……好吗？*\n\n这三种形式在对话中频繁出现。本章逐一练习每种形式，然后展示说话者如何根据交谈对象切换语域——使用반말还是존댓말。",
  points: [
    {
      id: "a04-1",
      titleEn: "Plain imperative -아/어라 (반말 commands)",
      titleZh: "반말命令句 -아/어라",
      bodyEn:
        "The **plain imperative** is formed by appending **-라** to the verb's informal stem (`inf` field in the DSL). Because the `inf` stem already ends in **아** (after positive-harmony consonant-final stems) or **어** (elsewhere), the full ending is always **-아라** or **-어라**.\n\nThis form is restricted to **반말** — it is used between close friends of equal standing, from adults to young children, or in written instructions/signs. Using 아/어라 toward a stranger or superior is rude. In the `Imperative` form the DSL simply appends **라** to the `inf` value:\n\n- `먹다` inf `먹어` → `먹어라`\n- `앉다` inf `앉아` → `앉아라`\n- `읽다` inf `읽어` → `읽어라`",
      bodyZh:
        "**반말命令句**通过在动词的非正式词干（DSL 中的 `inf` 字段）后附加 **-라** 构成。由于 `inf` 词干已以 **아**（阳性和谐辅音结尾词干）或 **어**（其他情形）结尾，完整结尾始终为 **-아라** 或 **-어라**。\n\n该形式仅限于 **반말** 语域——用于地位平等的亲密朋友之间、成人对幼童，或书面指令/标牌。对陌生人或上级使用아/어라属于失礼行为。DSL 中的 `Imperative` 形式直接在 `inf` 值后附加 **라**：\n\n- `먹다` inf `먹어` → `먹어라`\n- `앉다` inf `앉아` → `앉아라`\n- `읽다` inf `읽어` → `읽어라`",
      examples: [
        {
          jp: "여기 앉아라.",
          reading: "yeogi anjara",
          en: "Sit down here.",
          zh: "坐在这里。",
          code: `import type { Verb, Adverb, VerbPart, AdverbPart, PunctuationPart, Sentence } from "typed-korean";


// 앉다: regular consonant-final verb (sit)
type 앉다 = Verb & { dict:"앉다"; stem:"앉"; inf:"앉아"; past:"앉았"; eu:"앉으"; prospective:"앉을"; formalStem:"앉습니" };

type S = Sentence<[
  AdverbPart<Adverb<"여기">>,
  VerbPart<앉다, "Imperative">,
  PunctuationPart<".">
]>;
// S = "여기 앉아라."`,
        },
        {
          jp: "빨리 먹어라.",
          reading: "ppalli meogeora",
          en: "Eat quickly.",
          zh: "快点吃。",
          code: `import type { Verb, Adverb, VerbPart, AdverbPart, PunctuationPart, Sentence } from "typed-korean";


type 먹다 = Verb & { dict:"먹다"; stem:"먹"; inf:"먹어"; past:"먹었"; eu:"먹으"; prospective:"먹을"; formalStem:"먹습니" };

type S = Sentence<[
  AdverbPart<Adverb<"빨리">>,
  VerbPart<먹다, "Imperative">,
  PunctuationPart<".">
]>;
// S = "빨리 먹어라."`,
        },
        {
          jp: "책을 읽어라.",
          reading: "chaegeul ilgeora",
          en: "Read the book.",
          zh: "读书。",
          code: `import type { CommonNoun, Verb, VerbPart, NounPart, ParticlePart, PunctuationPart, Sentence } from "typed-korean";


type 읽다 = Verb & { dict:"읽다"; stem:"읽"; inf:"읽어"; past:"읽었"; eu:"읽으"; prospective:"읽을"; formalStem:"읽습니" };

type S = Sentence<[
  NounPart<CommonNoun<"책">>,
  ParticlePart<"을">,
  VerbPart<읽다, "Imperative">,
  PunctuationPart<".">
]>;
// S = "책을 읽어라."`,
        },
      ],
    },
    {
      id: "a04-2",
      titleEn: "Honorific imperative -세요 (polite requests)",
      titleZh: "尊称命令句 -세요（礼貌请求）",
      bodyEn:
        "The **honorific imperative** is formed by appending **-세요** to the verb's **으-stem** (`eu` field). For vowel-final stems the 으 is dropped (오 → 오세요), while consonant-final stems insert 으 (앉으 → 앉으세요). This form belongs to **해요체** and is the polite, default command in everyday conversation.\n\n합니다체 has no direct parallel for commands; 하십시오 (from -으십시오) is a very formal written/broadcast register that sounds stiff in normal speech. In practice, -세요 covers both casual-polite and formal-polite contexts:\n\n- `오다` eu `오` → `오세요`\n- `앉다` eu `앉으` → `앉으세요`\n- `기다리다` eu `기다리` → `기다리세요`",
      bodyZh:
        "**尊称命令句**通过在动词的 **으-词干**（`eu` 字段）后附加 **-세요** 构成。元音结尾词干省略으（오 → 오세요），辅音结尾词干则插入으（앉으 → 앉으세요）。该形式属于 **해요체**，是日常对话中礼貌的默认命令形式。\n\n합니다체 没有与之直接对应的命令形式；하십시오（源自-으십시오）是非常正式的书面/广播语域，在普通对话中听起来生硬。实际上，-세요 可覆盖随意礼貌和正式礼貌两种语境：\n\n- `오다` eu `오` → `오세요`\n- `앉다` eu `앉으` → `앉으세요`\n- `기다리다` eu `기다리` → `기다리세요`",
      examples: [
        {
          jp: "빨리 오세요.",
          reading: "ppalli oseyo",
          en: "Please come quickly.",
          zh: "请快点来。",
          code: `import type { Verb, Adverb, VerbPart, AdverbPart, PunctuationPart, Sentence } from "typed-korean";


type 오다 = Verb & { dict:"오다"; stem:"오"; inf:"와"; past:"왔"; eu:"오"; prospective:"올"; formalStem:"옵니" };

type S = Sentence<[
  AdverbPart<Adverb<"빨리">>,
  VerbPart<오다, "Honorific">,
  PunctuationPart<".">
]>;
// S = "빨리 오세요."`,
        },
        {
          jp: "여기 앉으세요.",
          reading: "yeogi anjeuseyo",
          en: "Please sit here.",
          zh: "请坐在这里。",
          code: `import type { Verb, Adverb, VerbPart, AdverbPart, PunctuationPart, Sentence } from "typed-korean";


// 앉다: eu stem "앉으" → 앉으세요
type 앉다 = Verb & { dict:"앉다"; stem:"앉"; inf:"앉아"; past:"앉았"; eu:"앉으"; prospective:"앉을"; formalStem:"앉습니" };

type S = Sentence<[
  AdverbPart<Adverb<"여기">>,
  VerbPart<앉다, "Honorific">,
  PunctuationPart<".">
]>;
// S = "여기 앉으세요."`,
        },
        {
          jp: "잠깐 기다리세요.",
          reading: "jamkkan gidariseyo",
          en: "Please wait a moment.",
          zh: "请稍等一下。",
          code: `import type { Verb, Adverb, VerbPart, AdverbPart, PunctuationPart, Sentence } from "typed-korean";


type 기다리다 = Verb & { dict:"기다리다"; stem:"기다리"; inf:"기다려"; past:"기다렸"; eu:"기다리"; prospective:"기다릴"; formalStem:"기다립니" };

type S = Sentence<[
  AdverbPart<Adverb<"잠깐">>,
  VerbPart<기다리다, "Honorific">,
  PunctuationPart<".">
]>;
// S = "잠깐 기다리세요."`,
        },
      ],
    },
    {
      id: "a04-3",
      titleEn: "Propositive -(으)ㄹ까요? (shall we…?)",
      titleZh: "提议句 -(으)ㄹ까요?（我们……好吗？）",
      bodyEn:
        "The **propositive** attaches **까요** to the verb's `prospective` stem. Since the prospective stem already encodes whether 을 or ㄹ is needed (vowel-final stems carry ㄹ, consonant-final stems carry 을), the DSL `Propositive` form always produces the correct surface:\n\n- Vowel-final / ㄹ-final: `공부하다` prospective `공부할` → **공부할까요**\n- Vowel-final: `기다리다` prospective `기다릴` → **기다릴까요**\n- Consonant-final: `먹다` prospective `먹을` → **먹을까요**\n\nThe propositive is **해요체** and is the same form across all polite contexts. It always ends with a **?** in writing. Adding **우리** (we) or **같이** (together) makes the suggestion more explicit.",
      bodyZh:
        "**提议句**将 **까요** 附加到动词的 `prospective` 词干上。由于展望词干已编码了是否需要 을 或 ㄹ（元音结尾词干带 ㄹ，辅音结尾词干带 을），DSL 的 `Propositive` 形式始终生成正确的表层形式：\n\n- 元音结尾 / ㄹ-结尾：`공부하다` 展望形 `공부할` → **공부할까요**\n- 元音结尾：`기다리다` 展望形 `기다릴` → **기다릴까요**\n- 辅音结尾：`먹다` 展望形 `먹을` → **먹을까요**\n\n提议句属于 **해요체**，在所有礼貌语境中形式相同。书写时句末始终加 **?**。添加 **우리**（我们）或 **같이**（一起）使建议更加明确。",
      examples: [
        {
          jp: "같이 공부할까요?",
          reading: "gachi gongbuhalkkayo",
          en: "Shall we study together?",
          zh: "我们一起学习好吗？",
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
          jp: "여기에서 기다릴까요?",
          reading: "yeogieseo gidarilkkayo",
          en: "Shall we wait here?",
          zh: "我们在这里等好吗？",
          code: `import type { Pronoun, Verb, VerbPart, PronounPart, ParticlePart, PunctuationPart, Sentence } from "typed-korean";


type 기다리다 = Verb & { dict:"기다리다"; stem:"기다리"; inf:"기다려"; past:"기다렸"; eu:"기다리"; prospective:"기다릴"; formalStem:"기다립니" };

type S = Sentence<[
  PronounPart<Pronoun<"여기">>,
  ParticlePart<"에서">,
  VerbPart<기다리다, "Propositive">,
  PunctuationPart<"?">
]>;
// S = "여기에서 기다릴까요?"`,
        },
        {
          jp: "우리 같이 밥을 먹을까요?",
          reading: "uri gachi babeul meogeulkkayo",
          en: "Shall we eat together?",
          zh: "我们一起吃饭好吗？",
          code: `import type { CommonNoun, Pronoun, Verb, Adverb, VerbPart, NounPart, PronounPart, AdverbPart, ParticlePart, PunctuationPart, Sentence } from "typed-korean";


type 먹다 = Verb & { dict:"먹다"; stem:"먹"; inf:"먹어"; past:"먹었"; eu:"먹으"; prospective:"먹을"; formalStem:"먹습니" };

type S = Sentence<[
  PronounPart<Pronoun<"우리">>,
  AdverbPart<Adverb<"같이">>,
  NounPart<CommonNoun<"밥">>,
  ParticlePart<"을">,
  VerbPart<먹다, "Propositive">,
  PunctuationPart<"?">
]>;
// S = "우리 같이 밥을 먹을까요?"`,
        },
      ],
    },
    {
      id: "a04-4",
      titleEn: "Register contrast in dialogue",
      titleZh: "对话中的语域对比",
      bodyEn:
        "In real dialogue, speakers choose among plain imperative, honorific imperative, and propositive based on relationship and intent. Compare the same core meaning across registers:\n\n| Intent | 반말 (plain) | 해요체 (polite) |\n|---|---|---|\n| command to be quiet | 조용히 해라 | 조용히 하세요 |\n| propositive to start | — | 같이 시작할까요? |\n\nThe propositive does not have a 반말 equivalent in everyday speech (there are archaic/literary forms, but they are not used). Notably, **어서 오세요!** (Welcome! / Please come in!) is a fixed honorific expression that every speaker encounters constantly — it combines the adverb 어서 (hurry, quickly) with the honorific imperative of 오다.",
      bodyZh:
        "在真实对话中，说话者根据关系和意图在반말命令句、尊称命令句和提议句之间切换。比较不同语域中表达同一核心含义的方式：\n\n| 意图 | 반말（随意） | 해요체（礼貌） |\n|---|---|---|\n| 命令安静 | 조용히 해라 | 조용히 하세요 |\n| 提议开始 | — | 같이 시작할까요? |\n\n提议句在日常口语中没有对应的반말形式（存在古语/文学形式，但已不使用）。值得注意的是，**어서 오세요!**（欢迎！/ 请进！）是一个固定的尊称表达，每个说话者都会频繁遇到——它由副词어서（快，赶快）与오다的尊称命令形式组合而成。",
      examples: [
        {
          jp: "조용히 해라.",
          reading: "joyonghi haera",
          en: "Be quiet. (casual)",
          zh: "安静。（随意语气）",
          code: `import type { HadaVerb, Adverb, VerbPart, AdverbPart, PunctuationPart, Sentence } from "typed-korean";


type 하다 = HadaVerb & { dict:"하다"; stem:"하"; inf:"해"; past:"했"; eu:"하"; prospective:"할"; formalStem:"합니" };

type S = Sentence<[
  AdverbPart<Adverb<"조용히">>,
  VerbPart<하다, "Imperative">,
  PunctuationPart<".">
]>;
// S = "조용히 해라."`,
        },
        {
          jp: "조용히 하세요.",
          reading: "joyonghi haseyo",
          en: "Please be quiet. (polite)",
          zh: "请安静。（礼貌语气）",
          code: `import type { HadaVerb, Adverb, VerbPart, AdverbPart, PunctuationPart, Sentence } from "typed-korean";


type 하다 = HadaVerb & { dict:"하다"; stem:"하"; inf:"해"; past:"했"; eu:"하"; prospective:"할"; formalStem:"합니" };

type S = Sentence<[
  AdverbPart<Adverb<"조용히">>,
  VerbPart<하다, "Honorific">,
  PunctuationPart<".">
]>;
// S = "조용히 하세요."`,
        },
        {
          jp: "같이 시작할까요?",
          reading: "gachi sijakhalkkayo",
          en: "Shall we start together?",
          zh: "我们一起开始好吗？",
          code: `import type { HadaVerb, Adverb, VerbPart, AdverbPart, PunctuationPart, Sentence } from "typed-korean";


type 시작하다 = HadaVerb & { dict:"시작하다"; stem:"시작하"; inf:"시작해"; past:"시작했"; eu:"시작하"; prospective:"시작할"; formalStem:"시작합니" };

type S = Sentence<[
  AdverbPart<Adverb<"같이">>,
  VerbPart<시작하다, "Propositive">,
  PunctuationPart<"?">
]>;
// S = "같이 시작할까요?"`,
        },
      ],
    },
  ],
};

export default chapter;
