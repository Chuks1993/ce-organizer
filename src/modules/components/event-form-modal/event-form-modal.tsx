import React, {useState} from 'react'
import {useForm} from 'react-hook-form'
import {
	Modal,
	Paper,
	Grid,
	AppBar,
	Toolbar,
	IconButton,
	Typography,
	TextField,
	Switch,
	Button,
} from '@material-ui/core'
import CloseRoundedIcon from '@material-ui/icons/CloseRounded'
import moment from 'moment'

import {makeStyles} from '@material-ui/core/styles'
const useStyles = makeStyles(theme => ({
	'calender-container': {
		backgroundColor: '#FAF8F8',
		height: '100vh',
	},
	'calender-content': {
		paddingLeft: theme.spacing(5),
		paddingRight: theme.spacing(5),
	},
	'event-form-modal': {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	paper: {
		height: '40em',
		width: '40em',
	},
	'modal-header': {
		flexGrow: 1,
	},
	'modal-form': {
		padding: theme.spacing(1),
	},
}))

const EventFormModal = ({onModalClose, addEvent, closeModal, selectedSlot}) => {
	const classes = useStyles()
	const [isEventAllday, setIsEventAllday] = useState(!selectedSlot)
	const {title, start, end, description} = selectedSlot ?? {}
	const {register, handleSubmit, errors} = useForm({
		defaultValues: {
			title,
			start: moment(start).format('YYYY-MM-DD[T]HH:mm:ss'),
			end: moment(end).format('YYYY-MM-DD[T]HH:mm:ss'),
			description,
		},
	})

	const onSubmit = formData => {
		console.log(formData)
		addEvent(formData)
		closeModal()
	}

	return (
		<Modal
			open
			onClose={onModalClose}
			className={classes['event-form-modal']}
			aria-labelledby='event-form-modal'
			aria-describedby='event-form'
		>
			<form noValidate onSubmit={handleSubmit(onSubmit)}>
				<Paper className={classes.paper}>
					<AppBar color='transparent' elevation={0} position='static'>
						<Toolbar>
							<Typography
								className={classes['modal-header']}
								color='primary'
								variant='h5'
							>
								Add Event
							</Typography>
							<IconButton color='primary' onClick={closeModal}>
								<CloseRoundedIcon />
							</IconButton>
						</Toolbar>
					</AppBar>
					<Grid className={classes['modal-form']} container>
						<Grid item xs={12}>
							<TextField
								size='small'
								variant='outlined'
								autoFocus
								fullWidth
								inputRef={register({required: 'Event title is required'})}
								id='title'
								name='title'
								label='Title'
							/>
							{errors.title && (
								<Typography color='error' variant='caption'>
									{errors.title.message}
								</Typography>
							)}
						</Grid>

						<Grid item xs={12}>
							<TextField
								size='small'
								variant='outlined'
								autoFocus
								fullWidth
								multiline
								rows={10}
								inputRef={register()}
								id='description'
								name='description'
								label='Description'
							/>
						</Grid>
						<Grid item xs={12}>
							<Typography component='div' variant='body1'>
								<Grid component='label' container alignItems='center' spacing={1}>
									<Grid item>All day: No</Grid>
									<Switch
										checked={isEventAllday}
										inputRef={register()}
										onChange={() => setIsEventAllday(prevState => !prevState)}
										name='allday'
										inputProps={{'aria-label': 'allday checkbox'}}
										color='primary'
									/>
									<Grid item>Yes</Grid>
								</Grid>
							</Typography>
						</Grid>

						<TextField
							id='start'
							name='start'
							label='Start'
							type='datetime-local'
							inputRef={register()}
							InputLabelProps={{
								shrink: true,
							}}
						/>

						<TextField
							id='end'
							name='end'
							label='End'
							type='datetime-local'
							inputRef={register()}
							InputLabelProps={{
								shrink: true,
							}}
						/>
						<Grid item xs={12}>
							<Button color='primary' variant='contained' type='submit' fullWidth>
								submit
							</Button>
						</Grid>
					</Grid>
				</Paper>
			</form>
		</Modal>
	)
}

export default EventFormModal
