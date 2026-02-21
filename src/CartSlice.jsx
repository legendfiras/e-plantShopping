import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // cart array
  },
  reducers: {

    // ADD ITEM
    addItem: (state, action) => {
      const product = action.payload;

      // check if item already exists
      const existingItem = state.items.find(
        (item) => item.name === product.name
      );

      if (existingItem) {
        // increase quantity if already in cart
        existingItem.quantity += 1;
      } else {
        // otherwise add new item with quantity 1
        state.items.push({ ...product, quantity: 1 });
      }
    },

    // REMOVE ITEM (payload = item name)
    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item.name !== action.payload
      );
    },

    // UPDATE QUANTITY (payload = { name, amount })
    updateQuantity: (state, action) => {
      const { name, amount } = action.payload;

      const item = state.items.find((i) => i.name === name);

      if (item) {
        item.quantity = amount;
      }
    },

  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;
export default CartSlice.reducer;