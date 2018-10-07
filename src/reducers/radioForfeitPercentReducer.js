const initialState = {
    isOpenRadioForfeitPercent: false
}

export default function radioForfeitPercentReducer (state = initialState, action) {

    if(action.type === 'SET_OPEN_FORFEITPERCENT'){
        return {
            ...state,
            isOpenRadioForfeitPercent: true
        }
    }

    if(action.type === 'SET_HIDE_FORFEITPERCENT'){
        return {
            ...state,
            isOpenRadioForfeitPercent: false
        }
    }

    return state
}

