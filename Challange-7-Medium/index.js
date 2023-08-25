let result = document.querySelector(".result");
let number = prompt("Bir sayı giriniz");

let numbers = 0;

for(let i = 0; i < number.length; i++) {
    numbers += parseInt(number.charAt(i));
}

result.innerHTML = `${"Sayının basamaklarının toplamı: "} => ${numbers}`;