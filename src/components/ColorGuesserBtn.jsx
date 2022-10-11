import React from "react";

const ColorGuesserBtn = ({
  generateColors,
  setFormMessage,
  currColor,
  choice,
}) => {
  const onClick = () => {
    if (choice === currColor) {
      setFormMessage("Correct");
      generateColors();
    } else {
      setFormMessage("Incorrect");
    }
  };

  return (
    <button
      onClick={onClick}
      className="bg-gray-800 text-white font-bold py-2 px-4 
      mt-4 mb-4 mx-8 shadow-lg border-b-4 border-primary hover:border-secondary 
      rounded transition-all duration-300 ease-linear cursor-pointer"
    >
      {choice}
    </button>
  );
};

export default ColorGuesserBtn;
