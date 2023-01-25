import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


//Thunk==================================================
export const fetchPizzasThunk = createAsyncThunk('pizzas/fetchByIdStatus',
  async (params, ThunkApi) => {
    const {currentPage, category, sortBy, order, search} = params;
    const res = await axios.get(`https://6331674a3ea4956cfb5cd950.mockapi.io/items?page=${currentPage}&limit=4${category}&sortBy=${sortBy}&order=${order}${search}`)
    //console.log(ThunkApi.getState(), '---ThunkApi')
    return res.data
  }
)



//=============================================================
const initialState = {
  items: [],
  status: 'loading', // loading | succes | error
}





//Slice================================================================
export const pizzaSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    setItems(state, action){
       state.items = action.payload
    }
  },
  extraReducers: { //registratsia la THUNK  in Slice=======================================
    [fetchPizzasThunk.pending] : (state, action) => {  //pedding -- loading
        state.status = 'loading';
        state.items = [];
        //console.log('MERGE OTPRAVCA')
    },
    [fetchPizzasThunk.fulfilled] : (state, action) => {//fulFilled --  succes
        state.items = action.payload;
        state.status = 'succes';
    },
    [fetchPizzasThunk.rejected] : (state, action) => {//reject - error
        state.status = 'error'
        state.items = [];
        console.log('error')
    }
  },
})


//state-----------------------------------------------------------------------
export const selectPizzaData  = (state) => state.pizzas

//AC---------------------------------------------------------------------------------
export const { setItems } = pizzaSlice.actions

//reducer----------------------------------------------------------------------------
export default pizzaSlice.reducer