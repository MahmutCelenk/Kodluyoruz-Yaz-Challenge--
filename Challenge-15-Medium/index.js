
function FindMostRepeatedLetter(text) {
    const charMap = {};
    let maxCount = 0;
    let maxLetter = '';

    // Metindeki her bir harfin sayısını hesaplama 
    for(let i = 0;  i < text.length; i++) {
        const letter = text[i].toLowerCase();
        if(letter !== ' ') {
            charMap[letter] = charMap[letter] + 1 || 1;
            if(charMap[letter] > maxCount) {
                maxCount = charMap[letter];
                maxLetter = letter;
            }
        }
    }
    return {letter: maxLetter, count: maxCount };
}
const userInput = prompt('Bir Metin Girin');
const result = FindMostRepeatedLetter(userInput);

console.log(`Metindeki En Çok Tekrar Eden Harf: ${result.letter}`);
console.log(`Tekrar Sayısı:  ${result.count}`);


