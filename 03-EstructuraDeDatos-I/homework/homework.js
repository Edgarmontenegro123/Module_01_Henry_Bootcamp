// resolve estos ejercicios usando recursión

function nFactorial(n){
  // devuelve el factorial de n (n!)
  // ej:
  // el factorial de 3 es 6 (3 * 2 * 1)

  //   function nFactorial(n) {
  //     if (n > -1 && n < 2) {
  //         return 1;
  //     }
  //     else if (n < 0) {
  //         return 0;
  //     }
  //         else {
  //      return n * nFactorial(n - 1)
  //     }
  //   }

  if(n === 0){
    return 1;
  }
  else{
    return n * nFactorial(n - 1);
  }

  // if (n < 0) return 'Error';
  // else if (n === 0) return 1;
  
  //caso de corte
  // if(n < 0) return 'error';
  // if(n === 0 || n === 1) {
  //   return 1; 
  // }
  // // recursión
  // return n * nFactorial(n - 1);
}
const result = nFactorial(5);
console.log(result);

function nFibonacci(n){
  // Secuencia de Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,…
  // Retorna el enésimo número de la serie
  // nFibonacci(0) // 0  // el elemento 0 es cero
  // nFibonacci(1) // 1 // el elemento 1 es 1
  // nFibonacci(6) // 1 // el elemento 6 es 8
  if(n <= 1){
    return n;
  }
  else{
    return(nFibonacci(n - 1) + nFibonacci(n - 2));
  }
}

const result2 = nFibonacci(6)
console.log(result2)

// Implementa la clase Queue
// enqueue:   Agrega un valor a la queue.   Respeta el orden existente.
// dequeue:   Remueve un valor de la queue.   Obedece a FIFO y respeta el underflow (devuelve undefined cuando la queue tiene size cero,
// o sea, cuando no tiene ningún elemento).
// size:   Devuelve el número de elementos que contiene la queue.

// function Queue() {
  
//   this.queue = [];
//   this.enqueue = enqueue;
//   this.dequeue = dequeue;
//   this.size = size;

// function enqueue (element) {
//   this.queue.push(element);
//   return this.queue;
//   }
//   function dequeue () {
//   return this.queue.shift();
//       }
//   function size () {
//     return this.queue.length;
//   }
// }
function Queue(){
  this.queue = [];
}

Queue.prototype.enqueue = function(value){
  console.log(value)
  return this.queue.push(value);
}

Queue.prototype.dequeue = function(){
  return this.queue.shift();
}

Queue.prototype.size = function(){
  return this.queue.length;
}

const queue = new Queue()

console.log(queue.enqueue('Edgar'));
console.log(queue.enqueue('Vivi'));
console.log(queue.enqueue('Emilia y Miranda'));
console.log('Result: ', queue)
console.log(queue.dequeue());
console.log(queue.size());
console.log('Result: ', queue)


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Queue,
  nFactorial,
  nFibonacci
};
