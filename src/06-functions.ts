//  ХОРОШАЯ ПРАКТИКА ВЫНОСИТЬ ТИПЫ Ф-ЦИИ В type
/*
 * Функции
 *  - Типизация параметров и возвращаемого значения
 *  - Необязательные параметры
 *  - rest-параметры
 *  - Функция без явного возврата: тип void
 *  - Типизация подписи функции
 *    - черерз тип
 *    - через интерфейс
 *  - Типизация методов объекта в интерфейсе
 *    - ключ: () => тип; 
 *    - ключ() : тип;
 *  - Необязательные методы в интерфейсе
 */
//! параметры ф-ции нужно четко описывать они не инферяться по умолчания стоит any и это плохо

// const add Expression = function (x?: number, y: number): number{ //? -> не обязательный параметр
//   return x + y
// }

//можно использовать при описании interface код:23  перед названием ставить I - это не стандарт, а договорённость, но всё же лучше использовать type код:27
interface IAddFn {
  (a: number, b: number): number; // первый параметр: число, второй параметр: число : ф-ция возвращает: number
}

type AddFn = (a: number, b: number) => number;

const addExpression: IAddFn = function (x, y) {
  return x + y;
};

const addArrow: AddFn = (x, y) => {
  return x + y;
};

addExpression(2, 3);
addArrow(2, 3);

// если нужно протипизировать rest по умолчания записан как any и это плохо
// для удобства и лучной читабельности лучше создавать type
type Fn = (a: number, b: number, c: number, ...restParams: number[]) => number;

const fn: Fn = (a, b, c, ...restParams) => {
  return 5;
};

fn(1, 2, 3, 5, 6, 7, 5, 9);

//----------

type LogFn = (m: string) => number | void; // void- войд инферится когда ф-ция без возврата по умолчанию

const log: LogFn = (message) => {
  console.log(message);  //ф-ция которая ничего не возвращает 
};

log("hello");

enum PizzaSize {
  Small = "s",
  Medium = "m",
  Large = "l",
}

//описываем объект для этого нам нужен интерфейс
interface IPizza {
  size: PizzaSize.Small | PizzaSize.Medium | PizzaSize.Large; //размер из нескольких значений 
  toppings: string[]; // массив строк
//   logSize: () => void; // старый синтаксис
  logSize?(): void; //метод ничего не возвращает //? не обянательный метод
  getSize(): string; // метод вернет строку 
  addTopping(topping: string): void;
}

const pizza: IPizza = {
  size: PizzaSize.Small,
  toppings: ["sause", "mushrooms"],
  logSize() {
    console.log(this.size);
  },
  getSize() {
    return this.size;
  },
  addTopping(topping) {
    this.toppings.push(topping);
  },
};

console.log(pizza);
export {};
