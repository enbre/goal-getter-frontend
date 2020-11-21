import React, { useState } from 'react'

const UpdateGoals = (props) => {
   return (

      <div className="modal fade" id={`editModal${props.id}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
         <div className="modal-dialog" role="document">
            <div className="modal-content">
               <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Edit your goal!</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                     <span aria-hidden="true">&times;</span>
                  </button>
               </div>
               <div className="modal-body">
                  <input type="text" className="form-control" style={{margin: "10px"}} placeholder={props.title}></input>
                  {/* <input placeholder='edit your goal'></input> */}
                  <button type="button" className="btn btn-outline-info btn-sm" data-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-outline-info btn-sm">Save changes</button>
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
