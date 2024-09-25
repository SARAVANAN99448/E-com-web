import { createContext } from "react"
import { useState } from "react"
export const Cartcontext = createContext()
export const Cartprovider = ({ children }) => {
    const [cart, setcart] = useState([])
    const URL = import.meta.env.VITE_API_BACKEND

    return (
        <Cartcontext.Provider value={{ cart, setcart }}>
            {children}
        </Cartcontext.Provider>
    )

}



export default Cartprovider
