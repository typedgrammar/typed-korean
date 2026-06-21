/**
 * Phrase & sentence composition.
 *
 * Two things make Korean composition different from Japanese:
 *   1. Particles (조사) attach to the *right edge* of a noun with no space, but
 *      eojeol (어절, space-delimited words) are separated by a space — Korean
 *      uses 띄어쓰기. So the sentence builder inserts a space before each part
 *      *except* particles and punctuation, which cling to what precedes them.
 *   2. Many particles have two allomorphs chosen by 받침 (은/는, 이/가, 을/를,
 *      과/와, 으로/로). Both members live in the `Particle` union; the author
 *      picks the right one (that is exactly the rule the course teaches).
 */

import type { Verb, VerbForm, ConjugateVerb } from "./verb-types";
import type { Adjective, AdjectiveForm, ConjugateAdjective } from "./adjective-types";
import type { CopulaForm, ConjugateCopula } from "./copula-types";
import type { InterrogativeAdverb } from "./adverb-types";

/* --- particles (조사) ------------------------------------------------------ */
export type Particle =
  // topic 보조사 — 은 (after 받침) / 는 (after vowel)
  | "은"
  | "는"
  // subject 주격 — 이 / 가
  | "이"
  | "가"
  // object 목적격 — 을 / 를
  | "을"
  | "를"
  // genitive 관형격
  | "의"
  // place / time / direction (static) & recipient
  | "에"
  | "에서" // location of an action / "from (a place)"
  | "에게"
  | "한테"
  | "께" // honorific "to"
  | "에게서"
  | "한테서" // "from (a person)"
  // direction / means / instrument — 로 / 으로
  | "로"
  | "으로"
  // "and / with" — 과 / 와 / 하고 / 랑 / 이랑
  | "과"
  | "와"
  | "하고"
  | "랑"
  | "이랑"
  // 보조사
  | "도" // also, too
  | "만" // only
  | "부터" // from (time / order)
  | "까지" // until / up to
  | "보다" // than (comparison)
  | "처럼" // like
  | "같이" // like / together
  | "마다" // every
  | "밖에" // nothing but (+ negative)
  | "이나"
  | "나" // or / about
  | "요"; // politeness particle

/* --- simple combinators (template-literal style) -------------------------- */

/** A bare noun phrase. */
export type NounPhrase<Noun extends string> = `${Noun}`;

/** Attach a particle to a phrase, e.g. `PhraseWithParticle<"저", "는">` → "저는". */
export type PhraseWithParticle<
  Phrase extends string,
  P extends Particle
> = `${Phrase}${P}`;

/** Join two clauses with a Korean comma + space. */
export type ConnectedPhrases<
  P1 extends string,
  P2 extends string
> = `${P1}, ${P2}`;

/** A conditional sentence: condition clause + space + result clause. */
export type ConditionalPhrase<
  Condition extends string,
  Result extends string
> = `${Condition} ${Result}`;

/** A question opened by an interrogative, e.g.
 *  `InterrogativePhrase<"왜", "안 와요">` → "왜 안 와요?". */
export type InterrogativePhrase<
  Adv extends InterrogativeAdverb,
  Rest extends string,
  QMark extends string = "?"
> = `${Adv} ${Rest}${QMark}`;

/** A demonstrative adverb followed by an action, e.g.
 *  `DemonstrativeAction<"그렇게", "했어요">` → "그렇게 했어요". */
export type DemonstrativeAction<
  Demo extends string,
  Action extends string
> = `${Demo} ${Action}`;

/* --- part-based composition (the Analyzer's tree) ------------------------- */

export type VerbPart<V extends Verb = Verb, F extends VerbForm = VerbForm> = {
  type: "verb";
  value: ConjugateVerb<V, F>;
};

export type AdjectivePart<
  A extends Adjective = Adjective,
  F extends AdjectiveForm = AdjectiveForm
> = {
  type: "adjective";
  value: ConjugateAdjective<A, F>;
};

export type CopulaPart<
  N extends string = string,
  F extends CopulaForm = CopulaForm,
  B extends boolean = true
> = {
  type: "copula";
  value: ConjugateCopula<N, F, B>;
};

export type NounPart<N extends string = string> = { type: "noun"; value: N };
export type PronounPart<N extends string = string> = { type: "pronoun"; value: N };
export type ProperNounPart<N extends string = string> = {
  type: "proper-noun";
  value: N;
};
export type AdverbPart<W extends string = string> = { type: "adverb"; value: W };
export type AdnominalPart<W extends string = string> = {
  type: "adnominal";
  value: W;
};
export type ParticlePart<P extends Particle = Particle> = {
  type: "particle";
  value: P;
};
export type PunctuationPart<S extends string = string> = {
  type: "punctuation";
  value: S;
};
/** A raw literal fragment (e.g. a fixed expression) when no other part fits. */
export type LiteralPart<S extends string = string> = { type: "literal"; value: S };

export type PhrasePart =
  | VerbPart
  | AdjectivePart
  | CopulaPart
  | NounPart
  | PronounPart
  | ProperNounPart
  | AdverbPart
  | AdnominalPart
  | ParticlePart
  | PunctuationPart
  | LiteralPart;

/** Parts that cling to the preceding word with no space (조사 + punctuation). */
type Attaching = "particle" | "punctuation";

/** Fold the parts into a surface string, inserting a 띄어쓰기 space before each
 *  part except the first and any attaching part. */
type JoinParts<
  Parts extends readonly PhrasePart[],
  Acc extends string = "",
  First extends boolean = true
> = Parts extends readonly [
  infer P extends PhrasePart,
  ...infer Rest extends readonly PhrasePart[]
]
  ? JoinParts<
      Rest,
      `${Acc}${First extends true
        ? ""
        : P["type"] extends Attaching
        ? ""
        : " "}${P["value"]}`,
      false
    >
  : Acc;

/** A full sentence built from ordered parts — resolves to the surface string,
 *  e.g. `Sentence<[PronounPart<"저">, ParticlePart<"는">, CopulaPart<"학생">]>`
 *  → "저는 학생이에요". */
export type Sentence<Parts extends readonly PhrasePart[]> = JoinParts<Parts>;

/** Like `Sentence` but keeps the parts alongside the resolved `value`. */
export type PhraseSequence<Parts extends readonly PhrasePart[]> = {
  parts: Parts;
  value: JoinParts<Parts>;
};
