import React, { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext';
import Goal from './Goal'
import CreateGoal from './CreateGoal'
import GoalModel from '../models/goal'


const GoalList = () => {
   const { currentUser} = useContext(AuthContext)

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

   let allGoals = goals.map((goal, i) => {
      return <Goal
         key={i}
         goal={goal}
         fetchData={fetchData}
      />
   })


   return (
      <>
         <div className="CreateGoal">
            <CreateGoal createGoal={createGoal} />
         </div>
         <div className="d-flex container" style={{ flexDirection: "row" }}>
            {allGoals}
         </div>
      </>
   )
}

export default GoalList
