import React, { Component, Fragment } from "react";
import ContactCard from "./ContactCard";
import { fetchContacts } from '../actions/contacts-actions';

// connect is a HOC
import { connect } from 'react-redux';

class ContactList extends Component {

    componentDidMount() {
        this.props.fetchContacts();
    }

    render() {
        // this prop 'contacts' is added to our
        // component's props by the connect function
        // of react-redux, using the stateToProps
        const contacts = this.props.contacts;

        let cards = contacts.map(c => (
            <li key={c.id} className="list-group-item">
                <ContactCard contact={c} />
            </li>
        ));

        return (
            <Fragment>
                <h3 className="text-center">List of contacts</h3>
                <ul className="list-group">{cards}</ul>
            </Fragment>
        );
    }
}

// state in redux store to this component's props
const stateToProps = state => ({
    contacts: state.contacts
})

// as a HOC, connect takes our component and associates
// the "redux state" + "thunk actions" to the component,
// and returns the same.

// the first argument to the connect is a callback,
// that receives the stores' state, and returns
// the required members of the state.

// The second argument to the connect is an object
// constiting of thunk actions that this component
// needs.
export default connect(stateToProps, { fetchContacts })(ContactList);
