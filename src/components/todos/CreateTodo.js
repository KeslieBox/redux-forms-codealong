import React, { Component } from 'react'
import {connect} from 'react-redux'

class CreateTodo extends Component {
  constructor() {
    super()
    this.state = {
      text: "",
    }
  }

  // step 7
  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  // step 9...step 1 and 10 is manageTodo where it checks for updates
  handleSubmit = (e) => {
    e.preventDefault()
    // this calls the addTodo action, which prompts the manageTodo reducer
    this.props.addTodo(this.state)
  }

  render() {
    return(
      <div>
        {/* step 8 */}
        <form onSubmit={e => this.handleSubmit(e)}>
          <p>
            <label>add todo</label>
            {/* w/ handleChange defined as arrow function, onChange callback: onChange={this.handleChange}. 
            No need for the onChange arrow function callback anymore! 
            To make controlled form, need to set value of input to this.state.text*/}
            {/* step 6 */}
            <input type='text' onChange={this.handleChange} value={this.state.text}/>
          </p>
          <input type='submit' />
        </form>
        {/* immediately renders what we are typing through input on the window*/}
        {this.state.text}
      </div>
    )
  }
}

// step 5 after the initial reducer returning initial state
const mapDispatchToProps = (dispatch) => {
  return {
    // this adds the dispatch action 'addTodo' as key in props and sets value as 
    // function that returns object w/ keys of type and payload
    // then this will be accessed through dispatch as any updates are made through the form
    // but nothing will happen to inside this function after the first dispatch
    addTodo: formData => dispatch({
      type: 'ADD_TODO',
      payload: formData
    }) 
  }
}

export default connect(null, mapDispatchToProps)(CreateTodo);
