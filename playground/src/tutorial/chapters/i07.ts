import type { Chapter } from "../types";

// ---------------------------------------------------------------------------
// Chapter definition
// ---------------------------------------------------------------------------
const chapter: Chapter = {
  id: "i07",
  level: "intermediate",
  order: 7,
  titleEn: "Irregular verbs: ㄷ, ㅂ, 으",
  titleZh: "不规则动词：ㄷ、ㅂ、으",
  summaryEn:
    `Korean has three major irregular stem classes: **ㄷ-irregular** (e.g. 듣다, 걷다), **ㅂ-irregular** (e.g. 춥다, 덥다, 쉽다), and **으-irregular** (e.g. 쓰다, 크다). ` +
    `In each class the stem changes before vowel-initial endings, but the **dictionary form** retains the original spelling.\n\n` +
    `The good news: the DSL pre-encodes the right bases for every vetted word, so you never compute the change by hand. ` +
    `This chapter shows what the irregularity looks like in 해요체 (polite informal) and past 해요체, and explains the phonological rule behind each class.`,
  summaryZh:
    `韩语有三大不规则词干类型：**ㄷ 不规则**（如 듣다、걷다）、**ㅂ 不规则**（如 춥다、덥다、쉽다）和 **으 不规则**（如 쓰다、크다）。` +
    `每种类型的词干在元音开头的词尾前会发生变化，但**原形**拼写保持不变。\n\n` +
    `好消息是：DSL 已为所有经过验证的词汇预先编码了正确的形态基，无需手动计算变化。` +
    `本章通过 해요체（非正式礼貌体）和过去 해요체 展示每种不规则类型的实际形态，并解释其背后的语音规则。`,
  points: [
    {
      id: "i07-1",
      titleEn: "ㄷ-irregular verbs: ㄷ → ㄹ before vowels",
      titleZh: "ㄷ 不规则动词：元音前 ㄷ → ㄹ",
      bodyEn:
        `A small set of verbs whose stems end in **ㄷ** change that ㄷ to **ㄹ** when the following ending begins with a vowel. ` +
        `The two most common are **듣다** (to listen) and **걷다** (to walk).\n\n` +
        `The pattern: **듣** + -어요 → **들어요** (not ~~듣어요~~); **걷** + -어요 → **걸어요**. ` +
        `The past tense works the same way: 듣 + -었어요 → **들었어요**. ` +
        `Before consonant-initial endings the ㄷ is kept: 듣다 (dictionary), 듣습니다 (합니다체). ` +
        `In the DSL the "inf" base already stores "들어" and "걸어", and "past" stores "들었" and "걸었".`,
      bodyZh:
        `一小部分词干末尾为 **ㄷ** 的动词，在接元音开头的词尾时，ㄷ 变为 **ㄹ**。` +
        `最常见的两个是 **듣다**（听）和 **걷다**（走）。\n\n` +
        `变化规律：**듣** + -어요 → **들어요**（不能写成 ~~듣어요~~）；**걷** + -어요 → **걸어요**。` +
        `过去式同理：듣 + -었어요 → **들었어요**。` +
        `在辅音开头的词尾前 ㄷ 保持不变：듣다（原形）、듣습니다（합니다체）。` +
        `DSL 中的 "inf" 基已存储"들어"和"걸어"，"past" 基已存储"들었"和"걸었"。`,
      examples: [
        {
          jp: "음악을 들어요",
          reading: "eumageul deureoyo",
          en: "I listen to music.",
          zh: "我听音乐。",
          code: `import type { IrregularVerb, VerbPart, NounPart, ParticlePart, Sentence } from "typed-korean";


// ㄷ-irregular: inf = "들어" (ㄷ → ㄹ before vowel)
type 듣다 = IrregularVerb & { dict:"듣다"; stem:"듣"; inf:"들어"; past:"들었"; eu:"들으"; prospective:"들을"; formalStem:"듣습니" };

// Haeyo = inf + "요" = "들어" + "요" = "들어요"
// 음악 ends in ㄱ (consonant) → object particle 을
type result = Sentence<[
  NounPart<"음악">, ParticlePart<"을">,
  VerbPart<듣다, "Haeyo">
]>;`,
        },
        {
          jp: "음악을 들었어요",
          reading: "eumageul deureoesseoyo",
          en: "I listened to music.",
          zh: "我听了音乐。",
          code: `import type { IrregularVerb, VerbPart, NounPart, ParticlePart, Sentence } from "typed-korean";


// ㄷ-irregular: past = "들었" (ㄷ → ㄹ before vowel; same rule as Haeyo)
type 듣다 = IrregularVerb & { dict:"듣다"; stem:"듣"; inf:"들어"; past:"들었"; eu:"들으"; prospective:"들을"; formalStem:"듣습니" };

// PastHaeyo = past + "어요" = "들었" + "어요" = "들었어요"
type result = Sentence<[
  NounPart<"음악">, ParticlePart<"을">,
  VerbPart<듣다, "PastHaeyo">
]>;`,
        },
        {
          jp: "공원에서 걸어요",
          reading: "gongwoneseo georeoyo",
          en: "I walk in the park.",
          zh: "我在公园里走路。",
          code: `import type { IrregularVerb, VerbPart, NounPart, ParticlePart, Sentence } from "typed-korean";


// ㄷ-irregular: inf = "걸어" (걷 → 걸 before vowel)
type 걷다 = IrregularVerb & { dict:"걷다"; stem:"걷"; inf:"걸어"; past:"걸었"; eu:"걸으"; prospective:"걸을"; formalStem:"걷습니" };

// 공원 ends in ㄴ (consonant) → locative 에서 (at/from)
// Haeyo = "걸어" + "요" = "걸어요"
type result = Sentence<[
  NounPart<"공원">, ParticlePart<"에서">,
  VerbPart<걷다, "Haeyo">
]>;`,
        },
      ],
    },
    {
      id: "i07-2",
      titleEn: "ㅂ-irregular adjectives: ㅂ → 우 before vowels",
      titleZh: "ㅂ 不规则形容词：元音前 ㅂ → 우",
      bodyEn:
        `Many adjectives ending in **ㅂ** change that ㅂ to **우** before vowel-initial endings, and the 우 then contracts with 아/어 into **워**. ` +
        `Key examples: **춥다** (cold), **덥다** (hot), **쉽다** (easy), **어렵다** (difficult).\n\n` +
        `The 해요체 pattern: 춥 + 아/어요 → 추 + 워요 → **추워요**; similarly 덥다 → **더워요**, 쉽다 → **쉬워요**. ` +
        `The past: 춥 → **추웠어요**. ` +
        `Before consonant-initial endings ㅂ stays: 춥다, 춥습니다. ` +
        `In the DSL, "inf" stores the already-contracted form ("추워", "더워", "쉬워") and "past" stores "추웠", "더웠", "쉬웠".`,
      bodyZh:
        `许多末音节为 **ㅂ** 的形容词，在接元音开头的词尾时，ㅂ 变为 **우**，再与아/어缩合成 **워**。` +
        `典型例子：**춥다**（冷）、**덥다**（热）、**쉽다**（简单）、**어렵다**（难）。\n\n` +
        `해요체 变化规律：춥 + 아/어요 → 추 + 워요 → **추워요**；同理 덥다 → **더워요**，쉽다 → **쉬워요**。` +
        `过去式：춥 → **추웠어요**。` +
        `在辅音开头的词尾前 ㅂ 保持不变：춥다、춥습니다。` +
        `DSL 中 "inf" 基已存储缩合后的形式（"추워"、"더워"、"쉬워"），"past" 基已存储"추웠"、"더웠"、"쉬웠"。`,
      examples: [
        {
          jp: "날씨가 추워요",
          reading: "nalssiga chuwoyo",
          en: "The weather is cold.",
          zh: "天气很冷。",
          code: `import type { Adjective, AdjectivePart, NounPart, ParticlePart, Sentence } from "typed-korean";


// ㅂ-irregular: inf = "추워" (ㅂ → 우 + 아/어 → 워)
type 춥다 = Adjective & { dict:"춥다"; stem:"춥"; inf:"추워"; past:"추웠"; eu:"추우"; prospective:"추울"; formalStem:"춥습니"; attr:"추운" };

// Haeyo = inf + "요" = "추워" + "요" = "추워요"
// 날씨 ends in vowel 씨 → subject particle 가
type result = Sentence<[
  NounPart<"날씨">, ParticlePart<"가">,
  AdjectivePart<춥다, "Haeyo">
]>;`,
        },
        {
          jp: "여름이 더워요",
          reading: "yeoreumi deowoyo",
          en: "Summer is hot.",
          zh: "夏天很热。",
          code: `import type { Adjective, AdjectivePart, NounPart, ParticlePart, Sentence } from "typed-korean";


// ㅂ-irregular: inf = "더워" (덥 → 더 + 워)
type 덥다 = Adjective & { dict:"덥다"; stem:"덥"; inf:"더워"; past:"더웠"; eu:"더우"; prospective:"더울"; formalStem:"덥습니"; attr:"더운" };

// 여름 ends in ㅁ (consonant) → subject particle 이
// Haeyo = "더워" + "요" = "더워요"
type result = Sentence<[
  NounPart<"여름">, ParticlePart<"이">,
  AdjectivePart<덥다, "Haeyo">
]>;`,
        },
        {
          jp: "한국어가 쉬워요",
          reading: "hangugeoga swiwoyo",
          en: "Korean is easy.",
          zh: "韩语很简单。",
          code: `import type { Adjective, AdjectivePart, NounPart, ParticlePart, Sentence } from "typed-korean";


// ㅂ-irregular: inf = "쉬워" (쉽 → 쉬 + 워)
type 쉽다 = Adjective & { dict:"쉽다"; stem:"쉽"; inf:"쉬워"; past:"쉬웠"; eu:"쉬우"; prospective:"쉬울"; formalStem:"쉽습니"; attr:"쉬운" };

// 한국어 ends in vowel 어 → subject particle 가
// Haeyo = "쉬워" + "요" = "쉬워요"
type result = Sentence<[
  NounPart<"한국어">, ParticlePart<"가">,
  AdjectivePart<쉽다, "Haeyo">
]>;`,
        },
      ],
    },
    {
      id: "i07-3",
      titleEn: "으-irregular verbs and adjectives: 으 drops before vowels",
      titleZh: "으 不规则动词和形容词：元音前 으 脱落",
      bodyEn:
        `Stems ending in **으** drop the 으 when the following ending begins with a vowel (아/어). ` +
        `The resulting vowel harmony then determines the final vowel: after 으-drop, the preceding syllable's last vowel governs the choice of 아 or 어, but in practice the contracted form is already the "inf" base stored in the DSL.\n\n` +
        `Key examples: **쓰다** (to write/use) → inf "써" → **써요**; **크다** (big) → inf "커" → **커요**; **바쁘다** (busy) → "바빠" → **바빠요**; **예쁘다** (pretty) → "예뻐" → **예뻐요**. ` +
        `The past follows the same drop: 쓰다 → **썼어요**, 크다 → **컸어요**. ` +
        `Before consonant-initial endings 으 is kept: 쓰다, 씁니다; 크다, 큽니다.`,
      bodyZh:
        `词干末尾为 **으** 的词，在接元音（아/어）开头的词尾时，으 脱落。` +
        `脱落后根据前一音节的元音决定接 아 还是 어，不过 DSL 的 "inf" 基已直接存储了缩合后的形式。\n\n` +
        `典型例子：**쓰다**（写/用）→ inf "써" → **써요**；**크다**（大）→ inf "커" → **커요**；**바쁘다**（忙）→ "바빠" → **바빠요**；**예쁘다**（漂亮）→ "예뻐" → **예뻐요**。` +
        `过去式同理：쓰다 → **썼어요**，크다 → **컸어요**。` +
        `在辅音开头的词尾前 으 保持不变：쓰다、씁니다；크다、큽니다。`,
      examples: [
        {
          jp: "편지를 써요",
          reading: "pyeonjireul sseoyo",
          en: "I write a letter.",
          zh: "我写信。",
          code: `import type { Verb, VerbPart, NounPart, ParticlePart, Sentence } from "typed-korean";


// 으-irregular: 쓰다 stem ends in 으 → drops before vowel
// inf = "써" (쓰 + 아/어 → 쓰 drops 으, then ㅆ + 어 → 써)
type 쓰다 = Verb & { dict:"쓰다"; stem:"쓰"; inf:"써"; past:"썼"; eu:"쓰"; prospective:"쓸"; formalStem:"씁니" };

// Haeyo = inf + "요" = "써" + "요" = "써요"
// 편지 ends in vowel 지 → object particle 를
type result = Sentence<[
  NounPart<"편지">, ParticlePart<"를">,
  VerbPart<쓰다, "Haeyo">
]>;`,
        },
        {
          jp: "편지를 썼어요",
          reading: "pyeonjireul sseoesseoyo",
          en: "I wrote a letter.",
          zh: "我写了一封信。",
          code: `import type { Verb, VerbPart, NounPart, ParticlePart, Sentence } from "typed-korean";


// 으-irregular: past = "썼" (으 drops → ㅆ + 었 → 썼)
type 쓰다 = Verb & { dict:"쓰다"; stem:"쓰"; inf:"써"; past:"썼"; eu:"쓰"; prospective:"쓸"; formalStem:"씁니" };

// PastHaeyo = past + "어요" = "썼" + "어요" = "썼어요"
type result = Sentence<[
  NounPart<"편지">, ParticlePart<"를">,
  VerbPart<쓰다, "PastHaeyo">
]>;`,
        },
        {
          jp: "방이 커요",
          reading: "bangi keoyo",
          en: "The room is big.",
          zh: "房间很大。",
          code: `import type { Adjective, AdjectivePart, NounPart, ParticlePart, Sentence } from "typed-korean";


// 으-irregular adjective: 크다 stem 크 → 으 drops before 어 → 크 + 어 → 커
// inf = "커"
type 크다 = Adjective & { dict:"크다"; stem:"크"; inf:"커"; past:"컸"; eu:"크"; prospective:"클"; formalStem:"큽니"; attr:"큰" };

// Haeyo = "커" + "요" = "커요"
// 방 ends in ㅇ (consonant) → subject particle 이
type result = Sentence<[
  NounPart<"방">, ParticlePart<"이">,
  AdjectivePart<크다, "Haeyo">
]>;`,
        },
      ],
    },
    {
      id: "i07-4",
      titleEn: "Irregular stems in longer sentences",
      titleZh: "不规则词干在更长句子中的应用",
      bodyEn:
        `Once you know the irregular bases, you can use them inside any grammatical pattern — conditionals, past tense, and connected clauses. ` +
        `The key insight: the irregularity only appears **before vowel-initial endings**. ` +
        `Every ending that starts with a consonant (합니다체 -습니다, -(으)면 → actually starts with 으 which is a vowel, so the irregular base still applies there too).\n\n` +
        `For the conditional -(으)면: use the **eu** base. ` +
        `듣다 eu = "들으" → **들으면**; 춥다 eu = "추우" → **추우면**; 쓰다 eu = "쓰" → **쓰면** (vowel-final, so no 으 inserted). ` +
        `In 합니다체, the formal stem stays as written in the dict: 듣습니다, 춥습니다, 씁니다.`,
      bodyZh:
        `掌握不规则基之后，就可以在任何语法结构中使用它们——条件句、过去时、连接从句等。` +
        `关键认知：不规则变化**只发生在元音开头的词尾前**。\n\n` +
        `用于条件句 -(으)면 时，使用 **eu** 基：` +
        `듣다 eu = "들으" → **들으면**；춥다 eu = "추우" → **추우면**；쓰다 eu = "쓰" → **쓰면**（元音结尾，无需插入 으）。` +
        `在 합니다체 中，词干按原形保留：듣습니다、춥습니다、씁니다。`,
      examples: [
        {
          jp: "음악을 들으면 기분이 좋아요",
          reading: "eumageul deureumyeon gibuni joayo",
          en: "When I listen to music, I feel good.",
          zh: "听音乐的话，心情会变好。",
          code: `import type { IrregularVerb, Adjective, VerbPart, AdjectivePart, NounPart, ParticlePart, Sentence } from "typed-korean";


// ㄷ-irregular: eu = "들으" → 들으 + 면 = 들으면
type 듣다 = IrregularVerb & { dict:"듣다"; stem:"듣"; inf:"들어"; past:"들었"; eu:"들으"; prospective:"들을"; formalStem:"듣습니" };
type 좋다 = Adjective & { dict:"좋다"; stem:"좋"; inf:"좋아"; past:"좋았"; eu:"좋으"; prospective:"좋을"; formalStem:"좋습니"; attr:"좋은" };

// 음악 (consonant ㄱ) → 을 | 기분 (consonant ㄴ) → 이
type result = Sentence<[
  NounPart<"음악">, ParticlePart<"을">,
  VerbPart<듣다, "If">,
  NounPart<"기분">, ParticlePart<"이">,
  AdjectivePart<좋다, "Haeyo">
]>;`,
        },
        {
          jp: "어제 날씨가 추웠어요",
          reading: "eoje nalssiga chuwosseoyo",
          en: "Yesterday the weather was cold.",
          zh: "昨天天气很冷。",
          code: `import type { Adjective, AdjectivePart, NounPart, AdverbPart, ParticlePart, Sentence } from "typed-korean";


// ㅂ-irregular: past = "추웠" (춥 → 추 + 웠)
// PastHaeyo = "추웠" + "어요" = "추웠어요"
type 춥다 = Adjective & { dict:"춥다"; stem:"춥"; inf:"추워"; past:"추웠"; eu:"추우"; prospective:"추울"; formalStem:"춥습니"; attr:"추운" };

// 어제 = adverb "yesterday"; 날씨 vowel-final → 가
type result = Sentence<[
  AdverbPart<"어제">,
  NounPart<"날씨">, ParticlePart<"가">,
  AdjectivePart<춥다, "PastHaeyo">
]>;`,
        },
        {
          jp: "한국어를 배우면 쉬워요",
          reading: "hangugeoreul baeuumyeon swiwoyo",
          en: "If you learn Korean, it becomes easy.",
          zh: "学了韩语之后就会变得简单。",
          code: `import type { Verb, Adjective, VerbPart, AdjectivePart, NounPart, ParticlePart, Sentence } from "typed-korean";


// 배우다 is regular: eu = "배우" → 배우 + 면 = 배우면 (vowel-final, no 으 added)
type 배우다 = Verb & { dict:"배우다"; stem:"배우"; inf:"배워"; past:"배웠"; eu:"배우"; prospective:"배울"; formalStem:"배웁니" };
// ㅂ-irregular: inf = "쉬워" → Haeyo = 쉬워요
type 쉽다 = Adjective & { dict:"쉽다"; stem:"쉽"; inf:"쉬워"; past:"쉬웠"; eu:"쉬우"; prospective:"쉬울"; formalStem:"쉽습니"; attr:"쉬운" };

// 한국어 vowel-final → 를
type result = Sentence<[
  NounPart<"한국어">, ParticlePart<"를">,
  VerbPart<배우다, "If">,
  AdjectivePart<쉽다, "Haeyo">
]>;`,
        },
      ],
    },
  ],
};

export default chapter;
