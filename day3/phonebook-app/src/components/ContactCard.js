import React, { Component } from 'react';

class ContactCard extends Component {

    render() {
        return (
            <div className="card" style={{ width: '400px' }}>
                <div className="card-body">
                    <h3 className="card-title">
                        {this.props.contact.gender === 'Male' ? 'Mr.' : 'Ms.'}
                        &nbsp;
                        {this.props.contact.firstname}
                        &nbsp;
                        {this.props.contact.lastname}
                    </h3>
                    <p className="card-text">{this.props.contact.city}</p>
                </div>
            </div>
        );
    }
}

export default ContactCard;