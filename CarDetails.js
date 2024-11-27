import { useParams } from "react-router-dom";
import cars from "../mockData/cars.json";

const CarDetails = () => {
  const { id } = useParams();
  const car = cars.find((c) => c.id === parseInt(id));

  if (!car) {
    return <h2>Car not found</h2>;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold">{car.name}</h2>
      <img src={car.image} alt={car.name} className="w-full h-64 object-cover" />
      <p>Type: {car.type}</p>
      <p>Price: ${car.price}/day</p>
    </div>
  );
};

export default CarDetails;
