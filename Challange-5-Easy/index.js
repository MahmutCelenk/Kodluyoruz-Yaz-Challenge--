let result = document.querySelector("#result");

// Kullanıcıdan sayiları alıyoruz
let number1 = prompt("İlk sayıyı giriniz");
let number2 = prompt("İkinci sayıyı giriniz");


// Aldığımız sayıları topluyoruz
let total = parseInt(number1) + parseInt(number2);


// Topladığımız sayıları ekrana basıyoruz
result.innerHTML = `${"iki Sayının toplamı ="} ${total}`;
