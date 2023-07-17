import React, { createContext, useState } from 'react'
import { useContext } from 'react'
import { useReducer } from 'react'
import { produce } from 'immer'

export const CounterContext = createContext({})
const initialState = {
    count: 0
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            
            return {
                count: state.count + 1
            }
        case 'DECREMENT':
            return {
                count: state.count - 1
            }
        case 'INCREASE':
            return {
                count: state.count + action.payload
            }
        default:
            return state
    }
}
const CounterProvider = ({ children }) => {

    const [state, dispatch] = useReducer(produce(reducer), initialState)
    return (
        <CounterContext.Provider value={{ state, dispatch }}>
            {children}
        </CounterContext.Provider>
    )
}
export default CounterProvider