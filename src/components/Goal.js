import React from "react"
import TaskList from './TaskList'
import GoalModel from '../models/goal'
import UpdateGoal from './UpdateGoal'


const Goal = (props) => {
  
   const handleDelete = (event) => {
      // event.preventDefaut()
      GoalModel.delete(props.goal.id)
      props.fetchData()
   }


   return (
      <div >
         <div className="card border-dark w-40" style={{ width: "30rem" }}>
            <div className="card-body">
               <div className="card-goal">
                  <h4 className="card-title">{props.goal.title}</h4>
                  <button className="btn btn-outline-info btn-sm goals-button" data-toggle="modal" data-target={`#editModal${props.goal.id}`}>Edit</button>
                  <UpdateGoal
                     goal={props.goal}
                     fetchData={props.fetchData}
                  />
                  <button className="btn btn-outline-info btn-sm goals-button" onClick={handleDelete}>Delete</button>
               </div>
               <hr />
               <TaskList goal={props.goal}/>
            </div>
         </div>
      </div>
   )
}

export default Goal