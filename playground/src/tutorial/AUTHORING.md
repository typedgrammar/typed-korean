# Authoring Typed-Korean course chapters

Each file under `tutorial/chapters/<id>.ts` **default-exports** a `Chapter`. All
prose is bilingual **English + 简体中文** (`…En` / `…Zh`). Every example carries a
self-contained **Typed Korean** `code` snippet whose **last `type` alias resolves
to exactly the `jp` sentence** (the field is named `jp` for parity with the
sibling repos; it holds the **Korean** sentence). `reading` is the Revised
Romanization.

## Data shape

```ts
import type { Chapter } from "../types";
const chapter: Chapter = {
  id: "e01",                       // = filename; e=elementary, i=intermediate, a=advanced
  level: "elementary",             // "elementary" | "intermediate" | "advanced"
  order: 1,                        // order within the level
  titleEn: "...", titleZh: "...",
  summaryEn: "...", summaryZh: "...",   // 1–2 paragraphs; \n\n between paragraphs
  points: [
    {
      id: "e01-1",
      titleEn: "...", titleZh: "...",
      bodyEn: "...", bodyZh: "...",      // markdown-ish: \n\n paragraphs, `code`, **bold**
      examples: [
        {
          jp: "저는 학생이에요",          // the KOREAN sentence (with 띄어쓰기 spaces!)
          reading: "jeoneun haksaengieyo",
          en: "I am a student.",
          zh: "我是学生。",
          code: `...self-contained Typed Korean; last alias === jp...`,
        },
      ],
    },
  ],
};
export default chapter;
```

Aim for **3–4 points per chapter, 2–3 examples per point**.

## The Typed Korean DSL (import from `"typed-korean"`)

Korean conjugation merges jamo (받침 + 아/어 harmony + irregular stems), which
TypeScript can't compute over syllable blocks. So a **verb/adjective carries its
morphological bases** and `Conjugate*` appends an *invariant* suffix. **Use the
vetted predicate definitions below verbatim** — do not invent bases.

### Nouns / adverbs / adnominals
`CommonNoun<"학생">`, `ProperNoun<"한국">`, `Pronoun<"저">`, `Adverb<"매일">`,
`Adnominal<"이">` — all resolve to the string.

### Particles (attach with NO space): `PhraseWithParticle<Phrase, P>`
Topic `은`(받침)/`는`(vowel) · subject `이`/`가` · object `을`/`를` · `의`(of) ·
`에`(at/to) · `에서`(at/from) · `에게`/`한테`/`께`(to person) · `로`/`으로` ·
`와`/`과`/`하고`(and/with) · `도`(also) · `만`(only) · `부터`·`까지` · `보다`(than) ·
`처럼`(like) · `마다`(every).

### Verb forms — `ConjugateVerb<V, Form>`
`Dictionary` 먹다 · `Haeyo` 먹어요 · `Hamnida` 먹습니다 · `HamnidaQ` 먹습니까 ·
`PastHaeyo` 먹었어요 · `PastHamnida` 먹었습니다 · `PastPlain` 먹었다 · `And` 먹고 ·
`Seo` 먹어서 · `If` 먹으면 · `Negative` 먹지 않아요 · `Want` 먹고 싶어요 ·
`Progressive` 먹고 있어요 · `Potential` 먹을 수 있어요 · `Honorific` 먹으세요 ·
`Future` 먹을 거예요 · `Propositive` 먹을까요 · `Imperative` 먹어라 · `Attributive` 먹는.

### Adjective forms — `ConjugateAdjective<A, Form>`
`Dictionary` 좋다 · `Haeyo` 좋아요 · `Hamnida` 좋습니다 · `PastHaeyo` 좋았어요 ·
`PastHamnida` 좋았습니다 · `PastPlain` 좋았다 · `And` 좋고 · `Seo` 좋아서 ·
`If` 좋으면 · `Negative` 좋지 않아요 · `Attributive` 좋은.

### Copula — `ConjugateCopula<Noun, Form, Batchim?>` (Batchim = noun ends in consonant; default true)
`Haeyo` 학생이에요 / 의자예요(false) · `Hamnida` 학생입니다 · `Plain` 학생이다 / 의자다(false) ·
`PastHaeyo` 학생이었어요 / 의자였어요(false) · `Attributive` 학생인 · `And` 학생이고.

### Sentence assembly (auto-spaces words; particles & punctuation cling)
`Sentence<[...PhrasePart]>` → the surface string. Parts:
`PronounPart<"저">`, `NounPart<"밥">`, `ProperNounPart<"한국">`, `AdverbPart<"매일">`,
`AdnominalPart<"이">`, `ParticlePart<"는">`, `VerbPart<V, Form>`,
`AdjectivePart<A, Form>`, `CopulaPart<"학생", Form, Batchim?>`,
`PunctuationPart<"?">`, `LiteralPart<"...">`.

Template-literal style also works but you must insert literal spaces between
eojeol yourself: `` `${PhraseWithParticle<"이것","은">} ${ConjugateCopula<"의자","Haeyo",false>}` `` → "이것은 의자예요".

## Vetted predicate lexicon — copy these definitions verbatim

### Verbs (`Verb` / `RegularVerb` / `IrregularVerb` / `HadaVerb`)
```ts
type 가다 = Verb & { dict:"가다"; stem:"가"; inf:"가"; past:"갔"; eu:"가"; prospective:"갈"; formalStem:"갑니" };          // go
type 오다 = Verb & { dict:"오다"; stem:"오"; inf:"와"; past:"왔"; eu:"오"; prospective:"올"; formalStem:"옵니" };          // come
type 먹다 = Verb & { dict:"먹다"; stem:"먹"; inf:"먹어"; past:"먹었"; eu:"먹으"; prospective:"먹을"; formalStem:"먹습니" }; // eat
type 마시다 = Verb & { dict:"마시다"; stem:"마시"; inf:"마셔"; past:"마셨"; eu:"마시"; prospective:"마실"; formalStem:"마십니" }; // drink
type 보다 = Verb & { dict:"보다"; stem:"보"; inf:"봐"; past:"봤"; eu:"보"; prospective:"볼"; formalStem:"봅니" };          // see
type 읽다 = Verb & { dict:"읽다"; stem:"읽"; inf:"읽어"; past:"읽었"; eu:"읽으"; prospective:"읽을"; formalStem:"읽습니" }; // read
type 쓰다 = Verb & { dict:"쓰다"; stem:"쓰"; inf:"써"; past:"썼"; eu:"쓰"; prospective:"쓸"; formalStem:"씁니" };          // write/use (으-irreg)
type 사다 = Verb & { dict:"사다"; stem:"사"; inf:"사"; past:"샀"; eu:"사"; prospective:"살"; formalStem:"삽니" };          // buy
type 자다 = Verb & { dict:"자다"; stem:"자"; inf:"자"; past:"잤"; eu:"자"; prospective:"잘"; formalStem:"잡니" };          // sleep
type 만나다 = Verb & { dict:"만나다"; stem:"만나"; inf:"만나"; past:"만났"; eu:"만나"; prospective:"만날"; formalStem:"만납니" }; // meet
type 주다 = Verb & { dict:"주다"; stem:"주"; inf:"줘"; past:"줬"; eu:"주"; prospective:"줄"; formalStem:"줍니" };          // give
type 받다 = Verb & { dict:"받다"; stem:"받"; inf:"받아"; past:"받았"; eu:"받으"; prospective:"받을"; formalStem:"받습니" }; // receive
type 입다 = Verb & { dict:"입다"; stem:"입"; inf:"입어"; past:"입었"; eu:"입으"; prospective:"입을"; formalStem:"입습니" }; // wear
type 찾다 = Verb & { dict:"찾다"; stem:"찾"; inf:"찾아"; past:"찾았"; eu:"찾으"; prospective:"찾을"; formalStem:"찾습니" }; // find
type 타다 = Verb & { dict:"타다"; stem:"타"; inf:"타"; past:"탔"; eu:"타"; prospective:"탈"; formalStem:"탑니" };          // ride
type 배우다 = Verb & { dict:"배우다"; stem:"배우"; inf:"배워"; past:"배웠"; eu:"배우"; prospective:"배울"; formalStem:"배웁니" }; // learn
type 기다리다 = Verb & { dict:"기다리다"; stem:"기다리"; inf:"기다려"; past:"기다렸"; eu:"기다리"; prospective:"기다릴"; formalStem:"기다립니" }; // wait
type 가르치다 = Verb & { dict:"가르치다"; stem:"가르치"; inf:"가르쳐"; past:"가르쳤"; eu:"가르치"; prospective:"가르칠"; formalStem:"가르칩니" }; // teach
type 듣다 = IrregularVerb & { dict:"듣다"; stem:"듣"; inf:"들어"; past:"들었"; eu:"들으"; prospective:"들을"; formalStem:"듣습니" }; // listen (ㄷ)
type 걷다 = IrregularVerb & { dict:"걷다"; stem:"걷"; inf:"걸어"; past:"걸었"; eu:"걸으"; prospective:"걸을"; formalStem:"걷습니" }; // walk (ㄷ)
type 있다 = Verb & { dict:"있다"; stem:"있"; inf:"있어"; past:"있었"; eu:"있으"; prospective:"있을"; formalStem:"있습니" }; // exist/have
type 없다 = Verb & { dict:"없다"; stem:"없"; inf:"없어"; past:"없었"; eu:"없으"; prospective:"없을"; formalStem:"없습니" }; // not exist
type 하다 = HadaVerb & { dict:"하다"; stem:"하"; inf:"해"; past:"했"; eu:"하"; prospective:"할"; formalStem:"합니" };       // do
type 공부하다 = HadaVerb & { dict:"공부하다"; stem:"공부하"; inf:"공부해"; past:"공부했"; eu:"공부하"; prospective:"공부할"; formalStem:"공부합니" }; // study
type 일하다 = HadaVerb & { dict:"일하다"; stem:"일하"; inf:"일해"; past:"일했"; eu:"일하"; prospective:"일할"; formalStem:"일합니" }; // work
type 사랑하다 = HadaVerb & { dict:"사랑하다"; stem:"사랑하"; inf:"사랑해"; past:"사랑했"; eu:"사랑하"; prospective:"사랑할"; formalStem:"사랑합니" }; // love
type 좋아하다 = HadaVerb & { dict:"좋아하다"; stem:"좋아하"; inf:"좋아해"; past:"좋아했"; eu:"좋아하"; prospective:"좋아할"; formalStem:"좋아합니" }; // like
type 말하다 = HadaVerb & { dict:"말하다"; stem:"말하"; inf:"말해"; past:"말했"; eu:"말하"; prospective:"말할"; formalStem:"말합니" }; // speak
type 시작하다 = HadaVerb & { dict:"시작하다"; stem:"시작하"; inf:"시작해"; past:"시작했"; eu:"시작하"; prospective:"시작할"; formalStem:"시작합니" }; // start
```

### Adjectives (`Adjective`)
```ts
type 좋다 = Adjective & { dict:"좋다"; stem:"좋"; inf:"좋아"; past:"좋았"; eu:"좋으"; prospective:"좋을"; formalStem:"좋습니"; attr:"좋은" };       // good
type 작다 = Adjective & { dict:"작다"; stem:"작"; inf:"작아"; past:"작았"; eu:"작으"; prospective:"작을"; formalStem:"작습니"; attr:"작은" };       // small
type 많다 = Adjective & { dict:"많다"; stem:"많"; inf:"많아"; past:"많았"; eu:"많으"; prospective:"많을"; formalStem:"많습니"; attr:"많은" };       // many
type 적다 = Adjective & { dict:"적다"; stem:"적"; inf:"적어"; past:"적었"; eu:"적으"; prospective:"적을"; formalStem:"적습니"; attr:"적은" };       // few
type 크다 = Adjective & { dict:"크다"; stem:"크"; inf:"커"; past:"컸"; eu:"크"; prospective:"클"; formalStem:"큽니"; attr:"큰" };                 // big (으-irreg)
type 나쁘다 = Adjective & { dict:"나쁘다"; stem:"나쁘"; inf:"나빠"; past:"나빴"; eu:"나쁘"; prospective:"나쁠"; formalStem:"나쁩니"; attr:"나쁜" }; // bad (으-irreg)
type 예쁘다 = Adjective & { dict:"예쁘다"; stem:"예쁘"; inf:"예뻐"; past:"예뻤"; eu:"예쁘"; prospective:"예쁠"; formalStem:"예쁩니"; attr:"예쁜" }; // pretty (으-irreg)
type 바쁘다 = Adjective & { dict:"바쁘다"; stem:"바쁘"; inf:"바빠"; past:"바빴"; eu:"바쁘"; prospective:"바쁠"; formalStem:"바쁩니"; attr:"바쁜" }; // busy (으-irreg)
type 비싸다 = Adjective & { dict:"비싸다"; stem:"비싸"; inf:"비싸"; past:"비쌌"; eu:"비싸"; prospective:"비쌀"; formalStem:"비쌉니"; attr:"비싼" }; // expensive
type 싸다 = Adjective & { dict:"싸다"; stem:"싸"; inf:"싸"; past:"쌌"; eu:"싸"; prospective:"쌀"; formalStem:"쌉니"; attr:"싼" };                 // cheap
type 맛있다 = Adjective & { dict:"맛있다"; stem:"맛있"; inf:"맛있어"; past:"맛있었"; eu:"맛있으"; prospective:"맛있을"; formalStem:"맛있습니"; attr:"맛있는" }; // delicious (있다-type → -는)
type 재미있다 = Adjective & { dict:"재미있다"; stem:"재미있"; inf:"재미있어"; past:"재미있었"; eu:"재미있으"; prospective:"재미있을"; formalStem:"재미있습니"; attr:"재미있는" }; // fun
type 춥다 = Adjective & { dict:"춥다"; stem:"춥"; inf:"추워"; past:"추웠"; eu:"추우"; prospective:"추울"; formalStem:"춥습니"; attr:"추운" };     // cold (ㅂ-irreg)
type 덥다 = Adjective & { dict:"덥다"; stem:"덥"; inf:"더워"; past:"더웠"; eu:"더우"; prospective:"더울"; formalStem:"덥습니"; attr:"더운" };     // hot (ㅂ-irreg)
type 쉽다 = Adjective & { dict:"쉽다"; stem:"쉽"; inf:"쉬워"; past:"쉬웠"; eu:"쉬우"; prospective:"쉬울"; formalStem:"쉽습니"; attr:"쉬운" };     // easy (ㅂ-irreg)
type 어렵다 = Adjective & { dict:"어렵다"; stem:"어렵"; inf:"어려워"; past:"어려웠"; eu:"어려우"; prospective:"어려울"; formalStem:"어렵습니"; attr:"어려운" }; // difficult (ㅂ-irreg)
```

### Common nouns (use `CommonNoun<"…">` / `NounPart<"…">`; pick the copula 받침 flag)
받침 / consonant-final → copula Batchim **true** (`이에요`): 학생 student · 사람 person · 밥 rice/meal ·
물 water · 책 book · 집 house · 선생님 teacher · 친구 friend · 한국 Korea · 가족 family · 음식 food ·
시간 time · 일 work/day · 사랑 love · 빵 bread · 산 mountain · 꽃 flower · 손 hand · 이름 name · 방 room.
vowel-final → copula Batchim **false** (`예요`): 의자 chair · 가수 singer · 나무 tree · 커피 coffee ·
학교 school · 사과 apple · 우유 milk · 영화 movie · 차 tea/car · 시계 clock · 아이 child · 가게 store ·
노래 song · 바다 sea · 어머니 mother · 아버지 father · 누나 older-sister · 머리 head · 다리 leg/bridge.

## Rules
1. **Spaces matter.** `jp` and the resolved value MUST match exactly, including
   띄어쓰기 spaces between eojeol. Particles/punctuation attach with no space.
2. **Only use vetted predicate definitions** above (copy verbatim). For nouns,
   prefer the list above; you may add common everyday nouns, but pick the right
   copula `Batchim` (true if the noun ends in a consonant).
3. Each example's `code` imports only what it uses from `"typed-korean"`,
   defines its words, and ends with the alias that equals `jp`.
4. Keep prose pedagogical and bilingual; explain the grammar point, contrast
   해요체 vs 합니다체 where relevant, and note 받침-driven allomorphs.
