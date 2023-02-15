var firstName = "Rafael";
var anotherName = "Eduarda";
var x = true;
var numero = 9;
function greeting(name) {
    console.log("Olá e seja bem-vindo " + name);
    alert('Seu nome é ' + name);
}
function calculate(x) {
    alert("".concat(x, " + ").concat(x, " = ").concat(x + x));
}
calculate(numero);
greeting(firstName);
greeting(anotherName);
