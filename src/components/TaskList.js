import React, { useState, useContext, useEffect } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import Task from './Task'
import TaskModel from '../models/task'
import CreateTask from './CreateTask'

const TaskList = (props) => {
   const { currentUser, currentUserName } = useContext(AuthContext)
   const [tasks, setTasks] = useState([])
   const goalTasks = []

   useEffect(() => {
      fetchTasks()
   }, [])

   const fetchTasks = async () => {
      const res = await TaskModel.all()
      setTasks(res.tasks)
   }

   const createTask = async (task) => {
      const newTask = {
         title: task,
         goalId: props.goal.id,
         completed: false
      }
      await TaskModel.create(newTask)
         .then((res) => {
            TaskModel.all(res.task)
            tasks.push(res.task)
            fetchTasks()
         })
   }
   
   let allTasks = tasks.map((task, i) => {
      if (props.goal.id === task.goalId) {
         return <Task
         key={i}
         task={task}
         fetchTasks={fetchTasks}
      />
      }
   })

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
            </div>
         </div>
         <hr />
         <CreateTask createTask={createTask} />
      </>
   )
}

export default TaskList