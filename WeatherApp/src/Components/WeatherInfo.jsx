import React from 'react'


const WeatherInfo = ({ data }) => {
	const { name, sys: { country, sunrise, sunset }, weather, main, wind, visibility } = data

	const weatherIcon = `https://openweathermap.org/img/wn/${weather[0].icon}@4x.png`

	const formatTime = (unix) => {
		return new Date(unix * 1000).toLocaleTimeString('en-IN', {
			hour: '2-digit',
			minute: '2-digit',
		})
	}

	return (
		<div className="weather-card">
			<div className="weather-header">
				<h2>{name}, {country}</h2>
				<p className="description">{weather[0].description}</p>
			</div>

			<div className="icon-temp">
				<img src={weatherIcon} alt={weather[0].main} />
				<div className="temp-info">
					<h1>{main.temp}°C</h1>
					<p>Feels like {main.feels_like}°C</p>
				</div>
			</div>

			<div className="details-grid">
				<div className="detail-box">
					<p className="label">Humidity</p>
					<p>{main.humidity}%</p>
				</div>
				<div className="detail-box">
					<p className="label">Pressure</p>
					<p>{main.pressure} hPa</p>
				</div>
				<div className="detail-box">
					<p className="label">Wind</p>
					<p>{wind.speed} m/s</p>
				</div>
				<div className="detail-box">
					<p className="label">Visibility</p>
					<p>{visibility / 1000} km</p>
				</div>
				<div className="detail-box">
					<p className="label">Sunrise</p>
					<p>{formatTime(sunrise)}</p>
				</div>
				<div className="detail-box">
					<p className="label">Sunset</p>
					<p>{formatTime(sunset)}</p>
				</div>
			</div>
		</div>
	)
}

export default WeatherInfo
