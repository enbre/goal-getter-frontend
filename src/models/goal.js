const URL = "http://localhost:4000"



export default class GoalModel {
  static all = () => {
    return fetch(`${URL}/goals`,{
      credentials: 'include'
    }
    ).then(res => res.json())
  }

  static create(goalData) { 
    return fetch(`${URL}/goals`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify(goalData)
    }).then(res => res.json())
  }

  static update = async (goal) => {
    
    const res = await fetch(`${URL}/goals/${goal.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: 'include',
      body: JSON.stringify(goal)
    }).then(res => res.json())
  }

  static delete = (goalId) => {
    return fetch(`${URL}/goals/${goalId}`, {
      method: "DELETE",
      credentials: 'include'
    })
      .then(res => res.json())
  }

}