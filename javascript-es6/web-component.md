## Web Component

### Custom Tag

- JS 문법으로 구현할 수 있는 브라우저 기본 기능
- <커스텀태그>로 길고 복잡한 HTML 축약하는 법

```html
<custom-input></custom-input>;
<script>
  class 클래스 extends HTMLElement {
    // 만든 태그가 HTML에 장착될 때 실행할 코드를 적는 곳
    connectedCallback() {
      //   let 변수 = document.createElement("label");
      //   this.appendChild(변수);
      this.innerHTML = `<label>이메일인풋이에요</label><input>`;
    }
  }

  customElements.define("custom-input", 클래스);
</script>
```

### Custom Tag의 장점

- HTML 중복제거, 다른 페이지에서 재활용 가능
- 커스텀태그 안에서도 파라미터 문법 구현 가능

```html
<custom-input name="비번"></custom-input>;
<custom-input name="이메일"></custom-input>;
<script>
  class 클래스 extends HTMLElement {
    // 만든 태그가 HTML에 장착될 때 실행할 코드를 적는 곳
    connectedCallback() {
      let name = this.getAttribute("name");
      this.innerHTML = `<label>${name}인풋이에요</label><input>`;
    }
  }

  customElements.define("custom-input", 클래스);
</script>
```

- attribute 변경 감지 기능 제공됨

```html
<custom-input name="123"></custom-input>;
<custom-input name="이메일"></custom-input>;
<script>
  class 클래스 extends HTMLElement {
    // 만든 태그가 HTML에 장착될 때 실행할 코드를 적는 곳
    connectedCallback() {
      this.innerHTML = `<label>이메일인풋이에요</label><input>`;
    }
    // name이라는 attribute 바뀌는지 감시
    static get observedAttributes() {
      return ["name"];
    }
    // attribute 바뀌면 이 함수 실행
    attributeChangedCallback() {
      // attribute 변경될 때마다 html 재랜더링
      this.innerHTML = `<label>이메일인풋이에요</label><input>`;
    }
  }

  customElements.define("custom-input", 클래스);
</script>
```
