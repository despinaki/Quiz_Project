import React, { Component } from 'react';
import { connect } from "react-redux";
import ReactDOM from 'react-dom'
import AnswersForm from "./AnswersForm"

class Questions extends Component {
    renderQuestion = () => {
        console.log(this.props)
        let array = this.props.question.incorrect_answers
        array.push(this.props.question.correct_answer)
        this.shuffleAnswers(array)
        console.log(typeof(this.props.players))
        return (
            <>
            <h3>{this.props.question.question}</h3>
            {this.props.question.incorrect_answers.map((item1, idx) => (
                <div key={idx}>
                    <h4>{item1}</h4>
                </div>
            ))}
            {Array(this.props.players).fill(<AnswersForm />)}
            {/* {this.renderAnswerForms} */}
            </>
        )
    }

    // showForm = () => {
    //     return (
    //         <AnswersForm/>
    //     )
    // }



    // renderAnswerForms = () => {
    //     for(let i=0; i < this.props.players; i++){
    //         React.createElement("h1",{id:"heading"}, "Hello World")
    //         ReactDOM.render(div,document.getElementById("root"))
            // this.showForm()
        // }
        // let i = 0;
        // while(i < this.props.players){
        //     (<AnswersForm/>)
        //     i++
        // }


    // }

    
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


const mSTP = (state, ownProps) => ({
    players: Number(state.quizSettings.players),
    // question: ownProps
})

export default connect(mSTP)(Questions);



































