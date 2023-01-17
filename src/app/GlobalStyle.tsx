import 'modern-normalize/modern-normalize.css';
import { createGlobalStyle } from 'styled-components/macro';

const styled = { createGlobalStyle };

export const GlobalStyle = styled.createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  h1,
  h2,
  h3,
  h4,
  ul,
  ol,
  li,
  p,
  a {
    margin: 0;
    padding: 0;
  }

  ul,
  ol {
    list-style: none;
  }

  button:not(:disabled) {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`;
