// import { Provider } from '@self.id/framework'
import axios from "axios"
import logo from './logo.png';
import './App.css';

function App() {
  // Notes
  // 1. Assumption is made that storage providers can only have a single location to simplify calculations
  // 2. List of storage providers is gotten from Jim Pick's Json File
  // 3. Random Storage Providers were selected to include Belgium, Denmark and other Locations to Simplify calculations
  let storage_providers = [
    {
      miner: "f01152",
      region: "CN-BJ",
      long: 116.40388,
      lat: 39.91489,
      numLocations: 1,
      country: "CN",
      city: "Beijing"
    },
    {
      miner: "f01154",
      region: "SE",
      long: 18.01,
      lat: 59.2735,
      numLocations: 1,
      country: "SE",
      subdiv1: "AB",
      city: "Alvsjo"
    },
    {
      miner: "f01155",
      region: "CN-SH",
      long: 121.4879,
      lat: 31.24916,
      numLocations: 1,
      country: "CN",
      city: "Shanghai"
    },
    {
      miner: "f01234",
      region: "BE",
      long: 4.3447,
      lat: 50.8509,
      numLocations: 1,
      country: "BE"
    },
    {
      "miner": "f019354",
      "region": "DE",
      "long": 8.6843,
      "lat": 50.1188,
      "numLocations": 1,
      "country": "DE",
      "subdiv1": "HE",
      "city": "Frankfurt am Main"
    },
    {
      miner: "f01235",
      region: "SG",
      long: 103.8014,
      lat: 1.3673,
      numLocations: 1,
      country: "SG"
    }
  ]

  // Calculate Total Energy Consumption for a given storage provider
  const calculate_total_energy_consumption = async (minerId) => {
    try {
      let { data } = await axios.get('https://api.filgreen.d.interplanetary.one/models/model', {
        params: {
          miner: minerId,
          id: 2, // Data Model used is Energy consumption rate (v1.0.1):
          filter: 'month'
        }
      })
    } catch (error) {
      console.log(error)
      return 0
    }

  }

  // Calculate total renewable energy purchases for a storage provider
  const calculate_rec_total = async (minerId) => {
    try {
      let res = await axios.get("https://proofs-api.zerolabs.green/api/partners/filecoin/nodes/" + minerId + "/transactions")
      return res.data.recsTotal
    } catch (error) {
      console.log(error)
      return 0
    }
  }

  const estimate_grid_emissions_factor = (country) => {
    // grid_emissions_factors bases on GHG handbook: https://ghgprotocol.org/sites/default/files/ghgp/standards/Scope%202%20Guidance_Final_0.pdf
    // Estimates gotten from Table 6.4 Example calculation for location-based method on Page 50
    const belgium_grid_emissions_factor = 0.3152;
    const denmark_grid_emissions_factor = 0.1957;
    const other_grid_emissions_factor = 0.5;


    let emissions_factor = 0
    // estimate_emissions_factor based on Location Based Method
    if (country === "DE") {
      emissions_factor = denmark_grid_emissions_factor
    } else if (country === "BE") {
      emissions_factor = belgium_grid_emissions_factor
    } else {
      emissions_factor = other_grid_emissions_factor
    }

    return emissions_factor

  }

  const calculate_green_reputation_score = (minerId) => {
    let sampleStorageProvider = {
      "miner": "f019354",
      "region": "DE",
      "long": 8.6843,
      "lat": 50.1188,
      "numLocations": 1,
      "country": "DE",
      "subdiv1": "HE",
      "city": "Frankfurt am Main"
    }

    //Step 1: Select Operational Boundaries
    console.log("Operational Boundaries selected is using The Equity Based Approach")

    //Step 2A: Obtain activity data from Energy consumption Data API 
    calculate_total_energy_consumption(sampleStorageProvider.miner)

    //Step 2B: Obtain activity data from Renewable Energy Certificate API 
    calculate_rec_total(sampleStorageProvider.miner)

    //Step 3: Estimate Grid Emissions Factor
    estimate_grid_emissions_factor(sampleStorageProvider.country)

    //Step 4: Calculate total emission by multiplying each esction of activity data by the appropiate emissions factor
    console.log("Calculation based on Table 6.4 Example calculation for location-based method")

    //Step 5: Multiply these GHG emission total by the approximate GWP (Global Warming Potential) values.
    console.log("Calculation based on Table 6.4 Example calculation for location-based method")
  }

  const calculate_difference_of_emissions_profile = (SP1, SP2) => {
    console.log("Show the difference between the two Storage Providers")
  }

  const determine_co2_save = () => { }

  const connectWallet = () => {
    window.alert("Connect Wallet")
  }
  return (

    <div className="App">
      <button onClick={connectWallet}>Connect Wallet</button>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
      </header>
    </div>
  );
}

export default App;
