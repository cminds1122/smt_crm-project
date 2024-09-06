import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState:any  = {
    isLogedInUser: false
  }

export const authenticationSlice = createSlice({
    name: 'authentication',
    initialState,
    reducers: {
        setLoginState:(state, action: PayloadAction<any>) => {
            console.log('action.payload',action.payload)
           const { value } = action.payload;
            state.isLogedInUser = value;
        }
    }

})
export const { setLoginState } = authenticationSlice.actions

export const isLogedInUser = (state: RootState) =>  state.authenticationReducer.isLogedInUser;
export default authenticationSlice.reducer