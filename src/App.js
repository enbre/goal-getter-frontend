import React, { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Routes from './config/Routes'
import './App.css'
import UserModel from './models/user'

const App= () => {
  const [currentUser, setCurrentUser] = useState(localStorage.getItem('id'))

  const [currentUserName, setCurrentUserName] = useState(localStorage.getItem('name'))


  const storeUser = (userId, userName) => {
    localStorage.setItem('id', userId)
    localStorage.setItem('name', userName)
    setCurrentUser(userId)
    setCurrentUserName(userName)
  }


  const logout = (event) => {
    event.preventDefault()
    localStorage.removeItem('id')
    localStorage.removeItem('name')

    UserModel.logout()
      .then(res => {
        setCurrentUser(null)
      })
  }



  return (
    <div className="App">

      <Header

        currentUser={currentUser}
        currentUserName={currentUserName}
        logout={logout}
      />
      <Routes
        currentUser={currentUser}
        currentUserName={currentUserName}

        storeUser={storeUser}
      />

      <Footer />
    </div>
  );
}

export default App 
