import { React, Component } from 'react';
import './signin-style.scss';
import FormInput from '../form-input/form-input-component';
import CustomButtom from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utility';

class SignIn extends Component {
  constructor(props) {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email: '',
        password: '',
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
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email id and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            required
            type="email"
            name="email"
            label="email"
            handleChange={this.handleChange}
            value={this.state.email}></FormInput>

          <FormInput
            required
            type="password"
            name="password"
            label="password"
            handleChange={this.handleChange}
            value={this.state.password}></FormInput>
          <div className="buttons">
            <CustomButtom type="submit">Sign In</CustomButtom>
            <CustomButtom onClick={signInWithGoogle} isGoogleSignIn>
              Sign In With Google
            </CustomButtom>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
