import React from "react";
import { Provider } from 'react-redux';
import store from './redux/store'
import "./App.css";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import RegisterForm from './components/users/userRegisterContainer'


function App() {
  return (
    <Provider store = { store }>
    <div className="wrapper">
      <Container className="p-3">
        <Jumbotron>
          <h1 className="header">Book My Movie</h1>
          <RegisterForm />
        </Jumbotron>
      </Container>
    </div>
    </Provider>
  );
}

export default App;
