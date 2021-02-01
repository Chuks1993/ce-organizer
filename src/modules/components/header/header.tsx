import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {AppBar, Toolbar, Typography, Button} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'

const useStyles = makeStyles(theme => ({
	header: {
		marginBottom: theme.spacing(3),
	},
	title: {
		flexGrow: 1,
	},
	'menu-button': {
		marginRight: theme.spacing(2),
	},
}))

const Header = ({onAddClick}) => {
	const classes = useStyles()
	return (
		<AppBar className={classes.header} position='static'>
			<Toolbar>
				<Typography variant='h6' className={classes.title}>
					Christ Embassy Organizer
				</Typography>
				<Button
					onClick={onAddClick}
					variant='contained'
					color='secondary'
					startIcon={<AddIcon />}
				>
					Add Event
				</Button>
			</Toolbar>
		</AppBar>
	)
}

export default Header
