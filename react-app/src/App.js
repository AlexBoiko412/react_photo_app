import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import Loading from "./components/UI/Loading";
import {fetchPhotos} from "./store/reducers/photosAsyncAction";
import {useFilteredAndSearchedCards} from "./hooks/useFilterCards";
import Collection from "./components/Collection";
import Filter from "./components/Filter";
import {usePagesArray} from "./hooks/usePagesArray";
import {getTotalPagesNumber} from "./utils/getTotalPagesNumber";
import {usePagination} from "./hooks/usePagination";
import Pagination from "./components/UI/Pagination/Pagination";
import {BrowserRouter, HashRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";



function App() {



    return (
        <HashRouter>
            <AppRouter/>
        </HashRouter>
    );
}

export default App;
