import React, { Component } from 'react';
import { connect } from "react-redux";
import ReactDOM from 'react-dom'
import { addAnswer } from '../actions/Actions'

import './Questions.css'


class Questions extends Component {
    constructor(props){
        super(props)
        let answersArray = this.props.question.incorrect_answers
        answersArray.push(this.props.question.correct_answer)
        this.shuffleAnswers(answersArray)
        this.state = {answers: answersArray}
    }
  

    renderQuestion = () => {
        return (
            <>
            <h3 id="questions">{decodeURIComponent(this.props.question.question)}</h3>  
            {this.renderAnswersForm(this.props.players)}
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

    click = (e) => {
        let answer = (e.target.value == this.props.question.correct_answer ? true : false)
        this.setState({[e.target.name]: true})
        
        const info = {
            player: e.target.name,
            answer: answer
        }
        this.props.add(info)
    }
    
    renderAnswersForm = (players) => {
        return players.map((item, index) => (
            <div id="names" key={index}>
                {item}
                <div id="btn-group" >
                    {this.state.answers.map((item1, idx) => (
                        <button disabled={this.state[item]} id="btn" onClick={this.click} key={idx} name={item} value={item1}>{decodeURIComponent(item1)}</button>  
                    ))}
                </div>
            </div>
            
        ))
    }

    render() {
        return (
            <div>
                {this.props.question ? this.renderQuestion() : "you've made a mess of this"}
            </div>
        ) 
    }
}

const mSTP = state => ({
    players: state.playerNames
})

const mDTP = dispatch => ({
    add: (info) => dispatch(addAnswer(info))
})
export default connect(mSTP, mDTP)(Questions);