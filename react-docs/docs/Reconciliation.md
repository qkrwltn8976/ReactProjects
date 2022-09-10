## Reconciliation 재조정

### Diffing Algorithm 비교 알고리즘

- 두 개의 트리를 비교할 때 React는 두 엘리먼트의 루트 엘리먼트부터 비교
- 이후 동작은 루트 엘리먼트의 타입에 따라 달라짐
- 엘리먼트 타입이 다른 경우 다시 그림
- React는 key를 통해 기존 트리와 이후 트리의 자식들이 일치하는지 확인

### Reconciliation의 특징

- 루트부터 비교
  - 무엇을 렌더링할 지 알려주는 함수
- 트리를 파괴
  - 부모가 바뀌었다면 트리를 버림
- keys
  - 자식 재귀 처리 시 효율성 확보

### Virtual DOM

- 실제 DOM과 동기화 할 가상 표현
- 가상 표현을 메모리에 저장하고 실제 DOM과 동기화 하는 과정 === 재조정

### 재조정

- 실제 DOM과 Virtual DOM의 동기화

### Design Principles

- 리액트가 무엇을 하고 무엇을 하지 않는지에 대한 개발 철학
- 리액트의 스케줄링 업데이트 (setState가 비동기적인 이유)

### React Fiber

- 스택 reconciler 대체한 재조정 엔진
