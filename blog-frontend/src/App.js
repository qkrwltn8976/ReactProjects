import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import PostListPage from './pages/PostListPage';
import PostPage from './pages/PostPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';

const App = () => {
  return (
    <Routes>
      {/* 컴포넌트를 두 번 사용하지 않고 배열에 넣어 한 라우트 컴포넌트에 여러 개의 경로 설정 */}
      {['', '/@:username'].map((path, key) => (
        <Route element={<PostListPage />} path={path} key={key} exact />
      ))}
      <Route element={<LoginPage />} path="/login" />
      <Route element={<RegisterPage />} path="/register" />
      <Route element={<WritePage />} path="/write" />
      <Route element={<PostPage />} path="/@:username/:postId" />
    </Routes>
  );
};

export default App;
