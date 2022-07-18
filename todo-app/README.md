# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## useCallback
렌더링 성능을 최적화해야 하는 상황에서 사용\
이벤트 핸들러 함수를 필요할 때만 생성 가능\
컴포넌트의 렌더링이 자주 발생하거나 렌더링해야 할 컴포넌트의 개수가 많아지면 이 부분을 최적화해 주는 것이 좋음

```javascript
const 함수 = useCallback(e => {
  함수
}, [배열])
```
* 첫 번째 파라미터에는 생성하고 싶은 함수
* 두 번째 파라미터에는 배열 
  * 어떤 값이 바뀌었을 때 함수 새로 생성해야 하는지 명시

---
## 컴포넌트 성능 최적화
### 컴포넌트 리렌더링 되는 경우
1. 자신이 전달받은 props가 변경될 때
2. 자신의 state가 바뀔 때

### React.memo 사용
React.memo 함수를 사용할 경우 컴포넌트의 props가 바뀌지 않았다면 리렌더링하지 않도록 설정\
함수형 컴포넌트의 리렌더링 성능 최적화
```javascript
export default React.memo(함수형 컴포넌트 명)
```

### 함수가 바뀌지 않게 하기
1. useState의 함수형 업데이트
   새로운 상태를 파라미터로 넣는 대신 상태 업데이트를 어떻게 할지 정의해 주는 업데이트 함수 사용\
   어떻게 업데이트할지 정의해 주는 업데이트 함수를 넣어줄 경우 useCallback을 사용할 때 두 번째 파라미터로 넣는 배열에 상태를 넣지 않아도 됨
```javascript
const [number, setNumber] = useState(0);

const onIncrease = useCallback(
  () => setNumber(prevNumber => prevNumber + 1),
  [],
)
```
최적화 전 소스
```javascript
const [number, setNumber] = useState(0);

const onIncrease = useCallback(
  () => setNumber(number + 1),
  [number],
)
```
2. useReducer
   userReducer의 두 번째 파라미터에 초기 상태 대신 undefined를 넣고 세 번째 파라미터에 초기 상태를 만들어 주는 함수 넣음\
   단점: 기존 코드를 많이 고쳐야 함\
   장점: 상태를 업데이트 하는 로직을 모아서 컴포넌트 바깥에 둘 수 있음
```javascript
const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodo);
```

### 불변성의 중요성
'불변성을 지킨다' : 기존의 값을 직접 수정하지 않으면서 새로운 값을 만들어 내는 것\
리액트 컴포넌트에서 상태를 업데이트할 때 불변성을 지키는 것은 매우 중요\
불변성이 지켜지지 않으면 객체 내부의 걊이 새로워져도 바뀐 것을 감지하지 못해 React.memo에서 서로 비교하여 최적화하는 것이 불가능
```javascript
{/* 1. 배열 */}
const nextArrayBad = array; // 배열을 복사하는 것이 아닌 동일한 배열 가리킴
nextArrayBad[0] = 100;
const nextArrayGood = [...array]; // 배열 내부의 값을 모두 복사
nextArrayGood[0] = 100;

{/* 2. 객체 */}
const nextObjectBad = object; // 객체가 복사되지 않고 동일한 객체 가리킴
nextObjectBad.value = nextObjectBad.value + 1;
const nextObjectGood = {
  ...object, // 기존에 있던 내용을 모두 복사해 넣음
  value: object.value + 1 // 새로운 값을 덮어 씀
} 

{/* 3. 내부 값이 객체 혹은 배열 */}
const todos = [{id: 1, checked: true}, {id: 2, checked: true}];
const nextTodos = [...todos];

nextTodos[0].checked = false; // 동일한 객체 가르킴

nextTodos[0] = {
  ...nextTodos[0],
  checked: false
}; // 새로운 객체 할당
```
___
****
