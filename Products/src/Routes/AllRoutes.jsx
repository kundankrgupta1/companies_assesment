import { Route, Routes } from 'react-router-dom'
import SingleItem from '../Components/SingleItem'
import Home from '../Components/Home'

const AllRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/:id" element={<SingleItem />} />
		</Routes>
	)
}

export default AllRoutes