import React from 'react'
import UpdateTask from './UpdateTask'
import TaskModel from '../models/task'

const Task = (props) => {

   const handleDelete = (event) => {
      TaskModel.delete(props.task.id)
      props.fetchTasks()
   }

   return (
       <div className="task-form" style={{display: 'flex', justifyContent: 'space-between'}}>
         <div>
            <h6 className="card-title">{props.task.title}</h6>
         </div>
         <div>
            <button
               className="btn btn-outline-info btn-sm task-button"
               data-toggle="modal"
               data-target={`#editModal${props.task.id}`}
            >Edit</button>
            <UpdateTask
               task={props.task}
               fetchTasks={props.fetchTasks}
            />
            <button className="btn btn-outline-info btn-sm task-button" onClick={handleDelete}>Delete</button>
         </div>
      </div>
   )
}

export default Task
