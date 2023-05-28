import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = { products: [], cart: [], wishList: [], cartTotal: 0 };

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
  reducers: {
    addProduct: (state, action) => {
      state.cart.find((item) => item.id === action.payload.id) === undefined &&
        state.cart.push(action.payload);
      cartTotal();
    },
    removeProduct: (state, action) => {
      const newCart = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      state.cart = newCart;
      if (state.cart.length === 0) {
        state.cartTotal = 0;
      }
    },
    increaseQuantity: (state, action) => {
      state.cart.find((item) => item.id === action.payload.id).quantity++;
    },
    decreaseQuantity: (state, action) => {
      state.cart.find((item) => item.id === action.payload.id).quantity--;
    },
    addWish: (state, action) => {
      state.wishList.find((item) => item.id === action.payload.id) ===
        undefined && state.wishList.push(action.payload);
    },
    removeWish: (state, action) => {
      state.wishList.filter((product) => product.id !== action.payload.id);
    },
    cartTotal: (state) => {
      state.cart.reduce((total, item) => {
        const itemTotal = item.price * item.quantity;

        return (state.cartTotal = total + itemTotal);
      }, 0);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export default shopSlice.reducer;
export const {
  addProduct,
  removeProduct,
  addWish,
  removeWish,
  increaseQuantity,
  decreaseQuantity,
  cartTotal,
} = shopSlice.actions;
