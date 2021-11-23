import { koreanWords } from '../src/KoreanWords.js';

let rawText = `
동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세
동해물과
`;
let newWords = [
  //
  // '새로추가하고싶은단어',
];

if (newWords.length == 0) {
  rawText = rawText.replace(/\d\S+/g, '');
  rawText = rawText.replace(/[^가-힣]/g, ' ');
  newWords = rawText.split(/\s/);
}

for (let word of newWords) {
  if (koreanWords.includes(word)) {
    const index = newWords.indexOf(word);
    if (index !== -1) {
      newWords.splice(index, 1);
    }
  }
}

// Remove falsy values
newWords = newWords.filter(Boolean);
// Limit the length
newWords = newWords.filter((word: string) => {
  return word.length < 6;
});

// Remove duplicates
newWords = Array.from(new Set<string>(newWords));
// Sort
newWords.sort();

console.log("  '" + newWords.join("',\n  '") + "',\n");
