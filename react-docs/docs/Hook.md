## Hook

- Class의 단점을 보완하면서 라이프사이클 등과 관련된 함수를 재사용 가능토록 함

### Hook 규칙

- 최상위에서만 Hook을 호출해야 함(반복문, 조건문, 중첩된 함수내에서 실행하면 안됨)
- React 함수 컴포넌트 내(Functional COmponent, Custom Hook)에서만 Hook을 호출해야 함

## Effect Hook

- side effect를 실행할 수 있음
- componentDidMount/componentDidUpdate/componentWillUnmount의 라이프사이클이 합쳐진 걸로 볼 수 있음

### useEffect의 사용

1. 데이터 가져오기
2. 구독 설정하기
3. 수동으로 리액트 컴포넌트의 DOM을 수정하기

### 구독(subscribe)과 정리(cleanup)

- componentDidMount & componentWillUnmount에서 별도로 처리해야 하는 구독과 정리 로직을 useEffect 하나에서 처리 가능

### useEffect가 업데이트 시마다 실행되는 이유

- Class 메서드가 관련없는 로직들은 모아놓고 관련이 있는 로직들은 여러개의 메서드로 나누어 놓는 경우 존재하여 표현을 하나로 합치고
- 일관성을 유지해주며 클래스 컴포넌트에서 업데이트 로직을 뺴먹어서 발생할 수 있는 버그를 예방하며

### useEffect 최적화 (dependency array)

- 모든 렌더링 이후에 effect를 정리하거나 적용하는 것이 성능 저하를 발생시키는 경우도 있어 prevProps나 prevState와의 비교를 통해 문제 해결
- 범위 내에서 바뀌는 값들과 사용되는 값을 배열(dependency array)에 모두 포함해야 side effect 줄일 수 있음

## Custom Hooks(사용자 정의 Hook)

### Custom Hooks의 필요성

- 컴포넌트들에 중복되는 Hook 로직을 묶어서 재사용 하도록 함
- Hook에서 Hook으로 정보 전달 가능

### Custom Hook의 특징

- 사용자 정의 Hook의 이름은 "use"로 시작되어야 함
- 같은 Hook을 사용하는 두 개의 컴포넌트는 state를 공유하지 않음
  - 그 안의 state와 effect는 완전히 독립적
  - 각각 Hook에 대한 호출은 서로 독립된 state를 받아 직접적으로 호출하기 때문에 각 컴포넌트에서 useState와 useEffect를 호출한 것과 동일

## 다양한 Hooks

### useState

- 이전 값을 인자로
- 초기화 지연(함수)

### useEffect

- 의존성 배열
- 안주거나 / [] / [a, b]

### useLayoutEffect

- useEffect와 유사
- 모든 DOM 변경 후 브라우저가 화면을 그리기 이전 시점에 동기적으로 수행

### useReducer

- useState 대체
- state / reducer / action

### useContext

- Context 강의에서

### useCallback & useMemo

- 메모이제이션 강의에서

### useRef

- current라는 상자
- 내용의 변경은 알려주지 않음
- 콜백 ref 사용
