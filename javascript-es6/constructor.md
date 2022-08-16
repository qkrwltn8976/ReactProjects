## Constructor

### Constructor의 용도

- object를 마구 복사하고 싶을 때 사용
- 비슷한 object를 여러 개 만들 때 사

- object 복사 기계
  ex) 학생 출석부를 만들어보자\
   Q1. 비슷한 학생 object를 여러개 만들려면?\
   A. constructor라는 object 생성 기계를 만드세요\
   Q2. 기계로 학생을 뽑을 때 name을 다르게 설정해주고 싶어요\
   A. 파라미터 사용

* 문자나 함수를 넣을 수 있다

```javascript
var 학생1 = {
    name: "Kim",
     age: 15 ,
    sayHi: function() {
        console.log("안녕하세요 " + this.name + "입니다")
    }
};

function 기계(이름, 나이) {
  this.name = 이름; // this는 새로 생성되는 object (instance)
  this.age = 나이;
  this.sayHi = function () {
      console.log("안녕하세요 " + this.name + "입니다")
  }

}

var 학생 1 = new 기계("Park", 15);
var 학생 2 = new 기계("Kim", 10);

학생1.sayHi();
학생2.sayHi();
```

### this

기계에서 새로 생성되는 object (instance)

### constructor

object 생성 기계, 생성자\

### 연습문제

쇼핑몰에 쓸 상품데이터를 오브젝트로 여러개 만들고 싶습니다.\
Q1. 위처럼 생긴 상품오브젝트들을 뽑아낼 수 있는 constructor를 제작해보세요.\
Q2. 상품마다 부가세() 라는 내부 함수를 실행하면 콘솔창에 상품가격 \* 10% 만큼의 부가세금액이 출력되도록 하고 싶으면

constructor를 어떻게 수정해야할까요?

```javascript
function Product(이름, 가격) {
  this.name = 이름;
  this.price = 가격;
  this.부가세 = function () {
    console.log(this.price * 0.1);
  };
}

var product1 = new Product("shirts", 50000);
var product2 = new Product("pants", 60000);
```
