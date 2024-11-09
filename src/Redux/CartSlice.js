"use client";
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "Cart",
    initialState: {
        items: [],
        totalItems: 0,
    },
    reducers: {
        add(state, action) {
            const existingItem = state.items.find(item => item.ID === action.payload.ID);
            if (existingItem) {
                existingItem.quantity += action.payload.quantity;
            } else {
                state.items.push(action.payload);
            }
            state.totalItems += action.payload.quantity;
        },
        remove(state, action) {
            const itemId = action.payload;
            const itemToRemove = state.items.find(item => item.ID === itemId);

            if (itemToRemove) {
                if (itemToRemove.quantity > 1) {
                    itemToRemove.quantity -= 1;
                    state.totalItems -= 1;
                } else {
                    state.items = state.items.filter(item => item.ID !== itemId);
                    state.totalItems -= 1;
                }
            }
        },
        clear(state) {
            state.items = [];
            state.totalItems = 0;
        }
    }
});

export const { add, remove, clear } = cartSlice.actions;
export default cartSlice.reducer;
