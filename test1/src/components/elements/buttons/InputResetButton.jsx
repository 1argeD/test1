import React from "react";
import styled from "styled-components";
import { ReactComponent as CloseIcon } from "../../../assets/icons/close.svg";

const InputResetButton = ({ onClick }) => {
  return (
    <StInputResetButton onClick={onClick}>
      <StCloseIcon />
    </StInputResetButton>
  );
};

const StInputResetButton = styled.span`
  border-radius: 5rem;
  width: 2rem;
  height: 2rem;
  border: none;
  position: absolute;
  top: 0.4rem;
  right: 0.5rem;
  text-align: center;
  cursor: pointer;
  margin-left: -1rem;
  background-color: ${({ theme }) => theme.InputResetButtonColor};
`;

const StCloseIcon = styled(CloseIcon)`
  width: 0.9rem;
  height: 0.9rem;
  margin: 0.6rem 0;
`;
export default InputResetButton;
