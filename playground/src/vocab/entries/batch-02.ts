import type { VocabEntry } from "../types";

/**
 * Content words: verbs (동사) and descriptive verbs / adjectives (형용사).
 * Korean adjectives are descriptive verbs, so they are glossed "to be …".
 * Romanization follows the Revised Romanization of Korean (RR).
 */
export default [
  // --- verbs (동사) -------------------------------------------------------
  { word: "가다", reading: "가다", romaji: "gada", pos: "verb", en: "to go", zh: "去" },
  { word: "가르치다", reading: "가르치다", romaji: "gareuchida", pos: "verb", en: "to teach", zh: "教" },
  { word: "걷다", reading: "걷다", romaji: "geotda", pos: "verb", en: "to walk", zh: "走、步行" },
  { word: "공부하다", reading: "공부하다", romaji: "gongbuhada", pos: "verb", en: "to study", zh: "学习" },
  { word: "기다리다", reading: "기다리다", romaji: "gidarida", pos: "verb", en: "to wait", zh: "等待" },
  { word: "노래하다", reading: "노래하다", romaji: "noraehada", pos: "verb", en: "to sing", zh: "唱歌" },
  { word: "듣다", reading: "듣다", romaji: "deutda", pos: "verb", en: "to listen / to hear", zh: "听" },
  { word: "마시다", reading: "마시다", romaji: "masida", pos: "verb", en: "to drink", zh: "喝" },
  { word: "만나다", reading: "만나다", romaji: "mannada", pos: "verb", en: "to meet", zh: "见面" },
  { word: "말하다", reading: "말하다", romaji: "malhada", pos: "verb", en: "to speak / to say", zh: "说" },
  { word: "먹다", reading: "먹다", romaji: "meokda", pos: "verb", en: "to eat", zh: "吃" },
  { word: "받다", reading: "받다", romaji: "batda", pos: "verb", en: "to receive", zh: "收、得到" },
  { word: "배우다", reading: "배우다", romaji: "baeuda", pos: "verb", en: "to learn", zh: "学" },
  { word: "보다", reading: "보다", romaji: "boda", pos: "verb", en: "to see / to watch", zh: "看" },
  { word: "사다", reading: "사다", romaji: "sada", pos: "verb", en: "to buy", zh: "买" },
  { word: "시작하다", reading: "시작하다", romaji: "sijakhada", pos: "verb", en: "to start / to begin", zh: "开始" },
  { word: "쓰다", reading: "쓰다", romaji: "sseuda", pos: "verb", en: "to write / to use", zh: "写、用" },
  { word: "앉다", reading: "앉다", romaji: "antda", pos: "verb", en: "to sit", zh: "坐" },
  { word: "없다", reading: "없다", romaji: "eopda", pos: "verb", en: "to not exist / to not have", zh: "没有、不在" },
  { word: "오다", reading: "오다", romaji: "oda", pos: "verb", en: "to come", zh: "来" },
  { word: "일하다", reading: "일하다", romaji: "ilhada", pos: "verb", en: "to work", zh: "工作" },
  { word: "읽다", reading: "읽다", romaji: "ikda", pos: "verb", en: "to read", zh: "读" },
  { word: "있다", reading: "있다", romaji: "itda", pos: "verb", en: "to exist / to have", zh: "有、在" },
  { word: "자다", reading: "자다", romaji: "jada", pos: "verb", en: "to sleep", zh: "睡觉" },
  { word: "좋아하다", reading: "좋아하다", romaji: "joahada", pos: "verb", en: "to like", zh: "喜欢" },
  { word: "주다", reading: "주다", romaji: "juda", pos: "verb", en: "to give", zh: "给" },
  { word: "하다", reading: "하다", romaji: "hada", pos: "verb", en: "to do", zh: "做" },

  // --- adjectives / descriptive verbs (형용사) ----------------------------
  { word: "덥다", reading: "덥다", romaji: "deopda", pos: "adjective", en: "to be hot (weather)", zh: "热(天气)" },
  { word: "많다", reading: "많다", romaji: "manta", pos: "adjective", en: "to be many / to be much", zh: "多" },
  { word: "맛있다", reading: "맛있다", romaji: "masitda", pos: "adjective", en: "to be delicious", zh: "好吃" },
  { word: "바쁘다", reading: "바쁘다", romaji: "bappeuda", pos: "adjective", en: "to be busy", zh: "忙" },
  { word: "비싸다", reading: "비싸다", romaji: "bissada", pos: "adjective", en: "to be expensive", zh: "贵" },
  { word: "쉽다", reading: "쉽다", romaji: "swipda", pos: "adjective", en: "to be easy", zh: "容易" },
  { word: "싸다", reading: "싸다", romaji: "ssada", pos: "adjective", en: "to be cheap", zh: "便宜" },
  { word: "어렵다", reading: "어렵다", romaji: "eoryeopda", pos: "adjective", en: "to be difficult", zh: "难" },
  { word: "예쁘다", reading: "예쁘다", romaji: "yeppeuda", pos: "adjective", en: "to be pretty", zh: "漂亮" },
  { word: "재미있다", reading: "재미있다", romaji: "jaemiitda", pos: "adjective", en: "to be fun / to be interesting", zh: "有趣" },
  { word: "좋다", reading: "좋다", romaji: "jota", pos: "adjective", en: "to be good", zh: "好" },
  { word: "춥다", reading: "춥다", romaji: "chupda", pos: "adjective", en: "to be cold (weather)", zh: "冷(天气)" },
  { word: "크다", reading: "크다", romaji: "keuda", pos: "adjective", en: "to be big", zh: "大" },
] satisfies VocabEntry[];
