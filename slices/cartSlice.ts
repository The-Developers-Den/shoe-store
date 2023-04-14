import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  } as any,
  reducers: {
    addToCart: (state, action) => {
      const item = state.cartItems.find((p: any) => p.id === action.payload.id);
      if (item) {
        item.quantity++;
        item.attributes.price = item.oneQuantityPrice * item.quantity;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    updateCart: (state, action) => {
      state.cartItems = state.cartItems.map((p: any) => {
        if (p.id === action.payload.id) {
          if (action.payload.key === "quantity") {
            p.attributes.price = p.oneQuantityPrice * action.payload.val;
          }
          return { ...p, [action.payload.key]: action.payload.val };
        }
        return p;
      });
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (p: any) => p.id !== action.payload.id
      );
    },
  },
});

export const { addToCart, removeFromCart, updateCart } = cartSlice.actions;

export default cartSlice.reducer;
