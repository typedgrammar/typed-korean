import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "e12",
  level: "elementary",
  order: 12,
  titleEn: "Connectives: -고 and -아서/어서",
  titleZh: "连接词尾：-고 与 -아서/어서",
  summaryEn:
    `Korean uses connective endings (연결어미) to link clauses within one sentence. **-고** (attached to the verb or adjective stem) means "and" or "and then", listing facts or actions in sequence without implying causation. **-아서/어서** (attached to the 아/어 infinitive base) conveys cause/reason ("because, so") or a closely-linked sequence ("and then from there"). The two endings are not interchangeable: -고 is neutral about order and cause, while -아서/어서 implies the first clause is the reason or immediate antecedent of the second.\n\nBoth endings work with verbs (동사) and adjectives (형용사). The same 받침 and vowel-harmony rules that govern 해요체 and 했어요 also determine whether you use -아서 or -어서 — the DSL's Seo form handles this automatically by appending 서 to the pre-computed 아/어 infinitive base.`,
  summaryZh:
    `韩语用**连接词尾**（연결어미）在同一句话中连接两个小句。**-고**接在动词或形容词词干后，表示"和/并且"或"然后"，列举事实或动作，不含因果含义。**-아서/어서**接在아/어形（即해요体去掉"요"的部分）后，表示原因（"因为……所以……"）或紧密前后关联的序列（"……之后"）。两者不可互换：-고不强调先后与因果，-아서/어서则明示前句是后句的原因或直接前提。\n\n两个词尾均可用于动词和形容词。是用-아서还是-어서，遵循与해요体相同的阳/阴母音调和规则（DSL的Seo形式已自动处理）。`,
  points: [
    {
      id: "e12-1",
      titleEn: "-고 with verbs: listing and sequence",
      titleZh: "-고 接动词：并列与顺序",
      bodyEn:
        `Attach **-고** directly to the verb stem (dictionary form minus 다) to link two actions. In 해요체 the first verb takes -고 and the final verb takes -요; in 합니다체 only the last verb changes to -습니다 / -ㅂ니다. The -고 form is the same regardless of 받침: 먹고, 가고, 마시고.\n\nWhen the actions happen in sequence, -고 signals the order ("do A, then do B"). When they are simultaneous or simply listed, -고 means "and". The subject of both clauses is usually the same and need not be repeated.`,
      bodyZh:
        `将**-고**直接接在动词词干（词典形去掉다）后面，连接两个动作。在해요体中，第一个动词用-고，最后一个动词用-요结尾；在합니다体中，只有最后一个动词变为-습니다/-ㅂ니다。-고形式与받침（尾音）无关，一律相同：먹고、가고、마시고。\n\n当两个动作按先后顺序发生时，-고表示"先A后B"；当两者并列时表示"和/并且"。两个小句的主语通常相同，不必重复。`,
      examples: [
        {
          jp: "밥을 먹고 가요",
          reading: "babeul meokgo gayo",
          en: "I eat and then go.",
          zh: "我吃饭然后去。",
          code: `import type { Verb, VerbPart, NounPart, ParticlePart, Sentence } from "typed-korean";


type 먹다 = Verb & { dict:"먹다"; stem:"먹"; inf:"먹어"; past:"먹었"; eu:"먹으"; prospective:"먹을"; formalStem:"먹습니" };
type 가다  = Verb & { dict:"가다";  stem:"가";  inf:"가";   past:"갔";   eu:"가";  prospective:"갈";  formalStem:"갑니"  };

type Result = Sentence<[
  NounPart<"밥">,
  ParticlePart<"을">,
  VerbPart<먹다, "And">,
  VerbPart<가다, "Haeyo">
]>;
// => "밥을 먹고 가요"`,
        },
        {
          jp: "음악을 듣고 공부해요",
          reading: "eumageul deutgo gongbuhaeyo",
          en: "I listen to music and study.",
          zh: "我听音乐然后学习。",
          code: `import type { IrregularVerb, HadaVerb, VerbPart, NounPart, ParticlePart, Sentence } from "typed-korean";


type 듣다     = IrregularVerb & { dict:"듣다"; stem:"듣"; inf:"들어"; past:"들었"; eu:"들으"; prospective:"들을"; formalStem:"듣습니" };
type 공부하다 = HadaVerb      & { dict:"공부하다"; stem:"공부하"; inf:"공부해"; past:"공부했"; eu:"공부하"; prospective:"공부할"; formalStem:"공부합니" };

type Result = Sentence<[
  NounPart<"음악">,
  ParticlePart<"을">,
  VerbPart<듣다, "And">,
  VerbPart<공부하다, "Haeyo">
]>;
// => "음악을 듣고 공부해요"`,
        },
        {
          jp: "친구를 만나고 영화를 봐요",
          reading: "chingureul mannago yeonghwareul bwayo",
          en: "I meet a friend and watch a movie.",
          zh: "我见了朋友然后看电影。",
          code: `import type { Verb, VerbPart, NounPart, ParticlePart, Sentence } from "typed-korean";


type 만나다 = Verb & { dict:"만나다"; stem:"만나"; inf:"만나"; past:"만났"; eu:"만나"; prospective:"만날"; formalStem:"만납니" };
type 보다   = Verb & { dict:"보다";   stem:"보";   inf:"봐";   past:"봤";  eu:"보";  prospective:"볼";   formalStem:"봅니"  };

type Result = Sentence<[
  NounPart<"친구">,
  ParticlePart<"를">,
  VerbPart<만나다, "And">,
  NounPart<"영화">,
  ParticlePart<"를">,
  VerbPart<보다, "Haeyo">
]>;
// => "친구를 만나고 영화를 봐요"`,
        },
      ],
    },
    {
      id: "e12-2",
      titleEn: "-고 with adjectives: listing properties",
      titleZh: "-고 接形容词：并列描述",
      bodyEn:
        `Adjectives take -고 the same way verbs do: attach to the stem. This lets you list two or more descriptive properties of a subject. For example 비싸고 좋아요 = "expensive and good". The order can matter stylistically (put the more surprising or emphasized quality last), but -고 itself is neutral.\n\nNote that -고 does **not** carry tense — the tense is expressed only on the final predicate. So 비싸고 좋아요 is present, while 비싸고 좋았어요 is past.`,
      bodyZh:
        `形容词使用-고的方式与动词完全相同：接在词干后面。这样可以并列描述同一主语的两个或多个性质。例如비싸고 좋아요 = "又贵又好"。顺序有一定的修辞效果（通常把更强调的性质放在最后），但-고本身不含因果。\n\n注意-고不携带时态——时态只由最后一个谓语决定。因此비싸고 좋아요是现在时，비싸고 좋았어요是过去时。`,
      examples: [
        {
          jp: "비싸고 좋아요",
          reading: "bissago joayo",
          en: "It is expensive and good.",
          zh: "又贵又好。",
          code: `import type { Adjective, AdjectivePart, Sentence } from "typed-korean";


type 비싸다 = Adjective & { dict:"비싸다"; stem:"비싸"; inf:"비싸"; past:"비쌌"; eu:"비싸"; prospective:"비쌀"; formalStem:"비쌉니"; attr:"비싼" };
type 좋다   = Adjective & { dict:"좋다";   stem:"좋";   inf:"좋아"; past:"좋았"; eu:"좋으"; prospective:"좋을"; formalStem:"좋습니"; attr:"좋은" };

type Result = Sentence<[
  AdjectivePart<비싸다, "And">,
  AdjectivePart<좋다, "Haeyo">
]>;
// => "비싸고 좋아요"`,
        },
        {
          jp: "방이 크고 좋아요",
          reading: "bangi keugo joayo",
          en: "The room is big and nice.",
          zh: "房间又大又好。",
          code: `import type { Adjective, AdjectivePart, NounPart, ParticlePart, Sentence } from "typed-korean";


type 크다 = Adjective & { dict:"크다"; stem:"크"; inf:"커"; past:"컸"; eu:"크"; prospective:"클"; formalStem:"큽니"; attr:"큰" };
type 좋다 = Adjective & { dict:"좋다"; stem:"좋"; inf:"좋아"; past:"좋았"; eu:"좋으"; prospective:"좋을"; formalStem:"좋습니"; attr:"좋은" };

type Result = Sentence<[
  NounPart<"방">,
  ParticlePart<"이">,
  AdjectivePart<크다, "And">,
  AdjectivePart<좋다, "Haeyo">
]>;
// => "방이 크고 좋아요"`,
        },
        {
          jp: "커피가 싸고 맛있어요",
          reading: "keopiga ssago massisseoyo",
          en: "The coffee is cheap and delicious.",
          zh: "咖啡又便宜又好喝。",
          code: `import type { Adjective, AdjectivePart, NounPart, ParticlePart, Sentence } from "typed-korean";


type 싸다   = Adjective & { dict:"싸다";   stem:"싸";   inf:"싸";    past:"쌌";    eu:"싸";   prospective:"쌀";   formalStem:"쌉니";  attr:"싼"   };
type 맛있다 = Adjective & { dict:"맛있다"; stem:"맛있"; inf:"맛있어"; past:"맛있었"; eu:"맛있으"; prospective:"맛있을"; formalStem:"맛있습니"; attr:"맛있는" };

type Result = Sentence<[
  NounPart<"커피">,
  ParticlePart<"가">,
  AdjectivePart<싸다, "And">,
  AdjectivePart<맛있다, "Haeyo">
]>;
// => "커피가 싸고 맛있어요"`,
        },
      ],
    },
    {
      id: "e12-3",
      titleEn: "-아서/어서 with verbs: reason and close sequence",
      titleZh: "-아서/어서 接动词：原因与紧密序列",
      bodyEn:
        `**-아서/어서** (DSL form: \`Seo\`) appends 서 to the 아/어 infinitive base of a verb. The choice between -아서 and -어서 follows vowel harmony (ㅏ/ㅗ stems → -아서; all others → -어서) — the same rule as the 해요체 ending. The vetted bases encode the correct form.\n\nThis connective has two uses:\n1. **Cause/reason**: the first clause explains why the second happens (≈ "because … so …"). You cannot shift tense onto -아서/어서 itself; the tense lives on the final verb.\n2. **Close sequence at the same place**: the subject moves to a new location and does something there (e.g. 가서 먹어요 "go [there] and eat"). Unlike -고, the two actions are closely linked.`,
      bodyZh:
        `**-아서/어서**（DSL形式：\`Seo\`）将서接在动词的아/어形（即해요体去掉요的部分）后面。使用-아서还是-어서，遵循阳/阴母音调和规则（ㅏ/ㅗ母音词干→-아서，其余→-어서），与해요体的规则相同——词汇表中已预先给出正确形式。\n\n这个连接词尾有两种用法：\n1. **原因/理由**：前句说明后句发生的原因（相当于"因为……所以……"）。时态不能标在-아서/어서上，只能标在句末谓语上。\n2. **紧密的地点序列**：主语移动到某处后在那里做某事（如가서 먹어요"去了那里吃"）。与-고不同，두 个动作在逻辑上紧密相连。`,
      examples: [
        {
          jp: "비가 와서 집에 있어요",
          reading: "biga waseo jibe isseoyo",
          en: "Because it is raining, I am at home.",
          zh: "因为下雨，所以我在家。",
          code: `import type { Verb, VerbPart, NounPart, ParticlePart, Sentence } from "typed-korean";


type 오다   = Verb & { dict:"오다";  stem:"오";  inf:"와";   past:"왔";   eu:"오";  prospective:"올";  formalStem:"옵니"  };
type 있다   = Verb & { dict:"있다";  stem:"있";  inf:"있어"; past:"있었"; eu:"있으"; prospective:"있을"; formalStem:"있습니" };

type Result = Sentence<[
  NounPart<"비">,
  ParticlePart<"가">,
  VerbPart<오다, "Seo">,
  NounPart<"집">,
  ParticlePart<"에">,
  VerbPart<있다, "Haeyo">
]>;
// => "비가 와서 집에 있어요"`,
        },
        {
          jp: "책을 사서 읽어요",
          reading: "chaekeul saseo ilgeoyo",
          en: "I buy a book and read it.",
          zh: "我买了书然后读。",
          code: `import type { Verb, VerbPart, NounPart, ParticlePart, Sentence } from "typed-korean";


type 사다 = Verb & { dict:"사다"; stem:"사"; inf:"사";   past:"샀";   eu:"사";  prospective:"살";  formalStem:"삽니"  };
type 읽다 = Verb & { dict:"읽다"; stem:"읽"; inf:"읽어"; past:"읽었"; eu:"읽으"; prospective:"읽을"; formalStem:"읽습니" };

type Result = Sentence<[
  NounPart<"책">,
  ParticlePart<"을">,
  VerbPart<사다, "Seo">,
  VerbPart<읽다, "Haeyo">
]>;
// => "책을 사서 읽어요"`,
        },
        {
          jp: "학교에 가서 공부해요",
          reading: "hakgyoe gaseo gongbuhaeyo",
          en: "I go to school and study there.",
          zh: "我去学校学习。",
          code: `import type { Verb, HadaVerb, VerbPart, NounPart, ParticlePart, Sentence } from "typed-korean";


type 가다     = Verb     & { dict:"가다";     stem:"가";     inf:"가";     past:"갔";     eu:"가";     prospective:"갈";     formalStem:"갑니"     };
type 공부하다 = HadaVerb & { dict:"공부하다"; stem:"공부하"; inf:"공부해"; past:"공부했"; eu:"공부하"; prospective:"공부할"; formalStem:"공부합니" };

type Result = Sentence<[
  NounPart<"학교">,
  ParticlePart<"에">,
  VerbPart<가다, "Seo">,
  VerbPart<공부하다, "Haeyo">
]>;
// => "학교에 가서 공부해요"`,
        },
      ],
    },
    {
      id: "e12-4",
      titleEn: "-아서/어서 with adjectives: giving a reason",
      titleZh: "-아서/어서 接形容词：表示原因",
      bodyEn:
        `When -아서/어서 follows an **adjective**, it almost always expresses reason or cause ("because it is …"). The adjective infinitive base (same as the 해요체 base minus 요) fuses with 서. Note: unlike -고, -아서/어서 **cannot** be used to list parallel properties of the same noun — use -고 for that.\n\nAlso important: you cannot attach past tense to -아서/어서 itself when expressing cause. Say 바빠서 일해요 (because I am busy, I work), not 바빴어서. The completed-action sense comes from context or from the final predicate.`,
      bodyZh:
        `当-아서/어서接在**形容词**后时，几乎总是表示原因（"因为……"）。形容词的아/어形（即해요体去掉요的部分）与서结合。注意：与-고不同，-아서/어서**不能**用于并列同一名词的两个性质——那种情况请用-고。\n\n还需注意：在表示原因时，-아서/어서前面**不能**加过去时态。要说바빠서 일해요（因为忙所以工作），而不是바빴어서。完成的动作感由语境或句末谓语来体现。`,
      examples: [
        {
          jp: "날씨가 좋아서 산에 가요",
          reading: "nalssiga joaseo sane gayo",
          en: "Because the weather is nice, I go to the mountain.",
          zh: "因为天气好，所以去山上。",
          code: `import type { Verb, Adjective, VerbPart, AdjectivePart, NounPart, ParticlePart, Sentence } from "typed-korean";


type 좋다 = Adjective & { dict:"좋다"; stem:"좋"; inf:"좋아"; past:"좋았"; eu:"좋으"; prospective:"좋을"; formalStem:"좋습니"; attr:"좋은" };
type 가다  = Verb      & { dict:"가다";  stem:"가";  inf:"가";   past:"갔";   eu:"가";  prospective:"갈";  formalStem:"갑니"  };

type Result = Sentence<[
  NounPart<"날씨">,
  ParticlePart<"가">,
  AdjectivePart<좋다, "Seo">,
  NounPart<"산">,
  ParticlePart<"에">,
  VerbPart<가다, "Haeyo">
]>;
// => "날씨가 좋아서 산에 가요"`,
        },
        {
          jp: "커피가 맛있어서 마셔요",
          reading: "keopiga massisseoseo mashyeoyo",
          en: "Because the coffee is delicious, I drink it.",
          zh: "因为咖啡好喝，所以我喝了。",
          code: `import type { Verb, Adjective, VerbPart, AdjectivePart, NounPart, ParticlePart, Sentence } from "typed-korean";


type 맛있다 = Adjective & { dict:"맛있다"; stem:"맛있"; inf:"맛있어"; past:"맛있었"; eu:"맛있으"; prospective:"맛있을"; formalStem:"맛있습니"; attr:"맛있는" };
type 마시다 = Verb      & { dict:"마시다"; stem:"마시"; inf:"마셔";   past:"마셨";   eu:"마시";  prospective:"마실";   formalStem:"마십니"   };

type Result = Sentence<[
  NounPart<"커피">,
  ParticlePart<"가">,
  AdjectivePart<맛있다, "Seo">,
  VerbPart<마시다, "Haeyo">
]>;
// => "커피가 맛있어서 마셔요"`,
        },
        {
          jp: "바빠서 일해요",
          reading: "bappaseo ilhaeyo",
          en: "Because I am busy, I work.",
          zh: "因为忙，所以工作。",
          code: `import type { HadaVerb, Adjective, VerbPart, AdjectivePart, Sentence } from "typed-korean";


type 바쁘다 = Adjective & { dict:"바쁘다"; stem:"바쁘"; inf:"바빠"; past:"바빴"; eu:"바쁘"; prospective:"바쁠"; formalStem:"바쁩니"; attr:"바쁜" };
type 일하다 = HadaVerb  & { dict:"일하다"; stem:"일하"; inf:"일해"; past:"일했"; eu:"일하"; prospective:"일할"; formalStem:"일합니"  };

type Result = Sentence<[
  AdjectivePart<바쁘다, "Seo">,
  VerbPart<일하다, "Haeyo">
]>;
// => "바빠서 일해요"`,
        },
      ],
    },
  ],
};

export default chapter;
