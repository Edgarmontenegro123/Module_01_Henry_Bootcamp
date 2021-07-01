// No cambies los nombres de las funciones.

function factorear(num){
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let divisor = 2; // Creo mi Variable que va a ser mi primer divisor ----> 1 paso
  let array = [1];                                                 // ----> 1 paso

  while(num > 1){                                                // ----> Función logarítmica
      if(num % divisor == 0){
          array.push(divisor);                                     // ----> 1 paso
          num /= divisor;                                          // ----> 1 paso
      } 
      else{
          divisor++;                                               // ----> 1 paso
      }
  }
  return array;                                                    // ----> 1 paso
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  //-----------------------------------------------------------------------------------------------------------------------
  // for(let i = 1; i < array.length; i++){ // Recorro los elementos desde array[1]
  //   for(let j = 0; j < array.length - 1; j++){ // Recorro elementos desde array[0]
  //     if(array[j] > array[i]){ //Comparo los valores adyascentes y en caso de que el primero sea mayor:
  //         let aux = array[j];  // Creo mi variable aux y la igualo al primer índice (la guardo temporalmente)
  //         array[j] = array[i]; // Reemplazo mi primer elemento por el menor
  //         array[i] = aux;      // Regreso mi valor guardado temporalmente el la variable aux 
  //     }
  //   }  // Vuelve a empezar el recorrido desde la segunda posición y así sucesivamente
  // }
  // return array;
  //-----------------------------------------------------------------------------------------------------------------------
  let swap = true;
  while(swap){ // Pequeña optimización ya que si el array está organizado while se da cuenta y for continua el ciclo
    swap = false;
    for(let i = 0; i < array.length - 1; i++){
      if(array[i] > array[i + 1]){
        let aux = array[i];           // Guardo mi primer valor a cambiar en una variable auxiliar
        array[i] = array[i + 1];      // Sobre escribo mi array[i] por el valor siguiente
        array[i + 1] = aux;           // Sobre escribo el valor de array[ i + 1] con el valor guardado en la variable aux
        swap = true;                  // Marcamos que hicimos un cambio para que el while vuelva a iniciar
      }
    }
  }
  return array;
}


function insertionSort(array){
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  //-----------------------------------------------------------------------------------------------------------------------
    for(let i = 1; i < array.length; i++){ // Recorro el array con el puntero i
      let j = i - 1;                       // Declaro un segundo puntero para comparar en una posición menor
      let aux = array[i];                  // Variable temporal para hacer swap
      while(j >= 0 && array[j] > aux){     // Mientras la posicion index de j sea >= 0, y el valor sea mayor que el aux entro al ciclo
        array[j + 1] = array[j];           // Reemplazo el valor
        j--;                               // recorro el ciclo con j hacia atrás para comparar con cada posición
      }
      array[j + 1] = aux;                  // Reemplazo el valor de mi aux para terminar de hacer el swap
    }
      return array;                          // retorno el resultado
}


function selectionSort(array){
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for(let i = 0; i < array.length - 1; i++){ // Recorremos nuestro ciclo
		let min = i;
		for(let j = i + 1; j < array.length; j++){
			if(array[j] < array[min]){ // Acá lo que busco comparar es si donde apunta j es menor a donde apunta el min  
				min = j;
			}
		}
    if(i !== min){
		let aux = array[i]
		array[i] = array[min];
		array[min] = aux;
    }
	}
	return array;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
