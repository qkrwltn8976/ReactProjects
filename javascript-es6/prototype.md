## Prototype

### 상속

기계가 가지고 있는 name, age, sayHi 속성들을 물려받음
기계 == 부모, 인스턴스 == 자식

```javascript
function 기계(이름, 나이) { // 부모
  this.name = 이름;
  this.age = 나이;
  this.sayHi = function () {
      console.log("안녕하세요 " + this.name + "입니다")
  }

}

var 학생 1 = new 기계("Park", 15); // 자식
var 학생 2 = new 기계("Kim", 10);

학생1.sayHi();
학생2.sayHi();
```

### Prototype이란?

- 상속을 구현할 수 있는 javascript에만 존재하는 또 하나의 문법
- prototype은 유전자
- 기계(constructor)를 만들면 prototype이라는 공간이 자동으로 생성
- prototype에 값을 추가하면 모든 자식들이 물려받기 가능

```javascript
function 기계(이름, 나이) {
  // 부모
  this.name = 이름;
  this.age = 나이;
  this.sayHi = function () {
    console.log("안녕하세요 " + this.name + "입니다");
  };
}
기계.prototype.gender = "남";

var 학생 1 = new 기계("Park", 15); // 자식
var 학생 2 = new 기계("Kim", 10);

console.log(학생1.gender) // "남"
```

### Prototype의 동작원리

#### 학생1.gender 동작원리

1. 학생1이 직접 gender를 가지고 있는가?
2. 그럼 학생1의 부모 유전자가 gender를 가지고 있는가?
3. 실헹

#### 내장함수의 동작원리

```javascript
학생1.toString();
var arr = [1, 2, 3];
var arr = new Array(1, 2, 3); // 실제 array가 만들어지는 방식
arr.sort(); // arr에 sort를 부여한 적 없지만 arr의 부모 유전자가 sort를 가지고 있음

var obj = { name: "kim" };
var obj = new Object(); // Object 부모를 이용해 만듦
obj.toString();
```

: 부모의 부모 유전자에 있음
Array.prototype.sort()

1. arr에 sort()가 있는가?
2. 그럼 arr 부모의 유전자에 sort()가 있는가?

### Prototype의 특징

1. 함수에만 생성됨
2. 내 부모 유전자(부모의 prototype)를 검사하고 싶으면 "\_\_proto\_\_"

```javascript
학생1.__proto__; // 기계.prototype
```

3. "\_\_proto\_\_"를 이용해 부모 강제 등록

```javascript
var 부모 = { name: "kim" };
var 자식 = {};
자식.__proto__ = 부모;
자식.name; // kim
```

4. 콘솔창에서 알려주는 prototype chain
