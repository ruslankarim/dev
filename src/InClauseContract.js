import React from 'react'

class InClauseContract extends React.Component {

    render(){
        return(
            <div className="row">
                <form className="col s12">
                    <span>Можете указать пункт договора, которым предусмотрена неустойка</span>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="clauseForfeit" type="text" className="validate"/>
                            <label htmlFor="clauseForfeit">Например: пункт 5.6.</label>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default InClauseContract