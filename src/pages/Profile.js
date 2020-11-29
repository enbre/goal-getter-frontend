import React, { useContext } from 'react';
import {AuthContext} from '../contexts/AuthContext';
import GoalList from '../components/GoalList';


const Profile = () => {
  const {currentUser, currentUserName} = useContext(AuthContext)


  return (
    <div className='container'>
      <h3>  {currentUserName}'s Goals </h3>
 
      <GoalList />
    </div>
  ) 
}


export default Profile