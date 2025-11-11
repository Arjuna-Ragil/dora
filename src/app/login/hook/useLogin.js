'use client'

const { createContext, useContext, useState } = require("react");

const LoginContext = createContext()

export const LoginProvider = ({ children }) => {
    const [showSignUp, setShowSignUp] = useState(false)

    return(
        <LoginContext.Provider value={{showSignUp, setShowSignUp}}>
            {children}
        </LoginContext.Provider>
    )
}

export const useLogin = () => useContext(LoginContext)