import {BrowserRouter, Switch, Redirect, Route} from 'react-router-dom'

import './App.css'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import Home from './components/HomeRoute/Home/Home'
import LoginRoute from './components/Authentication/LoginRoute/LoginRoute'
import NotFound from './components/NotFound/NotFound'

const App = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route to="/login" component={LoginRoute} />
        <ProtectedRoute to="/home" component={Home} />
        <ProtectedRoute to="/home" component={Home} />
        <ProtectedRoute to="/home" component={Home} />
        <ProtectedRoute to="/home" component={Home} />
        <ProtectedRoute to="/home" component={Home} />
        <Route to="/not-found" component={NotFound} />
        <Redirect to="/not-found" />>
      </Switch>
    </BrowserRouter>
  </div>
)

export default App
