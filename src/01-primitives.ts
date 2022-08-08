/*
 * Примитивные типы
 *  - Объявление типа: number, string, boolean, null и undefined, any и object
 *  - Ошибки:
 *    - присвоение значения другого типа
 *    - переопределение значения
 *  - [type inference](https://www.typescriptlang.org/docs/handbook/type-inference.html)
 *  - Множественные типы с type composition
 */
// статическая типизация это когда в языках програмирования в переменную можно записать только оприделённый тип
//ts - это статический типилизатор который пока ты в разработки анализирует и показывает где у тебя могут быть проблемы

let age: number = 5; // записать можно только в переменную число
const name: string = "mango";

let value: any = 5; // записать можно  в переменную любой тип
value = "qweqwe";

// 💩 плохо описывает лучше так не делать 
let user: object;
user = {};

let id: string | number | boolean = 5; //вместо any лучше писать компазицию -> в это переменной может лежать любой из 3х типов
id = "sqwwqe";
id = true;

console.log(age, name, id, value, user);
export {};
