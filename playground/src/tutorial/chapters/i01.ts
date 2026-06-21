import type { Chapter } from "../types";

// ---------------------------------------------------------------------------
// Chapter definition
// ---------------------------------------------------------------------------
const chapter: Chapter = {
  id: "i01",
  level: "intermediate",
  order: 1,
  titleEn: "Conditional: -(으)면",
  titleZh: "条件：-(으)면",
  summaryEn:
    `The conditional ending **-(으)면** attaches to verb and adjective stems to mean "if …" or "when …". ` +
    `It is one of the most productive endings in Korean and appears in both polite-informal (해요체) and formal-polite (합니다체) speech.\n\n` +
    `The allomorph rule is simple: if the stem ends in a **vowel** (no 받침), attach **-면** directly. ` +
    `If the stem ends in a **consonant** (받침 present), attach **-으면**. ` +
    `This mirrors the general (으)-insertion rule that governs many Korean endings.`,
  summaryZh:
    `条件助词 **-(으)면** 接在动词和形容词词干后，表示"如果……"或"当……时"。` +
    `它是韩语中使用频率最高的连接词尾之一，适用于非正式礼貌体（해요체）和正式礼貌体（합니다체）。\n\n` +
    `形态规则简单明了：若词干末尾为**元音**（无 받침），直接接 **-면**；` +
    `若词干末尾为**辅音**（有 받침），则接 **-으면**。` +
    `这与韩语中普遍存在的（으）插入规则一致。`,
  points: [
    {
      id: "i01-1",
      titleEn: "Vowel-stem verbs: attach -면 directly",
      titleZh: "元音词干动词：直接接 -면",
      bodyEn:
        `When a verb stem ends in a **vowel** (no final consonant / 받침), simply attach **-면** without any filler. ` +
        `For example, 오다 (to come) has 으-linking stem "오", so the conditional is **오면**. ` +
        `Likewise 가다 → **가면**, 만나다 → **만나면**.\n\n` +
        `The result clause that follows is usually in 해요체 (polite informal). ` +
        `In 합니다체 the result would use -습니다 instead, but the conditional **-면** itself does not change.`,
      bodyZh:
        `当动词词干末尾为**元音**（没有 받침）时，直接在词干后接 **-면** 即可，无需插入 으。` +
        `例如，오다（来）的 으 连接词干为"오"，条件形为 **오면**；` +
        `同理，가다 → **가면**，만나다 → **만나면**。\n\n` +
        `条件从句后通常跟 해요체（非正式礼貌体）的结果从句。` +
        `在 합니다체（正式礼貌体）中结果从句改用 -습니다，但条件词尾 **-면** 本身不变。`,
      examples: [
        {
          jp: "비가 오면 집에 있어요",
          reading: "biga omyeon jibe isseoyo",
          en: "If it rains, I stay home.",
          zh: "如果下雨，我就在家。",
          code: `import type { Verb, VerbPart, NounPart, ParticlePart, Sentence } from "typed-korean";


type 오다 = Verb & { dict:"오다"; stem:"오"; inf:"와"; past:"왔"; eu:"오"; prospective:"올"; formalStem:"옵니" };
type 있다 = Verb & { dict:"있다"; stem:"있"; inf:"있어"; past:"있었"; eu:"있으"; prospective:"있을"; formalStem:"있습니" };

// 오다 eu = "오" → 오 + 면 = 오면 (no 으 needed — vowel stem)
type 비가오면집에있어요 = Sentence<[
  NounPart<"비">, ParticlePart<"가">,
  VerbPart<오다, "If">,
  NounPart<"집">, ParticlePart<"에">,
  VerbPart<있다, "Haeyo">
]>;
type result = 비가오면집에있어요;`,
        },
        {
          jp: "가면 친구를 만나요",
          reading: "gamyeon chingureul mannayo",
          en: "If (you/I) go, (you/I) meet friends.",
          zh: "去的话，就能见到朋友。",
          code: `import type { Verb, VerbPart, NounPart, ParticlePart, Sentence } from "typed-korean";


type 가다 = Verb & { dict:"가다"; stem:"가"; inf:"가"; past:"갔"; eu:"가"; prospective:"갈"; formalStem:"갑니" };
type 만나다 = Verb & { dict:"만나다"; stem:"만나"; inf:"만나"; past:"만났"; eu:"만나"; prospective:"만날"; formalStem:"만납니" };

// 가다 eu = "가" → 가 + 면 = 가면
type 가면친구를만나요 = Sentence<[
  VerbPart<가다, "If">,
  NounPart<"친구">, ParticlePart<"를">,
  VerbPart<만나다, "Haeyo">
]>;
type result = 가면친구를만나요;`,
        },
        {
          jp: "학교에 가면 공부해요",
          reading: "hakgyoe gamyeon gongbuhaeyo",
          en: "If I go to school, I study.",
          zh: "去学校的话，就学习。",
          code: `import type { Verb, HadaVerb, VerbPart, NounPart, ParticlePart, Sentence } from "typed-korean";


type 가다 = Verb & { dict:"가다"; stem:"가"; inf:"가"; past:"갔"; eu:"가"; prospective:"갈"; formalStem:"갑니" };
type 공부하다 = HadaVerb & { dict:"공부하다"; stem:"공부하"; inf:"공부해"; past:"공부했"; eu:"공부하"; prospective:"공부할"; formalStem:"공부합니" };

// 가다 eu = "가" → 가면  |  공부하다 → Haeyo: 공부해 + 요 = 공부해요
type 학교에가면공부해요 = Sentence<[
  NounPart<"학교">, ParticlePart<"에">,
  VerbPart<가다, "If">,
  VerbPart<공부하다, "Haeyo">
]>;
type result = 학교에가면공부해요;`,
        },
      ],
    },
    {
      id: "i01-2",
      titleEn: "Consonant-stem verbs: attach -으면",
      titleZh: "辅音词干动词：接 -으면",
      bodyEn:
        `When a verb stem ends in a **consonant** (받침 present), insert **으** before -면 → **-으면**. ` +
        `For example, 있다 (to exist/have) has 으-linking stem "있으", giving **있으면**; ` +
        `먹다 (to eat) → **먹으면**; 읽다 (to read) → **읽으면**.\n\n` +
        `This 으-insertion is the same pattern seen in other endings like -(으)세요 and -(으)니까. ` +
        `Memorise the **eu** (으-linking) base of each verb; the cheat-sheet lists it for every entry.`,
      bodyZh:
        `当动词词干末尾为**辅音**（有 받침）时，需在 -면 前插入 **으** → **-으면**。` +
        `例如，있다（有/存在）的 으 连接词干为"있으"，条件形为 **있으면**；` +
        `먹다（吃）→ **먹으면**；읽다（读）→ **읽으면**。\n\n` +
        `这与 -(으)세요、-(으)니까 等词尾的 으 插入规则完全相同。` +
        `记住每个动词的 **eu（으 连接词干）**，词汇表中均有标注。`,
      examples: [
        {
          jp: "시간이 있으면 가요",
          reading: "sigani isseumyeon gayo",
          en: "If there is time, I'll go.",
          zh: "如果有时间，就去。",
          code: `import type { Verb, VerbPart, NounPart, ParticlePart, Sentence } from "typed-korean";


type 있다 = Verb & { dict:"있다"; stem:"있"; inf:"있어"; past:"있었"; eu:"있으"; prospective:"있을"; formalStem:"있습니" };
type 가다 = Verb & { dict:"가다"; stem:"가"; inf:"가"; past:"갔"; eu:"가"; prospective:"갈"; formalStem:"갑니" };

// 있다 eu = "있으" → 있으 + 면 = 있으면 (으 inserted because 있 has 받침 ㅆ)
type 시간이있으면가요 = Sentence<[
  NounPart<"시간">, ParticlePart<"이">,
  VerbPart<있다, "If">,
  VerbPart<가다, "Haeyo">
]>;
type result = 시간이있으면가요;`,
        },
        {
          jp: "밥을 먹으면 기분이 좋아요",
          reading: "babeul meogeumyeon gibuni joayo",
          en: "If I eat, I feel good.",
          zh: "吃了饭的话，心情会变好。",
          code: `import type { Verb, Adjective, VerbPart, AdjectivePart, NounPart, ParticlePart, Sentence } from "typed-korean";


type 먹다 = Verb & { dict:"먹다"; stem:"먹"; inf:"먹어"; past:"먹었"; eu:"먹으"; prospective:"먹을"; formalStem:"먹습니" };
type 좋다 = Adjective & { dict:"좋다"; stem:"좋"; inf:"좋아"; past:"좋았"; eu:"좋으"; prospective:"좋을"; formalStem:"좋습니"; attr:"좋은" };

// 먹다 eu = "먹으" → 먹으면  |  기분 ends in ㄴ → subject particle 이
type 밥을먹으면기분이좋아요 = Sentence<[
  NounPart<"밥">, ParticlePart<"을">,
  VerbPart<먹다, "If">,
  NounPart<"기분">, ParticlePart<"이">,
  AdjectivePart<좋다, "Haeyo">
]>;
type result = 밥을먹으면기분이좋아요;`,
        },
        {
          jp: "책을 읽으면 좋아요",
          reading: "chaegeul ilgeumyeon joayo",
          en: "Reading books is good. / If you read books, it's good.",
          zh: "读书的话很好。",
          code: `import type { Verb, Adjective, VerbPart, AdjectivePart, NounPart, ParticlePart, Sentence } from "typed-korean";


type 읽다 = Verb & { dict:"읽다"; stem:"읽"; inf:"읽어"; past:"읽었"; eu:"읽으"; prospective:"읽을"; formalStem:"읽습니" };
type 좋다 = Adjective & { dict:"좋다"; stem:"좋"; inf:"좋아"; past:"좋았"; eu:"좋으"; prospective:"좋을"; formalStem:"좋습니"; attr:"좋은" };

// 읽다 eu = "읽으" → 읽으면  |  result: 좋다 Haeyo = 좋아요
type 책을읽으면좋아요 = Sentence<[
  NounPart<"책">, ParticlePart<"을">,
  VerbPart<읽다, "If">,
  AdjectivePart<좋다, "Haeyo">
]>;
type result = 책을읽으면좋아요;`,
        },
      ],
    },
    {
      id: "i01-3",
      titleEn: "Adjective conditionals",
      titleZh: "形容词条件句",
      bodyEn:
        `Korean adjectives (형용사) follow exactly the same **-(으)면** rule as verbs: ` +
        `vowel-final stems take **-면**, consonant-final stems take **-으면**.\n\n` +
        `Watch out for **ㅂ-irregular** adjectives (춥다, 쉽다, 어렵다). ` +
        `Their 으-linking stem replaces ㅂ with 우: 춥다 → eu "추우" → **추우면**. ` +
        `Similarly, **으-irregular** adjectives like 바쁘다 have eu = "바쁘" → **바쁘면** (vowel-final, so no 으 added).`,
      bodyZh:
        `韩语形容词（형용사）与动词完全遵循相同的 **-(으)면** 规则：` +
        `元音词干接 **-면**，辅音词干接 **-으면**。\n\n` +
        `注意 **ㅂ 不规则**形容词（춥다、쉽다、어렵다等）：` +
        `其 으 连接词干将 ㅂ 变为 우，如 춥다 → eu "추우" → **추우면**。` +
        `另外，**으 不规则**形容词如 바쁘다 的 eu 为"바쁘"（元音结尾），因此直接接 **-면** → **바쁘면**。`,
      examples: [
        {
          jp: "날씨가 좋으면 산에 가요",
          reading: "nalssiga joeumyeon sane gayo",
          en: "If the weather is nice, I go to the mountain.",
          zh: "天气好的话，就去山里。",
          code: `import type { Verb, Adjective, VerbPart, AdjectivePart, NounPart, ParticlePart, Sentence } from "typed-korean";


type 좋다 = Adjective & { dict:"좋다"; stem:"좋"; inf:"좋아"; past:"좋았"; eu:"좋으"; prospective:"좋을"; formalStem:"좋습니"; attr:"좋은" };
type 가다 = Verb & { dict:"가다"; stem:"가"; inf:"가"; past:"갔"; eu:"가"; prospective:"갈"; formalStem:"갑니" };

// 좋다 eu = "좋으" → 좋으면  |  날씨 ends in vowel → subject particle 가
type 날씨가좋으면산에가요 = Sentence<[
  NounPart<"날씨">, ParticlePart<"가">,
  AdjectivePart<좋다, "If">,
  NounPart<"산">, ParticlePart<"에">,
  VerbPart<가다, "Haeyo">
]>;
type result = 날씨가좋으면산에가요;`,
        },
        {
          jp: "날씨가 추우면 집에 있어요",
          reading: "nalssiga chuumyeon jibe isseoyo",
          en: "If the weather is cold, I stay home.",
          zh: "天气冷的话，就待在家里。",
          code: `import type { Verb, Adjective, VerbPart, AdjectivePart, NounPart, ParticlePart, Sentence } from "typed-korean";


// 춥다 — ㅂ-irregular: eu base replaces ㅂ with 우 → "추우"
type 춥다 = Adjective & { dict:"춥다"; stem:"춥"; inf:"추워"; past:"추웠"; eu:"추우"; prospective:"추울"; formalStem:"춥습니"; attr:"추운" };
type 있다 = Verb & { dict:"있다"; stem:"있"; inf:"있어"; past:"있었"; eu:"있으"; prospective:"있을"; formalStem:"있습니" };

// 춥다 eu = "추우" → 추우 + 면 = 추우면  (ㅂ → 우 before vowel-initial endings)
type 날씨가추우면집에있어요 = Sentence<[
  NounPart<"날씨">, ParticlePart<"가">,
  AdjectivePart<춥다, "If">,
  NounPart<"집">, ParticlePart<"에">,
  VerbPart<있다, "Haeyo">
]>;
type result = 날씨가추우면집에있어요;`,
        },
        {
          jp: "바쁘면 나중에 해요",
          reading: "bappeumyeon najunge haeyo",
          en: "If you are busy, do it later.",
          zh: "如果忙的话，以后再做吧。",
          code: `import type { HadaVerb, Adjective, VerbPart, AdjectivePart, NounPart, ParticlePart, Sentence } from "typed-korean";


// 바쁘다 — 으-irregular: eu = "바쁘" (vowel-final stem, so no extra 으)
type 바쁘다 = Adjective & { dict:"바쁘다"; stem:"바쁘"; inf:"바빠"; past:"바빴"; eu:"바쁘"; prospective:"바쁠"; formalStem:"바쁩니"; attr:"바쁜" };
type 하다 = HadaVerb & { dict:"하다"; stem:"하"; inf:"해"; past:"했"; eu:"하"; prospective:"할"; formalStem:"합니" };

// 바쁘다 eu = "바쁘" → 바쁘 + 면 = 바쁘면  (vowel-final eu stem: 으 not inserted)
type 바쁘면나중에해요 = Sentence<[
  AdjectivePart<바쁘다, "If">,
  NounPart<"나중">, ParticlePart<"에">,
  VerbPart<하다, "Haeyo">
]>;
type result = 바쁘면나중에해요;`,
        },
      ],
    },
    {
      id: "i01-4",
      titleEn: "Richer conditional sentences",
      titleZh: "更丰富的条件句",
      bodyEn:
        `Once you know the rule, -(으)면 combines freely with any verb or adjective to build longer sentences. ` +
        `The condition clause comes first, the result clause second — just like English "if … then …". ` +
        `Both clauses can have their own subjects, objects, and adverbs.\n\n` +
        `In 합니다체, the same conditional stem is used; only the result clause ending changes: ` +
        `e.g. 시간이 있으면 갑니다 (formal) vs 시간이 있으면 가요 (polite informal).`,
      bodyZh:
        `掌握规则后，-(으)면 可以与任何动词或形容词自由组合，构成更长的句子。` +
        `条件从句在前，结果从句在后——与英语"if … then …"的语序一致。` +
        `两个从句都可以有各自的主语、宾语和副词。\n\n` +
        `在 합니다체（正式礼貌体）中，条件词干不变，只需将结果从句的词尾换成 -습니다：` +
        `例如 시간이 있으면 갑니다（正式）vs 시간이 있으면 가요（非正式礼貌）。`,
      examples: [
        {
          jp: "시간이 있으면 같이 영화를 봐요",
          reading: "sigani isseumyeon gachi yeonghwareul bwayo",
          en: "If there is time, let's watch a movie together.",
          zh: "如果有时间，一起看电影吧。",
          code: `import type { Verb, VerbPart, NounPart, AdverbPart, ParticlePart, Sentence } from "typed-korean";


type 있다 = Verb & { dict:"있다"; stem:"있"; inf:"있어"; past:"있었"; eu:"있으"; prospective:"있을"; formalStem:"있습니" };
type 보다 = Verb & { dict:"보다"; stem:"보"; inf:"봐"; past:"봤"; eu:"보"; prospective:"볼"; formalStem:"봅니" };

// 있으면 + 같이(adverb) + 영화를(object) + 봐요
// 영화 is vowel-final → object particle 를
type 시간이있으면같이영화를봐요 = Sentence<[
  NounPart<"시간">, ParticlePart<"이">,
  VerbPart<있다, "If">,
  AdverbPart<"같이">,
  NounPart<"영화">, ParticlePart<"를">,
  VerbPart<보다, "Haeyo">
]>;
type result = 시간이있으면같이영화를봐요;`,
        },
        {
          jp: "공부하면 시험이 쉬워요",
          reading: "gongbuhamyeon siheomi swiweoyo",
          en: "If you study, the exam is easy.",
          zh: "认真学习的话，考试会变容易。",
          code: `import type { HadaVerb, Adjective, VerbPart, AdjectivePart, NounPart, ParticlePart, Sentence } from "typed-korean";


type 공부하다 = HadaVerb & { dict:"공부하다"; stem:"공부하"; inf:"공부해"; past:"공부했"; eu:"공부하"; prospective:"공부할"; formalStem:"공부합니" };
// 쉽다 — ㅂ-irregular: Haeyo = 쉬워요
type 쉽다 = Adjective & { dict:"쉽다"; stem:"쉽"; inf:"쉬워"; past:"쉬웠"; eu:"쉬우"; prospective:"쉬울"; formalStem:"쉽습니"; attr:"쉬운" };

// 공부하다 eu = "공부하" → 공부하 + 면 = 공부하면 (vowel-final 하 stem)
// 시험 ends in ㅁ (consonant) → subject particle 이
type 공부하면시험이쉬워요 = Sentence<[
  VerbPart<공부하다, "If">,
  NounPart<"시험">, ParticlePart<"이">,
  AdjectivePart<쉽다, "Haeyo">
]>;
type result = 공부하면시험이쉬워요;`,
        },
        {
          jp: "돈이 있으면 여행을 가요",
          reading: "doni isseumyeon yeohaengeul gayo",
          en: "If I have money, I go travelling.",
          zh: "如果有钱，就去旅行。",
          code: `import type { Verb, VerbPart, NounPart, ParticlePart, Sentence } from "typed-korean";


type 있다 = Verb & { dict:"있다"; stem:"있"; inf:"있어"; past:"있었"; eu:"있으"; prospective:"있을"; formalStem:"있습니" };
type 가다 = Verb & { dict:"가다"; stem:"가"; inf:"가"; past:"갔"; eu:"가"; prospective:"갈"; formalStem:"갑니" };

// 돈 ends in ㄴ (consonant) → subject particle 이
// 여행 ends in ㅇ (consonant) → object particle 을
type 돈이있으면여행을가요 = Sentence<[
  NounPart<"돈">, ParticlePart<"이">,
  VerbPart<있다, "If">,
  NounPart<"여행">, ParticlePart<"을">,
  VerbPart<가다, "Haeyo">
]>;
type result = 돈이있으면여행을가요;`,
        },
      ],
    },
  ],
};

export default chapter;
