# 📖 React Study

## INDEX

### 리액트를 다루는 기술

Typescript로 블록체인 만들기

### 프론트엔드

- [브라우저 렌더링 과정](frontend/%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80%EB%A0%8C%EB%8D%94%EB%A7%81%EA%B3%BC%EC%A0%95.md)
- [이벤트 루프](frontend/%EC%9D%B4%EB%B2%A4%ED%8A%B8%EB%A3%A8%ED%94%84.md)
- [CORS](frontend/cors.md)
- [클로저](frontend/클로저.md)
- [CSR&SSR](frontend/SSR%26CSR.md)
- [실행컨텍스트](frontend/%EC%8B%A4%ED%96%89%EC%BB%A8%ED%85%8D%EC%8A%A4%ED%8A%B8.md)

### 매우 쉽게 이해하는 Javascript 객체지향 & ES6 신문법

https://codingapple.com/course/javascript-es6/

- [this 키워드](javascript-es6/this.md)
- [arrow function](javascript-es6/arrow-function.md)
- [변수](javascript-es6/variable.md)
- [hoisting](javascript-es6/hoisting.md)
- [template/tagged literal](javascript-es6/template-literal.md)
- [spread operator](javascript-es6/spread-operator.md)
- [function : default parameter/argument/rest](javascript-es6/function.md)
- [primitive/reference data type](javascript-es6/reference-data-type.md)
- [constructor](javascript-es6/constructor.md)
- [prototype](javascript-es6/prototype.md)
- [상속](javascript-es6/상속.md)
- [destructuring](javascript-es6/destructuring.md)
- [import/export](javascript-es6/import&export.md)
- [브라우저 동작원리](javascript-es6/브라우저동작원리.md)
- [동기/비동기](javascript-es6/동기&비동기.md)
- [Promise](javascript-es6/Promise.md)
- [async/await](javascript-es6/async&await.md)
- [반복문](javascript-es6/반복문.md)
- [Symbol](javascript-es6/symbol.md)
- [Map/Set](javascript-es6/Map&Set.md)
- [Web Component](javascript-es6/web-component.md)
- [?, ?? 연산자](javascript-es6/tenary연산자.md)

### React 공식문서로 디테일잡기

- [React 공식문서로 디테일잡기 - 초급](react-docs/README.md)

#### React 공식문서로 디테일잡기 - 고급

- [Hook](react-docs/docs/Hook.md)
- [Composition 합성](react-docs/docs/Composition.md)
- [HOC](react-docs/docs/HOC.md)
- [Memoization](react-docs/docs/Memoization.md)
- [Context](react-docs/docs/Context.md)
- [Portal](react-docs/docs/Portal.md)
- [PropTypes](react-docs/docs/PropsTypes.md)
- [Reconciliation](react-docs/docs/Reconciliation.md)

#### React 라이브러리

- [Date Library](date/README.md)
- [Styling Library](styling/README.md)

### 웹 게임을 만들며 배우는 React에 Typescript 적용하기

### 최적화

1. 로딩 성능 최적화

- 이미지 사이즈 최적화
  image Processing CDN
  : 이미지 전처리 과정을 거쳐 사용자들에게 전달
  http://cdn.image.com?src=[img src]&width=200&height=100
- Code Split
- 텍스트 압축

2. 렌더링 성능 최적화

- Bottleneck 코드 최적화
