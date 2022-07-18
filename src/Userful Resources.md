1. Goal
	- Finding SPs who have certain CID stored
		- url:
			- https://www.mona.gallery/
		- You can easily find its CID is following
			- https://ipfs.io/ipfs/bafybeiadla4dm75f4j46r2dhxzixofwqhglshy6brzvmnrcckzeymbmv7i
2. Jim Picks JSON
	- endpoint 
		- https://provider-quest.s3.us-west-2.amazonaws.com/dist/geoip-lookups/provider-country-state-province-locations-latest.json
	- data
		- List of miners/storage providers/SPs
		- Location of SPs
3. Energy Consumption API
	- endpoint
		- https://filecoin-green.gitbook.io/filecoin-green-documentation/filecoin-green-api-docs/list-of-apis/energy-consumption-api
	- data
		- 
4. Find PeerIDs from CID
	- endpoint
		- https://cid.contact/cid/bafybeiadla4dm75f4j46r2dhxzixofwqhglshy6brzvmnrcckzeymbmv7i
	- data
		- You will get following Peer IDs
			- 12D3KooWLDf6KCzeMv16qPRaJsTLKJ5fR523h65iaYSRNfrQy7eU
			- 12D3KooWEjCsBdHscdGpQdcoHNTiF8Z7fzccrvoxmH6pjjb8WJjX
5. Find minerIDs from peerID
	- endpoint
		- https://green.filecoin.space/minerid-peerid/api/v1/miner-id?peer_id=12D3KooWLDf6KCzeMv16qPRaJsTLKJ5fR523h65iaYSRNfrQy7eU
	- you can find that Miner IDs having this beautiful motive are f01345523 and f0694396
6. 