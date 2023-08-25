let result = document.querySelector("#result");

// Kullanıcıdan kelimeyi alıyoruz
let word = prompt("Lütfen metin giriniz");

let text =  word.length;

result.innerHTML = `${"Toplam Kelime Sayısı ="} ${text}`;