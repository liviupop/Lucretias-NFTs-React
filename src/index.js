import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.module.css'
import Home from './views/home'
import Page from './views/page'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={Home} path="/" />
        <Route exact component={Page} path="/page" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
