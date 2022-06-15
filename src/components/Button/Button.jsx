import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  display: inline-block;
  padding: 5px;
  width: 150px;
  height: 40px;
  margin: 0 0.3em 0.3em 0;
  border-radius: 2em;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: #ffffff;
  background-color: #4eb5f1;
  text-align: center;
  transition: all 0.2s;
  border: none;

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
