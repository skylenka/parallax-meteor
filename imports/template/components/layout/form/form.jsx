import React, { Component } from 'react';
import './form.scss';


class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {  name: '',
                        email: '',
                        phone: '',
                        message: ''};

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(event) {
        
        this.setState({ name: event.target.value });
    }

    handleEmailChange(event) {

        this.setState({ email: event.target.value });
    }

    handlePhoneChange(event) {

        this.setState({ phone: event.target.value });
    }

    handleMessageChange(event) {

        this.setState({ message: event.target.value });
    }

    handleSubmit(event) {
        alert('Message was sent from : ' + this.state.name);
        event.preventDefault();
    }

    render() {

        return (
            <div className="row" id="myform">
                <form className="col s12" onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="first_name" type="text" className="validate" value={this.state.name} onChange={this.handleNameChange} />
                            <label htmlFor="first_name">Name</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="icon_telephone" type="tel" className="validate" pattern="^[0-9\-\+]{9,15}$" value={this.state.phone} onChange={this.handlePhoneChange}/>
                            <label htmlFor="icon_telephone">Telephone</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s12">
                            <input id="email" type="email" className="validate" required value={this.state.email} onChange={this.handleEmailChange}/>
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <div className="row">
                                <div className="input-field col s12">
                                    <textarea id="textarea1" className="materialize-textarea" value={this.state.message} onChange={this.handleMessageChange}></textarea>
                                    <label htmlFor="textarea1">Message</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button className="btn brown waves-effect waves-light" type="submit" name="action">Send
                        <i className="material-icons right">send</i>
                    </button>
                </form>
            </div>
        )
    }
}
export default Form;