import React from "react";
import "./App.css";
import Navi from "./Navi";
import Kayanekran from "./Kayanekran";
import { Container } from "reactstrap";
import Tepe from "./Tepe";
import End from "./End";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./About";

import Kurumsal from  "./Kurumsal"
import number from "./number";
import newaccount from "./newaccount";



const Example = (props) => {
  return (
    <div> 
      <Container>
       
         <Tepe></Tepe>
        <Navi></Navi> 
        
    <Router> 
     <Switch>
          <Route  exact path="/" component={Kayanekran}/> 
          <Route   path="/about" component={About}/> 
          <Route   path="/kurumsal" component={Kurumsal}/> 
          <Route path="/number" component={number}/>
          <Route path="/newaccount" component={newaccount}/>
          </Switch> 
</Router>
<End></End>
</Container>
 </div>
  );
};

export default Example;
