import React, { Component } from 'react';
import CreateGoals from '../components/CreateGoals';
import GoalList from '../components/GoalList';
import GoalModel from '../models/goal'

class Profile extends Component {
  state = {
    goals: []
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = () => {
    // gets 'all' function from models/Todo to render initial empty todo list
    GoalModel.all().then((res) => {
      // console.log(res)
      this.setState({
        goals: res.goals
      });
    });
  };

  createGoal = (goal) => {
    console.log('line 26 profile.js',goal)
    let newGoal = {
      userId: this.props.currentUser,
      // userName: this.props.currentUserName,
      title: goal,
      completed: false
    }
    GoalModel.create(newGoal).then((res) => {
      // gets current state of Goal array
      let goal = this.state.goals
      console.log(res)
      // adds new Goal object to goal state
      goal.push(res.goal)
      // and sets it to state, which re-renders it
      this.setState({ goals: goal })
    })
  }

  // this function is from the todos lab. currently not being used, but it is functional if we need to copy it for tasks.
  // deleteGoal = (goal) => {
  //   GoalModel.delete(goal).then((res) => {
  //     let goals = this.state.goals.filter((goal) => {
  //       return goal.id !== res.data.id
  //     })
  //     this.setState({ goals })
  //   })
  // }

  updateGoal = goal => {
    const isUpdatedGoal = g => {
      return g.id === goal.id
    }

    GoalModel.update(goal).then((res) => {
      let goals = this.state.goals
      goals.find(isUpdatedGoal).body = goal.body
      this.setState({ goals })
    })
  }


  render() {

    return (
      <div className='container'>
        <h3>  {this.props.currentUserName}'s Goals </h3>
        <CreateGoals
          createGoal={this.createGoal}
        />
        <GoalList
          goals={this.state.goals}
          updateGoal={this.updateGoal}
        // deleteGoal={this.deleteGoal}
        />
      </div>
    )
  }


};


export default Profile