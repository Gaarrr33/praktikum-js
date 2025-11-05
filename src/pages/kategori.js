import React from "react";

function Kategori() {
  return (
    <div>
      <h1>Selamat datang di halaman kategori</h1>

<div class="container mt-4">
  <h1 class="text-center text-primary text-uppercase">Pengumuman Kampus</h1>
  <p class="text-center text-muted">Update informasi terbaru untuk mahasiswa</p>
  <p class="bg-warning text-dark p-3 rounded">
     Ujian Tengah Semester akan dimulai tanggal <b>10 Oktober 2025</b>.
  </p>
  <p class="bg-success text-white p-3 rounded">
     Pendaftaran seminar proposal dibuka mulai <b>1 September 2025</b>.
  </p>
  <p class="bg-danger text-white p-3 rounded text-end">
     Kuliah libur pada hari <b>SABTU DAN MINGGU</b>.
  </p>

</div>
    </div>
  );
}

export default Kategori;
