import React, { useState, useEffect } from "react"
import Tasks from './Tasks'
import GoalModel from '../models/goal'
import Profile from "../pages/Profile"
// const URL = "http://localhost:4000"

const Goals = (props) => {


   // const [tasks, setTasks] = useState([])


   // async function getTasks(){
   //    const res = await fetch(`URL/${currrentUser}`)

   //    const taskArray = await res.json()

   //    setTasks(taskArray)
   // }

   // useEffect(()=>{
   //    getTasks()
   // },[])

   const handleDelete = (event) => {
      // event.preventDefaut()
      console.log(props.goal)
      GoalModel.delete(props.goal.id)
      
      // redundant delete function defined in Profile.js:
      // props.deleteGoal(props.goal.id)
      window.location = `/profile`



   }


   return (
      <div >
         <div className="card border-dark w-40" style={{width: "30rem"}}>
            <div className="card-body">
               <div className="card-goal">
                  <h4 className="card-title">{props.goal.title}</h4>
                  <button className="btn btn-outline-info btn-sm" >Edit</button>
                  <button className="btn btn-outline-info btn-sm" onClick={handleDelete}>Delete</button>
               </div>
                  <hr/>
               <div className="card-task">
                  <p className="card-text">Add a new task</p>
                  <button className="btn btn-outline-info btn-sm">Add Task</button>
               </div>   
            </div>
         </div>


     
         {/* <Tasks /> */}

      </div>
   )
}

export default Goals