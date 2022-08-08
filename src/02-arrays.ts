/*
 * Массивы
 
 *  - Нотации `тип[]` и `Array<тип>`
 const temps:number[] = [30, 31, 27, 28, 32];
  const temps:Array<number>[] = [30, 31, 27, 28, 32]; - джинерики
  
 *  - `(тип | тип)[]`
 можно записать если несколько типов, но обычно так не делают тк массив это коллекция однотипных данных
 const temps1: (number | string )[] = [30, 31, 27, 28, 32, 'test1'];
 
 *  - `readonly` и `ReadonlyArray<тип>`
 const temps:number[] = [30, 31, 27, 28, 32];
 
 *  - Tuple `[тип, тип]`, например массив координат
 */



const temps: readonly number[] = [30, 31, 27, 28, 32]; //readonly - ключевое слово ке делает массив только для чтения

// temps.push(5);

const coords: [number, number] = [50.4501, 30.5234]; //когда массив с переменными в определённой последовательности -> массив из двух переменных каждая из которых явл числом
const rgb: [number, number, number] = [255, 0, 100];

console.log(temps, coords, rgb);

export {};
