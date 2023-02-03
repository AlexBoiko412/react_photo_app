import {useMemo} from "react";

const useFilterCards = (photos, activeOption) => {
    const filteredPhotos = useMemo(() => {
        if(!activeOption) return photos
        if(activeOption) {
            return photos.filter((photo) => activeOption === photo.category)
        }
    }, [photos, activeOption])

    return filteredPhotos
}

export const  useFilteredAndSearchedCards = (photos, searchQuery, activeOption) => {
    const filteredPhotos = useFilterCards(photos, activeOption)

    const filteredAndSearchedPhotos = useMemo(() => {
        if(filteredPhotos.length && searchQuery) {
            return filteredPhotos.filter((photo) => photo.name.toLowerCase().includes(searchQuery.toLowerCase()))
        } else {
            return filteredPhotos
        }
    }, [filteredPhotos, searchQuery])

    return filteredAndSearchedPhotos
}

