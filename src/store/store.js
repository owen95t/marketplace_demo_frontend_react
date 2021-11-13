import {applyMiddleware} from "@reduxjs/toolkit";
import {configureStore} from "@reduxjs/toolkit";
import cartReducer from '../store/cart/cartSlice'
import userReducer from '../store/user/userSlice'
import thunkMiddleware from 'redux-thunk'

const composedEnhancer = applyMiddleware(thunkMiddleware)

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        user: userReducer,
    },
    enhancers: {
        composedEnhancer
    }
})

