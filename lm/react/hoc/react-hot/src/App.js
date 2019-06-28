import React from 'react';
// import logo from './logo.svg';
import './App.css';
import ShopCart from "./ShopCart";
import LoginStatus from "./LoginStatus";
// import WithLogin from "./WithLogin";
import ExampleMobx from "./exampleMobx/index";


// const WithLoginStatus = WithLogin(LoginStatus);
// const WithShopCart = WithLogin(ShopCart);
function App() {
  return (
   <React.Fragment>
      {/* <WithLoginStatus/>
      <WithShopCart/> */}
      <LoginStatus/>
      <ShopCart/>
      <ExampleMobx/>
   </React.Fragment>
  );
}

export default App;
