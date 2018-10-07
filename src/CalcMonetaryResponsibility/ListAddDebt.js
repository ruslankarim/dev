import React from 'react'
import RowAddPay from './RowAddPay/RowAddPay'

class ListAddDebt extends React.Component {

    render(){
        const {listRowsAddDebt, addRowDebtAction, removeRowDebtAction, isPay} = this.props
        let index = 0
        const list = listRowsAddDebt.listAddDebt.length > 0 ? listRowsAddDebt.listAddDebt.map(function (r) {
            return <RowAddPay
                isPay={isPay}
                addRowDebtAction={addRowDebtAction}
                removeRowDebtAction={removeRowDebtAction}
                id={r.id} key={r.id} index={index++}/>
        }) : null
        return (
            <div>
                {list}
            </div>
        )
    }
}

export default ListAddDebt