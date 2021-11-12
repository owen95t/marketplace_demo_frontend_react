import {createSlice} from "@reduxjs/toolkit";

/*
*       assume product_obj is
* {
*   _id: '...',
*   item_name: '..',
*   ...
*   item_price: '..',
*   qty: '..', THIS IS ADDED WHEN ADD TO CART IS CLICKED IN APP.JS
* }
* */

const initialState = {
    cart: {}, //assume cart object is {'id1': {product_obj}, 'id2': {product_obj} id (key) paired to product_obj (value)
    cartQty: 0, //cart total quantity
    cartAmount: 0, //cart total amount
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => { //qty(quantity) is number of items to add,
            if(state.cart[action.payload._id]){ //assume action.payload is a product object {'id': ..., 'item_name': '',..., 'qty': 1 }
                state.cart[action.payload._id].qty += action.payload.qty
            }else{
                state.cart[action.payload._id] = action.payload
            }
            state.cartQty += action.payload.qty
            state.cartAmount += (action.payload.item_price * action.payload.qty)
        },
        removeAllFromCart: (state, action) => {
            if(state.cart[action.payload._id]){
                state.cartQty -= state.cart[action.payload._id].qty
                if(state.cart[action.payload._id].qty === 0){
                    delete state.cart[action.payload._id]
                }
            }
        },
        clearCart: (state) => {
            state.cart = {}
        }
    }
})

export const {addToCart, removeAllFromCart, clearCart} = cartSlice.actions

export const cart_qty = (state) => state.cart.cartQty
export const amount = (state) => state.cart.cartAmount
export const cartOjb = (state) => state.cart.cart

export default cartSlice.reducer