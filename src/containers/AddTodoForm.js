import React, { Component } from 'react'
// WHEN USER FILLS FORM AND SUBMIT WE WANT TO FIRE ACTION TO UPDAGE OUT STORE
import { addToDo } from '../actions'
// CONNECT COMPONENT TO REACT STORE
import { connect } from 'react-redux'

class AddToDoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { todo: '' };
  }

  handleChange = (e) => {
    this.setState({ todo: e.target.value });
  }

  submitForm = (e) => {
    e.preventDefault()
    this.props.addToDo(this.state.todo)
    this.setState({ todo: '' });
  }

  render() {
    return (
      <section>
        <form onSubmit={this.submitForm}>
          <input
            value={this.state.todo}
            placeholder="Add A Todo"
            onChange={this.handleChange} />
          <button>Add Todo</button>
        </form>
      </section>
    )
  }
}

// mapDispatchToProps MUST FUNCTION THAT RETURN AN OBJECT
const mapDispatchToProps = dispatch => ({
  addToDo: text => dispatch( addToDo(text))
})

// CONNECT LETS COMPONENT TO ACCESS THE STORE 
// null - because no need access to the store in this case mapStateToProps
export default connect(null, mapDispatchToProps)(AddToDoForm)
