import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Produk from "../pages/Produk";
import Kategori from "../pages/Kategori";
import Contac from "../pages/Contac";
import Add from "../pages/produk/Add";
function Routing() {
    return(
        <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Produk" element={<Produk />} />
        <Route path="/Produk/add" element={<Add/>} />
        <Route path="/Kategori" element={<Kategori/>}/>
        <Route path="/Contac" element={<Contac />} />
      </Routes>
    );
}
export default Routing;