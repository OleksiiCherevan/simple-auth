import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    email: localStorage.getItem('email') !== 'null' ? localStorage.getItem('email') : null,
    token: localStorage.getItem('token') !== 'null' ? localStorage.getItem('token') : null,
    id: localStorage.getItem('id') !== 'null' ? localStorage.getItem('id') : null,
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

            
            SaveSatateToLocalStore(null, null, null)
        }
    }
})

export const { setUser, removeUser } = userSlice.actions

export default userSlice.reducer