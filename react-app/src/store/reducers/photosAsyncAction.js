import {FETCH_POTOS, FETCH_POTOS_ERROR, FETCH_POTOS_SUCCESS} from "./photoReducer";
import axios from "axios";

export const fetchPhotos = () => {
    return async dispatch => {
        try {
            dispatch({type: FETCH_POTOS})
            const response = await axios.get("https://63c1a34f99c0a15d28eeff6a.mockapi.io/photos")
            dispatch({type: FETCH_POTOS_SUCCESS, payload: response.data})
        } catch (e) {
            dispatch({type: FETCH_POTOS_ERROR, payload: e.message})
        }
    }
}