import type { ConceptArticle } from "../types";

/**
 * The flagship Foundations article for Typed Korean. Method: teach each
 * structural idea by showing one thought three ways — Korean, English, and a
 * small piece of lightweight TypeScript (comments in the reader's language,
 * syntax-highlighted) — and define every jargon term inline. The spine is the
 * function idea: a clause is a verb (function) applied to tagged arguments,
 * with the verb last, and sentences compose typed parts with 띄어쓰기 spacing.
 */
const article: ConceptArticle = {
  id: "architecture",
  order: 1,
  titleEn: "How a Korean Sentence Is Built",
  titleZh: "韩语句子是怎么搭起来的",
  taglineEn: "Read Korean grammar like a programming language.",
  taglineZh: "把韩语语法当成一门编程语言来读。",
  introEn:
    "A Korean sentence is put together by rules that are unusually regular — regular enough that this whole site models them as TypeScript types. We'll lean on that. For each idea below you'll see one thought written three ways: the **Korean**, its closest **English**, and a small piece of **TypeScript** that makes the structural difference impossible to miss. You don't have to write TypeScript — reading it is enough, and it keeps the grammar terms (particle, topic, predicate) concrete instead of abstract. Read top to bottom; each idea rests on the one before it.",
  introZh:
    "韩语句子是按一套异常规则的方式搭起来的 —— 规则到整个网站都把它们建模成了 TypeScript 类型。我们正好借这一点。下面每个概念，你都会看到同一个想法的三种写法：**韩语**、最接近的**英语**，以及一小段让结构差异无所遁形的 **TypeScript**。你不必会写 TypeScript —— 能读就够了，它会把那些语法术语（助词、主题、谓语）从抽象变得具体。请从上往下读，每个概念都搭在前一个之上。",
  sections: [
    {
      id: "particles",
      headingEn: "Roles come from tags, not from position",
      headingZh: "角色靠标签，不靠位置",
      blocks: [
        {
          kind: "prose",
          en: "Take the most basic English sentence and ask a strange question: how do you know **who** is doing the action? In 'the dog bit the man', the only thing telling you the dog did the biting is **word order** — 'dog' sits before the verb, 'man' after it. Swap them and the meaning reverses. English grammar is, at its core, positional.\n\nKorean works the other way. Each noun is followed by a tiny word — a **particle (조사)** — that names its job in the sentence. Once a noun is tagged 'this is the topic' or 'this is the object', its position no longer carries that information, so the order becomes flexible. The tag does the work that English makes position do.",
          zh: "拿最基础的英语句子，问一个奇怪的问题：你怎么知道是**谁**在做这个动作？在 'the dog bit the man'（狗咬了人）里，唯一告诉你是狗在咬的，是**语序** —— 'dog' 在动词前，'man' 在动词后。把两者调换，意思就反了。英语语法的内核是「靠位置」。\n\n韩语反其道而行。每个名词后面都跟一个小词 —— **助词（조사）** —— 来点明它在句中的职责。名词一旦被贴上「这是主题」或「这是宾语」的标签，它的位置就不再承载这份信息，于是顺序变得灵活。标签干的，正是英语让位置去干的活。",
        },
        {
          kind: "compare",
          jp: "저는 커피를 마셔요",
          reading: "jeoneun keopireul masyeoyo",
          en: "I drink coffee.",
          zh: "我喝咖啡。",
          tsEn: `// English marks roles by POSITION — the slots are fixed:
drink("I", "coffee")          // I drink coffee
drink("coffee", "I")          // coffee drinks me — order flipped the meaning

// Korean marks roles by TAG — 는 = topic, 를 = object:
const topic  = "저" + "는"          // tagged 'topic'
const object = "커피" + "를"        // tagged 'object'

// because the tags carry the roles, the order is (somewhat) free:
"저는 커피를 마셔요"    // natural — SOV order
"커피를 저는 마셔요"    // object first — same meaning, emphatic`,
          tsZh: `// 英语靠位置标记角色 —— 槽位是固定的：
drink("I", "coffee")          // 我喝咖啡
drink("coffee", "I")          // 咖啡喝我 —— 顺序一换，意思就反了

// 韩语靠标签标记角色 —— 는 = 主题，를 = 宾语：
const topic  = "저" + "는"          // 贴上「主题」标签
const object = "커피" + "를"        // 贴上「宾语」标签

// 因为标签扛着角色，顺序是（相对）自由的：
"저는 커피를 마셔요"    // 自然 —— SOV 语序
"커피를 저는 마셔요"    // 宾语在前 —— 意思相同，带强调色彩`,
          noteEn:
            "`는` and `를` are glued onto the nouns like little labels. Notice: `저` ends in a vowel (ㅓ), so the topic particle is `는` (not `은`). `커피` also ends in a vowel, so the object particle is `를` (not `을`). This 받침-driven alternation is one of Korean's most systematic rules.",
          noteZh:
            "`는` 和 `를` 像小标签一样粘在名词上。注意：`저` 以元音（ㅓ）结尾，所以主题助词用 `는`（而非 `은`）；`커피` 也以元音结尾，宾语助词用 `를`（而非 `을`）。这种由 받침（收音）驱动的变体，是韩语最系统性的规则之一。",
        },
        {
          kind: "define",
          term: "조사",
          romaji: "josa",
          en: "Particle — a short word placed **after** a noun that labels its grammatical job. `은`/`는` mark the topic, `이`/`가` the subject, `을`/`를` the object, `에` a destination or time, `에서` a location or source, `의` possession ('of'). Which allomorph you use depends on whether the preceding noun ends in a consonant (받침) or a vowel — a rule wired into every Korean particle.",
          zh: "助词（조사）—— 放在名词**之后**、给它的语法角色贴标签的短词。`은`/`는` 标记主题，`이`/`가` 标记主语，`을`/`를` 标记宾语，`에` 标记目的地或时间，`에서` 标记地点或来源，`의` 标记所属（「的」）。用哪个变体取决于前面名词是以辅音（받침）还是元音结尾 —— 这条规则贯穿每一个韩语助词。",
        },
        {
          kind: "prose",
          en: "The 받침 rule is unavoidable. **받침** (batchim) means the final consonant of a Korean syllable. If a noun ends in a consonant, Korean adds the consonant-friendly allomorph; if it ends in a vowel, the vowel-friendly one:\n\n- Topic: `은` after consonant (학생**은**), `는` after vowel (의자**는**)\n- Subject: `이` after consonant (학생**이**), `가` after vowel (의자**가**)\n- Object: `을` after consonant (밥**을**), `를` after vowel (커피**를**)\n\nThink of it as a phonological compatibility check — the same information ('this is the topic'), just wearing the right sound-shape for smooth speech.",
          zh: "받침 规则无处不在。**받침**（batchim，收音）指韩语音节的末尾辅音。名词以辅音结尾，就接辅音友好的变体；以元音结尾，就接元音友好的变体：\n\n- 主题：辅音后用 `은`（학생**은**），元音后用 `는`（의자**는**）\n- 主语：辅音后用 `이`（학생**이**），元音后用 `가`（의자**가**）\n- 宾语：辅音后用 `을`（밥**을**），元音后用 `를`（커피**를**）\n\n把它想成一个音韵兼容性检查 —— 承载的信息相同（「这是主题」），只是换上了发音顺滑的形态。",
        },
        {
          kind: "diagram",
          captionEn:
            "Each noun wears its role as a label (는, 를). The allomorph (은/는, 이/가, 을/를) is decided by whether the noun ends in a consonant (받침) or vowel.",
          captionZh:
            "每个名词都把自己的角色当标签戴着（는、를）。选哪个变体（은/는、이/가、을/를），由名词末尾是辅音（받침）还是元音决定。",
          root: {
            label: "마셔요",
            args: [
              { label: "저", tag: "는", roleEn: "topic (vowel-final → 는)", roleZh: "主题（元音结尾 → 는）" },
              { label: "커피", tag: "를", roleEn: "object (vowel-final → 를)", roleZh: "宾语（元音结尾 → 를）" },
            ],
          },
        },
        { kind: "chapters", ids: ["e01", "e05", "e06"] },
      ],
    },
    {
      id: "sov",
      headingEn: "SOV word order — the verb always comes last",
      headingZh: "SOV 语序 —— 动词永远在最后",
      blocks: [
        {
          kind: "prose",
          en: "Now the one rule that, once you internalize it, makes every Korean sentence click into place: **the verb (or adjective, or copula) closes the clause**. Korean is an SOV language — Subject, Object, Verb — but that label is really about where the **predicate** lands. Everything describing or modifying what comes before piles up, in any order you like, and then the clause-closing word snaps onto the end.\n\nThis is not a stylistic choice. The shape of a Korean sentence is always: tagged arguments in some order, then the predicate. Read to the last word before you decide what a sentence means — whether it's negative, past, or a question is all settled by that final word.",
          zh: "现在是那条一旦内化就让每句韩语豁然开朗的规则：**动词（或形容词、系动词）为小句收尾**。韩语是 SOV 语言 —— 主语、宾语、动词 —— 但这个标签真正说的是**谓语**落在哪里。所有描述或修饰前面内容的成分，以任意顺序堆积，然后小句结尾词卡在最末。\n\n这不是风格选择，而是结构规律。韩语句子的形状始终是：带标签的论元（任意顺序），然后是谓语。读到最后一个词，再判断这句话的意思 —— 否定、过去还是疑问，全由结尾那个词决定。",
        },
        {
          kind: "compare",
          jp: "저는 밥을 먹어요",
          reading: "jeoneun babeul meogeoyo",
          en: "I eat rice / I eat a meal.",
          zh: "我吃饭。",
          tsEn: `// Treat the verb as a function, the tagged nouns as its arguments.
eat(I, rice)          // English: verb FIRST — SVO
(I, rice, eat)        // Korean: verb LAST  — SOV — 저는 밥을 먹어요

// Every piece is typed:
type Subject = PhraseWithParticle<Pronoun<"저">, "는">   // 저는
type Object  = PhraseWithParticle<CommonNoun<"밥">, "을"> // 밥을
type Verb    = ConjugateVerb<먹다, "Haeyo">               // 먹어요`,
          tsZh: `// 把动词看作函数，带标签的名词看作它的参数。
eat(I, rice)          // 英语：动词在最前 —— SVO
(I, rice, eat)        // 韩语：动词在最后 —— SOV —— 저는 밥을 먹어요

// 每个部分都是有类型的：
type Subject = PhraseWithParticle<Pronoun<"저">, "는">   // 저는
type Object  = PhraseWithParticle<CommonNoun<"밥">, "을"> // 밥을
type Verb    = ConjugateVerb<먹다, "Haeyo">               // 먹어요`,
          noteEn:
            "Read the last word first when scanning Korean. `먹어요` tells you: eating, present, polite. The rest names who and what. That mental habit pays dividends on every sentence.",
          noteZh:
            "扫读韩语时先看最后一个词。`먹어요` 告诉你：吃，现在时，礼貌体。其余部分说明谁和什么。养成这个思维习惯，在每句话上都能受益。",
        },
        {
          kind: "diagram",
          captionEn:
            "The SOV clause as a picture: tagged arguments feed into the verb, which closes the box at the end. The verb is always last.",
          captionZh:
            "把 SOV 小句画出来：带标签的论元汇入动词，动词在末尾为盒子收尾。动词始终在最后。",
          root: {
            label: "먹어요",
            args: [
              { label: "저", tag: "는", roleEn: "topic", roleZh: "主题" },
              { label: "밥", tag: "을", roleEn: "object", roleZh: "宾语" },
            ],
          },
        },
        {
          kind: "prose",
          en: "The same SOV principle applies to **adjectives and copulas**. Korean adjectives are not separate from verbs — they conjugate the same way and close a clause on their own. And when you want to say 'X is Y' (a noun predicate), you need a **copula** (이에요/예요 or 입니다). Both adjectives and copulas land at the end, just like verbs.\n\nA clause always ends in exactly one of three types:\n- **Verb** — an action or state: 먹다 (eat), 가다 (go)\n- **Adjective** — a descriptive state: 재미있다 (be interesting), 좋다 (be good)\n- **Copula + noun** — an identity: 학생이에요 (is a student)",
          zh: "同样的 SOV 原则也适用于**形容词和系动词**。韩语形容词与动词并不分家 —— 它们以同样的方式活用，并能独立为小句收尾。而当你想说「X 是 Y」（名词谓语）时，就需要一个**系动词**（이에요/예요 或 입니다）。形容词和系动词都落在句末，和动词一样。\n\n一个小句末尾恰好只有三种类型之一：\n- **动词** —— 动作或状态：먹다（吃）、가다（去）\n- **形容词** —— 描述性状态：재미있다（有趣）、좋다（好）\n- **系动词 + 名词** —— 身份认定：학생이에요（是学生）",
        },
        { kind: "chapters", ids: ["e01", "e05", "e08"] },
      ],
    },
    {
      id: "batchim-allomorphs",
      headingEn: "받침-driven allomorphs — the copula and beyond",
      headingZh: "받침 驱动的变体 —— 系动词与其他",
      blocks: [
        {
          kind: "prose",
          en: "You saw 받침 at work in particles. The same principle reaches into the copula ('is') and into certain verb/adjective endings. Understanding it once explains dozens of Korean alternations automatically.\n\nThe copula 이에요/예요 (informal polite 'is') is the most-noticed case:\n- After a consonant-final noun: 학생**이에요** (학생 ends in ㅇ → consonant)\n- After a vowel-final noun: 의자**예요** (의자 ends in a vowel → drop 이)\n\nThe formal polite copula 입니다 doesn't alternate — it simply attaches to any noun. But the informal copula's 이/∅ switch is so prominent that it's the first rule every learner notices.",
          zh: "你已经在助词里见过받침的作用。同样的原则延伸到系动词（「是」）以及某些动词/形容词词尾。把这条规则理解一次，就能自动解释韩语中几十种交替现象。\n\n系动词 이에요/예요（非正式礼貌体「是」）是最常见的例子：\n- 辅音结尾的名词后：학생**이에요**（학생 以 ㅇ 结尾 → 辅音）\n- 元音结尾的名词后：의자**예요**（의자 以元音结尾 → 省略 이）\n\n正式礼貌体系动词 입니다 不发生交替 —— 直接接在任何名词后。但非正式系动词的 이/∅ 切换非常突出，是每位学习者最先注意到的规则。",
        },
        {
          kind: "compare",
          jp: "저는 학생이에요",
          reading: "jeoneun haksaengieyo",
          en: "I am a student.",
          zh: "我是学生。",
          tsEn: `import type { Chapter } from "typed-korean";
import { Sentence, PronounPart, ParticlePart, CopulaPart } from "typed-korean";

// 학생 ends in ㅇ (a consonant) → Batchim = true → 이에요
type S = Sentence<[
  PronounPart<"저">,
  ParticlePart<"는">,
  CopulaPart<"학생", "Haeyo", true>   // true = ends in consonant → 이에요
]>
// S = "저는 학생이에요" ✓`,
          tsZh: `import type { Chapter } from "typed-korean";
import { Sentence, PronounPart, ParticlePart, CopulaPart } from "typed-korean";

// 학생 以 ㅇ（辅音）结尾 → Batchim = true → 이에요
type S = Sentence<[
  PronounPart<"저">,
  ParticlePart<"는">,
  CopulaPart<"학생", "Haeyo", true>   // true = 辅音结尾 → 이에요
]>
// S = "저는 학생이에요" ✓`,
          noteEn:
            "The `Batchim` type parameter is your explicit declaration of the noun's final sound. Set it `true` for consonant-final nouns (학생, 밥, 책, 사람…) and `false` for vowel-final nouns (의자, 커피, 학교…). The DSL uses it to compute the correct copula form.",
          noteZh:
            "`Batchim` 类型参数是你对名词末音的显式声明。辅音结尾的名词（학생、밥、책、사람……）设为 `true`，元音结尾的名词（의자、커피、학교……）设为 `false`。DSL 用它来计算正确的系动词形式。",
        },
        {
          kind: "compare",
          jp: "이것은 의자예요",
          reading: "igeoseun uijayeyo",
          en: "This is a chair.",
          zh: "这是椅子。",
          tsEn: `import { Sentence, NounPart, ParticlePart, CopulaPart } from "typed-korean";

// 의자 ends in a vowel → Batchim = false → 예요 (이에요 → 예요)
type S = Sentence<[
  NounPart<"이것">,
  ParticlePart<"은">,                   // 이것 ends in ㅅ → 은
  CopulaPart<"의자", "Haeyo", false>    // false = vowel-final → 예요
]>
// S = "이것은 의자예요" ✓`,
          tsZh: `import { Sentence, NounPart, ParticlePart, CopulaPart } from "typed-korean";

// 의자 以元音结尾 → Batchim = false → 예요（이에요 → 예요）
type S = Sentence<[
  NounPart<"이것">,
  ParticlePart<"은">,                   // 이것 以 ㅅ 结尾 → 은
  CopulaPart<"의자", "Haeyo", false>    // false = 元音结尾 → 예요
]>
// S = "이것은 의자예요" ✓`,
          noteEn:
            "Notice `은` on `이것` (consonant-final) vs. the `는` you'd use after a vowel-final noun. Every particle alternates the same way: consonant → 은/이/을, vowel → 는/가/를. One rule, infinite application.",
          noteZh:
            "注意 `이것` 后用 `은`（辅音结尾），而元音结尾的名词后则用 `는`。每个助词都以相同方式交替：辅音 → 은/이/을，元音 → 는/가/를。一条规则，无限应用。",
        },
        {
          kind: "define",
          term: "받침",
          romaji: "batchim",
          en: "Batchim — the final consonant of a Korean syllable block. If a syllable ends in a consonant, it has batchim; if it ends in a vowel (the bottom slot is empty), it has no batchim. This single phonological fact drives allomorphs for particles, the copula, and many verb/adjective endings throughout Korean.",
          zh: "받침 —— 韩语音节方块末尾的辅音。音节以辅音结尾，就有받침；以元音结尾（底部槽位为空），就没有받침。这一个音韵事实，驱动着韩语中助词、系动词以及许多动词/形容词词尾的变体选择。",
        },
        { kind: "chapters", ids: ["e01", "e06"] },
      ],
    },
    {
      id: "conjugation",
      headingEn: "Conjugation as a type-level function over morphological bases",
      headingZh: "活用：作用于形态基底的类型级函数",
      blocks: [
        {
          kind: "prose",
          en: "Korean conjugation is rich and phonologically complex — stems can change shape based on irregular patterns (ㄷ-irregular, ㅂ-irregular, 으-irregular…), vowel harmony determines whether the informal ending is 아요 or 어요, and honorific endings layer on top. TypeScript's type system cannot compute over Korean syllable blocks natively.\n\nThis site's solution: each verb and adjective carries its **morphological bases** — pre-computed stem forms for each phonological context. A `ConjugateVerb<V, Form>` type then appends an **invariant** suffix to the right base. No phonology computation needed at the type level; the author supplies the bases, and the types do the assembly.",
          zh: "韩语活用丰富且音韵复杂 —— 词干可能根据不规则类型（ㄷ不规则、ㅂ不规则、으不规则……）改变形态，元音和谐决定非正式词尾是 아요 还是 어요，敬语词尾还会叠加其上。TypeScript 类型系统无法原生地计算韩语音节。\n\n本站的解决方案：每个动词和形容词携带其**形态基底** —— 针对各个音韵环境预先计算好的词干形式。`ConjugateVerb<V, Form>` 类型随后将一个**不变**的后缀拼接到正确的基底上。类型层面无需音韵计算；作者提供基底，类型完成组装。",
        },
        {
          kind: "compare",
          jp: "저는 밥을 먹어요",
          reading: "jeoneun babeul meogeoyo",
          en: "I eat rice.",
          zh: "我吃饭。",
          tsEn: `import { ConjugateVerb, Verb } from "typed-korean";

// The verb carries all its pre-computed bases:
type 먹다 = Verb & {
  dict: "먹다";
  stem: "먹";
  inf: "먹어";        // ← informal base (아/어 harmony resolved)
  past: "먹었";
  eu: "먹으";         // ← 으 base (for endings like -면, -세요)
  prospective: "먹을";
  formalStem: "먹습니";
};

// ConjugateVerb<먹다, "Haeyo"> picks inf + "요" = "먹어요"
type Result = ConjugateVerb<먹다, "Haeyo">
//   Result = "먹어요"`,
          tsZh: `import { ConjugateVerb, Verb } from "typed-korean";

// 动词携带所有预先计算好的基底：
type 먹다 = Verb & {
  dict: "먹다";
  stem: "먹";
  inf: "먹어";        // ← 非正式基底（元音和谐已解析）
  past: "먹었";
  eu: "먹으";         // ← 으基底（用于 -면、-세요 等词尾）
  prospective: "먹을";
  formalStem: "먹습니";
};

// ConjugateVerb<먹다, "Haeyo"> 取 inf + "요" = "먹어요"
type Result = ConjugateVerb<먹다, "Haeyo">
//   Result = "먹어요"`,
          noteEn:
            "The `inf` (informal) base already encodes vowel harmony — `먹어` uses 어 because the stem vowel is ㅓ (dark). A verb like `가다` uses 가 (bright → 아요). The DSL author resolves this once; consumers just call `ConjugateVerb<가다, \"Haeyo\">` = `\"가요\"`.",
          noteZh:
            "`inf`（非正式）基底已经编码了元音和谐 —— `먹어` 用 어，因为词干元音是 ㅓ（暗元音）。`가다` 这样的动词用 가（亮元音 → 아요）。DSL 作者解析一次；使用者只需调用 `ConjugateVerb<가다, \"Haeyo\">` = `\"가요\"`。",
        },
        {
          kind: "prose",
          en: "Adjectives work identically. `ConjugateAdjective<재미있다, \"Haeyo\">` picks the `inf` base (`재미있어`) and appends `요` → `재미있어요`. The 받침-sensitive endings (like `Attributive`) use the `attr` field instead, which is pre-computed: `재미있다` → attr `재미있는` (있-type adjectives use `-는`, not `-은`).\n\nThis is the key insight: **conjugation is a type-level function** `(predicate, form) → surface string`. Because the morphological bases are spelled out in the type, TypeScript can verify that the assembled sentence matches what you intended.",
          zh: "形容词的工作方式完全相同。`ConjugateAdjective<재미있다, \"Haeyo\">` 取 `inf` 基底（`재미있어`）并拼接 `요` → `재미있어요`。受 받침 影响的词尾（如 `Attributive`）则使用 `attr` 字段，该字段也是预先计算好的：`재미있다` → attr 为 `재미있는`（있-型形容词用 `-는`，而非 `-은`）。\n\n这就是核心洞见：**活用是一个类型级函数** `(谓语, 形式) → 表层字符串`。因为形态基底被明确写在类型中，TypeScript 能够验证组装出的句子是否与你的意图吻合。",
        },
        {
          kind: "compare",
          jp: "한국어는 재미있어요",
          reading: "hangugeoneun jaemiisseoyo",
          en: "Korean is interesting / Korean is fun.",
          zh: "韩语很有趣。",
          tsEn: `import { Sentence, NounPart, ParticlePart, AdjectivePart, Adjective } from "typed-korean";

type 재미있다 = Adjective & {
  dict: "재미있다"; stem: "재미있"; inf: "재미있어";
  past: "재미있었"; eu: "재미있으"; prospective: "재미있을";
  formalStem: "재미있습니"; attr: "재미있는";
};

type S = Sentence<[
  NounPart<"한국어">,
  ParticlePart<"는">,                    // 한국어 ends in vowel → 는
  AdjectivePart<재미있다, "Haeyo">       // inf "재미있어" + "요" → 재미있어요
]>
// S = "한국어는 재미있어요" ✓`,
          tsZh: `import { Sentence, NounPart, ParticlePart, AdjectivePart, Adjective } from "typed-korean";

type 재미있다 = Adjective & {
  dict: "재미있다"; stem: "재미있"; inf: "재미있어";
  past: "재미있었"; eu: "재미있으"; prospective: "재미있을";
  formalStem: "재미있습니"; attr: "재미있는";
};

type S = Sentence<[
  NounPart<"한국어">,
  ParticlePart<"는">,                    // 한국어 以元音结尾 → 는
  AdjectivePart<재미있다, "Haeyo">       // inf "재미있어" + "요" → 재미있어요
]>
// S = "한국어는 재미있어요" ✓`,
          noteEn:
            "The `Sentence<[...parts]>` type inserts spaces between word-level parts automatically, while particles and punctuation cling to the preceding part with no space. This is the DSL's solution to Korean 띄어쓰기 (spacing rules).",
          noteZh:
            "`Sentence<[...parts]>` 类型自动在词级部件之间插入空格，而助词和标点则无缝附着在前一个部件上。这是 DSL 对韩语띄어쓰기（间距规则）的解决方案。",
        },
        {
          kind: "diagram",
          captionEn:
            "Conjugation as a function: the predicate type carries its bases, and ConjugateVerb/ConjugateAdjective selects the right base and appends an invariant suffix to produce the surface form.",
          captionZh:
            "把活用看作一个函数：谓语类型携带其基底，ConjugateVerb/ConjugateAdjective 选择正确的基底并拼接不变后缀，从而产生表层形式。",
          row: [
            { label: "먹", tag: "어요", roleEn: "Haeyo (informal polite)", roleZh: "해요체（非正式礼貌）" },
            { label: "먹", tag: "습니다", roleEn: "Hamnida (formal polite)", roleZh: "합니다체（正式礼貌）" },
            { label: "먹", tag: "었어요", roleEn: "PastHaeyo", roleZh: "过去해요체" },
            { label: "먹", tag: "고", roleEn: "And (connective)", roleZh: "And（连接）" },
          ],
        },
        { kind: "chapters", ids: ["e05", "e08", "e13"] },
      ],
    },
    {
      id: "speech-levels",
      headingEn: "해요체 vs. 합니다체 — two politeness registers",
      headingZh: "해요체 vs. 합니다체 —— 两种礼貌语体",
      blocks: [
        {
          kind: "prose",
          en: "Korean has a grammaticalized **speech level** system — you choose a register for every sentence you speak, and your choice is encoded in the verb ending, not in separate words. The two levels you'll meet first are:\n\n- **해요체** (haeyo-che): informal polite. The default register for everyday conversation with strangers, customers, colleagues you're not close to. Endings: `-아요`/`-어요` for verbs, `-이에요`/`-예요` for the copula.\n- **합니다체** (hamnida-che): formal polite. Used in presentations, announcements, military, official contexts. Endings: `-습니다`/`-ㅂ니다` for verbs, `입니다` for the copula.\n\nBoth registers are polite. The difference is formality: 합니다체 is stiffer; 해요체 is warm but still respectful.",
          zh: "韩语有语法化的**语体**系统 —— 你说的每句话都要选择一个语体，选择编码在动词词尾里，而非单独的词汇中。你最先遇到的两个语体是：\n\n- **해요체**（haeyo-che）：非正式礼貌体。与陌生人、顾客、不太熟悉的同事日常对话的默认语体。词尾：动词用 `-아요`/`-어요`，系动词用 `-이에요`/`-예요`。\n- **합니다체**（hamnida-che）：正式礼貌体。用于演讲、公告、军队、官方场合。词尾：动词用 `-습니다`/`-ㅂ니다`，系动词用 `입니다`。\n\n两种语体都是礼貌的，区别在于正式程度：합니다체 更硬；해요체 更亲切，但同样表达尊重。",
        },
        {
          kind: "compare",
          jp: "저는 학생입니다",
          reading: "jeoneun haksaengimnida",
          en: "I am a student. (formal)",
          zh: "我是学生。（正式）",
          tsEn: `import { ConjugateCopula } from "typed-korean";

// 학생 — consonant-final (받침 true)
// Haeyo  → 학생이에요    (informal polite)
// Hamnida → 학생입니다   (formal polite)

type Informal = ConjugateCopula<"학생", "Haeyo", true>
//   Informal = "학생이에요"

type Formal   = ConjugateCopula<"학생", "Hamnida", true>
//   Formal   = "학생입니다"`,
          tsZh: `import { ConjugateCopula } from "typed-korean";

// 학생 —— 辅音结尾（받침 true）
// Haeyo   → 학생이에요    （非正式礼貌）
// Hamnida → 학생입니다    （正式礼貌）

type Informal = ConjugateCopula<"학생", "Haeyo", true>
//   Informal = "학생이에요"

type Formal   = ConjugateCopula<"학생", "Hamnida", true>
//   Formal   = "학생입니다"`,
          noteEn:
            "Notice that `입니다` doesn't alternate with 받침 — it attaches to any noun directly. Only the informal copula (이에요/예요) has the 받침-driven split. This is worth remembering: 합니다체 is simpler phonologically.",
          noteZh:
            "注意 `입니다` 不随받침交替 —— 它直接附着在任何名词上。只有非正式系动词（이에요/예요）有受받침驱动的分裂。这值得记住：합니다체 在音韵上更简单。",
        },
        {
          kind: "compare",
          jp: "저는 밥을 먹습니다",
          reading: "jeoneun babeul meokseumnida",
          en: "I eat rice. (formal)",
          zh: "我吃饭。（正式）",
          tsEn: `import { ConjugateVerb, Verb } from "typed-korean";

type 먹다 = Verb & {
  dict: "먹다"; stem: "먹"; inf: "먹어"; past: "먹었";
  eu: "먹으"; prospective: "먹을"; formalStem: "먹습니";
};

// Haeyo   → inf("먹어") + "요"       = "먹어요"
// Hamnida → formalStem("먹습니") + "다" = "먹습니다"

type Haeyo   = ConjugateVerb<먹다, "Haeyo">    // "먹어요"
type Hamnida = ConjugateVerb<먹다, "Hamnida">  // "먹습니다"`,
          tsZh: `import { ConjugateVerb, Verb } from "typed-korean";

type 먹다 = Verb & {
  dict: "먹다"; stem: "먹"; inf: "먹어"; past: "먹었";
  eu: "먹으"; prospective: "먹을"; formalStem: "먹습니";
};

// Haeyo   → inf("먹어") + "요"         = "먹어요"
// Hamnida → formalStem("먹습니") + "다" = "먹습니다"

type Haeyo   = ConjugateVerb<먹다, "Haeyo">    // "먹어요"
type Hamnida = ConjugateVerb<먹다, "Hamnida">  // "먹습니다"`,
          noteEn:
            "The `formalStem` field is the pre-computed formal base (e.g. `먹습니` for 먹다). This is why the DSL needs two distinct stem fields: `inf` for the 아/어-family endings, `formalStem` for the 습니다/ㅂ니다 family.",
          noteZh:
            "`formalStem` 字段是预先计算好的正式基底（例如 먹다 的 `먹습니`）。这就是为什么 DSL 需要两个不同的词干字段：`inf` 用于 아/어 系列词尾，`formalStem` 用于 습니다/ㅂ니다 系列。",
        },
        {
          kind: "diagram",
          captionEn:
            "The same meaning in two registers. The predicate changes its ending; everything else — topic particle, object particle, word order — stays the same.",
          captionZh:
            "同一个意思用两种语体表达。谓语改变词尾；其他所有部分 —— 主题助词、宾语助词、语序 —— 保持不变。",
          row: [
            { label: "먹어", tag: "요", roleEn: "해요체 (informal polite)", roleZh: "해요체（非正式礼貌）" },
            { label: "먹습니", tag: "다", roleEn: "합니다체 (formal polite)", roleZh: "합니다체（正式礼貌）" },
            { label: "먹었어", tag: "요", roleEn: "past + 해요체", roleZh: "过去 + 해요체" },
            { label: "먹었습니", tag: "다", roleEn: "past + 합니다체", roleZh: "过去 + 합니다체" },
          ],
        },
        { kind: "chapters", ids: ["e01", "e05", "e06"] },
      ],
    },
    {
      id: "sentence-composition",
      headingEn: "Sentence composition — typed parts with automatic 띄어쓰기",
      headingZh: "句子组合 —— 带自动띄어쓰기的类型化部件",
      blocks: [
        {
          kind: "prose",
          en: "Korean spacing rules (**띄어쓰기**, tteui-eo-sseugi) require a space between words but no space before particles or punctuation. This sounds simple but trips up learners constantly: 저**는** (no space before 는), 밥**을** (no space before 을), but 저는 **밥을** (space between the two eojeol).\n\nThe `Sentence<[...parts]>` type handles this automatically. It inserts a space between any two word-level parts (nouns, verbs, adverbs) and lets particle parts and punctuation parts cling with no space. You describe the *structure* — the type produces the *surface string with correct spacing*.",
          zh: "韩语间距规则（**띄어쓰기**）要求词语之间有空格，但助词或标点之前没有空格。这听起来简单，却让学习者频频犯错：저**는**（는 前无空格）、밥**을**（을 前无空格），但 저는 **밥을**（两个词节之间有空格）。\n\n`Sentence<[...parts]>` 类型自动处理这一点。它在任意两个词级部件（名词、动词、副词）之间插入空格，并让助词部件和标点部件无缝附着。你描述*结构* —— 类型生成*带正确间距的表层字符串*。",
        },
        {
          kind: "compare",
          jp: "저는 밥을 먹어요",
          reading: "jeoneun babeul meogeoyo",
          en: "I eat rice.",
          zh: "我吃饭。",
          tsEn: `import {
  Sentence, PronounPart, ParticlePart, NounPart, VerbPart, Verb
} from "typed-korean";

type 먹다 = Verb & {
  dict:"먹다"; stem:"먹"; inf:"먹어"; past:"먹었";
  eu:"먹으"; prospective:"먹을"; formalStem:"먹습니";
};

// Sentence inserts spaces between word parts;
// ParticlePart clings to the preceding NounPart with no space.
type S = Sentence<[
  PronounPart<"저">,        // "저"
  ParticlePart<"는">,       //     + "는"  (no space — clings)
  NounPart<"밥">,           //  + " 밥"   (space before new word)
  ParticlePart<"을">,       //     + "을"  (no space — clings)
  VerbPart<먹다, "Haeyo">   //  + " 먹어요" (space before verb)
]>
// S = "저는 밥을 먹어요" ✓`,
          tsZh: `import {
  Sentence, PronounPart, ParticlePart, NounPart, VerbPart, Verb
} from "typed-korean";

type 먹다 = Verb & {
  dict:"먹다"; stem:"먹"; inf:"먹어"; past:"먹었";
  eu:"먹으"; prospective:"먹을"; formalStem:"먹습니";
};

// Sentence 在词级部件之间插入空格；
// ParticlePart 无缝附着在前一个 NounPart 上，无空格。
type S = Sentence<[
  PronounPart<"저">,        // "저"
  ParticlePart<"는">,       //     + "는"  （无空格 —— 附着）
  NounPart<"밥">,           //  + " 밥"   （新词前有空格）
  ParticlePart<"을">,       //     + "을"  （无空格 —— 附着）
  VerbPart<먹다, "Haeyo">   //  + " 먹어요" （动词前有空格）
]>
// S = "저는 밥을 먹어요" ✓`,
          noteEn:
            "The `jp` field on every example must match the resolved type exactly — spaces included. The DSL enforces this: if you add a spurious space before a particle, the type will resolve to a wrong string and the lesson will fail its self-check.",
          noteZh:
            "每个示例的 `jp` 字段必须与解析后的类型完全匹配 —— 包括空格。DSL 强制执行这一点：如果你在助词前多加一个空格，类型会解析为错误的字符串，课程自检就会失败。",
        },
        {
          kind: "prose",
          en: "A template-literal style is also available for cases where you prefer raw string composition. In that style you must insert spaces manually between eojeol:\n\n```ts\ntype S = `${PhraseWithParticle<\"저\",\"는\">} ${ConjugateCopula<\"학생\",\"Haeyo\",true>}`\n// S = \"저는 학생이에요\"\n```\n\nBoth styles produce the same surface string. The `Sentence<[...]>` style is recommended because the spacing logic is automatic and the part list mirrors the spoken word-boundary structure of Korean.",
          zh: "对于更喜欢原始字符串组合的情况，也可以使用模板字面量风格。该风格需要在词节之间手动插入空格：\n\n```ts\ntype S = `${PhraseWithParticle<\"저\",\"는\">} ${ConjugateCopula<\"학생\",\"Haeyo\",true>}`\n// S = \"저는 학생이에요\"\n```\n\n两种风格产生相同的表层字符串。推荐使用 `Sentence<[...]>` 风格，因为间距逻辑是自动的，部件列表也与韩语口语词界结构一一对应。",
        },
        {
          kind: "breakdown",
          jp: "저는 한국어를 공부해요",
          reading: "jeoneun hangugeoreul gongbuhaeyo",
          en: "I study Korean.",
          zh: "我学习韩语。",
          layers: [
            {
              fragment: "저는",
              depth: 0,
              en: "**topic** (`는`) — 저 (I/me) ends in vowel → `는` not `은`",
              zh: "**主题**（`는`）—— 저（我）以元音结尾 → 用 `는` 而非 `은`",
            },
            {
              fragment: "한국어를",
              depth: 0,
              en: "**object** (`를`) — 한국어 (Korean language) ends in vowel → `를` not `을`",
              zh: "**宾语**（`를`）—— 한국어（韩语）以元音结尾 → 用 `를` 而非 `을`",
            },
            {
              fragment: "공부해요",
              depth: 0,
              en: "**verb** — 공부하다 (study), 해요체 form; `formalStem:공부합니` would give `공부합니다` in 합니다체",
              zh: "**动词** —— 공부하다（学习），해요체形式；`formalStem:공부합니` 在합니다체中给出 `공부합니다`",
            },
          ],
        },
        { kind: "chapters", ids: ["e01", "e05", "e06", "e08"] },
      ],
    },
    {
      id: "together",
      headingEn: "Putting it together — one sentence, all five principles",
      headingZh: "把它们拼起来 —— 一句话，五条全用上",
      numbered: false,
      blocks: [
        {
          kind: "prose",
          en: "No principle lives alone. A real Korean sentence runs all five at once: particles tag each noun with the right allomorph (받침-driven), the verb closes the clause last (SOV), the copula alternates by 받침, conjugation selects the base for the speech level, and Sentence assembles typed parts with automatic 띄어쓰기. Here's a sentence that touches all of them:",
          zh: "没有一条原理是孤立的。真实的韩语句子同时运行全部五条：助词用正确的变体标记每个名词（受받침驱动），动词最后为小句收尾（SOV），系动词按받침交替，活用为语体选择基底，Sentence 带自动띄어쓰기地组装类型化部件。下面这句话触及所有这些：",
        },
        {
          kind: "breakdown",
          jp: "저는 친구한테 한국어를 배워요",
          reading: "jeoneun chinguhante hangugeoreul baeweoyo",
          en: "I learn Korean from a friend.",
          zh: "我向朋友学习韩语。",
          layers: [
            {
              fragment: "저는",
              depth: 0,
              en: "**topic** (`는`) — 저 vowel-final → `는`; sets up 'as for me'",
              zh: "**主题**（`는`）—— 저 以元音结尾 → `는`；设定「说到我」",
            },
            {
              fragment: "친구한테",
              depth: 0,
              en: "**dative** (`한테`) — 친구 (friend) + `한테` (to/from a person, informal); `께` would be honorific",
              zh: "**与格**（`한테`）—— 친구（朋友）+ `한테`（向/从某人，非正式）；`께` 则是敬语",
            },
            {
              fragment: "한국어를",
              depth: 0,
              en: "**object** (`를`) — 한국어 vowel-final → `를`",
              zh: "**宾语**（`를`）—— 한국어 以元音结尾 → `를`",
            },
            {
              fragment: "배워요",
              depth: 0,
              en: "**verb** — 배우다 (learn), 해요체; inf base `배워` + `요`; would be `배웁니다` in 합니다체",
              zh: "**动词** —— 배우다（学习），해요체；inf 基底 `배워` + `요`；합니다체中为 `배웁니다`",
            },
          ],
        },
        {
          kind: "compare",
          jp: "저는 친구한테 한국어를 배워요",
          reading: "jeoneun chinguhante hangugeoreul baeweoyo",
          en: "I learn Korean from a friend.",
          zh: "我向朋友学习韩语。",
          tsEn: `import {
  Sentence, PronounPart, ParticlePart, NounPart, VerbPart, Verb
} from "typed-korean";

type 배우다 = Verb & {
  dict:"배우다"; stem:"배우"; inf:"배워"; past:"배웠";
  eu:"배우"; prospective:"배울"; formalStem:"배웁니";
};

type S = Sentence<[
  PronounPart<"저">,         // 저  (vowel-final)
  ParticlePart<"는">,        // 는  (topic, vowel → 는)
  NounPart<"친구">,          // 친구 (friend)
  ParticlePart<"한테">,      // 한테 (to/from a person)
  NounPart<"한국어">,        // 한국어
  ParticlePart<"를">,        // 를  (object, vowel → 를)
  VerbPart<배우다, "Haeyo">  // 배워요 (inf "배워" + "요")
]>
// S = "저는 친구한테 한국어를 배워요" ✓

// Every principle: 1 particles+받침  2 SOV  3 받침 allomorphs
//                  4 conjugation bases  5 Sentence + 띄어쓰기`,
          tsZh: `import {
  Sentence, PronounPart, ParticlePart, NounPart, VerbPart, Verb
} from "typed-korean";

type 배우다 = Verb & {
  dict:"배우다"; stem:"배우"; inf:"배워"; past:"배웠";
  eu:"배우"; prospective:"배울"; formalStem:"배웁니";
};

type S = Sentence<[
  PronounPart<"저">,         // 저  （元音结尾）
  ParticlePart<"는">,        // 는  （主题，元音 → 는）
  NounPart<"친구">,          // 친구（朋友）
  ParticlePart<"한테">,      // 한테（向/从某人）
  NounPart<"한국어">,        // 한국어
  ParticlePart<"를">,        // 를  （宾语，元音 → 를）
  VerbPart<배우다, "Haeyo">  // 배워요（inf "배워" + "요"）
]>
// S = "저는 친구한테 한국어를 배워요" ✓

// 五条原理全在：1 助词+받침  2 SOV  3 받침变体
//               4 活用基底  5 Sentence + 띄어쓰기`,
          noteEn:
            "This is the whole frame: **tag** each noun with the right particle allomorph (받침-driven), keep **SOV** order, let the **copula** alternate by 받침 when needed, **conjugate** predicates using pre-computed bases for the chosen speech level, and let `Sentence` handle **띄어쓰기** spacing. The Grammar Course now reads as filling in this frame one feature at a time.",
          noteZh:
            "这就是整个框架：给每个名词贴上正确的助词变体（受받침驱动），保持 **SOV** 语序，在需要时让**系动词**按받침交替，使用为所选语体预先计算好的基底**活用**谓语，并让 `Sentence` 处理**띄어쓰기**间距。现在再看语法教程，就是往这个框架里一次填一个特性。",
        },
        {
          kind: "diagram",
          captionEn:
            "The full sentence as a tagged argument tree. The verb closes the clause at the end (SOV). Every particle reflects the correct 받침-driven allomorph.",
          captionZh:
            "完整句子表示为带标签的论元树。动词在末尾为小句收尾（SOV）。每个助词都反映了正确的受받침驱动的变体。",
          root: {
            label: "배워요",
            args: [
              { label: "저", tag: "는", roleEn: "topic (vowel → 는)", roleZh: "主题（元音 → 는）" },
              { label: "친구", tag: "한테", roleEn: "source/dative", roleZh: "来源/与格" },
              { label: "한국어", tag: "를", roleEn: "object (vowel → 를)", roleZh: "宾语（元音 → 를）" },
            ],
          },
        },
        {
          kind: "prose",
          en: "That's the complete architecture. From here, the **Grammar Course** walks you through each feature one chapter at a time — starting with copula sentences (이에요/예요, 입니다), then verbs and the object particle, then the everyday particles, then adjectives, and progressively more complex structures. And whenever a sentence looks opaque, drop it into the **Playground** and watch its type resolve — endings, spacing, and all — into exactly the Korean string you're reading.",
          zh: "这就是完整的架构。从这里出发，**语法教程**一章一章地带你走过每个特性 —— 从系动词句（이에요/예요、입니다）开始，然后是动词和宾语助词，接着是日常助词，再到形容词，逐步走向更复杂的结构。而每当一句话看不透，就把它丢进**演练场**，看它的类型 —— 连词尾、间距一并 —— 求值成你正在读的那句韩语。",
        },
        { kind: "chapters", ids: ["e01", "e05", "e06", "e08", "e13"] },
      ],
    },
  ],
};

export default article;
