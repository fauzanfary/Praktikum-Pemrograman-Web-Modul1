// js/app.js
import { formatRupiah, getBadgeConfig, ringkasDataKomoditas, cariKomoditasById } from './utils.js';

const komoditasData = [
    { id: 1, nama: "Beras Medium", harga: 14500, status: "up", selisih: 150, img: "https://cdn-icons-png.flaticon.com/512/3014/3014522.png" },
    { id: 2, nama: "Beras Premium", harga: 16200, status: "down", selisih: 200, img: "https://cdn-icons-png.flaticon.com/512/3014/3014522.png" },
    { id: 3, nama: "Minyak Goreng Curah", harga: 15500, status: "stable", selisih: 0, img: "https://cdn-icons-png.flaticon.com/512/1154/1154378.png" },
    { id: 4, nama: "Cabai Rawit Merah", harga: 75000, status: "up", selisih: 5000, img: "https://cdn-icons-png.flaticon.com/512/1205/1205938.png" },
    { id: 5, nama: "Bawang Merah", harga: 38000, status: "down", selisih: 1000, img: "https://cdn-icons-png.flaticon.com/512/3967/3967115.png" },
    { id: 6, nama: "Daging Sapi Murni", harga: 140000, status: "stable", selisih: 0, img: "https://cdn-icons-png.flaticon.com/512/3143/3143645.png" }
];

const wilayahData = [
    { nama: "Tarakan Tengah", h_kemarin: 14350, h_sekarang: 14500, status: "up", selisih: 150 },
    { nama: "Tarakan Barat", h_kemarin: 14500, h_sekarang: 14500, status: "stable", selisih: 0 },
    { nama: "Tarakan Timur", h_kemarin: 14700, h_sekarang: 14500, status: "down", selisih: 200 },
    { nama: "Tarakan Utara", h_kemarin: 14400, h_sekarang: 14500, status: "up", selisih: 100 }
];

const hetData = [
    { nama: "Beras Setra / Premium", harga: 14900, peraturan: "Peraturan Badan Pangan Nasional Nomor 299 Tahun 2025" },
    { nama: "Beras Medium", harga: 13500, peraturan: "Peraturan Badan Pangan Nasional Nomor 299 Tahun 2025" },
    { nama: "Minyak Goreng MINYAKITA", harga: 15700, peraturan: "Peraturan Menteri Perdagangan No. 18 Tahun 2024" }
];

document.addEventListener('DOMContentLoaded', () => {
    try {
        if (!Array.isArray(komoditasData) || komoditasData.length === 0) {
            throw new Error("Data komoditas gagal dimuat atau kosong!");
        }

        renderKomoditas();
        renderWilayah();
        renderHET();
        setupCarousel();

        console.log("=== OUTPUT TUGAS MODUL 4 ===");
        console.log("Ringkasan Data Sembako:", ringkasDataKomoditas(komoditasData));
        console.log("Wilayah dengan Harga Naik:", wilayahData.filter(w => w.status === "up"));

        // Pengujian Pencarian & Error Handling (Latihan 2)
        try {
            const hasilCari = cariKomoditasById(komoditasData, 4);
            console.log("Hasil Pencarian ID 4 Ditemukan:", hasilCari);
            
            // Pengujian mencari ID yang tidak ada
            cariKomoditasById(komoditasData, 999);
        } catch (errSearch) {
            console.warn("Error Handling Teruji (Expected):", errSearch.message);
        }

        // Latihan 3: Destructuring & Template Literal
        console.log("--- Ringkasan Setiap Komoditas (Latihan 3) ---");
        komoditasData.forEach(({ nama, harga, status }) => {
            console.log(`Komoditas ${nama} saat ini dijual seharga ${formatRupiah(harga)} dengan tren ${status}.`);
        });
        console.log("============================");

    } catch (error) {
        console.error("Terjadi Kesalahan Utama Aplikasi:", error.message);
    }
});

function renderKomoditas() {
    const container = document.getElementById('komoditas-container');
    if (!container) return;
    container.innerHTML = ''; 

    komoditasData.forEach(item => {
        const badge = getBadgeConfig(item.status, item.selisih);
        container.innerHTML += `
            <div class="card">
                <div class="card-img-wrap"><img src="${item.img}" alt="${item.nama}"></div>
                <div class="card-title">${item.nama}</div>
                <div class="card-price">${formatRupiah(item.harga)}<span style="font-size:0.7rem; color:#6b7280; font-weight:normal;">/kg</span></div>
                <div class="badge-container">
                    <div class="badge ${badge.class}">
                        <i class="fa-solid ${badge.icon}"></i> ${badge.text}
                    </div>
                    <span class="badge-note">dibanding harga sebelumnya</span>
                </div>
            </div>
        `;
    });
}

function renderWilayah() {
    const container = document.getElementById('region-container');
    if (!container) return;
    container.innerHTML = '';

    wilayahData.forEach(wilayah => {
        const badge = getBadgeConfig(wilayah.status, wilayah.selisih);
        container.innerHTML += `
            <div class="region-card">
                <div class="region-info">
                    <h4>Kecamatan ${wilayah.nama}</h4>
                    <div class="region-dates">
                        <div>14 Sep 2026 <strong>${formatRupiah(wilayah.h_kemarin)} / kg</strong></div>
                        <div>15 Sep 2026 <strong>${formatRupiah(wilayah.h_sekarang)} / kg</strong></div>
                    </div>
                </div>
                <div class="badge ${badge.class}">
                    <i class="fa-solid ${badge.icon}"></i> ${badge.text === 'Stabil' ? 'Stabil' : badge.text}
                </div>
            </div>
        `;
    });
}

function renderHET() {
    const container = document.getElementById('het-container');
    if (!container) return;
    container.innerHTML = '';

    hetData.forEach(item => {
        container.innerHTML += `
            <tr>
                <td style="font-weight: 500;">${item.nama}</td>
                <td style="color: var(--primary); font-weight: 600;">${formatRupiah(item.harga)}</td>
                <td>${item.peraturan}</td>
            </tr>
        `;
    });
}

function setupCarousel() {
    const track = document.getElementById('komoditas-container');
    const btnPrev = document.querySelector('.prev-btn');
    const btnNext = document.querySelector('.next-btn');

    if (btnNext && track) {
        btnNext.addEventListener('click', () => track.scrollBy({ left: 300, behavior: 'smooth' }));
    }
    if (btnPrev && track) {
        btnPrev.addEventListener('click', () => track.scrollBy({ left: -300, behavior: 'smooth' }));
    }
}