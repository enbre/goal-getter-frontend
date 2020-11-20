const URL = "http://localhost:4000"



export default class GoalModel {
  static all = () => {
    return fetch(`${URL}/goals`).then(res => res.json())
  }


  static create(goalData) {
    return fetch(`${URL}/goals`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(goalData)
    }).then(res => res.json())
  }


  static update = async (goalData) => {
    const res = await fetch (`${URL}/goals/${goalData.id}`,{
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(goalData)
    }) 
    return res.json()
  }

  static delete = (goalId) => {
    return fetch (`${URL}/goals/${goalId}`,{
      method: "DELETE",
      // headers: {
      //   "Content-Type": "application/json"
      // },
    })
      .then(res => res.json())
  }
  
}