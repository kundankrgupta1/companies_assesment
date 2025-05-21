import { useEffect, useState } from "react"
import Form from "./Components/Form"
import UserData from "./Components/userData"

const App = () => {
	const [data, setData] = useState([])
	const [editData, setEditData] = useState(null)

	useEffect(() => {
		const storedUsers = JSON.parse(localStorage.getItem("data")) || []
		setData(storedUsers)
	}, [])

	return (
		<div className="flex justify-center h-full">
			<Form setData={setData} editData={editData} setEditData={setEditData} />
			<div className={`w-full p-2  ${data.length === 0 && 'flex items-center justify-center'} `}>
				{data?.length === 0 ? <p className="text-center text-8xl font-extrabold text-gray-300 rotate-[-15deg]">start adding users...</p> :
					<>
						<div>
							<h1 className="text-2xl font-bold text-gray-800">Users</h1>
						</div>
						<UserData data={data} setData={setData} setEditData={setEditData} />
					</>
				}
			</div>
		</div>
	)
}

export default App
