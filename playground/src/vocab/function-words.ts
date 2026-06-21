import type { VocabEntry } from "./types";

/**
 * Hand-maintained grammar vocabulary: particles (조사), the copula, pronouns,
 * demonstratives, interrogatives and common conjunctions. These give
 * readings/meanings for the grammatical glue in sentences (는 = neun, 이에요 =
 * ieyo, …), complementing the content words authored under entries/.
 * Romanization follows the Revised Romanization of Korean (RR).
 */
const e = (
  word: string,
  reading: string,
  romaji: string,
  pos: VocabEntry["pos"],
  en: string,
  zh: string
): VocabEntry => ({ word, reading, romaji, pos, en, zh });

export const FUNCTION_WORDS: VocabEntry[] = [
  // --- particles (조사) ----------------------------------------------------
  e("은", "은", "eun", "particle", "topic marker (after 받침)", "主题助词(收音后)"),
  e("는", "는", "neun", "particle", "topic marker (after vowel)", "主题助词(元音后)"),
  e("이", "이", "i", "particle", "subject marker (after 받침)", "主格助词(收音后)"),
  e("가", "가", "ga", "particle", "subject marker (after vowel)", "主格助词(元音后)"),
  e("을", "을", "eul", "particle", "object marker (after 받침)", "宾格助词(收音后)"),
  e("를", "를", "reul", "particle", "object marker (after vowel)", "宾格助词(元音后)"),
  e("의", "의", "ui", "particle", "of / 's (genitive)", "的(属格)"),
  e("에", "에", "e", "particle", "at / to / in (place, time)", "在、到(地点、时间)"),
  e("에서", "에서", "eseo", "particle", "at / from (place of action)", "在、从(动作地点)"),
  e("에게", "에게", "ege", "particle", "to (a person)", "给(人)"),
  e("한테", "한테", "hante", "particle", "to (a person, casual)", "给(人,口语)"),
  e("께", "께", "kke", "particle", "to (honorific)", "给(敬语)"),
  e("에게서", "에게서", "egeseo", "particle", "from (a person)", "从(人)"),
  e("한테서", "한테서", "hanteseo", "particle", "from (a person, casual)", "从(人,口语)"),
  e("로", "로", "ro", "particle", "to / by / with (after vowel/ㄹ)", "向、用、以(元音/ㄹ后)"),
  e("으로", "으로", "euro", "particle", "to / by / with (after 받침)", "向、用、以(收音后)"),
  e("와", "와", "wa", "particle", "and / with (after vowel)", "和、与(元音后)"),
  e("과", "과", "gwa", "particle", "and / with (after 받침)", "和、与(收音后)"),
  e("하고", "하고", "hago", "particle", "and / with (casual)", "和、与(口语)"),
  e("랑", "랑", "rang", "particle", "and / with (casual, after vowel)", "和(口语,元音后)"),
  e("이랑", "이랑", "irang", "particle", "and / with (casual, after 받침)", "和(口语,收音后)"),
  e("도", "도", "do", "particle", "also / too / even", "也、连"),
  e("만", "만", "man", "particle", "only / just", "只、仅"),
  e("부터", "부터", "buteo", "particle", "from (starting point)", "从…起"),
  e("까지", "까지", "kkaji", "particle", "until / up to", "到…为止"),
  e("보다", "보다", "boda", "particle", "than (comparison)", "比"),
  e("처럼", "처럼", "cheoreom", "particle", "like / as", "像…一样"),
  e("같이", "같이", "gachi", "particle", "like / together", "像、一起"),
  e("마다", "마다", "mada", "particle", "every / each", "每"),
  e("밖에", "밖에", "bakke", "particle", "nothing but (+ negative)", "只(后接否定)"),
  e("나", "나", "na", "particle", "or / about (after vowel)", "或、左右(元音后)"),
  e("이나", "이나", "ina", "particle", "or / about (after 받침)", "或、左右(收音后)"),
  e("요", "요", "yo", "particle", "politeness particle", "礼貌助词"),

  // --- copula (이다 / 아니다) ----------------------------------------------
  e("이다", "이다", "ida", "copula", "to be (copula)", "是(系词)"),
  e("아니다", "아니다", "anida", "copula", "to not be", "不是"),

  // --- pronouns (대명사) ---------------------------------------------------
  e("저", "저", "jeo", "pronoun", "I / me (humble)", "我(谦)"),
  e("나", "나", "na", "pronoun", "I / me (casual)", "我(非敬)"),
  e("너", "너", "neo", "pronoun", "you (casual)", "你(非敬)"),
  e("우리", "우리", "uri", "pronoun", "we / our", "我们"),
  e("저희", "저희", "jeohui", "pronoun", "we (humble)", "我们(谦)"),
  e("그", "그", "geu", "pronoun", "he", "他"),
  e("그녀", "그녀", "geunyeo", "pronoun", "she", "她"),
  e("이것", "이것", "igeot", "pronoun", "this (thing)", "这个"),
  e("그것", "그것", "geugeot", "pronoun", "that (thing)", "那个"),
  e("저것", "저것", "jeogeot", "pronoun", "that (thing, over there)", "那个(远)"),
  e("여기", "여기", "yeogi", "pronoun", "here", "这里"),
  e("거기", "거기", "geogi", "pronoun", "there", "那里"),
  e("저기", "저기", "jeogi", "pronoun", "over there", "那里(远)"),

  // --- adnominals / demonstratives (관형사) --------------------------------
  e("이", "이", "i", "adnominal", "this (+ noun)", "这(+名词)"),
  e("그", "그", "geu", "adnominal", "that (+ noun)", "那(+名词)"),
  e("저", "저", "jeo", "adnominal", "that over there (+ noun)", "那(远,+名词)"),
  e("어느", "어느", "eoneu", "adnominal", "which (+ noun)", "哪个(+名词)"),
  e("무슨", "무슨", "museun", "adnominal", "what kind of (+ noun)", "什么样的"),
  e("새", "새", "sae", "adnominal", "new", "新的"),

  // --- interrogatives (의문사) --------------------------------------------
  e("왜", "왜", "wae", "adverb", "why", "为什么"),
  e("언제", "언제", "eonje", "adverb", "when", "什么时候"),
  e("어디", "어디", "eodi", "pronoun", "where", "哪里"),
  e("누구", "누구", "nugu", "pronoun", "who", "谁"),
  e("누가", "누가", "nuga", "pronoun", "who (subject)", "谁(主语)"),
  e("무엇", "무엇", "mueot", "pronoun", "what", "什么"),
  e("뭐", "뭐", "mwo", "pronoun", "what (casual)", "什么(口语)"),
  e("어떻게", "어떻게", "eotteoke", "adverb", "how", "怎么"),
  e("몇", "몇", "myeot", "adnominal", "how many", "几"),
  e("얼마", "얼마", "eolma", "pronoun", "how much", "多少"),

  // --- conjunctions (접속사) ----------------------------------------------
  e("그리고", "그리고", "geurigo", "conjunction", "and / and then", "然后、而且"),
  e("그래서", "그래서", "geuraeseo", "conjunction", "so / therefore", "所以"),
  e("그러나", "그러나", "geureona", "conjunction", "but / however", "但是、然而"),
  e("하지만", "하지만", "hajiman", "conjunction", "but / however", "但是"),
  e("그런데", "그런데", "geureonde", "conjunction", "by the way / but", "不过、可是"),
  e("그러면", "그러면", "geureomyeon", "conjunction", "then / in that case", "那么"),
];
