import { createContext } from "react";

export const TailorContext = createContext()

const TailorContextProvider = (props) => {
    const value = {

    }
    return(
        <TailorContext.Provider value={value}>
            {props.children}
        </TailorContext.Provider>
    )
}

export default TailorContextProvider