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

___
****
