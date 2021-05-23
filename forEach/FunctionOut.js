/*Função fora do ForEach
======================================*/

// Criar um array de números
var numeros = [1,2,3,4,5];

// Criar uma variável inicial para soma
var soma = 0;

// Criar uma função para somar os números
function somar(numero){
  soma += numero;
}

// iterar sobre o array, utilizando a função somar
numeros.forEach(somar);


