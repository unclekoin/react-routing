import NavBar from '../components/nav-bar';
import { Route, Switch, Redirect } from 'react-router-dom';
import Dashboard from '../components/dashboard';
import Login from '../components/login';
import Posts from '../components/posts';
import Home from '../components/home';
import NotFound from '../components/not-found';

function App() {
  return (
    <div>
      <NavBar />
      <h1>React App</h1>
      <Switch>       
        <Route path="/login" component={Login} />
        <Route path="/posts/:postId?/:display?" component={Posts} />
        {/* Example. If you need to pass parameters  */}
        {/* props below pass hystory, location & match */}
        <Route path="/dashboard" render={(props) => {
          return true && <Dashboard isAdmin={false} {...props} />
        }} />
        {/* below "exact" not needed, but will not redirect */}
        <Route path="/" exact component={Home} />
        <Route path="/404" component={NotFound} />
        <Redirect form="admin" to="/dashboard" />
        <Redirect to="/404"/>
      </Switch>
    </div>
  );
}

export default App;
