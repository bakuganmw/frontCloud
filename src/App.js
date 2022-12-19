import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/indeks";
import ReservationsPage from "./pages/reservations";
import SignIn from "./components/SignIn/indeks";
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<SignIn/>} exact/>
        <Route path="/Home" element={<Home/>} exact/>
        <Route path="/Home/reservations" element={<ReservationsPage/>} exact/>
      </Routes>
    </Router>
  );
}

export default App;
