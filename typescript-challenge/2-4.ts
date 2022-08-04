/**
 * Types of TS part Three
 *
 * UnKnown
 * 변수의 타입을 미리 알지 못 할 때 사용
 */

let u: unknown;

// let b = a + 1;
if (typeof u === "number") {
  let b = u + 1;
}

if (typeof u === "string") {
  let b = u.toUpperCase();
}

/**
 * void
 * 비어있는 것
 * 아무것도 return하지 않는 함수를 대상으로 사용
 * void를 지정해줄 필요없음
 */

function hi() {
  console.log("x");
}

/**
 * never
 * 함수가 절대 return하지 않을 때 발생
 * ex) 함수에서 예외 발생하는 경우 사용
 * 타입이 두 가지일 수 있는 경우 사용
 */

function neverFuc1(): never {
  throw new Error("xxx");
}

function neverFuc2(name: string | number) {
  if (typeof name === "string") {
    name;
  } else if (typeof name === "number") {
    name;
  } else {
    name; // 타입이 정상적으로 들어오는 경우 이 코드는 절대 실행되서는 안됨
  }
}
