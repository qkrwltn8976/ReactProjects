1. 간단한 메소드 만들기

```javascript
var 사람 = {
  name: "손흥민",
  sayHi: function () {
    console.log(`안녕 나는 ${this.name}`);
  },
};
```

2. 오브젝트 내의 데이터를 전부 더해주는 메소드 만들기

```javascript
var 자료 = {
  data: [1, 2, 3, 4, 5],
  전부더하기: function () {
    return this.data.map((item) => {
      result += item;
      return result;
    });
  },
};

let result = 0;
자료.data.forEach((item) => {
  result += item;
});
```

3. setTimeout 이용해보기

```javascript
document.getElementById("버튼").addEventListener(
  "click",
  setTimeout(function () {
    console.log(this.innerHTML);
  }, 1000)
);
```
