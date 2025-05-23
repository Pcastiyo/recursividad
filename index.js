'use strict'
// Las funciones nFactoria y nFibonacci deben resolverlas
// usando recursión. Una vez realizadas de esa forma pueden probar hacerlas
// de forma iterativa pero esto último no es obligatorio.

function nFactorial(n) {
  // devolvé el factorial de n (n!)
  // ej:
  // el factorial de 3 es 6 (3 * 2 * 1)
  //¿Qué es el factorial de un número?
//El factorial de un número entero positivo n (se escribe como n!) es el producto de todos los enteros positivos desde n hasta 1.
//El factorial de un número es simplemente multiplicar todos los números desde ese número hasta el 1.
//Si tienes el número 4, su factorial (se escribe 4!) es:
//4! = 4 × 3 × 2 × 1 = 24

if (n<=1){
  return n;
}else{
  return  n * nFactorial(n-1);
}
 


  
}

function nFibonacci(n) {
  // Secuencia de Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,…
  // Retorna el enésimo numero de la serie
  // nFibonacci(0) // 0  // el elemento 0 es cero
  // nFibonacci(1) // 1 // el elemento 1 es 1
  // nFibonacci(6) // 1 // el elemento 6 es 8

  //¿Qué es la Serie de Fibonacci?
//La serie de Fibonacci es una secuencia numérica donde cada número es la suma de los dos anteriores.
//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

if (n <=1){
  return n;
  }else{
    return nFibonacci(n-1)+ nFibonacci(n-2);
  }
}

// Para esta parte no es necesario utilizar recursión.
// Implementa la clase Queue que debe contener los siguientes métodos:
// enqueue: Agrega un valor a la queue. Respeta el orden existente.
// dequeue: Remueve un valor de la queue. Obedece a FIFO y respeta el underflow (devuelve undefined cuando la queue tiene size cero, o sea, cuando no tiene ningún elemento).
// size: Devuelve el número de elementos que contiene la queue.

class Queue {
  constructor() {
    this.data = [];
    this.count = 0;
  }

  enqueue (value){
    this.data.push(value);
    this.count++;
  }

  dequeue(){
    if(this.count === 0){
      return undefined;
    }
      this.count--;
      return this.data.shift();
    }
  size (){
    return this.count;
  } 
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Queue,
  nFactorial,
  nFibonacci
};
