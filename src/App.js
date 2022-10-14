import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import { Route, Switch } from 'react-router';
import ChatRoom from './Pages/ChatRoom';
import AuthRoute from './Components/lib/AuthRoute';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Home} />
        <AuthRoute exact path='/dashboard' component={Dashboard} />
        <AuthRoute exact path='/room/:id' component={ChatRoom} />
      </Switch>
    </div>
  );
}

export default App;
