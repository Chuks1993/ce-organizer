import React from 'react'
// import {makeStyles} from '@material-ui/core/styles'
// import {Grid} from '@material-ui/core'

// const useStyles = makeStyles(() => ({
// 	'calender-container': {
// 		backgroundColor: '#FAF8F8',
// 	},
// }))

function FullPageErrorFallback({error}: any) {
	// const classes = useStyles()
	return (
		<div role='alert'>
			<p>Uh oh... There's a problem. Try refreshing the app.</p>
			<pre>{error.message}</pre>
		</div>
	)
}

export default FullPageErrorFallback
