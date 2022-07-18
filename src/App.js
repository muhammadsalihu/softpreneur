// import { Provider } from '@self.id/framework'
import axios from "axios"
import logo from './logo.png';
import './App.css';

function App() {
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
      miner: "f01235",
      region: "SG",
      long: 103.8014,
      lat: 1.3673,
      numLocations: 1,
      country: "SG"
    }
  ]

  // Calculate Total Energy Consumption for a given storage provider
  const calculate_total_energy_consumption = async () => {
    try {
      let { data } = await axios.get('https://api.filgreen.d.interplanetary.one/models/model', {
        params: {
          miner: "f01012",
          id: 2,
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

  const calculate_green_reputation_score = () => {
    console.log("Some Green Reputation Score")
  }

  const dummyCall = () => {
    calculate_rec_total("f014487")
  }

  return (

    <div className="App">
      <header className="App-header">
        <button onClick={dummyCall}>Test API Call</button>
      </header>
    </div>
  );
}

export default App;



// <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://motionwares.com"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Motionwares Green
//         </a>