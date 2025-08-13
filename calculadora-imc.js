peso = 10;
altura = 10;

const imc = peso / (altura * altura);
let classificacao;

if (imc < 18.5) {
    classificacao = 'Abaixo do peso';
} else if (imc < 24.9) {
    classificacao = 'Peso normal';
} else if (imc < 29.9) {
    classificacao = 'Sobrepeso';
} else {
    classificacao = 'Obesidade';
}

console.log(classificacao);  