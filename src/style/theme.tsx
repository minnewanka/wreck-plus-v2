import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    grey: "#b5b5b5",
    black: "#000000",
  },
  fonts: ["sans-serif", "Roboto"],
};

const Theme: React.FC = ({ children }: { children?: React.ReactNode }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export { theme, Theme };
