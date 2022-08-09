1. 단어 순서를 바꾸는 해체분석기 제작하기

```javascript
var pants = 20;
var socks = 100;

function 해체분석기(문자들, 변수1, 변수2) {
  console.log(문자들[1] + 변수1 + 문자들[0] + 변수2);
}
해체분석기`바지${pants} 양말${socks}`;
```

2. 바지가 0개면 '바지다팔렸어요'라는 문자를 대신 표시해주고 싶습니다

```javascript
var pants = 20;
var socks = 100;
function 해체분석기(문자들, 변수1, 변수2) {
  console.log(
    `${문자들[0]}${변수1 == 0 ? "다팔렸어요" : 변수1} ${문자들[1]}${변수2}`
  );
}
해체분석기`바지${pants} 양말${socks}`;
```
