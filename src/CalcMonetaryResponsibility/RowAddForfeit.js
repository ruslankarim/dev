import React from 'react'

class RowAddForfeit extends React.Component {
    render(){
        return(
            <div className="row">
                <div className="input-field col s5">
                    <input id="partially_debt_date" type="text" className="datepicker"/>
                    <label htmlFor="initial_debt">Дата</label>
                </div>
                <div className="input-field col s5">
                    <input id="partially_debt" type="text" className="validate"/>
                    <label htmlFor="partially_debt">Сумма</label>
                </div>
                <div className="col s1">
                    <a className="waves-effect waves-light btn"><i className="material-icons" onClick={this.onclick}>add</i></a>
                </div>
                <div className="col s1">
                    <a className="waves-effect waves-light btn"><i className="material-icons">remove</i></a>
                </div>
            </div>
        )
    }
}
export default RowAddForfeit