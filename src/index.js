import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.module.css'
import Home from './views/home'
import Mintascene from './views/mintascene'
import Claimabackcover from './views/claimabackcover'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={Home} path="/" />
        <Route exact component={Mintascene} path="/mintascene" />
        <Route exact component={Claimabackcover} path="/claimabackcover" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
