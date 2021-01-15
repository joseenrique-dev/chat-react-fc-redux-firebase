import './App.css';
import { Router, Route } from 'react-router-dom'
import HomePage from './containers/HomePage';
import LoginPage from './containers/LoginPage';
import RegisterPage from './containers/RegisterPage';


function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/' component={ HomePage }></Route>
        <Route path='/login' component={ LoginPage }></Route>
        <Route path='/register' component={ RegisterPage }></Route>
      </Router>
    </div>
  );
}

export default App;
