import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Courses from "./pages/Courses/Courses";
import CourseDetails from "./pages/Details/Details";
import Cart from "./pages/Cart/Cart";
import OrdersTable from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Courses />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/dashboad" element={<OrdersTable/>}/>
            </Routes>
    </Router>
  );
}

export default App;