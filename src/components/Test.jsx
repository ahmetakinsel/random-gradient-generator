import React, { useState } from "react";
import {
  Container,
  SelectorWrapper,
  InputWrapper,
  HexLabelWrapper,
} from "./Layout/index";
import styled from "styled-components";
import { AiFillDelete } from "react-icons/ai";

const Header = styled.h3`
  font-size: 32px;
  color: #fff;
  text-align: center;
`;

const HexLabel = styled.label``;

const DegreeLabel = styled.label``;

const HexSelector = styled.input`
  width: 200px;
  height: 60px;
  box-shadow: 1px 0px 73px 0px rgba(0, 0, 0, 0.4);
  -webkit-box-shadow: 1px 0px 73px 0px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 1px 0px 73px 0px rgba(0, 0, 0, 0.4);
`;

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

//Refactor

const hexCode1 = hex
  .sort(() => Math.random() - 0.5)
  .join("")
  .slice(0, -10)
  .toString();
const firstColor = "#" + hexCode1;

const hexCode2 = hex
  .sort(() => Math.random() - 0.5)
  .join("")
  .slice(0, -10)
  .toString();
const secondColor = "#" + hexCode2;

const hexes = [firstColor, secondColor];

const Generator = () => {
  const [gradients, setGradients] = useState(hexes);
  const [degrees, setDegree] = useState(90);

  const createGradient = () => {
    return `linear-gradient(${degrees}deg, #${hexCode1}, #${hexCode2}) `;
  };

  const handleInputColorChange = (index) => (e) => {
    // function that return function to reach inside the .map()
    const newColor = e.target.value;
    const newColors = gradients.map((gradient, idx) =>
      idx === index ? newColor : gradient
    );
    setGradients(newColors);
    createGradient();
  };

  const randomHexGenerator = () => {
    const hexCode = hex
      .sort(() => Math.random() - 0.5)
      .join("")
      .slice(0, -10)
      .toString();
    return "#" + hexCode;
  };

  const addColor = () => {
    setGradients([...gradients, randomHexGenerator()]);
  };
  const removeColor = (idx) => () => {
    setGradients(gradients.filter((gradient, index) => index !== idx));
  };
  const gradientName = createGradient(gradients, degrees);

  // const onDegreeChange = () => {};

  return (
    <>
      <Container
        style={{
          background: createGradient(),
        }}
      >
        <div>
          <Header>Random Gradient Generator</Header>
        </div>
        <SelectorWrapper>
          {gradients.map((gradient, idx) => {
            return (
              <InputWrapper>
                <HexSelector
                  type="color"
                  name={`color-${idx}`}
                  value={`${gradient}`}
                  onInput={handleInputColorChange(idx)}
                />
                <HexLabelWrapper>
                  <HexLabel>
                    {idx === 0 ? `#${hexCode1}` : `#${hexCode2}`}
                  </HexLabel>
                  <AiFillDelete
                    style={{
                      width: "30px",
                      height: "18px",
                      cursor: "pointer",
                    }}
                    onClick={removeColor(idx)}
                  />
                </HexLabelWrapper>
              </InputWrapper>
            );
          })}
        </SelectorWrapper>
        <input
          type="number"
          name="degrees"
          value={degrees}
          onChange={(e) => setDegree(e.target.value)}
          min={0}
          max={360}
        />
        <DegreeLabel>Degrees</DegreeLabel>

        <div>
          <label>{gradientName}</label>
        </div>
        <div>
          <button onClick={() => addColor()}>Add Color</button>
        </div>
      </Container>
    </>
  );
};

export default Generator;
