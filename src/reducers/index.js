import { combineReducers } from 'redux'
import inSumDebtReducer from './inSumDebtReducer'
import radioForfeitPercentReducer from './radioForfeitPercentReducer'
import radioForfeitReducer from './radioForfeitReducer'
import listRawForfeitReducer from './listRawForfeitReducer'
import listRowsAddDebtReducer from './listRowsAddDebtReducer'


import { AppReducer } from './AppReducer'
import { ListCalcForfeitReducer } from './ListCalcForfeitReducer'



export const rootReducer = combineReducers({
    inSumDebt: inSumDebtReducer,
    radioForfeitPercent: radioForfeitPercentReducer,
    radioForfeit: radioForfeitReducer,
    listRawForfeit: listRawForfeitReducer,
    listRowsAddDebt: listRowsAddDebtReducer

})