import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/indeks";
import ReservationsPage from "./pages/reservations";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} exact/>
        <Route path="/reservations" element={<ReservationsPage/>} exact/>
      </Routes>
    </Router>
  );
}

export default App;
