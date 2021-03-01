import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    grey: "#b5b5b5",
    black: "#000000",
    white: "white",
  },
  fonts: ["sans-serif", "Roboto"],
  device: {
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
    xxl: "1600px",
  },
};

const Theme: React.FC = ({ children }: { children?: React.ReactNode }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export { theme, Theme };
