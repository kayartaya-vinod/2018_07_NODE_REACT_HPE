import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Calculator extends Component {
    state = { num1: 0, num2: 0, result: '' };

    tfHandler = evt => {
        this.setState({ [evt.target.name]: evt.target.value });
    };

    doMath = (operator) => {
        let result;
        let { num1, num2 } = this.state;

        switch (operator) {
            case '+': result = parseFloat(num1) + parseFloat(num2); break;
            case '-': result = num1 - num2; break;
            case '*': result = num1 * num2; break;
            case '/': result = num1 / num2; break;
        }
        this.setState({ result });
    }

    render() {
        return (
            <div>
                <div>
                    <input name="num1"
                        onChange={this.tfHandler} />
                </div>
                <div>
                    <input name="num2"
                        onChange={this.tfHandler} />
                </div>
                <button onClick={() => this.doMath('+')}>Add</button>
                <button onClick={() => this.doMath('-')}>Subtract</button>
                <button onClick={() => this.doMath('*')}>Multiply</button>
                <button onClick={() => this.doMath('/')}>Divide</button>

                <h3>Result = {this.state.result}</h3>

            </div>
        );
    }
}

ReactDOM.render(<Calculator />,
    document.querySelector('#root'));
