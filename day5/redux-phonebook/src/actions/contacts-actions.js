// These are called 'thunk' actions

// In the UI, we call these functions, which in turn,
// return another function with the store's 'dispatcher'
// as parameter, using which we can dispatch actions

// These thunk actions are carrier functions

import axios from 'axios';
import { FETCH_CONTACTS, DELETE_CONTACT, ADD_CONTACT } from './types';
const BASE_URL = 'http://localhost:4000/api/contacts/';

export const fetchContacts = () => dispatch => {
    axios.get(BASE_URL)
        .then(resp => resp.data)
        .then(contacts =>
            dispatch({ type: FETCH_CONTACTS, contacts }))
        .catch(err => console.log(err));
};

export const deleteContact = id => dispatch => {
    axios.delete(BASE_URL + id)
        .then(resp => resp.data)
        .then(status => {
            dispatch({ type: DELETE_CONTACT, id });
        })
        .catch(err => console.log(err));
};

export const addContact = contact => dispatch => {
    axios.post(BASE_URL, contact)
        .then(resp => resp.data)
        .then(({ insertId }) => {
            contact.id = insertId;
            dispatch({ type: ADD_CONTACT, contact })
        })
        .catch(err => console.log(err));
}

export function addNewContact(contact) {
    return function (dispatch) {
        axios.post(BASE_URL, contact)
            .then(resp => resp.data)
            .then(contact =>
                dispatch({ type: ADD_CONTACT, contact }))
            .catch(err => console.log(err));
    }
}