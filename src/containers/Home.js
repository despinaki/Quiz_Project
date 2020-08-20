import React, {Component} from 'react'
import Form from "../components/Form"
import './Homepage.css'

class Home extends Component{
    // why is this a class component?
    render(){
        return (
            <div>
                <h1>QuizApp</h1>
                <Form/>
            </div>
        )
    }
}

export default Home;
