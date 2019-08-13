import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import Homepage from './pages/Homepage'
import Shop from './pages/Shop'

function App() {
  return (
    <div className="App">
      {/* Switch when find the matching route then stop finding */}
      <Switch>
        {/* exact=true only render exactly the right component */}
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={Shop} />
      </Switch>
    </div>
  )
}

export default App;
