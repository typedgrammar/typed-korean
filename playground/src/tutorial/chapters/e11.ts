import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "e11",
  level: "elementary",
  order: 11,
  titleEn: "and / with / also / only: 와·과·하고, 도, 만",
  titleZh: "并列与助词：와·과·하고、도、만",
  summaryEn:
    "Korean has several particles for linking nouns and adding nuance. **와/과** and **하고** mean \"and/with\" when connecting nouns; the choice between 와 and 과 depends on whether the preceding noun ends in a consonant (받침). **도** means \"also/too\" and replaces 은/는 or 이/가. **만** means \"only\" and can follow any noun.\n\nAll three particles are 보조사 (auxiliary particles) and attach directly to the noun with no space. They appear frequently in everyday speech, so mastering their allomorph rules is essential.",
  summaryZh:
    "韩语中有几个助词用于连接名词和添加语气。**와/과** 与 **하고** 表示\"和/跟\"，用于名词并列；와 与 과 的选择取决于前面名词是否以辅音（받침）结尾。**도** 表示\"也\"，可替换 은/는 或 이/가。**만** 表示\"只/仅\"，可接在任何名词后。\n\n三者都是 보조사（补助助词），直接附着于名词，中间无空格。它们在日常口语中频繁出现，掌握其异形规律十分重要。",
  points: [
    {
      id: "e11-1",
      titleEn: "와/과/하고 — connecting nouns: \"and / with\"",
      titleZh: "와/과/하고 — 名词连接：\"和/跟\"",
      bodyEn:
        "Use **과** after a noun ending in a consonant (받침) and **와** after a noun ending in a vowel. Both are interchangeable in meaning.\n\n**하고** is an informal alternative that works after any noun (vowel or consonant ending) and is very common in spoken Korean. It also means \"with\" when used with a person.\n\nPattern: Noun₁ + 과/와/하고 + Noun₂ + (particle) + Verb.",
      bodyZh:
        "当前面名词末尾有辅音（받침）时用 **과**，末尾为元音时用 **와**，两者意思相同。\n\n**하고** 是口语中常用的非正式形式，接在元音或辅音结尾的名词后均可，也可表示\"跟（某人）一起\"。\n\n句型：名词₁ + 과/와/하고 + 名词₂ + （助词）+ 动词。",
      examples: [
        {
          jp: "빵과 우유를 샀어요",
          reading: "ppang-gwa uyu-reul sasseoyo",
          en: "I bought bread and milk.",
          zh: "我买了面包和牛奶。",
          code: `import type { Verb, VerbPart, NounPart, ParticlePart, Sentence } from "typed-korean";


// 빵 ends in ㅇ (consonant 받침) → 과
// 사다: buy
type 사다 = Verb & { dict:"사다"; stem:"사"; inf:"사"; past:"샀"; eu:"사"; prospective:"살"; formalStem:"삽니" };

type 빵과우유를샀어요 = Sentence<[
  NounPart<"빵">,
  ParticlePart<"과">,
  NounPart<"우유">,
  ParticlePart<"를">,
  VerbPart<사다, "PastHaeyo">
]>;
// → "빵과 우유를 샀어요"`,
        },
        {
          jp: "커피와 차를 마셔요",
          reading: "keopi-wa cha-reul masheoyo",
          en: "I drink coffee and tea.",
          zh: "我喝咖啡和茶。",
          code: `import type { Verb, VerbPart, NounPart, ParticlePart, Sentence } from "typed-korean";


// 커피 ends in vowel (ㅣ) → 와
// 마시다: drink
type 마시다 = Verb & { dict:"마시다"; stem:"마시"; inf:"마셔"; past:"마셨"; eu:"마시"; prospective:"마실"; formalStem:"마십니" };

type 커피와차를마셔요 = Sentence<[
  NounPart<"커피">,
  ParticlePart<"와">,
  NounPart<"차">,
  ParticlePart<"를">,
  VerbPart<마시다, "Haeyo">
]>;
// → "커피와 차를 마셔요"`,
        },
        {
          jp: "친구하고 영화를 봐요",
          reading: "chingu-hago yeonghwa-reul bwayo",
          en: "I watch a movie with a friend.",
          zh: "我和朋友一起看电影。",
          code: `import type { Verb, VerbPart, NounPart, ParticlePart, Sentence } from "typed-korean";


// 하고: informal "and/with", works after any noun
// 보다: see/watch
type 보다 = Verb & { dict:"보다"; stem:"보"; inf:"봐"; past:"봤"; eu:"보"; prospective:"볼"; formalStem:"봅니" };

type 친구하고영화를봐요 = Sentence<[
  NounPart<"친구">,
  ParticlePart<"하고">,
  NounPart<"영화">,
  ParticlePart<"를">,
  VerbPart<보다, "Haeyo">
]>;
// → "친구하고 영화를 봐요"`,
        },
      ],
    },
    {
      id: "e11-2",
      titleEn: "도 — \"also / too\"",
      titleZh: "도 — \"也\"",
      bodyEn:
        "**도** is a topic/subject substitute meaning \"also\" or \"too\". It replaces 은/는 (topic) or 이/가 (subject) — never stacks on top of them.\n\nIn 해요체 (polite informal), 도 simply follows the noun. In 합니다체 (formal polite), the verb changes to the formal form but 도 itself stays the same.\n\nPattern: Noun + 도 + Verb/Adjective.",
      bodyZh:
        "**도** 是表示\"也/也是\"的补助助词，它替换 은/는（话题助词）或 이/가（主格助词），不与它们叠用。\n\n在 해요체（礼貌非正式体）中，도 直接接在名词后；在 합니다체（正式礼貌体）中，动词变为正式形式，但 도 本身不变。\n\n句型：名词 + 도 + 动词/形容词。",
      examples: [
        {
          jp: "저도 가요",
          reading: "jeodo gayo",
          en: "I am going too.",
          zh: "我也去。",
          code: `import type { Verb, VerbPart, PronounPart, ParticlePart, Sentence } from "typed-korean";


// 가다: go
type 가다 = Verb & { dict:"가다"; stem:"가"; inf:"가"; past:"갔"; eu:"가"; prospective:"갈"; formalStem:"갑니" };

type 저도가요 = Sentence<[
  PronounPart<"저">,
  ParticlePart<"도">,
  VerbPart<가다, "Haeyo">
]>;
// → "저도 가요"`,
        },
        {
          jp: "우유도 있어요",
          reading: "uyu-do isseoyo",
          en: "There is milk too.",
          zh: "也有牛奶。",
          code: `import type { Verb, VerbPart, NounPart, ParticlePart, Sentence } from "typed-korean";


// 있다: exist/have
type 있다 = Verb & { dict:"있다"; stem:"있"; inf:"있어"; past:"있었"; eu:"있으"; prospective:"있을"; formalStem:"있습니" };

type 우유도있어요 = Sentence<[
  NounPart<"우유">,
  ParticlePart<"도">,
  VerbPart<있다, "Haeyo">
]>;
// → "우유도 있어요"`,
        },
        {
          jp: "선생님도 왔어요",
          reading: "seonsaengnim-do wasseoyo",
          en: "The teacher came too.",
          zh: "老师也来了。",
          code: `import type { Verb, VerbPart, NounPart, ParticlePart, Sentence } from "typed-korean";


// 오다: come
type 오다 = Verb & { dict:"오다"; stem:"오"; inf:"와"; past:"왔"; eu:"오"; prospective:"올"; formalStem:"옵니" };

type 선생님도왔어요 = Sentence<[
  NounPart<"선생님">,
  ParticlePart<"도">,
  VerbPart<오다, "PastHaeyo">
]>;
// → "선생님도 왔어요"`,
        },
      ],
    },
    {
      id: "e11-3",
      titleEn: "만 — \"only\"",
      titleZh: "만 — \"只/仅\"",
      bodyEn:
        "**만** means \"only\" and attaches directly to any noun (vowel or consonant ending — no allomorph variation). Like 도, it replaces 은/는 or 이/가 when used as the topic or subject.\n\nIn speech, 만 often carries a nuance of exclusion or limitation, e.g. \"I drink *only* water (nothing else)\". It can also combine with other particles: 에만 (only at), 에서만 (only from), etc.\n\nPattern: Noun + 만 + Verb/Adjective.",
      bodyZh:
        "**만** 表示\"只/仅\"，直接附在任何名词后（元音或辅音结尾均无需变化）。与 도 一样，作话题或主语时替换 은/는 或 이/가。\n\n口语中，만 常带有\"排他、限定\"的含义，如\"我只喝水（不喝别的）\"。也可与其他助词叠用：에만（只在……）、에서만（只从……）等。\n\n句型：名词 + 만 + 动词/形容词。",
      examples: [
        {
          jp: "물만 마셔요",
          reading: "mul-man masheoyo",
          en: "I drink only water.",
          zh: "我只喝水。",
          code: `import type { Verb, VerbPart, NounPart, ParticlePart, Sentence } from "typed-korean";


// 마시다: drink
type 마시다 = Verb & { dict:"마시다"; stem:"마시"; inf:"마셔"; past:"마셨"; eu:"마시"; prospective:"마실"; formalStem:"마십니" };

type 물만마셔요 = Sentence<[
  NounPart<"물">,
  ParticlePart<"만">,
  VerbPart<마시다, "Haeyo">
]>;
// → "물만 마셔요"`,
        },
        {
          jp: "책만 읽어요",
          reading: "chaengman ilgeoyo",
          en: "I read only books.",
          zh: "我只读书。",
          code: `import type { Verb, VerbPart, NounPart, ParticlePart, Sentence } from "typed-korean";


// 읽다: read
type 읽다 = Verb & { dict:"읽다"; stem:"읽"; inf:"읽어"; past:"읽었"; eu:"읽으"; prospective:"읽을"; formalStem:"읽습니" };

type 책만읽어요 = Sentence<[
  NounPart<"책">,
  ParticlePart<"만">,
  VerbPart<읽다, "Haeyo">
]>;
// → "책만 읽어요"`,
        },
        {
          jp: "빵만 사요",
          reading: "ppang-man sayo",
          en: "I buy only bread.",
          zh: "我只买面包。",
          code: `import type { Verb, VerbPart, NounPart, ParticlePart, Sentence } from "typed-korean";


// 사다: buy
type 사다 = Verb & { dict:"사다"; stem:"사"; inf:"사"; past:"샀"; eu:"사"; prospective:"살"; formalStem:"삽니" };

type 빵만사요 = Sentence<[
  NounPart<"빵">,
  ParticlePart<"만">,
  VerbPart<사다, "Haeyo">
]>;
// → "빵만 사요"`,
        },
      ],
    },
    {
      id: "e11-4",
      titleEn: "Combining particles in richer sentences",
      titleZh: "在更丰富的句子中组合助词",
      bodyEn:
        "Once you know 와/과/하고, 도, and 만 individually, you can combine them with other particles to build richer sentences. Note that 도 and 만 can follow location/time particles (에도, 에만) but may not directly follow the subject/topic particles 은/는 or 이/가 — they replace them.\n\nThese examples show the particles in natural, slightly more complex contexts still using the 해요체 style appropriate for everyday conversation.",
      bodyZh:
        "掌握了 와/과/하고、도、만 之后，可以将它们与其他助词组合，构建更丰富的句子。注意 도 和 만 可以跟在位置/时间助词后（에도、에만），但不能直接叠加在 은/는 或 이/가 后——它们是替换关系。\n\n以下例句展示这些助词在稍复杂语境中的自然用法，仍使用适合日常对话的 해요체。",
      examples: [
        {
          jp: "저도 커피하고 빵을 먹어요",
          reading: "jeodo keopi-hago ppang-eul meogeoyo",
          en: "I also eat bread and drink coffee.",
          zh: "我也喝咖啡吃面包。",
          code: `import type { Verb, VerbPart, NounPart, PronounPart, ParticlePart, Sentence } from "typed-korean";


// 먹다: eat
type 먹다 = Verb & { dict:"먹다"; stem:"먹"; inf:"먹어"; past:"먹었"; eu:"먹으"; prospective:"먹을"; formalStem:"먹습니" };

// 저도 = I + 도 (also); 커피하고 = coffee + 하고 (and); 빵을 = bread + 을 (object)
type 저도커피하고빵을먹어요 = Sentence<[
  PronounPart<"저">,
  ParticlePart<"도">,
  NounPart<"커피">,
  ParticlePart<"하고">,
  NounPart<"빵">,
  ParticlePart<"을">,
  VerbPart<먹다, "Haeyo">
]>;
// → "저도 커피하고 빵을 먹어요"`,
        },
        {
          jp: "물만 마시고 밥은 안 먹어요",
          reading: "mul-man masigo bab-eun an meogeoyo",
          en: "I only drink water and do not eat rice.",
          zh: "我只喝水，不吃饭。",
          code: `import type { Verb, VerbPart, NounPart, ParticlePart, LiteralPart, Sentence } from "typed-korean";


// 마시다: drink; 먹다: eat
type 마시다 = Verb & { dict:"마시다"; stem:"마시"; inf:"마셔"; past:"마셨"; eu:"마시"; prospective:"마실"; formalStem:"마십니" };
type 먹다 = Verb & { dict:"먹다"; stem:"먹"; inf:"먹어"; past:"먹었"; eu:"먹으"; prospective:"먹을"; formalStem:"먹습니" };

// 물만 마시고: only water, drink-And; 밥은 안 먹어요: rice-topic not eat
type 물만마시고밥은안먹어요 = Sentence<[
  NounPart<"물">,
  ParticlePart<"만">,
  VerbPart<마시다, "And">,
  NounPart<"밥">,
  ParticlePart<"은">,
  LiteralPart<"안">,
  VerbPart<먹다, "Haeyo">
]>;
// → "물만 마시고 밥은 안 먹어요"`,
        },
      ],
    },
  ],
};

export default chapter;
