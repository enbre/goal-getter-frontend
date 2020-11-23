import React, { useState } from 'react'
import GoalModel from '../models/goal'

const UpdateGoals = (props) => {
   const [goal, setGoal] = useState(props.goal)
   // console.log('line6 updateGoals',goal)     // lists all goals passed from goals.js

   
   const handleSubmit = (event) => {
      // event.preventDefault()
      // props.updateGoal(goal)
      console.log('line 12 updateGoals.js', goal.title)

      // GoalModel.update(goal.id)
      console.log('line 15 updateGoals.js', goal)
      // debugger

      //    .then(
      //       data => {
      //       this.props.history.push(`/goals/${goal.id}`)
      // })
      // console.log('line 22 updateGoal.js', goal)
      // debugger
      // window.location = '/profile'
   }

   const handleChange = (event) => {
      // don't think we need this first section if it's only a text field we are updating
      // if (event.target.type !== 'text'){
      //    setGoal( {completed: !this.state.completed})
      // }

      // setGoal({[event.target.name]: event.target.value})
      setGoal({ [goal.title]: event.target.value})
   }


   return (
      // <div className="modal fade" id={`editModal${props.id}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal fade" id={`editModal${goal.id}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
         <div className="modal-dialog" role="document">
            <div className="modal-content">
               <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Edit your goal!</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                     <span aria-hidden="true">&times;</span>
                  </button>
               </div>
               <div className="modal-body">
                  {/* <form onSubmit={handleSubmit}> */}
                  <form >
                     <input
                        type="text"
                        className="form-control"
                        style={{ margin: "10px" }}
                        value={goal.title}
                        // placeholder={props.title} 
                        // onChange={handleChange}
                        onChange={e => setGoal(e.target.value)}
                     >

                     </input>
                     <button type="button" className="btn btn-outline-info btn-sm" data-dismiss="modal">Close</button>
                     {/* <button type="button" className="btn btn-outline-info btn-sm" onClick={props.handleUpdate}>Save changes</button> */}
                     <button
                        type="button"
                        className="btn btn-outline-info btn-sm"
                        onClick={props.handleUpdate}
                        // onClick={handleSubmit}
                        // onClick={() => handleSubmit(goal)}

                     >Save changes
                     </button>
                  </form>
               </div>
               {/* <div className="modal-footer">
                  <button type="button" className="btn btn-outline-info btn-sm" data-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-outline-info btn-sm">Save changes</button>
               </div> */}
            </div>
         </div>
      </div>
   )

}

export default UpdateGoals
