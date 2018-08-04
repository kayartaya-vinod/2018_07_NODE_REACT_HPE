import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchContacts, deleteContact } from '../actions/contacts-actions';
import TrashIcon from 'grommet/components/icons/base/Trash';
import { Table, TableRow } from 'grommet';

const reducersToProps = state => ({
    // LHS 'contacts' is going to be the new prop of this component
    // RHS 'state.contacts' is the reducer having state
    contacts: state.contacts
});

const thunkActionsToProps = {
    // LHS 'getAllContacts' is going to be the new prop of this comp
    // RHS 'fetchContacts' is the function, we want thunk to invoke
    getAllContacts: fetchContacts,
    deleteContact
};

class ContactList extends Component {

    componentDidMount() {
        this.props.getAllContacts();
    }

    _deleteHandler(id) {
        if(!window.confirm('Are sure to delete?')) return;
        
        this.props.deleteContact(id);
    }

    render() {

        const rows = this.props.contacts.map((c, i) => (
            <TableRow key={c.id} className="show-trash-on-hover">
                <td>{i + 1}</td>
                <td>{c.firstname + ' ' + c.lastname}</td>
                <td>{c.email}</td>
                <td>{c.phone}</td>
                <td><TrashIcon size="xsmall"
                    onClick={this._deleteHandler.bind(this, c.id)}
                    className="trash" /></td>
            </TableRow>
        ));

        return (
            <Table scrollable={true}>
                <thead>
                    <tr>
                        <th>Sl no</th>
                        <th>Name</th>
                        <th>Email id</th>
                        <th>Phone number</th>
                        <th><TrashIcon size="xsmall"/></th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </Table>
        );
    }
}

export default connect(reducersToProps, thunkActionsToProps)(ContactList);