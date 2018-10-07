import React from 'react'
import M from 'materialize-css'

class InRequisitesContract extends React.Component {

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
            <div className="row section">
                <form className="col s12">
                    <legend><h6>Реквизиты договора:</h6></legend>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="dateContract" type="text" className="datepicker"/>
                            <label htmlFor="dateContract">Дата</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="numContract" type="text" className="validate"/>
                            <label htmlFor="numContract">Номер договора</label>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default InRequisitesContract