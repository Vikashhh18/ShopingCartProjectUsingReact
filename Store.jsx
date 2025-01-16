import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./Slice/CartSlice"; // Assuming CartSlice is the file that contains the slice

export const store = configureStore({
    reducer: {
        cart: CartSlice.reducer, // Access the reducer property here
    },
});
