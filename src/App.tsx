import React from 'react';
import { HashRouter, Route, Switch, useParams } from 'react-router-dom'
import { Search } from './pages'

const ShopDetail = () => {
  const { id }: any = useParams()

  return (
    <p>{id}</p>
  )
}

const App = () => (
  <HashRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path="/search" component={Search} />
      <Route exact path="/shop/:id" component={ShopDetail} />
    </Switch>
  </HashRouter>
)

export default App