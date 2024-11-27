import cars from "../mockData/cars.json"; // Import mock data
import { Link } from "react-router-dom"; // Import Link for navigation

const Home = () => (
  <div className="container mx-auto p-4">
    <h2 className="text-3xl font-bold mb-6 text-center">Available Cars</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cars.map((car) => (
        <div
          key={car.id}
          className="border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <img
            src={car.image}
            alt={car.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold">{car.name}</h3>
            <p className="text-gray-600">Type: {car.type}</p>
            <p className="text-green-600 font-bold">${car.price}/day</p>
            <Link
              to={/rent/${car.id}}
              className="block bg-blue-500 text-white text-center mt-4 py-2 rounded-md hover:bg-blue-600"
            >
              Rent
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Home;