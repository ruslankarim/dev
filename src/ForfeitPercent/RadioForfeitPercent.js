import React from 'react'

class RadioForfeitPercent extends React.Component {
    onchange = (e) => {
        if (e.target.id === 'calcForfeit') {
            this.props.setOpenRadioForfeitAction()
        }

        if (e.target.id === 'calcPercent') {
            this.props.setHideRadioForfeitAction()
            this.props.setClearListRowAddAction()
            this.props.setClearListRowsDebtAction()
        }
    }
    render(){
        return(
            <div className="row section">
                <div className="col c12">
                    <form action="#">
                        <p>
                            <label>
                                <input id="calcForfeit" name="group1" type="radio" onChange={this.onchange} />
                                <span>Рассчитать неустойку</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input id="calcPercent" name="group1" type="radio" onChange={this.onchange} />
                                <span>Рассчитать проценты за пользование чужими денежными средствами</span>
                            </label>
                        </p>
                    </form>
                </div>
            </div>
        )
    }
}

export default RadioForfeitPercent