import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ id, title, price, discount, category, image, brand, model, color }) => {
	const discountedPrice = discount ? (price - (price * discount) / 100).toFixed(0) : price;

	return (
		<Link
			to={`/${id}`}
			className="group p-4 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out w-full max-w-xs"
		>
			<div className="relative">
				<img
					src={image}
					alt={title}
					className="h-48 w-full object-contain mx-auto"
				/>
				{discount > 0 && (
					<span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
						{discount}% OFF
					</span>
				)}
			</div>

			<div className="mt-3 space-y-1">
				<p className="text-sm text-gray-600 truncate">{brand} • {model}</p>
				<h3 className="text-md font-medium text-gray-800 truncate">{title}</h3>

				<p className="text-sm text-gray-500 capitalize">{category} • {color}</p>

				<div className="flex items-center gap-2 mt-1">
					{discount > 0 ? (
						<>
							<span className="text-lg font-semibold text-green-600">₹{discountedPrice}</span>
							<span className="text-sm line-through text-gray-400">₹{price}</span>
						</>
					) : (
						<span className="text-lg font-semibold text-gray-800">₹{price}</span>
					)}
				</div>
			</div>
		</Link>
	);
};

export default ProductCard;
