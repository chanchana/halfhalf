import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom'
import { Search, Shop, Home } from './pages'

const App = () => (
  <HashRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path="/search" component={Search} />
      <Route exact path="/shop/:id" component={Shop} />
      <Route path="/" component={Home} />
    </Switch>
  </HashRouter>
)

export default App