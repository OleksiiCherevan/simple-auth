import React from "react";
import { Navigate } from "react-router-dom";
import userAuth from "../../../hooks/userAuth";


import { useDispatch } from 'react-redux'
import { removeUser } from '../../../store/slices/userSlice'


const Profile = () => {
    const { isAuth, email, token, id } = userAuth();

    const dispatch = useDispatch()
  
    return isAuth ? (
        <div>
            {}
            <div>email: {email}</div>
            <div>token: {token}</div>
            <div>id: {id} </div>

            <button onClick={() => dispatch(removeUser())}>
                Выйти из аккаунта
            </button>
        </div>
    ) : (
        <Navigate to="/login"></Navigate>
    );
};

export default Profile;
