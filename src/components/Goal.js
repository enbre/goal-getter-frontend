import React, { useState, useEffect } from "react"
import TaskList from './TaskList'
import GoalModel from '../models/goal'
import TaskModel from '../models/task'
import UpdateGoal from './UpdateGoal'
import CreateTask from "./CreateTask"


const Goal = (props) => {

   const [tasks, setTasks] = useState([])

   const currentUser = props.currentUser

   const getTasks = async () => {
      TaskModel.all(currentUser.id)
      const res = await fetch(`URL/${currentUser}`)
      const taskArray = await res.json()
      setTasks(taskArray)
   }

   // useEffect(() => {
   //    getTasks()
   // }, [])

   const createTask = (task) => {
      let newTask = {

         title: task,
         goalId: props.goal.id,
         completed: false
      }
      TaskModel.create(newTask).then((res) => {
         // gets current state of task array
         console.log('line 38 goal.js', res)
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
               {/* <TaskList tasks={tasks}/> */}
               <hr />
               {/* <CreateTask createTask={createTask} /> */}
            </div>
         </div>
      </div>
   )
}

export default Goal