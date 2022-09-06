import React, { Profiler, useState, memo, useMemo } from "react";

import "./CommentItem.css";

function CommentItem({ title, content, likes, onClick }) {
  const [clickCount, setClickCount] = useState(0);

  function onRenderCallback(
    id, // the "id" prop of the Profiler tree that has just committed
    phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
    actualDuration, // time spent rendering the committed update
    baseDuration, // estimated time to render the entire subtree without memoization
    startTime, // when React began rendering this update
    commitTime, // when React committed this update
    interactions // the Set of interactions belonging to this update
  ) {
    // Aggregate or log render timings...
    console.log(`actualDuration ${title}: ${actualDuration}`);
  }

  const handleClick = () => {
    onClick();
    setClickCount((prev) => prev + 1);
    alert(`${title} 눌림`);
  };

  const rate = useMemo(() => {
    // clickCount가 바뀌면서 나의 상태가 바뀌면서 rate가 리렌더링
    console.log("rate check");
    return likes > 10 ? "Good" : "Bad";
  }, [likes]); // 계산된 값만 메모이제이션

  return (
    <Profiler id="CommentItem" onRender={onRenderCallback}>
      <div className="CommentItem" onClick={handleClick}>
        <span>{title}</span>
        <br />
        <span>{content}</span>
        <br />
        <span>{likes}</span>
        <br />
        <span>{rate}</span>
        <br />
        <span>{clickCount}</span>
      </div>
    </Profiler>
  );
}

export default memo(CommentItem); // props는 동일한데 리렌더링 되는 경우 방지
