## Primitive Data Type

: 변수에 값이 그대로 저장됨

- 문자와 숫자는 Primitive data type

```javascript
var 변수 = 1234;
var 어레이 = [1, 2, 3];
var obj = { name: "kim" }; // obj에는 { name: "kim" }이 저쪽에 있습니다~라는 화살표 저장
```

## Reference Data Type

: 변수에 reference가 저장됨

- Array, Object는 변수에 값이 저장이 안됨

### 복사

- reference data type 복사 시에 자료가 저기 있다는 화살표를 복사
- 하나의 값을 공유하게 됨
- array, object를 함부로 복사해서 사용하면 안됨

```javascript
var 이름1 = "김";
var 이름2 = 이름2;
이름1 = "박";
console.log(이름1); // "박"
console.log(이름2); // "김"

var 이름1 = { name: "김" };
var 이름2 = 이름1;
이름1.name = "박";
console.log(이름1.name); // "박"
console.log(이름2.name); // "박" 이름2는 변경한 적이 없는데?
```

- 복사하고 싶을 때?
  : object 복사 기계 사용

- 새로 중괄호를 할당할 때마다 새로운 화살표 할당

```javascript
var 이름1 = { name: "김" };
var 이름2 = { name: "김" };
console.log(이름1 === 이름2); // false
// 화살표1 !== 화살표2

오브젝트를 변경해주는 함수
function 변경(obj) {
    obj.name = "Park"
}
변경(이름1)
```

- 오브젝트를 변경해주는 함수
  파라미터는 변수생성 & 할당과 똑같음\
  그 파라미터 변수에 = {}로 오브젝트를 변경해봤자 원래 이름1 오브젝트는 변화 없음

```javascript
var 이름1 = { name: "김" };

function 변경(obj) {
  // 파라미터는 변수생성 & 할당과 똑같음
  obj = { name: "park" }; // 오브젝트를 재할당하는 함수 X

  변경(이름1); // 변경(var obj = 이름1);
  console.log(obj); // { name: "김" }
}
```
