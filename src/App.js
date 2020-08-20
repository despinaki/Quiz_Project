import React from 'react'
import { Home, Quiz } from './containers'
// ./containers imports look great, why don't ./components get the same treatment?
import Players from './components/Players'
import ResultsForm from './components/ResultsForm'
import { Switch, Route } from "react-router"
import './App.css'


class App extends React.Component {
  // Lovely, nice and tidy
  // Why is this a class component though?

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
