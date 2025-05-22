import React, { useEffect, useState } from 'react'
import useFetch from '../Hooks/useFetch';
import ProductCard from './ProductCard';
import { SERVER } from '../App';
import { IoCloseCircleOutline } from "react-icons/io5";

const Products = ({ category }) => {
	const [limit, setLimit] = useState("150");
	const [search, setSearch] = useState("");
	const [page, setPage] = useState(1);
	const { data, isLoading, error } = useFetch(
		category === "" ? `${SERVER}/products?page=${page}&limit=${Number(limit)}` : `${SERVER}/products/category?type=${category}`
	);

	let filteredData = data?.products?.filter((product) => Object.values(product).some(value => value.toString().toLowerCase().includes(search.toLowerCase())));	

	if (isLoading) return <h1 className='text-center text-2xl h-screen flex justify-center items-center'>Loading...</h1>
	if (error) return <h1>{error}</h1>
	return (
		<div>
			<div className="mb-6 flex flex-wrap items-center justify-center gap-6">
				{/* search */}
				<div className='flex items-center border border-gray-300 px-4 py-[6px] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
					<input type="text" name="search" value={search} id="" onChange={(e) => setSearch(e.target.value)} placeholder='Search anything...' className='outline-none' />
					{search && <IoCloseCircleOutline size={18} className='cursor-pointer text-red-600' onClick={() => setSearch('')} title='Clear' />}
				</div>
				{/* Limit Selector */}
				<select
					onChange={(e) => { setLimit(e.target.value); setPage(1) }}
					className="border border-gray-300 px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
				>
					<option value="150">Select Limit</option>
					<option value="16">16</option>
					<option value="32">32</option>
					<option value="64">64</option>
				</select>

				{/* Pagination Controls */}
				{limit < 150 ? <div className="flex items-center gap-2">
					<button
						className="px-3 py-1 rounded-md bg-gray-700 text-white hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed"
						onClick={() => setPage(page - 1)}
						disabled={page <= 1}
					>
						Prev
					</button>

					<span>{page}</span>

					<button
						className="px-3 py-1 rounded-md bg-gray-700 text-white hover:bg-gray-800"
						onClick={() => setPage(page + 1)}
					>
						Next
					</button>
				</div> : <p className='text-red-500 font-bold'>modify product limit to get pagination</p>}
			</div>

			<div className="m-auto max-w-7xl grid grid-cols-4 gap-4">
				{filteredData && filteredData.map((product, index) => {
					return (
						<ProductCard {...product} key={index} />
					)
				})}
				{filteredData?.length === 0 && <h1 className='text-center text-2xl h-screen flex justify-center items-center'>No Product Found</h1>}
			</div>
		</div>
	)
}

export default Products
