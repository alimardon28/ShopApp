import { Actions } from "../content/actions"

const initionalState = {
    product: [
        {
            
        }
    ]
}

export const prductReduser = (state = initionalState ,  { type , payload }) => {
   switch(type){
       case Actions.SET_PRODUCTS:
           return state
         default:
           return state
   }
}