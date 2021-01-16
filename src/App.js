import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './containers/HomePage';
import LoginPage from './containers/LoginPage';
import RegisterPage from './containers/RegisterPage';

import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path='/' exact component={ HomePage }></Route>
        <Route path='/login' component={ LoginPage }></Route>
        <Route path='/signup' component={ RegisterPage }></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
