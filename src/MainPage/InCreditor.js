import React from 'react'
import M from 'materialize-css'

class InCreditor extends React.Component {
    componentDidMount(){
        M.FormSelect.init(document.getElementById('select-creditor'))
    }

    render(){
        return(
            <div className = "row section">
                <div className="input-field col s12">
                    <select id="select-creditor">
                        <option value="" disabled selected>Выберете кредитора</option>
                        <option value="1">Шинный двор</option>
                        <option value="2">Шины и и диски Казань</option>
                    </select>
                    <label>Кредитор</label>
                </div>
            </div>
        )
    }
}

export default InCreditor