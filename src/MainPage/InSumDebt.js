import React from 'react'

function SumDebt() {
    return (
        <div className="row section">
            <div className="col s12">
                <div className="row">
                    <div className="input-field col s12">
                        <legend><h6></h6></legend>
                        <input id="first_name" type="text" className="validate"/>
                        <label htmlFor="first_name">Укажите сумму основного долга</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SumDebt