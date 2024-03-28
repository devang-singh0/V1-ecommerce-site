import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import axios from "axios";
const params = {
    headers: {
        Authorization: "bearer " + process.env.REACT_APP_STRAPI_API_KEY
    },
}
export const thunk = createAsyncThunk('thunk', async (url) => {
    const { data } = await axios.get(process.env.REACT_APP_URL + url, params);
    return data;
})
export const imgThunk = createAsyncThunk('imgThunk', async () => {
    const { data } = await axios.get(process.env.REACT_APP_URL + '/api/images?populate=*', params);
    return data;
})
export const productThunk = createAsyncThunk('productThunk', async () => {
    const { data } = await axios.get(process.env.REACT_APP_URL + '/api/products?pagination[start]=0&pagination[limit]=50&populate=*', params);
    return data;
})
export const catThunk = createAsyncThunk('catThunk', async () => {
    const { data } = await axios.get(process.env.REACT_APP_URL + '/api/categories?populate=*', params);
    return data;
})
export const addToCart = createAsyncThunk('addToCart', async () => {
    const { data } = await axios.get(process.env.REACT_APP_URL + '/api/categories?populate=*', params);
    return data;
})
let apiSlice = createSlice({
    name: 'apiSlice',
    initialState: {
        cart: [],
        value:
            { isLoading: true, data: {}, categories: {}, img: {} },
        activeHomeCat: '',
        products: {}
    },
    extraReducers: (builder) => {
        builder.addCase(thunk.fulfilled, (state, action) => {
            state.value.data = action.payload;
            state.value.isLoading = false;
        })
        builder.addCase(productThunk.fulfilled, (state, action) => {
            state.products = action.payload;
        })
        builder.addCase(catThunk.fulfilled, (state, action) => {
            state.value.categories = action.payload;
        })
        builder.addCase(imgThunk.fulfilled, (state, action) => {
            state.value.img = action.payload;
        })
        builder.addCase(addToCart.fulfilled, (state, action) => {
            state.value.img = action.payload;
        })
    },
    reducers: {
        changeActiveHomeCat: (state, action) => {
            state.activeHomeCat = action.payload;
        },
    }
})
export default apiSlice.reducer;
export const { changeActiveHomeCat } = apiSlice.actions;