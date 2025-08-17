import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  /* This line automatically imports the correct fonts from Google. No downloads needed. */
  @import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Poppins:wght@400;500;700&display=swap');
  
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.body};
    line-height: 1.7;
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3, h4 {
    font-family: ${({ theme }) => theme.fonts.headings};
    color: ${({ theme }) => theme.colors.primary};
    line-height: 1.2;
    font-weight: normal;
  }

  h1 { font-size: clamp(3rem, 7vw, 5rem); }
  h2 { font-size: clamp(2.5rem, 6vw, 3.5rem); }
  h3 { font-size: 1.75rem; }
  p { margin-bottom: 1rem; max-width: 65ch; }
`;

export default GlobalStyles;
