import React, { Component} from 'react'

class CreateGoals extends Component {
  
   state = {
      goal: ''
   }

   onInputChange = (event) => {
      this.setState({
         goal: event.target.value
      })
   }

   onFormSubmit = (event) => {
      event.preventDefault()
      let goal = this.state.goal
      // 'createGoal' function is defined in Profile, and passed to this component as props
      this.props.createGoal(goal)
      this.setState({
         goal: ''
      })
   }

   render() {
      return (
         <div>
            {/* this form invokes the onFormSubmit function, which sets state for the new todo */}
            <form onSubmit={this.onFormSubmit} id="goalForm">
               <input
                  onChange={this.onInputChange}
                  type="text" id="newItemDescription"
                  placeholder="Add a new goal!"
                  value={this.state.goal}
               />
               <button type='submit' id="addGoal" className="btn">Add</button>
            </form>
         </div>
      )
   }
}

export default CreateGoals
