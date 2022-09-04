// import { Provider } from '@self.id/framework'
import logo from './logo.png';
import './App.css';

//components
import Profile from "./components/Profile";

import {
  WagmiConfig,
  createClient,
  defaultChains,
  configureChains,
} from 'wagmi'

import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'

// import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
// import { InjectedConnector } from 'wagmi/connectors/injected'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'

const alchemyId = process.env.ALCHEMY_ID

// Configure chains & providers with the Alchemy provider.
// Two popular providers are Alchemy (alchemy.com) and Infura (infura.io)
const { chains, provider, webSocketProvider } = configureChains(defaultChains, [
  alchemyProvider({ alchemyId }),
  publicProvider(),
])

// Set up client
const client = createClient({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new WalletConnectConnector({
      chains,
      options: {
        qrcode: true,
      },
    }),
  ],
  provider,
  webSocketProvider,
})


function App() {

  return (

    <div className="App">
      <WagmiConfig client={client}>
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}

          <br />
          <h3>MotionwaresDAO.</h3>

          <p>Communinity</p>
          <a className="App-link"
            href="https://research.softpreneur.xyz/invitation?code=8BFBJC"
            target="_blank"
            rel="noopener noreferrer">Join Communinity</a>

          <a
            className="App-link"
            href="https://gitcoin.co/grants/5645/motionwaresdao"
            target="_blank"
            rel="noopener noreferrer"
          >
            Donate on Gitcoin
          </a>

          <a
            className="App-link"
            href="https://github.com/muhammadsalihu/motionwares-green"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contribute on Github
          </a>


          <p>Hackathons</p>
          <a className="App-link"
            href="https://gitcoin.co/issue/29012"
            target="_blank"
            rel="noopener noreferrer">Sustainable Blockchain Hackathon Brief On Gitcoin</a>

          <a className="App-link"
            href="https://gitcoin.co/issue/29162"
            target="_blank"
            rel="noopener noreferrer">Lusko BuildUP#1 Multiverse and Gaming Brief On Gitcoin</a>


          <p>Book</p>
          <a className="App-link"
            href="https://musaj.gumroad.com/l/multiverse-and-gaming"
            target="_blank"
            rel="noopener noreferrer">Preorder Book on Multiverse and Gaming: Case studies on Multi Agent Systems</a>



          <p>Research</p>
          <a className="App-link"
            href="https://twitter.com/Iam_Musaj/status/1558122521836371969?s=20&t=10f0xsqE2c7FlZvhFxofJg"
            target="_blank"
            rel="noopener noreferrer">Research Activities</a>
          <Profile />
        </header>
      </WagmiConfig>
    </div>
  );
}

export default App;
