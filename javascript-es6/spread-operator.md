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

1. Array 합치기

```javascript
var a = [1, 2, 3];
var b = [4, 5];
var c = [...a];

console.log([...a, ...b]); // [1, 2, 3, 4, 5]
```

2. Array "deep copy"할 때 유용

```javascript
var a = [1, 2, 3];
var b = a; // reference data type(Array, Object)를 등호로 복사하면 값을 공유
a[3] = 4;

console.log(a); // [1, 2, 3, 4]
console.log(b); // [1, 2, 3, 4]

var c = [...a]; // Spread Operator를 이용하여 Array, Object 각각 독립적인 값을 가지도록 복사
c[3] = 4;
```

3. Object 합치기 / Deep Copy

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
