import React from 'react';

import './sign-in-and-sign-up.scss';
import Signin from '../../components/signin/signin.component';
import SignUp from '../../components/signup/signup.component';

const SignInAndSignUp = () => {
    return (
        <div className="sign-in-and-sign-up">
            <Signin />

            <SignUp />
        </div>
    )
};

export default SignInAndSignUp;
