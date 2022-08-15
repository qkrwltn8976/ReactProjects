1. spread 문제 1

```javascript
var a = [1, 2, 3];
var b = "김밥";
var c = [...b, ...a];
console.log(c);
```

A. ["김", "밥", 1, 2, 3]

2. spread 문제 2

```javascript
var a = [1, 2, 3];
var b = ["you", "are"];
var c = function (a, b) {
  console.log([[...a], ...[...b]][1]);
};

c(a, b);
```

A. you
[[...a], ...[...b]]; // [[1,2,3], you, are]

3. default 파라미터 문제 1

```javascript
function 함수(a = 5, b = a * 2) {
  console.log(a + b);
  return 10;
}
함수(3);
```

A. 9
a = 3, b = 6

4. default 파라미터 문제 2

```javascript
function 함수(a = 5, b = a * 2) {
  console.log(a + b);
}
함수(undefined, undefined);
```

A. 15
a = 5, b = 10

5. 파라미터로 자료들을 입력하면 그걸 그대로 array를 만들어주는 함수를 만들고 싶습니다.

```javascript
function 어레이(...rest) {
  return rest;
}

var newArray = 어레이(1, 2, 3, 4, 5);
console.log(newArray);
```

6. 최댓값 구하기
   numbers 안에 있는 숫자들을 Math.max()에 집어넣어서 쓰고 싶은데\
   직접 소괄호 안에 10개넘는 숫자를 손수 기입하기 귀찮습니다.

```javascript
var numbers = [2, 3, 4, 5, 6, 1, 3, 2, 5, 5, 4, 6, 7];
console.log(Math.max(...numbers));
```

7. array가 아니라 문자열에도 적용할 수 있는 알파벳순 정렬함수를 하나 만들고 싶습니다.

```javascript
function 정렬(글자) {
  console.log(...[...글자].sort());
}

정렬("bear");
```

8. 데이터마이닝 기능 만들기
   글자세기('aacbbb') 라고 입력하면 콘솔창에\
   { a : 2, b : 3, c : 1 }

```javascript
function 글자세기(글자) {
  var 결과 = {};
  [...글자].forEach(function (a) {
    if (결과[a] > 0) {
      결과[a]++;
    } else {
      결과[a] = 1;
    }
  });

  console.log(결과);
}
```
