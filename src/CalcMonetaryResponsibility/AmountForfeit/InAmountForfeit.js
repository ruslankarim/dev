import React, {Component} from 'react'

class InAmountForfeit extends Component {
    render(){
        return(
            <div className="row">
                <div className="input-field col s3">
                    <input id="forfeit" type="text" className="validate"/>
                    <label htmlFor="forfeit">Величина неустойки</label>
                </div>
                <div className="col s3">
                    <p>
                        <label>
                            <input name="group1" type="radio" defaultChecked />
                            <span>% в день</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input name="group1" type="radio" />
                            <span>% годовых</span>
                        </label>
                    </p>
                </div>
            </div>
        )
    }
}

export default InAmountForfeit