import React, { Component } from 'react'
import goalsModel from '../models/goals'

class Profile extends Component {
  state = {
    goals: []
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = () => {
    goalsModel.all().then(data => {
      this.setState({ goals: data.goals })
    })
  }

  render() {
    let goalsList = this.state.goals.map((goals, index) => {
      return (
          <h3 key={index}>{goals}</h3>
      )
    })

    return (
      <div>
        <h1>All goals</h1>
        { this.state.goals ? goalsList : 'Loading...' }
      </div>
    );
  }
}

export default Profile;
