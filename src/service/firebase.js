import { StrictMode } from "react";
import reactDOM from "react-dom";
import { initializeApp } from "firebase/app";
import App from "../App";

const firebaseConfig = {
  apiKey: "AIzaSyCIHkipzP65nruK5gTaSGb81RFRjO6T7pA",
  authDomain: "shoe-shop-gomez.firebaseapp.com",
  projectId: "shoe-shop-gomez",
  storageBucket: "shoe-shop-gomez.appspot.com",
  messagingSenderId: "720649997513",
  appId: "1:720649997513:web:914c953a72f00e8c509118"
};

initializeApp(firebaseConfig);

const rootElement = document.getElementById("root");
reactDOM.render(
    <StrictMode>
        <App/>
    </StrictMode>,
    rootElement
);