import { styled } from "styled-components";

export const LoginStyles = styled.main`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border-radius: 8px;
  border: 2px solid var(--color-gray-900);
  padding: 3rem 2rem;
  margin: 6rem auto;
  gap: 1.5rem;
  font-weight: 500;
  color: var(--color-white);
  max-width: 650px;

  > h2 {
    margin-top: 1rem;
    font-size: 1.2rem;
    color: var(--color-gray-400);
    text-align: center;

    > span {
      color: var(--color-white);
      cursor: pointer;
    }
  }

  > form {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    gap: 1rem;

    > input {
      padding: 0.5rem 1rem;
      border-radius: 3px;
      border: none;
    }

    > button {
      margin-top: 1rem;
      border-radius: 4px;
      border: 0.1rem solid var(--color-white);
      background-color: transparent;
      padding: 0.8rem 0.4rem;
      width: 100%;
      color: var(--color-white);
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  > button {
    border-radius: 4px;
    border: 0.1rem solid var(--color-white);
    background-color: transparent;
    padding: 0.8rem 0.4rem;
    width: 100%;
    color: var(--color-white);
    display: flex;
    align-items: center;
    justify-content: center;
  }

`;
