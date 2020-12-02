import React, { useContext, useState } from 'react'
import { Redirect } from 'react-router-dom'
import UserModel from '../models/user'
import {AuthContext} from '../contexts/AuthContext';

const Login = () => {
  const {currentUser, storeUser} = useContext(AuthContext)
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')

  let handleEmail = e => {
    setEmail(e.target.value)
  }

  let handlePassword = e => {
    setPassword(e.target.value)
  }

  let handleSubmit = (event) => {
    event.preventDefault()

    UserModel.login({
      email,
      password
    }).then(data => {
        if (!data) {
          console.log('Login Unsuccessful')
          return false
        }
        // storeUser is defined in the app component and passed to Login
        console.log(data)
        // temporary debugging tool. stops code from loading when insterted "debugger"
        storeUser(data.id, data.name)
      })
      .catch(err => console.log('Login Error', err))
  }

  // if user is logged in, redirect
  if (currentUser) return <Redirect to='/profile' />

  return (
    <div className='login-form'>
      <h4>Login</h4>
      <form onSubmit={ handleSubmit }>
        <div className="form-group">
          <label htmlFor="name">Email</label>
          <input 
            onChange={ handleEmail } 
            value={ email } 
            type="email" 
            id="email" 
            name="email" 
            required  
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input 
            onChange={ handlePassword } 
            value={ password } 
            type="password" 
            id="password" 
            name="password" 
            required
          />
        
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login;