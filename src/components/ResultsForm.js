import React, { Component } from 'react';
import { connect } from "react-redux";

class ResultsForm extends Component {
    state = { playerScores: {} }
    // displayScore() {
    //     let questionNumber = this.props.questionNumber
    //     let correctAnswers = this.props.answers
    //     let score = correctAnswers.filter(answer => answer == true )
    //     return (
    //         <> 
    //         {`You scored ${score.length} out of ${questionNumber}!`}
    //         </>
    //     )
    // }

    displayScore() {
        // console.log(
        // this.props.players.forEach((item) => {
        //     this.props.answers.filter(answer => answer.player == item ? answer.answer : "")
        // }))
        let players = this.props.players;
        let questionNumber = this.props.questionNumber;
        let answers = this.props.answers;
        let score = 0;

        for (const player of players) {
            this.state.playerScores[player] = 0;
            for (const answer of answers) {
                if (answer.player == player) {
                    if (answer.answer == true ) {
                        this.state.playerScores[player]++;
                        console.log(`${player} score increase`)
                    }
                }
            }
        }
        return (
            <> 
            {this.props.players.map((item, index) => {
                return (
                    <p key={index}>{`${item} scored ${this.state.playerScores[item]}`}</p>
                )
            })}
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
    questionNumber: state.quizSettings.questions,
    players: state.playerNames
})

export default connect(mSTP)(ResultsForm);