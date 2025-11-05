import React from "react";

function Contac() {
  return (
<body class="bg-light">
    <div class="container py-5">
        <div class="row justify-content-center">
            <div class="col-md-7">
                <div class="card shadow-lg border-0 rounded-4">
                    <div class="card-body p-4 p-md-5">
                        <h3 class="text-center mb-4 fw-bold">Hubungi Kami</h3>
                        <form>
                            <div class="mb-3">
                                <label class="form-label">Nama Lengkap</label>
                                <input type="text" class="form-control" placeholder="Masukkan nama anda" />
                            </div>

                            <div class="mb-3">
                                <label class="form-label">Email</label>
                                <input type="email" class="form-control" placeholder="nama@email.com" />
                            </div>

                            <div class="mb-3">
                                <label class="form-label">Subjek</label>
                                <input type="text" class="form-control" placeholder="Masukkan subjek pesan" />
                            </div>

                            <div class="mb-3">
                                <label class="form-label">Pesan</label>
                                <textarea class="form-control" rows="5" placeholder="Tulis pesan anda"></textarea>
                            </div>

                            <button type="submit" class="btn btn-primary w-100 py-2 fw-semibold">
                                Kirim Pesan
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
  );
}

export default Contac;
