/**
 * Nouns (명사). Korean nouns don't inflect — they take case/topic particles
 * (조사) that attach directly to the right edge. So a noun is modelled as a
 * plain string-literal label, distinguished only by sub-category so grammar
 * rules and the Analyzer can colour it. The particle attachment + any copula
 * live in phrase-types / copula-types.
 */

/** 보통명사 — a common noun, e.g. "학생" (student), "밥" (rice/meal). */
export type CommonNoun<Name extends string> = Name;

/** 고유명사 — a proper noun, e.g. "한국" (Korea), "수지". */
export type ProperNoun<Name extends string> = Name;

/** 대명사 — a pronoun, e.g. "저" (I, humble), "이것" (this thing). */
export type Pronoun<Name extends string> = Name;

/** Any noun-like taigen that a particle or the copula can attach to. */
export type Noun = string;
