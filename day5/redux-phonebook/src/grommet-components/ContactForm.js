import React, { Component } from 'react';
import { addContact } from '../actions/contacts-actions';
import { connect } from 'react-redux';

import {
    Form, Header, Heading, Button,
    FormField, FormFields, Select, Box
} from 'grommet';

class ContactForm extends Component {

    constructor() {
        super();
        // for controlled components
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
        this._selectHandler = this._selectHandler.bind(this);
        this._saveHandler = this._saveHandler.bind(this);
    }

    _tfHandler({ target }) {
        this.setState({ [target.name]: target.value });
    }
    _selectHandler({ target, value }) {
        this.setState({ [target.name]: value },
            () => console.log(this.state));
    }
    _saveHandler() {
        this.props.addContact(this.state);
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
        this.props.showHideContactForm(false);
        this.props.showToast();
    }

    render() {
        return (
            <Form>
                <Header>
                    <Heading>Enter contact details</Heading>
                </Header>
                <FormFields>
                    <FormField label='Firstname'>
                        <input type="text"
                            name="firstname"
                            value={this.state.firstname}
                            onChange={this._tfHandler} />
                    </FormField>
                    <FormField label='Lastname'>
                        <input type="text"
                            name="lastname"
                            value={this.state.lastname}
                            onChange={this._tfHandler} />
                    </FormField>
                    <FormField label='Lastname'>
                        <Select
                            name="gender"
                            value={this.state.gender}
                            onChange={this._selectHandler}
                            options={["Male", "Female"]} />
                    </FormField>
                    <FormField label='Email id'>
                        <input type="email"
                            name="email"
                            value={this.state.email}
                            onChange={this._tfHandler} />
                    </FormField>
                    <FormField label='Phone number'>
                        <input type="tel"
                            name="phone"
                            value={this.state.phone}
                            onChange={this._tfHandler} />
                    </FormField>
                    <FormField label='City'>
                        <input type="text"
                            name="city"
                            value={this.state.city}
                            onChange={this._tfHandler} />
                    </FormField>
                    <FormField label='State/Region'>
                        <input type="text"
                            name="state"
                            value={this.state.state}
                            onChange={this._tfHandler} />
                    </FormField>
                    <FormField label='Country'>
                        <input type="text"
                            name="country"
                            value={this.state.country}
                            onChange={this._tfHandler} />
                    </FormField>

                    <Box direction="row" pad={{ vertical: "medium" }} >
                        <Button primary={true} label="Save"
                            onClick={this._saveHandler} />
                        <Button label="Cancel"
                            onClick={() => this.props.showHideContactForm()} />
                    </Box>

                </FormFields>
                <Box pad={{ vertical: "medium" }} />
            </Form>
        );
    }
}

export default connect(null, { addContact })(ContactForm);
