## import & export

### export default 문법

import 가져올거 from '경로'\
export default 내보낼거

- 특정 변수만 꺼내올 수 있음

1. export default를 쓰면 import할 때 이름 바꿔도 됨

```html
<script type="module">
  import a from "/library.js";
  console.log(a); // 10
</script>
```

library.js

```javascript
var a = 10;
var b = 20;
export default a;
```

2. export default는 파일 당 1회 사용 가능

### 여러개를 내보내는 export 문법

import {가져올것들} from '경로'
export {내보낼것들}

3. export와 export default 동시 사용 가능

```html
<script type="module">
  import 아무거 from "/library.js";

  console.log(아무거); // 30
</script>
```

```javascript
var a = 10;
var b = 20;
var c = 30;
export { a, b };
export default c;
```

4. export 키워드는 변수/함수 선언 왼쪽에 써도 됨

```html
<script type="module">
  import { a, b } from "/library.js";

  console.log(a); // 10
</script>
```

```javascript
export var a = 10;
export var b = 20;
```

Q. export default c와 export {a, b}를 동시에 import하려면?

```html
<script type="module">
  import 작명, { a, b } from "/library.js";

  console.log(a); // 10
  console.log(작명); // 30
</script>
```

5. 변수명이 마음에 안들면 새로 짓자
   : import {변수 as 새변수명} from '경로'

```html
<script type="module">
  import { a as 별명 } from "/library.js";

  console.log(별명); // 10
</script>
```

- 모든걸 다 import 해오는 \* 기호
  : import \* as 변수들명 from '경로'

```html
<script type="module">
  import 디폴트, * as 별명 from "/library.js";

  console.log(별명); // Module
  console.log(별명.a); // 10
  console.log(별명.b); // 20
  console.log(디폴트); // 30
</script>
```

### require

엣날방식: var 변수 = require('/library.js')

### 참고

1.  IE에서는 사용 불가
2.  프론트엔드 개발에서는 <script src=""> 사용
3.  React, Angular 에서 사용
4.  js 파일 나눌 때 사용
