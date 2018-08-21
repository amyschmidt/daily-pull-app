import './styles/css/main.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from 'scenes/App'
import registerServiceWorker from './registerServiceWorker'
import 'bootstrap/dist/css/bootstrap.min.css'

const el = document.getElementById('react-root')

const start = () => {
  el &&
    ReactDOM.render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
      el,
    )
}

start()
registerServiceWorker()
