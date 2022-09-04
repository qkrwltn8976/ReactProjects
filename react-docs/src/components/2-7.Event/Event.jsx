import React from "react";

export default function Event() {
  const handleMouseLeave = () => {
    console.log("handleMouseLeave");
  };

  const handleButtonClick = (e) => {
    console.dir(e);
    console.log("handleButtonClick"); // 3
  };

  const handleClickCapture = () => {
    console.log("handleClickCapture"); // 1
  };

  const handleClickCapture2 = () => {
    console.log("handleClickCapture2"); // 2
  };

  const handleClickBubble = () => {
    console.log("handleButtonBubble"); // 4
  };

  return (
    <div onClickCapture={handleClickCapture}>
      <div onClickCapture={handleClickCapture2} onClick={handleClickBubble}>
        <button onClick={handleButtonClick} onMouseLeave={handleMouseLeave}>
          Button
        </button>
      </div>
    </div>
  );
}
