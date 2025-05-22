import { useParams } from "react-router-dom";
import useFetch from "../Hooks/useFetch";
import { SERVER } from "../App";

const SingleItem = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useFetch(`${SERVER}/products/${id}`);

  const product = data?.product;
  const discountedPrice = product?.discount
    ? (product.price - (product.price * product.discount) / 100).toFixed(2)
    : product?.price;

  if (isLoading)
    return (
      <div className="h-screen flex justify-center items-center">
        <h1 className="text-2xl font-semibold text-gray-600">Loading...</h1>
      </div>
    );
  if (error) return <h1 className="text-red-500 text-center">{error}</h1>;

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Back Button */}
      <button
        onClick={() => window.history.back()}
        className="mb-6 inline-flex items-center text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md font-semibold transition"
      >
        ⬅ Back
      </button>

      {/* Product Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white p-6 rounded-xl shadow-md">
        {/* Image */}
        <div className="flex justify-center items-center">
          <img
            src={product?.image}
            alt={product?.title}
            className="w-full max-w-sm object-contain rounded-xl"
          />
        </div>

        {/* Info */}
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold text-gray-800">{product?.title}</h1>
          <p className="text-gray-500 text-sm capitalize">
            <span className="font-semibold text-gray-600">Brand:</span> {product?.brand} |{" "}
            <span className="font-semibold text-gray-600">Model:</span> {product?.model} |{" "}
            <span className="font-semibold text-gray-600">Color:</span> {product?.color}
          </p>

          <div className="text-lg">
            {product?.discount ? (
              <div className="flex items-center gap-2">
                <span className="text-green-600 font-bold text-2xl">₹{discountedPrice}</span>
                <span className="line-through text-gray-400 text-lg">₹{product.price}</span>
                <span className="text-red-500 font-semibold text-sm">
                  {product.discount}% OFF
                </span>
              </div>
            ) : (
              <span className="text-gray-800 font-bold text-2xl">₹{product.price}</span>
            )}
          </div>

          <p className="text-gray-700 leading-relaxed">{product?.description}</p>

          <p className="text-sm text-gray-500">
            <span className="font-medium">Category:</span> {product?.category}
          </p>

          <button className="w-fit bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 mt-4 rounded-md transition">
            🛒 Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleItem;
