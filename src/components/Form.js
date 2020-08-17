import React, { Component } from 'react'

class Form extends Component {


    render(){
        return(
            <div>
                <label>Select Difficulty: </label>
                <select>
                    <option value = "Easy"> Easy </option>
                    <option value = "Medium"> Medium </option>
                    <option value = "Difficult"> Difficult </option>
                </select>
            </div>
        )
    }

}

export default Form;
