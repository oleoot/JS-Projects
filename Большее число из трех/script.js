var a = +prompt("Введите первое число: ");
var b = +prompt("Введите второе число: ");
var c = +prompt("Введите третье число: ");
if (a >= b) {
    if (a >= c) {
        alert(a);
    } else {
        alert(c);
    }
} else if (b >= a) {
    if (b >= c) {
        alert(b);
    } else {
        alert(c);
    }
}
