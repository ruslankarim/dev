import React from 'react'
import InClauseContract from './InClauseContract'
import CalcForfeit from './CalcOfForfeit/CalcForfeit'

class RadioCalcForfeit extends React.Component{

    onchange = (e) => {

        if (e.target.id === 'calcForfeit') {
            console.log('setOpenKindForfeit')
        }

        if (e.target.id === 'forfeitYourself') {
            console.log('setOpenForfeitYourself')
        }

    }

    render(){

        return(
            <div>
                <div className="row">
                    <div className="col c12">
                        <span>Сведения о неустойке</span>
                        <form action="#">
                            <p>
                                <label>
                                    <input id="calcForfeit" name="group1" type="radio" onChange={this.onchange}/>
                                    <span>Рассчитать неустойку</span>
                                </label>
                            </p>
                            <p>
                                <label>
                                    <input id="forfeitYourself" name="group1" type="radio" onChange={this.onchange}/>
                                    <span>Внести сведения о неустойке рассчитанной самостоятельно</span>
                                </label>
                            </p>
                        </form>
                    </div>
                </div>
                <InClauseContract />
                <CalcForfeit addCalcForfeitAction={this.props.addCalcForfeitAction} ListCalcForfeit = {this.props.ListCalcForfeit}/>
            </div>
        )
    }
}

export default RadioCalcForfeit