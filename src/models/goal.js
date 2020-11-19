const URL = "http://localhost:4000"



export default class GoalModel {
  static all = () => {
    return fetch(`${url}/profile`).then(res => res.json())
  }


  static create(goalData) {
    return fetch(`${URL}/profile/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(goalData)
    }).then(res => res.json())
  }


  static update = async (goalData) => {
    const res = await fetch (`${url}/profile/${goalData.id}`,{
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(gameData)
    }) 
    return res.json()
  }

  static delete = (goalId) => {
    return fetch (`${url}/profile/${goalId}`,{
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then(res => res.json())
  }
  
}