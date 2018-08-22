import React from 'react'
import { Switch, Route } from 'react-router'
import Header from 'components/Header'
import NotFoundPage from 'components/not-found-page'
import LogCard from 'scenes/LogCard'
import History from 'scenes/History'
import CardDetails from 'scenes/CardDetails'
import firebase, { auth, provider } from 'data/firebase'

class App extends React.Component {
  state = {
    user: null,
  }
   componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ user })
      }
    })
  }
   handleLogin = () => {
    auth.signInWithPopup(provider).then(result => {
      const user = result.user
      this.setState({
        user,
      })
    })
  }
   handleLogout = () => {
    auth.signOut().then(() => {
      this.setState({ user: null })
    })
  }

  render() {
    return (
      <div>
        <Header
          loggedIn={this.state.user}
          chooseLogin={this.handleLogin}
          chooseLogout={this.handleLogout}
        />
        <div className="Content">
          <Switch>
            {/* <Route path="/history/:card/:direction" component={CardDetails} /> */}
            {/* <Route path="/history" component={History} /> */}
            <Route path="/" component={LogCard} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App