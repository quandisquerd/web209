import React from 'react'
import { useContext, useEffect } from 'react';
// import { ProductContext } from '../../context/PoductContext';
import "react-loading-skeleton/dist/skeleton.css";
import { instance } from '../../axios/instance';
import "../Counter/product.css"
const List = () => {
    const { state, dispatch }: any = useContext(' ')
    const [product, setproduct]: any = useState('')
    console.log(state);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                // call api
                const data = await instance.get(`/products`);
                // rerender
                dispatch({ type: "FETCH", payload: data });
            } catch (error: any) {
            } finally {
            }
        };
        fetchProducts();
    }, []);
    console.log(state);

    const addProduct = async (product: any) => {
        console.log(product);

        try {
            const data = await instance.post(`/products`, product);
            dispatch({ type: "ADD_PRODUCT", payload: data });
        } catch (error: any) {
        } finally {
        }
    };
    const removeProduct = async (product: any) => {
        console.log(product.id);

        try {
            await instance.delete(`/products/${product.id}`);
            dispatch({ type: "DELETE_PRODUCT", payload: product.id });
        } catch (error: any) {
        } finally {
        }
    };
    const updateProduct = async (product: any) => {
        try {
            const data = await instance.put(`/products/${product.id}`, product);
            dispatch({ type: "UPDATE_PRODUCT", payload: data });
        } catch (error: any) {
        } finally {
        }
    };
    return (
        <>
            {state?.isloading ? (
               <p> "loading..."</p>
            ) : (
                <div>
                    {state?.products?.map((item: any) => {
                        return <div key={item.id}>{item.name} <button type="button" onClick={() => removeProduct(item)}> XOA</button>  <button onClick={() => updateProduct({ name: "Product C updated ", id: item.id })}> Update PRoduct</button>   </div>;
                    })}
                    <button type='submit' onClick={() => addProduct({ name: "Product C" })}>ADD PRODUCT</button>
                </div>
            )}
        </>
    )
}

export default List