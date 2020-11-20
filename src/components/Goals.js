import React, { useState, useEffect } from "react"
import Tasks from './Tasks'
// const URL = "http://localhost:4000"

const Goals = (props) => {


   // const [tasks, setTasks] = useState([])


   // async function getTasks(){
   //    const res = await fetch(`URL/${currrentUser}`)

   //    const taskArray = await res.json()

   //    setTasks(taskArray)
   // }

   // useEffect(()=>{
   //    getTasks()
   // },[])


   return (
      <div >
         <div class="card border-dark w-40" style={{width: "18rem"}}>
            <div class="card-body">
               <h3 class="card-title">{props.goal.title}</h3>
               <p class="card-text">Add a new task</p>
               <a href="#" class="btn btn-outline-info btn-sm">Add Task</a>
            </div>
         </div>


     
         {/* <Tasks /> */}

      </div>
   )
}

export default Goals