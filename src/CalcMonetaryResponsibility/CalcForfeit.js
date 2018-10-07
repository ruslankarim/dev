import React from 'react'
import M from 'materialize-css'
import InOverduePeriod from './OverduePeriod/InOverduePeriod'
import InSumDebt from '../MainPage/InSumDebt'
import InAmountForfeit from './AmountForfeit/InAmountForfeit'
import MainRowAddPay from './RowAddPay/MainRowAddPay'
import ListCalcOfForfeit from './ListCalcOfForfeit'
import '../css/css.css'
import {removeRawForfeitAction} from "../actions/addRawForfeitAction";
import ListAddDebt from "./ListAddDebt";

class CalcForfeit extends React.Component {

    onclick = () => {
        const id = uuid.v4()
        //this.props.addCalcForfeitAction(id)
    }

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
        const {
            listRawForfeit,
            addRawForfeitFromMainAction,
            addRawForfeitAction,
            removeRawForfeitAction,

            listRowsAddDebt,
            addRowDebtFromMainAction,
            addRowDebtAction,
            removeRowDebtAction

        } = this.props

        var isPay
        return(
            <div className="row">
                <div className="col s12">
                    <form>
                        <InSumDebt/>
                        <InOverduePeriod />
                        <InAmountForfeit/>
                        <div className='section z-depth-1-half'>
                        <MainRowAddPay
                            isPay={isPay=true}
                            listRawForfeit={listRawForfeit}
                            addRawForfeitFromMainAction={addRawForfeitFromMainAction}
                        />
                        <ListCalcOfForfeit
                            isPay={isPay=true}
                            listRawForfeit={listRawForfeit}
                            addRawForfeitAction={addRawForfeitAction}
                            removeRawForfeitAction={removeRawForfeitAction}
                        />
                        </div>
                        <div className='section z-depth-1-half'>
                        <MainRowAddPay
                            isPay={isPay=false}
                            listRowsAddDebt={listRowsAddDebt}
                            addRowDebtFromMainAction={addRowDebtFromMainAction}
                        />
                        <ListAddDebt
                            isPay={isPay=false}
                            listRowsAddDebt={listRowsAddDebt}
                            addRowDebtAction={addRowDebtAction}
                            removeRowDebtAction={removeRowDebtAction}
                        />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default CalcForfeit