import React from 'react'

class InYourselfForfeit extends React.Component {
    render(){
        return(
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="yslfForfeit" type="text" className="validate"/>
                            <label htmlFor="yslfForfeit">Укажите сумму неустойки</label>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default InYourselfForfeit