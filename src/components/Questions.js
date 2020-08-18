import React, { Component } from 'react';
import { connect } from "react-redux";
import ReactDOM from 'react-dom'


class Questions extends Component {

    state= {
        disabled: false
    }

    renderQuestion = () => {
        let array = this.props.question.incorrect_answers
        array.push(this.props.question.correct_answer)
        this.shuffleAnswers(array)
        return (
            <>
            <h3>{this.props.question.question}</h3>
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
        console.log(this.props.question.correct_answer)
        console.log(e.target.value == this.props.question.correct_answer ? true : false)
        console.log(e.target.name)
        this.setState({disabled: true})
    }
    
    renderAnswersForm = (players) => {
        return players.map((item, index) => (
            <div key={index}>
                {item}
                <div className={`btn-group`} >
                    {this.props.question.incorrect_answers.map((item1, idx) => (
                        <button disabled={this.state.disabled} onClick={this.click} key={idx} name={item} value={item1}>{item1}</button>
                    ))}
                </div>
            </div>
        ))
    }
    
    render() {
        return (
            <div>
                {this.props.question ?  this.renderQuestion() : "you've made a mess of this"}
            </div>
        ) 
    }
}

const mSTP = state => ({
       players: state.playerNames
})

export default connect(mSTP)(Questions);