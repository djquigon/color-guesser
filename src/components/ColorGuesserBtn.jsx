import React from "react";

const ColorGuesserBtn = ({
  generateColors,
  setFormMessage,
  currColor,
  choice,
}) => {
  const onClick = () => {
    if (choice === currColor) {
      setFormMessage("Correct, keep going!");
      generateColors();
    } else {
      setFormMessage("Incorrect");
    }
  };

  return (
    <button onClick={onClick} className="hex-btn">
      {choice}
    </button>
  );
};

export default ColorGuesserBtn;
