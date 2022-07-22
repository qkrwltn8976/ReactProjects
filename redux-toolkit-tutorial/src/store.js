import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

const firstMiddleware = (store) => (next) => (action) => {
  console.log("logging");
  next(action);
}; // 커스텀 미들웨어

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
  middleware: [firstMiddleware, ...getDefaultMiddleware],
  //   preloadedState : 서버사이드 렌더링 전용
  //   devTools: process.env.NODE_ENV !== 'production'
});

export default store;
