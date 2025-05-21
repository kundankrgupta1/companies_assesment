import { useEffect, useRef, useState } from "react";
import { FaPhoneAlt, FaRegUser } from "react-icons/fa";
import { MdAlternateEmail, MdDelete } from "react-icons/md";
import { PiGenderIntersexBold } from "react-icons/pi";
import { SiSkillshare } from "react-icons/si";

const Form = ({ setData, editData, setEditData }) => {

	const [image, setImage] = useState(null);
	const [name, setName] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [email, setEmail] = useState("");
	const [gender, setGender] = useState("");
	const [skills, setSkills] = useState([]);
	const [message, setMessage] = useState("");
	const [error, setError] = useState("");
	const imageRef = useRef(null);

	const handleCheckboxChange = (e) => {
		const { value, checked } = e.target;
		if (checked) {
			setSkills([...skills, value]);
		} else {
			setSkills(skills.filter((skill) => skill !== value));
		}
	}

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!imageRef.current.files[0]) {
			setError("Please upload an image");
			setTimeout(() => setError(""), 2000);
			return;
		}

		if (!name || !phoneNumber || !email || !gender) {
			setError("Please fill all the fields");
			setTimeout(() => setError(""), 2000);
			return;
		}

		if (skills.length < 3) {
			setError("Please select at least 3 skill");
			setTimeout(() => setError(""), 2000);
			return;
		}

		const formData = {
			id: Date.now(),
			image: "blob:https://in.bmscdn.com/iedb/artist/images/website/poster/large/akshay-kumar-94-1681713982.jpg",
			name,
			phoneNumber,
			email,
			gender,
			skills
		};

		console.log("formData", formData);


		const data = JSON.parse(localStorage.getItem("data")) || [];

		localStorage.setItem("data", JSON.stringify([...data, formData]));

		setData([...data, formData]);

		if (editData !== null) {
			const updatedData = data.map((user) => {
				if (user.id === editData.id) {
					return formData;
				}
				return user;
			});
			setData(updatedData);
			localStorage.setItem("data", JSON.stringify(updatedData));
			setEditData(null);
			setImage(null);
			setName("");
			setEmail("");
			setPhoneNumber("");
			setGender("");
			setSkills([]);
			setMessage("Form updated successfully");
			setTimeout(() => setMessage(""), 2000);
			return;
		}

		setImage(null);
		setName("");
		setEmail("");
		setPhoneNumber("");
		setGender("");
		setSkills([]);

		setMessage("Form submitted successfully");
		setTimeout(() => setMessage(""), 2000);

	}

	useEffect(() => {
		if (editData !== null) {
			setImage(editData.image);
			setName(editData.name);
			setPhoneNumber(editData.phoneNumber);
			setEmail(editData.email);
			setGender(editData.gender);
			setSkills(editData.skills);
		}
	}, [editData])

	return (
		<form onSubmit={handleSubmit} className="max-w-[400px] w-fit border p-4">

			<img src="blob:http://localhost:5173/5080ed61-c957-44f9-a730-282a966e35b6" alt="" />

			<div>
				<div
					onClick={() => imageRef.current.click()}
					className="m-auto flex items-center justify-center w-20 h-20 rounded-full overflow-hidden"
				>
					{
						image ? (
							<img src={image} alt="uploaded_image" />
						) : (
							<img src="https://tinyurl.com/5paj2hrp"
								alt="default" />
						)
					}
					<input type="file"
						className="hidden"
						ref={imageRef}
						onChange={() => setImage(URL.createObjectURL(imageRef.current.files[0]))}
					/>
				</div>
				<div className="m-auto w-30 -mt-6">
					{image && <button onClick={() => setImage(null)} className="cursor-pointer hover:text-red-500 text-3xl float-right"><MdDelete /></button>}
				</div>
			</div>
			<div className="mb-4 flex flex-col items-start">
				<label htmlFor="name" className="font-semibold text-md">Name: <span className="text-red-600">*</span> </label>
				<span className="text-gray-400 text-sm italic">Enter your full name:</span>
				<div className="w-full border-blue-500 border flex items-center rounded-sm">
					<span className="bg-blue-500 p-2 text-white"><FaRegUser /></span>
					<input
						type="text"
						name="name"
						placeholder="Name"
						className="w-full p-1 border-0 outline-none rounded-sm"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
			</div>
			<div className="mb-4 flex flex-col items-start">
				<label htmlFor="name" className="font-semibold text-md">Email: <span className="text-red-600">*</span></label>
				<span className="text-gray-400 text-sm italic">Enter your Email:</span>
				<div className="w-full border-blue-500 border flex items-center rounded-sm">
					<span className="bg-blue-500 p-2 text-white"><MdAlternateEmail /></span>
					<input
						placeholder="Email"
						type="email"
						name="email"
						className="w-full p-1 border-0 outline-none rounded-sm"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
			</div>
			<div className="mb-4 flex flex-col items-start">
				<label htmlFor="phone" className="font-semibold text-md">Phone: <span className="text-red-600">*</span></label>
				<span className="text-gray-400 text-sm italic">Enter your Phone:</span>
				<div className="w-full border-blue-500 border flex items-center rounded-sm">
					<span className="bg-blue-500 p-2 text-white"><FaPhoneAlt /></span>
					<input
						placeholder="Phone"
						type="text"
						name="phone"

						className="w-full p-1 border-0 outline-none rounded-sm"
						value={phoneNumber}
						onChange={(e) => setPhoneNumber(e.target.value)}
					/>
				</div>
			</div>
			<div className="mb-4 flex flex-col items-start">
				<label htmlFor="phone" className="font-semibold text-md">Gender: <span className="text-red-600">*</span></label>
				<span className="text-gray-400 text-sm italic">Select your Gender:</span>
				<div className="w-full border-blue-500 border flex items-center rounded-sm">
					<span className="bg-blue-500 p-2 text-white"><PiGenderIntersexBold /></span>
					{["Male", "Female", "Other"].map((el, index) => (
						<label key={index} className="w-full flex items-center gap-2 px-2">
							<span>{el}</span>
							<input
								type="radio"
								name="gender"
								value={el}
								checked={gender === el}
								onChange={(e) => setGender(e.target.value)}
							/>
						</label>
					))}
				</div>
			</div>
			<div className="mb-4 flex flex-col items-start">
				<label htmlFor="skills" className="font-semibold text-md">Skills: <span className="text-red-600">*</span></label>
				<div>
					<span className="text-gray-400 text-sm italic">Select your skills (min.3):</span>
					{skills.length > 0 && <button
						className="bg-red-500 px-1 text-white cursor-pointer rounded-xs text-xs"
						onClick={() => setSkills([])}
					>
						reset
					</button>}
				</div>
				<div className="border border-blue-500 flex rounded-sm">
					<span className="bg-blue-500 px-3 flex items-center">
						<SiSkillshare className="text-white h-full" />
					</span>
					<div className="flex flex-wrap items-center">
						{["React.js", "Express.js", "Node.js", "MongoDB", "Tailwind CSS", "JavaScript", "Python", "Java", "C++", "HTML5", "CSS3"].map((skill, index) => (
							<label key={index} className="flex items-center gap-2 px-2 py-1">
								<span>{skill}</span>
								<input
									type="checkbox"
									name="skill"
									value={skill}
									checked={skills.includes(skill)}
									onChange={handleCheckboxChange}
								/>
							</label>
						))}
					</div>
				</div>
			</div>
			{message && <p className="text-green-600">{message}</p>}
			{error && <p className="text-red-600">{error}</p>}
			<button className="bg-blue-500 px-4 py-2 text-white rounded-sm">{editData !== null ? "Update" : "Submit"}</button>
		</form>
	)
}

export default Form