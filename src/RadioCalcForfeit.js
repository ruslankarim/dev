import React from 'react'

class RadioCalcForfeit extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="col c12">
                    <span>Сведения о неустойке</span>
                    <form action="#">
                        <p>
                            <label>
                                <input name="group1" type="radio" defaultChecked={true} />
                                <span>Рассчитать неустойку</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input name="group1" type="radio" />
                                <span>Внести сведения о неустойке рассчитанной самостоятельно</span>
                            </label>
                        </p>
                    </form>
                </div>
            </div>
        )
    }
}

export default RadioCalcForfeit