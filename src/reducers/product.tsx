import { pause } from "../util/pause";

export const productReducer = (state: any, action: any) => {
    switch (action.type) {
        case "FETCH":
            state.products = action.payload
            return;
        case "ADD_PRODUCT":
            state.isloading = true;
            pause(3000)
            state.products.push(action.payload);
            state.isloading = false
            return;
        case "UPDATE_PRODUCT":
            const product = action.payload
            state.products = state.products.map((item: any) => item.id === product.id ? product : item)
            return;
        case "DELETE_PRODUCT":
            const id = action.payload;
            state.products = state.products.filter((item: any) => item.id !== id)
            return;
        default:
            return state;
    }
}