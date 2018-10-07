import React from 'react'
import RowAddPay from './RowAddPay/RowAddPay'

class ListCalcOfForfeit extends React.Component {
    
    render(){
        const {listRawForfeit, addRawForfeitAction, removeRawForfeitAction, isPay} = this.props
        let index = 0
        const list = listRawForfeit.listAddPay.length > 0 ? listRawForfeit.listAddPay.map(function (r) {
            return <RowAddPay
                    isPay={isPay}
                    addRawForfeitAction={addRawForfeitAction}
                    removeRawForfeitAction={removeRawForfeitAction}
                    id={r.id} key={r.id} index={index++}/>
        }) : null
        return (
            <div>
                {list}
            </div>
        )
    }
}

export default ListCalcOfForfeit