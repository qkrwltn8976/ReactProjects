## SSR & CSR

### SSR

#### SSR 장점

1. SEO
2. 빠른 첫 페이지 로딩

#### SSR 단점

1. CSR에 비해 더 많은 서버 자원 소비
2. 코딩 복잡도 증가

### CSR

#### CSR 장점

1. CS

#### CSR 단점 보완

1. 초기 로딩 속도

- code splitting
- tree-shaking
- chunk 분리

2. SEO 개선

- pre-rendering
  - pre-rendering이란?
    : 웹 라이브러리나 웹팩 플러그인을 통해 각 페이지에 대한 HTML 파일을 미리 생성해두고 서버에서 요청하는 작업이 크롤링이라면 크롤링에 필요한 파일인 사전 렌더링된 HTML을 보여주는 방식

### Universal Rendering

- SSR과 CSR을 혼용해서 사용하는 렌더링 방식

#### 장점

1. CSR의 초기 로딩속도 보완 및 SEO 개선
2. SSR의 문제점인 화면 깜빡임 개선, 서버 부하 적음
