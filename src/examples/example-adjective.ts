/**
 * Worked adjective (형용사) examples — compile-time tests.
 */
import type { Adjective, ConjugateAdjective } from "../adjective-types";

// 좋다 — regular
type 좋다 = Adjective & {
  dict: "좋다";
  stem: "좋";
  inf: "좋아";
  past: "좋았";
  eu: "좋으";
  prospective: "좋을";
  formalStem: "좋습니";
  attr: "좋은";
};

// 크다 — 으 irregular (으 drops: 크 → 커)
type 크다 = Adjective & {
  dict: "크다";
  stem: "크";
  inf: "커";
  past: "컸";
  eu: "크";
  prospective: "클";
  formalStem: "큽니";
  attr: "큰";
};

const goodHaeyo: ConjugateAdjective<좋다, "Haeyo"> = "좋아요";
const goodPast: ConjugateAdjective<좋다, "PastHaeyo"> = "좋았어요";
const goodAttr: ConjugateAdjective<좋다, "Attributive"> = "좋은";
const goodPlain: ConjugateAdjective<좋다, "Dictionary"> = "좋다";

const bigHaeyo: ConjugateAdjective<크다, "Haeyo"> = "커요";
const bigAttr: ConjugateAdjective<크다, "Attributive"> = "큰";
const bigHamnida: ConjugateAdjective<크다, "Hamnida"> = "큽니다";

// @ts-expect-error — adjectives have no -는 attributive; it's -(으)ㄴ (좋은)
const wrong: ConjugateAdjective<좋다, "Attributive"> = "좋는";

export { goodHaeyo, goodPast, goodAttr, goodPlain, bigHaeyo, bigAttr, bigHamnida, wrong };
