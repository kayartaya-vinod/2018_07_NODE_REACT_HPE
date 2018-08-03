import React, { Component } from 'react';
import ContactCard from './ContactCard';
import { loadingHoc } from './loadingHoc';

class ContactList extends Component {
    render() {
        console.log('ContactList', this.props);
        let contactCards = this.props.contacts.map(
            c => <ContactCard {...this.props} contact={c} key={c.id} />);

        return (
            <div className="container">
                {contactCards}
            </div>
        );
    }
}

export default loadingHoc('contacts')(ContactList);