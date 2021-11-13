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
//TODO: Implement localstorage saving so cart items persist.
//TODO: Implement remove from CART
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
            state.cartQty = 0
            state.cartAmount = 0
        },
        removeItemFromCart: (state, action) => {
            if (state.cart[action.payload._id]) {
                let totalQuantity = state.cart[action.payload._id].qty //get total quantity of item in cart
                let totalAmount = (state.cart[action.payload._id].item_price) * totalQuantity //get total amount of item (same item) in cart
                state.cartQty -= totalQuantity //subtract quantity from cartqty total
                state.cartAmount -= totalAmount //subtract item amount total from cartamount total
                delete state.cart[action.payload._id]

            }
        }
    }
})

export const {addToCart, removeAllFromCart, clearCart, removeItemFromCart} = cartSlice.actions

export const cart_qty = (state) => state.cart.cartQty
export const amount = (state) => state.cart.cartAmount
export const cartOjb = (state) => state.cart.cart

export default cartSlice.reducer