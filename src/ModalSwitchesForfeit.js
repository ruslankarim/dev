import React from 'react'

class ModalSwitchesForfeit extends React.Component {
    componentDidMount(){
        M.Modal.init(document.getElementById('modal1')).open()
    }
    render(){
        return(
            <div>



                <div id="modal1" className="modal">
                    <div className="modal-content">
                        <h4>Расчет неустойки</h4>
                        <p>A bunch of text</p>
                    </div>
                    <div className="modal-footer">
                        <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default ModalSwitchesForfeit