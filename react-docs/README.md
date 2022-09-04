## JSX

JSX는 React.createElement의 간편 표현식

## Props

- props는 컴포넌트에 전달되는 단일 객체
- 순수함수처럼 동작
  - Props 자체를 수정해서는 안됨
- 컴포넌트 합성
  - 여러 컴포넌트를 모아서 만듦
- 컴포넌트 추출
  - 여러 곳에서 사용되거나/복잡한 경우 추출

## State

- 컴포넌트 내의 상태
  - 자신의 출력값을 변경
- Class Component
  - State LifeCycle
- Functional Component
  - Hook으로 관리
- 유의사항
  - 직접 수정 불가
  - 비동기적일 수 있음

## Life Cycle

- constructor
  - state 초기화 및 메서드 바인딩
- componentDidMount
  - Dom 노드 초기화 및 데이터 fetch
- componentWillUnmount
  - 타이머 제거 및 요청 취소 및 구독 해제
- Functional Component
  - hook으로 대부분 구현 가능

## 이벤트

- 합성 이벤트
  - 인터페이스는 같지만 직접 대응되지 않음
- Bubble / Capture
  - Capture > target > Bubble
- return false
  - e.preventDefault() 해줘야 함
