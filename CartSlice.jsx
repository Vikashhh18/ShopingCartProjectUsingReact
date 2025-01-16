import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addProduct: (state, action) => {
            state.push(action.payload);  // Assuming `post` is the entire product object
          },
          removeProduct: (state, action) => {
            return state.filter(product => product.id !== action.payload); // Assuming you're removing by `id`
          } 
    },
});

export const { addProduct, removeProduct } = CartSlice.actions;
export default CartSlice.reducer;
