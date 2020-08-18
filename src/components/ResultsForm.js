import React, { Component } from 'react';
import { connect } from "react-redux";

class ResultsForm extends Component {

    displayScore() {
        let questionNumber = this.props.questionNumber
        let correctAnswers = this.props.answers
        let score = correctAnswers.filter(answer => answer == true )
        return (
            <> 
            {`You scored ${score.length} out of ${questionNumber}!`}
            </>
        )
    }
    render() {
        return (
            <div>              
                {this.props.answers ? this.displayScore() : "Answers are not here"}
            </div>
        )
    }
}

const mSTP = state => ({
    answers: state.playerAnswers,
    questionNumber: state.quizSettings.questions
})

export default connect(mSTP)(ResultsForm);