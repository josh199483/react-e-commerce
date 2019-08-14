import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import Homepage from './pages/Homepage'
import Shop from './pages/Shop'
import SignInSignUp from './pages/SignInSignUp'
import Header from './components/Header'
import { auth } from './firebase/firebase.utils'

class App extends Component {
  state = {
    currentUser: null
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
      console.log(user)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        {/* Switch when find the matching route then stop finding */}
        <Switch>
          {/* exact=true only render exactly the right component */}
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={Shop} />
          <Route path='/signin' component={SignInSignUp} />
        </Switch>
      </div>
    )
  }
}

export default App;
