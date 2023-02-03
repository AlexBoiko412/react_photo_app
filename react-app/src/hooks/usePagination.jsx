import {useEffect, useMemo, useState} from "react";

export const usePagination = (photos, page, limit) => {

    const photosPaginated = useMemo(() => {
        if(!photos.length) return photos
        const arr = []
        for(
            let i = page*limit - limit;
            photos.length < page*limit
                ? i < page*limit-limit + (photos.length - (page*limit-limit) )
                : i < page*limit;
            i++
        ) {
            arr.push(photos[i])
            console.log()
        }
        return arr
    }, [photos, page, limit])

    return photosPaginated
}