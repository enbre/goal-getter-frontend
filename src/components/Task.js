import React from 'react'
import UpdateTask from './UpdateTask'

const Task = (props) => {
   return (
      <div className="task-form">

         <p 
            className="card-title"
            style={{textDecoration: props.task.completed ? 'line-through' : 'none'}}
         >
            <input 
               type="checkbox" 
               className="form-check-input" 
               id="dropdownCheck2"
               // onClick={props.completedTask}
               // onChange={props.completedTask}
            />
            {props.task.title}
         </p>
         {/* <h5 className="card-title">Another hard coded task in Task.js!</h5> */}
         <button
            className="btn btn-outline-info btn-sm goals-button"
            data-toggle="modal"
            data-target={`#editModal${props.task.id}`}
            // data-target={`#editModalTest`}
         >Edit</button>
         <UpdateTask
            task={props.task}
            fetchTasks={props.fetchTasks}
         />
      </div>
   )
}

export default Task
