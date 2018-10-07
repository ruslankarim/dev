export function addRowDebtFromMainAction(id){
    return{
        type: 'ADD_ROW_DEBT_F_MAIN',
        payload: id
    }
}

export function addRowDebtAction(obj) {
    return{
        type: 'ADD_ROW_DEBT',
        payload: {
            id: obj.id,
            index: obj.index
        }
    }
}

export function removeRowDebtAction(index) {
    return{
        type: 'REMOVE_ROW_DEBT',
        payload: index
    }
}

export function setClearListRowsDebtAction() {
    return {
        type: 'SET_CLEAR_LIST_DEBT'
    }
}