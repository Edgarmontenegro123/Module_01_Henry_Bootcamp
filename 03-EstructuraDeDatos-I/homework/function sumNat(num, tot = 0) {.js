function sumNat(num, tot = 0) {
    if (num <= 0) return tot;
    tot += num;
  
    return sumNat(num -1, tot)
    }
    console.log(sumNat(3))


    function naturales(num) {
        if (num === 0) 
          return true; 
         if (num < 0)
         return false;
         return naturales(num - 1);
      }
      console.log(naturales(0.9))

     // Algoritmo de Euclides


     /*Diseñad un método recursivo que escriba al# evés la cadena que se le 
pasa como parámetro, más un índice que se usará para recorrer la 
cadena.
Dicho método será de la forma:
1 public(void(printReversed(String(text,(int(index)({
2 ((¿?
3 }
Haced dos versiones del mismo, una en la que el índice vaya 
incrementándose a cada llamada y otra en la éste que vaya 
decrementándose. En los dos casos implementad la función que# lama a 
la función recursiva diseñada, es decir:
4 public(void(printReversed(String(text)({
5 ((printReversed(text,(¿?);
6 }
Nota: No vale invertir la cadena y luego escribirla*/

2

function invertirPalabra(str){
 if (str === '') {
   return str;
 }
 return invertirPalabra(str.substring(1)) + str.charAt(0);
}

console.log(invertirPalabra('Edgar tiene motivación de sobra!'))