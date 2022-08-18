## getter & setter

자료를 꺼내는 법을 만들어서 꺼냄

### getter

- 함수를 만들어 object 데이터를 다루는 이유
  1. object 자료가 복잡할 때 이득
  2. object 자료 수정 시 편리
- 내년 age를 알고 싶음

```javascript
var 사람 = {
  name: "Park",,
  age: 30,
  nextAge() {
    return this.age + 1; // this == 사람 object
  },
  setAge(나이) {
    this.age = parseInt(나이); // 데이터 수정 전 미리 검사 가능, 안전장치 기능 개발 가능
  }
};

사람.age + 1; // 31
사람.nextAge(); // 31
사람.setAge(20); // 데이터 수정해주는 함수를 제작
```

### setter

1. 안전장치 기능 개발 가능
2. 데이터를 꺼내거나 수정할 때 편리 & 실수방지 & 관리 가능

### set/get 키워드

복잡한 소괄호 제거

```javascript
var 사람 = {
  name: "Park",,
  age: 30,
  get nextAge() {
    return this.age + 1; // this == 사람 object
  },
  set setAge(나이) {
    this.age = parseInt(나이); // 데이터 수정 전 미리 검사 가능, 안전장치 기능 개발 가능
  }
};

사람.setAge = '20';
사람.nextAge;  //  21
```

#### set/get 키워드

1. get 함수들(getter)

- return이 있어야 한다
- 파라미터 없어야 한다

2. set 함수들(setter)

- 파라미터가 1개 있어야 한다

### class에서 사용하는 get/set

- prototype 함수에도 get/set 사용 가능

```javascript
class 사람 {
  constructor() {
    this.name = "Park";
    this.age = 20;
  }
  get nextAge() {
    return this.age + 2;
  }
  set setAge(나이) {
    this.age = 나이;
  }
}

var 사람1 = new 사람();
사람1.nextAge; // 21
사람1.setAge = 200;
```
