/*Função dentro do ForEach
======================================*/

// Criar um array de números
var numeros = [1,2,3,4,5];

// Criar uma variável inicial para soma
var soma = 0;

// iterar sobre o array, incrementando a soma
numeros.forEach(function(numero) {
// soma = soma + numero; é igual a soma += numero;
	soma += numero;
});

// imprimir a soma
console.log(soma);
