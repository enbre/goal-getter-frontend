import React from 'react'
import Task from './Task'

const TaskList = (props) => {
   // let tasks = props.tasks.map((task, i) => {
   //    return <Task
   //       key={i}
   //       task={task}
   //       currentUser={props.currentUser}
   //    // deleteTask={props.deleteTask} 
   //    // updateTask={props.updateTask}
   //    />
   // })


   return (
      // <div className="d-flex container" style={{flexDirection: "row"}}>
      //    { tasks }

      // </div>

      
      <>
      <p className="task-form">
       
         <button class="btn btn-outline-info btn-sm" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
           See your tasks
         </button>
         </p>
         <div class="collapse" id="collapseExample">
         <div >
            <Task />
         </div>
      </div>
      </>







   )
}

export default TaskList