let result = document.getElementById("result");

let sayi = parseFloat(prompt("Bir sayı girin"));
let kare = sayi * sayi;

result.innerHTML = `${sayi} ${" Sayısının Karesi"} ${kare}`;