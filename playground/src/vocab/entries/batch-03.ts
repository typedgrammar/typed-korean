import type { VocabEntry } from "../types";

/**
 * Content words: adverbs (부사) and pronouns (대명사).
 * Romanization follows the Revised Romanization of Korean (RR).
 */
export default [
  // --- adverbs (부사) -----------------------------------------------------
  { word: "같이", reading: "같이", romaji: "gachi", pos: "adverb", en: "together", zh: "一起" },
  { word: "내일", reading: "내일", romaji: "naeil", pos: "adverb", en: "tomorrow", zh: "明天" },
  { word: "매일", reading: "매일", romaji: "maeil", pos: "adverb", en: "every day", zh: "每天" },
  { word: "빨리", reading: "빨리", romaji: "ppalli", pos: "adverb", en: "quickly / fast", zh: "快" },
  { word: "여기", reading: "여기", romaji: "yeogi", pos: "adverb", en: "here", zh: "这里" },
  { word: "잠깐", reading: "잠깐", romaji: "jamkkan", pos: "adverb", en: "for a moment / briefly", zh: "一会儿、暂时" },
  { word: "조용히", reading: "조용히", romaji: "joyonghi", pos: "adverb", en: "quietly", zh: "安静地" },

  // --- pronouns (대명사) --------------------------------------------------
  { word: "그", reading: "그", romaji: "geu", pos: "pronoun", en: "he / that", zh: "他；那" },
  { word: "우리", reading: "우리", romaji: "uri", pos: "pronoun", en: "we / us / our", zh: "我们" },
  { word: "이것", reading: "이것", romaji: "igeot", pos: "pronoun", en: "this (thing)", zh: "这个" },
  { word: "저", reading: "저", romaji: "jeo", pos: "pronoun", en: "I (humble) / that", zh: "我(谦称)；那" },
  { word: "제", reading: "제", romaji: "je", pos: "pronoun", en: "my (humble)", zh: "我的(谦称)" },
] satisfies VocabEntry[];
