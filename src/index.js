import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react'
import { initializeApp } from 'firebase/app';

initializeApp({
  apiKey: "AIzaSyCIHkipzP65nruK5gTaSGb81RFRjO6T7pA",
  authDomain: "shoe-shop-gomez.firebaseapp.com",
  projectId: "shoe-shop-gomez",
  storageBucket: "shoe-shop-gomez.appspot.com",
  messagingSenderId: "720649997513",
  appId: "1:720649997513:web:914c953a72f00e8c509118"
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
    <App />
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
