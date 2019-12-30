import * as React from 'react'
import { Switch } from 'react-router-dom'

import { PublicRoute } from './PublicRoute'
import { Chess } from './chess/Chess'
import { routePaths } from './route-paths'

const Routes = () => {
  return (
    <Switch>
      <PublicRoute exact path={routePaths.root} component={Chess} />
    </Switch>
  )
}

export { Routes }
