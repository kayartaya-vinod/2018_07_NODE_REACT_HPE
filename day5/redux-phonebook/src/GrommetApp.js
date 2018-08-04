import React, { Component } from 'react';
import { App, Layer, Toast } from 'grommet';
import 'grommet/grommet-hpe.min.css'

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/root-reducer';
import AppHeader from './grommet-components/AppHeader';
import ContactList from './grommet-components/ContactList';
// import ContactForm from './grommet-components/ContactForm';

import Loadable from 'react-loadable';

const ContactForm = Loadable({
    loader: () => import('./grommet-components/ContactForm'),
    loading: () => <Layer align="center" closer={false}>
        <h1 style={{ textAlign: 'center' }}>Loading...</h1>
    </Layer>
});

// custom middleware 
const loggerMW = store => next => action => {
    action.type = action.type.toUpperCase();
    console.log('In loggerMW, state is', store.getState(), 'action is', action);
    next(action); // invoke the next middleware (if any) or goto reducer
}



const store = createStore(rootReducer,
    composeWithDevTools(applyMiddleware(thunk, loggerMW)));

class GrommetApp extends Component {
    constructor() {
        super();
        this.state = {
            showContactForm: false,
            showToast: false
        };
        this.showHideContactForm = this.showHideContactForm.bind(this);
        this.showToast = this.showToast.bind(this);
    }

    showToast() {
        this.setState({ showToast: true });
    }

    showHideContactForm(showOrHide) {
        this.setState({ showContactForm: showOrHide });
    }


    render() {
        let toastLayer;
        if (this.state.showToast === true) {
            toastLayer = <Toast status="ok"
                onClose={() => this.setState({ showToast: false })}>
                New contact added successfully to your phonebook
            </Toast>;

            window.setTimeout(() => {
                this.setState({ showToast: false });
            }, 3000);
        }

        let contactFormLayer;
        if (this.state.showContactForm === true) {
            contactFormLayer = (
                <Layer closer={true} align="left"
                    onClose={() => this.showHideContactForm(false)}>
                    <ContactForm
                        showToast={this.showToast}
                        showHideContactForm={this.showHideContactForm} />
                </Layer>
            );
        }

        return (
            <Provider store={store}>
                <App>
                    <AppHeader
                        showHideContactForm={this.showHideContactForm} />
                    <ContactList />
                    {contactFormLayer}
                    {toastLayer}
                </App>
            </Provider>
        );
    }
}

export default GrommetApp;