import axios from "axios"
import { useEffect, useState } from "react"

const useFetch = (url) => {
	const [data, setData] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState("")
	const fetchData = async () => {
		try {
			const res = await axios.get(url)
			setData(res.data)
		} catch (error) {
			setError(error)
		} finally {
			setIsLoading(false)
		}
	}
	useEffect(() => {
		fetchData()
	}, [url])

	return { data, isLoading, error }
}

export default useFetch
