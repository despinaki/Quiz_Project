import React from 'react'
import { connect } from 'react-redux'
import { addPlayers } from '../actions/Actions'
import { withRouter } from 'react-router-dom'

class Players extends React.Component {

    state = {
        names: []
    }

    handleSubmit = (e) => {
        e.preventDefault()
        e.target.reset()
        this.props.add(this.state.names)
        // this.props.history.push("./questions")

    }

    handleChange = (e) => {
        this.state.names[e.target.name] = e.target.value
        this.setState({names}) 
    }
    
    createNameForms = () => {
        let players = Array(this.props.players).fill(`Player`)
        return (
            players.map((item, index) => (
                <div key={index}>
                <label>{item} {index + 1}</label>
                <input type ="text"  name={index} onChange={this.handleChange} placeholder="Enter your name"/>
                </div>
            ))
        )
    }


    render() {
        return(
            <form onSubmit={this.handleSubmit}>
            {this.createNameForms()}
            <input type="submit" value="Submit Players"/>
            </form>
        )
    }
}

const mSTP = (state) => ({
    players: Number(state.quizSettings.players)
})

const mDTP = dispatch => ({
    add: names => dispatch(addPlayers(names))
})

export default withRouter(connect(mSTP, mDTP)(Players));