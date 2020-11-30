import React, { Component } from 'react'

class CreateTask extends Component {

   state = {
      task: ''
   }

   onInputChange = (event) => {
      this.setState({
         task: event.target.value
      })
   }

   onFormSubmit = (event) => {
      event.preventDefault()
      let task = this.state.task
      this.props.createTask(task)
      this.setState({
         task: ''
      })
   }
 
   render() {
      return (

         <div className="create-task">
            <form onSubmit={this.onFormSubmit} id="taskForm">
               <div className="col-12 mx-auto ">
                  <div className="input-group  mb-3">
                     <input
                        onChange={this.onInputChange}
                        type="text"
                        placeholder="Add a new task!"
                        value={this.state.task}
                        className="form-control"
                        aria-describedby="button-addon2-sm"
                        required
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

export default CreateTask