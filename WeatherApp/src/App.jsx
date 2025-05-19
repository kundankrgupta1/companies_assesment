import React from 'react'
import WaetherApp from './Components/WaetherApp'

export const URL = 'https://api.openweathermap.org/data/2.5/weather?q=pune&appid=4ebee537753dbc19982ea6dc5bb60bbb&units=metric';

const App = () => {
	return (
		<div>
			<WaetherApp />
		</div>
	)
}

export default App;