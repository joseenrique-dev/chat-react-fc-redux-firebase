import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store';
import firebase from 'firebase';

window.store = store;
const firebaseConfig = {
  apiKey: "AIzaSyC_ANmFRBnlHukpMwHjH9BcAa2fW_f_bfQ",
  authDomain: "chatreactfcredux.firebaseapp.com",
  databaseURL: "https://chatreactfcredux-default-rtdb.firebaseio.com",
  projectId: "chatreactfcredux",
  storageBucket: "chatreactfcredux.appspot.com",
  messagingSenderId: "168223813386",
  appId: "1:168223813386:web:0574005d59d88d57c654f3",
  measurementId: "G-KYPPQBN430"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

window.store = store;
ReactDOM.render(
    <Provider store={ store } >
      <React.StrictMode>
          <App />
      </React.StrictMode>
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
