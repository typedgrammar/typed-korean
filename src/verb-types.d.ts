/**
 * Verbs (동사).
 *
 * Korean inflection merges jamo at the syllable-block level: a suffix's shape
 * depends on whether the stem ends in a consonant (받침), on vowel harmony
 * (아 vs 어), and on a handful of irregular stem classes (ㄷ, ㅂ, ㅅ, 르, ㅎ,
 * 으, ㄹ). TypeScript's type system operates on whole code points, so it cannot
 * decompose 먹 into ㅁㅓㄱ to decide that the past tense is 먹었- and not 먹았-.
 *
 * So a verb carries its key morphological *bases* — each one a real Korean
 * surface form — and `ConjugateVerb` builds every inflection by appending an
 * *invariant* suffix to the right base. Regular and irregular verbs share the
 * same machinery; an irregular verb simply supplies irregular bases (e.g. 듣다
 * → inf "들어"). This keeps conjugation type-safe and exact while pushing the
 * jamo arithmetic to authoring time, where the grammar rule is being taught.
 */

/** A Korean verb and its conjugation bases. */
export type Verb = {
  type: "verb";
  /** Dictionary form (사전형), e.g. "먹다". */
  dict: string;
  /** Stem = dict without 다, e.g. "먹". Base for -고 / -지 / -는 / -게. */
  stem: string;
  /** 아/어 infinitive (어간 + 아/어), encodes harmony + ㅂ/ㄷ/르 irregulars.
   *  e.g. "먹어", "가", "마셔", "들어". Base for the 해요체 and -아서/어서. */
  inf: string;
  /** Past base = infinitive fused with ㅆ, e.g. "먹었", "갔", "마셨". */
  past: string;
  /** 으-linking stem (= stem when the stem is vowel-final), e.g. "먹으", "가".
   *  Base for -(으)면 / -(으)세요 / -(으)니까. */
  eu: string;
  /** (으)ㄹ prospective stem, e.g. "먹을", "갈". Base for -(으)ㄹ 수 있다 etc. */
  prospective: string;
  /** Pre-니다 formal base (습/ㅂ already fused), e.g. "먹습니", "갑니". */
  formalStem: string;
};

/* Pedagogical aliases — structurally identical to `Verb`, used so examples can
 * name a verb's class. The class only tells the author which bases will be
 * irregular; the conjugation rules are the same. */

/** A regular verb (규칙 동사), e.g. 먹다, 가다, 읽다. */
export type RegularVerb = Verb;
/** An irregular verb (불규칙 동사), e.g. 듣다(ㄷ), 돕다(ㅂ), 모르다(르). */
export type IrregularVerb = Verb;
/** A 하다 verb (noun + 하다), e.g. 공부하다, 일하다, 사랑하다. */
export type HadaVerb = Verb;

/** The conjugation forms covered by the course, beginner → advanced. */
export type VerbForm =
  | "Dictionary" // 사전형 — 먹다
  | "Haeyo" // 해요체 — present, polite informal — 먹어요
  | "Hamnida" // 합니다체 — present, formal polite — 먹습니다
  | "HamnidaQ" // 합니까? — formal polite question — 먹습니까
  | "PastHaeyo" // 았/었어요 — past, polite informal — 먹었어요
  | "PastHamnida" // 았/었습니다 — past, formal polite — 먹었습니다
  | "PastPlain" // 았/었다 — past, plain — 먹었다
  | "And" // -고 — "and / and then" — 먹고
  | "Seo" // -아서/어서 — "so / and then" — 먹어서
  | "If" // -(으)면 — conditional — 먹으면
  | "Negative" // -지 않아요 — long negation, polite — 먹지 않아요
  | "Want" // -고 싶어요 — "want to" — 먹고 싶어요
  | "Progressive" // -고 있어요 — "be ~ing" — 먹고 있어요
  | "Potential" // -(으)ㄹ 수 있어요 — "can" — 먹을 수 있어요
  | "Honorific" // -(으)세요 — honorific / polite request — 먹으세요
  | "Future" // -(으)ㄹ 거예요 — future / intention — 먹을 거예요
  | "Propositive" // -(으)ㄹ까요? — "shall we?" — 먹을까요
  | "Imperative" // -아라/어라 — plain command — 먹어라
  | "Attributive"; // -는 — present adnominal — 먹는

/**
 * Conjugate a verb into a form by appending the form's invariant suffix to the
 * matching base. The result is the exact surface string, e.g.
 * `ConjugateVerb<먹다, "PastHaeyo">` → "먹었어요".
 */
export type ConjugateVerb<
  V extends Verb,
  F extends VerbForm
> = F extends "Dictionary"
  ? V["dict"]
  : F extends "Haeyo"
  ? `${V["inf"]}요`
  : F extends "Hamnida"
  ? `${V["formalStem"]}다`
  : F extends "HamnidaQ"
  ? `${V["formalStem"]}까`
  : F extends "PastHaeyo"
  ? `${V["past"]}어요`
  : F extends "PastHamnida"
  ? `${V["past"]}습니다`
  : F extends "PastPlain"
  ? `${V["past"]}다`
  : F extends "And"
  ? `${V["stem"]}고`
  : F extends "Seo"
  ? `${V["inf"]}서`
  : F extends "If"
  ? `${V["eu"]}면`
  : F extends "Negative"
  ? `${V["stem"]}지 않아요`
  : F extends "Want"
  ? `${V["stem"]}고 싶어요`
  : F extends "Progressive"
  ? `${V["stem"]}고 있어요`
  : F extends "Potential"
  ? `${V["prospective"]} 수 있어요`
  : F extends "Honorific"
  ? `${V["eu"]}세요`
  : F extends "Future"
  ? `${V["prospective"]} 거예요`
  : F extends "Propositive"
  ? `${V["prospective"]}까요`
  : F extends "Imperative"
  ? `${V["inf"]}라`
  : F extends "Attributive"
  ? `${V["stem"]}는`
  : never;
