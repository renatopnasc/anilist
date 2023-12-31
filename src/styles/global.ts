import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => props.theme.ORANGE_500};
  }
  
  body, input, textarea, button {
    font-size: 1rem;
    color: ${(props) => props.theme.GRAY_100};
    font-family: 'Poppins', sans-serif;
  }

  body {
    background: ${(props) => props.theme.GRAY_600};
    
  }
`;
