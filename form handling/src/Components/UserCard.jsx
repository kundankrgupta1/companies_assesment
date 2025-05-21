import { MdDelete, MdEdit } from "react-icons/md";

const UserCard = ({ id, image, name, email, phoneNumber, gender, skills, setEditData, setData }) => {

	// console.log("image use kar lo", image.slice(5));
	

	const handleDelete = (id) => {
		const data = JSON.parse(localStorage.getItem("data")) || [];
		const updatedData = data.filter((user)=> user.id !== id);
		localStorage.setItem("data", JSON.stringify(updatedData));
		setData(updatedData);		
	}

	return (
		<div
			className="border flex items-start gap-2 p-2 rounded-xl shadow-md bg-white w-full h-fit max-w-md mx-auto"
			style={{ boxShadow: "rgba(0, 0, 0, 0.12) 0px 2px 4px, rgba(0, 0, 0, 0.08) 0px 2px 4px" }}
		>
			<div className="flex flex-col items-center gap-1">
				<img
					src={image ? image.slice(5) : "https://tinyurl.com/5paj2hrp"}
					alt={name}
					className="w-18 h-18 object-cover rounded-full border border-gray-300"
				/>
				<div className="flex flex-col gap-1">
					<button
						className="cursor-pointer text-black rounded-sm text-xs flex items-center justify-center gap-1  px-1 hover:bg-blue-500 hover:text-white border border-blue-500"
						onClick={() => setEditData({id, image, name, email, phoneNumber, gender, skills})}
					><MdEdit />Edit</button>
					<button
						className="cursor-pointer text-black rounded-sm text-xs flex items-center justify-center gap-1  px-1 hover:bg-red-500 hover:text-white border border-red-500"
						onClick={() => { handleDelete(id) }}
					><MdDelete />Delete</button>
				</div>
			</div>
			<div className="space-y-1">
				<h3 className="text-lg font-semibold text-gray-800">{name}</h3>
				<p className="text-xs text-gray-600">📧 {email}</p>
				<p className="text-xs text-gray-600 flex items-center gap-8">📞 {phoneNumber}
					<span className="capitalize">⚥ {gender}</span></p>
				<div className="text-xs text-gray-600">
					🛠 Skills:{" "}
					{skills?.length > 0 ? (
						<span className="flex flex-wrap gap-1 mt-1">
							{skills.map((skill, ind) => (
								<span
									key={ind}
									className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full text-xs"
								>
									{skill}
								</span>
							))}
						</span>
					) : (
						<span>None</span>
					)}
				</div>
			</div>
		</div>
	);
};

export default UserCard;
