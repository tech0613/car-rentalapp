import { useParams } from "react-router-dom";
import cars from "../mockData/cars.json";

const Rent = () => {
  const { id } = useParams();
  const car = cars.find((c) => c.id === parseInt(id));

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Rent {car.name}</h2>
      <div className="max-w-md mx-auto border rounded-lg shadow-md overflow-hidden">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-bold">{car.name}</h3>
          <p className="text-gray-600">Type: {car.type}</p>
          <p className="text-green-600 font-bold">${car.price}/day</p>
          <button
            className="block bg-green-500 text-white text-center mt-4 py-2 rounded-md hover:bg-green-600 w-full"
            onClick={() => alert("Payment Successful!")}
          >
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rent;