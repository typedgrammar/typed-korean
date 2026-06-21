/**
 * Adjectives (형용사) — descriptive verbs.
 *
 * Korean adjectives conjugate almost exactly like verbs (same 해요체 / 합니다체
 * / past machinery and the same bases), with two differences taught in the
 * course:
 *   1. the plain present is the dictionary form itself (좋다, *not* 좋는다); and
 *   2. the present adnominal is -(으)ㄴ (좋은, 큰), not -는.
 * So an adjective carries the verb bases plus one extra base, `attr`, for the
 * -(으)ㄴ attributive (which would otherwise need jamo fusion).
 */

/** A Korean adjective and its conjugation bases. */
export type Adjective = {
  type: "adjective";
  /** Dictionary form, e.g. "좋다", "크다". */
  dict: string;
  /** Stem without 다, e.g. "좋", "크". */
  stem: string;
  /** 아/어 infinitive, e.g. "좋아", "커". Base for 해요체 + -아서/어서. */
  inf: string;
  /** Past base (infinitive + ㅆ), e.g. "좋았", "컸". */
  past: string;
  /** 으-linking stem, e.g. "좋으", "크". Base for -(으)면. */
  eu: string;
  /** (으)ㄹ prospective stem, e.g. "좋을", "클". */
  prospective: string;
  /** Pre-니다 formal base, e.g. "좋습니", "큽니". */
  formalStem: string;
  /** -(으)ㄴ present adnominal, e.g. "좋은", "큰", "예쁜". */
  attr: string;
};

/** A descriptive verb (형용사) — alias of `Adjective`, for naming clarity. */
export type DescriptiveVerb = Adjective;

export type AdjectiveForm =
  | "Dictionary" // 좋다 — also the plain present
  | "Haeyo" // 좋아요 — present, polite informal
  | "Hamnida" // 좋습니다 — present, formal polite
  | "PastHaeyo" // 좋았어요 — past, polite informal
  | "PastHamnida" // 좋았습니다 — past, formal polite
  | "PastPlain" // 좋았다 — past, plain
  | "And" // 좋고 — "and"
  | "Seo" // 좋아서 — "so / because"
  | "If" // 좋으면 — conditional
  | "Negative" // 좋지 않아요 — long negation, polite
  | "Attributive"; // 좋은 — present adnominal

/**
 * Conjugate an adjective into a form, e.g.
 * `ConjugateAdjective<좋다, "Haeyo">` → "좋아요".
 */
export type ConjugateAdjective<
  A extends Adjective,
  F extends AdjectiveForm
> = F extends "Dictionary"
  ? A["dict"]
  : F extends "Haeyo"
  ? `${A["inf"]}요`
  : F extends "Hamnida"
  ? `${A["formalStem"]}다`
  : F extends "PastHaeyo"
  ? `${A["past"]}어요`
  : F extends "PastHamnida"
  ? `${A["past"]}습니다`
  : F extends "PastPlain"
  ? `${A["past"]}다`
  : F extends "And"
  ? `${A["stem"]}고`
  : F extends "Seo"
  ? `${A["inf"]}서`
  : F extends "If"
  ? `${A["eu"]}면`
  : F extends "Negative"
  ? `${A["stem"]}지 않아요`
  : F extends "Attributive"
  ? A["attr"]
  : never;
