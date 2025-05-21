import UserCard from "./userCard";

const UserData = ({ data, setEditData, setData }) => {

	return (
		<div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
			{data && data.map((user, ind) => {
				return (
					<UserCard {...user} key={ind}  setEditData={setEditData} setData={setData} />
				)
			})}
		</div>
	)
}

export default UserData
