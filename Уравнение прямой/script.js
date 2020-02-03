var xw = prompt(" Введите х1: ");
var xq = prompt(" Введите х2: ");
var y = prompt(" Введите y1: ");
var yq = prompt(" Введите y2: ");
var k = (y - yq) / (xw - xq);
var b = (yq - k * xq);
console.log(k);
console.log(b);
if (b > 0) {
    var line = ("Уравнение прямой: y=" + k + "x+" + b);
    alert(line);
} else {
    var line = ("Уравнение прямой: y=" + k + "x" + b);
    alert(line);
}
