import React, { createContext, useState, useContext } from 'react'

const PlayerStatsContext = createContext()

export default function PlayerStatsProvider({ children }) {
	const initPlayerStats = []
	const [playerStats, setPlayerStats] = useState(initPlayerStats)

	return (
		<PlayerStatsContext.Provider value={{ playerStats, setPlayerStats }}>
			{children}
		</PlayerStatsContext.Provider>
	)
}

export function usePlayerStats() {
	const context = useContext(PlayerStatsContext)

	if (!context)
		throw new Error('usePlayerStats must be used within a PlayerStatsProvider')

	const { playerStats, setPlayerStats } = context
	return { playerStats, setPlayerStats }
}
