import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Courses from "./pages/Courses/Courses";
import CourseDetails from "./pages/Details/Details";
import Cart from "./pages/Cart/Cart";
import OrdersTable from "./pages/Dashboard/Dashboard";
import Components from "./Page/mainpage";
import LandingPage from "./LandingPage/LandingPage";
// import Testimonials from "./LandingPage/Testimonials/Testimonials";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/course" element={<Components/>}/>
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/dashboad" element={<OrdersTable/>}/>
            </Routes>
    </Router>
  );
}

export default App;