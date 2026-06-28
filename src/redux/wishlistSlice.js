import { createSlice } from "@reduxjs/toolkit";

const loadWishlist = () => {
  const data = localStorage.getItem("wishlistItems");
  return data ? JSON.parse(data) : [];
};

const saveWishlist = (wishlistItems) => {
  localStorage.setItem(
    "wishlistItems",
    JSON.stringify(wishlistItems)
  );
};

const initialState = {
  wishlistItems: loadWishlist(),
};

const wishlistSlice = createSlice({
  name: "wishlist",

  initialState,

  reducers: {
    addToWishlist: (state, action) => {
      const existingItem = state.wishlistItems.find(
        (item) => item.id === action.payload.id
      );

      if (!existingItem) {
        state.wishlistItems.push(action.payload);
      }

      saveWishlist(state.wishlistItems);
    },

    removeFromWishlist: (state, action) => {
      state.wishlistItems = state.wishlistItems.filter(
        (item) => item.id !== action.payload
      );

      saveWishlist(state.wishlistItems);
    },

    clearWishlist: (state) => {
      state.wishlistItems = [];

      saveWishlist(state.wishlistItems);
    },
  },
});

export const {
  addToWishlist,
  removeFromWishlist,
  clearWishlist,
} = wishlistSlice.actions;

export default wishlistSlice.reducer;