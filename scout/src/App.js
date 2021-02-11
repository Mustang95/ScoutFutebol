import React, { useState, useEffect } from 'react'
import ScoutFlag from './context/ScoutFlags'
import PlayerStatsProvider from './context/ScoutPlayerStats'

import useWindowDimensions from './hooks/useWindowDimensions'

import Squad from './components/Squad'
import Header from './components/Header'
import PlayerDetail from './components/PlayerDetail'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		textAlign: 'center',
		color: theme.palette.text.secondary,
		height: '90%',
		marginTop: '42px',
	},
	topPage: {
		padding: theme.spacing(4),
		textAlign: 'center',
		maxWidth: '1920px',
	},
	card: {
		height: 200,
		maxWidth: 245,
	},
	scrollContainerpaper: {
		maxHeight: '100%',
		overflow: 'auto',
		textAlign: 'center',
		color: theme.palette.text.secondary,
		height: '90%',
		marginTop: '42px',
	},
}))

export default function App() {
	const { height } = useWindowDimensions()
	const classes = useStyles()
	return (
		<>
			<ScoutFlag>
				<Grid
					container
					spacing={3}
					style={{ height: height - 20 }}
					className={classes.topPage}
				>
					<Header />
					<PlayerStatsProvider>
						<Grid item xs={12} sm={4} xl={4} className={classes.paper}>
							<Squad />
						</Grid>
						<Grid
							item
							xs={12}
							sm={8}
							xl={8}
							className={classes.scrollContainerpaper}
						>
							<PlayerDetail />
						</Grid>
					</PlayerStatsProvider>
				</Grid>
			</ScoutFlag>
		</>
	)
}
