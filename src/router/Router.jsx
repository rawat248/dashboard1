import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Dashboard from "../scenes/dashboard";
import Product from "../scenes/product";
import Income from "../scenes/income";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<App />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/product" element={<Product/>}/>
            <Route path="/income" element={<Income/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
