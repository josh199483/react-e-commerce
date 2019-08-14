import React, { Component } from 'react'
import FormInput from './FormInput'
import CustomButton from './CustomButton'
import { signInWithGoogle } from '../firebase/firebase.utils'
import './SignIn.scss'

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }

  handleSubmit = event => {
    event.preventDefault()

    this.setState({email: '', password: ''})
  }

  handleChange = event => {
    const { value, name } = event.target
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className="sign-in">
        <h2>already have an account</h2>
        <span>sign in</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            value={this.state.email}
            handleChange={this.handleChange}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required
          />
          <div className="buttons">
            <CustomButton type='submit'> sign in </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn
