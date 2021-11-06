import React from 'react';
import './signup.style.scss';
import FormInput from '../form-input/form-input-component';
import CustomButtom from '../custom-button/custom-button.component';
import {
  auth,
  createUserProfileDocuments,
} from '../../firebase/firebase.utility';

class SignUp extends React.Component {
  constructor(props) {
    super();
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert('password and confirm password do not match');
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocuments(user, { displayName });
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (e) {
      console.log(e);
    }
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            required
            type="text"
            name="displayName"
            label="displayName"
            handleChange={this.handleChange}
            value={displayName}></FormInput>
          <FormInput
            required
            type="email"
            name="email"
            label="email"
            handleChange={this.handleChange}
            value={email}></FormInput>
          <FormInput
            required
            type="password"
            name="password"
            label="password"
            handleChange={this.handleChange}
            value={password}></FormInput>
          <FormInput
            required
            type="password"
            name="confirmPassword"
            label="confirmPassword"
            handleChange={this.handleChange}
            value={confirmPassword}></FormInput>
          <CustomButtom type="submit">Sign Up</CustomButtom>
        </form>
      </div>
    );
  }
}

export default SignUp;
