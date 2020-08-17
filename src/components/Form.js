import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addSettings } from '../actions/Actions'

class Form extends Component {
    state = {quizSettings: {}}

    handleInput = e => {
        let settings = this.state.quizSettings
        settings[e.target.name] = e.target.value
        this.setState({settings})
    }

    handleSubmit = e => {
        e.preventDefault();
        e.target.reset();
        this.props.add(this.state.quizSettings)
    }
    
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>   
                <label>Select No. of Players: </label>
                <select name="players" onChange={this.handleInput}>
                   
                    <option value="" selected disabled>Please select an option</option>
                    <option value = "1"> 1 </option>
                    <option value = "2"> 2 </option>
                    <option value = "3"> 3 </option>
                    <option value = "4"> 4 </option>
                </select><br></br>

                <label>Number of Questions: </label>
                <input type="number" min="1" max="50" onChange={this.handleInput} name="questions"/> <br></br>
                
                <label>Select Difficulty: </label>
                <select name="difficulty" onChange={this.handleInput}>
                   
                    <option value = "" selected disabled>Please select an option</option> 
                    <option value = "Easy"> Easy </option>
                    <option value = "Medium"> Medium </option>
                    <option value = "Difficult"> Difficult </option>
                </select><br></br>

                <label>Select Category: </label>
                <select name="category" onChange={this.handleInput} >
                    
                    <option value="" selected disabled>Please select an option</option>
                    <option value = "General Knowledge"> General Knowledge </option>
                    <option value = "Sports"> Sports </option>
                    <option value = "Celebrities"> Celebrities </option>
                </select><br></br>

                <input type="submit"></input>
                </form>
            </div>
        )
    }

}

const mDTP = dispatch => ({
    add: (item) => dispatch(addSettings(item))
})

export default connect(null, mDTP)(Form);
