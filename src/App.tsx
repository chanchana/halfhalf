import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Search } from './pages'

const App = () => (
  <Router> 
    <Switch>
      <Route exact path="/search" component={Search} />
    </Switch>
  </Router>
)

export default App