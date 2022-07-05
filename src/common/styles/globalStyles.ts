import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  };

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
      transition: all ${({ theme }) => theme.transitions.fast} linear;
    };

    @media (max-width: 768px) {
      font-size: 87.5%;
      transition: all ${({ theme }) => theme.transitions.fast} linear;
    };
  };

  body {
    background: ${({ theme }) => theme.colors.background};
		color: ${({ theme }) => theme.colors.text};
    -webkit-font-smoothing: antialiased;
  };

	body, input, textarea, button {
    font-family: '', sans-serif;
    font-weight: 400;
  };

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  };

  button {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.text};
  };

  a {
    color: unset;
    text-decoration: none;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  };
`;
