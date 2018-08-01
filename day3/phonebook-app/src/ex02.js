import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

const HelloWorld = (props) => {
    return (
        <Fragment>
            <h1>Hello, World!</h1>
            <hr />
            <p>Greeting from {props.username}!</p>
        </Fragment>
    );
};

const myName = 'Vinod Kumar';


ReactDOM.render(<HelloWorld username={myName} />,
    document.getElementById('root'));