/**
 * polymorphism: many different forms
 *
 * 타입스크립트에서 함수는 string이나 object를 첫번째 파라미터로 가질 수 있다
 *
 * Generic: placeholder of type, 확실한 타입을 모를 때 사용
 */

function superPrint<V>(a: V[]) {
  return a[0];
}
// type SuperPrint = <T, M>(arr: T[], b?: M) => T;

// {
//     //   (arr: boolean[]): void;
//     //   (arr: string[]): void;
//     //   (arr: (number | boolean)[]): void;
//   };

// const superPrint: SuperPrint = (arr) => arr[0];

const a = superPrint<number>([1, 2, 3, 4]);

const b = superPrint([true, false, false]);

const c = superPrint(["a", "b", "c"]);

const d = superPrint([1, 2, true, false, "hello"]);

type genericPlayer<E> = {
  name: string;
  extraInfo: E;
};
type NickExtra = {
  favFood: string;
};

type NickPlayer = genericPlayer<NickExtra>;

const nick: NickPlayer = {
  name: "nick",
  extraInfo: {
    favFood: "kimchi",
  },
};

const l: genericPlayer<null> = {
  name: "lynn",
  extraInfo: null,
};

function printAllNumbers(arr: Array<number>) {}
