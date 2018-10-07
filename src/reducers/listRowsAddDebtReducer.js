const initialState = {
    listAddDebt: []
}

export default function listRowsAddDebtReducer (state = initialState, action) {
    if(action.type === 'ADD_ROW_DEBT_F_MAIN'){
        state.listAddDebt.unshift({ id: action.payload })
        return {
            ...state,
            listAddDebt: state.listAddDebt
        }
    }

    if(action.type === 'SET_CLEAR_LIST_DEBT'){
        return{
            ...state,
            listAddDebt: []
        }
    }

    if(action.type === 'ADD_ROW_DEBT'){
        const index = Number.parseInt(action.payload.index)
        const arr1 = state.listAddDebt.slice(0, index+1)
        const arr2 = state.listAddDebt.slice(index+1)
        const inserted = {id: action.payload.id}
        const arrTarget = arr1.concat(inserted, arr2)
        delete state.listAddDebt

        return{
            ...state,
            listAddDebt: arrTarget
        }
    }

    if(action.type === 'REMOVE_ROW_DEBT'){
        state.listAddDebt.splice(action.payload, 1)
        return{
            ...state,
            listAddDebt: state.listAddDebt
        }
    }

    return state
}