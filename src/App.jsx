import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
