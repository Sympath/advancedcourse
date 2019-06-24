import React from 'react';
import {
  BrowserRouter as Router,
  Route, Link, Redirect
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
function Index() {
  return (
    <div>HOme</div>
  )
}
function About() {
  return (
    <div>About</div>
  )
}
function User() {
  return (
    <div>User</div>
  )
}
function Protect() {
  return (
    <div> Protect </div>
  )
}
function Login(params) {
  return (
    <div> Login </div>
  )
}
/**
 * 攔截器
 * @param {*} params 
 */
function PrivateRouter(props) {
  const {path,component : Component,state} = props
  return (
    <Route path={path} render={(props)=>{
      return false ? <Component></Component> : <Redirect to={
        {
          pathname: '/login'
          // state: { from: '/protect' }
        }
      }></Redirect>
    }}>

    </Route>
  )
}

function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/user">User</Link>
        </li>
        <li>
          <Link to="/protect">protect page</Link>
        </li>
      </ul>
      {
        true ?
          <Route path="/" exact component={Index}>
          </Route> : <div>no</div>
      }
      <Route path="/about" component={About}></Route>
      <Route path="/user" component={User}></Route>
      <Route path="/post" component={About}></Route>
      <Route path="/user" component={User}></Route>
      <PrivateRouter path="/protect"  component={Protect}></PrivateRouter>
      <Route path="/login" component={Login}></Route>
    </Router>
  );
}

export default App;
