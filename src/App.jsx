import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import CareerPage from "./pages/CareerPage";
import ServicePage from "./pages/ServicePage";
import ProductPage from "./pages/ProductPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="product/:id" element={<ProductDetailPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
