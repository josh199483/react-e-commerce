import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import Homepage from './pages/Homepage'
import Shop from './pages/Shop'
import SignInSignUp from './pages/SignInSignUp'
import Header from './components/Header'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'

class App extends Component {
  state = {
    currentUser: null
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
        console.log(this.state)
      }
      this.setState({ currentUser: userAuth })
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
