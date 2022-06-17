import React, { useState } from "react";
import {
  Container,
  SelectorWrapper,
  InputContainer,
  InputWrapper,
  HexButtonWrapper,
  ButtonWrapper,
  DegreeWrapper,
} from "./Layout/index";
import Button from "./Button/Button";
import styled from "styled-components";
import { AiFillDelete } from "react-icons/ai";
import { HexColorPicker } from "react-colorful";

const Header = styled.h3`
  font-size: 32px;
  color: #fff;
  text-align: center;
  margin: 0;
`;

const HexLabel = styled.button`
  display: flex;
  justify-content: center;
  font-size: 18px;
`;

const DegreeLabel = styled.label`
  font-size: 18px;
  margin-right: 10px;
`;

const HexSelector = styled.input`
  width: 110px;
  height: 50px;
  box-shadow: 1px 0px 73px 0px rgba(0, 0, 0, 0.4);
  -webkit-box-shadow: 1px 0px 73px 0px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 1px 0px 73px 0px rgba(0, 0, 0, 0.4);
`;

const DegreeSelect = styled.input`
  width: 75px;
  height: 30px;
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
  console.log(hexes, "hexes");
  console.log(gradients, "gradient");
  const [degrees, setDegree] = useState(90);
  const [showColorPicker, setShowColorPicker] = useState(false);

  const randomHexGenerator = () => {
    const hexCode = hex
      .sort(() => Math.random() - 0.5)
      .join("")
      .slice(0, -10)
      .toString();
    return `#${hexCode}`;
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
    console.log(newColors, "ss");
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
                    <HexLabel
                      style={{
                        background: createGradients(),
                      }}
                      onClick={handleShowColorPicker}
                    >
                      {showColorPicker && (
                        <HexColorPicker
                          color={gradient}
                          type="color"
                          name={`color-${idx}`}
                          value={`${gradient}`}
                          onChange={handleInputColorChange(idx)}
                        />
                      )}
                      {idx === 0 ? `#${hexCode1}` : `#${hexCode2}`}
                      <DeleteIcon
                        style={{
                          width: "30px",
                          height: "18px",
                          cursor: "pointer",
                        }}
                        onClick={removeColor(idx)}
                      />
                    </HexLabel>
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
          <label>{gradientName}</label>
        </div>
        <ButtonWrapper>
          <Button title="Add Color" onClick={() => addColor()} />
        </ButtonWrapper>
      </Container>
    </>
  );
};

export default Generator;
