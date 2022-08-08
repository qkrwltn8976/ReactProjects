## this

1. 그냥 쓰거나 일반 함수 안에서 쓰면 "window"
   window === 기본 함수들 수납공간

   strict mode + 일반 함수내에서 쓰면 undefined

```javascript
"use strict";
console.log(this); // window

function 함수() {
  console.log(this); // undefined
}

함수();
window.함수();
```

2. 오브젝트 내 함수 안에서 쓰면 "그 함수를 가지고 있는 오브젝트"를 뜻함
   신 문법 Arrow Function 특징: this 값을 함수 밖에 있던거 그대로 씀

```javascript
var 오브젝트 = {
  data: "Kim",
  함수: function () {
    console.log(this);
  },
};

오브젝트.함수(); // {data: 'Kim', 함수: f}

var 오브젝트2 = {
  data: {
    함수() {
      console.log(this);
    },
    화살표함수: () => {
      console.log(this);
    },
  },
};

오브젝트2.data.함수(); // {함수: f}
오브젝트2.data.화살표함수(); // window
```

함수나 변수를 전역공간에서 만들면 -> "window"에 보관

3. 기계(constructor) 안에서 쓰면 새로 생성되는 오브젝트(instance) "인스턴스"를 뜻함
   기계(constructor)란? 오브젝트 생성 기계

```javascript
var 어쩌구 = {};
function 기계() {
  this.이름 = "Kim"; // 새로 생성되는 오브젝트(instance)
}

var 오브젝트 = new 기계();
```

4. 이벤트리스너 안에서는 e.currentTarget

```javascript
document.getElementById("버튼").addEventListener("click", function (e) {
  console.log(this); // e.currentTarget;
  console.log(e.currentTarget); // 지금 이벤트가 동작하는 곳

  var 어레이 = [1, 2, 3];
  어레이.forEach(function (e) {
    // 콜백함수: 함수 안에 들어가는 함수
    console.log(this); // window
  });
});
```

```javascript
var 오브젝트 = {
  이름들: ["김", "이", "박"],
  함수: function () {
    console.log(this); // 위 함수를 소유한 오브젝트
    오브젝트.이름들.forEach(function () {
      //근본없는 일반함수
      console.log(this); // window
    });
  },
  함수2: function () {
    console.log(this); // (1)
    오브젝트.이름들.forEach(() => {
      // arrow function 특징: 내부의 this값을 변화시키지 않음 (외부 this값 그대로 재사용가능)
      console.log(this); // (2) 위 함수를 소유한 오브젝트 (1) === (2)
    });
  },
};

오브젝트.함수();
```
