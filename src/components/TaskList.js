import React, { useState, useContext, useEffect } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import Task from './Task'
import TaskModel from '../models/task'
import CreateTask from './CreateTask'

const TaskList = (props) => {
   const { currentUser, currentUserName } = useContext(AuthContext)
   // console.log('line 9',props)
   const [tasks, setTasks] = useState([])

   useEffect(() => {
      fetchTasks()
   }, [])

   // scoped globally so it can be rendered in return but defined within fetchTasks
   // let allTasks
   

   const fetchTasks = async () => {
      const res = await TaskModel.all()
      // we need some way of filtering so only the tasks connected to a specific goal are called:
      setTasks(res.tasks)
      console.log('line 25, tasklist', res.tasks) // gets an array of all tasks, regardless of goalId
      
      // if (props.goal.id === res.tasks.goalId) {
         // allTasks = tasks.map((task, i) => {
         //    return <Task
         //    key={i}
         //    task={task}
         //    fetchTasks={fetchTasks}
         // />
      // })
   // }
   }

   const createTask = async (task) => {
      const newTask = {
         title: task,
         goalId: props.goal.id,
         completed: false
      }
      await TaskModel.create(newTask)
         .then((res) => {
            console.log('line 43 tasklist.js', res.task) // gets the new task created
            TaskModel.all(res.task)
            tasks.push(res.task)
            fetchTasks()
         })

   }

   let allTasks = tasks.map((task, i) => {
      // if (props.goal.id === res.tasks.goalId) {
      
         return <Task
         key={i}
         task={task}
         fetchTasks={fetchTasks}
      />
      // }
   })


   const completedTask = (id) =>{
      setTasks(props.task.completed)
   }

  

   // first pass at this function:
   // const getTasks = async () => {
   //    TaskModel.all(currentUser.id)
   //    const res = await fetch(`URL/${currentUser}`)
   //    const taskArray = await res.json()
   //    setTasks(taskArray)
   // }

   return (
      <>
         <p className="task-form">
            <button className="btn btn-outline-info btn-sm" type="button" data-toggle="collapse" data-target={`#collapse${props.goal.id}`} aria-expanded="false" aria-controls="collapseExample">
               See your tasks
         </button>
         </p>
         <div className="collapse" id={`collapse${props.goal.id}`}>
            <div >
               {allTasks}
               {/* <Task allTasks={allTasks}/> */}
            </div>
         </div>
         <hr />
         <CreateTask createTask={createTask} />
      </>







   )
}

export default TaskList