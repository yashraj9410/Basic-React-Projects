import React, {useContext, createContext} from "react";{}

// provideing context for the children elements 
const ThemeContext = createContext(
    {
        themeMode:"light",
        lightTheme:() => {},
        darkTheme:() => {}
    }
);

// wraps the childres 
export const ThemeProvider = ThemeContext.Provider;

export default function useTheme(){
    return useContext(ThemeContext);
}