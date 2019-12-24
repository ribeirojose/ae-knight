import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { setupAxios } from './api/setup-axios'
import { App } from './containers/app/App'
import * as serviceWorker from './serviceWorker'

setupAxios()


ReactDOM.render(
  <Router>
    <Route path="/" component={App} />
  </Router>,
  document.getElementById('root') as HTMLElement,
)

serviceWorker.unregister()
