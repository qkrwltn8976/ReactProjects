## Styling Library

### CSS in JS

- 기존 CSS의 문제점 해결

### CSS의 문제점

- Global Namespace
  - 글로벌 변수를 지양해야하는 JS와 대치
- Dependencies
  - css간의 의존 관리
- Dead Code Elimination
  - 안쓰는 css 인지 어려움
- Minification
  - 클래스 이름 최소화
- Sharing Constants
  - JS의 코드와 값을 공유하고 싶음
- Non-deterministic Resolution
  - css 파일 로드 타이밍 이슈
- Isolation
  - 격리

## 1. Styled Component

### Styled Component의 특징

- Automatic critical CSS
  - 자동 style injects & 코드 스플릿
- No class name bugs
  - unique, no overlaps, no misspellings
- Easier deletion of CSS
  - tied to a specific component
- Simple dynamic styling
  - props / global theme
- Painless amintenance
  - styling affecting your component
- Automatic vendor prefixing
  - current standard only

### Styled Component 정리

- CSS in JS
  - CSS의 문제점을 해소
- 해결책
  - 스타일을 style 태그로 분리
- 사용법 (Template Literals)
  - styled.{element}``
- styled (스타일드 컴포넌트)
  - 상속
- &
  - 가상 엘리먼트 / 가상 선택자
- Global Style
  - 전역 스타일
- attrs
  - props addition
- keyframes / ThemeProvider
  - Animation / Theme

## 2. emotion

### emotion 사용법

- 리액트용 @emotion/react
  /\*_ @jsxImportSource @emotion/react _/
- css props
  - like style props
- auto vendor-prefix / nested selectors / media queries
- SSR with zero configuration
- css Props
  - Object Styles: css={{ fontSize: 12 }}
  - String Styles: css={css`font-size: 12px`}
- Styled Component
  - styled-component와 유사한 + a 기능 제공
- Composing dynamic styles
- as props
- Nesting components

### emotion 정리

- react에 특화
  - @emotion/react
- css props
  - jsx를 대체함
- styled components
  - styled-components + a
- composition
  - css안에서 css 사용
- 기능
  - Fallbacks & Global, keyframes
- styled-components
  - 서로 점점 유사해짐
- trend
  - emotion이 우세
- 사이즈 / 속도
  - emotion이 우세
