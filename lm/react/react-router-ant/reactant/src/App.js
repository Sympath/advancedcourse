import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router,Route,Link } from "react-router-dom";
import Layout from "./page/layout.jsx";
// import './App.css';
import 'antd/dist/antd.css'



function App() {
  return (
    <Router>
      <Route extra path="/" component={Layout}>
        {/* <Route path="/" component={Layout}></Route> */}
        {/* <Route path="/table" component={Table}></Route> */}
        
      </Route>
    </Router>

    );
}

export default App;
