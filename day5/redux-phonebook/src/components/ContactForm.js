import React, { Component, Fragment } from 'react';

import { connect } from 'react-redux';
import { addContact } from '../actions/contacts-actions';

class ContactForm extends Component {

    constructor() {
        super();
        this.state = {
            firstname: '',
            lastname: '',
            gender: 'Male',
            phone: '',
            email: '',
            city: 'Bangalore',
            state: 'Karnataka',
            country: 'India'
        }
        this._tfHandler = this._tfHandler.bind(this);
        this._submitHanlder = this._submitHanlder.bind(this);
    }


    _tfHandler(e) {
        this.setState({ [e.target.name]: e.target.value });
    }


    _submitHanlder(e) {
        e.preventDefault();
        let contact = { ...this.state };
        this.props.addContact(contact);
        this.setState({
            firstname: '',
            lastname: '',
            gender: 'Male',
            phone: '',
            email: '',
            city: 'Bangalore',
            state: 'Karnataka',
            country: 'India'
        });
    }

    render() {
        return (
            <Fragment>
                <h3 className="text-center">Add new contact details</h3>
                <form onSubmit={this._submitHanlder} className="form">
                    <div className="form-group">
                        <label htmlFor="firstname" className="control-label">Firstname</label>
                        <div>
                            <input id="firstname" name="firstname" type="text"
                                value={this.state.firstname}
                                onChange={this._tfHandler}
                                className="form-control" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastname" className="control-label">Lastname</label>
                        <div>
                            <input id="lastname" name="lastname" type="text"
                                value={this.state.lastname}
                                onChange={this._tfHandler}
                                className="form-control" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="control-label">Email</label>
                        <div>
                            <input id="email" name="email" type="email"
                                value={this.state.email}
                                onChange={this._tfHandler}
                                className="form-control" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone" className="control-label">Phone</label>
                        <div>
                            <input id="phone" name="phone" type="tel"
                                value={this.state.phone}
                                onChange={this._tfHandler}
                                className="form-control" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="city" className="control-label">City</label>
                        <div>
                            <input id="city" name="city" type="text"
                                value={this.state.city}
                                onChange={this._tfHandler}
                                className="form-control" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="state" className="control-label">State</label>
                        <div>
                            <input id="state" name="state" type="text"
                                value={this.state.state}
                                onChange={this._tfHandler}
                                className="form-control" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="country" className="control-label">Country</label>
                        <div>
                            <input id="country" name="country" type="text"
                                value={this.state.country}
                                onChange={this._tfHandler}
                                className="form-control" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-8 col-sm-offset-4">
                            <button
                                className="btn btn-primary">Add Contact</button>
                        </div>
                    </div>
                </form>
            </Fragment>
        );
    }
}

export default connect(null, { addContact })(ContactForm);