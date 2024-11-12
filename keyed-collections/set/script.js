//Removing Repeated Words

// 1. Metni al
let text = prompt("Bir metin girin:");

let words = text.split(" ");

let uniqueWords = new Set(words);

let result = Array.from(uniqueWords).join(" ");
console.log(result);
