import logo from "./logo.svg";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Apply from "./components/pages/Apply";
import Checkout from "./components/pages/Checkout";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import Locations from "./components/pages/Locations";
import Order from "./components/pages/Order";
import ErrorPage from "./components/pages/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/order" element={<Order />} />
        <Route path="/order" element={<Apply />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
