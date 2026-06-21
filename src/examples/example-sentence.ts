/**
 * Worked sentence examples — both composition styles, with 띄어쓰기 spacing.
 */
import type {
  AdverbPart,
  ConjugateCopula,
  CopulaPart,
  NounPart,
  ParticlePart,
  PhraseWithParticle,
  PronounPart,
  Sentence,
  VerbPart,
} from "../index";
import type { Verb } from "../verb-types";

type 먹다 = Verb & {
  dict: "먹다";
  stem: "먹";
  inf: "먹어";
  past: "먹었";
  eu: "먹으";
  prospective: "먹을";
  formalStem: "먹습니";
};

// "저는 학생이에요" — I am a student. (parts style; spaces inserted automatically)
type 저는학생이에요 = Sentence<
  [PronounPart<"저">, ParticlePart<"는">, CopulaPart<"학생", "Haeyo">]
>;
const s1: 저는학생이에요 = "저는 학생이에요";

// "저는 밥을 먹어요" — I eat rice. (S + O + V; particle 을 attaches, words spaced)
type 저는밥을먹어요 = Sentence<
  [
    PronounPart<"저">,
    ParticlePart<"는">,
    NounPart<"밥">,
    ParticlePart<"을">,
    VerbPart<먹다, "Haeyo">
  ]
>;
const s2: 저는밥을먹어요 = "저는 밥을 먹어요";

// "저는 매일 밥을 먹었어요" — I ate rice every day. (adverb + past)
type withAdverb = Sentence<
  [
    PronounPart<"저">,
    ParticlePart<"는">,
    AdverbPart<"매일">,
    NounPart<"밥">,
    ParticlePart<"을">,
    VerbPart<먹다, "PastHaeyo">
  ]
>;
const s3: withAdverb = "저는 매일 밥을 먹었어요";

// Template-literal style — note the explicit space between eojeol.
type 의자예요 = ConjugateCopula<"의자", "Haeyo", false>;
type 이것은의자예요 = `${PhraseWithParticle<"이것", "은">} ${의자예요}`;
const s4: 이것은의자예요 = "이것은 의자예요";

// @ts-expect-error — missing the space between 저는 and 학생이에요
const wrong: 저는학생이에요 = "저는학생이에요";

export { s1, s2, s3, s4, wrong };
