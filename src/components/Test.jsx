import React, { useState } from "react";
import {
  Container,
  SelectorWrapper,
  InputContainer,
  InputWrapper,
  HexButtonWrapper,
  ButtonWrapper,
  DegreeWrapper,
  Wrapper,
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
    background-color: ${props.showColorPicker && "transparent"};
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
    return `linear-gradient(${degrees}deg, #${hexCode1}, #${hexCode2}) `;
  };

  const handleInputColorChange = (index) => (e) => {
    // function that return function to reach inside the .map()
    const newColor = e.target.value;
    const newColors = gradients.map((gradient, idx) =>
      idx === index ? newColor : gradient
    );
    setGradients(newColors);
    createGradients();
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
    setGradients();
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
                <InputWrapper>
                  {/* <HexColorPicker
                    color={gradient}
                    type="color"
                    name={`color-${idx}`}
                    value={`${gradient}`}
                    onChange={handleInputColorChange(idx)}
                  /> */}
                  <HexButtonWrapper>
                    {showColorPicker && (
                      <HexColorPicker
                        color={gradient}
                        name={`color-${idx}`}
                        value={`${gradient}`}
                        onChange={handleInputColorChange(idx)}
                      />
                    )}
                    <HexButton
                      showColorPicker={showColorPicker}
                      onClick={handleShowColorPicker}
                    >
                      {/* Button background should be same color with hexcode */}
                      {idx === 0 ? `#${hexCode1}` : `#${hexCode2}`}
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
                </InputWrapper>
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

        <div style={{ padding: "20px" }}>
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
