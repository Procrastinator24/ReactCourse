import {createContext} from "react";

export const supabaseContext = createContext()

export const supabaseProvider = ({children}) => {


    return(
        <supabaseContext.Provider value={}>
            {children}
        </supabaseContext.Provider>
    )
}