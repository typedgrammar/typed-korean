import type { Chapter } from "../types";

const chapter: Chapter = {
  id: "e06",
  level: "elementary",
  order: 6,
  titleEn: "The object particle 을/를 and SOV order",
  titleZh: "宾格助词 을/를 与 SOV 语序",
  summaryEn:
    "Korean marks the **direct object** of a verb with the particle **을** (after a noun ending in a consonant / 받침) or **를** (after a noun ending in a vowel). The basic Korean sentence follows **Subject – Object – Verb (SOV)** order, so the verb always comes last.\n\nLearning to choose between 을 and 를 is the same skill as choosing 은/는 or 이/가: look at the final sound of the noun and pick the matching allomorph.",
  summaryZh:
    "韩语用助词 **을**（前接有尾音/받침的名词）或 **를**（前接无尾音的名词）标记动词的**直接宾语**。基本语序为 **主语 – 宾语 – 谓语（SOV）**，动词始终位于句末。\n\n选择 을 还是 를，方法与选择 은/는、이/가 完全相同：看名词末尾的音节有没有尾音字母即可。",
  points: [
    {
      id: "e06-1",
      titleEn: "을 after consonant-final nouns",
      titleZh: "받침结尾的名词后接 을",
      bodyEn:
        "When the noun that receives the action ends in a consonant (받침), attach **을**. For example, 밥 (rice/meal) ends in ㅂ, so it becomes **밥을**; 책 (book) ends in ㄱ, so it becomes **책을**.\n\nIn 해요체 (the polite-informal style used in everyday conversation), the verb follows the object: `NounPart + ParticlePart<\"을\"> + VerbPart<…, \"Haeyo\">`.",
      bodyZh:
        "当充当宾语的名词末尾有尾音（받침）时，接 **을**。例如，밥（米饭/饭）末尾是 ㅂ，所以变成 **밥을**；책（书）末尾是 ㄱ，所以变成 **책을**。\n\n在 해요체（日常会话中使用的礼貌非正式体）中，动词跟在宾语后面：`名词 + 을 + 动词`。",
      examples: [
        {
          jp: "저는 밥을 먹어요",
          reading: "jeoneun babeul meogeoyo",
          en: "I eat rice.",
          zh: "我吃饭。",
          code: `import type { Verb, VerbPart, NounPart, PronounPart, ParticlePart, Sentence } from "typed-korean";


type 먹다 = Verb & { dict:"먹다"; stem:"먹"; inf:"먹어"; past:"먹었"; eu:"먹으"; prospective:"먹을"; formalStem:"먹습니" };

type result = Sentence<[
  PronounPart<"저">, ParticlePart<"는">,
  NounPart<"밥">, ParticlePart<"을">,
  VerbPart<먹다, "Haeyo">
]>;
// result = "저는 밥을 먹어요"`,
        },
        {
          jp: "저는 책을 읽어요",
          reading: "jeoneun chaegeul ilgeoyo",
          en: "I read a book.",
          zh: "我看书。",
          code: `import type { Verb, VerbPart, NounPart, PronounPart, ParticlePart, Sentence } from "typed-korean";


type 읽다 = Verb & { dict:"읽다"; stem:"읽"; inf:"읽어"; past:"읽었"; eu:"읽으"; prospective:"읽을"; formalStem:"읽습니" };

type result = Sentence<[
  PronounPart<"저">, ParticlePart<"는">,
  NounPart<"책">, ParticlePart<"을">,
  VerbPart<읽다, "Haeyo">
]>;
// result = "저는 책을 읽어요"`,
        },
      ],
    },
    {
      id: "e06-2",
      titleEn: "를 after vowel-final nouns",
      titleZh: "元音结尾的名词后接 를",
      bodyEn:
        "When the noun ends in a vowel (no 받침), attach **를**. For example, 커피 (coffee) ends in 이 (a vowel), so it becomes **커피를**; 친구 (friend) ends in 우, so it becomes **친구를**; 한국어 (Korean language) ends in 어, so it becomes **한국어를**.\n\nThe SOV pattern remains the same: subject (+ 은/는) · object (+ 를) · verb.",
      bodyZh:
        "当名词末尾没有尾音（元音收尾）时，接 **를**。例如，커피（咖啡）末尾是 이（元音），变成 **커피를**；친구（朋友）末尾是 우，变成 **친구를**；한국어（韩国语）末尾是 어，变成 **한국어를**。\n\nSOV 结构保持不变：主语（+은/는）· 宾语（+를）· 谓语。",
      examples: [
        {
          jp: "저는 커피를 마셔요",
          reading: "jeoneun keopireul masheoyo",
          en: "I drink coffee.",
          zh: "我喝咖啡。",
          code: `import type { Verb, VerbPart, NounPart, PronounPart, ParticlePart, Sentence } from "typed-korean";


type 마시다 = Verb & { dict:"마시다"; stem:"마시"; inf:"마셔"; past:"마셨"; eu:"마시"; prospective:"마실"; formalStem:"마십니" };

type result = Sentence<[
  PronounPart<"저">, ParticlePart<"는">,
  NounPart<"커피">, ParticlePart<"를">,
  VerbPart<마시다, "Haeyo">
]>;
// result = "저는 커피를 마셔요"`,
        },
        {
          jp: "저는 친구를 만나요",
          reading: "jeoneun chingureul mannayo",
          en: "I meet a friend.",
          zh: "我见朋友。",
          code: `import type { Verb, VerbPart, NounPart, PronounPart, ParticlePart, Sentence } from "typed-korean";


type 만나다 = Verb & { dict:"만나다"; stem:"만나"; inf:"만나"; past:"만났"; eu:"만나"; prospective:"만날"; formalStem:"만납니" };

type result = Sentence<[
  PronounPart<"저">, ParticlePart<"는">,
  NounPart<"친구">, ParticlePart<"를">,
  VerbPart<만나다, "Haeyo">
]>;
// result = "저는 친구를 만나요"`,
        },
        {
          jp: "저는 한국어를 배워요",
          reading: "jeoneun hangugeoreul baeweoyo",
          en: "I learn Korean.",
          zh: "我学韩语。",
          code: `import type { Verb, VerbPart, PronounPart, ProperNounPart, ParticlePart, Sentence } from "typed-korean";


type 배우다 = Verb & { dict:"배우다"; stem:"배우"; inf:"배워"; past:"배웠"; eu:"배우"; prospective:"배울"; formalStem:"배웁니" };

type result = Sentence<[
  PronounPart<"저">, ParticlePart<"는">,
  ProperNounPart<"한국어">, ParticlePart<"를">,
  VerbPart<배우다, "Haeyo">
]>;
// result = "저는 한국어를 배워요"`,
        },
      ],
    },
    {
      id: "e06-3",
      titleEn: "Object particle in 합니다체 (formal style)",
      titleZh: "합니다체（正式体）中的宾格助词",
      bodyEn:
        "The object particle 을/를 is the same in both 해요체 and **합니다체** (the formal style used in presentations, news, and official settings). Only the verb ending changes: `-어요 / -아요` → `-습니다` (after 받침) or `-ㅂ니다` (after vowel).\n\nCompare: 먹어요 (해요체) vs **먹습니다** (합니다체); 읽어요 vs **읽습니다**.",
      bodyZh:
        "宾格助词 을/를 在 해요체 和 **합니다체**（用于演讲、新闻、正式场合的正式体）中完全相同，只有动词词尾发生变化：`-어요 / -아요` → 有尾音后接 `-습니다`，无尾音后接 `-ㅂ니다`。\n\n对比：먹어요（해요체）vs **먹습니다**（합니다체）；읽어요 vs **읽습니다**。",
      examples: [
        {
          jp: "밥을 먹습니다",
          reading: "babeul meokseumnida",
          en: "(I) eat rice.",
          zh: "（我）吃饭。",
          code: `import type { Verb, VerbPart, NounPart, ParticlePart, Sentence } from "typed-korean";


type 먹다 = Verb & { dict:"먹다"; stem:"먹"; inf:"먹어"; past:"먹었"; eu:"먹으"; prospective:"먹을"; formalStem:"먹습니" };

type result = Sentence<[
  NounPart<"밥">, ParticlePart<"을">,
  VerbPart<먹다, "Hamnida">
]>;
// result = "밥을 먹습니다"`,
        },
        {
          jp: "책을 읽습니다",
          reading: "chaegeul ikseumnida",
          en: "(I) read a book.",
          zh: "（我）读书。",
          code: `import type { Verb, VerbPart, NounPart, ParticlePart, Sentence } from "typed-korean";


type 읽다 = Verb & { dict:"읽다"; stem:"읽"; inf:"읽어"; past:"읽었"; eu:"읽으"; prospective:"읽을"; formalStem:"읽습니" };

type result = Sentence<[
  NounPart<"책">, ParticlePart<"을">,
  VerbPart<읽다, "Hamnida">
]>;
// result = "책을 읽습니다"`,
        },
      ],
    },
    {
      id: "e06-4",
      titleEn: "Richer SOV sentences with adverbs",
      titleZh: "含副词的丰富 SOV 句型",
      bodyEn:
        "Korean adverbs slot in freely before the object or verb without disrupting SOV order. A common pattern is **Subject + Adverb + Object + Verb**. For example, 매일 (every day) precedes the object phrase: **저는 매일 영화를 봐요**.\n\n하다-verbs (하다 compounds) work the same way: 공부하다 (to study), 말하다 (to speak). The object they take is marked with 을/를 just like any other verb.",
      bodyZh:
        "韩语副词可以自由插入宾语或动词之前，不会破坏 SOV 语序。常见句型为 **主语 + 副词 + 宾语 + 谓语**。例如，매일（每天）放在宾语短语前：**저는 매일 영화를 봐요**。\n\n하다 复合动词（하다 동사）用法相同：공부하다（学习）、말하다（说话）。它们的宾语同样用 을/를 标记。",
      examples: [
        {
          jp: "저는 매일 영화를 봐요",
          reading: "jeoneun maeil yeonghwareul bwayo",
          en: "I watch movies every day.",
          zh: "我每天看电影。",
          code: `import type { Verb, VerbPart, NounPart, PronounPart, AdverbPart, ParticlePart, Sentence } from "typed-korean";


type 보다 = Verb & { dict:"보다"; stem:"보"; inf:"봐"; past:"봤"; eu:"보"; prospective:"볼"; formalStem:"봅니" };

type result = Sentence<[
  PronounPart<"저">, ParticlePart<"는">,
  AdverbPart<"매일">,
  NounPart<"영화">, ParticlePart<"를">,
  VerbPart<보다, "Haeyo">
]>;
// result = "저는 매일 영화를 봐요"`,
        },
        {
          jp: "저는 한국어를 공부해요",
          reading: "jeoneun hangugeoreul gongbuhaeyo",
          en: "I study Korean.",
          zh: "我学习韩语。",
          code: `import type { HadaVerb, VerbPart, PronounPart, ProperNounPart, ParticlePart, Sentence } from "typed-korean";


type 공부하다 = HadaVerb & { dict:"공부하다"; stem:"공부하"; inf:"공부해"; past:"공부했"; eu:"공부하"; prospective:"공부할"; formalStem:"공부합니" };

type result = Sentence<[
  PronounPart<"저">, ParticlePart<"는">,
  ProperNounPart<"한국어">, ParticlePart<"를">,
  VerbPart<공부하다, "Haeyo">
]>;
// result = "저는 한국어를 공부해요"`,
        },
        {
          jp: "저는 친구를 기다려요",
          reading: "jeoneun chingureul gidaryeoyo",
          en: "I am waiting for a friend.",
          zh: "我在等朋友。",
          code: `import type { Verb, VerbPart, NounPart, PronounPart, ParticlePart, Sentence } from "typed-korean";


type 기다리다 = Verb & { dict:"기다리다"; stem:"기다리"; inf:"기다려"; past:"기다렸"; eu:"기다리"; prospective:"기다릴"; formalStem:"기다립니" };

type result = Sentence<[
  PronounPart<"저">, ParticlePart<"는">,
  NounPart<"친구">, ParticlePart<"를">,
  VerbPart<기다리다, "Haeyo">
]>;
// result = "저는 친구를 기다려요"`,
        },
      ],
    },
  ],
};

export default chapter;
