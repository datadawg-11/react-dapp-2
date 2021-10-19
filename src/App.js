import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor (props) {
      super (props); 
      
      const MyContract = window.web3.eth.contract([
        {
          "constant": false,
          "inputs": [],
          "name": "kill",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "payable": true,
          "stateMutability": "payable",
          "type": "fallback"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "getSecret",
          "outputs": [
            {
              "name": "",
              "type": "string"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "you_awesome",
          "outputs": [
            {
              "name": "",
              "type": "string"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        }
      ]); 
      
      this.state = {
          ContractInstance: MyContract.at ('0xfBDE0CFdaD41E9bE92F7AF037c124F3662fE0346')
      }
  }

  render() {
    return (
      <div className="app">
        <header className="App-header">
          <img src={ logo } classname="App-logo" alt="logo" />
          <h1 className="App-title"> React & Ethereum Simple Application</h1>
        </header>
  
        <br />
        <br />
        <button onClick= {this.querySecret }> Query Smart Contract's Secret</button>
        <br />
        <br />
      </div>
    );
  }




}





// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }







export default App;
