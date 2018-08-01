import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

class GreetingComponent extends Component {

    // state can not be changed directly
    // in order to change the state, call the
    // setState method
    state = { name: 'World' };

    btnHandler = () => {
        const name = this.refs.tfName.value;
        this.setState({ name });
        this.refs.tfName.value = '';
        this.refs.tfName.focus();
        // every time the state is mutated, the
        // component is re-rendered, due to which,
        // calling setState in the 'render()' will
        // cause a recursion, and application will
        // break
    }

    tfHandler = e => {
        this.setState({name: e.target.value});
    }

    render() {
        return (
            <Fragment>
                <input type="text" ref="tfName"
                    onChange={this.tfHandler} />
                <button onClick={this.btnHandler}>Greet</button>

                <h1>Hello {this.state.name}!</h1>

            </Fragment>
        );
    }
}

ReactDOM.render(<GreetingComponent a="100" b="200" />,
    document.getElementById('root'));