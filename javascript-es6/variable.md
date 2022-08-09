## 변수

변수란? 자료를 임시로 저장하는 공간
변수 키워드: var, let, const

- 선언, 할당, 범위

1. var

- 재선언 O

```javascript
var 이름 = "Kim";
var 이름 = "Park"; // 재선언
var 이름;
var 이름;

let 이름 = "Kim";
```

- 재할당 O

```javascript
var 이름 = "Kim";
이름 = "Park"; // 재할당
```

- 범위
  function
  (변수는 존재 범위라는게 있음)

```javascript
function 함수() {
  // function 안에서만 존재
  var 이름 = "Kim";
  이름;
}

console.log(이름); // 이름 is not defined
```

2. let

- 재선언 X

```javascript
let 나이 = 20;
// let 나이 = 30; Identifier has already been declared
```

- 재할당 O

```javascript
let 이름 = "Kim";
이름 = "Park"; // 재할당
```

- 범위
  중괄호

```javascript
if (true) {
  let 이름 = "Park";
}
console.log(이름); // 이름 is not defined
```

3. const

- 재선언 X

```javascript
const 나이 = 20;
// const 나이 = 30; Identifier has already been declared
```

- 재할당 X
  단, const로 object를 만들었을 때 object 내부 값 변경해도 에러 안남

```javascript
"use strict";

const 이름 = "Kim";
// 이름 = "Park"; Assignment to constant variable
const 사람 = {
  이름: "Kim",
};

사람.이름 = "Park";

// 수정불가능한 오브젝트를 만들고 싶으면?
Object.freeze(사람);

// 사람.이름 = "Lee"; Cannot assign only property '이름' of object
```

- 범위
  중괄호

```javascript
if (true) {
  let a = 1;
  var b = 2;
  if (true) {
    let b = 3; // 생존 범위가 중괄호
  }
  console.log(b); // 2
}
```
