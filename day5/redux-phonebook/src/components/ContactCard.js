import React, { Component } from 'react';
import { deleteContact } from '../actions/contacts-actions';
import { connect } from 'react-redux';

class ContactCard extends Component {

    constructor() {
        super();
        this._deleteHandler = this._deleteHandler.bind(this);
    }

    _deleteHandler() {
        this.props.deleteContact(this.props.contact.id)
    }

    render() {
        const c = this.props.contact;
        console.log('in contact card: ', c);
        const avatar = `http://kelutral.com/old_ci/randomdata/images/${c.gender == 'Male' ? 'men' : 'women'}/${c.id}.jpg`;
        return (
            <div className="row">
                <div className="col-xs-4">
                    <img src={avatar} alt={c.firstname + ' ' + c.lastname} className="img img-circle" />
                </div>
                <div className="col-xs-8">
                    <h3>{c.firstname}  {c.lastname}
                        <span
                            onClick={this._deleteHandler}
                            className="fa fa-trash-o pull-right"></span>
                    </h3>
                    <p>{c.email}<br />{c.phone}</p>
                </div>
            </div>
        );
    }
}

// by connecting the function 'deleteContact', 
// redux will now associate this function with thunk
// middleware, and at the same time, 'deleteContact'
// will be added as a 'prop' in this component
export default connect(null, { deleteContact })(ContactCard);