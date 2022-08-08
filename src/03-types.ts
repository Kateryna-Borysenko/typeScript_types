/*
 * Кастомные типы с Type
 * - Идентификатор c type composition
 * - Состояние с union
 */
//объявляется тип -> говорим что там будет лежать (ID это алиос - псевдоним для такого типа)
type ID = number | string; //в тайпе id может лежать композиция типов или string или number

const userId: ID = 5555;
const postId: ID = "f7ln24m91z";

type Coords = [number, number]; //!важно писать тип с большой буквы

const coords: Coords = [50.4501, 30.5234];

type ReqStatus = "request" | "success" | "error"; //это юниан когда у переменной может быть одно из нескольких конкретных значениий

const requestStatus: ReqStatus = "success";

type CellSize = 2 | 4 | 8 | 16;

const cell: CellSize = 4;

console.log(userId, postId, coords);
export {};
