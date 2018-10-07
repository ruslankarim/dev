import React from 'react'
import uuid from 'uuid'

class MainRowAddPay extends React.Component {
    onclick = () =>{
        if(this.props.isPay){
            this.props.addRawForfeitFromMainAction(uuid.v4())
        }

        if(!this.props.isPay){
            console.log('!this.props.isPay')
            this.props.addRowDebtFromMainAction(uuid.v4())
        }
    }

    render(){
        const { isPay } = this.props
        return(
            <div>
                <legend>{isPay ? 'Частичная оплата долга' : 'Дополнительный долг' }</legend>
                <div className="row">
                    <div className="input-field col s5">
                        <input id={isPay ? 'partially_pay_date' : 'partially_debt_date' }
                               type="text"
                               className="datepicker"/>
                        <label
                            htmlFor={isPay ? 'partially_pay_date' : 'partially_debt_date' }>Дата</label>
                    </div>
                    <div className="input-field col s5">
                        <input id={isPay ? 'partially_pay' : 'partially_debt' }
                               type="text"
                               className="validate"/>
                        <label
                            htmlFor={isPay ? 'partially_pay' : 'partially_debt' }>Сумма</label>
                    </div>
                    <div className="col s1">
                        <i className="material-icons" onClick={this.onclick}>add</i>
                    </div>
                </div>
            </div>
            )
    }
}

export default MainRowAddPay