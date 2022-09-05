## Map & Set

### Map

- key, value를 저장
- 자료간의 연관성을 표현하기 위해 사용

```javascript
var person = new Map();
person.set("name", "Kim");
person.set("age", 20);

person.set(20, "Kim");
person.set([1, 2, 3], "array");
person; // Map ["name" => "Kim", "age" => 20]
```

- Object 자료형은 자료 이름으로 글자마 가능하지만 Map은 다 가능

```javascript
var person = new Map();
person.set("name", "Kim");
person.set("age", 20);
```

#### Map에서 자료 꺼내는 법

```javascript
var person = new Map();
person.set("name", "Kim");
person.set("age", 20);

person.get("age");
```

#### Map에서 자료 삭제하는 법

```javascript
var person = new Map();
person.set("name", "Kim");
person.set("age", 20);

person.delete("age");
```

#### Map에서 자료 개수 세는 법

```javascript
var person = new Map();
person.set("name", "Kim");
person.set("age", 20);

person.size;
```

#### 반복문으로 Map에서 자료 꺼내는 법

```javascript
var person = new Map();
person.set("name", "Kim");
person.set("age", 20);

for (var key of person.keys()) {
  console.log(key);
}
```

#### 자료형에 직접 자료 집어넣는 법

```javascript
var person = new Map([
  ["name", "Kim"],
  ["age", 20],
]);
```

### Set

- 중복 자료를 허용하지 않는 Array와 비슷한 자료형

```javascript
var 출석부 = ["john", "tom", "andy", "tom"];
var 출석부2 = new Set(["john", "tom", "andy", "tom"]);

출석부2.add("sally");
```

#### Set 자료형에 자료 추가하는 법

```javascript
var 출석부 = new Set(["john", "tom", "andy", "tom"]);

출석부.add("sally");
```

#### Set 자료형에 자료 제거하는 법

```javascript
var 출석부 = new Set(["john", "tom", "andy", "tom"]);

출석부.delete("sally");
```

#### Set 자료형에 자료 있는지 법

```javascript
var 출석부 = new Set(["john", "tom", "andy", "tom"]);

출석부.has("sally");
```

#### Set 자료형에 자료 개수 확인하는 법

```javascript
var 출석부 = new Set(["john", "tom", "andy", "tom"]);

출석부.size;
```

#### Array의 중뵥자료를 제거하고 싶으면

- Set <-> Array

```javascript
var 출석부 = ["john", "tom", "andy", "tom"];
var 출석부2 = new Set(["john", "tom", "andy", "tom"]);

출석부 = [...출석부2];
```
