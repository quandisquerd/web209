import React, { createContext, useState } from 'react'
import { useContext } from 'react'
import { pause } from '../util/pause'
import { instance } from '../axios/instance'
import { useEffect } from 'react'
import { useReducer } from 'react'
import { produce } from "immer";
import { productReducer } from '../reducers/product'
export const ProductContext = createContext({})

const ProductProvider = ({ children }) => {
    //usereducer

    const initialState = {
        products: [],
        isloading: false,
    }
    const [state, dispatch]: any = useReducer(produce(productReducer), initialState)


    return (
        <ProductContext.Provider value={{ state, dispatch }}>
            {children}
        </ProductContext.Provider>
    )
}
export default ProductProvider