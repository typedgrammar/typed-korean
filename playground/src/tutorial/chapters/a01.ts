import type { Chapter } from "../types";

// ---------------------------------------------------------------------------
// Chapter definition
// ---------------------------------------------------------------------------
const chapter: Chapter = {
  id: "a01",
  level: "advanced",
  order: 1,
  titleEn: "Noun-modifying clauses (관형사형)",
  titleZh: "定语从句（冠形词形）",
  summaryEn:
    "Korean can transform a verb or adjective into a **noun modifier** — called the **관형사형** (attributive form) — that sits directly before a noun, like an adjective in English. " +
    "The two core patterns are: **verb present -는** (먹다 → 먹는, used with action verbs) and **adjective -(으)ㄴ** (좋다 → 좋은, used with descriptive adjectives).\n\n" +
    "These modifying forms let you say things like \"the person who reads books\" (책을 읽는 사람) or \"good food\" (좋은 음식) without any relative-pronoun construction — the modifier simply precedes the noun. " +
    "Mastering the form for each predicate type and handling irregular stems are the two key skills of this chapter.",
  summaryZh:
    "韩语可以将动词或形容词变形为**冠形词形**（관형사형），直接放在名词前修饰该名词，类似英语的定语。" +
    "两种核心形式为：**动词现在时 -는**（먹다 → 먹는，用于行为动词）和**形容词 -(으)ㄴ**（좋다 → 좋은，用于描述性形容词）。\n\n" +
    "借助这些修饰形式，可以说“读书的人”（책을 읽는 사람）或“好的食物”（좋은 음식），无需任何关系代词——修饰语直接放在名词前。" +
    "掌握每类谓词的冠形词形，以及正确处理不规则词干，是本章的两大核心技能。",
  points: [
    {
      id: "a01-1",
      titleEn: "Verb attributive -는 (present action)",
      titleZh: "动词冠形词形 -는（现在进行/习惯动作）",
      bodyEn:
        "Action verbs (동사) form their present-tense attributive by appending **-는** directly to the dictionary stem — regardless of whether the stem ends in a vowel or consonant. " +
        "For example: 읽다 → 읽**는**, 먹다 → 먹**는**, 배우다 → 배우**는**.\n\n" +
        "The -는 form expresses an action that is happening now or habitually. The modified noun follows immediately after. " +
        "In the DSL, use `VerbPart<V, \"Attributive\">` inside a `Sentence<[...]>` — it outputs the -는 form, and `Sentence` automatically inserts a space before the following noun part.\n\n" +
        "Note: 있다/없다 (existence verbs) and 있다-type adjectives (맛있다, 재미있다) also take **-는** — not -(으)ㄴ. These are covered in point 2.",
      bodyZh:
        "行为动词（动词）构成现在时冠形词形的方法是：直接在词典词干后附加 **-는**，无论词干末尾是元音还是辅音。" +
        "例如：읽다 → 읽**는**，먹다 → 먹**는**，배우다 → 배우**는**。\n\n" +
        "-는 形式表示当前正在发生或习惯性的动作，修饰语紧接在被修饰名词之前。" +
        "在 DSL 中，在 `Sentence<[...]>` 里使用 `VerbPart<V, \"Attributive\">`，它会输出 -는 形式，`Sentence` 会自动在其后的名词词部前插入空格。\n\n" +
        "注意：있다/없다（存在动词）和 있다 类形容词（맛있다、재미있다）同样使用 **-는**，而非 -(으)ㄴ，详见第 2 点。",
      examples: [
        {
          jp: "책을 읽는 사람이에요",
          reading: "chaegeul ingneun saramieyo",
          en: "It is a person who reads books.",
          zh: "（他/她）是读书的人。",
          code: `import type { Verb, VerbPart, CopulaPart, NounPart, ParticlePart, Sentence } from "typed-korean";


type 읽다 = Verb & { dict:"읽다"; stem:"읽"; inf:"읽어"; past:"읽었"; eu:"읽으"; prospective:"읽을"; formalStem:"읽습니" };

// 읽다 Attributive: 읽 + 는 = 읽는  (consonant stem: -는 attaches directly, no 으 insertion)
// 사람 ends in ㅁ (consonant) → copula Batchim true → 이에요
type 책을읽는사람이에요 = Sentence<[
  NounPart<"책">, ParticlePart<"을">,
  VerbPart<읽다, "Attributive">,
  CopulaPart<"사람", "Haeyo">
]>;
type result = 책을읽는사람이에요;`,
        },
        {
          jp: "밥을 먹는 사람을 봐요",
          reading: "babeul meongneun sarameul bwayo",
          en: "I see a person eating rice.",
          zh: "我看见了吃饭的人。",
          code: `import type { Verb, VerbPart, NounPart, ParticlePart, Sentence } from "typed-korean";


type 먹다 = Verb & { dict:"먹다"; stem:"먹"; inf:"먹어"; past:"먹었"; eu:"먹으"; prospective:"먹을"; formalStem:"먹습니" };
type 보다 = Verb & { dict:"보다"; stem:"보"; inf:"봐"; past:"봤"; eu:"보"; prospective:"볼"; formalStem:"봅니" };

// 먹다 Attributive: 먹 + 는 = 먹는
// 사람 ends in ㅁ (consonant) → object particle 을
type 밥을먹는사람을봐요 = Sentence<[
  NounPart<"밥">, ParticlePart<"을">,
  VerbPart<먹다, "Attributive">,
  NounPart<"사람">, ParticlePart<"을">,
  VerbPart<보다, "Haeyo">
]>;
type result = 밥을먹는사람을봐요;`,
        },
        {
          jp: "한국어를 배우는 친구가 있어요",
          reading: "hangugeoreul baeuneun chinguga isseoyo",
          en: "I have a friend who is learning Korean.",
          zh: "我有一个正在学韩语的朋友。",
          code: `import type { Verb, VerbPart, NounPart, ParticlePart, Sentence } from "typed-korean";


type 배우다 = Verb & { dict:"배우다"; stem:"배우"; inf:"배워"; past:"배웠"; eu:"배우"; prospective:"배울"; formalStem:"배웁니" };
type 있다 = Verb & { dict:"있다"; stem:"있"; inf:"있어"; past:"있었"; eu:"있으"; prospective:"있을"; formalStem:"있습니" };

// 배우다 Attributive: 배우 + 는 = 배우는  (vowel stem — -는 attaches directly)
// 한국어 ends in vowel ㅓ → object particle 를
// 친구 ends in vowel ㅜ → subject particle 가
type 한국어를배우는친구가있어요 = Sentence<[
  NounPart<"한국어">, ParticlePart<"를">,
  VerbPart<배우다, "Attributive">,
  NounPart<"친구">, ParticlePart<"가">,
  VerbPart<있다, "Haeyo">
]>;
type result = 한국어를배우는친구가있어요;`,
        },
      ],
    },
    {
      id: "a01-2",
      titleEn: "Adjective attributive -(으)ㄴ (regular and 있다-type)",
      titleZh: "形容词冠形词形 -(으)ㄴ（规则及 있다 型）",
      bodyEn:
        "Descriptive adjectives (형용사) form their attributive with **-(으)ㄴ**: " +
        "if the stem ends in a **vowel**, attach **-ㄴ** directly (크다 → 큰); " +
        "if the stem ends in a **consonant**, insert **으** first (좋다 → 좋**은**, 많다 → 많**은**).\n\n" +
        "**Exception — 있다-type adjectives**: 맛있다, 재미있다, and similar compounds built on 있다/없다 " +
        "behave like verbs and take **-는** instead of -(으)ㄴ: 맛있다 → 맛있**는**, 재미있다 → 재미있**는**. " +
        "The DSL encodes the correct form in each adjective's `attr` field — always use `AdjectivePart<A, \"Attributive\">` rather than hard-coding it.\n\n" +
        "The main-clause predicate in 해요체 stays as usual (먹어요, 봐요). Only the modifier uses -(으)ㄴ or -는.",
      bodyZh:
        "描述性形容词（형용사）构成冠形词形使用 **-(으)ㄴ**：" +
        "词干末尾为**元音**时，直接附加 **-ㄴ**（크다 → 큰）；" +
        "词干末尾为**辅音**时，先插入 **으** 再接 ㄴ（좋다 → 좋**은**，많다 → 많**은**）。\n\n" +
        "**例外——있다 型形容词**：맛있다、재미있다 等由 있다/없다 构成的复合形容词与动词一样，使用 **-는** 而非 -(으)ㄴ：맛있다 → 맛있**는**，재미있다 → 재미있**는**。" +
        "DSL 中每个形容词的 `attr` 字段已编码了正确形式——始终通过 `AdjectivePart<A, \"Attributive\">` 使用，而非手动填入。\n\n" +
        "句子的主句谓语在 해요체 中保持常规形式不变；只有名词修饰从句内部使用 -(으)ㄴ 或 -는 形式。",
      examples: [
        {
          jp: "좋은 책을 읽어요",
          reading: "joeun chaegeul ilgeoyo",
          en: "I read a good book.",
          zh: "我读好书。",
          code: `import type { Verb, Adjective, VerbPart, AdjectivePart, NounPart, ParticlePart, Sentence } from "typed-korean";


type 좋다 = Adjective & { dict:"좋다"; stem:"좋"; inf:"좋아"; past:"좋았"; eu:"좋으"; prospective:"좋을"; formalStem:"좋습니"; attr:"좋은" };
type 읽다 = Verb & { dict:"읽다"; stem:"읽"; inf:"읽어"; past:"읽었"; eu:"읽으"; prospective:"읽을"; formalStem:"읽습니" };

// 좋다 attr = "좋은"  (consonant stem 좋 → 좋 + 으ㄴ = 좋은)
// 책 ends in ㄱ (consonant) → object particle 을
type 좋은책을읽어요 = Sentence<[
  AdjectivePart<좋다, "Attributive">,
  NounPart<"책">, ParticlePart<"을">,
  VerbPart<읽다, "Haeyo">
]>;
type result = 좋은책을읽어요;`,
        },
        {
          jp: "맛있는 음식을 먹어요",
          reading: "massinneun eumsigel meogeoyo",
          en: "I eat delicious food.",
          zh: "我吃美食。",
          code: `import type { Verb, Adjective, VerbPart, AdjectivePart, NounPart, ParticlePart, Sentence } from "typed-korean";


// 맛있다 is an 있다-type adjective → attributive uses -는, NOT -(으)ㄴ
type 맛있다 = Adjective & { dict:"맛있다"; stem:"맛있"; inf:"맛있어"; past:"맛있었"; eu:"맛있으"; prospective:"맛있을"; formalStem:"맛있습니"; attr:"맛있는" };
type 먹다 = Verb & { dict:"먹다"; stem:"먹"; inf:"먹어"; past:"먹었"; eu:"먹으"; prospective:"먹을"; formalStem:"먹습니" };

// 맛있다 attr = "맛있는"  ← 있다-type: always -는
// 음식 ends in ㄱ (consonant) → object particle 을
type 맛있는음식을먹어요 = Sentence<[
  AdjectivePart<맛있다, "Attributive">,
  NounPart<"음식">, ParticlePart<"을">,
  VerbPart<먹다, "Haeyo">
]>;
type result = 맛있는음식을먹어요;`,
        },
        {
          jp: "재미있는 영화를 봐요",
          reading: "jaemiinneun yeonghwareul bwayo",
          en: "I watch a fun movie.",
          zh: "我看有意思的电影。",
          code: `import type { Verb, Adjective, VerbPart, AdjectivePart, NounPart, ParticlePart, Sentence } from "typed-korean";


// 재미있다 is also an 있다-type adjective → attributive uses -는
type 재미있다 = Adjective & { dict:"재미있다"; stem:"재미있"; inf:"재미있어"; past:"재미있었"; eu:"재미있으"; prospective:"재미있을"; formalStem:"재미있습니"; attr:"재미있는" };
type 보다 = Verb & { dict:"보다"; stem:"보"; inf:"봐"; past:"봤"; eu:"보"; prospective:"볼"; formalStem:"봅니" };

// 재미있다 attr = "재미있는"
// 영화 ends in vowel ㅏ → object particle 를
type 재미있는영화를봐요 = Sentence<[
  AdjectivePart<재미있다, "Attributive">,
  NounPart<"영화">, ParticlePart<"를">,
  VerbPart<보다, "Haeyo">
]>;
type result = 재미있는영화를봐요;`,
        },
      ],
    },
    {
      id: "a01-3",
      titleEn: "Irregular adjective attributives (으-irregular and ㅂ-irregular)",
      titleZh: "不规则形容词冠形词形（으 不规则、ㅂ 不规则）",
      bodyEn:
        "Many common adjectives are **irregular**. Two patterns matter most for the attributive form:\n\n" +
        "**으-irregular (크다-type)**: Adjectives whose final syllable is 으 lose the 으 when ㄴ attaches. " +
        "Rule: 크다 → 크 + ㄴ → **큰**; 예쁘다 → 예쁘 + ㄴ → **예쁜**; 바쁘다 → 바쁘 + ㄴ → **바쁜**. " +
        "(The 으 merges into the ㄴ coda on the previous syllable.)\n\n" +
        "**ㅂ-irregular**: Adjectives whose stem ends in ㅂ change ㅂ → 우 before vowel-initial endings. " +
        "For the attributive -(으)ㄴ: 어렵다 → 어려 + 운 → **어려운**; 쉽다 → **쉬운**; 춥다 → **추운**. " +
        "The DSL's `attr` field already stores the correct surface form — the key is knowing *why* these differ from the plain -(으)ㄴ rule.",
      bodyZh:
        "许多常用形容词是**不规则**的。冠形词形最重要的两类不规则变化如下：\n\n" +
        "**으 不规则（크다 型）**：词干末尾音节为 으 的形容词，在 ㄴ 附加时省略 으。" +
        "规则为：크다 → 크 + ㄴ → **큰**；예쁘다 → 예쁘 + ㄴ → **예쁜**；바쁘다 → 바쁘 + ㄴ → **바쁜**。" +
        "（으 融入前一音节，ㄴ 成为该音节的收音。）\n\n" +
        "**ㅂ 不规则**：词干末辅音为 ㅂ 的形容词，在元音开头的词尾前将 ㅂ 变为 우。" +
        "冠形词形为：어렵다 → 어려 + 운 → **어려운**；쉽다 → **쉬운**；춥다 → **추운**。" +
        "DSL 的 `attr` 字段已存储正确的表层形式，但理解底层交替规律有助于在实际语言中识别这些词。",
      examples: [
        {
          jp: "큰 집에 있어요",
          reading: "keun jibe isseoyo",
          en: "I am in a big house.",
          zh: "我在大房子里。",
          code: `import type { Verb, Adjective, VerbPart, AdjectivePart, NounPart, ParticlePart, Sentence } from "typed-korean";


// 크다 — 으-irregular: stem 크 loses 으 before ㄴ → 큰
type 크다 = Adjective & { dict:"크다"; stem:"크"; inf:"커"; past:"컸"; eu:"크"; prospective:"클"; formalStem:"큽니"; attr:"큰" };
type 있다 = Verb & { dict:"있다"; stem:"있"; inf:"있어"; past:"있었"; eu:"있으"; prospective:"있을"; formalStem:"있습니" };

// 크다 attr = "큰"  (으-irregular: 크 + ㄴ → 큰)
// 집 ends in ㅂ (consonant) → location particle 에
type 큰집에있어요 = Sentence<[
  AdjectivePart<크다, "Attributive">,
  NounPart<"집">, ParticlePart<"에">,
  VerbPart<있다, "Haeyo">
]>;
type result = 큰집에있어요;`,
        },
        {
          jp: "예쁜 꽃을 샀어요",
          reading: "yeppeun kkoceul sasseoyo",
          en: "I bought a pretty flower.",
          zh: "我买了漂亮的花。",
          code: `import type { Verb, Adjective, VerbPart, AdjectivePart, NounPart, ParticlePart, Sentence } from "typed-korean";


// 예쁘다 — 으-irregular: 예쁘 + ㄴ → 예쁜
type 예쁘다 = Adjective & { dict:"예쁘다"; stem:"예쁘"; inf:"예뻐"; past:"예뻤"; eu:"예쁘"; prospective:"예쁠"; formalStem:"예쁩니"; attr:"예쁜" };
type 사다 = Verb & { dict:"사다"; stem:"사"; inf:"사"; past:"샀"; eu:"사"; prospective:"살"; formalStem:"삽니" };

// 예쁘다 attr = "예쁜"  |  꽃 ends in ㄱ consonant → object particle 을
// 사다 PastHaeyo: past stem "샀" → 샀어요
type 예쁜꽃을샀어요 = Sentence<[
  AdjectivePart<예쁘다, "Attributive">,
  NounPart<"꽃">, ParticlePart<"을">,
  VerbPart<사다, "PastHaeyo">
]>;
type result = 예쁜꽃을샀어요;`,
        },
        {
          jp: "어려운 책이 많아요",
          reading: "eoryeoun chaegi manayo",
          en: "There are many difficult books.",
          zh: "很多书都很难。",
          code: `import type { Adjective, AdjectivePart, NounPart, ParticlePart, Sentence } from "typed-korean";


// 어렵다 — ㅂ-irregular: ㅂ → 우 before vowel-initial endings; attr = 어려운
type 어렵다 = Adjective & { dict:"어렵다"; stem:"어렵"; inf:"어려워"; past:"어려웠"; eu:"어려우"; prospective:"어려울"; formalStem:"어렵습니"; attr:"어려운" };
type 많다 = Adjective & { dict:"많다"; stem:"많"; inf:"많아"; past:"많았"; eu:"많으"; prospective:"많을"; formalStem:"많습니"; attr:"많은" };

// 어렵다 attr = "어려운"  (ㅂ-irregular: 어렵 → 어려 + 운)
// 책 ends in ㄱ (consonant) → subject particle 이
type 어려운책이많아요 = Sentence<[
  AdjectivePart<어렵다, "Attributive">,
  NounPart<"책">, ParticlePart<"이">,
  AdjectivePart<많다, "Haeyo">
]>;
type result = 어려운책이많아요;`,
        },
      ],
    },
    {
      id: "a01-4",
      titleEn: "Noun-modifying clauses in full sentences",
      titleZh: "在完整句子中使用定语从句",
      bodyEn:
        "Now we combine both modifier types — verb **-는** and adjective **-(으)ㄴ** — inside complete sentences. " +
        "The modified-noun phrase (modifier + noun + particle) fits naturally into any syntactic slot: subject, object, or topic.\n\n" +
        "Register note: in 해요체 the main-clause predicate ends in -아요/어요; " +
        "in 합니다체 it ends in -습니다/-ㅂ니다. The attributive form itself does **not** change between registers.\n\n" +
        "A useful extension: verbs also have **-(으)ㄴ for past** (먹은 음식 — food (someone) ate) " +
        "and **-(으)ㄹ for future/prospective** (먹을 음식 — food (someone) will eat). " +
        "This chapter focuses on present -는 and adjective -(으)ㄴ, which are the most frequently used patterns.",
      bodyZh:
        "现在将动词 **-는** 和形容词 **-(으)ㄴ** 两种修饰形式结合到完整句子中。" +
        "被修饰的名词短语（修饰语 + 名词 + 助词）可以自然地占据句子中的任何位置：主语、宾语或话题。\n\n" +
        "语体说明：해요체 中主句谓语以 -아요/어요 结尾；합니다체 中以 -습니다/-ㅂ니다 结尾。冠形词形本身**不随语体变化**。\n\n" +
        "延伸知识：动词冠形词形还有**过去时 -(으)ㄴ**（먹은 음식——吃过的食物）" +
        "和**将来/预定时 -(으)ㄹ**（먹을 음식——将要吃的食物）。" +
        "本章重点是现在时 -는 与形容词 -(으)ㄴ，这是使用最频繁的两种形式。",
      examples: [
        {
          jp: "책을 읽는 사람은 많아요",
          reading: "chaegeul ingneun sarameun manayo",
          en: "There are many people who read books.",
          zh: "读书的人很多。",
          code: `import type { Verb, Adjective, VerbPart, AdjectivePart, NounPart, ParticlePart, Sentence } from "typed-korean";


type 읽다 = Verb & { dict:"읽다"; stem:"읽"; inf:"읽어"; past:"읽었"; eu:"읽으"; prospective:"읽을"; formalStem:"읽습니" };
type 많다 = Adjective & { dict:"많다"; stem:"많"; inf:"많아"; past:"많았"; eu:"많으"; prospective:"많을"; formalStem:"많습니"; attr:"많은" };

// 책을 읽는: object phrase + verb modifier → modifies 사람
// 사람 ends in ㅁ (consonant) → topic particle 은
type 책을읽는사람은많아요 = Sentence<[
  NounPart<"책">, ParticlePart<"을">,
  VerbPart<읽다, "Attributive">,
  NounPart<"사람">, ParticlePart<"은">,
  AdjectivePart<많다, "Haeyo">
]>;
type result = 책을읽는사람은많아요;`,
        },
        {
          jp: "좋아하는 음악을 들어요",
          reading: "joahaneun eumageul deureoyo",
          en: "I listen to music I like.",
          zh: "我听喜欢的音乐。",
          code: `import type { IrregularVerb, HadaVerb, VerbPart, NounPart, ParticlePart, Sentence } from "typed-korean";


type 좋아하다 = HadaVerb & { dict:"좋아하다"; stem:"좋아하"; inf:"좋아해"; past:"좋아했"; eu:"좋아하"; prospective:"좋아할"; formalStem:"좋아합니" };
// 듣다 — ㄷ-irregular: Haeyo stem = 들어 → 들어요
type 듣다 = IrregularVerb & { dict:"듣다"; stem:"듣"; inf:"들어"; past:"들었"; eu:"들으"; prospective:"들을"; formalStem:"듣습니" };

// 좋아하다 Attributive: 좋아하 + 는 = 좋아하는
// 음악 ends in ㄱ (consonant) → object particle 을
type 좋아하는음악을들어요 = Sentence<[
  VerbPart<좋아하다, "Attributive">,
  NounPart<"음악">, ParticlePart<"을">,
  VerbPart<듣다, "Haeyo">
]>;
type result = 좋아하는음악을들어요;`,
        },
        {
          jp: "바쁜 친구를 만나요",
          reading: "bappeun chingureul mannayo",
          en: "I meet a busy friend.",
          zh: "我去见忙碌的朋友。",
          code: `import type { Verb, Adjective, VerbPart, AdjectivePart, NounPart, ParticlePart, Sentence } from "typed-korean";


// 바쁘다 — 으-irregular: 바쁘 + ㄴ → 바쁜
type 바쁘다 = Adjective & { dict:"바쁘다"; stem:"바쁘"; inf:"바빠"; past:"바빴"; eu:"바쁘"; prospective:"바쁠"; formalStem:"바쁩니"; attr:"바쁜" };
type 만나다 = Verb & { dict:"만나다"; stem:"만나"; inf:"만나"; past:"만났"; eu:"만나"; prospective:"만날"; formalStem:"만납니" };

// 바쁘다 attr = "바쁜"  (으-irregular)
// 친구 ends in vowel ㅜ → object particle 를
type 바쁜친구를만나요 = Sentence<[
  AdjectivePart<바쁘다, "Attributive">,
  NounPart<"친구">, ParticlePart<"를">,
  VerbPart<만나다, "Haeyo">
]>;
type result = 바쁜친구를만나요;`,
        },
      ],
    },
  ],
};

export default chapter;
