import {
  useAccount,
  useConnect,
  useDisconnect,
} from 'wagmi'

export function Profile() {
  const { address, connector, isConnected } = useAccount()
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect()
  const { disconnect } = useDisconnect()

  if (isConnected) {
    console.log(isConnected)
    console.log(connector)
    console.log(address)
    return (
      <div>
        <div style={{ border: "10px solid green", padding: "20px", }}>
          <div>Connected to {connector && connector.name}</div>
          <p>address: {address}</p>
          <button className='Connect-Button' onClick={disconnect}>Disconnect</button>
        </div>

        <br />
        <br />
        <div className='App-Header'>
          <h3>Checklist</h3>
          <li>Build Things That Don't Scale</li>
        </div>
      </div>
    )
  }

  return (
    <div>
      <h1>Profile</h1>
      {connectors.map((connector) => (
        <button
          className="Connect-Button"
          disabled={!connector.ready}
          key={connector.id}
          onClick={() => connect({ connector })}
        >
          {"Connect with " + connector.name}
          {!connector.ready && ' (unsupported)'}
          {isLoading &&
            connector.id === pendingConnector?.id &&
            ' (connecting)'}
        </button>
      ))}

      {error && <div>{error.message}</div>}
    </div>
  )
}

export default Profile