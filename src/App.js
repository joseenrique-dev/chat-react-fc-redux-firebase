import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './containers/HomePage';
import LoginPage from './containers/LoginPage';
import RegisterPage from './containers/RegisterPage';
import PrivateRoute from './components/PrivateRoute';

import './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isLoggedInUser } from './actions';


function App() {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if( !auth.authenticated ){
      dispatch(isLoggedInUser());
    }
  }, [])
  
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
