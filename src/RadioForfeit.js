import React from 'react'

class RadioForfeit extends React.Component {


    render(){
        return(
            <div className="row">
                <div className="col s12">
                    <span>Рассчитать неустойку за нарушение обязательств?</span>
                    <form action="#">
                        <p>
                            <label>
                                <input name="group1" type="radio" defaultChecked={true} />
                                <span>Нет</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input name="group1" type="radio" />
                                <span>Да</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input name="group1" type="radio"  />
                                <span>Внести свдения о неустойке рассчитанной самостоятельно</span>
                            </label>
                        </p>
                    </form>
                </div>
            </div>
        )
    }
}

export default RadioForfeit