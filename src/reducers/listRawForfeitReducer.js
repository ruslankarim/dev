const initialState = {
    listAddPay: []
}

export default function listRawForfeitReducer (state = initialState, action) {
    if(action.type === 'ADD_RAW_FORFEIT_F_MAIN'){
        state.listAddPay.unshift({ id: action.payload })
        return {
            ...state,
            listAddPay: state.listAddPay
        }
    }

    if(action.type === 'SET_CLEAR_LIST_ROW_ADD'){
        return{
            ...state,
            listAddPay: []
        }
    }

    if(action.type === 'ADD_RAW_FORFEIT'){
        const index = Number.parseInt(action.payload.index)
        const arr1 = state.listAddPay.slice(0, index+1)
        const arr2 = state.listAddPay.slice(index+1)
        const inserted = {id: action.payload.id}
        const arrTarget = arr1.concat(inserted, arr2)
        delete state.listAddPay

        return{
            ...state,
            listAddPay: arrTarget
        }
    }

    if(action.type === 'REMOVE_RAW_FORFEIT'){
        state.listAddPay.splice(action.payload, 1)
        return{
            ...state,
            listAddPay: state.listAddPay
        }
    }

    return state
}