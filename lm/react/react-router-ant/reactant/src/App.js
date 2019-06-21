import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router,Route,Link } from "react-router-dom";
import Layout from "./page/layout.jsx";
// import './App.css';
import 'antd/dist/antd.css'
function Table(params) {

    return (
      <div>table</div>
    )
  
}
function Label(params) {

    return (
      <div>label</div>
    )
  
}

function App() {
  return (
    <Router>
      <Route extra path="/" component={Layout}>
        <Route path="/" component={Layout}></Route>
        <Route path="/table" component={Table}></Route>
        <Route path="/label" component={Label}></Route>
      </Route>
    </Router>

    );
}

export default App;
