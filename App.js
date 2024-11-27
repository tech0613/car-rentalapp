import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Rent from "./pages/Rent";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rent/:id" element={<Rent />} />
      </Routes>
    </Router>
  );
}

export default App;