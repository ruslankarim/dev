import React from 'react'

function SumDebt() {
    return (
        <div className="row">
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s12">
                        <input id="first_name" type="text" className="validate"/>
                        <label htmlFor="first_name">Укажите сумму основного долга</label>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SumDebt