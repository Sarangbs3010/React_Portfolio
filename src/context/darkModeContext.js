import { createContext, useReducer } from "react"
import DarkModeReducer from "./darkModeReducer";

const I_S = {
    darkMode : false
};

export const DarkModeContext = createContext(I_S);

export const DarkModeContextProvider = ({children}) => {
    const [state , dispatch] = useReducer(DarkModeReducer,I_S);

    return(
        <DarkModeContext.Provider value= {{darkMode : state.darkMode, dispatch}}>
            {children}
        </DarkModeContext.Provider>    
    );
};