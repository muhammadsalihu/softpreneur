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
          <img src={logo} className="App-logo" alt="logo" />
          <br />
          <br />
          <a
            className="App-link"
            href="https://gitcoin.co/grants/5645/motionwaresdao"
            target="_blank"
            rel="noopener noreferrer"
          >
            MotionwaresDAO
          </a>

          <a
            className="App-link"
            href="https://github.com/muhammadsalihu/motionwares-green"
            target="_blank"
            rel="noopener noreferrer"
          >
            Calculate Green Reputation Score
          </a>

          <a className="App-link"
            href="https://gitcoin.co/issue/29012"
            target="_blank"
            rel="noopener noreferrer">Sustainable Blockchain Hackathon Brief On Gitcoin</a>

          <br />
          <Profile />
        </header>
      </WagmiConfig>
    </div>
  );
}

export default App;
