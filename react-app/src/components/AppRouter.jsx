import React from 'react';
import {Route, Routes} from "react-router";
import Layout from "./Layout";
import CollectionPage from "../pages/CollectionPage";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<CollectionPage/>}/>
            </Route>
        </Routes>
    );
};

export default AppRouter;