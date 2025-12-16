import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom/client";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import store from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'))

let rerenderEntireTree = () => {


    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={store.getState()}
                     inputPost={store.inputPost.bind(store)}
                     addPost={store.addPost.bind(store)}
                     inputMessage={store.inputMessage.bind(store)}
                     addMessage={store.addMessage.bind(store)}
                />
            </BrowserRouter>
        </React.StrictMode>
    );

}

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
