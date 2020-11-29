import React, { Component } from 'react'

class CreateGoal extends Component {

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
      this.props.createGoal(goal)
      this.setState({
         goal: ''
      })
   } 

   render() {
      return (
         <div className="create-goals">
            <form onSubmit={this.onFormSubmit} id="goalForm">
               <div className="col-6 mx-auto ">
                  <div className="input-group  mb-3">
                     <input
                        onChange={this.onInputChange}
                        type="text"
                        placeholder="Add a new goal!"
                        value={this.state.goal}
                        className="form-control"
                        aria-describedby="button-addon2-sm"
                     />
                     <div className="input-group-append">
                        <button
                           className="btn btn-info btn-sm"
                           // type="button" 
                           type="submit"
                           id="button-addon2-sm"
                        >
                           <i className="fa fa-plus"></i>
                        </button>
                     </div>
                  </div>
               </div>
            </form>
         </div>
      )
   }
}

export default CreateGoal
