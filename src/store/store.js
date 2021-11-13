import {configureStore} from "@reduxjs/toolkit";
import cartReducer from '../store/cart/cartSlice'
import userReducer from '../store/user/userSlice'

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        user: userReducer,
    },
})

