import React from 'react'

class InOverduePeriod extends React.Component {

    render(){
        return(
            <div>
                <legend>Укажите период просрочки</legend>
                <div className="row">
                    <div className="input-field col s6">
                        <input id="picker_initial_debt_date" type="text" className="datepicker"/>
                        <label htmlFor="initial_debt">С</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="picker_end_debt_date" type="text" className="datepicker"/>
                        <label htmlFor="initial_debt">По</label>
                    </div>
                </div>
            </div>
        )
    }
}

export default InOverduePeriod