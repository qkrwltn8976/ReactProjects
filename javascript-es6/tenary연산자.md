## ? 연산자

### optional chaining

- ?. 왼쪽이 null, undefined면 점 안 찍어주고 undefined 남겨줌
- 중첩된 object 자료에서 자료 뽑을 때 reference 에러없이 안전하게 뽑을 수 있음
- 점 2개 이상일 경우 에러 발생 방지

```javascript
var user = {
  name: "Kim",
  //   age: { value: 20 },
};

console.log(user?.age?.value); // ? 왼쪽이 비어있으면 오른쪽 실행 X
```

### ?? nullish coalescing 연산자

- 데이터 할당 전에 대신 보여줌

```javascript
var user = {
  name: "Kim",
};

console.log(user ?? "로딩중");
```
