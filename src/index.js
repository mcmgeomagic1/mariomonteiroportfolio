import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/globals";

import { ThemeProviderWrapper, useThemeContext } from "./Context/ThemeContext";

function InnerApp() {
  const { theme } = useThemeContext();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  );
}

function Root() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <ThemeProviderWrapper>
          <InnerApp />
        </ThemeProviderWrapper>
      </BrowserRouter>
    </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />);
