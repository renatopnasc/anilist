import styled from "styled-components";

export const SignInContainer = styled.main`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: auto 1fr;

  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  flex: 1;

  width: 30rem;
  padding: 0 2rem;

  background: ${(props) => props.theme.GRAY_600};

  span {
    color: ${(props) => props.theme.ORANGE_500};
    font-size: 0.875rem;
    font-weight: bold;
  }

  a {
    color: ${(props) => props.theme.GRAY_100};
    text-decoration: none;
    font-size: 0.875rem;
    font-weight: 400;
  }
`;

export const FormInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 0.5rem;

  width: 100%;

  label {
    font-size: 0.875rem;
  }

  input {
    border: 0;
    background: ${(props) => props.theme.GRAY_500};
    height: 2.4rem;
    padding: 0 1rem;
    border-radius: 4px;

    display: flex;
    align-items: center;

    &::placeholder {
      font-size: 0.875rem;
    }
  }
`;
