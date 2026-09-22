// js/app.js

// 1. IMPORT MODUL DARI utils.js
import { formatRupiah, getBadgeConfig, ringkasDataKomoditas, cariKomoditasById } from './utils.js';

// 2. DATA DUMMY
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

// Data Berita (Mock Data)
const beritaData = [
    { judul: "Stok Beras Tarakan Aman Hingga Akhir Tahun", tanggal: "16 Sep 2026", img: "https://images.unsplash.com/photo-1586201375761-83865001e8ac?w=400&q=80" },
    { judul: "Pemkot Gelar Pasar Murah di Tarakan Barat", tanggal: "15 Sep 2026", img: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&q=80" },
    { judul: "Harga Cabai Rawit Merangkak Naik", tanggal: "14 Sep 2026", img: "https://images.unsplash.com/photo-1596556488703-911e860bc005?w=400&q=80" },
    { judul: "Distribusi Minyakita Kembali Normal", tanggal: "12 Sep 2026", img: "https://images.unsplash.com/photo-1627485937980-221c88ac04f9?w=400&q=80" }
];

// 3. LOGIKA PRAKTIKUM MODUL 4 (Pengolahan Array & Error Handling)
try {
    // 1. Tampilkan seluruh array menggunakan tabel
    console.log("DATA KOMODITAS SEMBAKO");
    console.table(komoditasData);

    // 2. Tampilkan hasil filter (Penurunan Harga) menggunakan tabel
    const komoditasTurun = komoditasData.filter(item => item.status === 'down');
    console.log("KOMODITAS MENGALAMI PENURUNAN HARGA");
    console.table(komoditasTurun);

    // 3. Tampilkan object statistik menggunakan tabel
    const statistikSembako = ringkasDataKomoditas(komoditasData);
    console.log("STATISTIK HARGA SEMBAKO KESELURUHAN");
    console.table(statistikSembako);

    // 4. Pencarian ID menggunakan log biasa (seperti foto pertama)
    const cabaiRawit = cariKomoditasById(komoditasData, 4);
    console.log("PENCARIAN ID 4");
    console.log(cabaiRawit);

    // 5. Destructuring dan Template Literal untuk ringkasan kalimat
    console.log("RINGKASAN DATA KOMODITAS");
    komoditasData.forEach(({ nama, harga, status }) => {
        // Menggunakan formatRupiah yang sudah kamu import
        console.log(`Komoditas "${nama}" dijual seharga ${formatRupiah(harga)} dengan tren ${status}.`);
    });

} catch (error) {
    console.error("Terjadi kegagalan saat memproses data sembako:", error.message);
}

// 4. RENDER UI KE DALAM HTML
document.addEventListener('DOMContentLoaded', () => {
    renderKomoditas();
    renderWilayah();
    renderHET();

    // 1. Panggil fungsi render berita yang baru
    renderBerita();

    // 2. Gunakan fungsi setupSlider untuk kedua carousel
    // (Pastikan tombol di HTML sudah diberi ID prev-komoditas & next-komoditas)
    setupSlider('komoditas-container', 'prev-komoditas', 'next-komoditas');
    setupSlider('berita-container', 'prev-berita', 'next-berita');
});




function renderKomoditas() {
    const container = document.getElementById('komoditas-container');
    container.innerHTML = '';

    komoditasData.forEach(item => {
        const badge = getBadgeConfig(item.status, item.selisih);
        const html = `
            <div class="card">
                <div class="card-img-wrap"><img src="${item.img}" alt="${item.nama}"></div>
                <div class="card-title">${item.nama}</div>
                <div class="card-price">${formatRupiah(item.harga)}<span style="font-size:0.85rem; color:var(--text-muted); font-weight:500; margin-left:4px;">/kg</span></div>
                <div class="badge-container">
                    <div class="badge ${badge.class}">
                        <i class="fa-solid ${badge.icon}"></i> ${badge.text}
                    </div>
                    <span class="badge-note">dibanding harga sebelumnya</span>
                </div>
            </div>
        `;
        container.innerHTML += html;
    });
}

function renderWilayah() {
    const container = document.getElementById('region-container');
    container.innerHTML = '';

    wilayahData.forEach(wilayah => {
        const badge = getBadgeConfig(wilayah.status, wilayah.selisih);
        const html = `
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
        container.innerHTML += html;
    });
}

// Fungsi Render Berita
function renderBerita() {
    const container = document.getElementById('berita-container');
    container.innerHTML = '';

    beritaData.forEach(item => {
        // Kita menggunakan class 'card' yang sama agar desainnya konsisten
        const html = `
            <div class="card" style="min-width: 300px; text-align: left; align-items: flex-start;">
                <div class="card-img-wrap" style="height: 150px; width: 100%; border-radius: 8px; overflow: hidden; margin-bottom: 15px;">
                    <img src="${item.img}" alt="Berita" style="width: 100%; height: 100%; object-fit: cover;">
                </div>
                <div style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 8px;">${item.tanggal}</div>
                <div class="card-title" style="font-size: 1.1rem; line-height: 1.4;">${item.judul}</div>
            </div>
        `;
        container.innerHTML += html;
    });
}

function renderHET() {
    const container = document.getElementById('het-container');
    container.innerHTML = '';

    hetData.forEach(item => {
        const html = `
            <tr>
                <td style="font-weight: 500;">${item.nama}</td>
                <td style="color: var(--primary); font-weight: 600;">${formatRupiah(item.harga)}</td>
                <td>${item.peraturan}</td>
            </tr>
        `;
        container.innerHTML += html;
    });
}

// Fungsi Scroll Dinamis untuk segala jenis Carousel
function setupSlider(trackId, prevBtnId, nextBtnId) {
    const track = document.getElementById(trackId);
    const btnPrev = document.getElementById(prevBtnId);
    const btnNext = document.getElementById(nextBtnId);

    if (track && btnPrev && btnNext) {
        btnNext.addEventListener('click', () => {
            track.scrollBy({ left: 320, behavior: 'smooth' });
        });

        btnPrev.addEventListener('click', () => {
            track.scrollBy({ left: -320, behavior: 'smooth' });
        });
    }
}