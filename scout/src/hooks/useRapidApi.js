import { useState, useEffect } from 'react'
import axios from 'axios'
const { REACT_APP_X_RAPIDAPI_KEY, REACT_APP_X_RAPIDAPI_HOST } = process.env

export default function useRapidApi() {
	let [responseData, setResponseData] = useState(null)
	useEffect(() => {
		const getPlayers = async () => {
			try {
				const response = await axios({
					method: 'GET',
					url:
						'https://api-football-v1.p.rapidapi.com/v2/players/team/131/2020',
					headers: {
						'x-rapidapi-key': `${REACT_APP_X_RAPIDAPI_KEY}`,
						'x-rapidapi-host': `${REACT_APP_X_RAPIDAPI_HOST}`,
					},
				})
				debugger
				setResponseData(response.data)
			} catch (error) {
				console.log(error)
			}
		}
		getPlayers()
	}, [])
	return { responseData }
}
