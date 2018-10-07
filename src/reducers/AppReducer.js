const initialState = {
    isOpenInSumDebt: false,

    isOpenRadioCalcForfeit: false,
    isOpenInYourselfForfeit: false,
    isOpenCalcForfeit: false,
    isOpenRadioPercent: false,
    isOpenRadioForfeitPercent: false
}

export function AppReducer (state = initialState, action) {

    switch (action.type) {
        case 'SET_OPEN_RADIO_CALC_FORFEIT':
            return { ...state,
                isOpenRadioCalcForfeit: true,
                isOpenInYourselfForfeit: false,
                isOpenCalcForfeit: false,
                isOpenRadioPercent: false,
                isOpenRadioForfeitPercent: false
            }
        case 'SET_OPEN_RADIO_PERCENT':
            return {
                ...state,
                isOpenRadioCalcForfeit: false,
                isOpenInYourselfForfeit: false,
                isOpenCalcForfeit: false,
                isOpenRadioPercent: true,
                isOpenRadioForfeitPercent: false
            }
        case 'SET_OPEN_RADIO_PERCENT_FORFEIT':
            return {
                ...state,
                isOpenRadioCalcForfeit: false,
                isOpenInYourselfForfeit: false,
                isOpenCalcForfeit: false,
                isOpenRadioPercent: false,
                isOpenRadioForfeitPercent: true
            }
        case 'SET_NO_PERCENT_FORFEIT':
            return {
                ...state,
                isOpenRadioCalcForfeit: false,
                isOpenInYourselfForfeit: false,
                isOpenCalcForfeit: false,
                isOpenRadioPercent: false,
                isOpenRadioForfeitPercent: false
            }

        default:
            return state
    }
    return state
}
