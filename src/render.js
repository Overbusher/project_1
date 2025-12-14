import ReactDOM from "react-dom/client";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

export let rerenderEntireTree = (state, addPost, addMessage) => {
    const root = ReactDOM.createRoot(document.getElementById('root'))

    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={addPost} addMessage={addMessage}/>
            </BrowserRouter>
        </React.StrictMode>
    );

}
