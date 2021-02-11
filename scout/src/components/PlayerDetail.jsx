import React, { useState, createRef } from 'react'
import PropTypes from 'prop-types'

import { useFlag } from '../context/ScoutFlags'
import { usePlayerStats } from '../context/ScoutPlayerStats'

import useWindowDimensions from '../hooks/useWindowDimensions'

import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Fade from '@material-ui/core/Fade'
import { makeStyles } from '@material-ui/core/styles'

import { Pie, Radar } from 'react-chartjs-2'
function TabPanel(props) {
	const { children, value, index, ...other } = props

	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`nav-tabpanel-${index}`}
			aria-labelledby={`nav-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box p={3}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	)
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
}

function a11yProps(index) {
	return {
		id: `nav-tab-${index}`,
		'aria-controls': `nav-tabpanel-${index}`,
	}
}

function LinkTab(props) {
	return (
		<Tab
			component='a'
			onClick={(event) => {
				event.preventDefault()
			}}
			{...props}
		/>
	)
}
const shots = {
	labels: ['total', 'conceded', 'assists'],
	datasets: [
		{
			label: null,
			backgroundColor: ['#B21F00', '#C9DE00', '#2FDE00'],
			hoverBackgroundColor: ['#501800', '#4B5000', '#175000'],
			data: [11, 3, 8],
		},
	],
}
const stateeee = {
	labels: ['January', 'February', 'March', 'April', 'May'],
	datasets: [
		{
			label: null,
			backgroundColor: ['#B21F00', '#C9DE00', '#2FDE00', '#00A6B4', '#6800B4'],
			hoverBackgroundColor: [
				'#501800',
				'#4B5000',
				'#175000',
				'#003350',
				'#35014F',
			],
			data: [65, 59, 80, 81, 56],
		},
	],
}
const state = {
	labels: ['January', 'February', 'March', 'April', 'May'],
	datasets: [
		{
			label: null,
			backgroundColor: ['#B21F00', '#C9DE00', '#2FDE00', '#00A6B4', '#6800B4'],
			hoverBackgroundColor: [
				'#501800',
				'#4B5000',
				'#175000',
				'#003350',
				'#35014F',
			],
			data: [65, 59, 80, 81, 56],
		},
	],
}
const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	// root: {
	// 	height: 180,
	// },
	wrapper: {
		width: 100 + theme.spacing(2),
	},
	paper: {
		zIndex: 1,
		position: 'relative',
		height: '100%',
		backgroundColor: 'darkgrey',
	},
	// svg: {
	// 	width: 100,
	// 	height: 100,
	// },
	polygon: {
		fill: theme.palette.common.white,
		stroke: theme.palette.divider,
		strokeWidth: 1,
	},
	scrollContainer: {
		backgroundColor: 'darkgrey',
		maxHeight: '100%',
		overflow: 'auto',
	},
	areaOne: {
		width: 'calc(44% - 1em)',
		float: 'left',
		margin: '0.2em',
		height: 'calc(33% - 1em)',
		padding: '0.5%',
		color: 'black',
		// background: 'red',
	},

	areaTwo: {
		width: 'calc(55% - 1em)',
		float: 'right',
		margin: '0.2em',
		height: 'calc(33% - 1em)',
		padding: '0.5%',
		color: 'black',
		// background: 'blue',
	},
	areaThree: {
		width: 'calc(99.5% - 1em)',
		float: 'right',
		margin: '0.2em',
		height: 'calc(43% - 1em)',
		padding: '0.5%',
		color: 'black',
		overflow: 'auto',
		// background: 'yellow',
	},
	areaFour: {
		width: 'calc(43% - 1em)',
		float: 'left',
		margin: '0.2em',
		height: 'calc(66% - 1em)',
		padding: '0.5%',
		color: 'black',
	},
	areaFive: {
		width: 'calc(55% - 1em)',
		float: 'right',
		margin: '0.2em',
		height: 'calc(33% - 1em)',
		padding: '0.5%',
		color: 'black',
		overflow: 'auto',
	},
	areaSix: {
		width: 'calc(99.5% - 1em)',
		float: 'right',
		margin: '0.2em',
		height: 'calc(25% - 1em)',
		padding: '0.5%',
		color: 'black',
		overflow: 'auto',
	},
}))
export default function PlayerDetail() {
	const classes = useStyles()
	const { height } = useWindowDimensions()
	const { open, setOpen } = useFlag()
	const chartRef = createRef()
	const [value, setValue] = useState(0)
	const { playerStats } = usePlayerStats()

	const handleChange = (event, newValue) => {
		setValue(newValue)
	}
	//
	function resetIframeHeight(o) {
		debugger
		o.style.height =
			o.contentWindow.document.documentElement.scrollHeight + 'px'
	}
	//
	debugger
	if (!open) return <span>Loading....</span>
	return (
		<>
			{/* <Slide direction='left' in={open} mountOnEnter unmountOnExit> */}
			<Fade in={open}>
				<Paper
					className={(classes.scrollContainer, classes.paper)}
					style={{ height: '150%' }}
				>
					<Paper className={classes.areaSix}>
						<Grid
							container
							direction='column'
							spacing={3}
							style={{ height: '100%', width: '100%' }}
						>
							<Grid item style={{ height: '100%', width: '20%' }}>
								<section>
									<Typography variant='h6' gutterBottom>
										{playerStats.player_name}
									</Typography>
									<Typography variant='subtitle1' gutterBottom>
										Nacionalidade
										{playerStats.nationality}
									</Typography>
									<Typography variant='subtitle1' gutterBottom>
										Cidade Natal
										{playerStats.birth_place}
									</Typography>
								</section>
							</Grid>
							<Grid item style={{ height: '100%', width: '20%' }}>
								<section>
									<Typography variant='h6' gutterBottom>
										Idade
										{playerStats.age}
									</Typography>
									<Typography variant='subtitle1' gutterBottom>
										Data de nascimento
										{playerStats.birth_date}
									</Typography>
									<Typography variant='subtitle1' gutterBottom>
										Posição
										{playerStats.position}
									</Typography>
								</section>
							</Grid>
							<Grid item style={{ height: '100%', width: '20%' }}>
								<section>
									<Typography variant='h6' gutterBottom>
										Altura
										{playerStats.height}
									</Typography>
									<Typography variant='subtitle1' gutterBottom>
										Peso
										{playerStats.weight}
									</Typography>
								</section>
							</Grid>
						</Grid>
					</Paper>
					<Paper className={classes.areaOne}>
						<Radar
							data={shots}
							width={1}
							height={0.5}
							options={{
								title: {
									display: false,
									text: 'Chutes',
									fontSize: 11,
								},
								maintainAspectRatio: false,
								legend: {
									display: false,
									position: 'right',
								},
								responsive: true,
							}}
						/>
					</Paper>
					<Paper className={classes.areaTwo}>
						<Grid
							container
							direction='column'
							spacing={3}
							style={{ height: '100%', width: '100%' }}
						>
							<Grid item style={{ height: '100%', width: '20%' }}>
								<Pie
									data={shots}
									width={1}
									height={0.3}
									options={{
										title: {
											display: true,
											text: 'Gols',
											fontSize: 11,
										},
										maintainAspectRatio: false,
										legend: {
											display: false,
											position: 'right',
										},
										responsive: true,
									}}
								/>
							</Grid>
							<Grid item style={{ height: '100%', width: '20%' }}>
								{' '}
								<Pie
									data={shots}
									width={1}
									height={0.5}
									options={{
										title: {
											display: true,
											text: 'Passes',
											fontSize: 11,
										},
										maintainAspectRatio: false,
										legend: {
											display: false,
											position: 'right',
										},
										responsive: true,
									}}
								/>
							</Grid>
							<Grid item style={{ height: '100%', width: '20%' }}>
								{' '}
								<Pie
									data={shots}
									width={1}
									height={0.5}
									options={{
										title: {
											display: true,
											text: 'Chutes',
											fontSize: 11,
										},
										maintainAspectRatio: false,
										legend: {
											display: false,
											position: 'right',
										},
										responsive: true,
									}}
								/>
							</Grid>
						</Grid>
					</Paper>
					<Paper className={classes.areaThree}>
						<Grid
							container
							direction='row'
							spacing={3}
							style={{ height: 'auto', width: '100%' }}
						>
							<Grid
								xs={4}
								sm={4}
								xl={4}
								md={4}
								item
								style={{ height: '100%', width: '20%' }}
							>
								<section>
									<Typography variant='h6' gutterBottom>
										Duelos
									</Typography>
									<Typography variant='subtitle1' gutterBottom>
										Total
										{/* {.duels.total} */}
									</Typography>
									<Typography variant='subtitle1' gutterBottom>
										Venceu
										{/* {playerStats.duels.won} */}
									</Typography>
								</section>
							</Grid>
							<Grid
								xs={4}
								sm={4}
								xl={4}
								md={4}
								item
								style={{ height: '100%', width: '20%' }}
							>
								<section>
									<Typography variant='h6' gutterBottom>
										Dribles
									</Typography>
									<Typography variant='subtitle1' gutterBottom>
										Tentativas
										{playerStats.dribbles.attempts}
									</Typography>
									<Typography variant='subtitle1' gutterBottom>
										Sucesso
										{playerStats.dribbles.success}
									</Typography>
								</section>
							</Grid>

							<Grid
								xs={4}
								sm={4}
								xl={4}
								md={4}
								item
								style={{ height: '100%', width: '20%' }}
							>
								<section>
									<Typography variant='h6' gutterBottom>
										Faltas
									</Typography>
									<Typography variant='subtitle1' gutterBottom>
										Feitas
										{playerStats.fouls.drawn}
									</Typography>
									<Typography variant='subtitle1' gutterBottom>
										Sofridas
										{playerStats.fouls.committed}
									</Typography>
								</section>
							</Grid>
							<Grid
								xs={4}
								sm={4}
								xl={4}
								md={4}
								item
								style={{ height: '100%', width: '20%' }}
							>
								<section>
									<Typography variant='h6' gutterBottom>
										Defesas
									</Typography>
									<Typography variant='subtitle1' gutterBottom>
										Total
										{playerStats.tackles.total}
									</Typography>
									<Typography variant='subtitle1' gutterBottom>
										bloqueios
										{playerStats.tackles.blocks}
									</Typography>
									<Typography variant='subtitle1' gutterBottom>
										interceptações
										{playerStats.tackles.interceptions}
									</Typography>
								</section>
							</Grid>
							<Grid
								xs={4}
								sm={4}
								xl={4}
								md={4}
								item
								style={{ height: '100%', width: '20%' }}
							>
								<section>
									<Typography variant='h6' gutterBottom>
										Cartões
									</Typography>
									<Typography variant='subtitle1' gutterBottom>
										Amarelo
										{playerStats.cards.yellow}
									</Typography>
									<Typography variant='subtitle1' gutterBottom>
										Amarelo Vermelho
										{playerStats.cards.yellowred}
									</Typography>
									<Typography variant='subtitle1' gutterBottom>
										Vermelho
										{playerStats.cards.red}
									</Typography>
								</section>
							</Grid>

							<Grid
								xs={4}
								sm={4}
								xl={4}
								md={4}
								item
								style={{ height: '100%', width: '20%' }}
							>
								<section>
									<Typography variant='h6' gutterBottom>
										Jogos
									</Typography>
									<Typography variant='subtitle1' gutterBottom>
										Apareceu
										{playerStats.games.appearences}
									</Typography>
									<Typography variant='subtitle1' gutterBottom>
										Minutos jogados
										{playerStats.games.minutes_played}
									</Typography>
									<Typography variant='subtitle1' gutterBottom>
										Escalado
										{playerStats.games.lineups}
									</Typography>
								</section>
							</Grid>
							<Grid
								xs={4}
								sm={4}
								xl={4}
								md={4}
								item
								style={{ height: '100%', width: '20%' }}
							>
								<section>
									<Typography variant='h6' gutterBottom>
										Substituto
									</Typography>
									<Typography variant='subtitle1' gutterBottom>
										Entrou
										{playerStats.substitutes.in}
									</Typography>
									<Typography variant='subtitle1' gutterBottom>
										Saiu
										{playerStats.substitutes.out}
									</Typography>
									<Typography variant='subtitle1' gutterBottom>
										Banco
										{playerStats.substitutes.bench}
									</Typography>
								</section>
							</Grid>
							<Grid
								xs={4}
								sm={4}
								xl={4}
								md={4}
								item
								style={{ height: '100%', width: '20%' }}
							>
								<section>
									<Typography variant='h6' gutterBottom>
										Pênaltis
									</Typography>
									<Typography variant='subtitle1' gutterBottom>
										Sofridos
										{playerStats.penalty.won}
									</Typography>
									<Typography variant='subtitle1' gutterBottom>
										Feitos
										{playerStats.penalty.commited}
									</Typography>
									<Typography variant='subtitle1' gutterBottom>
										Acertos
										{playerStats.penalty.succes}
									</Typography>
									<Typography variant='subtitle1' gutterBottom>
										Perdidos
										{playerStats.penalty.missed}
									</Typography>
									<Typography variant='subtitle1' gutterBottom>
										Defendidos
										{playerStats.penalty.saved}
									</Typography>
								</section>
							</Grid>
						</Grid>
					</Paper>
				</Paper>
			</Fade>
			{/* </Slide> */}
		</>
	)
}
