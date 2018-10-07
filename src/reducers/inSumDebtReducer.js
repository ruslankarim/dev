const initialState = {
    isOpenInSumDebt: false
}

export default function inSumDebtReducer (state = initialState, action) {
    if(action.type === 'SET_OPEN_INSUMDEBT'){
        return {
            ...state,
            isOpenInSumDebt: true
        }
    }

    if(action.type === 'SET_HIDE_INSUMDEBT'){
        return {
            ...state,
            isOpenInSumDebt: false
        }
    }

    return state
}

