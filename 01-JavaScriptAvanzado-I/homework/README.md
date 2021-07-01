
# Ejercicios

## JavaScript

### Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiguen cual es la diferencia entre declarar una variable con `var` y directamente asignarle un valor. => Con las palabras var, let o const estamos declarando las variables, sea de manera global o local, sin importar si les asignamos un valor, vacío null o undefined, mientras que si no utilizamos ninguna de estas palabras simplemente estamos asignando el valor a una variable, pero esto nos puede crear problemas al momento de la ejecución del código.

```javascript
x = 1;             
var a = 5;           
var b = 10;          
var c = function(a, b, c){
  var x = 10;
  console.log(x);          // => Imprime 10 (x = 10) está declarada antes del console.log().
  console.log(a);          // => Imprime 8 (Como no está declarada va a buscar afuera donde se reasigno el valor de c c(8.9.10)).
  var f = function(a, b, c){
    b = a;
    console.log(b);        // => Imprime 8 (Porque anterior al console.log se esta asignando su valor igual al de a (b = a)).
    b = c;
    var x = 5;
  }
  f(a,b,c);
  console.log(b);          // => Imprime 9 (Porque al reasignar los valores de f encuentra por referencia c(8,9,10), siendo b = 9.
}
c(8,9,10);

console.log(b);            // => Imprime  la variable b global = 10 es un parametro que recibe la función (es variable local).
console.log(x);            // => Imprime  la variable x global = 1 es una variable local de la función que contiene la variable c.
```

```javascript
console.log(bar);          // => Imprime undefined porque la función está declarada despues.
console.log(baz);          // => Me va a decir que la función no está definida, solo tiene asignado un valor.
foo();                     // => Llama a la función foo() e imprime Hola!.

function foo(){console.log('Hola!')}
var bar = 1;
baz = 2;
```

```javascript
var instructor = "Tony";                  
if(true){
    var instructor = "Franco";
}
console.log(instructor);                // => Imprime 'Franco' porque se declaró una variable del mismo nombre dentro de la función.
```

```javascript
var instructor = "Tony";
console.log(instructor);                // => Imprime 'Tony' declarado anteriormente.
(function(){
   if(true){
      var instructor = "Franco";
      console.log(instructor);          // => Imprime 'Franco' porque se declaró una variable del mismo nombre dentro de la función.
   }
})();
console.log(instructor);                // => Imprime 'Tony' que es la variable Global.
```
```javascript
var instructor = "Tony";
let pm = "Franco";
if (true){
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor);            // => 'The Flash' Por ser una variable local.
    console.log(pm);                    // => 'Reverse Flash' También es una variable local
}
console.log(instructor);                // => 'The Flash' (reasigna el valor de la variable local al ser declarada con var ya que su 
                                        // alcance es la función contenedora).
console.log(pm);                        // => 'Franco' (No reasigna su valor al ser declarada con let) let tiene scope en el statement,
                                        // es decir que cada let que está dentro de un statement ({}) tiene un valor a diferencia de var que se 'pisaría' su valor.
```
### Coerción de Datos

¿Qué crees que van dar estas operaciones?:

```javascript
6 / "3"             // => Castea el string a número y realiza la operación, 2.
"2" * "3"           // => Realiza la operación, 6.
4 + 5 + "px"        // => Realiza la primera operación y luego concatena con el string, 9px. 
"$" + 4 + 5         // => Concatena con el string todo, $45.
"4" - 2             // => Cambia el numero a string y realiza la operación, 2.
"4px" - 2           // => Declara el resultado como NaN (Not a Number).
7 / 0               // => Todo número divido entre 0 da como resultado Infinito.
{}[0]               // => Undefined (No se utiliza).
parseInt("09")      // => Convierte el string a número, 9.
5 && 2              // => Si los dos valores son verdaderos devuelve el segundo creo porque tiene que confirmar los dos valores, 2.
2 && 5              // => Si los dos valores son verdaderos devuelve el segundo, 5.
5 || 0              // => Devuelve el valor verdadero, 5.
0 || 5              // => Devuelve el valor verdadero, 5.
[3]+[3]-[10]        // => Concatena los dos primeros arrays (dando como resultado 33) y resta el tercero, 23. 
                    //  (porque al concatenar no hace la operacion???)
3>2>1               // => 3 > 2 = true, true = 1, 1 > 1? => expresion falsa, false .
[] == ![]           // => La primera expresión da como resultado 0, la segunda da como resultado falso, por ende al hacer comparación 
                    //  débil da como resultado true .
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output que vemos en consola luego de ejecutar este código? Explicar porque es así:

```javascript
function test() {
   console.log(a);          // => Devuelve undefined . La variable se eleva a la parte superior de la función pero su valor es
                            // undefined .
   console.log(foo());      // => Devuelve 2 porque en las funciones se incluye la declaración de la función, pero no las expresiones.

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
```

Y el de este:

```javascript
var snack = 'Meow Mix';             // => Está declarada fuera de la función

function getFood(food){
    if(food){
        var snack = 'Friskies';
        return snack;
    }
    return snack;                   // => no se encuentra asignada dentro de la función.
}

getFood(false);                     // => Al ser false no se cumple la condición del if . 
```


### This

¿Cuál es el output que vemos en consola luego de ejecutar esté código? Explicar porqué es así:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function(){
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname());      // => Imprime 'Aurelio De Rosa', ya que dentro del objeto entra a la propiedad prop que a su
                                          // vez tiene la función getFullName que retorna fullName.

var test = obj.prop.getFullname;          
                                          

console.log(test());                      // => Devuelve undefined porque el método getFullName no existe en la variable global.
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden del ouput? ¿Por qué?

```javascript
function printing(){
   console.log(1);                                     // => Primero por secuencia.
   setTimeout(function(){console.log(2)}, 1000);   // => Cuarto porque es el ultimo que entró en el callback queue.
   setTimeout(function(){console.log(3)}, 0);      // => Tercero porque entra primero al callback queue
   console.log(4);                                     // => Segundo por secuencia.
}

printing();
```
