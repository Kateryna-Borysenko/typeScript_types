/*
 * Enum (перечесление)
 *  - Перечисление размеров пиццы
 *  - Дефолтные значения
 *  - Кастомные значения
 */

enum PizzaSize {
  Small = "s",
  Medium = "m",
  Large = "l",
}

console.log(PizzaSize.Small);

//скампелируется в js

// let PizzaSize;
// (function (PizzaSize) {
//     PizzaSize["Small"] = "s";
//     PizzaSize["Medium"] = "m";
//     PizzaSize["Large"] = "l";
// })(PizzaSize || (PizzaSize = {}));


export {};
