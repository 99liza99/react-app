import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import {Quote} from "./components/Quote/Quote";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <div className="container">
        <h1>Our Projects</h1>
        <App/>
        <Quote text={"Opportunities don't happen, you create them."} author={" — Chris Grosser"}></Quote>
    </div>
);
