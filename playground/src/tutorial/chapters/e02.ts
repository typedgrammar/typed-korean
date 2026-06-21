import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "e02",
  level: "elementary",
  order: 2,
  titleEn: "Topic and subject: 은/는 and 이/가",
  titleZh: "主题与主格：은/는、이/가",
  summaryEn:
    "Korean has two sets of particles that are easy to confuse: the **topic markers** 은/는 and the **subject markers** 이/가. Both can appear on the main noun of a clause, but they carry different communicative weight. The topic markers 은/는 frame what the sentence is *about* — often something already known — while the subject markers 이/가 flag the grammatical subject, often introducing *new* information or contrast.\n\nEach set has two allomorphs selected by 받침 (final consonant): 은/이 after a consonant, 는/가 after a vowel. Choosing the right allomorph is one of the first rules learners must internalize.",
  summaryZh:
    "韩语有两组容易混淆的助词：**主题助词** 은/는 和 **主格助词** 이/가。两者都可以出现在从句的主要名词上，但传达的信息重心不同。은/는 用于框定句子的\"话题\"——通常是已知信息；而 이/가 则标记语法主语，常引入新信息或形成对比。\n\n每组助词各有两个音变形式，由前一词节的 받침（尾辅音）决定：有받침接 은/이，无받침接 는/가。正确选择音变形式是初学者最先需要掌握的规则之一。",
  points: [
    {
      id: "e02-1",
      titleEn: "Topic marker 은/는",
      titleZh: "主题助词 은/는",
      bodyEn:
        "The topic markers **은** (after a consonant-final syllable / 받침) and **는** (after a vowel-final syllable) introduce the sentence's *topic* — what the speaker is talking about. They often translate as \"as for …\" or are simply unmarked in English.\n\nAllomorph rule: if the last syllable of the noun ends in a consonant (받침), attach **은**; if it ends in a vowel, attach **는**.\n\nExamples: 이것 → 이것은 (ㅅ is a 받침); 저 → 저는 (ends in vowel ㅓ); 커피 → 커피는 (ends in vowel ㅣ).",
      bodyZh:
        "主题助词 **은**（接在有받침的音节后）和 **는**（接在无받침的音节后）用于引入句子的\"话题\"，即说话人正在讨论的对象。汉语中常省略不译，或译为\"至于……\"。\n\n音变规则：若前一词节以辅音收尾（有받침），接 **은**；若以元音收尾（无받침），接 **는**。\n\n例：이것 → 이것은（ㅅ 为받침）；저 → 저는（以元音 ㅓ 结尾）；커피 → 커피는（以元音 ㅣ 结尾）。",
      examples: [
        {
          jp: "저는 학생이에요",
          reading: "jeoneun haksaengieyo",
          en: "I am a student.",
          zh: "我是学生。",
          code: `import type { CopulaPart, PronounPart, ParticlePart, Sentence } from "typed-korean";


// 저 ends in the vowel ㅓ → topic particle 는 (no 받침)
type 저는학생이에요 = Sentence<[
  PronounPart<"저">,
  ParticlePart<"는">,
  CopulaPart<"학생", "Haeyo", true>
]>;
const _s: 저는학생이에요 = "저는 학생이에요";`,
        },
        {
          jp: "이것은 책이에요",
          reading: "igeoseun chaegieyo",
          en: "This is a book.",
          zh: "这是书。",
          code: `import type { CopulaPart, PronounPart, ParticlePart, Sentence } from "typed-korean";


// 이것 ends in ㅅ (consonant 받침) → topic particle 은
type 이것은책이에요 = Sentence<[
  PronounPart<"이것">,
  ParticlePart<"은">,
  CopulaPart<"책", "Haeyo", true>
]>;
const _s: 이것은책이에요 = "이것은 책이에요";`,
        },
        {
          jp: "커피는 맛있어요",
          reading: "keopineun massisseoyo",
          en: "The coffee is delicious.",
          zh: "咖啡很好喝。",
          code: `import type { Adjective, AdjectivePart, NounPart, ParticlePart, Sentence } from "typed-korean";


type 맛있다 = Adjective & { dict:"맛있다"; stem:"맛있"; inf:"맛있어"; past:"맛있었"; eu:"맛있으"; prospective:"맛있을"; formalStem:"맛있습니"; attr:"맛있는" };

// 커피 ends in vowel ㅣ → topic particle 는
type 커피는맛있어요 = Sentence<[
  NounPart<"커피">,
  ParticlePart<"는">,
  AdjectivePart<맛있다, "Haeyo">
]>;
const _s: 커피는맛있어요 = "커피는 맛있어요";`,
        },
      ],
    },
    {
      id: "e02-2",
      titleEn: "Subject marker 이/가",
      titleZh: "主格助词 이/가",
      bodyEn:
        "The subject markers **이** (after a consonant-final syllable) and **가** (after a vowel-final syllable) mark the grammatical subject of the sentence. Compared with 은/는, 이/가 tends to introduce *new* information, spotlight a specific referent, or mark the subject in subordinate clauses.\n\nAllomorph rule: 받침 → **이**; no 받침 → **가**.\n\nExamples: 학생 → 학생이 (ㅇ 받침); 친구 → 친구가 (ends in vowel ㅜ); 누나 → 누나가 (ends in vowel ㅏ).",
      bodyZh:
        "主格助词 **이**（接在有받침的音节后）和 **가**（接在无받침的音节后）标记句子的语法主语。与 은/는 相比，이/가 更倾向于引入**新信息**、突出特定对象，或标记从句的主语。\n\n音变规则：有받침 → **이**；无받침 → **가**。\n\n例：학생 → 학생이（ㅇ 为받침）；친구 → 친구가（以元音 ㅜ 结尾）；누나 → 누나가（以元音 ㅏ 结尾）。",
      examples: [
        {
          jp: "친구가 와요",
          reading: "chinguga wayo",
          en: "A friend is coming.",
          zh: "朋友来了。",
          code: `import type { Verb, VerbPart, NounPart, ParticlePart, Sentence } from "typed-korean";


type 오다 = Verb & { dict:"오다"; stem:"오"; inf:"와"; past:"왔"; eu:"오"; prospective:"올"; formalStem:"옵니" };

// 친구 ends in vowel ㅜ → subject particle 가
type 친구가와요 = Sentence<[
  NounPart<"친구">,
  ParticlePart<"가">,
  VerbPart<오다, "Haeyo">
]>;
const _s: 친구가와요 = "친구가 와요";`,
        },
        {
          jp: "학생이 책을 읽어요",
          reading: "haksaengi chaegul ilgeoyo",
          en: "The student reads a book.",
          zh: "学生在读书。",
          code: `import type { Verb, VerbPart, NounPart, ParticlePart, Sentence } from "typed-korean";


type 읽다 = Verb & { dict:"읽다"; stem:"읽"; inf:"읽어"; past:"읽었"; eu:"읽으"; prospective:"읽을"; formalStem:"읽습니" };

// 학생 ends in ㅇ (consonant 받침) → subject particle 이
// 책 ends in ㄱ (consonant 받침) → object particle 을
type 학생이책을읽어요 = Sentence<[
  NounPart<"학생">,
  ParticlePart<"이">,
  NounPart<"책">,
  ParticlePart<"을">,
  VerbPart<읽다, "Haeyo">
]>;
const _s: 학생이책을읽어요 = "학생이 책을 읽어요";`,
        },
        {
          jp: "누나가 가요",
          reading: "nunaga gayo",
          en: "My older sister is going.",
          zh: "姐姐要去了。",
          code: `import type { Verb, VerbPart, NounPart, ParticlePart, Sentence } from "typed-korean";


type 가다 = Verb & { dict:"가다"; stem:"가"; inf:"가"; past:"갔"; eu:"가"; prospective:"갈"; formalStem:"갑니" };

// 누나 ends in vowel ㅏ → subject particle 가
type 누나가가요 = Sentence<[
  NounPart<"누나">,
  ParticlePart<"가">,
  VerbPart<가다, "Haeyo">
]>;
const _s: 누나가가요 = "누나가 가요";`,
        },
      ],
    },
    {
      id: "e02-3",
      titleEn: "Topic vs Subject — different focus",
      titleZh: "话题与主格的语义对比",
      bodyEn:
        "은/는 and 이/가 can appear on the same noun in different sentences, and the choice shifts meaning significantly.\n\n**은/는** frames the noun as the *topic* — background information, general statements, or contrast (\"as for me, …\"). **이/가** highlights the noun as the grammatical subject introducing new or emphatic information (\"It is I who …\").\n\nA single sentence can carry *both*: a time or place word takes 은/는 as the frame, while the actual actor takes 이/가 as the subject. This double-particle pattern is very common in Korean.",
      bodyZh:
        "은/는 和 이/가 可以出现在同一个名词上，但选择不同，意义也大不相同。\n\n**은/는** 将名词框定为\"话题\"——背景信息、一般性陈述或对比（\"至于我……\"）。**이/가** 则突出该名词作为引入新信息或强调的语法主语（\"是我……\"）。\n\n一个句子中可以同时出现两者：时间或地点词用 은/는 作框架，实际动作者用 이/가 作主语。这种双助词结构在韩语中非常常见。",
      examples: [
        {
          jp: "저는 한국 사람이에요",
          reading: "jeoneun hanguk saramieyo",
          en: "I am a Korean person.",
          zh: "我是韩国人。",
          code: `import type { CopulaPart, PronounPart, ProperNounPart, ParticlePart, Sentence } from "typed-korean";


// 는 marks 저 as the topic — the speaker frames their own identity as background info
type 저는한국사람이에요 = Sentence<[
  PronounPart<"저">,
  ParticlePart<"는">,
  ProperNounPart<"한국">,
  CopulaPart<"사람", "Haeyo", true>
]>;
const _s: 저는한국사람이에요 = "저는 한국 사람이에요";`,
        },
        {
          jp: "제가 왔어요",
          reading: "jega wasseoyo",
          en: "I (am the one who) came.",
          zh: "是我来了。（强调是我）",
          code: `import type { Verb, VerbPart, PronounPart, ParticlePart, Sentence } from "typed-korean";


type 오다 = Verb & { dict:"오다"; stem:"오"; inf:"와"; past:"왔"; eu:"오"; prospective:"올"; formalStem:"옵니" };

// 가 marks 제 as the subject — new/contrastive info: it is I who came
type 제가왔어요 = Sentence<[
  PronounPart<"제">,
  ParticlePart<"가">,
  VerbPart<오다, "PastHaeyo">
]>;
const _s: 제가왔어요 = "제가 왔어요";`,
        },
        {
          jp: "오늘은 날씨가 좋아요",
          reading: "oneureun nalssiga joayo",
          en: "Today, the weather is nice.",
          zh: "今天天气很好。",
          code: `import type { Adjective, AdjectivePart, NounPart, ParticlePart, Sentence } from "typed-korean";


type 좋다 = Adjective & { dict:"좋다"; stem:"좋"; inf:"좋아"; past:"좋았"; eu:"좋으"; prospective:"좋을"; formalStem:"좋습니"; attr:"좋은" };

// 오늘 (today) ends in ㄹ (받침) → topic 은 — sets the time frame
// 날씨 (weather) ends in vowel ㅣ → subject 가 — the actual subject
type 오늘은날씨가좋아요 = Sentence<[
  NounPart<"오늘">,
  ParticlePart<"은">,
  NounPart<"날씨">,
  ParticlePart<"가">,
  AdjectivePart<좋다, "Haeyo">
]>;
const _s: 오늘은날씨가좋아요 = "오늘은 날씨가 좋아요";`,
        },
      ],
    },
    {
      id: "e02-4",
      titleEn: "Formal polite speech: 합니다체",
      titleZh: "正式敬语：합니다체",
      bodyEn:
        "Korean has two main polite registers: the informal polite **해요체** (endings -아요/어요/예요) and the formal polite **합니다체** (endings -입니다, -습니다, -ㅂ니다). Both registers use the same topic and subject particles 은/는 and 이/가 — the particles do not change with register.\n\nThe 합니다체 is used in news broadcasts, formal presentations, military settings, and service industries. The copula becomes **입니다** (regardless of 받침). Verbs use `formalStem + 다`: for example, 오다 → formalStem 옵니 → **옵니다**.",
      bodyZh:
        "韩语有两种主要的敬语体：非正式敬语 **해요체**（词尾为 -아요/어요/예요）和正式敬语 **합니다체**（词尾为 -입니다、-습니다、-ㅂ니다）。两种语体都使用相同的主题助词 은/는 和主格助词 이/가——助词不随语体改变。\n\n합니다체 常见于新闻播报、正式演讲、军队和服务业。系动词统一变为 **입니다**（不受받침影响）。动词使用 `formalStem + 다` 的形式：例如 오다 的 formalStem 为 옵니，因此变为 **옵니다**。",
      examples: [
        {
          jp: "저는 학생입니다",
          reading: "jeoneun haksaengimnida",
          en: "I am a student. (formal)",
          zh: "我是学生。（正式）",
          code: `import type { Copula, CopulaPart, PronounPart, ParticlePart, Sentence } from "typed-korean";


// Copula "Hamnida" form → 입니다 (invariant, regardless of 받침)
type 저는학생입니다 = Sentence<[
  PronounPart<"저">,
  ParticlePart<"는">,
  CopulaPart<"학생", "Hamnida", true>
]>;
const _s: 저는학생입니다 = "저는 학생입니다";`,
        },
        {
          jp: "친구가 옵니다",
          reading: "chinguga omnida",
          en: "A friend is coming. (formal)",
          zh: "朋友来了。（正式）",
          code: `import type { Verb, VerbPart, NounPart, ParticlePart, Sentence } from "typed-korean";


type 오다 = Verb & { dict:"오다"; stem:"오"; inf:"와"; past:"왔"; eu:"오"; prospective:"올"; formalStem:"옵니" };

// Verb "Hamnida" form: formalStem "옵니" + 다 → 옵니다
type 친구가옵니다 = Sentence<[
  NounPart<"친구">,
  ParticlePart<"가">,
  VerbPart<오다, "Hamnida">
]>;
const _s: 친구가옵니다 = "친구가 옵니다";`,
        },
      ],
    },
  ],
};

export default chapter;
