import React from 'react';
import GoalList from '../components/GoalList';

const Profile = props => {
  return (
    <div className='container'>
      <h1>Profile of user with ID { props.currentUser } </h1>
      <GoalList />

    </div>
  )
}

export default Profile