import React, { useState } from "react";
import {
  Container,
  SelectorWrapper,
  InputWrapper,
  HexLabelWrapper,
} from "./Layout/index";
import styled from "styled-components";

const Header = styled.h3`
  font-size: 32px;
  color: #fff;
  text-align: center;
`;

const HexLabel = styled.label``;

const DegreeLabel = styled.label``;

const HexSelector = styled.input`
  width: 240px;
  height: 180px;
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

const hexCode1 = hex
  .sort(() => Math.random() - 0.5)
  .join("")
  .slice(0, -10)
  .toString();
const colorLeft = "#" + hexCode1;

const hexCode2 = hex
  .sort(() => Math.random() - 0.5)
  .join("")
  .slice(0, -10)
  .toString();
const colorRight = "#" + hexCode2;

const Generator = () => {
  const [gradients, setGradients] = useState([colorLeft, colorRight]);
  const [degrees, setDegree] = useState(90);

  const createGradient = () => {
    return `linear-gradient(${degrees}deg, #${hexCode1}, #${hexCode2}) `;
  };

  const handleInputColorChange = (index) => (e) => {
    const newColor = e.target.value;
    const newColors = gradients.map((gradient, idx) =>
      idx === index ? newColor : gradient
    );
    setGradients(newColors);
    createGradient();
  };

  const GradientName = createGradient(gradients, degrees);

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
                  <HexLabel>{`color-${idx + 1}`}</HexLabel>
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
          <label>{GradientName}</label>
        </div>
      </Container>
    </>
  );
};

export default Generator;
