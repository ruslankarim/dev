import React from 'react'
import InCreditor from './MainPage/InCreditor'
import InDebtor from './MainPage/InDebtor'
import InRequisitesContract from './MainPage/InRequisitesContract'
import SwitchIsMonetaryResponsibility from './MainPage/SwitchIsMonetaryResponsibility'
import {setOpenInSumDebtAction, setHideInSumDebtAction} from './actions/inSumDebtAction'
import { setOpenRadioForfeitPercentAction, setHideRadioForfeitPercentAction } from './actions/radioForfeitPercentAction'
import { setOpenRadioForfeitAction, setHideRadioForfeitAction } from './actions/radioForfeitAction'
import {addRawForfeitFromMainAction,
        addRawForfeitAction,
        removeRawForfeitAction} from './actions/addRawForfeitAction'

import {addRowDebtFromMainAction,
        addRowDebtAction,
        removeRowDebtAction,
        setClearListRowsDebtAction } from './actions/listRowsDebtAction'

import { setClearListRowAddAction } from './actions/clearListRowAdd'


import { connect } from 'react-redux'

class App extends React.Component{

    render(){
        const { App,
            inSumDebt,
            setOpenInSumDebtAction,
            setHideInSumDebtAction,

            radioForfeitPercent,
            setOpenRadioForfeitPercentAction,
            setHideRadioForfeitPercentAction,

            radioForfeit,
            setOpenRadioForfeitAction,
            setHideRadioForfeitAction,


            listRawForfeit,
            addRawForfeitFromMainAction,
            addRawForfeitAction,
            removeRawForfeitAction,
            setClearListRowAddAction,

            listRowsAddDebt,
            addRowDebtFromMainAction,
            addRowDebtAction,
            removeRowDebtAction,
            setClearListRowsDebtAction,




        } = this.props
        return(
            <div className="container">
                <InCreditor/>
                <InDebtor/>
                <InRequisitesContract />
                <SwitchIsMonetaryResponsibility
                    inSumDebt={inSumDebt}
                    setOpenInSumDebtAction={setOpenInSumDebtAction}
                    setHideInSumDebtAction={setHideInSumDebtAction}

                    radioForfeitPercent={radioForfeitPercent}
                    setOpenRadioForfeitPercentAction={setOpenRadioForfeitPercentAction}
                    setHideRadioForfeitPercentAction={setHideRadioForfeitPercentAction}

                    radioForfeit={radioForfeit}
                    setOpenRadioForfeitAction={setOpenRadioForfeitAction}
                    setHideRadioForfeitAction={setHideRadioForfeitAction}

                    listRawForfeit={listRawForfeit}
                    addRawForfeitFromMainAction={addRawForfeitFromMainAction}
                    addRawForfeitAction={addRawForfeitAction}
                    removeRawForfeitAction={removeRawForfeitAction}
                    setClearListRowAddAction={setClearListRowAddAction}

                    listRowsAddDebt={listRowsAddDebt}
                    addRowDebtFromMainAction={addRowDebtFromMainAction}
                    addRowDebtAction={addRowDebtAction}
                    removeRowDebtAction={removeRowDebtAction}
                    setClearListRowsDebtAction={setClearListRowsDebtAction}
                />
            </div>
        )
    }
}


const mapStateToProps = store => {
    return {
        inSumDebt: store.inSumDebt,
        radioForfeitPercent: store.radioForfeitPercent,
        radioForfeit: store.radioForfeit,
        listRawForfeit: store.listRawForfeit,
        listRowsAddDebt: store.listRowsAddDebt

    }
}

const mapDispatchToProps = dispatch => {
    return {
        setOpenInSumDebtAction: () => dispatch(setOpenInSumDebtAction()),
        setHideInSumDebtAction: () => dispatch(setHideInSumDebtAction()),
        setOpenRadioForfeitPercentAction: () => dispatch(setOpenRadioForfeitPercentAction()),
        setHideRadioForfeitPercentAction: () => dispatch(setHideRadioForfeitPercentAction()),
        setOpenRadioForfeitAction: () => dispatch(setOpenRadioForfeitAction()),
        setHideRadioForfeitAction: () => dispatch(setHideRadioForfeitAction()),
        addRawForfeitFromMainAction: (id) => dispatch(addRawForfeitFromMainAction(id)),
        addRawForfeitAction: ({id, index}) => dispatch(addRawForfeitAction({id, index})),
        removeRawForfeitAction: (index) => dispatch(removeRawForfeitAction(index)),
        setClearListRowAddAction: () => dispatch(setClearListRowAddAction()),
        addRowDebtFromMainAction: (id) => dispatch(addRowDebtFromMainAction(id)),
        addRowDebtAction: ({id, index}) => dispatch(addRowDebtAction({id, index})),
        removeRowDebtAction: (index) => dispatch(removeRowDebtAction(index)),
        setClearListRowsDebtAction: () => dispatch(setClearListRowsDebtAction()),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
