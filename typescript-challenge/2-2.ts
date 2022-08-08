/**
 * 2.2 Types of TS part One
 *
 * 변수 선언 시에 명시적으로 타입을 설정해주는 것보다
 * 가능한 Typescript가 자동으로 타입을 추론하게 하는 것이 좋음
 */

type Player = {
  name: string;
  age?: number; // number | undefined
};

const nico: Player = {
  name: "nico",
};

const lynn: Player = {
  name: "lynn",
  age: 20,
};

function playerMaker(name: string): Player {
  return {
    name,
  };
}

const playerMaker2 = (name: string): Player => {
  return {
    name,
  };
};

const tom = playerMaker("tom");
tom.age = 12;
