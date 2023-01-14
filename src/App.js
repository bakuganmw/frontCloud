import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ReservationsPage from "./pages/reservations";
import SignIn from "./components/SignIn/indeks";
import Home from "./pages/indeks";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} exact />
        <Route path="/home" element={<Home/>} exact />
        <Route path="/home/reservations" element={<ReservationsPage />} exact />
      </Routes>
    </Router>
  );
}

export default App;
