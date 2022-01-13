//React is a js library for building interactive user interface, DOM is document object module defining structure of a document, represent documen as an object, to be manipulated through js
//react creates 2 copies (virtual dom) of the actual dom, changes in 1 of 2 copies compared to unaltered copy to recognize which component is changed, and then change the original (real) dom
//virtual dom = js obj, a representation of the real dom, react by Jordan Walke (at FB, 2011), React Fiber (2017), React 360 (2017)
//To use the ReactDOM (virtual dom) in any React web app we must first import ReactDOM from the react-dom package by using the following code snippet: This is one of the most important methods of ReactDOM. This function is used to render a single React Component or several Components wrapped together in a Component or a div element.
//ReactDOM is a package that provides DOM specific methods that can be used at the top level of a web app to enable an efficient way of managing DOM elements (components) of the web page. ReactDOM provides the developers with an API containing the methods 

//StrictMode is a React Developer Tool primarily used for highlighting possible problems in a web application. It activates additional deprecation checks and warnings for its child components.

    //rendering the whole app in it's entry point, Render is what is actually being called in the component, return is what is "rendered"/returned.
    
//In other words, metrics helps estimating the progress, quality and health of a software testing effort. The ideal example to understand metrics would be a weekly mileage of a car compared to its ideal mileage recommended by the manufacturer. "Software testing metrics - Improves the efficiency and effectiveness of a software testing process.".
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render (
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();