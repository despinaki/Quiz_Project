import React, { Component } from 'react';
import { connect } from "react-redux";

class AnswersForm extends Component {
    render() {

        return (
            <div>              
                <input type="radio" name="MultipleChoice" value ={this.props.question.question.incorrect_answers[0]} />
                <label for={this.props.question.question.incorrect_answers[0]}> {this.props.question.question.incorrect_answers[0]} </label>
                <input type="radio" name="MultipleChoice" value = {this.props.question.question.incorrect_answers[1]} />
                <label for={this.props.question.question.incorrect_answers[1]}> {this.props.question.question.incorrect_answers[1]} </label>
                <input type="radio" name="MultipleChoice" value = "C" />
                <label for="C"> C </label>
                <input type="radio" name="MultipleChoice" value = "D" />
                <label for="D"> D </label>

            </div>
        )
    }
}

 

export default AnswersForm;