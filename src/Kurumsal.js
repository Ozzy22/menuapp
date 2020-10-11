import React, { Component } from 'react';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
  Card,
  CardBody, Nav, NavItem, NavLink
} from 'reactstrap';
import './App.css';

//import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Container className="App1">
        <h3><b>Üye Girişi</b></h3>
        <Card className="card1"> 
            <CardBody>  
        <Form  className="form1">
           
          <Col>
            <FormGroup>
                
              <Label><b> Email</b></Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="myemail@email.com"
              />
            </FormGroup>
          </Col>
          
          <Col>
            <FormGroup>
              <Label for="examplePassword"><b>Şifre</b> </Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="********"
              />
            </FormGroup>
          <div> 
          <Button color="success"  ><b>Giriş Yap</b></Button></div>
         
        <Col>  <br></br>
           Üye değil misiniz? Hemen Buraya Tıklayarak üye olabilirsiniz.
        </Col>
        <Nav> 
          <NavItem>
            
         
        <NavLink href="/newaccount">
        <Button color="primary"><b>Üye ol</b></Button>
        </NavLink> 
         </NavItem>
        </Nav> </Col>
        </Form> 
        </CardBody>
        </Card>
      </Container>
    );
  }
}

export default App;