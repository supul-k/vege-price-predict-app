import { Route, Routes } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import HeroSection from "../pages/heroSection/HeroSection";

export default function Dashboard() {
  return (
    <div>
      <div className="w-100">
        <Navbar />
      </div>
      <div className="h-[calc(100%-112px)]">
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/vegetable-list" element={<h1>Vegetable List</h1>} />
      </Routes>
      </div>
    </div>
  );
}
