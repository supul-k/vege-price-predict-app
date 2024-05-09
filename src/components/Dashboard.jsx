import { Route, Routes } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import HeroSection from "../pages/heroSection/HeroSection";
import { ProductPage } from "../pages/productPage/ProductPage";

export default function Dashboard() {
  return (
    <div>
      <div className="w-100">
        <Navbar />
      </div>
      <div className="mt-[4rem]">
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/vegetable-list" element={<ProductPage />} />
        </Routes>
      </div>
    </div>
  );
}
