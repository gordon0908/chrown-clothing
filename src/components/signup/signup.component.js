import React, { Component } from 'react';

import { auth, createUser } from '../../firebase/firebase.util';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './signup.scss';

class SignUp extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            displayName: '',
            email: '',
            password: '',
            passwordConfirm: ''
        }
    }
    handleChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }
    handleSubmit = async e => {
        e.preventDefault();
        const { displayName, email, password, passwordConfirm } = this.state;

        if (password !== passwordConfirm) {
            alert('password do not match');
            return;
        }

        try {
     
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
 
            await createUser(user, { displayName });

            this.setState({
                displayName:'',
                email: '',
                password: '',
                passwordConfirm: ''
            });

            
        } catch(e) {
            console.error('Error when signup', e.message);
        }
        
    }
    render() {
        const { displayName, email, password, passwordConfirm } = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">I do not have account</h2>
                <span>Sign up with your email and password</span>

                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput type="text" name="displayName" value={displayName} onChange={this.handleChange} lable="Display Name" require="true"/>

                    <FormInput type="text" name="email" value={email} onChange={this.handleChange} lable="email" require="true"/>

                    <FormInput type="text" name="password" value={password} onChange={this.handleChange} lable="Password" require="true"/>

                    <FormInput type="text" name="passwordConfirm" value={passwordConfirm} onChange={this.handleChange} lable="Password Confirm" require="true"/>

                    <CustomButton type="submit">Sign Up</CustomButton>
                </form>
            </div>
        )
    }
};

export default SignUp;
