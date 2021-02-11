import React, { createContext, useState, useContext } from 'react'

const ScoutFlagsContext = createContext()

export default function ScoutFlagsProvider({ children }) {
	const initStateFlag = false
	const [open, setOpen] = useState(initStateFlag)
	return (
		<>
			<ScoutFlagsContext.Provider value={{ open, setOpen }}>
				{children}
			</ScoutFlagsContext.Provider>
		</>
	)
}

export function useFlag() {
	const context = useContext(ScoutFlagsContext)

	if (!context)
		throw new Error('useFlag must be used within a ScoutFlagsProvider')

	const { open, setOpen } = context
	return { open, setOpen }
}
