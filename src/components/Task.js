import React from 'react'
import UpdateTask from './UpdateTask'

const Task = (props) => {
   // console.log('line6, task.js', props)

   

   // console.log(allTasks)

   return (
      <div className="task-form">

         <input 
            // style={{textDecoration:this.props.task.completed ? "line-through": "none" }} 
            type="checkbox" 
            className="form-check-input" 
            id="dropdownCheck2"

            // onChange={props.completedTask}
         />
         <h6 className="card-title">{props.task.title}</h6>
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
