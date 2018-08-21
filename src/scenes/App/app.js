import React from 'react'
import { Switch, Route } from 'react-router'
import Header from 'components/Header'
import NotFoundPage from 'components/not-found-page'
import Login from 'scenes/Login'
import LogCard from 'scenes/LogCard'
import History from 'scenes/History'
import CardDetails from 'scenes/CardDetails'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="Content">
          <Switch>
            <Route path="/history/:card/:direction" component={CardDetails} />
            <Route path="/history" component={History} />
            <Route path="/login" component={Login} />
            <Route path="/" component={LogCard} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App