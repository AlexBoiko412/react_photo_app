import {useEffect, useMemo} from "react";
import {getTotalPagesNumber} from "../utils/getTotalPagesNumber";

export const usePagesArray = (totalPagesNumber) => {

    const pagesArray = useMemo(() => {
        const arr = []
        for(let i = 1; i <= totalPagesNumber; i++) {
            arr.push(i)
        }

        return arr
    }, [totalPagesNumber])
    return pagesArray
}