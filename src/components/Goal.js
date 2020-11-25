import React, { useState, useEffect } from "react"
import TaskList from './TaskList'
import GoalModel from '../models/goal'
import TaskModel from '../models/task'
import UpdateGoal from './UpdateGoal'
import CreateTask from "./CreateTask"

// const URL = "http://localhost:4000"

const Goal = (props) => {

   const [tasks, setTasks] = useState([])

   const currentUser = props.currentUser

   async function getTasks() {
      TaskModel.all(currentUser.id)
      const res = await fetch(`URL/${currentUser}`)
      const taskArray = await res.json()
      setTasks(taskArray)
   }

   useEffect(() => {
      getTasks()
   }, [])

   const createTask = (task) => {
      let newTask = {

         title: task,
         goalId: props.goal.id,
         completed: false
      }
      console.log('line 54 profile.js', newTask)
      // debugger
      TaskModel.create(newTask).then((res) => {
         // gets current state of task array
         console.log('line 38 goal.js',res)
         // console.log(this.state)
         // debugger
         TaskModel.all(res)
         // let task = task
         // // adds new Goal object to goal state
         // tasks.push(res.task)
         // // and sets it to state, which re-renders it
         // setTasks({ tasks: task })
      })

   }
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

return (
   <div >
      <div className="card border-dark w-40" style={{ width: "30rem" }}>
         <div className="card-body">
            <div className="card-goal">
               <h4 className="card-title">{props.goal.title}</h4>
               <button className="btn btn-outline-info btn-sm goals-button" data-toggle="modal" data-target={`#editModal${props.goal.id}`}>Edit</button>
               <UpdateGoal
                  title={props.goal.title}
                  id={props.goal.id}
                  handleUpdate={props.handleUpdate} //from goal.js
                  updateGoal={props.updateGoal} // from profile.js
                  goal={props.goal}
                  history={props.history} />
               <button className="btn btn-outline-info btn-sm goals-button" onClick={handleDelete}>Delete</button>
            </div>
            <hr />
            <TaskList />
            <hr />
            <CreateTask createTask={createTask} />
         </div>
      </div>
   </div>
)
}

export default Goal