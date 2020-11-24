import React, { useState, useEffect } from "react"
import Tasks from './Tasks'
import GoalModel from '../models/goal'
import TaskModel from '../models/task'
import UpdateGoals from './UpdateGoals'
import CreateTask from "./CreateTask"

// const URL = "http://localhost:4000"

const Goals = (props) => {
   // state = {
   //    tasks: []
   //  }

   const [tasks, setTasks] = useState([])
   // const [tasks, setTasks] = useState([])
   // async function getTasks(){
   //    const res = await fetch(`URL/${currrentUser}`)
   //    const taskArray = await res.json()
   //    setTasks(taskArray)
   // }
   // useEffect(()=>{
   //    getTasks()
   // },[])

   const handleUpdate = (event) => {
      event.preventDefault()
      console.log('line 23 goals.js', props.goal)
      GoalModel.update(props.goal)
      // debugger

      window.location = '/profile'

   }

   const handleDelete = (event) => {
      // event.preventDefaut()
      console.log('line 33 goals.js', props.goal)
      GoalModel.delete(props.goal.id)

      // redundant delete function defined in Profile.js:
      // props.deleteGoal(props.goal.id)
      window.location = `/profile`
   }

   const createTask = (task) => {
      let newTask = {
         //   userId: this.props.currentUser,
         // userName: this.props.currentUserName,
         title: task,
         goalId: props.goal.id,
         completed: false
      }
      console.log('line 54 profile.js', newTask)
      TaskModel.create(newTask).then((res) => {
         // gets current state of task array
         console.log(res)
         // console.log(this.state)
         debugger
         let task = this.state.task
         // adds new Goal object to goal state
         tasks.push(res.task)
         // and sets it to state, which re-renders it
         setTasks({ tasks: task })
      })
   }



   return (
      <div >
         <div className="card border-dark w-40" style={{ width: "30rem" }}>
            <div className="card-body">
               <div className="card-goal">
                  <h4 className="card-title">{props.goal.title}</h4>
                  <button className="btn btn-outline-info btn-sm goals-button" data-toggle="modal" data-target={`#editModal${props.goal.id}`}>Edit</button>
                  <UpdateGoals
                     title={props.goal.title}
                     id={props.goal.id}
                     handleUpdate={handleUpdate} //from goals.js
                     updateGoal={props.updateGoal} // from profile.js
                     goal={props.goal}
                     history={props.history} />
                  <button className="btn btn-outline-info btn-sm goals-button" onClick={handleDelete}>Delete</button>
               </div>
               {/* <Tasks /> */}
               <hr />
               <CreateTask createTask={createTask} />
            </div>
         </div>
      </div>
   )
}

export default Goals