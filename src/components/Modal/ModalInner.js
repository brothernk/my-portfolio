import React, { Component } from "react";
import Footer from "../../components/Footer/Footer";

class ModalInner extends Component {

    state = {
        modal:  {
            position: 'absolute',
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex:"9999",
        },
        background: {
            position: 'fixed',
            width: '100%',
            height: '100%',
            top: '0px',
            left: '0px',
            zIndex: '9998',
        }
    }

    render() {
        return (
            <div>
                {this.props.isOpen ?  
                    <div className="modal-background" style={this.state.background}>
                        <div className="modal-style" style={this.state.modal}>
                            <div className="modal-btn" onClick={this.props.onClose}><i className="fas fa-times"></i></div>
                            <div className="modal-text">
                                <p className="modal-p">let's get coffee</p>
                                <h1 className="modal-title">brothernk21@gmail.com</h1>
                                <p className="modal-p" id="phone-num">(651) 491-8829</p>
                            </div>
                            <Footer></Footer>
                        </div>
                    </div>
                : null }
            </div>
        )
    }
    
}

export default ModalInner;