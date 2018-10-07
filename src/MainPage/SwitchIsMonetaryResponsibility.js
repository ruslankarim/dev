import  React from 'react'
import InSumDebt from './InSumDebt'
import RadioForfeitPercent from '../ForfeitPercent/RadioForfeitPercent'
import CalcFofeit from '../CalcMonetaryResponsibility/CalcForfeit'
import {removeRawForfeitAction} from "../actions/addRawForfeitAction";

class  SwitchIsMonetaryResponsibility extends React.Component {
    componentDidMount(){
        this.props.setOpenInSumDebtAction()
    }
    onchange = (e) => {
        const value = document.getElementById('isMonetaryResponse').checked
        if (value){
            this.props.setHideInSumDebtAction()
            this.props.setOpenRadioForfeitPercentAction()
        }
        if(!value){
            this.props.setOpenInSumDebtAction()
            this.props.setHideRadioForfeitPercentAction()
            this.props.setHideRadioForfeitAction()
            this.props.setClearListRowAddAction()
            this.props.setClearListRowsDebtAction()
        }
    }
    render(){
        const {inSumDebt,
            radioForfeitPercent,
            radioForfeit,
            setOpenRadioForfeitAction,
            setHideRadioForfeitAction,
            listRawForfeit,
            addRawForfeitFromMainAction,
            addRawForfeitAction,
            removeRawForfeitAction,
            setClearListRowAddAction,
            listRowsAddDebt,
            addRowDebtFromMainAction,
            addRowDebtAction,
            removeRowDebtAction,
            setClearListRowsDebtAction

        } = this.props

        return(
            <div>
                <div className="row section">
                    <div className="col s12">
                        <div className="switch">
                            <legend><h6>Рассчитать неустойку и/или проценты за пользование чужими денежными средствами?</h6></legend>
                            <label>
                                Нет
                                <input id="isMonetaryResponse" type="checkbox" onChange={this.onchange}/>
                                <span className="lever"></span>
                                Да
                            </label>
                        </div>
                    </div>
                </div>
                {inSumDebt.isOpenInSumDebt ? <InSumDebt/> : null}
                {radioForfeitPercent.isOpenRadioForfeitPercent ? <RadioForfeitPercent
                    setOpenRadioForfeitAction={setOpenRadioForfeitAction}
                    setHideRadioForfeitAction={setHideRadioForfeitAction}
                    setClearListRowAddAction={setClearListRowAddAction}
                    setClearListRowsDebtAction={setClearListRowsDebtAction}
                /> : null}
                {radioForfeit.isOpen ? <CalcFofeit
                    listRawForfeit={listRawForfeit}
                    addRawForfeitFromMainAction={addRawForfeitFromMainAction}
                    addRawForfeitAction={addRawForfeitAction}
                    removeRawForfeitAction={removeRawForfeitAction}

                    listRowsAddDebt={listRowsAddDebt}
                    addRowDebtFromMainAction={addRowDebtFromMainAction}
                    addRowDebtAction={addRowDebtAction}
                    removeRowDebtAction={removeRowDebtAction}
                /> : null}
            </div>

        )
    }
}

export default SwitchIsMonetaryResponsibility