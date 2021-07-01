// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  // if(array.length <= 1) return array; // Compruebo si el array tiene un solo elemento y lo devuelvo, o si está vacío
    
  // let pivot = array[array.length -1]; // Defino mi pivot o punto de referencia
  // let left = [];  // Creo array para dividir en dos y pushear números menores al pivot
  // let right = []; // Creo array para dividir en dos y pushear números mayores al pivot

  // for(let i = 0; i < array.length - 1; i++){ // Recorro el array
  //   if(array[i] < pivot){ // Comparo cada elemento del array original con mi punto de referencia (pivot)
  //     left.push(array[i]);
  //   }else{
  //     right.push(array[i]);
  //   };
  // };
  // return [].concat(quickSort(left), pivot, quickSort(right)); // utilizo la función de manera recursiva, concateno y retorno
  //---------------------------------------------------------------------------------------------------------------------------
  if(array.length <= 1) return array; // Compruebo si mi array es vacío o si tiene un elemento para devolverlo
      
  let pivot = array[array.length -1]; // Creo mi punto de referencia (elegir pivote)
  let left = [];                      // Creo mi subarray para números menores a mi pivot
  let right = [];                     // Creo mi subarray para números mayores a mi pivot

  for(let i = 0; i < array.length - 1; i++){ // Recorro mi array
    array[i] < pivot ? left.push(array[i]) : right.push(array[i]) // Pusheo el valor de array[i] en el subarray que corresponda 
  };
  return [].concat(quickSort(left), pivot, quickSort(right)); // Utilizo la función recursiva con los subarray para luego 
                                                              // Concatenar y retornar el array ordenado
}

function mergeSort(array){
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length <= 1) return array;              // Compruebo si mi array es vacío o si tiene un elemento para devolverlo

  let medium = Math.floor(array.length / 2); // Divido en 2 el array (en números enteros(menor) para evitar problemas futuros)
  let left = array.slice(0, medium); // Devuelvo el subarray desde el inicio hasta la mitad (slice devuelve de la posición 0 hasta la deseada -1)
  let right = array.slice(medium); // Devuelvo el subarray desde la mitad hacia el final (slice devuelve de la posición medium en adelante)

  return merge(mergeSort(left), mergeSort(right)); // Retorno una función que me organice y concatene los subarrays (creada aparte)

  function merge(left, right){ // Creo la función aparte que me va a ayudar a concatenar y organizar mis subarrays
    let result = []; // Creo el array donde voy a pushear el resultado
    let leftIndex = 0; // Defino cursor para comparar con cada arreglo(posición el el array left)
    let rightIndex = 0; // Defino el otro cursor que me permite comparar los elementos del array(posición el el array right)
  
    while(leftIndex < left.length && rightIndex < right.length){// Itero mientras los marcadores sean menores al largo del arreglo
                                                                // Es decir mientras haya elementos
      if(left[leftIndex] < right[rightIndex]){ // Hago una comparación para definir a que subarray voy a pushear
        result.push(left[leftIndex]);
        leftIndex++; // Aumento índice
      }else{
        result.push(right[rightIndex]);
        rightIndex++; // Aumento índice
      }
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
    // Despues de hacer las comparaciones de manera recursiva concateno de izquierda a derecha (menor a mayor) y en ese mismo
    // Orden en caso de que queden elementos sueltos        
  }
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
