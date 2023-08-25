let result = document.getElementById("result");

// Bir sayı dizisi oluşturalım
let numbers = [15, 8, 30, 50, 12, 70,100];

// İlk elemanı en büyük olarak kabul edelim
let theBiggest = numbers[0];

// Dizi içinde dolaşarak en büyük sayıyı bulalım
for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] > theBiggest) {
        theBiggest = numbers[i];
    }
}

// Ekrana yazdıralım
result.innerHTML = `${"Dizinin en büyük sayısı: "} ${theBiggest}`;
