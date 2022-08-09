1. 다음 코드의 콘솔창 출력결과

```javascript
함수();

function 함수() {
  console.log(안녕);
  let 안녕 = "Hello!";
}
```

A. 에러
let, const는 Hoisting 시 undefined 자동으로 할당 안됨\
var만 Hoisting 시 undefined 할당 됨\
(temporal deadzone / uninitialized)

2. 다음 코드의 콘솔창 출력결과

```javascript
함수(); // "함수가 아닌데요" 에러

var 함수 = function () {
  console.log(안녕);
  var 안녕 = "Hello!";
};
```

A. 함수 is not a function 에러\
function 함수(){}: 전부가 Hoisting됨\
var 함수 = function(){}: 선언 부분만 Hoisting됨\

3.  다음 코드의 콘솔창 출력결과

```javascript
let a = 1;

var 함수 = function () {
  a = 2;
};
console.log(a);
```

A. 1
함수를 만들기만 했지 실행하지 않음

4. 다음 코드의 콘솔창 출력결과

```javascript
let a = 1;
var b = 2;
window.a = 3; // 전역에 할당
window.b = 4; // 재선언 b = 4

// a = 1, 전역보다 내 자신에 가까운 것이 우선순위 높음
console.log(a + b);
```

A. 5

5. 콘솔창에 1초에 한번씩 1부터 5까지 정수 출력

```javascript
// var i = 5;
for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}
```

A. 위 코드가 의도대로 동작하지 않는 이유는
console.log(i); 코드가 바로 실행되는 코드가 아님\
i값은 반복문이 다 실행되고 전역변수로 남아있음\
1~5초 후 로그 출력 코드를 실행하려고 i를 찾았을 때의 전역변수 i는 5\
따라서 var 대신 let을 사용

6. 버튼을 누르면 모달창 띄우기

```javascript
var buttons = document.querySelectAll("button");
var modals = document.querySelectAll("div");
for (let i = 0; i < 3; i++) {
  buttons[i].addEventListener("click", function () {
    modals[i].style.display = "block";
  });
}
```

A. 반복문이 도는 시점과 실행 시점이 다르기 때문에 에러 발생\
스타일 코드는 나중에 클릭이 발생했을 때 실행되기 때문\
반복문을 다 돌고 남은 전역변수 i = 3\
따라서 var 대신 let을 사용
