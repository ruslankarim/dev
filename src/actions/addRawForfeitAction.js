export function addRawForfeitFromMainAction(id){
    return{
        type: 'ADD_RAW_FORFEIT_F_MAIN',
        payload: id
    }
}

export function addRawForfeitAction(obj) {
    return{
        type: 'ADD_RAW_FORFEIT',
        payload: {
            id: obj.id,
            index: obj.index
        }
    }
}

export function removeRawForfeitAction(index) {
    return{
        type: 'REMOVE_RAW_FORFEIT',
        payload: index
    }
}