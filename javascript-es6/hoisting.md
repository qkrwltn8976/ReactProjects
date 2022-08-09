## Hoisting

### 변수의 Hoisting 현상이란?

변수의 선언을 변수 범위 맨위로 끌고오는 현상\
변수를 만나면 선언 부분을 강제로 맨위로 끌어올림

```javascript
// 아직 변수 선언이 안되어 있어 error: 변수 '나이' is not defined
console.log(나이); // undefined -> 선언만 하고 할당을 하지 않은 변수에 들어가는 자료형
var 나이 = 30;
console.log(나이); // 30
```

- 변수 동시에 여러개 만들기

```javascript
var 나이 = 20,
  이름 = "ㅁ",
  성별;
```

## 전역변수

### 전역변수란?

모든 곳에서 쓸 수 있는 변수

```javascript
var 나이 = 20; // 전역변수
function 함수() {
  var 이름 = "kim"; // 지역변수
  console.log(나이); // 바깥에 있는 변수는 안에서 사용 가능
}
함수();
```

### window로 전역변수 만들기

- window는 자바스크립트 기본 함수를 담은 "오브젝트"

```javascript
var 나이 = 20;
window.이름 = "김"; // 권장

console.log(이름);
console.log(window.이름);
```

- 함수선언도 Hoisting 발생
