import { combineReducers } from "redux";
import { prductReduser } from "./productReduser";

export const reducers = combineReducers ({
    allProducts: prductReduser
})