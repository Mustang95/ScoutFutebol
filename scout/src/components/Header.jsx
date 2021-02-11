import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
		backgroundImage:
			"url('https://media.api-sports.io/football/teams/131.png')",
		height: '64px',
		width: '64px',
		backgroundRepeat: 'round',
	},
	title: {
		flexGrow: 1,
	},
	color: {
		backgroundColor: 'black',
	},
}))

export default function Header() {
	const classes = useStyles()
	return (
		<>
			<AppBar position='fixed' className={classes.color}>
				<Toolbar>
					<img className={classes.menuButton}>{/* <MenuIcon /> */}</img>
					<Typography variant='h6' className={classes.title}>
						Sport Club Corinthians Paulista
					</Typography>
				</Toolbar>
			</AppBar>
		</>
	)
}
