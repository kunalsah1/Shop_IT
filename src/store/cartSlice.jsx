import { createSlice } from "@reduxjs/toolkit";


const initialState = []

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {


        add(state, action) {
            const itemToAdd = action.payload;
            const existingItem = state.find(item => item.id === itemToAdd.id);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {

                state.push({ ...itemToAdd, quantity: 1 });
            }
        },

        increase(state, action) {
            const cartItem = state.find(item => item.id === action.payload);

            if (cartItem) {
                cartItem.quantity += 1;
            }
        },
        decrease(state, action) {
            const cartItem = state.find(item => item.id === action.payload);

            if (cartItem) {
                cartItem.quantity -= 1;
            }
        },
        remove(state, action) {
            return state.filter(item => item.id !== action.payload)
        },
        clearCart(state) {
            return state = []
        },

    }
})

export const { add, remove, clearCart, decrease, increase, calculateTotals } = cartSlice.actions

export default cartSlice.reducer