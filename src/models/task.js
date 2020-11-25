const URL = "http://localhost:4000"



export default class TaskModel {
  static all = () => {
    return fetch(`${URL}/tasks`).then(res => res.json())
  }


  static create(taskData) {
    return fetch(`${URL}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(taskData)
    }).then(res => res.json())
  }


  static update = async (task) => {
    
    const res = await fetch(`${URL}/tasks/${task.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(task)
    })
    return res.json()
  }

  static delete = (taskId) => {
    return fetch(`${URL}/tasks/${taskId}`, {
      method: "DELETE",
    })
      .then(res => res.json())
  }

}