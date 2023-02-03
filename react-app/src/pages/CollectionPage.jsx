import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {usePagesArray} from "../hooks/usePagesArray";
import {useFilteredAndSearchedCards} from "../hooks/useFilterCards";
import {usePagination} from "../hooks/usePagination";
import {fetchPhotos} from "../store/reducers/photosAsyncAction";
import {getTotalPagesNumber} from "../utils/getTotalPagesNumber";
import Filter from "../components/Filter";
import Loading from "../components/UI/Loading";
import Collection from "../components/Collection";
import Pagination from "../components/UI/Pagination/Pagination";

const CollectionPage = () => {
    const [activeOption, setActiveOption] = useState(0)
    const [searchQuery, setSearchQuery] = useState("")
    const [page, setPage] = useState(1)
    const [totalPagesNumber, setTotalPagesNumber] = useState(0)


    const {photos, loading, error} = useSelector(state => state.photos)
    const dispatch = useDispatch()

    const pagesArray = usePagesArray(totalPagesNumber)
    const filteredAndSearchedPhotos = useFilteredAndSearchedCards(photos, searchQuery, activeOption)
    const paginatedPhotos = usePagination(filteredAndSearchedPhotos, page, 6)



    useEffect(() => {
        dispatch(fetchPhotos())
    }, [])

    useEffect(() => {

        setTotalPagesNumber(getTotalPagesNumber(filteredAndSearchedPhotos.length, 6))
    }, [photos, activeOption, searchQuery])

    useEffect(() => {
        setPage(1)
    }, [totalPagesNumber])


    return (
        <div className="app__content">
            <h1>My collection of photos</h1>


            <Filter
                activeOption={activeOption}
                setActiveOption={setActiveOption}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />
            {
                loading && <Loading/>
            }

            {
                error && <h1>{error}</h1>
            }

            <Collection photos={paginatedPhotos} />
            <Pagination setPage={setPage} page={page} pagesArray={pagesArray}/>
        </div>
    );
};

export default CollectionPage;