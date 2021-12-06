import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchRegister, fetchLogin, fetchGetUserContacs } from "./userAPI";

const initialState = {
    info: {},
    connected: false,
    status: 'idle',
};

//thunk permite realizar funciones logicas asincronas
export const registerAsync = createAsyncThunk(
    'user/fetchRegister',
    async (user) => {
        const response = await fetchRegister(user);
        console.log("response", response)
        return response;
    }
);

export const loginAsync = createAsyncThunk(
    'user/fetchLogin',
    async (user) => {
        const response = await fetchLogin(user);
        console.log("response", response)
        return response;
    }
);

export const getUserContacsAsync = createAsyncThunk(
    'user/fetchGetUserContacs',
    async (jwt) => {
        const response = await fetchGetUserContacs(jwt);
        console.log("response", response)
        return response;
    }
)

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
        //User Register
        .addCase(registerAsync.pending, (state) => {
            state.status = 'loading';
        })
            .addCase(registerAsync.rejected, (state) => {
                state.status = 'idle';
            })
            .addCase(registerAsync.fulfilled, (state, action) => {
                console.log("payload", action.payload)
                state.status = 'idle';
                if (action.payload.jwt != undefined) {
                    state.info = action.payload
                    state.connected = true
                }
            })

        //User Login
            .addCase(loginAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(loginAsync.rejected, (state) => {
                state.status = 'idle';
            })
            .addCase(loginAsync.fulfilled, (state, action) => {
                console.log("payload", action.payload)
                state.status = 'idle';
                if (action.payload.jwt != undefined) {
                    state.info = action.payload
                    state.connected = true
                }
            })

            //Get User Contacs
            .addCase(getUserContacsAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getUserContacsAsync.rejected, (state) => {
                state.status = 'idle';
            })
            .addCase(getUserContacsAsync.fulfilled, (state, action) => {
                console.log("payload", action.payload)
                state.status = 'idle';

                let contacsArray = []

                for (let index = 0; index < action.payload.length; index++) {
                    
                    if(action.payload[index].user.id == state.info.user.id){
                        contacsArray.push(action.payload[index])
                    }
                }

                state.info.user.contacs = contacsArray
            })


            ;
    },
});

export const { } = userSlice.actions;

export const selectUser = (state) => state.user.info;

export const selectConnected = (state) => state.user.connected;

export const selectStatus = (state) => state.user.status;

export default userSlice.reducer;