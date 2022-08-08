/**
 * Overloading
 * 외부 라이브러리 사용
 *
 * 오버로딩은 함수가 여러개의 call signature를 가지고 있을 때 발생
 */

type Add2 = {
  (a: number, b: number): number;
  (a: number, b: string): number;
};

const add2: Add2 = (a, b) => {
  if (typeof b === "string") return a;
  return a + b;
};

type Config = {
  path: string;
  state: object;
};
type Push = {
  (path: string): void;
  (config: Config): void;
};

const push: Push = (config) => {
  if (typeof config === "string") console.log(config);
  else console.log(config.path, config.state);
};

type Add3 = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
};

const add3: Add3 = (a, b, c?: number) => {
  if (c) return a + b + c;
  return a + b;
};
