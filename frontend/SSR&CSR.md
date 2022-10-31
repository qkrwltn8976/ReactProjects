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
    <aside>

### pre-rendering이란
- 빌드 할 때 미리 특정 페이지를 렌더링해서 html 파일 생성

#### 방식

1. `Static Generation` 정적 생성
    1. 프로젝트를 빌드할 때 HTML 파일들을 만들어 request가 들어올 때 해당 요청에 맞는 HTML들을 보여주는 방식
    2. 활용
        - 미리 페이지를 만들어 둘 수 있는 경우 사용
        1. 마케팅 페이지
        2. 블로그 게시물
        3. 제품 목록
        4. 도움말, 문서
2. `Server-side Rendering` 서버 사이드 렌더링
    1. 빌드할 당시에 HTML을 만드는 게 아닌 request가 들어올 때 그에 맞는 HTML을 생성하는 방식
    2. 활용
        - 실시간으로 요청마다 매번 달라지는 페이지를 그리고 싶을 경우 사용
        1. 항상 최신 상태 유지
        2. 관리자 페이지
        3. 분석 차트

#### 구현

1. react-helmet
    - SPA에서 각 route마다 html head를 설정할 수 있게 도와줌
2. react-snap
    - script에 추가하고 빌드 시 각 route마다 index.html을 생성

### Universal Rendering

- SSR과 CSR을 혼용해서 사용하는 렌더링 방식

#### 장점

1. CSR의 초기 로딩속도 보완 및 SEO 개선
2. SSR의 문제점인 화면 깜빡임 개선, 서버 부하 적음
