import React, { useState, useEffect } from 'react'
import Task from './Task'
import TaskModel from '../models/task'
import CreateTask from './CreateTask'

const TaskList = (props) => {
   const [taskList, setTaskList] = useState([])

   const fetchTasks = async () => {
      const response = await TaskModel.all()
      const task = await response.tasks
      setTaskList(task);
   }

   const createTask = async (tasks) => {
      const newTask = {
         title: tasks,
         goalId: props.goal.id,
         completed: false
      }
      await TaskModel.create(newTask)
         .then(() => {
            fetchTasks()
         })
   }

   useEffect(() => {
      fetchTasks()
   }, [])
   
   return (
      <>
      <p className="task-form">
         <button className="btn btn-outline-info btn-sm" type="button" data-toggle="collapse" data-target={`#collapse${props.goal.id}`} aria-expanded="false" aria-controls="collapseExample">
            See your tasks
         </button>
      </p>
      <div className="collapse" id={`collapse${props.goal.id}`}>
         <div>
            {taskList.map(task =>{
               if(task.goalId == props.goal.id) {
                  return (
                     <Task 
                        key={task.id} 
                        task={task}
                        fetchTasks={fetchTasks}
                     />
                  )
               }
            })}
         </div>
      </div>
      <hr />
      <CreateTask createTask={createTask} />
      </>
   )
}

export default TaskList

