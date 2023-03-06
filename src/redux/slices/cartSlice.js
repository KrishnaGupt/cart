import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "Cart",
    initialState: [],
    reducers: {
        addItemsToCart: (state, action) =>{
            state.push(action.payload)
        }
    }
})

export const {addItemsToCart} = cartSlice.actions

export default cartSlice.reducer