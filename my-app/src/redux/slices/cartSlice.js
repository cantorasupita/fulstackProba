import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  totalPrice: 0,
  items: []

}


//Slice
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action){
        const findItem = state.items.find(obj=>obj.id === action.payload.id)

        if(findItem){
                findItem.count++;
        } else{
                state.items.push({...action.payload, count: 1})
        }

        state.totalPrice = state.items.reduce((sum, obj)=>{
            return obj.price * obj.count + sum;
        }, 0)
    },
    minusItem(state, action){
      console.log(action)
      const findItem = state.items.find(obj=>obj.id === action.payload)
      if(findItem){
        findItem.count--;
      }
    },
    removeItem(state, action){
        state.items =  state.items.filter(obj => obj.id !== action.payload)
    },
    clieanItems(state, action){
        state.items = []
        state.totalPrice = 0
    },
  
  }
})




//selectors
export const selectCart = (state) => state.cart
export const selectCartItemById = (id)=>(state)=>state.cart.items.find(obj=>obj.id === id)

//AC
export const { addItem, minusItem, removeItem, clieanItems } = cartSlice.actions

//reducer
export default cartSlice.reducer