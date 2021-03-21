import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Error from './pages/Error'

export default function App () {
  return (
    <div>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='*' component={Error} />
      </Switch>
    </div>
  )
}
