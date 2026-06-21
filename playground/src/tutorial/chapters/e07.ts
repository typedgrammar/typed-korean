import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "e07",
  level: "elementary",
  order: 7,
  titleEn: "Place particles: 에 vs 에서",
  titleZh: "处所助词：에 与 에서",
  summaryEn:
    "Korean has two place particles that English speakers often confuse. **에** marks a static location (where something is) or a destination (where you are going). **에서** marks the location where an action takes place (where you are doing something), or the origin of movement (from a place).\n\nBoth particles attach directly to the noun with no space. The key question to ask is: *Is there an active action happening at this place?* If yes, use 에서; otherwise use 에.",
  summaryZh:
    "韩语有两个常被英语母语者混淆的处所助词。**에** 表示静态位置（某物存在的地方）或目的地（去往某处）。**에서** 表示动作发生的地点（在某处做某事），或移动的出发地（从某处）。\n\n两个助词都直接附着在名词后，不加空格。判断关键在于：*该地点是否有具体动作正在发生？* 如果有，用 에서；否则用 에。",
  points: [
    {
      id: "e07-1",
      titleEn: "에 = destination (direction of movement)",
      titleZh: "에 表示目的地（移动方向）",
      bodyEn:
        "When you are **going to** or **coming to** a destination, use **에**. Movement verbs like 가다 (to go) and 오다 (to come) pair naturally with this 에.\n\n해요체 (polite informal): 가요, 와요. 합니다체 (formal polite): 갑니다, 옵니다. Unlike many Korean particles, 에 has **no 받침 allomorphs** — it stays the same regardless of whether the preceding noun ends in a consonant or vowel.",
      bodyZh:
        "当你**前往**某目的地或**到达**某处时，使用 **에**。移动类动词如 가다（去）、오다（来）与此用法的 에 搭配最为自然。\n\n해요체（非正式礼貌）：가요、와요。합니다체（正式礼貌）：갑니다、옵니다。与许多韩语助词不同，에 **没有 받침 变体**——无论前面的名词以辅音还是元音结尾，형태 均保持不变。",
      examples: [
        {
          jp: "학교에 가요",
          reading: "hakgyoe gayo",
          en: "I go to school.",
          zh: "我去学校。",
          code: `import type { Verb, VerbPart, NounPart, ParticlePart, Sentence } from "typed-korean";


type 가다 = Verb & {
  dict: "가다"; stem: "가"; inf: "가"; past: "갔";
  eu: "가"; prospective: "갈"; formalStem: "갑니";
};

// 에 = destination; Haeyo appends 요 to the inf base: 가 + 요 = 가요
type 학교에가요 = Sentence<
  [NounPart<"학교">, ParticlePart<"에">, VerbPart<가다, "Haeyo">]
>;`,
        },
        {
          jp: "저는 집에 와요",
          reading: "jeoneun jibe wayo",
          en: "I come home.",
          zh: "我回家。",
          code: `import type { Verb, VerbPart, NounPart, PronounPart, ParticlePart, Sentence } from "typed-korean";


// 오다: inf "와" → 와요
type 오다 = Verb & {
  dict: "오다"; stem: "오"; inf: "와"; past: "왔";
  eu: "오"; prospective: "올"; formalStem: "옵니";
};

type 저는집에와요 = Sentence<
  [
    PronounPart<"저">,
    ParticlePart<"는">,
    NounPart<"집">,
    ParticlePart<"에">,
    VerbPart<오다, "Haeyo">,
  ]
>;`,
        },
        {
          jp: "도서관에 갑니다",
          reading: "doseogwane gamnida",
          en: "I go to the library. (formal)",
          zh: "我去图书馆。（正式）",
          code: `import type { Verb, VerbPart, NounPart, ParticlePart, Sentence } from "typed-korean";


type 가다 = Verb & {
  dict: "가다"; stem: "가"; inf: "가"; past: "갔";
  eu: "가"; prospective: "갈"; formalStem: "갑니";
};

// Hamnida appends 다 to formalStem: 갑니 + 다 = 갑니다
type 도서관에갑니다 = Sentence<
  [NounPart<"도서관">, ParticlePart<"에">, VerbPart<가다, "Hamnida">]
>;`,
        },
      ],
    },
    {
      id: "e07-2",
      titleEn: "에 = static location (where something exists)",
      titleZh: "에 表示静态位置（某物存在的地方）",
      bodyEn:
        "**에** also marks the location where something or someone **exists** or **is situated**. The existence verbs 있다 (to exist / to be) and 없다 (to not exist) always take 에 for their location — not 에서, because existing is not an active action.\n\nKey contrast: *집에 있어요* (I am at home — existence) vs *집에서 공부해요* (I study at home — active action). If you can replace the verb with 'exist' or 'be located', use 에.",
      bodyZh:
        "**에** 还用来标记某人或某物**存在**或**所在**的位置。存在类动词 있다（存在/在）和 없다（不存在）的处所始终用 에，不用 에서——因为\"存在\"本身不是主动行为。\n\n关键对比：*집에 있어요*（我在家——存在状态）vs *집에서 공부해요*（我在家学习——主动行为）。如果能把动词替换为\"存在\"或\"位于\"，就用 에。",
      examples: [
        {
          jp: "친구가 집에 있어요",
          reading: "chinguga jibe isseoyo",
          en: "My friend is at home.",
          zh: "朋友在家。",
          code: `import type { Verb, VerbPart, NounPart, ParticlePart, Sentence } from "typed-korean";


// 있다: existence verb — location always takes 에, not 에서
type 있다 = Verb & {
  dict: "있다"; stem: "있"; inf: "있어"; past: "있었";
  eu: "있으"; prospective: "있을"; formalStem: "있습니";
};

type 친구가집에있어요 = Sentence<
  [
    NounPart<"친구">,
    ParticlePart<"가">,
    NounPart<"집">,
    ParticlePart<"에">,
    VerbPart<있다, "Haeyo">,
  ]
>;`,
        },
        {
          jp: "책이 방에 있어요",
          reading: "chaegi bange isseoyo",
          en: "The book is in the room.",
          zh: "书在房间里。",
          code: `import type { Verb, VerbPart, NounPart, ParticlePart, Sentence } from "typed-korean";


type 있다 = Verb & {
  dict: "있다"; stem: "있"; inf: "있어"; past: "있었";
  eu: "있으"; prospective: "있을"; formalStem: "있습니";
};

// 책 ends in ㄱ (consonant) → subject particle 이
// 방 ends in ㅇ (consonant) → location particle 에 (no allomorph change)
type 책이방에있어요 = Sentence<
  [
    NounPart<"책">,
    ParticlePart<"이">,
    NounPart<"방">,
    ParticlePart<"에">,
    VerbPart<있다, "Haeyo">,
  ]
>;`,
        },
        {
          jp: "선생님이 학교에 있습니다",
          reading: "seonsaengnimi hakgyoe itseumnida",
          en: "The teacher is at school. (formal)",
          zh: "老师在学校。（正式）",
          code: `import type { Verb, VerbPart, NounPart, ParticlePart, Sentence } from "typed-korean";


type 있다 = Verb & {
  dict: "있다"; stem: "있"; inf: "있어"; past: "있었";
  eu: "있으"; prospective: "있을"; formalStem: "있습니";
};

// Hamnida: 있습니 + 다 = 있습니다
type 선생님이학교에있습니다 = Sentence<
  [
    NounPart<"선생님">,
    ParticlePart<"이">,
    NounPart<"학교">,
    ParticlePart<"에">,
    VerbPart<있다, "Hamnida">,
  ]
>;`,
        },
      ],
    },
    {
      id: "e07-3",
      titleEn: "에서 = location of an action",
      titleZh: "에서 表示动作发生的地点",
      bodyEn:
        "When an **action** takes place at a location, use **에서**. This is the key contrast with 에: if someone is actively doing something at a place, that place is marked with 에서.\n\nCommon pattern: *장소에서 + action verb*. 해요체: 공부해요, 자요, 먹어요. 합니다체: 공부합니다, 잡니다, 먹습니다. Like 에, the particle 에서 has no 받침 allomorphs — it stays the same regardless of the preceding noun.",
      bodyZh:
        "当**动作**在某地点发生时，使用 **에서**。这是与 에 的核心区别：如果某人在某处主动做某件事，该地点就用 에서 标记。\n\n常见句型：*场所에서 + 动作动词*。해요체：공부해요、자요、먹어요。합니다체：공부합니다、잡니다、먹습니다。与 에 一样，助词 에서 也没有 받침 变体，形态始终不变。",
      examples: [
        {
          jp: "저는 도서관에서 공부해요",
          reading: "jeoneun doseogwaneseo gongbuheyo",
          en: "I study at the library.",
          zh: "我在图书馆学习。",
          code: `import type { HadaVerb, VerbPart, NounPart, PronounPart, ParticlePart, Sentence } from "typed-korean";


// 에서 = location of action (studying happens here)
type 공부하다 = HadaVerb & {
  dict: "공부하다"; stem: "공부하"; inf: "공부해"; past: "공부했";
  eu: "공부하"; prospective: "공부할"; formalStem: "공부합니";
};

type 저는도서관에서공부해요 = Sentence<
  [
    PronounPart<"저">,
    ParticlePart<"는">,
    NounPart<"도서관">,
    ParticlePart<"에서">,
    VerbPart<공부하다, "Haeyo">,
  ]
>;`,
        },
        {
          jp: "집에서 자요",
          reading: "jibeseo jayo",
          en: "I sleep at home.",
          zh: "我在家睡觉。",
          code: `import type { Verb, VerbPart, NounPart, ParticlePart, Sentence } from "typed-korean";


// 자다: inf "자" → 자요
type 자다 = Verb & {
  dict: "자다"; stem: "자"; inf: "자"; past: "잤";
  eu: "자"; prospective: "잘"; formalStem: "잡니";
};

type 집에서자요 = Sentence<
  [NounPart<"집">, ParticlePart<"에서">, VerbPart<자다, "Haeyo">]
>;`,
        },
        {
          jp: "학교에서 한국어를 배웁니다",
          reading: "hakgyoseo hangugeoreul baewumnida",
          en: "I learn Korean at school. (formal)",
          zh: "我在学校学韩语。（正式）",
          code: `import type { Verb, VerbPart, NounPart, ParticlePart, Sentence } from "typed-korean";


type 배우다 = Verb & {
  dict: "배우다"; stem: "배우"; inf: "배워"; past: "배웠";
  eu: "배우"; prospective: "배울"; formalStem: "배웁니";
};

// Hamnida: 배웁니 + 다 = 배웁니다
type 학교에서한국어를배웁니다 = Sentence<
  [
    NounPart<"학교">,
    ParticlePart<"에서">,
    NounPart<"한국어">,
    ParticlePart<"를">,
    VerbPart<배우다, "Hamnida">,
  ]
>;`,
        },
      ],
    },
    {
      id: "e07-4",
      titleEn: "에서 = from (origin or starting point)",
      titleZh: "에서 表示出发地（来源或起点）",
      bodyEn:
        "**에서** also marks the **origin or starting point** of movement — equivalent to English *from (a place)*. With movement verbs like 오다 (come) and 가다 (go), 에서 indicates where you depart *from*, while 에 indicates where you go *to*.\n\nContrast: *서울에 가요* (going **to** Seoul) vs *서울에서 와요* (coming **from** Seoul). The same noun takes different particles depending on the direction of movement.\n\nNote: for *from a person*, use 에게서 or 한테서, not 에서.",
      bodyZh:
        "**에서** 还用来标记移动的**出发地或来源**——相当于英语的 *from（某地）*。与 오다（来）、가다（去）等移动动词连用时，에서 表示从哪里出发，而 에 表示去往哪里。\n\n对比：*서울에 가요*（**去**首尔）vs *서울에서 와요*（从首尔**来**）。同一名词因移动方向不同而使用不同助词。\n\n注意：*从某人处*要用 에게서 或 한테서，不用 에서。",
      examples: [
        {
          jp: "학교에서 와요",
          reading: "hakgyoseo wayo",
          en: "I come from school.",
          zh: "我从学校来。",
          code: `import type { Verb, VerbPart, NounPart, ParticlePart, Sentence } from "typed-korean";


// 에서 = origin of movement (departing from school)
type 오다 = Verb & {
  dict: "오다"; stem: "오"; inf: "와"; past: "왔";
  eu: "오"; prospective: "올"; formalStem: "옵니";
};

type 학교에서와요 = Sentence<
  [NounPart<"학교">, ParticlePart<"에서">, VerbPart<오다, "Haeyo">]
>;`,
        },
        {
          jp: "저는 서울에서 왔어요",
          reading: "jeoneun seoureseo wasseoyo",
          en: "I came from Seoul.",
          zh: "我从首尔来的。",
          code: `import type { Verb, VerbPart, PronounPart, ProperNounPart, ParticlePart, Sentence } from "typed-korean";


// PastHaeyo appends 어요 to the past base: 왔 + 어요 = 왔어요
type 오다 = Verb & {
  dict: "오다"; stem: "오"; inf: "와"; past: "왔";
  eu: "오"; prospective: "올"; formalStem: "옵니";
};

type 저는서울에서왔어요 = Sentence<
  [
    PronounPart<"저">,
    ParticlePart<"는">,
    ProperNounPart<"서울">,
    ParticlePart<"에서">,
    VerbPart<오다, "PastHaeyo">,
  ]
>;`,
        },
        {
          jp: "친구가 미국에서 왔어요",
          reading: "chinguga migukeseo wasseoyo",
          en: "My friend came from the United States.",
          zh: "我朋友从美国来的。",
          code: `import type { Verb, VerbPart, NounPart, ProperNounPart, ParticlePart, Sentence } from "typed-korean";


type 오다 = Verb & {
  dict: "오다"; stem: "오"; inf: "와"; past: "왔";
  eu: "오"; prospective: "올"; formalStem: "옵니";
};

// 미국 ends in ㄱ (consonant) → subject particle 이 on 친구? No:
// 친구 ends in 우 (vowel) → subject particle 가
type 친구가미국에서왔어요 = Sentence<
  [
    NounPart<"친구">,
    ParticlePart<"가">,
    ProperNounPart<"미국">,
    ParticlePart<"에서">,
    VerbPart<오다, "PastHaeyo">,
  ]
>;`,
        },
      ],
    },
  ],
};

export default chapter;
