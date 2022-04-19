import { Actions } from "../content/actions"

export const setProduct = ( products ) => {
    return {
        type : Actions.SET_PRODUCTS ,
        payload: products
    }
}

export const selectedProduct = (product) => {
    return{
        type : Actions.SELECTED_PRODUCT,
        payload: product
    }
}

export const romeveSelectedProduct = () => {
    return{
        type : Actions.REMOVE_SELECTED_PRODUCT,
    }
}