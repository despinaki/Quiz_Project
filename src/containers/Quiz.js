import React, { Component } from 'react';
import { connect } from "react-redux"
import Questions from "../components/Questions"

class Quiz extends Component {
    renderQuestions = (results) => {
        return results.map((item, index) => (
            <div key={index}>
                <Questions question={item} />
            </div>
        ))
    }

    render(){
        return (
            <div>
                {this.props.results ? this.renderQuestions(this.props.results) : "there are not results"}
            </div>
        )
    }
}

const mSTP = state => ({
    results: state.quizQuestions.results
})

export default connect(mSTP)(Quiz);