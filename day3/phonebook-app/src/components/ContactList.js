import React, { Component } from 'react';
import ContactCard from './ContactCard';
import axios from 'axios';

class ContactList extends Component {
    state = { contacts: [] };

    componentDidMount() {
        axios.get('http://localhost:4000/api/contacts/')
            .then(resp => this.setState({ contacts: resp.data }))
            .catch(err => console.error(err));
    };

    render() {

        let contactCards = this.state.contacts.map(
            c => <ContactCard contact={c} key={c.id} />);

        return (
            <div className="container">
                {contactCards}
            </div>
        );
    }
}

export default ContactList;