const initialState = {
    isOpen: false
}

export default function radioForfeitReducer (state = initialState, action) {

    if(action.type === 'SET_OPEN_FORFEIT'){
        return {
            ...state,
            isOpen: true
        }
    }

    if(action.type === 'SET_HIDE_FORFEIT'){
        return {
            ...state,
            isOpen: false
        }
    }

    return state
}

