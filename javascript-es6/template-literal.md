## Template Literal

문자열을 다르게 제작할 수 있는 방법
`: backtick / backquote

### backquote 문자열의 장점

1. 엔터키 가능

```javascript
var 문자 = `손흥민
안녕하세요`;
```

2. 중간중간 변수 넣기 쉬움

```javascript
var 변수 = `손흥민`;
var 문자 = `안녕하세요 저는 ${변수}`;
var 템플릿 = `<div>
${변수}
</div>`;
```

## Tagged Literal

뒤에 ``붙여도 함수가 실행됨

- 단어 순서를 변경하거나
- 단어를 제거하거나
- ${변수}의 위치를 옮기거나\
  `문자`를 해체분석할 수 있음\

```javascript
var 변수 = `손흥민`;

function 해체분석기(문자들, 변수들, 변수들2) {
  console.log(문자들);
  console.log(변수들);
}

console.log(해체분석기`안녕하세요 ${변수} 입니다`);
```

### 해체분석기 파라미터

1. ${} 양옆 문자들을 Array화 해줌
2. ${변수}를 뜻함
3. 두번째 변수 ${변수}를 뜻함

### Tagged Literal 예시

글자의 순서를 변경하고 싶을 때

```javascript
var 변수 = `손흥민`;
function 해체분석기(문자들, 변수들) {
  console.log(문자들[1] + 변수들 + 문자들[0]);
}

console.log(해체분석기`안녕하세요 ${변수} 입니다`);
```
