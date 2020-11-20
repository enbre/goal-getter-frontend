import React,{Component} from 'react';
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
      console.log(res)
      this.setState({
        goals: res.goals
      });
    });
  };

  createGoal = (goal) => {
    // creates new Todo object
    console.log(goal)
    let newGoal = {
      userId: this.props.currentUser,
      title: goal,
      completed: false
    }
    // gets 'create' function from models/Todo to create new todo item, add it to the todos array (this.state), and re-render page
    GoalModel.create(newGoal).then((res) => {
      // gets current state of Todos array
      let goal = this.state.goals
      console.log(res)
      // adds new Todo object to todos state
      goal.push(res.goal)
      // and sets it to state, which re-renders it
      this.setState({ goals: goal })
    })
  }

  // After the todo delete response is sent back from the server, we find the corresponding entry for the todo in our todos state array and remove it.
  deleteGoal = (goal) => {
    // 'delete' function is defined in models/Todo and is passed to TodosContainer as props
    GoalModel.delete(goal).then((res) => {
      // search the todos array for the selected todo (passed as prop from Todo through Todos)
      let goals = this.state.goals.filter((goal) => {
        // i think this removes the selected todo from the todo array
        return goal.id !== res.data.id
      })
      // sets state and re-renders component
      this.setState({ goals })
    })
  }

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
    console.log('line 73',this.props)
    return (
      <div className='container'>
        <h3>Profile of user with ID {this.props.currentUser} </h3>
        <CreateGoals 
          createGoal={this.createGoal} 
        />
        <GoalList
          goals={this.state.goals}
          updateGoal={this.updateGoal}
          deleteGoal={this.deleteGoal}
        />
      </div>
    )
  }


};


export default Profile