import React, { Component } from 'react';
import { connect } from "react-redux";
import ReactDOM from 'react-dom'
import AnswersForm from "./AnswersForm"

class Questions extends Component {
    renderQuestion = () => {
        let array = this.props.question.incorrect_answers
        array.push(this.props.question.correct_answer)
        this.shuffleAnswers(array)

        return (
            <>
            <h3>{this.props.question.question}</h3>
            {this.props.question.incorrect_answers.map((item1, idx) => (
                <div key={idx}>
                    <h4>{item1}</h4>
                </div>
            ))}
            {Array(this.props.players).fill(<div><h4>Player {}</h4> <AnswersForm /></div>)}
            </>
        )
    }

    
    shuffleAnswers = (array) => {
        let m = array.length, t, i;
        while (m){
            i = Math.floor(Math.random() * m--);
            t = array[m];
            array[m] = array[i];
            array[i] = t;
        }
        return array;
    }

    render(){
        return (
            <div>
                {this.props.question ?  this.renderQuestion() : "you've made a mess of this"}
            </div>
        ) 
    }
}


const mSTP = (state) => ({
    players: Number(state.quizSettings.players)
})

export default connect(mSTP)(Questions);



































