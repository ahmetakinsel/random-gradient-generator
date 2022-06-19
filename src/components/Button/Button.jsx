import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  width: 150px;
  height: 50px;
  margin: 0 0.3em 0.3em 0;
  border-radius: 2em;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #ffffff;
  background-color: #4eb5f1;
  text-align: center;
  transition: all 0.2s;
  border: none;
  font-family: "Montserrat", sans-serif;

  :hover {
    background-color: #4095c6;
    cursor: pointer;
  }
`;

const Button = (props) => {
  return (
    <>
      <Btn onClick={props.onClick}>{props.title}</Btn>
    </>
  );
};

export default Button;
