import React, { useState } from "react";

const hex = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

const hexCode = hex
  .sort(() => Math.random() - 0.5)
  //hex.length = aynı 2 pattern return eder.
  .join("")
  .slice(0, -10)
  .toString();

const hexCode2 = hex
  .sort(() => Math.random() - 0.5)
  .join("")
  .slice(0, -10)
  .toString();

const Generator = () => {
  const [toggle, setToggle] = useState(false);

  const GenerateGradient = () => {
    setToggle(!toggle);
  };

  return (
    <div
      style={{
        backgroundColor: toggle && `#${hexCode}`,
      }}
    >
      <div
        style={{
          backgroundColor: toggle && `#${hexCode2}`,
        }}
      ></div>

      <button type="submit" onClick={() => GenerateGradient()}>
        Click Me
      </button>
    </div>
  );
};

export default Generator;
