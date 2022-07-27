/**
 * call signature
 *
 * 마우스를 올렸을때 보여지는 타입
 */
// function add(a: number, b: number) {
//   return a + b;
// }

const addArrow = (a: number, b: number) => a + b;

type Add = (a: number, b: number) => number;

const add: Add = (a, b) => a + b;
