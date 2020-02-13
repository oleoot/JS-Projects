
var a = +prompt("Введите начало диапазона: ");
var b = +prompt("Введите конец диапазона: ");
var sum = 0;
for (var i = a; i <= b; i++) {
    if (i % 2 != 0) {
        document.write(i);
        document.write('<br>');
    }

}
