import React from 'react'

class RadioIsForfeit extends React.Component {

    onchange = (e) => {

        if (e.target.id === 'includeForfeit') {
            this.props.setOpenRadioCalcForfeitAction()
        }

        if (e.target.id === 'includePercent') {
            this.props.setOpenRadioPercentAction()
        }

        if (e.target.id === 'includePercentForfeit') {
            this.props.setOpenRadioPercentForfeitAction()
        }

        if (e.target.id === 'noPercentForfeit') {
            this.props.setNoPercentForfeitAction()
        }

    }

    render(){
        return(
            <div className="row">
                <div className="col s12">
                    <form action="#">
                        <p>
                            <label>
                                <input id = "includeForfeit" name="forfeit" type="radio" onChange={this.onchange}/>
                                <span>Включить сведения только о неустойке</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input id = "includePercent" name="forfeit" type="radio" onChange={this.onchange} />
                                <span>Включить сведения только о процентах за пользование чужими средствами (ст. 395 ГК РФ)</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input id = "includePercentForfeit" name="forfeit" type="radio" onChange={this.onchange} />
                                <span>Включить сведения о неустойке и процентах за пользование чужими денежными средствами (ст. 395 ГК РФ)</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input id = "noPercentForfeit" name="forfeit" type="radio" onChange={this.onchange} />
                                <span>Не включать сведения ни о неустойке ни о процентах за пользование чужими денежными средствами (ст. 395 ГК РФ)</span>
                            </label>
                        </p>
                    </form>
                </div>
            </div>
        )
    }
}

export default RadioIsForfeit