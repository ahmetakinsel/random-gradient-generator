import React, { useState } from "react";
import {
  Container,
  SelectorWrapper,
  InputContainer,
  HexButtonWrapper,
  ButtonWrapper,
  DegreeWrapper,
} from "./Layout/index";
import {
  DegreeSelect,
  DegreeLabel,
  GradientDisplayer,
} from "./InputsAndLabels/index";
import Button from "./Button/Button";
import styled, { css } from "styled-components";
import { AiFillDelete } from "react-icons/ai";
import { HexColorPicker } from "react-colorful";
import "./ColorPickerStyles.css";

const Header = styled.h3`
  font-size: 32px;
  color: #fff;
  text-align: center;
  margin: 0;
`;

const HexButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  height: 40px;
  border-radius: 10px;
  border: none;
  cursor: pointer;

  ${(props) => css`
    width: ${props.showColorPicker && "100%"};
    height: ${props.showColorPicker && "100%"};
    background-color: ${props.colour};
    margin-top: ${props.showColorPicker && "3px"};
  `};
`;

const DeleteIcon = styled(AiFillDelete)`
  :hover {
    color: red;
  }
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
  const [showColorPicker, setShowColorPicker] = useState(false);

  const randomHexGenerator = () => {
    const hexCode = hex
      .sort(() => Math.random() - 0.5)
      .join("")
      .slice(0, -10)
      .toString();
    return "#" + hexCode;
  };

  const createGradients = () => {
    return `linear-gradient(${degrees}deg, ${gradients.join()}) `;
  };

  const handleInputColorChange = (index) => (colour) => {
    const newColor = colour;
    const newColors = gradients.map((gradient, idx) =>
      idx === index ? newColor : gradient
    );
    setGradients(newColors);
  };

  const addColor = () => {
    setGradients([...gradients, randomHexGenerator()]);
  };
  const removeColor = (idx) => () => {
    setGradients(gradients.filter((gradient, index) => index !== idx));
  };
  const gradientName = createGradients(gradients, degrees);

  const handleShowColorPicker = () => {
    setShowColorPicker(!showColorPicker);
  };

  const changeBackgroundColor = () => {
    let newColor1 = randomHexGenerator();
    let newColor2 = randomHexGenerator();
    setGradients([newColor1, newColor2]);
  };

  return (
    <>
      <Container
        style={{
          background: createGradients(),
        }}
      >
        <div>
          <Header>Random Gradient Generator</Header>
        </div>
        <SelectorWrapper>
          {gradients.map((gradient, idx) => {
            return (
              <InputContainer>
                <HexButtonWrapper>
                  {showColorPicker && (
                    <HexColorPicker
                      color={gradient}
                      name={`color-${idx}`}
                      value={`${gradient}`}
                      onChange={handleInputColorChange(idx)}
                      className="color"
                    />
                  )}
                  <HexButton
                    showColorPicker={showColorPicker}
                    onClick={handleShowColorPicker}
                    colour={gradient}
                  >
                    {gradient}
                    <DeleteIcon
                      style={{
                        width: "30px",
                        height: "18px",
                        cursor: "pointer",
                      }}
                      onClick={removeColor(idx)}
                    />
                  </HexButton>
                </HexButtonWrapper>
              </InputContainer>
            );
          })}
        </SelectorWrapper>
        <DegreeWrapper>
          <DegreeLabel>Degrees</DegreeLabel>
          <DegreeSelect
            type="number"
            name="degrees"
            value={degrees}
            onChange={(e) => setDegree(e.target.value)}
            min={0}
            max={360}
          />
        </DegreeWrapper>

        <div style={{ padding: "20px", textAlign: "center" }}>
          <GradientDisplayer>{gradientName}</GradientDisplayer>
        </div>
        <ButtonWrapper>
          <Button title="Add Color" onClick={() => addColor()} />
          <Button title="Generate" onClick={() => changeBackgroundColor()} />
        </ButtonWrapper>
      </Container>
    </>
  );
};

export default Generator;
