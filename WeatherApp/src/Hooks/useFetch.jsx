import axios from 'axios'
import React from 'react'

const useFetch = (city) => {
	const [loading, setLoading] = React.useState(true)
	const [error, setError] = React.useState(null)
	const [data, setData] = React.useState(null)

	const fetchData = async () => {
		setError(null)
		try {
			const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4ebee537753dbc19982ea6dc5bb60bbb&units=metric`)
			const data = res.data
			setData(data)
		} catch (error) {
			setError(error)
		} finally {
			setLoading(false)
		}
	}

	React.useEffect(() => {
		if (!city) return
		fetchData()
	}, [city])

	return { loading, error, data }
}

export default useFetch