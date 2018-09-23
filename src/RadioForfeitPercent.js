import React from 'react'

class RadioForfeitPercent extends React.Component {
    render(){
        return(
            <div className="row">
                <div className="col c12">
                    <span>Сведения о процентах за пользование чужими денежными средствами и неустойке</span>
                    <form action="#">
                        <p>
                            <label>
                                <input name="group1" type="radio" />
                                <span>Рассчитать неустойку и проценты</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input name="group1" type="radio" defaultChecked={true} />
                                <span>Рассчитать проценты, сведения о неустойке внести самостоятельно</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input name="group1" type="radio" />
                                <span>Рассчитать неустойку, сведения о процентах внести самостоятельно </span>
                            </label>
                        </p>
                    </form>
                </div>
            </div>
        )
    }
}

export default RadioForfeitPercent