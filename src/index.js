import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.module.css'
import Claimabackcover from './views/claimabackcover'
import Home from './views/home'
import Mintascene from './views/mintascene'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={Claimabackcover} path="/claimabackcover" />
        <Route exact component={Home} path="/" />
        <Route exact component={Mintascene} path="/mintascene" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
