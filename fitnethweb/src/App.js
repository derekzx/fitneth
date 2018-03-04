import React, { Component } from 'react';
import logo from './newlogo.jpg';
import './App.css';
import {fitnethContract} from './EthereumSetup';

class App extends Component {

  //Constructor is called before react component is mounted
  constructor(props) {
    super(props);
    this.state = {
      contractInstance: fitnethContract,
      gymLocation: 'nowhere',
      rsf: '',
      currentLocation: '',
      winnings: 0,
      withdrawLimit: 20
    }
    this.submitGymLocation = this.submitGymLocation.bind (this);
    this.iAmHere = this.iAmHere.bind (this);
    this.checkGymLocation = this.checkGymLocation.bind (this);
    this.withdrawWinnings = this.withdrawWinnings.bind (this);
  }

  submitGymLocation() {
    //Just for PoC
    this.setState( {rsf: "37°52'06.7\"N 122°15'46.4\"W"})
    // this.setState (
    //   { contractState: rsf }
    // )
    // const { makePromise} = this.state.contractInstance;
    
    // const { contractState: newState } = this.state;
    
    this.state.contractInstance.makePromise (
      this.state.rsf,
      {
        gas: 300000,
        from: window.web3.eth.accounts[0],
        value: window.web3.toWei (20, 'ether')
      }, (err, result) => {
        console.log ('You have submitted your desired Gym Spot');
      }
    )
  }

  iAmHere() {
    this.setState( {currentLocation: "37°52'06.7\"N 122°15'46.4\"W"})
    this.state.contractInstance.makePromise (
      this.state.withdrawLimit,
      {
        gas: 300000,
        from: window.web3.eth.accounts[0],
        value: window.web3.toWei (0, 'ether')
      }, (err, result) => {
        console.log ('You have submitted your GPS location');
      }
    )
  }

  checkGymLocation() {
    let location = this.state.contractInstance.checkGymLocation;
    this.state.gymLocation = location;
    // const { checkGymLocation } = this.state.ContractInstance;
  }

  withdrawWinnings() {
    let winnings = this.state.contractInstance.withdraw (
      this.state.currentLocation,
      {
        gas: 300000,
        from: window.web3.eth.accounts[0],
        value: window.web3.toWei (0, 'ether')
      }, (err, result) => {
        console.log ('You have submitted your GPS location');
      }
    )
    this.state.winnings += 20;
  }
  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Fitneth</h1>
        </header>
        <body>
          <div>
            <br />
            <br />
            <button onClick = {this.submitGymLocation}> I will be going to RSF </button>
            <br />
            <br />
            <button onClick = {this.iAmHere}> I am at RSF </button>
            <br />
            <br />
            <button onClick = {this.checkGymLocation}> Where am I supposed to go? </button> 
            <h3> Your Gym is at {this.state.gymLocation} </h3>
            <br />
            <br />
            <button onClick = {this.withdrawWinnings}> Take Winnings (20 wei each click) </button>
            <h3> You have withdrawn {this.state.winnings} wei so far </h3>
          </div>
      </body>
      </div>
      


      
    );
  }
}

export default App;
