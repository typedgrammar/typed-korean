/**
 * Starter sentences for the composer. Each snippet is real, self-contained
 * Typed Korean: it type-checks against the library's .d.ts files loaded into
 * Monaco, and its *last* type alias is a sentence/phrase that resolves to a
 * concrete Korean string the visualiser can decompose.
 */
export interface Snippet {
  id: string;
  title: string;
  jp: string;
  en: string;
  code: string;
}

export const SNIPPETS: ReadonlyArray<Snippet> = [
  {
    id: "verb",
    title: "Verb conjugation",
    jp: "먹어요",
    en: "“eat” — conjugate a verb to its 해요체 polite present",
    code: `import type { Verb, ConjugateVerb } from "typed-korean";

// 먹다 (to eat) — a verb, given by its conjugation bases
type 먹다 = Verb & {
  dict: "먹다"; stem: "먹"; inf: "먹어"; past: "먹었";
  eu: "먹으"; prospective: "먹을"; formalStem: "먹습니";
};

// Conjugate it. Hover 먹어요 — TypeScript computes "먹어요".
type 먹어요 = ConjugateVerb<먹다, "Haeyo">;
`,
  },
  {
    id: "copula",
    title: "Copula · 저는 학생이에요",
    jp: "저는 학생이에요",
    en: "“I am a student.” — the copula 이다 in 해요체",
    code: `import type {
  Sentence,
  PronounPart,
  ParticlePart,
  CopulaPart,
} from "typed-korean";

// 저(I) + 는(topic) + 학생(student) + 이에요(copula). 학생 ends in a
// consonant (받침), so the copula surfaces as 이에요.
type 저는학생이에요 = Sentence<
  [PronounPart<"저">, ParticlePart<"는">, CopulaPart<"학생", "Haeyo">]
>;
`,
  },
  {
    id: "sov",
    title: "SOV · 저는 밥을 먹어요",
    jp: "저는 밥을 먹어요",
    en: "“I eat rice.” — subject 는, object 을, verb last (SOV)",
    code: `import type {
  Verb,
  Sentence,
  PronounPart,
  NounPart,
  ParticlePart,
  VerbPart,
} from "typed-korean";

type 먹다 = Verb & {
  dict: "먹다"; stem: "먹"; inf: "먹어"; past: "먹었";
  eu: "먹으"; prospective: "먹을"; formalStem: "먹습니";
};

type 저는밥을먹어요 = Sentence<
  [
    PronounPart<"저">,
    ParticlePart<"는">,
    NounPart<"밥">,
    ParticlePart<"을">,
    VerbPart<먹다, "Haeyo">
  ]
>;
`,
  },
  {
    id: "adjective",
    title: "Adjective · 좋아요",
    jp: "좋아요",
    en: "“(it) is good” — a descriptive verb (형용사) in 해요체",
    code: `import type { Adjective, ConjugateAdjective } from "typed-korean";

// 좋다 (to be good) — an adjective; note the extra 'attr' base for -(으)ㄴ
type 좋다 = Adjective & {
  dict: "좋다"; stem: "좋"; inf: "좋아"; past: "좋았";
  eu: "좋으"; prospective: "좋을"; formalStem: "좋습니"; attr: "좋은";
};

type 좋아요 = ConjugateAdjective<좋다, "Haeyo">;
`,
  },
  {
    id: "past",
    title: "Past · 어제 도서관에서 공부했어요",
    jp: "어제 도서관에서 공부했어요",
    en: "“I studied at the library yesterday.” — adverb + 에서 + past",
    code: `import type {
  HadaVerb,
  Sentence,
  AdverbPart,
  NounPart,
  ParticlePart,
  VerbPart,
} from "typed-korean";

type 공부하다 = HadaVerb & {
  dict: "공부하다"; stem: "공부하"; inf: "공부해"; past: "공부했";
  eu: "공부하"; prospective: "공부할"; formalStem: "공부합니";
};

type 어제도서관에서공부했어요 = Sentence<
  [
    AdverbPart<"어제">,
    NounPart<"도서관">,
    ParticlePart<"에서">,
    VerbPart<공부하다, "PastHaeyo">
  ]
>;
`,
  },
];
