import React, { useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { sagaGoogleUserStart } from '../redux/user/user-action';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { SignInWithGoogle, auth } from '../../firebase/firebase.util';
import { sagaEmailUserStart } from '../redux/user/user-action';

import './signin.scss';

const Signin = ({ sagaGoogleUserStart, sagaEmailUserStart }) => {
    const [credients, setCredients] = useState({ email: '', password: ''});

    const { email, password } = credients;

    const handleSubmit = async e => {
        e.preventDefault();
        sagaEmailUserStart({ email, password });
    };

    const handleChange = e => {
        const { value, name } = e.target;
        setCredients({ ...credients, [name]: value});
    };

    return (
        <div className="signin">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput lable="email" name="email" trpe="email" value={email} handleChange={handleChange} require="true"/>

                <FormInput lable="password" name="password" type="password" value={password} handleChange={handleChange} require="true"/>

                <div className="buttons">
                    <CustomButton type="submit">Sign In</CustomButton>

                    <CustomButton type="button" onClick={sagaGoogleUserStart} IsGoogleButton="true">Sign In With Google</CustomButton>
                </div>

            </form>
        </div>
    );

};

export default connect(null, {sagaGoogleUserStart, sagaEmailUserStart})(Signin);
