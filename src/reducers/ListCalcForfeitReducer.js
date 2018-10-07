const initialState = {
    listCalcForfeit: []
}

export function ListCalcForfeitReducer(state = initialState, action){
    switch (action.type) {
        case 'ADD_CALC_FORFEIT':
            return { ...state,
                listCalcForfeit: state.listCalcForfeit.concat([{id: action.payload}]),
            }

        default:
            return state
    }
    return state
}