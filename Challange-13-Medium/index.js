function convertToUpperCase() {
    const inputWord = document.getElementById("word").value;
    const upperCaseWord = inputWord.toUpperCase();
    document.getElementById("result").textContent = upperCaseWord;
}


