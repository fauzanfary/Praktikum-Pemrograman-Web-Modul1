import { dataPangan, saringDataBerdasarkanKategori, formatRupiah } from './utils.js';

// Seleksi Elemen DOM
const tabelBody = document.getElementById('tabel-pangan-body');
const selectFilter = document.getElementById('filter-kategori');
const errorPesan = document.getElementById('error-pesan');

// Fungsi utama untuk merender tabel
const renderTabel = (data) => {
    try {
        tabelBody.innerHTML = ''; // Bersihkan isi tabel sebelumnya

        if (!Array.isArray(data) || data.length === 0) {
            tabelBody.innerHTML = '<tr><td colspan="4" style="text-align:center;">Data tidak ditemukan.</td></tr>';
            return;
        }

        // Penggunaan map dan template literal untuk menghasilkan baris tabel
        const barisHTML = data.map(({ nama, kategori, harga, pasokan }) => {
            const kelasBadge = pasokan === 'Aman' ? 'aman' : 'waspada';
            
            return `
                <tr>
                    <td><strong>${nama}</strong></td>
                    <td>${kategori}</td>
                    <td>${formatRupiah(harga)}</td>
                    <td><span class="badge ${kelasBadge}">${pasokan}</span></td>
                </tr>
            `;
        }).join('');

        tabelBody.innerHTML = barisHTML;
        errorPesan.style.display = 'none';

    } catch (error) {
        console.error("Gagal memuat data pangan:", error.message);
        errorPesan.textContent = "Terjadi kesalahan saat memuat data. Silakan muat ulang halaman.";
        errorPesan.style.display = 'block';
    }
};

// Event Listener untuk fitur filter
selectFilter.addEventListener('change', (e) => {
    const kategoriTerpilih = e.target.value;
    const dataTersaring = saringDataBerdasarkanKategori(dataPangan, kategoriTerpilih);
    renderTabel(dataTersaring);
});

// Inisialisasi awal saat modul dimuat
renderTabel(dataPangan);