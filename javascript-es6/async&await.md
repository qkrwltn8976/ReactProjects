## async & await

### async

- async를 function 앞에 붙이면 함수 실행 후에 Promise 오브젝트가 남음
- 성공만 가능
- 프로미스 연산 결과는 변수에 저장 가능

```javascript
async function 더하기() {
  return 1 + 1;
}

더하기().then(function (결과) {
  console.log(결과);
});
```

- async로 실패 경우를 만들고 싶은 경우

```javascript
async function 더하기() {
  return Promise.reject("실패임");
}
```

### await

- async function 안에서 쓰는 await는 then 대신 사용 가능
- 프로미스가 해결될 때까지 기다림

```javascript
async function 더하기() {
  var 프로미스 = new Promise(function (성공, 실패) {
    var 힘든연산 = 1 + 1;
    성공(힘든연산);
  });

  var 결과 = await 프로미스;
  console.log(결과);
  //   프로미스.then(function () {
  //     console.log("성공했어요");
  //   });
}

더하기();
```

- await는 프로미스 실패 시 에러나고 멈춤
- 방지하기 위해 try{} catch{} 사용

```javascript
async function 더하기() {
  var 프로미스 = new Promise(function (성공, 실패) {
    var 힘든연산 = 1 + 1;
    실패(힘든연산);
  });

  try {
    //이걸해보고에러나면;
    var 결과 = await 프로미스; // error
    console.log(결과);
  } catch {
    //이걸실행해주세요;
    console.log("프로미스 연산이 잘 안되었군요");
  }
}

더하기();
```

### 예제

- <button>을 누르면 성공 판정하는 Promise & 성공 시 '성공했어요'를 출력

```javascript
<button id="button"></button>;
async function 버튼클릭() {
  var 프로미스 = new Promise(function (성공, 실패) {
    document.getElementById("button").addEventListener("click", function () {
      성공("성공했어요");
    });
  });

  var 결과 = await 프로미스;
  console.log(결과);
}

버튼클릭();
```
