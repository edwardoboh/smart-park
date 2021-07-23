import React, {createContext, useReducer, useState} from 'react'

const initialState = {
    parkA: 0,
    parkB: 0,
    parkC: 0,
    parkD: 0
}

export const parkContext = createContext(initialState)

export const ParkProvider = ({children}) => {
    const [park, setPark] = useState(initialState)
    // const [park, setPark] = useReducer()
    return(
        <parkContext.Provider value={{park, setPark}}>
            {children}
        </parkContext.Provider>
    )
}