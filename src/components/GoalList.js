import React from 'react'
import Goal from './Goal'

const GoalList= (props) => {
   let goals = props.goals.map((goal, i) => {
      return <Goal 
               key={i} 
               goal={ goal} 
               currentUser={props.currentUser}
               // 
               // deleteGoal={props.deleteGoal} 
               updateGoal={props.updateGoal}
            />
   })
   

    return (
      <div className="d-flex container" style={{flexDirection: "row"}}>
         { goals }
  
      </div>
   )
}

export default GoalList
