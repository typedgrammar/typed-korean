/**
 * Worked verb examples — also a compile-time test of the conjugation engine.
 * Each `const _check: Form = "surface"` asserts the type resolves to exactly
 * that Korean string; a wrong string is a type error.
 */
import type { ConjugateVerb, Verb } from "../verb-types";

// 먹다 — regular, consonant-final stem (받침 ㄱ)
type 먹다 = Verb & {
  dict: "먹다";
  stem: "먹";
  inf: "먹어";
  past: "먹었";
  eu: "먹으";
  prospective: "먹을";
  formalStem: "먹습니";
};

// 가다 — regular, vowel-final stem
type 가다 = Verb & {
  dict: "가다";
  stem: "가";
  inf: "가";
  past: "갔";
  eu: "가";
  prospective: "갈";
  formalStem: "갑니";
};

// 듣다 — ㄷ irregular (듣 → 들 before a vowel)
type 듣다 = Verb & {
  dict: "듣다";
  stem: "듣";
  inf: "들어";
  past: "들었";
  eu: "들으";
  prospective: "들을";
  formalStem: "듣습니";
};

// 공부하다 — 하다 verb (해 in the infinitive)
type 공부하다 = Verb & {
  dict: "공부하다";
  stem: "공부하";
  inf: "공부해";
  past: "공부했";
  eu: "공부하";
  prospective: "공부할";
  formalStem: "공부합니";
};

const haeyo: ConjugateVerb<먹다, "Haeyo"> = "먹어요";
const hamnida: ConjugateVerb<먹다, "Hamnida"> = "먹습니다";
const pastHaeyo: ConjugateVerb<먹다, "PastHaeyo"> = "먹었어요";
const ifForm: ConjugateVerb<먹다, "If"> = "먹으면";
const potential: ConjugateVerb<먹다, "Potential"> = "먹을 수 있어요";
const honorific: ConjugateVerb<먹다, "Honorific"> = "먹으세요";

const goHaeyo: ConjugateVerb<가다, "Haeyo"> = "가요";
const goPast: ConjugateVerb<가다, "PastHaeyo"> = "갔어요";
const goHonorific: ConjugateVerb<가다, "Honorific"> = "가세요";

const listenHaeyo: ConjugateVerb<듣다, "Haeyo"> = "들어요";
const listenPast: ConjugateVerb<듣다, "PastHaeyo"> = "들었어요";

const studyHaeyo: ConjugateVerb<공부하다, "Haeyo"> = "공부해요";
const studyHamnida: ConjugateVerb<공부하다, "Hamnida"> = "공부합니다";

// @ts-expect-error — 먹어요, not 먹아요 (먹 takes 어 by vowel harmony)
const wrong: ConjugateVerb<먹다, "Haeyo"> = "먹아요";

export {
  haeyo,
  hamnida,
  pastHaeyo,
  ifForm,
  potential,
  honorific,
  goHaeyo,
  goPast,
  goHonorific,
  listenHaeyo,
  listenPast,
  studyHaeyo,
  studyHamnida,
  wrong,
};
