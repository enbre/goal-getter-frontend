const URL = "http://localhost:4000"

export default class UserModel {
  static create(data) {
    return fetch(`${URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(res => res.json())
  }



  
  static login(credentials) {
    // remember to send authorization headers 
    return fetch(`${URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
      // auth headers - included with any request requiring authentication
      credentials: 'include'
    }).then(res => res.json())
  }

  static logout() {
    return fetch(`${URL}/auth/logout`, {
      method: "DELETE",
      credentials: 'include'
    })
  }
}