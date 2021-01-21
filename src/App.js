import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './containers/HomePage';
import LoginPage from './containers/LoginPage';
import RegisterPage from './containers/RegisterPage';
import PrivateRoute from './components/PrivateRoute';

import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <PrivateRoute path='/' exact component={ HomePage }></PrivateRoute>
        <Route path='/login' component={ LoginPage }></Route>
        <Route path='/signup' component={ RegisterPage }></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
