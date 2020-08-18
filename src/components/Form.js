import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getQuestions } from '../actions/Actions';
import { withRouter } from 'react-router-dom';

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
        this.props.history.push("./players")
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
                <input type="number" min="1" max="20" onChange={this.handleInput} name="questions"/> <br></br>
                
                <label>Select Difficulty: </label>
                <select name="difficulty" onChange={this.handleInput}>
                   
                    <option value = "" selected disabled>Please select an option</option> 
                    <option value = "easy"> Easy </option>
                    <option value = "medium"> Medium </option>
                    <option value = "difficult"> Difficult </option>
                </select><br></br>

                <label>Select Category: </label>
                <select name="category" onChange={this.handleInput} >
                    
                    <option value="" selected disabled>Please select an option</option>
                    <option value = "9"> General Knowledge </option>
                    <option value = "21"> Sports </option>
                    <option value = "26"> Celebrities </option>
                </select><br></br>

                <input type="submit"></input>
                </form>
            </div>
        )
    }

}

const mDTP = dispatch => ({
    add: (item) => dispatch(getQuestions(item))
})

export default withRouter(connect(null, mDTP)(Form));
