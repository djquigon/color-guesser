import { useState, useEffect } from "react";
import ColorGuesserBtn from "./ColorGuesserBtn";

const ColorGuesser = () => {
  const [colors, setColors] = useState([0, 0, 0]);
  const [currColor, setCurrColor] = useState(0);
  const [formMessage, setFormMessage] = useState("");

  useEffect(() => {
    generateColors();
  }, []);

  useEffect(() => {
    // 2 and 0 are the max and mins
    setCurrColor(colors[Math.floor(Math.random() * (2 - 0 + 1) + 0)]);
  }, [colors]);

  const generateColors = () => {
    //generate 3 hex values where one is the correct one and set that to colors state
    let newColors = [];
    for (let i = 0; i < 3; i++) {
      newColors[i] =
        "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");
    }
    setColors(newColors);
  };

  const getStyle = () => {
    return { backgroundColor: currColor };
  };

  return (
    <>
      <div className="w-1/2 h-1/3 rounded" style={getStyle()}>
        Pick the color shown here from the options below
      </div>
      <p>{formMessage}</p>
      <div>
        <ColorGuesserBtn
          generateColors={generateColors}
          setFormMessage={setFormMessage}
          currColor={currColor}
          choice={colors[0]}
        />
        <ColorGuesserBtn
          generateColors={generateColors}
          setFormMessage={setFormMessage}
          currColor={currColor}
          choice={colors[1]}
        />
        <ColorGuesserBtn
          generateColors={generateColors}
          setFormMessage={setFormMessage}
          currColor={currColor}
          choice={colors[2]}
        />
      </div>
    </>
  );
};

export default ColorGuesser;
