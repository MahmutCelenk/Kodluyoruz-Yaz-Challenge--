let result = document.getElementById("result");

// Kullanıcıdan sayı alalım
let number = parseInt(prompt("Bir sayı girin:"));

// sayının tek veya çift olduğunu kontrol edelim
if(number % 2 === 0) {
    result.innerHTML = `${number} ${" Sayısı çifttir."}`;
} else {
    result.innerHTML = `${number} ${" Sayısı Tektir."}`;
}