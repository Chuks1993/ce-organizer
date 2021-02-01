import React from 'react'
import {render, screen} from '@testing-library/react'
import Calender from './calender'

test('renders Big-Calender component', () => {
	render(<Calender />)
	expect(screen.getByText(/add event/i)).toBeInTheDocument()
})
