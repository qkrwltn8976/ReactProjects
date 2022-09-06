import React, { useCallback } from "react";

import CommentItem from "./CommentItem";

export default function Comments({ commentList }) {
  const handleChange = useCallback(() => {
    // commnetList가 리렌더링 되기 때문에 handleChange도 리렌더링
    console.log("눌림");
  }, []);

  return (
    <div>
      {commentList.map((comment) => (
        <CommentItem
          key={comment.title}
          title={comment.title}
          content={comment.content}
          likes={comment.likes}
          //   onClick={() => {
          //     console.log("눌림"); // inline으로 함수를 만들 경우 리렌더링 될 때마다 새로 함수 생성
          //   }}
          onClick={handleChange}
        />
      ))}
    </div>
  );
}
