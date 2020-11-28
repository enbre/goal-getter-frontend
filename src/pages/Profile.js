import React, { useEffect, useState } from 'react';
import CreateGoal from '../components/CreateGoal';
import GoalList from '../components/GoalList';
import GoalModel from '../models/goal'

const Profile = ({ currentUser, currentUserName }) => {
  const [goals, setGoals] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const res = await GoalModel.all()
    setGoals(res.goals)
  }

  const createGoal = async (goal) => {
    const newGoal = {
      userId: currentUser,
      title: goal,
      completed: false
    }
    await GoalModel.create(newGoal)
    fetchData()
  }

  return (
    <div className='container'>
      <h3>  {currentUserName}'s Goals </h3>
      <CreateGoal
        createGoal={createGoal}
      />
      <GoalList
        goals={goals}
        fetchData={fetchData}
        currentUser={currentUser}
      />
    </div>
  ) 
}


export default Profile