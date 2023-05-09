import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = { products: [] };

export const getProducts = createAsyncThunk(
  "getProducts",
  async (args, thunkAPI) => {
    const data = await axios.get("https://dummyjson.com/products");
    const products = data.data;
    return products;
  }
);

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export default shopSlice.reducer;
