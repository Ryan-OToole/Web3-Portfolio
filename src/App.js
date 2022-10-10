import web3 from './web3.png';
import './App.css';
import { ethers } from "ethers";

function App() {
  
  
  return (
    <div className="App">
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
