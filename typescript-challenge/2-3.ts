/**
 * 2.3 Types of TS part Two
 *
 * readonly type
 */

type Player2 = {
  readonly name: string;
  age?: number;
};

const numbers: readonly number[] = [1, 2, 3, 4];
const names: readonly string[] = ["1", "3"];
// numbers.push(4);

/**
 * Tuple
 *
 * 특정 위치에 순서대로 특정 타입이 있어야 함
 * 항상 정해진 갯수의 요소를 가져야 하는 array를 지정할 수 있음
 */

const player: readonly [string, number, boolean] = ["nico", 3, false];
// player[0] = 1;
// player[1] = "hi";

let A: undefined = undefined;
let B: null = null;
/**
 * Any
 *
 * typescript의 보호장치로부터 벗어나고 싶을 때 사용
 * 되도록 사용하는 것을 지양
 */
let C = [];

const anyArray: any[] = [1, 2, 3, 4];
const anyValue: any = true;
anyArray + anyValue;
