import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/organisms/Header";
import Login from './components/templates/Login'

import PageNotFound from "./components/templates/NotFoundPage";
import Main from "./components/templates/Main";
import News from "./components/templates/News";
import Profile from "./components/templates/Profile";

function App() {
    return (
        <>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Main />}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/news' element={<News/>}></Route>
                <Route path='/profile' element={<Profile/>}></Route>
                <Route path="*" element={<PageNotFound />}></Route>
            </Routes>
        </>
    );
}

export default App;
