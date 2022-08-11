## Spread Operator

### Spread Operator의 용도

1. Array에 붙이면 대괄호 제거
   Object에 붙이면 중괄호 제거

- 항상 중괄호, 대괄호, 소괄호 안에서만 사용!

```javascript
var 어레이 = ["hello", "world"];
console.log(...어레이); // hello world
console.log("hello", "world");
```

2. 문자에 붙이면 펼쳐줌
   문자도 array처럼 인덱싱 가능

```javascript
var 문자 = "hello";
console.log(...문자); // h e l l o
console.log("h", "e", "l", "l", "o");
```

### Spread Operator의 활용

1. Array 합치기 / Deep Copy

- 합치기

```javascript
var a = [1, 2, 3];
var b = [4, 5];
var c = [...a];

console.log([...a, ...b]); // [1, 2, 3, 4, 5]
```

- Array "deep copy"할 때 유용

```javascript
var a = [1, 2, 3];
var b = a; // reference data type(Array, Object)를 등호로 복사하면 값을 공유
a[3] = 4;

console.log(a); // [1, 2, 3, 4]
console.log(b); // [1, 2, 3, 4]

var c = [...a]; // Spread Operator를 이용하여 Array, Object 각각 독립적인 값을 가지도록 복사
c[3] = 4;
```

2. Object 합치기 / Deep Copy

```javascript
var o1 = { a: 1, b: 2 };
var o2 = { ...o1, c: 3 };
console.log(o2); // {a : 1, b : 2, c : 3}
```

- 복사하다가 값 중복이 일어나면?
  가장 뒤에 있는 값을 적용

```javascript
var o1 = { a: 1, b: 2 };
var o2 = { a: 2, ...o1 };
console.log(o2); // {a : 1, b : 2}

var o3 = { ...o1, a: 2 }; // {a : 2, b : 2}
```

4. 함수 파라미터 넣을 때

```javascript
function 더하기(a, b, c) {
  console.log(a + b + c);
}

var 어레이 = [10, 20, 30];
더하기(어레이[0], 어레이[1], 어레이[2]);
더하기.apply(undefined, 어레이); // 더하기() 함수 실행됨, 파라미터로 array 집어넣기 가능
더하기(...어레이);
```

## Apply 함수

함수를 옮겨와서 실행해주세요

```javascript
var person = {
  인사: function () {
    // 너무 멋있게 잘만든 인사라는 함수
    console.log(this.name + "안녕");
  },
};

var person2 = {
  name: "손흥민", // 그래서 person2에도 적용하고 싶음
};

person.인사(); // undefined
person.인사.apply(person2); // 손흥민안녕
```

## Call 함수

apply와 비슷하지만 apply는 파라미터를 array 형태로 집어넣고 call은 아님

```javascript
var person = {
  인사: function () {
    // 너무 멋있게 잘만든 인사라는 함수
    console.log(this.name + "안녕");
  },
};

var person2 = {
  name: "손흥민", // 그래서 person2에도 적용하고 싶음
};

person.인사(); // undefined
person.인사.apply(person2, [1, 2]);
person.인사.call(person2, 1); // 손흥민안녕
```
