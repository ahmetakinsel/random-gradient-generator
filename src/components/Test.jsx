import React, { useState, useEffect } from "react";

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

  const handleInputColorChange = (e) => {
    const newColor = e.target.value;
    const newColors = gradients.map((gradient, idx) =>
      idx === 1 ? newColor : gradient
    );
    setGradients(newColors);
    createGradient();
  };

  const onDegreeChange = () => {};

  return (
    <>
      {gradients.map((gradient, idx) => {
        return (
          <div>
            <input
              type="color"
              name={`color-${idx}`}
              value={`${gradient}`}
              onInput={handleInputColorChange}
            />
            <label>{`color-${idx + 1}`}</label>
          </div>
        );
      })}
      <input
        type="number"
        name="degrees"
        value={degrees}
        onChange={(e) => setDegree(e.target.value)}
        min={0}
        max={360}
      />
      <label>Degrees</label>
      <div
        style={{
          background: createGradient(),
          width: "500px",
          height: "300px",
        }}
      >
        50.dk
      </div>
    </>
  );
};

export default Generator;
