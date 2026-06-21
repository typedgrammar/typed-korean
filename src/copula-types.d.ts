/**
 * The copula 이다 ("to be").
 *
 * 이다 attaches directly to a noun and inflects. Its shape depends on whether
 * the noun ends in a consonant (받침): after a 받침 the linking 이 surfaces
 * (학생이에요), after a vowel it contracts (의자예요). That choice *is*
 * expressible at the type level — it doesn't need jamo fusion, only a boolean —
 * so `ConjugateCopula` takes a `Batchim` flag and picks the allomorph with a
 * conditional type. The negative copula 아니다 is modelled separately because it
 * pairs with the subject particle 이/가 at the phrase level.
 */

export type CopulaForm =
  | "Haeyo" // 이에요 / 예요 — polite informal
  | "Hamnida" // 입니다 — formal polite
  | "Plain" // 이다 / 다 — plain
  | "PastHaeyo" // 이었어요 / 였어요 — past, polite informal
  | "PastHamnida" // 이었습니다 / 였습니다 — past, formal polite
  | "And" // 이고 / 고 — "and (is) ..."
  | "Attributive"; // 인 — adnominal "(who/which) is ..."

/**
 * Attach and conjugate the copula on a noun.
 * @param N        the noun the copula attaches to, e.g. "학생".
 * @param F        the copula form.
 * @param Batchim  true if N ends in a consonant (받침). Defaults to true.
 *
 * e.g. `ConjugateCopula<"학생", "Haeyo">` → "학생이에요";
 *      `ConjugateCopula<"의자", "Haeyo", false>` → "의자예요".
 */
export type ConjugateCopula<
  N extends string,
  F extends CopulaForm = "Haeyo",
  Batchim extends boolean = true
> = F extends "Haeyo"
  ? Batchim extends true
    ? `${N}이에요`
    : `${N}예요`
  : F extends "Hamnida"
  ? `${N}입니다`
  : F extends "Plain"
  ? Batchim extends true
    ? `${N}이다`
    : `${N}다`
  : F extends "PastHaeyo"
  ? Batchim extends true
    ? `${N}이었어요`
    : `${N}였어요`
  : F extends "PastHamnida"
  ? Batchim extends true
    ? `${N}이었습니다`
    : `${N}였습니다`
  : F extends "And"
  ? Batchim extends true
    ? `${N}이고`
    : `${N}고`
  : F extends "Attributive"
  ? `${N}인`
  : never;

/** Bare copula suffix without a noun, occasionally handy for composition. */
export type Copula<
  F extends CopulaForm = "Haeyo",
  Batchim extends boolean = true
> = ConjugateCopula<"", F, Batchim>;
