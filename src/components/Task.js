import React from 'react'
import UpdateTask from './UpdateTask'

const Task = (props) => {
   return (
      <div className="task-form">

         <p className="card-title">
            {props.task.title}
         </p>
         <button
            className="btn btn-outline-info btn-sm goals-button"
            data-toggle="modal"
            data-target={`#editModal${props.task.id}`}
         >Edit</button>
         <UpdateTask
            task={props.task}
            fetchTasks={props.fetchTasks}
         />
      </div>
   )
}

export default Task
