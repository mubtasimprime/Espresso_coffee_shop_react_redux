import { createSlice } from "@reduxjs/toolkit";

// Load theme from localStorage
const getInitialTheme = () => {
  const savedTheme = localStorage.getItem("coffeeShopTheme");
  return savedTheme ? JSON.parse(savedTheme) : { isDarkMode: false };
};

const themeSlice = createSlice({
  name: "theme",
  initialState: getInitialTheme(),
  reducers: {
    toggleTheme: (state) => {
      state.isDarkMode = !state.isDarkMode;
      // Save to localStorage
      localStorage.setItem("coffeeShopTheme", JSON.stringify(state));
    },
    setTheme: (state, action) => {
      state.isDarkMode = action.payload;
      localStorage.setItem("coffeeShopTheme", JSON.stringify(state));
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
