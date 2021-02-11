import React, { useState, useEffect } from 'react'
import { useFlag } from '../context/ScoutFlags'
import useRapidApi from '../hooks/useRapidApi'
import useApify from '../hooks/useApify'

import { usePlayerStats } from '../context/ScoutPlayerStats'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	grid: {
		textAlign: '-webkit-center',
	},
	listItem: {},
	avatar: {
		display: 'flex',
		'& > *': {
			margin: theme.spacing(1),
		},
		width: 90,
		height: 90,
	},
	scrollContainer: {
		backgroundColor: 'darkgrey',
		maxHeight: '95%',
		overflow: 'auto',
	},
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: 'darkgrey',
		marginLeft: 0,
		width: '100%',
	},
	searchIcon: {
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	inputRoot: {
		color: 'white',
	},
	inputInput: {
		// vertical padding + font size from searchIcon
		transition: theme.transitions.create('width'),
		width: '100%',
	},
}))

export default function Squad(props) {
	const classes = useStyles()
	let { responsePlayers } = useApify()
	let { responseData } = useRapidApi()
	const [selectedIndex, setSelectedIndex] = useState(1)
	const { open, setOpen } = useFlag()
	const { playerStats, setPlayerStats } = usePlayerStats()

	const handleListItemClick = (event, index, name, responseData) => {
		const playerSelected = responseData.api.players.find(
			(elem) => elem.player_name === name
		)
		setPlayerStats(playerSelected)
		setSelectedIndex(index)
		let flag = !open
		setOpen(flag)
	}

	if (!responseData) return <span>Loading... RAPID API</span>
	if (!responsePlayers) return <span>Loading...APIFY</span>
	return (
		<>
			<div className={classes.search}>
				<div className={classes.searchIcon}>
					<SearchIcon />
				</div>
				<InputBase
					placeholder='Search…'
					classes={{
						root: classes.inputRoot,
						input: classes.inputInput,
					}}
					inputProps={{ 'aria-label': 'search' }}
				/>
			</div>
			<Paper className={classes.scrollContainer}>
				<List className={classes.root}>
					{responsePlayers.map((item) => (
						<ListItem
							button
							key={item.id}
							className={classes.listItem}
							onClick={(event) =>
								handleListItemClick(event, item.id, item.alt, responseData)
							}
						>
							<ListItemAvatar>
								<Avatar
									className={classes.avatar}
									alt={item.alt}
									src={item.src}
								/>
							</ListItemAvatar>
							<ListItemText primary={item.alt} secondary='' />
						</ListItem>
					))}
				</List>
			</Paper>
		</>
	)
}
