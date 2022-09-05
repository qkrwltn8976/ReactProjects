## Promise

### Promise의 특징

- 콜백함수 만드는 것과 유사하지만 기능이 더 많음
- 옆으로 길어지지 않음
- 실패할 경우에도 코드 실행 가능

### Promise란?

- 성공/실패 판정 기계

```javascript
var 프로미스 = new Promise(function(성공, 실패) [
    성공(); // 성공판정 내림
    실패(); // 실패 판정 내림
]); // == 성공/실패 판정 기계

프로미스
  .then(function () {
    // 프로미스가 성공일 경우 실행할 코드
  })
  .catch(function () {
    // 실패할 경우에 실행할 코드
  })
  .finally(function () {
    // 성공이던 실패던 무언가 일어났을 때 실행할 코드
  });
```

### Promise 디자인 하는 법

- 어려운 연산이 끝나면 특정 코드를 싱행하고 싶음

```javascript
var 프로미스 = new Promise(function(성공, 실패) [
    var 어려운연산 = 1 + 1; // 1+1 연산이 끝나면 성공() 판정을 내려주세요
    성공(어려운연산); // 파라미터가 then 람수까지 전해짐
]);

프로미스
  .then(function (결과) {
    console.log(결과, ", 성공했어요"); // 2, 성공했어요
  })
  .catch(function () {
    console.log("실패했어요");
  })

```

- 1초 후에 성공하는 Promise, 그리고 성공 시 특정 코드를 실행하고 싶음

```javascript
var 프로미스 = new Promise(function(성공, 실패) [
   setTimeout(function() {
    성공();
   }, 1000);
]);

프로미스
  .then(function (결과) {
    console.log("성공했어요");
  })
  .catch(function () {
    console.log("실패했어요");
  })

```

### Promise의 장점

1. 콜백 대신 예쁜 코드
2. 성공/실패의 경우에 맞춰 각각 다른 코드 실행 가능

### Promise의 3가지 상태

1. 판정 대기중이면 <pending>
2. 성공하면 <resolved>
3. 실패하면 <rejected>

### Promise에 대한 오해

- 비동기적 처리가 가능하게 바꿔주는 마법의 문법이 아님
- 콜백함수 디자인의 대체품일 뿐

### Promise가 적용된 곳

1. jQuery.ajax()

```javascript
$.ajax()
  .done(function () {})
  .fail();
```

2. fetch()

```javascript
fetch().then().catch();
```

## Promise 연습문제

1. <img> 이미지 로딩 성공시 특정 코드를 실행하고 싶습니다.

```javascript
var 이미지로딩 = new Promise(function (resolve, reject) {
  var img = document.querySelector("#test");
  img.addEventListener("load", function () {
    resolve();
  });

  img.addEventListener("error", function () {
    reject();
  });
});

이미지로딩
  .then(function () {
    console.log("로딩성공");
  })
  .catch(function () {
    console.log("로딩실패");
  });
```

2. Ajax 요청이 성공하면 무언가 코드를 실행하고 싶습니다.

```javascript
var ajax요청 = new Promise(function (resolve, reject) {
  $.get("https://codingapple1.github.io/hello.txt").done(function (결과) {
    resolve(결과);
  });
});

ajax요청.then(function (결과) {
  console.log(결과);
});
```

3. Promise chaining

- hello.txt GET 요청
- 그게 완료되면 hello2.txt GET 요청
- 그게 완료되면 hello2.txt 결과를 콘솔창에 출력

```javascript
var ajax요청 = ajax해주는함수("https://codingapple1.github.io/hello.txt");

ajax요청
  .then(function (결과) {
    console.log(결과);
    return ajax해주는함수("https://codingapple1.github.io/hello2.txt");
  })
  .then(function (결과) {
    console.log(결과);
  });

function ajax해주는함수(URL) {
  return new Promise(function (resolve, reject) {
    $.get(URL).done(function (결과) {
      resolve(결과);
    });
  });
}
```
