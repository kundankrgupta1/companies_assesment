import { useState } from "react"
import useFetch from "../Hooks/useFetch"
import Products from "./Products"
import { SERVER } from "../App"


const Home = () => {

	const { data, isLoading, error } = useFetch(`${SERVER}/products/category`)
	
	const [category, setCategory] = useState("")

	return (
		<div className='m-auto max-w-7xl'>
			<div className="m-4 flex gap-3 items-center w-fit">
				{isLoading && <p>Loading...</p>}
				{error && <p>{error}</p>}
				{!isLoading && !error && data &&
					<select onChange={(e) => setCategory(e.target.value)} className="border p-2 rounded" value={category}>
						<option value="" disabled>Select</option>
						{data?.categories && data?.categories.map((category, index) => {
							return (
								<option value={category} key={index} className="capitalize">{category}</option>
							)
						})}
					</select>}
				{category && <button onClick={() => setCategory("")} className="cursor-pointer capitalize font-bold bg-green-300 px-4 py-2">❌ {category}</button>}
			</div>
			<Products category={category} />
		</div>
	)
}

export default Home