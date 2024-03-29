import React from 'react'
import { Switch, Route } from 'react-router'
import Header from 'components/Header'
import NotFoundPage from 'components/not-found-page'
import AboutPage from 'components/about-page'
import { auth, provider, firestore } from 'data/firebase'
import HowToPage from 'components/how-to-page';

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
    // auth.signInWithRedirect(provider);

    auth.signInWithPopup(provider).then(result => {
      const user = result.user
      this.setState({
        user,
      })
      firestore.collection("users").doc(user.email).set({
        displayName: user.displayName,
        email: user.email
      })
      .then(function() {
          console.log("Document written");
      })
      .catch(function(error) {
          console.error("Error adding document: ", error);
      });  
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
            <Route path="/:card/:direction" component={renderProps => {
              const Component = require('scenes/CardDetails').default
              return <Component {...renderProps} user={this.state.user} />
              }} />
            <Route path="/history" component={renderProps => {
              const Component = require('scenes/History').default
              return <Component {...renderProps} user={this.state.user} />
              }} />
            <Route path="/about" component={AboutPage} />
            <Route path="/how-to" component={HowToPage} />
            <Route path="/" component={renderProps => {
              const Component = require('scenes/LogCard').default
              return <Component {...renderProps} user={this.state.user} />
              }} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App