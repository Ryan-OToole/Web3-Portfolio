import web3 from './web3.png';
import './App.css';
import { ethers } from "ethers";
import { useState } from "react";
import faucetABI from './faucet';
import LoadingIndicator from './LoadingIndicator/index.js';

function App() {

  const [address, setAddress] = useState(null);
  const [loading, setLoading] = useState(false);
  const CONTRACT_ADDRESS = '0xDFdA80DcCD035b6d29e82515e2385FE51Fd6f5B8';

  const handleAddress = (event) => {
    // we already know who message sender is? functionality to send to other wallet? i guess...
    setAddress(event.target.value); 
  }

  const requestFunds = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const connectedContract = new ethers.Contract(CONTRACT_ADDRESS, faucetABI, signer);
        setAddress(null);
        await connectedContract.withdraw();
        setLoading(true);
        connectedContract.on("LogSender", (sender, msgsender) => {
          setLoading(false);
          console.log('sender', sender);
          console.log('msgsender', msgsender);
          alert(`Your funds are on their way. Once the block is mined (about 1 minute) you can view the transaction here https://goerli.etherscan.io/address/${sender}'`);
        })
    }} catch (error) {
        console.log('error:', error);
      }
  }
  
  
  return (
    <div className="App">
      <div className="faucet">
        <div className="sub-text">Goerli Faucet </div>
        <div className="sub-text">Enter Your MetaMask address</div>
        <input className="faucet-input" onChange={handleAddress}></input>
        <br />
        <br />
        <button className="faucet-button" onClick={requestFunds}>Request .1 GoerliETH</button>
        {loading && (
          <LoadingIndicator />
        )}
      </div>
      <header className="App-header">
        <img src={web3} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://darkwing-nights-a-blockchain-production.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Play a Web3 game
        </a>
        <a
          className="App-link"
          href="https://mint-random-nft.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mint an NFT
        </a>
        <a
          className="App-link"
          href="https://test.getmetag.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Explore MeTag- Web3 Hackathon Project Winner 2X
        </a>
        <a
          className="App-link"
          href="https://www.getmetag.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Checkout MeTag website
        </a>
        
      </header>
    </div>
  );
}

export default App;
