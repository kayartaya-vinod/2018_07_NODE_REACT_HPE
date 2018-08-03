import { ADD_CONTACT, FETCH_CONTACTS, DELETE_CONTACT } from "../actions/types";

// This is a reducer, which is invoked whenever
// there is an action dispatched, and receives
// the current state of the store along with the
// action dispatched, which has a 'type' property
// and a payload. Using this the reducer function
// will return a new/modified state, back to store.
export default (state = [], action) => {
    switch (action.type) {
        case ADD_CONTACT:
            return [action.contact, ...state];
        case FETCH_CONTACTS:
            return [...action.contacts];
        case DELETE_CONTACT:
            const tmp = [...state];
            const index = tmp.findIndex(c => c.id === action.id);
            tmp.splice(index, 1);
            return tmp;

        default:
            return [...state];
    }

}