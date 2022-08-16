1. 오브젝트 자료 여러개를 만들고 싶습니다.

```javascript
function Student(이름, 나이) {
  this.name = 이름;
  this.age = 나이;
  this.sayHi = function () {
    console.log("안녕 나는 " + this.name + "이야");
  };
}

var 학생1 = new Student("Kim", 20);
var 학생2 = new Student("Park", 21);
var 학생3 = new Student("Lee", 22);
```

2. 다음 코드의 출력 결과는 무엇일까요?

```javascript
function Parent() {
  this.name = "Kim";
}
var a = new Parent();

a.__proto__.name = "Park";
console.log(a.name);
```

A. "Kim"\
부모 prototype에 { name : 'Park' } 이걸 추가\
내가 직접 가지고 있는 { name : 'Kim' }를 우선 출력

3. 함수가 안들어가요 엉엉

```javascript
function Student(이름, 나이) {
  this.name = 이름;
  this.age = 나이;
}

Student.prototype.sayHi = () => {
  console.log("안녕 나는 " + this.name + "이야");
};
var 학생1 = new Student("Kim", 20);

학생1.sayHi(); //왜 이 코드가 제대로 안나오죠?
```

A. arrow function을 사용하여 this가 바깥에 있는 this를 그대로 사용

4. 모든 array에 적용할 수 있는 함수를 직접 새로 만들려면 어떻게 해야할까요?

```javascript
var arr = [1, 2, 3];
arr.remove3();

console.log(arr); //[1,2]

Array.prototype.remove3 = function () {
  // 3 제거
};
```
