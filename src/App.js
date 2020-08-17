import React from 'react'
import { Home, Quiz, Results } from './containers'
import { Switch, Route } from "react-router"


class App extends React.Component {
  
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/questions" component={ Quiz } />
          {/* <Route path="/results" component={ Results } /> */}
        </Switch>
      </div>
    )
  }
}

export default App
