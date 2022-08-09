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
};

자료.전부더하기: function () {
    var 합 = 0;
    this.data.forEach(function(item) {
      합 += item;
    });
    console.log(합)
  }
```

3. setTimeout 이용해보기

```javascript
document.getElementById("버튼").addEventListener("click", function () {
  setTimeout(() => {
    //근본없는 일반 함수에서 this는 window이므로 화살표 함수를 사용하여 this값을 함수 밖에 있는거 그대로 사용
    console.log(this.innerHTML);
  }, 1000);
});
```
