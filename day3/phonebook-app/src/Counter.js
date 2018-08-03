import React, { Component } from 'react';

class Counter extends Component {
    state = { count: 0 }

    incrementHandler = () => {
        this.setState({ count: this.state.count + 1 });
    }
    decrementHandler = () => {
        this.setState({ count: this.state.count - 1 });
    }
    render() {
        return (
            <div>
                <h1>This is a simple counter app</h1>
                <hr />

                <button className="incr" onClick={this.incrementHandler}>Incrment</button>
                <button className="decr" onClick={this.decrementHandler}>Decrment</button>

                <h3>Counter is {this.state.count}</h3>
            </div>
        );
    }
}

export default Counter;