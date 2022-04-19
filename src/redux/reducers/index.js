import { combineReducers } from "redux";
import { prductReduser, selectedProductReducer } from "./productReduser";

export const reducers = combineReducers ({
    allProducts: prductReduser,
    product:selectedProductReducer
})