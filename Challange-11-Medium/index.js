let result = document.getElementById("result");

// Bir sayı dizisi oluşturalım
let numbers = [10, 20, 30, 40, 50];

// Dizinin elamanlarının toplamını hesaplayalım
let total = 0;
for(let i = 0; i < numbers.length; i++) {
    total += numbers[i];
}

// Ortalamayı hesaplayalım
let average = total / numbers.length;

// Ekrana yazdıralım
result.innerHTML = `${"Dizinin elemanlarının ortalması: "} ${average}`;