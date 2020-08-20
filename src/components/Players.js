import React from 'react'
import { connect } from 'react-redux'
import { addPlayers } from '../actions/Actions'
import { withRouter } from 'react-router-dom'
import './Players.css'

class Players extends React.Component {

    state = {
        names: []
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.add(this.state.names)
        this.props.history.push("./questions")

    }

    handleChange = (e) => {
        this.state.names[e.target.name] = e.target.value
        // this.setState({names}) 
    }
    
    createNameForms = () => {
        let players = Array(this.props.players).fill(`Player`)
        return (
            players.map((item, index) => (
                <div key={index} className="players">
                <label>{item}{index + 1}</label>
                <input className="player-input" type ="text" name={index} onChange={this.handleChange} placeholder="Enter your name"/>
                </div>
            ))
        )
    }


    render() {
        return(
            <>
            <h1>
                Enter player names:
            </h1>
            <form id="playersForm" onSubmit={this.handleSubmit}>
            {this.createNameForms()}
            <input className="button" style={{paddingTop: "4px"}} type="submit" value="Play!"/>
            </form>
            </>
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