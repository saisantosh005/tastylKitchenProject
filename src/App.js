import {BrowserRouter, Switch, Redirect, Route} from 'react-router-dom'

import './App.css'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import Home from './components/HomeRoute/Home/Home'
import LoginRoute from './components/Authentication/LoginRoute/LoginRoute'
import NotFound from './components/NotFound/NotFound'
import Cart from './components/CartRoute/Cart/Cart'

const App = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={LoginRoute} />
        <ProtectedRoute exact path="/" component={Home} />
        <ProtectedRoute exact path="/cart" component={Cart} />
        <Route exact path="/not-found" component={NotFound} />
        <Redirect to="/not-found" />
      </Switch>
    </BrowserRouter>
  </div>
)

export default App
