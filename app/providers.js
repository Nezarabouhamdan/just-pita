"use client";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "@/styles/GlobalStyles";
import { theme } from "@/styles/theme";

// This component uses the "use client" directive to ensure
// that ThemeProvider and other client-side context providers
// are rendered correctly in the browser.
export function Providers({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}
