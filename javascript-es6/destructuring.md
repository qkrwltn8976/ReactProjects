## destructuring

### array destructuring

- 패턴매칭
- 직관적으로 변수 만들 수 있음

```javascript
// var arr = [2, 3, 4]; // array 안에 있는 변수를 전부 꺼내 변수에 담고싶은 경우

var [a, b, c] = [2, 3, 4]; // 모양만 맞춰 변수를 선언하면 변수 생김
```

- array destructuring 할 떄 몇 개를 빼먹는다면
  : 등호로 기본값 지정 가능

```javascript
var [a, b, c = 10] = [2, 3];
```

### object destructuring

Object 데이터를 꺼내 변수에 담으려면

- 변수명을 key명과 똑같이 써야함
- 기본값 지정 가능

```javascript
// var obj = { name: "kim", age: 30 };
// var name = obj.name;
// var age = obj.age;

var { name, age } = { name: "kim", age: 30 };

var { name, age = 10 } = { name: "park" };
```

- 다른 변수를 사용하고 싶은 경우

```javascript
var { name: 나이 = "park" } = { name: "kim" };
```

- 변수들을 object에 집어넣고 싶은 경우

```javascript
var name = "Kim";
var age = 30;
var obj = { name: name, age: age };
var obj = { name, age };
```

- 함수 파라미터 만들 떄도 destructuring 문법 사용 가능

1. object 데이터들을 파라미터로 사용하고 싶은 경우

```javascript
var obj = { name: "kim", age: 30 };

function 함수({ name, age }) {
  console.log(name); // "kim"
  console.log(age); // 30
}

함수(obj);
```

2. array 데이터들을 파라미터로 사용하고 싶은 경우

```javascript
function 함수([name, age]  }) {
  console.log(name); // "kim"
  console.log(age); // 30
}

함수([1,2]);
```

### 연습문제

1. 각각 변수에 들어가는 값은?

```javascript
var [number, address] = [30, "seoul"];
var { address: a, number = 20 } = { address, number };
```

A. a : seoul, address : seoul, number : 30

2. 각 키, 몸무게, 상의사이즈, 하의사이즈 정보를 4개의 변수에 담고싶은 경우

```javascript
let 신체정보 = {
  body: {
    height: 190,
    weight: 70,
  },
  size: ["상의 Large", "바지 30인치"],
};

let {
  body: { height, weight },
  size: [상의, 하의],
} = 신체정보;
```
