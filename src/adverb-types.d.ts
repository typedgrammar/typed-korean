/**
 * Adverbs (부사), adnominals (관형사), interrogatives (의문사) and
 * demonstratives. Like nouns these don't inflect, so they're string-literal
 * labels. Korean word order is SOV and adverbs/adnominals sit before what they
 * modify, separated by a space (띄어쓰기) — the spacing is handled by the
 * sentence combinators in phrase-types.
 */

/** 부사 — an adverb, e.g. "매일" (every day), "아주" (very), "빨리" (quickly). */
export type Adverb<Word extends string> = Word;

/** 관형사 — an adnominal that modifies a following noun, e.g. "이"/"그"/"저"
 * (this/that), "새" (new), "옛" (old). */
export type Adnominal<Word extends string> = Word;

/* --- interrogatives (의문사), grouped by what they ask -------------------- */
export type WhyInterrogative = "왜";
export type WhenInterrogative = "언제";
export type WhereInterrogative = "어디";
export type WhoInterrogative = "누구" | "누가";
export type WhatInterrogative = "무엇" | "뭐" | "무슨";
export type HowInterrogative = "어떻게";
export type WhichInterrogative = "어느" | "어떤";
export type HowManyInterrogative = "몇" | "얼마";

export type InterrogativeAdverb =
  | WhyInterrogative
  | WhenInterrogative
  | WhereInterrogative
  | WhoInterrogative
  | WhatInterrogative
  | HowInterrogative
  | WhichInterrogative
  | HowManyInterrogative;

/** Manner demonstratives — "이렇게" (like this), "그렇게" (like that),
 * "저렇게" (like that, far), "어떻게" (how). */
export type Demonstrative = "이렇게" | "그렇게" | "저렇게" | "어떻게";
