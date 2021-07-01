// ### Shapes

// * Crea un objeto llamado `shape` que tenga una propiedad `type` y un método `getType`.
// * Ahora defini una función `Triangle` cuyo prototipo sea `shape`. Los objetos creados con `Triangle` deberían tener tres propiedades: `a`, `b` y `c`. Que representan cada lado del triángulo. `type` debe ser `Triangle`.
// * Agregá un nuevo método al prototipo llamado `getPerimeter`.

// Probá tu solución con el siguiente código:

// ```javascript
// > var t = new Triangle(1, 2, 3);
// > t instanceof Triangle
// // true
// > Shape.prototype.isPrototypeOf(t);
// // true
// > t.getPerimeter();
// // 6
// > t.getType();
// // "Triangle"
// ```

// * Ahora creá un nuevo constructor que herede de `shape`, llamado `Circle`. Implementalo de tal modo que puedas calcular su perímetro en la función `getPerimeter`.

// Probá tu solución con el siguiente código:

// ```javascript
// > var c = new Circle(2);
// > c instanceof Circle
// // true
// > Shape.prototype.isPrototypeOf(c);
// // true
// > c.getPerimeter();
// // 12.566370614359172
// > c.getType();
// // "Circle"
// ```

// * Creá una última `shape` llamada `Square`.
// * Agregá el método `getArea` de todas las `shape`s.
