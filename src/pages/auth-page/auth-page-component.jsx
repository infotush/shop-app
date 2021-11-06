import React from 'react';
import './auth-page-style.scss';
import SignIn from '../../components/signin/signin-component';
import SignUp from '../../components/signup/signup.component';

const AuthPage = () => (
  <div className="auth-page">
    <SignIn></SignIn>
    <SignUp></SignUp>
  </div>
);

export default AuthPage;
