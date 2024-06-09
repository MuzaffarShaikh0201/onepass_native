import { Colors } from "@/constants/constants";
import { createContext } from "react";

export const ThemeContext = createContext({
    theme: Colors.light,
    toggleTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;
