import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import './ResultsForm.css';

class ResultsForm extends Component {
    state = { playerScores: {} }    

    displayScore() {
        let players = this.props.players;
        let answers = this.props.answers;

        // this is a lot of nesting! Could we be increasing the scores as users select their answers?
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

        let sortable = [];
        for (const player in this.state.playerScores) {
            sortable.push([player, this.state.playerScores[player]])
        }
        sortable.sort(((a, b) => b[1]-a[1]))

        return (
            <> 
            {sortable.map((item, index) => {
              
                if (index == 0) {
                    
                    return (
                        <p className="results" key={index}>{`👑 ${item[0]}:  ${item[1]} pts!`}</p>
                    )
                } else {
                    return (
                        <p className="results" key={index}>{index + 1} {`. ${item[0]}: ${item[1]} pts`}</p>
                    )
                }


                
            })}
            </>
        )
    }

    goToHome = e => {
        this.props.history.push("./")
    }

    render() {
        return (
            <div>  
                <h1>And the winner is...</h1>            
                {this.props.answers ? this.displayScore() : "Answers are not here"}
                <input type="submit" style={{paddingTop: "4px",paddingLeft: "0.75%"}} className = "button" id="results-submit" value="Play Again" onClick={this.goToHome}/>
            </div>
        )
    }
}

const mSTP = state => ({
    answers: state.playerAnswers,
    questionNumber: state.quizSettings.questions,
    players: state.playerNames
})

export default withRouter(connect(mSTP)(ResultsForm));