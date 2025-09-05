import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import CareerPage from "./pages/CareerPage";
import ServicePage from "./pages/ServicePage";
import ProductPage from "./pages/ProductPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import AboutPage from "./pages/AboutPage";
import MarketPage from "./pages/MarketPage";
import EventPage from "./components/Event";
import ProcurementPage from "./components/Procurement";
import NewsPage from "./components/News";
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
        <Route path="/about" element={<AboutPage />} />
        <Route path="/market" element={<MarketPage />} />
        <Route path="/event" element={<EventPage />} />
        <Route path="/procurement" element={<ProcurementPage />} />
        <Route path="/news" element={<NewsPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
