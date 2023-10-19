// Implementa la clase LinkedList
// tiene métodos `add`, `remove`, y `search`
// add: Agrega un nuevo nodo en el final de la lista
// Ej:      Head --> null
// add(1):  Head --> 1 --> null
// add(2):  Head --> 1 --> 2 --> null
// remove:  Elimina el último nodo de la lista y devuelve su valor. (Tener en cuenta el caso particular 
// de una lista de un solo nodo y de una lista vacía)
// Ej:         Head --> 1
// remove():   Head --> null y devuelve 1
// search: Busca un valor dentro de la lista. Puede recibir un valor o una función. Si no hubiera resultados, 
// devuelve null.
function LinkedList(){
  this._length = 0;
  this.head = null;
  }
   
function Node(value){
  this.value = value;
  this.next = null;
  this.previous = null;
}

// Creamos la función ADD del constructor

LinkedList.prototype.add = function(value){
  let node = new Node(value);
  let current = this.head;

// Comprobamos si la lista está vacía

  if(!current){ 
      this.head = node;
      this._length++;
      return node;
  }

// Si la lista posee elementos, la recorremos hasta llegar al último nodo
  while(current.next){ 
      current = current.next;
  }
  current.next = node; 
  this._length++;
  return node;
};

// Creamos la función REMOVE del constructor

LinkedList.prototype.remove = function(){
  let current = this.head;

  if(this._length < 1){
    return null;
  }

// Como tengo mi propiedad _length puedo obtener la longitud de la lista

  for(let i = 1; i < this._length; i++){ // ---> Es lo mismo que ---> for(let i = 0; i < this._length - 1; i++)   
    current = current.next
  }

  let value = current.value;
  current.next = null;
  this._length--;
  
  if(this._length === 0){
    this.head = null;
  }
  return value;
}

// Creamos la función SEARCH del constructor

LinkedList.prototype.search = function(value){
// Comprobamos que la lista no está vacía
if(this._length < 1){
  return null;
}

let current = this.head;
let nodeValue = null;

if(typeof value == 'function'){
  for(let i = 0; i < this._length; i++){
    if(value(current.value)){
      nodeValue = current.value;
      break;
    }
    current = current.next;
  }
}
else{
    for(let i = 0; i < this._length; i++){
      if(current.value === value){
        nodeValue = value;
        break;
      }
      current = current.next;
    }
  }
  return nodeValue;
}



// Hash Table( ver información en: https://es.wikipedia.org/wiki/Tabla_hash) 
// Una Hash table contiene un arreglo de "contenedores" o buckets donde puede guardar información. 
// Para este ejercicio, generar 35 buckets para la Hash Table, y realizar los métodos, get, hasKey 
// Para almacenar un valor asociado a una key (string): 
//    - Se pasa ese valor a la función hash(Pista: usar la función charCodeAt), que determina la posición en que debe ir en el arreglo.  
//    - Luego el elemento se inserta(llamando al método set) en la posición(índice) devuelta.  
// Para buscar el valor por su key: 
//    - Solo habrá que pasarle a la función hash la clave del elemento a buscar y esta determinará la posición
//      en que se encuentra. 
//    - Usar el número obtenido, para buscar(llamando al método get) el contenedor o bucket donde está el valor. 
//    - Retornar dicho valor.

// Hash Table
// Una hash table contiene un arreglo de "contenedores" donde puede guardar información.
// Para guardar un valor asociado a una key (string):
//    - Correr la key a través de una función hash para transformarla a un número entero.
//    - Usar ese número como índice para ver en cuál contenedor guardarás el valor.
//      Para buscar el valor por su key:
//    - Correr la key por la función hash para conseguir el número.
//    - Usar el número para buscar el contenedor donde está el valor.
//    - Devolver el valor.

// function HashTable() {

  // this.containers = new Array(35);
  // this.numBuckets = this.containers.length;

// };
//------------- FUNCIÓN HASH --------------------

// HashTable.prototype.hash = function(key){  
// //paso a un array cada elemento / retorno el valor ASCII de cada elemento / sumo todos los valores
//   return key.split('').map(e => e.charCodeAt(0)).reduce((a, b) => a + b) % 35;
// };

// ------------- FUNCIÓN isString ----------------
// HashTable.prototype.isString = function(key){
//   if(typeof key !== 'string'){
//     throw new TypeError('Keys must be strings');
//   };
//   return 
// };

// ------------- FUNCIÓN SET ----------------------
// recibe una key y un value

// HashTable.prototype.set = function(key, value){
//   this.isString(key)
//   let hash = this.hash(key);
//   let obj = {};
//   obj[key] = value;
  
//   if(!this.containers[hash]){
//     this.containers[hash] = obj;
//   }
//   else this.containers[hash][key] = value;
// };

// --------------- FUNCIÓN GET --------------------

// HashTable.prototype.get = function (key){
//   this.isString(key)
//   let hash = this.hash(key);
//   return this.containers[hash][key];
// };

// --------------- FUNCIÓN HASKEY ----------------

// HashTable.prototype.hasKey = function(key){
//   return this.containers[this.hash(key)][key] ? true : false;
// }
//----------------------------------------------------------------
function HashTable() {

  this.numBuckets = 35;
  this.memoria = [];
  this.hash = function(key){
    let sum = 0;
    for(let i = 0; i < key.length; i++){
      sum = sum + key[i].charCodeAt(0);
    }
    return sum % this.numBuckets;
  }
}

HashTable.prototype.set = function set(key, value){
  if(typeof key !== 'string'){
    throw new TypeError('Key must be strings');
  }
  let position = this.hash(key);
  if(this.memoria[position] === undefined){
     this.memoria[position] = {};
  }
     this.memoria[position][key] = value;
};

HashTable.prototype.get = function get(key){
  let position = this.hash(key);
  return this.memoria[position][key];
};

HashTable.prototype.hasKey = function hasKey(key){
  let position = this.hash(key);
  return this.memoria[position].hasOwnProperty(key)
};
// No modifiquen nada debajo de esta linea
// ------------------------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable
};
