import { useState } from "react";

const useFetch = (url) => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [data, setData] = useState(null);

	const fetchData = async () => {
		setLoading(true);
		setError(null);
		setData(null);
		try {
			const response = await fetch(url);
			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			const data = await response.json();
			setData(data);
		} catch (error) {
			setError(error.message);
		} finally {
			setLoading(false);
		}
	}
	return { loading, error, data, fetchData }
}

export default useFetch