import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { Footer } from "./components/Footer";
import Loader from "./components/Loader";
import ShopCategorySlider from "./components/ShopCategorySlider";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Loader />
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop-category-slider" element={<ShopCategorySlider />} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
