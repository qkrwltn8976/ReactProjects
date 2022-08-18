1. 직접 class 구조 만들어보기

```javascript
class 강아지 {
  constructor(type, color) {
    this.type = type;
    this.color = color;
  }
}
var 강아지1 = new Dog("말티즈", "white");
```

2. 이번엔 고양이관련 object들을 만들고 싶습니다.

```javascript
class 강아지 {
  constructor(type, color) {
    this.type = type;
    this.color = color;
  }
}

class 고양이 extends 강아지 {
  constructor(type, color, age) {
    super(type, color);
    this.age = age;
  }
}

var 고양이1 = new 고양이("브숏", "white", 2);
```

3. 고양이와 강아지 object들에 기능을 하나 추가하고 싶습니다.

```javascript
class 강아지 {
  constructor(type, color) {
    this.type = type;
    this.color = color;
    this.한살먹기 = function () {
      if (this instanceof 고양이) {
        this.age++;
      }
    };
  }
}

class 고양이 extends 강아지 {
  constructor(type, color, age) {
    super(type, color);
    this.age = age;
  }
}
```

4. get/set을 이용해봅시다

```javascript
class Unit {
  constructor() {
    this.공격력 = 5;
    this.체력 = 100;
  }
  get battlePoint() {
    return this.공격력 + this.체력;
  }
  set heal(체력) {
    this.체력 += 체력;
  }
}
```

5. get/set을 이용해봅시다2

```javascript
var data = {
  odd: [],
  even: [],
  set setData(...arr) {
    arr.forEach((n) => {
      if (n % 2 == 0) {
        this.event.push(n);
      } else {
        this.odd.push(n);
      }
    });
  },
  get getData() {
    return [...this.odd, ...this.even].sort();
  },
};
```
