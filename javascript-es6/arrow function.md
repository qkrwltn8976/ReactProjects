## arrow function

function 키워드 대신 => ES6 Arrow function을 이용해 함수 생성 가능

```javascript
var 함수 = (a) => a + 10; // 입출력 기계
함수(5);
```

### 함수를 만드는 경우

1. 코드들을 기능으로 묶고 싶을 때 사용
2. 입출력 기계를 만들고 싶을 때 사용

### Arrow function 장점

1. 입출력 기계를 만들 때 보기 쉬움
2. 파라미터 1개면 소괄호 생략 가능
3. 코드 한줄이면 중괄호도 생략 가능

### Arrow function 예시

1. forEach 콜백함수

```javascript
[1, 2, 3, 4].forEach((a) =>
  console.log(a);
);
```

2. 이벤트리스터

```javascript
document.getElementById("버튼").addEventListener("click", (e) => {
  // 바깥에 있던 this값을 내부에서 그대로 사용(함수 내의 this값을 변경시키지 않음)
  this; // window (일반 이벤트리스너에선 this === e.currentTarget)
});
```

3. Object안의 함수

```javascript
var 오브젝트 = {
  함수: () => {
    return this; // window
  },
};

오브젝트.함수();
```
