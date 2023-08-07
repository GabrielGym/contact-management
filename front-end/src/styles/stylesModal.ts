import ReactModal from "react-modal";
ReactModal.setAppElement("#root");
import styled from "styled-components";

export const CustomModal = styled(ReactModal)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 500px;
  padding: 1rem;
  margin: 1rem;
  background-color: #000;
  border-radius: 8px;
  box-shadow: 0px 6px 14px var(--color-gray-800);

  > form {
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 2rem 1rem;

    gap: 1rem;

    > input {
      padding: 0.5rem 1.2rem;
      border-radius: 3px;
      border: none;
    }

    .cadastrar {
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

    .edit {
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

    .close {
      position: absolute;
      right: 1rem;
      top: .6rem;
      background-color: transparent;
      box-shadow: 0px 2px 8px var(--color-gray-800);
      border-radius: 4px;
      border: none;
      color: var(--color-white);
      padding: 0.6rem 1rem;
      font-size: 1.1rem;

    }
  }
`;
