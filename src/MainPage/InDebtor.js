import React from 'react'
import M from 'materialize-css'
import Dadata from '../dadata/dadata'

class InDebtor extends React.Component{

    oninput = (e) => {
        const { data, container} = Dadata.org(e.target.value)
        this.container = container
        this.instance.updateData(data)
    }

    componentDidMount(){

        this.instance = M.Autocomplete.init(document.getElementById('inDebtor'))
    }
    render(){
        return(
            <div className="row section">
                <div className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <input placeholder="Начните вводить ИНН, ОГРН или наименование" type="text" id="inDebtor" className="autocomplete" onInput={this.oninput}/>
                            <label htmlFor="inDebtor" className="active">Должник</label>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default InDebtor