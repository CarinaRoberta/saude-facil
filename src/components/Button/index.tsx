import React from "react";
import styled from "styled-components";

const Container = styled.div`
  button {
    border: none;
    width: 150px;
    height: 40px;
    font-size: 0.45em;
    font-weight: bold;
    border-radius: 6px;
    color: var(--white);
    background: var(--green-medium);
    cursor: pointer;
    @media screen and (max-width: 768px) {
      margin: 0 20px;
    }

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

interface IButton {
  onClick?: () => void;
}

const Button: React.FC<IButton> = ({ onClick, children }) => {
  return (
    <Container>
      <button onClick={onClick}>{children}</button>
    </Container>
  );
};

export default Button;
