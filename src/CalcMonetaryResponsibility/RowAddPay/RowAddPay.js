import React, {Component} from 'react'
import M from "materialize-css";
import uuid from "uuid";
import {removeRawForfeitAction} from "../../actions/addRawForfeitAction";

class RowAddPay extends Component{

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
                <div className="input-field col s5">
                    <input id={"date"+ this.props.id} type="text" className="datepicker"/>
                    <label htmlFor={"date"+ this.props.id}>Дата</label>
                </div>
                <div className="input-field col s5">
                    <input id={"in" + this.props.id} type="text" className="validate"/>
                    <label htmlFor={"in" + this.props.id}>Сумма</label>
                </div>
                <div className="col s1">
                    <i className="material-icons add" index={this.props.index} onClick={this.onclick}>add</i>
                </div>
                <div className="col s1">
                    <i className="material-icons remove" index={this.props.index} onClick={this.onclick}>remove</i>
                </div>
            </div>
        )
    }

     onclick = (e) => {
        const cls = e.target.className.split(" ")[1]
        if(this.props.isPay){
            if (cls === "add") {
                this.props.addRawForfeitAction({
                    id: uuid.v4(),
                    index: e.currentTarget.getAttribute("index")
                })
            }

            if (cls === "remove") {
                this.props.removeRawForfeitAction(e.currentTarget.getAttribute("index"))
            }
        }

         if(!this.props.isPay){
             if (cls === "add") {
                 this.props.addRowDebtAction({
                     id: uuid.v4(),
                     index: e.currentTarget.getAttribute("index")
                 })
             }

             if (cls === "remove") {
                 this.props.removeRowDebtAction(e.currentTarget.getAttribute("index"))
             }
         }

     }
}

export default RowAddPay