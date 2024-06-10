import { createContext } from "react";

export const AppDataContext = createContext({
    isFirstLoaded: false,
    setIsFirstLoaded: (state: boolean) => {},
});

export const AppDataProvider = AppDataContext.Provider;
