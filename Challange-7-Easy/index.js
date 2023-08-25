let result = document.getElementById("result");

// Kullanıcıdan Kelime alma işlemi
let word = prompt("Bir Kelime Girin");

// Girilen kelimenin uzunluğunu bulma işlemi 
let uzunluk = word.length;


// Bulunan uzunluğu ekrana basma işlemi 
result.innerText = `${"Girilen kelime uzunluğu: "} => ${uzunluk}`;