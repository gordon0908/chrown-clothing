import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { sagaSignUpStart } from '../redux/user/user-action';

import './signup.scss';

const SignUp = ({ sagaSignUpStart }) => {
    const [credential, setCredential] = useState({ email: '', password: '', passwordConfirm: '', displayName: ''});

    const { displayName, email, password, passwordConfirm } = credential;

    const handleChange = e => {
        const { name, value } = e.target;
        setCredential({ ...credential, [name]: value});
    }
    const handleSubmit = async e => {
        e.preventDefault();

        if (password !== passwordConfirm) {
            alert('password do not match');
            return;
        }

        sagaSignUpStart({ email, password, displayName });
    }
    return (
        <div className="sign-up">
            <h2 className="title">I do not have account</h2>
            <span>Sign up with your email and password</span>

            <form className="sign-up-form" onSubmit={handleSubmit}>
                <FormInput type="text" name="displayName" value={displayName} onChange={handleChange} lable="Display Name" require="true"/>

                <FormInput type="text" name="email" value={email} onChange={handleChange} lable="email" require="true"/>

                <FormInput type="text" name="password" value={password} onChange={handleChange} lable="Password" require="true"/>

                <FormInput type="text" name="passwordConfirm" value={passwordConfirm} onChange={handleChange} lable="Password Confirm" require="true"/>

                <CustomButton type="submit">Sign Up</CustomButton>
            </form>
        </div>
    )

}

export default connect(null, { sagaSignUpStart })(SignUp);
