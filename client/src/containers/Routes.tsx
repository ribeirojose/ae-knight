import * as React from 'react'
import { Switch } from 'react-router-dom'

import { PublicRoute } from './PublicRoute'
import { routePaths } from './route-paths'
import Chess from './chess/Chess'

const Routes = () => {
  return (
    <Switch>
      <PublicRoute exact path={routePaths.root} component={Chess} />
    </Switch>
  )
}

export { Routes }
