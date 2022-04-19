import { Actions } from "../content/actions"

const initionalState = {
    product: []
}

export const prductReduser = (state = initionalState ,  { type , payload }) => {
   switch(type){
       case Actions.SET_PRODUCTS:
           return { ...state , product:payload }
         default:
           return state
   }
}

export const selectedProductReducer = (state = initionalState ,  { type , payload }) => {
  switch(type){
    case Actions.SELECTED_PRODUCT:
        return { ...state , ...payload }
      default:
        return state
    }
}