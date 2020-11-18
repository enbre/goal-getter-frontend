const REACT_APP_API_URL = "http://localhost:4000"

export default class goalsModel {
    static create(data) {
        return fetch(`${REACT_APP_API_URL}/profile`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
        }).then(res => res.json())
    }

    // static update(goal) {
    //     // remember to send authorization headers
    //     return fetch(`${REACT_APP_API_URL}/profile`, {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(goal),
    //     // auth headers - included with any request requiring authentication
    //     goal: 'include'
    //     }).then(res => res.json())
    // }

    // static delete() {
    //     return fetch(`${REACT_APP_API_URL}/profile`, {
    //     method: "DELETE",
    //     goal: 'include'
    //     })
    // }
}