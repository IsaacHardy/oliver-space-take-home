import { Routes, Route, Navigate } from "react-router-dom";

import Sidebar from "../Components/Sidebar";

import Home from "../Pages/Home";
import Products from "../Pages/Products";
import Product from "../Pages/Product";

export default function Main() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-white">
        <div className="p-10 mt-5 md:px-10 mx-auto w-full -m-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route exact path="/products" element={<Products />} />
            <Route exact path="/products/:id" element={<Product />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </>
  );
}
