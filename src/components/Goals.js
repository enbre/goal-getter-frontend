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


   return(
      <div>
         <h2>This is goal.js</h2>
         <Tasks />

      </div>
   )
}

export default Goals