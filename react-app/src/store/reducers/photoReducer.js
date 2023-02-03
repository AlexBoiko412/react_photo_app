


const defaultState = {
    photos: [],
    loading: false,
    error: null
}

export const FETCH_POTOS = "FETCH_POTOS"
export const FETCH_POTOS_SUCCESS = "FETCH_POTOS_SUCCESS"
export const FETCH_POTOS_ERROR = "FETCH_POTOS_ERROR"

export const photoReducer = (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_POTOS:
            return {photos: [], loading: true, error: null}
        case FETCH_POTOS_SUCCESS:
            return {photos: action.payload, loading: false, error: null}
        case FETCH_POTOS_ERROR:
            return {photos: [], loading: false, error: action.payload}
        default:
            return state
    }
}