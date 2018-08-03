import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <span className="navbar-brand" >
                <Link to="/">Phonbook App</Link>
            </span>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <span className="nav-link" href="#">
                            <Link to="/">Home</Link>
                        </span>
                    </li>

                    <li className="nav-item">
                        <span className="nav-link" href="#">
                            <Link to="/contact-list">All contacts</Link>
                        </span>
                    </li>

                    <li className="nav-item">
                        <span className="nav-link" href="#">
                            {
                                window.sessionStorage['authToken'] ?
                                    <span onClick={() => { 
                                        delete window.sessionStorage['authToken'];
                                        props.history.push('/login');
                                    }}>Logout</span> :
                                    <Link to="/login">Login</Link>
                            }

                        </span>
                    </li>
                </ul>
            </div>
        </nav>
    );
}