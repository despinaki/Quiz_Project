import React, { Component } from 'react';

class Questions extends Component {
    checkProps = () => {
        console.log(this.props)
        let array = this.props.question.incorrect_answers
        array.push(this.props.question.correct_answer)
        console.log(array)
        this.shuffleAnswers(array)
        console.log(array)
        return (
            <>
            <h3>{this.props.question.question}</h3>
            {/* <h4>{this.props.question.correct_answer} </h4>  */}
            {this.props.question.incorrect_answers.map((item1, idx) => (
                <div key={idx}>
                    <h4>{item1}</h4>
                </div>
            ))}
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
            {this.props.question ?  this.checkProps() : "you've made a mess of this"}
            </div>
        ) 
    }
}

export default Questions;








