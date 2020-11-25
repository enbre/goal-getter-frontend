import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Home from '../pages/Home'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Profile from '../pages/Profile'
import GoalList from '../components/GoalList'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const currentUser = localStorage.getItem('id')
  const currentUserName = localStorage.getItem('name')

  return  <Route { ...rest } render={ props => {
            return currentUser ? <Component { ...rest } { ...props } /> : <Redirect to="/login" />
          }} 
  />
}

const Routes = (props) => (
  <Switch>
    <Route exact path='/' component={ Home } />
    <Route path='/register' component={ Register } />
    <Route path='/login' render={ (routeComponentProps) => {
      return   <Login  
                {...routeComponentProps}  
                currentUser={ props.currentUser } 
                storeUser={ props.storeUser }
                currentUserName={props.currentUserName}
                />
   } } />
    <PrivateRoute path='/profile' component={ Profile } currentUser={ props.currentUser } currentUserName={props.currentUserName}/>
  </Switch>
)

export default Routes;