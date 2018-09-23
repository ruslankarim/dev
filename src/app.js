import React from 'react'
import InCreditor from './InCreditor'
import InDebtor from './InDebtor'
import SumDebt from './SumDebt'
import RadioIsForfeit from './RadioIsForfeit'
import CalcForfeit from './CalcOfForfeit/CalcForfeit'
import InYourselfForfeit from './InYourselfForfeit'
import InRequisitesContract from './InRequisitesContract'
import InClauseContract from './InClauseContract'
import RadioCalcForfeit from './RadioCalcForfeit'
import TextBreachObligations from './TextBreachObligations'
import RadioPercent from './RadioPercent'
import RadioForfeitPercent from './RadioForfeitPercent'
import {setOpenRadioCalcForfeit,
        setOpenRadioPercent,
        setOpenRadioPercentForfeit,
        setNoPercentForfeit } from './actions/ActionIsOpenRadioCalcForfeit'

import { connect } from 'react-redux'

class App extends React.Component{

    render(){
        const { App,
            setOpenRadioCalcForfeitAction,
            setOpenRadioPercentAction,
            setOpenRadioPercentForfeitAction,
            setNoPercentForfeitAction
        } = this.props

        return(
            <div className="container">
                <InCreditor/>
                <InDebtor/>
                <TextBreachObligations />
                <RadioIsForfeit
                    setOpenRadioCalcForfeitAction={setOpenRadioCalcForfeitAction}
                    setOpenRadioPercentAction={setOpenRadioPercentAction}
                    setOpenRadioPercentForfeitAction={setOpenRadioPercentForfeitAction}
                    setNoPercentForfeitAction={setNoPercentForfeitAction}/>
                {App.isOpenRadioCalcForfeit ? <RadioCalcForfeit /> : null}
                {App.isOpenRadioPercent ? <RadioPercent /> : null}
                {App.isOpenRadioForfeitPercent ? <RadioForfeitPercent /> : null}
                <SumDebt />
                {App.isOpenInYourselfForfeit ? <InYourselfForfeit /> : null}
                {App.isOpenCalcForfeit ? <CalcForfeit /> : null}
                <InRequisitesContract />
                <InClauseContract />
            </div>
        )
    }
}


const mapStateToProps = store => {

    return {
        App: store.App,

    }
}

const mapDispatchToProps = dispatch => {
    return {
        setOpenRadioCalcForfeitAction: () => dispatch(setOpenRadioCalcForfeit()),
        setOpenRadioPercentAction: () => dispatch(setOpenRadioPercent()),
        setOpenRadioPercentForfeitAction: () => dispatch(setOpenRadioPercentForfeit()),
        setNoPercentForfeitAction: () => dispatch(setNoPercentForfeit())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
