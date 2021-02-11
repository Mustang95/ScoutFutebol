import { useState, useEffect } from 'react'
import axios from 'axios'
const {
	REACT_APP_X_APIFY_DATASET,
	REACT_APP_X_APIFY_EXPORT_FORMAT,
} = process.env
export default function useApify() {
	let [responsePlayers, setResponsePlayers] = useState('')
	useEffect(() => {
		const getPlayers = async () => {
			try {
				const response = await axios({
					method: 'GET',
					url: `https://api.apify.com/v2/datasets/${REACT_APP_X_APIFY_DATASET}/${REACT_APP_X_APIFY_EXPORT_FORMAT}`,
				})
				setResponsePlayers(response.data[0].arrayOfPlayers)
			} catch (error) {
				console.log(error)
			}
		}
		getPlayers()
	}, [])
	return { responsePlayers }
}
