import type { Chapter } from "../types";

// ── Chapter definition ───────────────────────────────────────────────────────

const chapter: Chapter = {
  id: "e04",
  level: "elementary",
  order: 4,
  titleEn: "해요체: the polite present (verbs)",
  titleZh: "해요체：动词的非格式体现在时",
  summaryEn:
    "The **해요체** (haeyo-che) is the everyday polite register used in conversations with people you are not very close to. "
    + "It is formed by taking a verb's **아/어 infinitive** (the `inf` base) and appending **요**. "
    + "This chapter introduces the most common action verbs — 가다, 먹다, 보다, 마시다, and 하다-type verbs — and shows how they conjugate into 해요체.\n\n"
    + "Korean word order is typically Subject–Object–Verb (SOV). "
    + "Particles are written immediately after the word they mark (no space), while eojeol (어절) are separated by a space.",
  summaryZh:
    "**해요체**（非格式敬语体）是日常交流中对非亲密对象使用的礼貌语体。"
    + "它的构成方式为：动词的**아/어 连用形**（`inf` 词基）加上**요**。"
    + "本章介绍最常见的动作动词——가다、먹다、보다、마시다 及 하다 型动词——并展示它们如何变位为 해요체。\n\n"
    + "韩语的基本语序为主语–宾语–谓语（SOV）。"
    + "助词紧接在所修饰的词后（无空格），而语节（어절）之间用空格分隔。",
  points: [
    // ─── Point 1: 아/어 infinitive + 요 rule ─────────────────────────────────
    {
      id: "e04-1",
      titleEn: "The 해요체 rule: inf + 요",
      titleZh: "해요체 规则：连用形 + 요",
      bodyEn:
        "Every verb has an **아/어 infinitive** (`inf` base): for stems whose last vowel is ㅏ or ㅗ the infinitive uses **아**, all others use **어**. "
        + "Append **요** to get the polite present: 먹어 → **먹어요**, 가 → **가요**.\n\n"
        + "The `ConjugateVerb<V, \"Haeyo\">` type handles this automatically — it expands to `` `${V[\"inf\"]}요` ``. "
        + "Notice that particles (은/는, 을/를) attach directly to the noun with no space, but verbs are separated by a space.",
      bodyZh:
        "每个动词都有一个**아/어 连用形**（`inf` 词基）：词干最后一个元音为 ㅏ 或 ㅗ 时用**아**，其余情况用**어**。"
        + "在此基础上加**요**即得到礼貌体现在时：먹어 → **먹어요**，가 → **가요**。\n\n"
        + "`ConjugateVerb<V, \"Haeyo\">` 类型会自动展开为 `` `${V[\"inf\"]}요` ``。"
        + "注意助词（은/는、을/를）紧跟名词后（无空格），动词前有空格。",
      examples: [
        {
          jp: "저는 가요",
          reading: "jeoneun gayo",
          en: "I go. / I am going.",
          zh: "我去。",
          code: `import type { Verb, VerbPart, PronounPart, ParticlePart, Sentence } from "typed-korean";


type 가다 = Verb & { dict:"가다"; stem:"가"; inf:"가"; past:"갔"; eu:"가"; prospective:"갈"; formalStem:"갑니" };

type Result = Sentence<[
  PronounPart<"저">,
  ParticlePart<"는">,
  VerbPart<가다, "Haeyo">
]>;`,
        },
        {
          jp: "저는 밥을 먹어요",
          reading: "jeoneun babeul meogeoyo",
          en: "I eat rice.",
          zh: "我吃饭。",
          code: `import type { Verb, VerbPart, NounPart, PronounPart, ParticlePart, Sentence } from "typed-korean";


type 먹다 = Verb & { dict:"먹다"; stem:"먹"; inf:"먹어"; past:"먹었"; eu:"먹으"; prospective:"먹을"; formalStem:"먹습니" };

type Result = Sentence<[
  PronounPart<"저">,
  ParticlePart<"는">,
  NounPart<"밥">,
  ParticlePart<"을">,
  VerbPart<먹다, "Haeyo">
]>;`,
        },
        {
          jp: "저는 커피를 마셔요",
          reading: "jeoneun keopireul masyeoyo",
          en: "I drink coffee.",
          zh: "我喝咖啡。",
          code: `import type { Verb, VerbPart, NounPart, PronounPart, ParticlePart, Sentence } from "typed-korean";


type 마시다 = Verb & { dict:"마시다"; stem:"마시"; inf:"마셔"; past:"마셨"; eu:"마시"; prospective:"마실"; formalStem:"마십니" };

type Result = Sentence<[
  PronounPart<"저">,
  ParticlePart<"는">,
  NounPart<"커피">,
  ParticlePart<"를">,
  VerbPart<마시다, "Haeyo">
]>;`,
        },
      ],
    },

    // ─── Point 2: 보다 (ㅗ harmony → 봐요) and vowel-contracting verbs ────────
    {
      id: "e04-2",
      titleEn: "Vowel contraction: 보다 → 봐요, 읽다 → 읽어요",
      titleZh: "元音缩合：보다 → 봐요，읽다 → 읽어요",
      bodyEn:
        "Some stems contract with the vowel of the infinitive suffix: **보** (stem ends in ㅗ) + 아 → **봐**. "
        + "So 보다 in 해요체 is **봐요**, not ~~보아요~~. "
        + "Consonant-final stems such as 읽다 simply take 어: 읽 + 어 → **읽어요**.\n\n"
        + "The `inf` field in each verb's type definition already encodes the contracted or harmonised form, "
        + "so `ConjugateVerb<보다, \"Haeyo\">` correctly resolves to **봐요** without any extra rules.",
      bodyZh:
        "部分词干会与连用形后缀发生元音缩合：**보**（词干以 ㅗ 结尾）+ 아 → **봐**。"
        + "因此 보다 的 해요체 形式为 **봐요**，而非 ~~보아요~~。"
        + "以辅音收尾的词干（如 읽다）直接加어：읽 + 어 → **읽어요**。\n\n"
        + "每个动词类型定义中的 `inf` 字段已编码了缩合或元音和谐后的形式，"
        + "因此 `ConjugateVerb<보다, \"Haeyo\">` 可直接正确解析为 **봐요**。",
      examples: [
        {
          jp: "영화를 봐요",
          reading: "yeonghwareul bwayo",
          en: "I watch a movie. / (Someone) watches a movie.",
          zh: "（我）看电影。",
          code: `import type { Verb, VerbPart, NounPart, ParticlePart, Sentence } from "typed-korean";


type 보다 = Verb & { dict:"보다"; stem:"보"; inf:"봐"; past:"봤"; eu:"보"; prospective:"볼"; formalStem:"봅니" };

type Result = Sentence<[
  NounPart<"영화">,
  ParticlePart<"를">,
  VerbPart<보다, "Haeyo">
]>;`,
        },
        {
          jp: "저는 책을 읽어요",
          reading: "jeoneun chaekeul ilgeoyo",
          en: "I read a book.",
          zh: "我读书。",
          code: `import type { Verb, VerbPart, NounPart, PronounPart, ParticlePart, Sentence } from "typed-korean";


type 읽다 = Verb & { dict:"읽다"; stem:"읽"; inf:"읽어"; past:"읽었"; eu:"읽으"; prospective:"읽을"; formalStem:"읽습니" };

type Result = Sentence<[
  PronounPart<"저">,
  ParticlePart<"는">,
  NounPart<"책">,
  ParticlePart<"을">,
  VerbPart<읽다, "Haeyo">
]>;`,
        },
        {
          jp: "한국어를 배워요",
          reading: "hangugeoreul baeweoyo",
          en: "I learn Korean.",
          zh: "我学韩语。",
          code: `import type { Verb, VerbPart, ProperNounPart, ParticlePart, Sentence } from "typed-korean";


type 배우다 = Verb & { dict:"배우다"; stem:"배우"; inf:"배워"; past:"배웠"; eu:"배우"; prospective:"배울"; formalStem:"배웁니" };

type Result = Sentence<[
  ProperNounPart<"한국어">,
  ParticlePart<"를">,
  VerbPart<배우다, "Haeyo">
]>;`,
        },
      ],
    },

    // ─── Point 3: 하다 verbs (해요체 → 해요) ─────────────────────────────────
    {
      id: "e04-3",
      titleEn: "하다 verbs: noun + 해요",
      titleZh: "하다 动词：名词 + 해요",
      bodyEn:
        "A large class of Korean verbs is formed by attaching **하다** to a Sino-Korean or loanword noun: 공부 (study) → 공부하다, 일 (work) → 일하다. "
        + "In 해요체 the stem **하** contracts with 여 → **해**, giving the ending **-해요**: 공부하다 → **공부해요**.\n\n"
        + "This pattern is very productive: almost any noun can combine with 하다 to become a verb. "
        + "The infinitive base is pre-computed as `\"공부해\"` in the type definition, so `ConjugateVerb<공부하다, \"Haeyo\">` → **공부해요**.",
      bodyZh:
        "韩语中有大量动词由名词加**하다**构成：공부（学习）→ 공부하다，일（工作）→ 일하다。"
        + "在 해요체 中，词干**하**与여缩合为**해**，得到词尾**-해요**：공부하다 → **공부해요**。\n\n"
        + "这种构词模式极为能产：几乎任何名词都可以与 하다 结合变成动词。"
        + "连用形词基已预先计算为 `\"공부해\"`，因此 `ConjugateVerb<공부하다, \"Haeyo\">` → **공부해요**。",
      examples: [
        {
          jp: "매일 공부해요",
          reading: "maeil gongbuhaeyo",
          en: "I study every day.",
          zh: "我每天学习。",
          code: `import type { HadaVerb, VerbPart, AdverbPart, Sentence } from "typed-korean";


type 공부하다 = HadaVerb & { dict:"공부하다"; stem:"공부하"; inf:"공부해"; past:"공부했"; eu:"공부하"; prospective:"공부할"; formalStem:"공부합니" };

type Result = Sentence<[
  AdverbPart<"매일">,
  VerbPart<공부하다, "Haeyo">
]>;`,
        },
        {
          jp: "저는 매일 한국어를 공부해요",
          reading: "jeoneun maeil hangugeoreul gongbuhaeyo",
          en: "I study Korean every day.",
          zh: "我每天学韩语。",
          code: `import type { HadaVerb, VerbPart, PronounPart, ProperNounPart, AdverbPart, ParticlePart, Sentence } from "typed-korean";


type 공부하다 = HadaVerb & { dict:"공부하다"; stem:"공부하"; inf:"공부해"; past:"공부했"; eu:"공부하"; prospective:"공부할"; formalStem:"공부합니" };

type Result = Sentence<[
  PronounPart<"저">,
  ParticlePart<"는">,
  AdverbPart<"매일">,
  ProperNounPart<"한국어">,
  ParticlePart<"를">,
  VerbPart<공부하다, "Haeyo">
]>;`,
        },
      ],
    },

    // ─── Point 4: 해요체 vs 합니다체 — same verb, different register ──────────
    {
      id: "e04-4",
      titleEn: "해요체 vs 합니다체: choosing your register",
      titleZh: "해요체 与 합니다체：选择语体",
      bodyEn:
        "Korean has two main polite registers. **해요체** (-아/어요) is warm and conversational, used with strangers, colleagues, and shopkeepers. "
        + "**합니다체** (-ㅂ니다/-습니다) is formal and used in presentations, announcements, and written documents.\n\n"
        + "The 합니다체 form uses the `formalStem` base + **다**: 먹습니 + 다 → **먹습니다**, 갑니 + 다 → **갑니다**. "
        + "Both forms are equally polite; the difference is *formality*, not *politeness*.",
      bodyZh:
        "韩语有两种主要的礼貌语体。**해요체**（-아/어요）语气亲切自然，用于与陌生人、同事、店员交谈。"
        + "**합니다체**（-ㅂ니다/-습니다）更加正式，用于演讲、广播和书面文体。\n\n"
        + "합니다체 使用 `formalStem` 词基加**다**：먹습니 + 다 → **먹습니다**，갑니 + 다 → **갑니다**。"
        + "两种语体同样礼貌，区别仅在于*正式程度*，而非*礼貌程度*。",
      examples: [
        {
          jp: "먹어요",
          reading: "meogeoyo",
          en: "I eat. (polite conversational)",
          zh: "吃。（非格式礼貌体）",
          code: `import type { Verb, ConjugateVerb } from "typed-korean";


type 먹다 = Verb & { dict:"먹다"; stem:"먹"; inf:"먹어"; past:"먹었"; eu:"먹으"; prospective:"먹을"; formalStem:"먹습니" };

type Result = ConjugateVerb<먹다, "Haeyo">;`,
        },
        {
          jp: "갑니다",
          reading: "gamnida",
          en: "I go. (formal polite)",
          zh: "去。（格式礼貌体）",
          code: `import type { Verb, ConjugateVerb } from "typed-korean";


type 가다 = Verb & { dict:"가다"; stem:"가"; inf:"가"; past:"갔"; eu:"가"; prospective:"갈"; formalStem:"갑니" };

type Result = ConjugateVerb<가다, "Hamnida">;`,
        },
        {
          jp: "공부합니다",
          reading: "gongbuhamnida",
          en: "I study. (formal polite)",
          zh: "学习。（格式礼貌体）",
          code: `import type { HadaVerb, ConjugateVerb } from "typed-korean";


type 공부하다 = HadaVerb & { dict:"공부하다"; stem:"공부하"; inf:"공부해"; past:"공부했"; eu:"공부하"; prospective:"공부할"; formalStem:"공부합니" };

type Result = ConjugateVerb<공부하다, "Hamnida">;`,
        },
      ],
    },
  ],
};

export default chapter;
