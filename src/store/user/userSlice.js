import {createSlice} from "@reduxjs/toolkit";
import customAxios from "../../axios/customAxios";

const initialState = {
    email: '',
    uid: '',
    authenticated: false,
    address: {},
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setEmail: (state, action) => {
            state.email = action.payload
        },
        setUID: (state, action) => {
            state.uid = action.payload
        },
        setAddress: (state, action) => {
            state.address = action.payload
        },
        setAuthed: (state, action) => {
            state.authenticated = action.payload
        }
    }
})
// sendLogin, sendLogout,
export const {setUID, setAddress, setEmail, setAuthed} = userSlice.actions

export const isAuthenticated = (state) => state.user.authenticated //boolean
export const userID = (state) => state.user.uid //user id in string
export const userEmail = (state) => state.user.email
export const userAddress = (state) => state.user.address

export default userSlice.reducer

export function userLogin(userDetail){
    const user = {
        email: userDetail.email,
        password: userDetail.password,
    }
    return async function userLoginThunk(dispatch) {
        await customAxios.post('users/login', user).then(response => {
            if (response.status === 200) {
                dispatch(setEmail(user.email))
                // console.log('EMAIL: ' + user.email)
                dispatch(setUID(response.data.id))
                dispatch(setAuthed(true))
                alert('Login Success!')
            }
        }).catch(e => {
            if (e) {
                alert('Error Logging In: ' + e);
            }
        })
    };
}

export function userLogout() {
    return async function userLogoutThunk(dispatch) {
        await customAxios.get('users/logout').then(response => {
            if (response.status === 200) {

            }
        }).catch(e => {
            if (e) {
                alert('Error Logging out' + e)
            }
        })
    };
}
