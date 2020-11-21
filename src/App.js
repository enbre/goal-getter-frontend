import React, { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Routes from './config/Routes'
import './App.css'
import UserModel from './models/user'
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [currentUser, setCurrentUser] = useState(localStorage.getItem('id'))

  // this was my attempt to get access to user name. not currently working
  const [currentUserName, setCurrentUserName] = useState(localStorage.getItem('name'))
  
// // functional
  // const storeUser = (userId) => {
  //   localStorage.setItem('id', userId)
  //   setCurrentUser( userId )
  // }

  // trying to merge storeUser functions to deal with id and name:
  const storeUser = (userId, userName) => {
    debugger
    localStorage.setItem('id', userId)
    localStorage.setItem('name', userName)
    setCurrentUser( userId )
    setCurrentUserName( userName)
  }

  // this was my attempt to get access to user name. not currently working
  // const storeUserName = (userName) => {
  //   localStorage.setItem('name', userName)
  //   setCurrentUserName( userName )
  // }

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
        
        currentUser={ currentUser } 
        currentUserName={currentUserName}
        logout={ logout }
      />
      <Routes 
        currentUser={ currentUser }
        currentUserName={currentUserName}

        storeUser={ storeUser }
      />
 
      {/* <Footer /> */}
    </div>
  );
}

export default App 
