// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Components/Home/Home";
import Navbar from "./Components/navbar/Navbar";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Blog from "./Components/blogs/blog";
import Footer from "./Components/Footer/Footer";
import Gallery from "./Components/Gallery/gallery";
// import ViewProduct from "./Components/viewProducts/ViewProducts";
import WhatsAppButton from "./Components/Whatsapp/WhatsAppButton";
import Product from "./Components/productpage/Product";
import CallButton from "./Components/Calls/CallButton";
import ScrollToTop from "./Components/scroll/ScrolltoTop";
// import Product from "./Components/Products/product";


function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop/>
      <Routes>
        {/* MAIN */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/product" element={<Product/>}/> */}
        <Route path="/product/:category" element={<Product />} />
      </Routes>
      <WhatsAppButton />
      <CallButton/>
      <Footer />
    </Router>
  );
}

export default App;
