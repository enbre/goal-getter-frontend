import React, { useState } from 'react'
import TaskModel from '../models/task'

const UpdateTask = ({task, fetchTasks}) => {
   const [taskTitle, setTaskTitle] = useState(task.title)

      const handleSubmit = (event) => {
        
      TaskModel.update({
         ...task, 
         title: taskTitle
      })
      fetchTasks()
   }

   return (
    <div className="modal fade" id={`editModal${task.id}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
         <div className="modal-dialog" role="document">
            <div className="modal-content">
               <div className="modal-header">
                  <h5 className="modal-title" >Edit your task!</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                     <span aria-hidden="true">&times;</span>
                  </button>
               </div>
               <div className="modal-body">
                  <form 
                  onSubmit={handleSubmit}
                  >
                     <input
                        type="text"
                        className="form-control"
                        style={{ margin: "10px" }}
                        value={taskTitle}
                        onChange={e => setTaskTitle(e.target.value)}
                     >
                     </input>
                     <button 
                        type="button" 
                        className="btn btn-outline-info btn-sm" 
                        data-dismiss="modal"
                     >Close</button>
                     <button
                        type="submit"
                        className="btn btn-outline-info btn-sm"
                        data-submit="modal"
                     >Save changes
                     </button>
                  </form>
               </div>
            </div>
         </div>
      </div>
   )

}

export default UpdateTask
