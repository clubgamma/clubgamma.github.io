import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, BrowserRouter } from 'react-router-dom'

import './index.css'
import App from './containers/App/App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    <HashRouter basename="/">
      <App />
    </HashRouter>
    {/* </BrowserRouter> */}
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.unregister()
