import React from 'react'
import Goals from './Goals'

const GoalList= (props) => {
   let goals = props.goals.map((goal, i) => {
      return <Goals 
               key={i} 
               goal={ goal} 
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
