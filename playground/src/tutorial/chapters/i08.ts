import type { Chapter } from "../types";

// ---------------------------------------------------------------------------
// Chapter definition
// ---------------------------------------------------------------------------
const chapter: Chapter = {
  id: "i08",
  level: "intermediate",
  order: 8,
  titleEn: "Comparison: 보다, 처럼, 제일",
  titleZh: "比较：보다、처럼、제일",
  summaryEn:
    `Korean expresses comparison with two key particles: **보다** (than) for inequality comparisons, ` +
    `and **처럼** (like / as) for resemblance. Superlatives use the adverbs **제일** or **가장** (both mean "most / number one") ` +
    `placed directly before the adjective or adverb they modify.\n\n` +
    `Unlike English, Korean does not inflect the adjective itself for comparison — there are no "-er" or "-est" suffixes. ` +
    `Instead, particles and adverbs do all the comparative work, making the system very regular. ` +
    `The optional intensifier **더** (more) can be added before the adjective to make the comparison more explicit.`,
  summaryZh:
    `韩语用两个关键助词表达比较：**보다**（比……）用于不等比较，**처럼**（像……一样）用于类比。` +
    `最高级则借助副词 **제일** 或 **가장**（两者均表示"最"），直接放在所修饰的形容词或副词前。\n\n` +
    `与英语不同，韩语的形容词本身不随比较级/最高级变形，没有类似 "-er"、"-est" 的后缀。` +
    `所有比较功能都由助词和副词承担，规律性极强。` +
    `还可在形容词前加副词 **더**（更），让比较关系更加明确。`,
  points: [
    {
      id: "i08-1",
      titleEn: "보다 — 'than' (comparative particle)",
      titleZh: "보다 — 比较助词（比……）",
      bodyEn:
        `Attach **보다** directly to the noun you are comparing against (the standard of comparison). ` +
        `The basic pattern is **A가/이 B보다 (더) 형용사**: "A is (more) [adjective] than B".\n\n` +
        `**보다** is a postpositional particle, so it follows the noun with no space. ` +
        `The adverb **더** (more) is optional — native speakers often include it for emphasis, but it is grammatically fine to omit it. ` +
        `Both 해요체 and 합니다체 endings attach normally to the final adjective: ` +
        `e.g. 비싸요 (해요체) vs 비쌉니다 (합니다체).`,
      bodyZh:
        `将 **보다** 直接接在被比较的名词（比较基准）后面，中间没有空格。` +
        `基本句型为 **A가/이 B보다 (더) 형용사**，意为"A 比 B（更）……"。\n\n` +
        `**보다** 是后置助词，紧跟名词书写。副词 **더**（更加）可以省略——加上更有强调效果，但省略也完全符合语法。` +
        `句末形容词按正常方式接해요체或합니다체词尾：` +
        `如 비싸요（해요체）vs 비쌉니다（합니다체）。`,
      examples: [
        {
          jp: "커피가 차보다 비싸요",
          reading: "keopi ga chaboda bissayo",
          en: "Coffee is more expensive than tea.",
          zh: "咖啡比茶贵。",
          code: `import type { Adjective, AdjectivePart, NounPart, ParticlePart, Sentence } from "typed-korean";


// 비싸다 — regular adjective; Haeyo: stem 비싸 + 아요 = 비싸요 (아-harmony, no 으 needed)
type 비싸다 = Adjective & { dict:"비싸다"; stem:"비싸"; inf:"비싸"; past:"비쌌"; eu:"비싸"; prospective:"비쌀"; formalStem:"비쌉니"; attr:"비싼" };

// 커피 (vowel-final) → subject particle 가
// 차 (vowel-final) + 보다 → 차보다 (no space between noun and particle)
type 커피가차보다비싸요 = Sentence<[
  NounPart<"커피">, ParticlePart<"가">,
  NounPart<"차">, ParticlePart<"보다">,
  AdjectivePart<비싸다, "Haeyo">
]>;
type result = 커피가차보다비싸요;`,
        },
        {
          jp: "저는 언니보다 키가 커요",
          reading: "jeoneun eonni boda kiga keoyo",
          en: "I am taller than my older sister.",
          zh: "我比姐姐高。",
          code: `import type { Adjective, AdjectivePart, NounPart, PronounPart, ParticlePart, Sentence } from "typed-korean";


// 크다 — 으-irregular adjective: inf "커", Haeyo "커요" (으 drops before 아/어)
type 크다 = Adjective & { dict:"크다"; stem:"크"; inf:"커"; past:"컸"; eu:"크"; prospective:"클"; formalStem:"큽니"; attr:"큰" };

// 저 (pronoun, vowel-final) → topic particle 는
// 언니 (vowel-final) + 보다 → 언니보다
// 키 (height, vowel-final) → subject particle 가
type 저는언니보다키가커요 = Sentence<[
  PronounPart<"저">, ParticlePart<"는">,
  NounPart<"언니">, ParticlePart<"보다">,
  NounPart<"키">, ParticlePart<"가">,
  AdjectivePart<크다, "Haeyo">
]>;
type result = 저는언니보다키가커요;`,
        },
        {
          jp: "오늘이 어제보다 더 추워요",
          reading: "oneuri eoje boda deo chuwoyo",
          en: "Today is colder than yesterday.",
          zh: "今天比昨天更冷。",
          code: `import type { Adjective, AdjectivePart, NounPart, AdverbPart, ParticlePart, Sentence } from "typed-korean";


// 춥다 — ㅂ-irregular adjective: ㅂ → 우 before vowel-initial endings
// Haeyo: stem 춥 → inf 추워 + 요 = 추워요
type 춥다 = Adjective & { dict:"춥다"; stem:"춥"; inf:"추워"; past:"추웠"; eu:"추우"; prospective:"추울"; formalStem:"춥습니"; attr:"추운" };

// 오늘 (consonant-final ㄹ) → subject particle 이
// 어제 (vowel-final) + 보다 → 어제보다
// 더 (more) — optional adverb that makes the comparison more explicit
type 오늘이어제보다더추워요 = Sentence<[
  NounPart<"오늘">, ParticlePart<"이">,
  NounPart<"어제">, ParticlePart<"보다">,
  AdverbPart<"더">,
  AdjectivePart<춥다, "Haeyo">
]>;
type result = 오늘이어제보다더추워요;`,
        },
      ],
    },
    {
      id: "i08-2",
      titleEn: "처럼 — 'like / as' (resemblance particle)",
      titleZh: "처럼 — 类比助词（像……一样）",
      bodyEn:
        `**처럼** attaches to a noun to mean "like [noun]" or "as [noun] does". ` +
        `The pattern is **N처럼 Verb/Adjective**, placing the standard of resemblance before the predicate.\n\n` +
        `**처럼** is invariant — there are no 받침-driven allomorphs (unlike topic/subject/object particles). ` +
        `It works after both consonant-final nouns (선생님처럼) and vowel-final nouns (가수처럼) without any change. ` +
        `A near-synonym is **같이** (together / like), which is more adverbial in feel, ` +
        `while **처럼** more directly marks the noun as the model of comparison.`,
      bodyZh:
        `**처럼** 接在名词后，表示"像……一样"。基本句型为 **N처럼 动词/形容词**，将比照对象置于谓语之前。\n\n` +
        `**처럼** 形态固定，没有受 받침 影响的异形体（这与主题、主格、宾格助词不同）。` +
        `无论接在辅音结尾的名词（선생님처럼）还是元音结尾的名词（가수처럼）后，形式不变。` +
        `近义词 **같이** 更偏副词性（"一起/像……"），而 **처럼** 则更直接地将名词标记为比照模型。`,
      examples: [
        {
          jp: "가수처럼 노래해요",
          reading: "gasu cheoreom noraehaeyo",
          en: "I sing like a singer.",
          zh: "我像歌手一样唱歌。",
          code: `import type { HadaVerb, VerbPart, NounPart, ParticlePart, Sentence } from "typed-korean";


// 노래하다 — HadaVerb: 노래(song) + 하다 → Haeyo: 노래해 + 요 = 노래해요
type 노래하다 = HadaVerb & { dict:"노래하다"; stem:"노래하"; inf:"노래해"; past:"노래했"; eu:"노래하"; prospective:"노래할"; formalStem:"노래합니" };

// 가수 (singer, vowel-final) + 처럼 → 가수처럼 (처럼 is invariant — no allomorphs)
type 가수처럼노래해요 = Sentence<[
  NounPart<"가수">, ParticlePart<"처럼">,
  VerbPart<노래하다, "Haeyo">
]>;
type result = 가수처럼노래해요;`,
        },
        {
          jp: "선생님처럼 가르쳐요",
          reading: "seonsaengnim cheoreom gareuchyeoyo",
          en: "I teach like a teacher.",
          zh: "我像老师一样教学。",
          code: `import type { Verb, VerbPart, NounPart, ParticlePart, Sentence } from "typed-korean";


// 가르치다 — regular verb: inf 가르쳐 + 요 = 가르쳐요 (이-contraction)
type 가르치다 = Verb & { dict:"가르치다"; stem:"가르치"; inf:"가르쳐"; past:"가르쳤"; eu:"가르치"; prospective:"가르칠"; formalStem:"가르칩니" };

// 선생님 (teacher, consonant-final ㅁ) + 처럼 → 선생님처럼
// 처럼 is the same after both vowel- and consonant-final nouns
type 선생님처럼가르쳐요 = Sentence<[
  NounPart<"선생님">, ParticlePart<"처럼">,
  VerbPart<가르치다, "Haeyo">
]>;
type result = 선생님처럼가르쳐요;`,
        },
        {
          jp: "친구처럼 말해요",
          reading: "chingu cheoreom malhaeyo",
          en: "I speak like a friend.",
          zh: "我像朋友一样说话。",
          code: `import type { HadaVerb, VerbPart, NounPart, ParticlePart, Sentence } from "typed-korean";


// 말하다 — HadaVerb: Haeyo: 말해 + 요 = 말해요
type 말하다 = HadaVerb & { dict:"말하다"; stem:"말하"; inf:"말해"; past:"말했"; eu:"말하"; prospective:"말할"; formalStem:"말합니" };

// 친구 (friend, vowel-final) + 처럼 → 친구처럼
type 친구처럼말해요 = Sentence<[
  NounPart<"친구">, ParticlePart<"처럼">,
  VerbPart<말하다, "Haeyo">
]>;
type result = 친구처럼말해요;`,
        },
      ],
    },
    {
      id: "i08-3",
      titleEn: "제일 / 가장 — superlative adverbs ('the most')",
      titleZh: "제일 / 가장 — 最高级副词（最……）",
      bodyEn:
        `Korean has no inflected superlative form. Instead, the adverbs **제일** (第一, originally "number one") ` +
        `and **가장** (most) are placed immediately before the adjective. Both are interchangeable in everyday speech; ` +
        `**제일** is slightly more colloquial, **가장** slightly more formal.\n\n` +
        `When using a superlative attributively (before a noun), the adjective still takes its **Attributive** (관형형) form: ` +
        `e.g. 가장 비싼 것 (the most expensive thing). ` +
        `In 합니다체, only the final predicate ending changes — 제일/가장 themselves never change.`,
      bodyZh:
        `韩语没有形态变化的最高级形式。取而代之的是副词 **제일**（第一）和 **가장**（最），直接放在形容词前。` +
        `两者在日常口语中可以互换；**제일** 略口语化，**가장** 略正式。\n\n` +
        `若最高级修饰名词（定语位置），形容词仍须使用**관형형**（定语形/Attributive）：` +
        `如 가장 비싼 것（最贵的东西）。` +
        `在합니다체中，只有句末谓语词尾发生变化，제일/가장 本身永远不变。`,
      examples: [
        {
          jp: "이게 제일 좋아요",
          reading: "ige jeil joayo",
          en: "This is the best.",
          zh: "这个最好。",
          code: `import type { Adjective, AdjectivePart, AdverbPart, LiteralPart, Sentence } from "typed-korean";


// 좋다 — regular adjective: Haeyo 좋아요 (아-harmony)
type 좋다 = Adjective & { dict:"좋다"; stem:"좋"; inf:"좋아"; past:"좋았"; eu:"좋으"; prospective:"좋을"; formalStem:"좋습니"; attr:"좋은" };

// 이게 = 이것이 contracted (colloquial); treated as a single literal eojeol
// 제일 (adverb) precedes the adjective directly
type 이게제일좋아요 = Sentence<[
  LiteralPart<"이게">,
  AdverbPart<"제일">,
  AdjectivePart<좋다, "Haeyo">
]>;
type result = 이게제일좋아요;`,
        },
        {
          jp: "한국 음식이 제일 맛있어요",
          reading: "hanguk eumsigi jeil masisseoyo",
          en: "Korean food is the most delicious.",
          zh: "韩国食物最好吃。",
          code: `import type { ProperNoun, Adjective, AdjectivePart, NounPart, ProperNounPart, AdverbPart, ParticlePart, Sentence } from "typed-korean";


// 맛있다 — 있다-type adjective: Haeyo 맛있어 + 요 = 맛있어요
type 맛있다 = Adjective & { dict:"맛있다"; stem:"맛있"; inf:"맛있어"; past:"맛있었"; eu:"맛있으"; prospective:"맛있을"; formalStem:"맛있습니"; attr:"맛있는" };

// 한국 (ProperNoun) + 음식 (consonant-final ㄱ) → subject particle 이
// 제일 immediately precedes the adjective
type 한국음식이제일맛있어요 = Sentence<[
  ProperNounPart<"한국">,
  NounPart<"음식">, ParticlePart<"이">,
  AdverbPart<"제일">,
  AdjectivePart<맛있다, "Haeyo">
]>;
type result = 한국음식이제일맛있어요;`,
        },
        {
          jp: "가장 비싼 것을 주세요",
          reading: "gajang bissan geoseul juseyo",
          en: "Please give me the most expensive one.",
          zh: "请给我最贵的那个。",
          code: `import type { Verb, Adjective, VerbPart, AdjectivePart, NounPart, AdverbPart, ParticlePart, Sentence } from "typed-korean";


// 비싸다 — Attributive (관형형): 비싼 (attr field)
type 비싸다 = Adjective & { dict:"비싸다"; stem:"비싸"; inf:"비싸"; past:"비쌌"; eu:"비싸"; prospective:"비쌀"; formalStem:"비쌉니"; attr:"비싼" };
// 주다 — Honorific (으세요 pattern): eu "주" → 주 + 세요 = 주세요
type 주다 = Verb & { dict:"주다"; stem:"주"; inf:"줘"; past:"줬"; eu:"주"; prospective:"줄"; formalStem:"줍니" };

// 가장 비싼 것을: superlative adverb + Attributive adjective + noun + object particle
// 것 (consonant-final ㅅ) → object particle 을
type 가장비싼것을주세요 = Sentence<[
  AdverbPart<"가장">,
  AdjectivePart<비싸다, "Attributive">,
  NounPart<"것">, ParticlePart<"을">,
  VerbPart<주다, "Honorific">
]>;
type result = 가장비싼것을주세요;`,
        },
      ],
    },
    {
      id: "i08-4",
      titleEn: "Combining comparison constructs",
      titleZh: "综合运用比较句型",
      bodyEn:
        `Real sentences often combine **보다**, **더**, **제일/가장**, and demonstrative adnominals like **이** (this) and **저** (that). ` +
        `Demonstrative adnominals in Korean (**이**, **그**, **저**) precede the noun they modify with a space, ` +
        `just like adjectives in English: 이 가방 (this bag), 저 가방 (that bag).\n\n` +
        `You can also stack superlatives with conjunctive adjective forms (**-고**) to say "the most X and also the most Y". ` +
        `The conjunctive form for adjectives is **-고** (the \`And\` form), exactly parallel to verbs.`,
      bodyZh:
        `实际句子中常常将 **보다**、**더**、**제일/가장** 以及指示冠形词 **이**（这）、**저**（那）组合使用。` +
        `韩语的指示冠形词（**이**、**그**、**저**）放在所修饰名词前，两者之间有空格，` +
        `与英语形容词的位置类似：이 가방（这个包）、저 가방（那个包）。\n\n` +
        `还可以将最高级与形容词连接形（**-고**，即 \`And\` 形）叠加，表达"最 X 而且最 Y"。` +
        `形容词的 -고 形与动词完全平行，使用 DSL 中的 \`And\` 形式即可。`,
      examples: [
        {
          jp: "이 가방이 저 가방보다 더 비싸요",
          reading: "i gagi jeo gabang boda deo bissayo",
          en: "This bag is more expensive than that bag.",
          zh: "这个包比那个包更贵。",
          code: `import type { Adjective, AdjectivePart, NounPart, AdverbPart, AdnominalPart, ParticlePart, Sentence } from "typed-korean";


type 비싸다 = Adjective & { dict:"비싸다"; stem:"비싸"; inf:"비싸"; past:"비쌌"; eu:"비싸"; prospective:"비쌀"; formalStem:"비쌉니"; attr:"비싼" };

// 이 / 저 — demonstrative adnominals; space before the noun they modify
// 가방 (bag, consonant-final ㅇ) → subject particle 이  |  comparative particle 보다
// 더 (more) placed before the adjective for explicit comparison
type 이가방이저가방보다더비싸요 = Sentence<[
  AdnominalPart<"이">,
  NounPart<"가방">, ParticlePart<"이">,
  AdnominalPart<"저">,
  NounPart<"가방">, ParticlePart<"보다">,
  AdverbPart<"더">,
  AdjectivePart<비싸다, "Haeyo">
]>;
type result = 이가방이저가방보다더비싸요;`,
        },
        {
          jp: "여기가 제일 좋고 가장 싸요",
          reading: "yeogiga jeil johgo gajang ssayo",
          en: "This place is the best and also the cheapest.",
          zh: "这里最好，而且最便宜。",
          code: `import type { Adjective, AdjectivePart, AdverbPart, LiteralPart, Sentence } from "typed-korean";


type 좋다 = Adjective & { dict:"좋다"; stem:"좋"; inf:"좋아"; past:"좋았"; eu:"좋으"; prospective:"좋을"; formalStem:"좋습니"; attr:"좋은" };
// 싸다 — regular adjective: Haeyo 싸 + 아요 = 싸요 (아-harmony)
type 싸다 = Adjective & { dict:"싸다"; stem:"싸"; inf:"싸"; past:"쌌"; eu:"싸"; prospective:"쌀"; formalStem:"쌉니"; attr:"싼" };

// 여기가 = 여기(here) + 가(subject particle) — written as one literal eojeol
// 좋다 And form: 좋고 — connects to the next clause
// 가장 + 싸요 — second superlative clause
type 여기가제일좋고가장싸요 = Sentence<[
  LiteralPart<"여기가">,
  AdverbPart<"제일">,
  AdjectivePart<좋다, "And">,
  AdverbPart<"가장">,
  AdjectivePart<싸다, "Haeyo">
]>;
type result = 여기가제일좋고가장싸요;`,
        },
      ],
    },
  ],
};

export default chapter;
