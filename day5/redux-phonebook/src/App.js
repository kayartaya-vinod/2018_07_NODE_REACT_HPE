import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers/root-reducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';

const store = createStore(rootReducer,
  composeWithDevTools(applyMiddleware(thunk)));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <ContactForm />
            </div>
            <div className="col-sm-6">
              <ContactList />
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;