import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
   :root {
    --color-blue-900: #0d47a1;
    --color-blue-300: #64b5f6;
    --color-black: #121212;
    --color-white: #ffffff;
    --color-gray-900: #212121;
    --color-gray-800: #424242;
    --color-gray-700: #616161;
    --color-gray-600: #757575;
    --color-gray-500: #9e9e9e;
    --color-gray-400: #bdbdbd;
    --color-gray-300: #e0e0e0;
    --color-gray-100: #f5f5f5;

    font-size: 60%;   
  }

  @media (min-width: 700px) {
    :root {
      font-size: 62.5%; // root font-size: 10px;
    }
  }

  body {
    background: var(--color-black);
    color: var(--color-white);
    padding: 1rem;
  }

  body, input, button, textarea {
    font-family: 'Inter';
    font-size: 1.6rem;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;