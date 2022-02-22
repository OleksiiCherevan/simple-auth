import React, { useEffect } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import LoginForm from "../../molecules/LoginForm";

import { useDispatch } from "react-redux";
import { setUser } from "../../../store/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = (email, pass) => {
        const auth = getAuth();
        console.log(auth, email, pass);
        signInWithEmailAndPassword(auth, email, pass)
            .then((data) => {
              const { user } = data  
              console.log(data);
              dispatch(
                    setUser({
                        email: user.email,
                        token: user.accessToken,
                        id: user.uid,
                    })
                );

                navigate("/profile");
            })
            .catch((e) => {
              alert('Bad password')
            });
    };

    return (
        <div className="login">
            <LoginForm text="login" handleClick={handleClick}></LoginForm>
        </div>
    );
};

export default Login;
