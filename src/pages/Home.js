import React from "react";

function Home() {
  return (
<body> 
    <div class="container mt-5 text-center">
        <h1 class="fw-bold">Selamat Datang di PT Era Jaya</h1>
        <p class="lead">Distributor Alat Tulis Kantor & Perlengkapan Percetakan</p>
        <a href="#layanan" class="btn btn-primary">Lihat Layanan</a>
    </div>

    
    <section class="container mt-5" id="layanan">
        <h2 class="text-center mb-4">Layanan Kami</h2>
        <div class="row">
            <div class="col-md-4 mb-3">
                <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">Distributor ATK</h5>
                        <p class="card-text">Menyediakan berbagai macam alat tulis kantor untuk kebutuhan usaha.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-3">
                <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">Perlengkapan Percetakan</h5>
                        <p class="card-text">Tinta, kertas khusus, alat potong, laminating, dan produk percetakan lainnya.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-3">
                <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">Pengelolaan Stok</h5>
                        <p class="card-text">Pengadaan dan distribusi barang secara terjadwal untuk kebutuhan toko.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    
    <section class="container mt-5" id="tentang">
        <h2 class="text-center mb-4">Tentang Kami</h2>
        <p class="text-center">PT Era Jaya adalah perusahaan distributor ATK dan perlengkapan percetakan yang berkomitmen menyediakan produk berkualitas untuk seluruh pelanggan di Indonesia.</p>
    </section>

   
    <footer class="bg-dark text-white text-center py-3 mt-5" id="kontak">
        <p class="mb-0">&copy; 2025 PT Era Jaya. All Rights Reserved.</p>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
  );
}

export default Home;
