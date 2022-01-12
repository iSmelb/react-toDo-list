import React from 'react';
import { Route, Routes } from "react-router-dom";
import About from "../Pages/About";
import PostIdPage from '../Pages/PostIdPage';
import Posts from "../Pages/Posts";
import { routes } from '../router/routes';
import '../styles/app.css';

function AppRouters() {
    return (
        <Routes>
            {routes.map( route => 
                <Route path={route.path} element={<route.component/>}/>
            )}
        </Routes>
    )
}

export default AppRouters
