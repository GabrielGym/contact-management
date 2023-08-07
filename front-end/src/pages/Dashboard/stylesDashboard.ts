import { styled } from "styled-components";

const darkTheme = {
  background: "#121212",
  color: "#ffffff",
  shadow: "rgba(0, 0, 0, 0.75)",
};

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const Section = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 20px auto;
  padding: 20px;
  background-color: ${darkTheme.background};
  color: ${darkTheme.color};
  box-shadow: 0px 4px 10px ${darkTheme.shadow};
  border-radius: 8px;

  h1 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    max-width: 100%;
    margin-bottom: 20px;
    padding: 20px;
    background-color: ${darkTheme.background};
    color: ${darkTheme.color};
    box-shadow: 0px 4px 10px ${darkTheme.shadow};
    border-radius: 8px;
    align-items: flex-start;
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    gap: 10px;

    span {
      font-size: 2.6rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    h2 {
      font-size: 1.7rem;
    }

    h3 {
      font-size: 1.4rem;
      margin-top: 5px;
      max-width: 30rem;
    }

    div {
      display: flex;
      flex-direction: row;
      gap: 1rem;
    }

    button {
      font-size: 16px;
      padding: 5px 10px;
      border: none;
      background-color: ${darkTheme.color};
      color: ${darkTheme.background};
      cursor: pointer;
      border-radius: 4px;
    }
  }

  @media (min-width: 500px) {
    > ul > li {
      flex-direction: row;

      div {
        flex-direction: column;
      }
    }
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 15px;
  background-color: ${darkTheme.shadow};
  box-shadow: 0px 4px 10px ${darkTheme.shadow};
  border-radius: 8px;
  color: white;
  width: 100%;
  gap: 2rem;

  h1 {
    font-size: 3rem;
    margin: 0;
    font-weight: 400;
  }

  .bell {
    font-size: 24px;
    cursor: pointer;
  }

  > button {
    border-radius: 8px;
    border: none;
    background-color: var(--color-blue-300);
    padding: 0.8rem;
    color: var(--color-white);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .form-search {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;

    > button {
      font-size: 20px;
      color: var(--color-white);
      margin-right: 8px;
      margin-top: 5px;
      background-color: transparent;
      border: none;
    }

    > input {
      padding: 8px;
      border: none;
      border-radius: 4px;
      background-color: ${darkTheme.color};
      color: ${darkTheme.background};
      border-radius: 8px;
      border: none;
    }
  }

  > div {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 5px;

    > div {
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
      align-items: center;
      gap: 5px;
      > span {
        font-size: 20px;
        margin-top: 2px;
      }
      > button {
        display: flex;
        align-items: center;
        background-color: transparent;
        box-shadow: 0px 2px 8px var(--color-gray-800);
        border-radius: 4px;
        border: none;
        color: var(--color-white);
        padding: 0.6rem 1rem;
        font-size: 1.4rem;
      }
    }
  }

  @media (min-width: 800px) {
    flex-direction: row;
    padding: 15px;
    background-color: ${darkTheme.shadow};
    box-shadow: 0px 4px 10px ${darkTheme.shadow};
    border-radius: 8px;
    color: white;
    width: 100%;
  }
`;
