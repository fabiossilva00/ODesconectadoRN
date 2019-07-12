import { LOADING } from '../actionTypes/mainType'

const initialState = {
    isLoading: false
}

export const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING:
            return {
                ...state
            }
        default:
            return state
    }
}

