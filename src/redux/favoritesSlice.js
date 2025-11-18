import { createSlice } from "@reduxjs/toolkit";

// Load favorites from localStorage
const getInitialFavorites = () => {
  const savedFavorites = localStorage.getItem("coffeeShopFavorites");
  return savedFavorites ? JSON.parse(savedFavorites) : { items: [], count: 0 };
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: getInitialFavorites(),
  reducers: {
    addToFavorites: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.name === action.payload.name
      );
      if (!existingItem) {
        state.items.push(action.payload);
        state.count = state.items.length;
        localStorage.setItem("coffeeShopFavorites", JSON.stringify(state));
      }
    },
    removeFromFavorites: (state, action) => {
      state.items = state.items.filter((item) => item.name !== action.payload);
      state.count = state.items.length;
      localStorage.setItem("coffeeShopFavorites", JSON.stringify(state));
    },
    clearFavorites: (state) => {
      state.items = [];
      state.count = 0;
      localStorage.setItem("coffeeShopFavorites", JSON.stringify(state));
    },
  },
});

export const { addToFavorites, removeFromFavorites, clearFavorites } =
  favoritesSlice.actions;
export default favoritesSlice.reducer;
