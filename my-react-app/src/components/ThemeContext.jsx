import {createContext, useEffect, useState} from "react";

export const ThemeContext = createContext()


export const ThemeProvider = ({children}) => {
    const StorageKey = 'features-color-theme'

    const switchTheme = ()=>{
        setTheme((cur)=> {cur === "light" ? "dark" : "light"})
    }
    const [Theme, setTheme] = useState("light")

    useEffect(() => {
        localStorage.setItem(StorageKey, Theme)
        document.documentElement.setAttribute('data-theme', Theme)
    }, []);
    return(
        <ThemeContext.Provider value ={{switchTheme, Theme}}>
            {children}
        </ThemeContext.Provider>
    )
}

