import React from 'react'
import InCreditor from './InCreditor'
import InDebtor from './InDebtor'
import SumDebt from './SumDebt'
import RadioForfeit from './RadioForfeit'
import CalcForfeit from './CalcOfForfeit/CalcForfeit'
import { connect } from 'react-redux'

class App extends React.Component{

    render(){
        const { isOpenCalcForfeit } = this.props

        return(
            <div className="container">
                <InCreditor/>
                <InDebtor/>
                <RadioForfeit/>
                <SumDebt />
                {isOpenCalcForfeit ? <CalcForfeit /> : null}
            </div>
        )
    }
}


const mapStateToProps = store => {
    return {
        isOpenCalcForfeit: store.isOpenCalcForfeit,
    }
}


export default connect(mapStateToProps)(App)
