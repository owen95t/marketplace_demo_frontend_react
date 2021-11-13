import {createSlice} from "@reduxjs/toolkit";
import customAxios from "../../axios/customAxios";

const initialState = {
    email: '',
    uid: '',
    authenticated: false,
}

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers: {
        sendLogin: async (state, action) => {
            let user = {
                email: action.payload.email,
                password: action.payload.password
            }
            await customAxios.post('users/login', user).then(result => {
                if (result.status === 200) {
                    alert('Login Complete')
                    //Navigate to account page
                }
                state.authenticated = true;
            }).catch(e => {
                if (e) {
                    alert('Login Error! Error Message: ' + e.response.data)
                    console.log('Login Error! ' + e.response.data)
                }
            })
        },
        sendLogout: async (state) => {
            await customAxios.get('users/logout').then(result => {
                if (result.status === 200) {
                    alert('Logged out complete')
                    //Navigate to home
                    state.authenticated = false
                }
            }).catch(e => {
                if (e) {
                    alert('Logout Error. Error Message: ' + e.response.data)
                    console.log('Log out error. Error Message: ' + e.response.data)
                }
            })
        }
    }
})

export const {sendLogin, sendLogout} = userSlice.actions

export const isAuthenticated = (state) => state.user.authenticated //boolean
export const userID = (state) => state.user.uid //user id in string

export default userSlice.reducer
