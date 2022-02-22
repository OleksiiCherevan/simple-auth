import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    email: localStorage.getItem('email'),
    token: localStorage.getItem('token'),
    id: localStorage.getItem('id'),
}

const SaveSatateToLocalStore = (email, token, id) => {
    localStorage.setItem('email', email);
    localStorage.setItem('token', token);
    localStorage.setItem('id', id)
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            const {email, token, id } = action.payload;

            state.email = email;
            state.token = token;
            state.id = id;

            SaveSatateToLocalStore(email, token, id)
        },
        
        removeUser(state) {
            state.email = null;
            state.token = null;
            state.id = null;
        }
    }
})

export const { setUser, removeUser } = userSlice.actions

export default userSlice.reducer