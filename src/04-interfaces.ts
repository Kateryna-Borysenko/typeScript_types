/*
 * Интерфейсы - используются для того чтобы описать объект
 *  - Конструкция `interface`
 *  - Необзательные поля с `key?: value`
 *  - readonly поля с `readonly key: value`
 *  - Ошибка при добавлении полей не существующих в интерфейсе
 * - Index signatures: объект произвольных свойств со значениями `[key: тип]: тип`
 * - Наследование интерфейсов с extends
 *  - [interface vs type](https://pawelgrzybek.com/typescript-interface-vs-type/)
 */


interface PluginConfig {
  readonly selector: string; //readonly - свойство которое можно только прочитать
  perPage?: number;
  startIndex?: number; //? для того что бы в объекте объявить не обязательное свойство
  draggable?: boolean;  
}

const config: PluginConfig = {
  selector: "#plugin-1",
  perPage: 2,
  startIndex: 0,
  draggable: false,
};

// console.log(config);

//для описания объекта с неизвестным кол-вом свойств, но явн задаными типами
interface Employees {
  [key: string]: number; //как будто вычисляемыми свойствами ключ это строка значения это числа
}

const employees: Employees = {
  mango: 5,
  poly: 10,
  ajax: 15,
  wiki: 20,
};

//----------------
//находим самого продуктивного работника 
//ts заинферил все типы при решении задачи и не понадобилось писать типы

const entries = Object.entries(employees);
let bestEmployeeName = "";
let bestEmployeeProIndex = 0;

for (const [name, value] of entries) {
  if (bestEmployeeProIndex <= value) {
    bestEmployeeName = name;
  }
}

console.log(bestEmployeeName);

export {};
