import React from 'react'
import Task from './Task'

const TaskList = (props) => {
   let tasks = props.tasks.map((task, i) => {
      return <Task
         key={i}
         task={task}
         currentUser={props.currentUser}
      // deleteTask={props.deleteTask} 
      // updateTask={props.updateTask}
      />
   })

   console.log('line15,tasklist',tasks)


   return (


      
      <>
      <p className="task-form">
       
         <button className="btn btn-outline-info btn-sm" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
           See your tasks
         </button>
         </p>
         <div className="collapse" id="collapseExample">
         <div >
            {tasks}
            <p>Hard coded task in TaskList!</p>
            <Task />
         </div>
      </div>
      </>







   )
}

export default TaskList