var a = +prompt("Введите вашe числo: ");
var b = +prompt("Введите вашe числo: ");
var c = +prompt("Введите вашe числo: ");
var s = (a + b + c) / 3;

if (a == b) {
    console.log("Ошибка");
} else if (a == c) {
    console.log("Ошибка");
} else if (b == c) {
    console.log("Ошибка");
} else {
    console.log(s);
}
