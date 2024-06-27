import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { StoreCart } from "../../interface";
import axios from "axios";

const carts: StoreCart[] = [];

// hàm lấy tất cả user
export const getProduct: any = createAsyncThunk(
    "carts/getAllCarts",
    async () => {
        const response = await axios.get("http://localhost:3000/carts");  
        return response.data;
    }
);

const cartReducer = createSlice({
    name: "carts",
    initialState: {
        carts: carts,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // trạng thái chờ lấy dữ liệu
            .addCase(getProduct.pending, (state, action) => {})
            // trạng thái lấy dữ liệu thành công
            .addCase(getProduct.fulfilled, (state: any, action: any) => {
                state.carts = action.payload;
            })
            // trạng thái lấy dữ liệu thất bại
            .addCase(getProduct.rejected, (state, action) => {})
    },
});

export default cartReducer.reducer;
