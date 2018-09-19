import React from 'react'
import M from 'materialize-css'
import '../css/css.css'

class CalcForfeit extends React.Component {

    componentDidMount(){
        const elems = document.querySelectorAll('.datepicker');
        const instance = M.Datepicker.init(elems,
            {
                i18n:{
                    cancel: 'Отмена',
                    months: [

                        'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'

                    ],
                    monthsShort: [
                        'Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'

                    ],
                    weekdays: [

                        'Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'
                    ],

                    weekdaysShort: [
                        'Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'
                    ],

                    weekdaysAbbrev : ['В','П','В','С','Ч','П','С']

                },
                format: 'dd.mm.yyyy'
            });
    }

    render(){

        return(
            <div className="row">
                <div className="col s12">
                    <form>
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="initial_debt" type="text" className="validate"/>
                                <label htmlFor="initial_debt">Укажите сумму долга</label>
                            </div>
                        </div>
                        <div className="z-depth-1-half">
                            <legend>Укажите период просрочки</legend>
                            <div className="row">
                                <div className="input-field col s6">
                                    <input id="picker_initial_debt_date" type="text" className="datepicker"/>
                                    <label htmlFor="initial_debt">С</label>
                                </div>
                                <div className="input-field col s6">
                                    <input id="picker_end_debt_date" type="text" className="datepicker"/>
                                    <label htmlFor="initial_debt">По</label>
                                </div>
                            </div>
                        </div>
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
                        <div className="z-depth-1-half">
                            <legend>Частичная оплата долга</legend>
                            <div className="row">
                                <div className="input-field col s5">
                                    <input id="partially_debt_date" type="text" className="datepicker"/>
                                    <label htmlFor="initial_debt">Дата</label>
                                </div>
                                <div className="input-field col s5">
                                    <input id="partially_debt" type="text" className="validate"/>
                                    <label htmlFor="partially_debt">Сумма</label>
                                </div>
                                <div className="col s2">
                                    <a className="waves-effect waves-light btn"><i className="material-icons">add</i></a>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default CalcForfeit