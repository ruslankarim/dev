import React from 'react'

class RadioPercent extends React.Component {
    render(){
        return(
            <div className="row">
                <div className="col c12">
                    <span>Сведения о процентах за пользование чужими денежными средствами</span>
                    <form action="#">
                        <p>
                            <label>
                                <input name="group1" type="radio" defaultChecked={true} />
                                <span>Рассчитать проценты</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input name="group1" type="radio" />
                                <span>Внести сведения о процентах рассчитанных самостоятельно</span>
                            </label>
                        </p>
                    </form>
                </div>
            </div>
        )
    }
}

export default RadioPercent