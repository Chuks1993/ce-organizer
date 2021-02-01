import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {ErrorBoundary} from 'react-error-boundary'
import {ThemeProvider} from '@material-ui/core/styles'
import {CssBaseline} from '@material-ui/core'
import theme from './theme'

import Calender from 'modules/screens/calender/calender'
import FullPageErrorFallback from 'modules/screens/full-page-error-fallback/full-page-error-fallback'

// const Calender = React.lazy(() => import('modules/screens/calender/calender'))

// const FullPageErrorFallback = React.lazy(
// 	() =>
// 		import('modules/screens/full-page-error-fallback/full-page-error-fallback'),
// )

function App() {
	return (
		<React.Suspense fallback={<div>Loading...</div>}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<ErrorBoundary FallbackComponent={FullPageErrorFallback}>
					<Router>
						<Route path='/' component={Calender} />
					</Router>
				</ErrorBoundary>
			</ThemeProvider>
		</React.Suspense>
	)
}

export default App
