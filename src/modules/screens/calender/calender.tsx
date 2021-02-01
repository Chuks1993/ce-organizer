import React, {useState} from 'react'
import {Calendar as BigReactCalender, momentLocalizer} from 'react-big-calendar'
import moment from 'moment'

import 'react-big-calendar/lib/css/react-big-calendar.css'

import {makeStyles} from '@material-ui/core/styles'
import {EventFormModal, Header} from 'modules/components'

const localizer = momentLocalizer(moment)

const useStyles = makeStyles(theme => ({
	'calender-container': {
		backgroundColor: '#FAF8F8',
		height: '100vh',
	},
	'calender-content': {
		paddingLeft: theme.spacing(5),
		paddingRight: theme.spacing(5),
	},
}))

// const eventStyle = (event, start, end, isSelected) => {
// 	const style = {
// 		backgroundColor: '#' + event.hexColor,
// 		borderRadius: '0px',
// 		opacity: 0.8,
// 		color: 'black',
// 		border: '0px',
// 		display: 'block',
// 	}
// 	return style
// }

const Calender = () => {
	const classes = useStyles()
	const [events, setEvents] = useState<any>([])
	const [selectedSlot, setSelectedSlot] = useState<any>()
	const [openModal, setOpenModal] = useState(false)

	const handleSlotClick = slot => {
		setSelectedSlot(slot)
		setOpenModal(true)
	}

	return (
		<div className={classes['calender-container']}>
			<Header onAddClick={() => setOpenModal(true)} />
			<div className={classes['calender-content']}>
				<BigReactCalender
					localizer={localizer}
					events={events}
					selectable
					startAccessor='start'
					endAccessor='end'
					style={{height: '85vh'}}
					onSelectEvent={handleSlotClick}
					onSelectSlot={handleSlotClick}
					// eventPropGetter={eventStyle}
				/>
			</div>
			{openModal && (
				<EventFormModal
					selectedSlot={selectedSlot}
					onModalClose={() => setSelectedSlot(undefined)}
					closeModal={() => {
						setSelectedSlot(undefined)
						setOpenModal(false)
					}}
					addEvent={event => setEvents(prevEvents => [...prevEvents, event])}
				/>
			)}
		</div>
	)
}

export default Calender
