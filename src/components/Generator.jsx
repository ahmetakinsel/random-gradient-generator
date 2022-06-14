import "./style.css";
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
  const [toggle, setToggle] = useState("");
  const [gradient2, setGradient2] = useState();

  const GenerateGradient = () => {
    setToggle(!toggle);

    /* const hexCode1 = hex
      .sort(() => Math.random() - 0.5)
      .join("")
      .slice(0, -10)
      .toString();

    return hexCode1;*/
    return console.log("click");
  };

  return (
    <div
      className="container"
      style={{
        backgroundColor: toggle && `#${hexCode1}`,
      }}
    >
      <div className="container-2">2</div>

      <div className="container-3">
        {" "}
        <h1 className="header">Click here to generate a color</h1>
        <button
          className="button"
          type="submit"
          onClick={() => GenerateGradient()}
        >
          🎨
        </button>
        <input type="color"></input>
      </div>
      <div
        className="container-4"
        style={
          {
            //backgroundColor: !toggle && `#${hexCode}`,
          }
        }
      >
        3
      </div>
    </div>
  );
};

export default Generator;
