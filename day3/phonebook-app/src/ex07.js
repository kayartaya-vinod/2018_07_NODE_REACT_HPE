// no reactjs in this example, only pure javascript
import { createStore } from 'redux';

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
const FETCH_TODO = 'FETCH_TODO';

// a reducer receives the current state from the 
// store and a dispataced action. An action is a plain
// JS object typically consisting of a 'type' property
// describing the type of action and the payload of data
const todoReducer = (state = [], action) => {

    switch (action.type) {
        case FETCH_TODO:
            return [...state];
        case ADD_TODO:
            return [...state, action.todo];
        case DELETE_TODO:
            const tmp = [...state];
            const index = tmp.findIndex(t => t.id === action.id);
            tmp.splice(index, 1);
            return [...tmp];
    }

    return state;
}

const store = createStore(todoReducer);

window.store = store;

// the store.subscribe takes a callback as parameter
// and will be executed each time the 
// store's state is changed, which ideally happens 
// when store.dispatch is called

store.subscribe(() => {
    const rows = store.getState()
        .map(todo => todo2TableRow(todo));

    document.querySelector('#tblTodos > tbody')
        .innerHTML = rows.join('');

});

function todo2TableRow(todo) {
    return `<tr>
    <td>
        <a href="javascript:void(0)"
            onclick="deleteTodo(${todo.id})">
            <span class="fa fa-trash-o"></span>
        </a>
    </td>
    <td>${todo.text}</td>
    <td>${todo.priority}</td>
    </tr>`
}

window.deleteTodo = id =>
    store.dispatch({ type: DELETE_TODO, id });


function byId(id) {
    return document.getElementById(id);
}

byId('btnAddTodo').onclick = function () {
    const text = byId('text').value;
    if (!text) {
        alert('Please enter text');
        byId('text').focus();
        return;
    }
    const priority = byId('priority').value;
    const id = Date.now();
    const todo = { id, text, priority };
    store.dispatch({ type: ADD_TODO, todo });
    byId('text').value = '';
    byId('text').focus();
    byId('priority').value = 'HIGH';
}