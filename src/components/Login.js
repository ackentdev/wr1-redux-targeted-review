import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {loginUser} from '../redux/authReducer';

class Login extends Component {
    constructor(){
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    login = (e) => {
        e.preventDefault();
        const {email, password} = this.state
        axios.post('/auth/login', {email, password})
        .then( res => {
            // redux magic 🌟
            this.props.loginUser(res.data)
            this.props.history.push('/album')
        })
        .catch(err => {
            alert('Could not log in')
        })
    }


    render(){
        const {email, password} = this.state;
        return(
            <div className="login-form">
                <form
                    onSubmit={(e) => this.login(e)}>
                    <input
                        className='input'
                        type="text" 
                        placeholder="email..."
                        name="email"
                        value={email}
                        onChange={e => this.changeHandler(e)}/>
                    <input
                        className='input'
                        type="password"
                        placeholder="password..."
                        name="password"
                        value={password}
                        onChange={e => this.changeHandler(e)}/>
                    <input
                        className="login-button"
                        type="submit"
                        value="Login"/>
                </form>
            </div>
        )
    }
}

const mapStateToProps = reduxState => reduxState;
export default connect(mapStateToProps, {loginUser})(Login)
