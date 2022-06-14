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

const hexCode1 = hex
  .sort(() => Math.random() - 0.5)
  .join("")
  .slice(0, -10)
  .toString();

const hexCode2 = hex
  .sort(() => Math.random() - 0.5)
  .join("")
  .slice(0, -10)
  .toString();

const Generator = () => {
  const [gradients, setGradients] = useState(["#123478", "#842657"]);
  const [degrees, setDegree] = useState(0);

  const createGradient = () => {
    return `linear-gradient(${degrees}deg, #${hexCode1}, #${hexCode2})`;
  };

  return (
    <>
      {gradients.map((gradient, index) => {
        return (
          <div>
            <input type="color" name={`color-${index}`} value={`${gradient}`} />
            <label>{`color-${index + 1}`}</label>
          </div>
        );
      })}
      <div
        style={{
          background: createGradient(),
          width: "500px",
          height: "300px",
        }}
      >
        hhh
      </div>
    </>
  );

  /*return (
    <div
      style={{
                backgroundColor: `linear-gradient(to bottom,  ${hexCode1} 0%,${hexCode2} 100%)`,

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
  );*/
};

export default Generator;
