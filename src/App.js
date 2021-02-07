import React,{ useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './containers/HomePage';
import LoginPage from './containers/LoginPage';
import RegisterPage from './containers/RegisterPage';
import PrivateRoute from './components/PrivateRoute';

import { useDispatch, useSelector } from 'react-redux';
import { isLoggedInUser } from './actions';
import './App.css';


function App() {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if( !auth.authenticated ){
      dispatch(isLoggedInUser());
    }
  },[auth.authenticated, dispatch]);
  
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
