import React from "react";
import styled from "styled-components";

const Nav = styled.div`
  position: fixed;
  top: 0;
  background-color: #457667;

  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
`;

const Item = styled.div`
  font-size: 16px;
  font-family: "Read";
  font-weight: bold;
  color: #fff;
`;

export default function header() {
  return (
    <Nav>
      <Item>Home</Item>
      <Item>Contato</Item>
      <Item>Sobre</Item>
    </Nav>
  );
}
