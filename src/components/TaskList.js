import React, { useState, useEffect } from 'react'
import Task from './Task'
import TaskModel from '../models/task'
import CreateTask from './CreateTask'
import GoalList from './GoalList'

const TaskList = (props) => {
   const [taskList, setTaskList] = useState([])

  
   
   const fetchTasks = async () => {
      const response = await TaskModel.all()
      const tasks = response.tasks
      setTaskList(tasks);
      console.log(tasks[0])
   }

   // const createTask = async (task) => {
   //    const newTask = {
   //       title: task,
   //       goalId: props.goal.id,
   //       completed: false
   //    }
   //    await TaskModel.create(newTask)
   //       .then((res) => {
   //          console.log('line 43 tasklist.js', res.task) // gets the new task created
   //          TaskModel.all(res.task)
   //          tasks.push(res.task)
   //          fetchTasks()
   //       })

   // }

   // let allTasks = tasks.map((task, i) => {
   //    // if (props.goal.id === res.tasks.goalId) {
      
   //       return <Task
   //       key={i}
   //       task={task}
   //       fetchTasks={fetchTasks}
   //       // completed={completedTask}
   //    />
   //    // }
   // })


   // const completedTask = (id) =>{
   //    setTasks(props.tasks.map(checked =>{
   //       if(checked.id === id){
   //          checked.completed = !checked.completed
   //       }
   //       return checked
   //    }))
   // }

   // first pass at this function:
   // const getTasks = async () => {
   //    TaskModel.all(currentUser.id)
   //    const res = await fetch(`URL/${currentUser}`)
   //    const taskArray = await res.json()
   //    setTasks(taskArray)
   // }
   useEffect(() => {
      fetchTasks()
   }, [])

   return (
      <div>
         {taskList.map(task =>{
               if(task.id === props.goal.id) {
                  return <p key={task.id}>{task.title}</p>
               }
         })}
      </div>
   )
}

export default TaskList

