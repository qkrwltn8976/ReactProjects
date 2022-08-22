## symbol

### symbol 사용법

Symbol('설명')

```javascript
var 심볼 = Symbol("설명");
```

### symbol의 용도

- object 자료형의 비밀스러운 key값
- Symbol은 enumerable이기 때문에 반복문에서 출력안됨

```javascript
var weight = Symbol("내 시크릿 몸무게");

var person = { name: "Kim" };

person.weight = 100; // 데이터가 노출됨
person[weight] = 200;
console.log(person); //{name: 'Kim', weight: 100, Symbol(내 시크릿 몸무게임)}

for (var key in person) {
  // 반복문에서 Symbol 출력  안됨
  console.log(person[key]);
}
```

```javascript
var height = Symbol("내 키");
var person = { name: "Kim", [height]: 160 };

console.log(person); //{name: 'Kim', Symbol(내 키)}}

for (var key in person) {
  // 반복문에서 Symbol 출력  안됨
  console.log(person[key]);
}
```

- import 해온 파일/라이브러리 쓸 때 기존의 object에 자료를 추가하고 싶다면
  - 반복문에도 뜨지 않기 때문에 기존 코드 해칠 염려 없음

### Symbol의 특징

1. 설명이 같다고 같은 Symbol이 아님

- Symbol을 만들때 마다 유니크한 Symbol이 생김

```javascript
var a = Symbol("설명1");
var b = Symbol("설명1");
a === b; // false
```

2. Symbol.for()

- 전역 변수 같은 전역 Symbol
- 같은 설명을 가지고 있는 심볼이 위에 있으면 기존 심볼을 복붙해줌

```javascript
var a = Symbol.for("설명1");
var b = Symbol.for("설명1");
a === b; // true
```

3. 기본 내장 Symbol들

```javascript
var 어레이 = [2, 3, 4];
어레이[Symbol.iterator]; // array에 집어넣는 기본 Symbol
```
