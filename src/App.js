import { Switch, Route } from 'react-router-dom'
import GlobalStyles from 'components/GlobalStyles'
import Home from 'pages/Home'
import Error from 'pages/Error'
import SearchResults from 'pages/SearchResults'

export default function App () {
  return (
    <div>
      <GlobalStyles />
      <Switch>
        <Route path={['/feed/:id', '/']} component={Home} exact />
        <Route path='/search/:id' component={SearchResults} />
        <Route path='*' component={Error} />
      </Switch>
    </div>
  )
}
