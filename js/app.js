// js/app.js
import { formatRupiah, getBadgeConfig } from './utils.js';

// ==========================================
// 1. DATA DUMMY
// ==========================================
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

const beritaData = [
    { judul: "Stok Beras Tarakan Aman Hingga Akhir Tahun", tanggal: "16 Sep 2026", img: "https://images.unsplash.com/photo-1586201375761-83865001e8ac?w=400&q=80" },
    { judul: "Pemkot Gelar Pasar Murah di Tarakan Barat", tanggal: "15 Sep 2026", img: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&q=80" },
    { judul: "Harga Cabai Rawit Merangkak Naik", tanggal: "14 Sep 2026", img: "https://images.unsplash.com/photo-1596556488703-911e860bc005?w=400&q=80" },
    { judul: "Distribusi Minyakita Kembali Normal", tanggal: "12 Sep 2026", img: "https://images.unsplash.com/photo-1627485937980-221c88ac04f9?w=400&q=80" }
];

const inventaris = [
    { id: 1, nama: "Beras Medium", kategori: "Bahan Pokok", jumlah: "14.500 /kg", kondisi: "Harga Naik" },
    { id: 2, nama: "Minyak Goreng MINYAKITA", kategori: "Minyak", jumlah: "15.700 /L", kondisi: "Harga Turun" },
    { id: 3, nama: "Cabai Rawit Merah", kategori: "Bumbu Dapur", jumlah: "75.000 /kg", kondisi: "Harga Naik" },
    { id: 4, nama: "Timbangan Digital Pasar", kategori: "Alat Ukur Pasar", jumlah: "5 Unit", kondisi: "Harga Stabil" }
];

let currentFilter = 'Semua';
let currentSearch = ''; 
let currentLimit = parseInt(localStorage.getItem('itemsPerPage')) || 5;

// ==========================================
// 2. INITIALIZATION ON DOMContentLoaded
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // Render Komponen Utama
    renderKomoditas();
    renderWilayah();
    renderHET();
    renderBerita();

    // Modul 5: DOM, Event, Web Storage
    renderItems();            
    initFilterEvents();       
    initThemePreference();    
    initLatihanModul5();      

    // Modul 6: Form & Validasi Client-Side
    initFormValidasi();

    // Slider
    setupSlider('komoditas-container', 'prev-komoditas', 'next-komoditas');
    setupSlider('berita-container', 'prev-berita', 'next-berita');
});

// ==========================================
// 3. FUNGSI MODUL 5 (DOM & STORAGE)
// ==========================================
function renderItems() {
    const container = document.querySelector('#daftar-alat');
    if (!container) return;

    let filtered = inventaris.filter(item => {
        const matchFilter = (currentFilter === 'Semua') || (item.kondisi === currentFilter);
        const matchSearch = item.nama.toLowerCase().includes(currentSearch.toLowerCase());
        return matchFilter && matchSearch;
    });

    const limitedItems = filtered.slice(0, currentLimit);
    container.replaceChildren();

    if (limitedItems.length === 0) {
        const emptyMsg = document.createElement('p');
        emptyMsg.textContent = 'Tidak ada data komoditas yang sesuai.';
        emptyMsg.style.gridColumn = '1 / -1';
        container.append(emptyMsg);
        return;
    }

    limitedItems.forEach(item => {
        const article = document.createElement('article');
        article.className = 'card';
        article.style.padding = '18px';

        const title = document.createElement('h3');
        title.className = 'card-title';
        title.style.fontSize = '1.1rem';
        title.textContent = item.nama;

        const info = document.createElement('p');
        info.style.color = 'var(--text-muted)';
        info.textContent = `${item.kategori} | ${item.jumlah}`;

        const badge = document.createElement('div');
        let badgeClass = 'badge ';
        if (item.kondisi === 'Harga Naik') badgeClass += 'up';
        else if (item.kondisi === 'Harga Turun') badgeClass += 'down';
        else badgeClass += 'stable';

        badge.className = badgeClass;
        badge.style.display = 'inline-block';
        badge.style.padding = '4px 10px';
        badge.style.borderRadius = '20px';
        badge.textContent = item.kondisi;

        const detailBtn = document.createElement('button');
        detailBtn.className = 'btn-detail';
        detailBtn.dataset.id = item.id;
        detailBtn.textContent = 'Detail';
        detailBtn.style.padding = '4px 12px';
        detailBtn.style.border = '1px solid #0056b3';
        detailBtn.style.color = '#0056b3';
        detailBtn.style.background = 'transparent';
        detailBtn.style.borderRadius = '6px';
        detailBtn.style.cursor = 'pointer';
        detailBtn.style.display = 'block';
        detailBtn.style.marginTop = '10px';

        article.append(title, info, badge, detailBtn);
        container.append(article);
    });
}

function initFilterEvents() {
    const tombolFilter = document.querySelectorAll('.btn-filter');
    tombolFilter.forEach(button => {
        button.addEventListener('click', () => {
            tombolFilter.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            currentFilter = button.dataset.filter;
            renderItems();
        });
    });
}

function initThemePreference() {
    const themeButton = document.querySelector('#theme-button');
    if (!themeButton) return;

    const savedTheme = localStorage.getItem('theme') ?? 'light';
    document.documentElement.dataset.theme = savedTheme;
    themeButton.textContent = savedTheme === 'dark' ? '☀️ Mode Terang' : '🌙 Mode Gelap';

    themeButton.addEventListener('click', () => {
        const currentTheme = document.documentElement.dataset.theme;
        const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.dataset.theme = nextTheme;
        localStorage.setItem('theme', nextTheme); 
        themeButton.textContent = nextTheme === 'dark' ? '☀️ Mode Terang' : '🌙 Mode Gelap';
    });
}

function initLatihanModul5() {
    const searchInput = document.querySelector('#search-input');
    const limitSelect = document.querySelector('#limit-select');
    const container = document.querySelector('#daftar-alat');

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentSearch = e.target.value.trim();
            renderItems(); 
        });
    }

    if (container) {
        container.addEventListener('click', (e) => {
            if (e.target.classList.contains('btn-detail')) {
                const itemId = parseInt(e.target.dataset.id);
                const itemDetail = inventaris.find(item => item.id === itemId);
                if (itemDetail) {
                    alert(`DETAIL:\nNama: ${itemDetail.nama}\nKategori: ${itemDetail.kategori}\nHarga: ${itemDetail.jumlah}`);
                }
            }
        });
    }

    if (limitSelect) {
        limitSelect.value = currentLimit;
        limitSelect.addEventListener('change', (e) => {
            currentLimit = parseInt(e.target.value);
            localStorage.setItem('itemsPerPage', currentLimit);
            renderItems();
        });
    }
}

// ==========================================
// 4. FUNGSI MODUL 6 (FORM, VALIDASI)
// ==========================================
function initFormValidasi() {
    const form = document.querySelector('#form-alat');
    const status = document.querySelector('#form-status');

    if (!form) return;

    function validateForm(data) {
        const errors = {};

        const nama = String(data.get('nama') ?? '').trim();
        const jumlahStr = data.get('jumlah');
        const jumlah = Number(jumlahStr);
        const kategori = data.get('kategori');
        const kondisi = data.get('kondisi');
        const tanggal = data.get('tanggal');
        const allowedKategori = ['Alat Ukur Pasar', 'Bahan Pokok', 'Bumbu Dapur', 'Daging & Telur', 'Minyak'];

        // Error dipisah
        if (!jumlahStr) {
            errors.jumlah = 'Jumlah/Harga wajib diisi.';
        } else if (!Number.isInteger(jumlah) || jumlah < 0) {
            errors.jumlah = 'Jumlah/Harga harus berupa bilangan bulat 0 atau lebih.';
        }

        if (!kategori) {
            errors.kategori = 'Kategori wajib dipilih.';
        } else if (!allowedKategori.includes(kategori)) {
            errors.kategori = 'Kategori yang dipilih tidak valid.';
        }

        if (!nama) {
            errors.nama = 'Nama komoditas wajib diisi.';
        } else if (nama.length < 3) {
            errors.nama = 'Nama alat/komoditas minimal 3 karakter.';
        }

        if (!kondisi) errors.kondisi = 'Kondisi wajib dipilih.';

        //  Validasi Tanggal
        if (!tanggal) {
            errors.tanggal = 'Tanggal perolehan wajib diisi.';
        } else {
            const inputDate = new Date(tanggal);
            const today = new Date();
            today.setHours(0, 0, 0, 0); 
            if (inputDate > today) {
                errors.tanggal = 'Tanggal perolehan tidak boleh melebihi tanggal hari ini.';
            }
        }

        return errors;
    }

    form.addEventListener('submit', event => {
        event.preventDefault(); 
        
        const data = new FormData(form);
        const errors = validateForm(data);

        document.querySelectorAll('.error').forEach(el => el.textContent = '');
        form.querySelectorAll('[aria-invalid="true"]').forEach(el => el.removeAttribute('aria-invalid'));
        status.textContent = '';
        status.style.backgroundColor = 'transparent';

        if (Object.keys(errors).length > 0) {
            for (const [field, message] of Object.entries(errors)) {
                const errorSpan = document.querySelector(`#error-${field}`);
                if (errorSpan) errorSpan.textContent = message;
                
                const inputField = form.elements[field];
                if (inputField) inputField.setAttribute('aria-invalid', 'true');
            }
            
            const firstField = Object.keys(errors)[0];
            form.elements[firstField]?.focus();
            
            status.textContent = 'Gagal menyimpan! Periksa kembali data yang belum valid.';
            status.style.color = '#dc2626';
            status.style.backgroundColor = '#fee2e2';
            return;
        }

        status.style.color = '#16a34a';
        status.style.backgroundColor = '#dcfce7';
        status.textContent = `Data Valid dan siap dikirim! (Preview: ${data.get('nama')})`;
    });
}

// ==========================================
// 5. FUNGSI RENDER KOMPONEN UI (DIKEMBALIKAN KE VERSI ASLI YANG RAPI)
// ==========================================
function renderKomoditas() {
    const container = document.getElementById('komoditas-container');
    if (!container) return;
    container.innerHTML = '';

    komoditasData.forEach(item => {
        const badge = getBadgeConfig(item.status, item.selisih);
        // Struktur kartu dikembalikan utuh agar layout CSS slider Anda tidak hancur
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
    if (!container) return;
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

function renderBerita() {
    const container = document.getElementById('berita-container');
    if (!container) return;
    container.innerHTML = '';
    
    beritaData.forEach(item => {
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
    if (!container) return;
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