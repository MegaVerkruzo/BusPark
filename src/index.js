import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import firebase from 'firebase'

firebase.initializeApp({
    apiKey: "AIzaSyDbrrRYcZcFwuz2VVygeYYd9IPS-gno4JY",
    authDomain: "busproject-689ba.firebaseapp.com",
    projectId: "busproject-689ba",
    storageBucket: "busproject-689ba.appspot.com",
    messagingSenderId: "125300238601",
    appId: "1:125300238601:web:48d5b3eb6de3bf31bfcbd8",
    measurementId: "G-RNX4F55KHW"
})

ReactDOM.render(
    <BrowserRouter>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
