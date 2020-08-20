import React from 'react'
import { Home, Quiz } from './containers'
import { Players, ResultsForm } from './components'
import { Switch, Route } from "react-router"
import './App.css'


class App extends React.Component {
  
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/questions" component={ Quiz } />
          <Route path="/players" component={ Players } />
          <Route path="/results" component= { ResultsForm }/>
        </Switch>
      </div>
    )
  }
}

export default App
