import { Type } from "./actiontype";

export const initailState={
    basket:[],
    user:null
}
export const reducer = (state, action) => {
switch (action.type) {
    case Type.ADD_TO_BASKET:
        const existingItem=state.basket.find((item)=>item.id===action.item.id)  
        if(!existingItem) {
            return  {
                ...state,
                basket : [...state.basket,{...action.item,amount:1}] 

            } 
        } else {
            const updatedBasket=state.basket.map((item)=>{
           return     item.id===action.item.id? {...item,amount:item.amount+1}:item
            }) 
            return{
                ...state,
                basket:updatedBasket
            }
        }

        case Type.REMOVE_FROM_BASKET:
            const index =state.basket.findIndex((item)=>item.id===action.id)
            let newBasket  =[...state.basket] 
            if(index>=0) {
                if(newBasket[index].amount> 1) {
                    newBasket[index]={...newBasket[index],amount:newBasket[index].amount-1}
                } else
                {
                    newBasket.splice(index,1)
                }
            } 
            return {
                ...state,
                basket:newBasket 
            }

            //FOR USER AUTH AND OTHER SIMILARTHINGS
case Type.SET_USER:
    return {
        ...state,
        user:action.user
    }


        //check if the item is  exists  
         
        // the following must be trash to to add the multiple items in the cart at once the only thing that the following code do is to add the  item to the cart one by one  only that is why we left behaind. 
        // return {
        //     ...state,
        //     basket:[...state.basket, action.item]
        // }
      
    default:
        return state;
}

}
// const [state, dispatch]=useReducer(reducer, initailState);