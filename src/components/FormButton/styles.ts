import styled from "styled-components";

export const FormButtonContainer = styled.button`
  width: 100%;
  height: 2.4rem;

  background: ${(props) => props.theme.ORANGE_500};
  border: 0;
  border-radius: 4px;

  cursor: pointer;

  font-weight: 500;

  transition: all 100ms ease-in-out;

  &:not(:disabled):hover {
    filter: brightness(1.1);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;
