import React from 'react'
import useFetch from '../Hooks/useFetch'
import WeatherInfo from './WeatherInfo'
import Loading from './Loading'
import Error from './Error'
const SearchBar = () => {
	const [cityName, setCityName] = React.useState('')
	const [submittedCity, setSubmittedCity] = React.useState('')

	const { loading, error, data } = useFetch(submittedCity)

	const handleSubmit = (e) => {
		e.preventDefault()
		setSubmittedCity(cityName)
		setCityName('')
	}

	return (
		<div>
			<form onSubmit={handleSubmit} className='search'>
				<input
					type='text'
					name='search'
					value={cityName}
					onChange={(e) => setCityName(e.target.value)}
					className='search__input'
					placeholder='Enter city name'
					required
				/>
				<button type='submit' className='search__button'>Search</button>
			</form>
			{submittedCity && <>
				{loading && <Loading />}
				{error && <Error errorMessage={error?.response?.data.message} />}
				{!loading && !error && data && <WeatherInfo data={data} />}
			</>}
		</div>
	)
}

export default SearchBar;