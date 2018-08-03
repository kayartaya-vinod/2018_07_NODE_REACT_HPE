import React, { Component } from 'react';
import axios from 'axios';
import { loadingHoc } from './loadingHoc';

class LoginForm extends Component {
    state = { username: '', password: '' };

    tfHandler = ({ target }) => {
        this.setState({ [target.name]: target.value });
    };

    btnLoginHandler = () => {
        axios.post('http://localhost:4000/auth/login/', this.state)
            .then(resp => {
                window.sessionStorage['authToken'] = resp.data.token;
                this.props.history.push('/contact-list');
            })
            .catch(err=> {
                window.alert('Invalid username/password');
                this.refs.username.focus();
                this.setState({ username: '', password: '' });
            });
    };

    render() {
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="username">Ente username</label>
                    <input className="form-control" ref="username"
                        onChange={this.tfHandler}
                        name="username" placeholder="username" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Enter password</label>
                    <input type="password" className="form-control"
                        onChange={this.tfHandler}
                        name="password" placeholder="password" />
                </div>
                <button type="button"
                    onClick={this.btnLoginHandler}
                    className="btn btn-primary">Login</button>
            </form>
        );
    }
}

export default LoginForm;