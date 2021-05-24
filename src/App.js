import React, { Component } from 'react';
import logo from './logo.svg';
import logo2 from './logo-v2.svg';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo2} className="App-logo" alt="logo" />
          <h1>Hello World, I'm Miles!</h1>
          <h5>I'm currently under construction.</h5>
        </header>
      </div>
    );
  }
}

export default withAuthenticator(App, true);
