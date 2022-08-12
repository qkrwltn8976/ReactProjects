## function

### 1. 함수의 default 파라미터

- 파라미터에서 연산 가능

```javascript
function 더하기(a, b = 3 * a) {
  // b 자리에 아무것도 안 넣을 경우 10을 넣어주세요
  console.log(a + b);
}

더하기(1); // 4
더하기(1, 2); // 3
더하기(); // NaN(Not a Number)
```

- 함수 가능

```javascript
function 임시함수() {
  return 10;
}
function 더하기(a, b = 임시함수()) {
  // b자리에 파라미터 안 넣었을 때만 발동
  // b 자리에 아무것도 안 넣을 경우 10을 넣어주세요
  console.log(a + b);
}

더하기(1); // 11
```

### 2. 함수의 argument

- arguments란?\
  모든 파라미터를 [] 안에 넣은 변수
- 모든 파라미터를 한꺼번에 다루고 싶을 경우

```javascript
// parameter
function 함수(a, b, c) {
  //   console.log(a + b + c); // argument
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments[2]);
  console.log(arguments[3]);
}

함수(1, 2, 3);
// 1
// 2
// 3
// undefined
```

입력한 파라미터를 전부 콘솔창에 출력해주는 함수

```javascript
function 함수(a, b, c) {
  for (var i = 0; i < arguments.lengtb; i++) {
    console.log(arguments[i]);
  }
}

함수(2, 3, 4);
```
