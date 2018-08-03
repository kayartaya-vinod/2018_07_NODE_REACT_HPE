import React, { Component, Fragment } from 'react';
import axios from 'axios';
import ContactList from './ContactList';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppHeader from './AppHeader';
import LoginForm from './LoginForm';
import { loadingHoc } from './loadingHoc';

const baseUrl = 'http://localhost:4000/api/contacts/';

class App extends Component {
    state = { contacts: [] }

    componentDidMount = () => {
        this.getAllContacts();
    }

    // use arrow functions so that 'this' always
    // corresponds to the instanceof 'App'
    getAllContacts = () => {
        let nocache = '?ts=' + Date.now();
        axios.get(baseUrl + nocache)
            .then(resp => this.setState({ contacts: resp.data }))
            .catch(err => console.error(err));
    }

    deleteContact = (id) => {

        axios.delete(baseUrl + id, {
            headers: {
                'Authorization': window.sessionStorage['authToken']
            }
        })
            .then(() => {
                const contacts = this.state.contacts;
                const index = contacts.findIndex(c => c.id === id);
                contacts.splice(index, 1);
                this.setState({ contacts });
            })
            .catch(err => console.error(err));
    }


    render() {
        const propsToSend = {
            contacts: this.state.contacts,
            ...this.props,
            deleteContact: this.deleteContact
        }
        return (
            <Router>
                <Fragment>
                    <Route render={props => <AppHeader {...props} />} />

                    <div className="row">
                        <div className="col"></div>
                        <div className="col">
                            <Route path="/" exact={true}
                                render={(props) => <h1>Welcome to Phonebook App</h1>} />
                            <Route
                                path="/contact-list"
                                render={(props) => <ContactList {...propsToSend} {...props} />} />

                            <Route path="/login"
                                component={LoginForm} />
                        </div>
                        <div className="col"></div>
                    </div>
                </Fragment>
            </Router>
        );
    }
}

export default App;