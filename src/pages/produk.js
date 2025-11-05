import React from "react";
import { useNavigate } from "react-router-dom";

function Produk() {
  const navigate = useNavigate();
  function goTambahData() {
    navigate('/produk/add');
  }
  return (
    <div>
      <button onClick={goTambahData}>Tambah Data</button>
      <h1>Selamat datang di halaman produk</h1>
    </div>
  );
}

export default Produk;
