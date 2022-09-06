import React, { useState, useEffect } from "react";
import Comments from "./Comments";

const CommentList = [
  { title: "comment1", content: "message1", likes: 1 },
  { title: "comment2", content: "message2", likes: 1 },
  { title: "comment3", content: "message3", likes: 1 },
];
export default function Memo() {
  const [comments, setComments] = useState(CommentList);

  useEffect(() => {
    const interval = setInterval(() => {
      setComments((prevComment) => [
        ...prevComment,
        {
          title: `comment${prevComment.length + 1}`,
          content: `message${prevComment.length + 1}`,
          likes: 1,
        },
      ]);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  // memo를 사용하지 않는 경우 한 comment가 추가될 때마다 전체 comment가 모두 리렌덜이
  return <Comments commentList={comments} />;
}
