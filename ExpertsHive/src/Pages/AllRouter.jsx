import React from "react";
import Registration from '../Components/Registration';
import { Route, Routes } from "react-router-dom";

import Home from "./Home";
import Payment from "../Components/payment";
import WomenSaloon from "./ProductPages/WomenSaloon";
import MenSaloon from "./ProductPages/MensSaloon";
import CartPage from "../Pages/ProductPages/CartPage";

export default function AllRoute() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/" element={<h1>Home</h1>}></Route>
      <Route path="/" element={<h1>Home</h1>}></Route>
      <Route path="/register" element={<Registration />} />
      <Route path="/womensaloon" element={<WomenSaloon />}></Route>
      <Route path="/mensaloon" element={<MenSaloon />}></Route>
      <Route path="/womensaloon" element={<WomenSaloon />}></Route>
      <Route path="/cart" element={<CartPage />} />
      <Route path="/cart/payment" element={<Payment />}></Route>
    </Routes>
  );
}
