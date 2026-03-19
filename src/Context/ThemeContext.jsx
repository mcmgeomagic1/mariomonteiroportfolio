// Context/ThemeContext.js
import React, { createContext, useContext, useState } from "react";
import Theme from "../Themes/themes";

const ThemeContext = createContext();

export function ThemeProviderWrapper({ children }) {
  const [theme, setTheme] = useState(Theme);

  const updateTheme = (newPalette) => {
    setTheme((prev) => ({
      ...prev,
      colors: {
        ...prev.colors,
        mainPallet: { ...prev.colors.mainPallet, ...newPalette },
      },
    }));
  };

  const resetTheme = () => setTheme(Theme);

  return (
    <ThemeContext.Provider value={{ theme, updateTheme, resetTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useThemeContext = () => useContext(ThemeContext);
