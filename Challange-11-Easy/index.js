let result = document.getElementById("result");

// Kullanıcıdan sayı alma 
let sayi = parseInt(prompt("Bir sayı girin:"));

// Faktöryel hesaplama fonksiyonu
function factorial(number) {
    if(number === 0 || number === 1) {
        return 1;
    } else {
        return number * factorial(number - 1);
    }
}

// Faktöryeli hesaplama
let conclusion = factorial(sayi);

// Sonucu ekrana bastırma işlemi
result.innerHTML = `${sayi} ${" Sayısının Faktöryeli: "} ${conclusion}`;


