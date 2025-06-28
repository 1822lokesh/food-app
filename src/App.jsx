import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Services from "./components/Services";
import CustomerReview from "./components/CustomerReview";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/services" element={<Services />} />
        <Route path="/reviews" element={<CustomerReview />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
