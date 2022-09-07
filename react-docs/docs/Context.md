## Context

### Context란

- 컴포넌트 트리를 넘어 데이터를 공유할 수 있는 방법
- 단계마다 props를 넘겨주지 않고도 컴포넌트 트리 전체에 데이터 제공 가능
- 전역적인 데이터 관리

### Context 특징

- 컴포넌트 트리 제약
  - Props drilling의 한계 해소
- 재사용성
  - Context를 사용하면 재사용하기 어려움
- API
  - createContext, Provider, Consumer
- useContext
  - Consumer 대체
