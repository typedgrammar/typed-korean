/**
 * Vocabulary table schema. The dictionary is the single source of truth for how
 * every word in the tutorial is read and what it means. A compiler check
 * (scripts/verify-vocab.mjs) guarantees every word used in the course's Typed
 * Korean snippets indexes into this table.
 */
export type PartOfSpeech =
  | "noun"
  | "proper-noun"
  | "pronoun"
  | "adnominal"
  | "verb"
  | "adjective"
  | "adverb"
  | "particle"
  | "copula"
  | "ending"
  | "conjunction"
  | "interjection"
  | "counter"
  | "number"
  | "expression"
  | "suffix"
  | "prefix";

export interface VocabEntry {
  /** Headword — the exact surface used in the tutorial (dictionary form, e.g.
   *  "먹다" for a verb, "학생" for a noun). */
  word: string;
  /** Hangul reading. For most words this equals the headword; kept for parity
   *  with the schema and for words written with hanja or numerals. */
  reading: string;
  /** Revised Romanization (국어의 로마자 표기법). */
  romaji: string;
  pos: PartOfSpeech;
  en: string;
  zh: string;
}

export const POS_LABEL: Record<PartOfSpeech, { en: string; zh: string }> = {
  noun: { en: "noun", zh: "名词" },
  "proper-noun": { en: "proper noun", zh: "专有名词" },
  pronoun: { en: "pronoun", zh: "代词" },
  adnominal: { en: "adnominal", zh: "冠形词" },
  verb: { en: "verb", zh: "动词" },
  adjective: { en: "adjective", zh: "形容词" },
  adverb: { en: "adverb", zh: "副词" },
  particle: { en: "particle", zh: "助词" },
  copula: { en: "copula", zh: "系词" },
  ending: { en: "ending", zh: "词尾" },
  conjunction: { en: "conjunction", zh: "连词" },
  interjection: { en: "interjection", zh: "感叹词" },
  counter: { en: "counter", zh: "量词" },
  number: { en: "number", zh: "数词" },
  expression: { en: "expression", zh: "词组" },
  suffix: { en: "suffix", zh: "后缀" },
  prefix: { en: "prefix", zh: "前缀" },
};
