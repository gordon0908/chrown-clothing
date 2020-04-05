import React, { Component } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { SignInWithGoogle, auth } from '../../firebase/firebase.util';

import './signin.scss';

class Signin extends Component{
    constructor() {
        super(...arguments);

        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = async e => {
        const { email, password } = this.state;

        try {
            const { user } = await auth.signInWithEmailAndPassword(email, password);
            console.log(user)

            this.setState({
                email: '',
                password: ''
            })
        }catch(e) {
            console.log('sign in error', e.message);
        }



    };
    handleChange = e => {
        const { value, name } = e.target;
        this.setState({
            [name]: value
        })
    }
    render() {
        const { email, password } = this.state;
        return (
            <div className="signin">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput lable="email" name="email" trpe="email" value={email} handleChange={this.handleChange} require="true"/>

                    <FormInput lable="password" name="password" type="password" value={password} handleChange={this.handleChange} require="true"/>

                    <div className="buttons">
                        <CustomButton type="submit">Sign In</CustomButton>

                        <CustomButton type="button" onClick={SignInWithGoogle} IsGoogleButton="true">Sign In With Google</CustomButton>
                    </div>

                </form>
            </div>
        )
    }
};

export default Signin;
