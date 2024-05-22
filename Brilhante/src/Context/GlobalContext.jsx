import React from "react";
import { createContext, useState } from "react";

export const BrilhanteContext = createContext()

export const BrilhanteContextProvider = (({children}) => {
    const [email, setEmail] = useState([])

    return (
        <BrilhanteContext.Provider value={{email, setEmail}}>
            {children}
        </BrilhanteContext.Provider>
    )
})
