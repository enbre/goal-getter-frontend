import React, { useState, useEffect } from 'react'

const Task = (props) => {


   // console.log('line6, task.js', props)



   return (
      <div className="task-form">
        
         <input type="checkbox" className="form-check-input" id="dropdownCheck2"></input>
         {/* <h6 className="card-title">{props.task.title}</h6> */}
         <h5 className="card-title">Another hard coded task in Task.js!</h5>
      </div>
   )
}

export default Task
