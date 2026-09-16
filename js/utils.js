// Data komoditas pangan lokal
export const dataPangan = [
    { id: 1, nama: 'Beras Premium', kategori: 'Beras', harga: 16500, pasokan: 'Aman' },
    { id: 2, nama: 'Beras Medium', kategori: 'Beras', harga: 14000, pasokan: 'Aman' },
    { id: 3, nama: 'Cabai Rawit Merah', kategori: 'Sayur', harga: 85000, pasokan: 'Waspada' },
    { id: 4, nama: 'Bawang Merah', kategori: 'Sayur', harga: 38000, pasokan: 'Aman' },
    { id: 5, nama: 'Ikan Bandeng', kategori: 'Protein', harga: 35000, pasokan: 'Aman' },
    { id: 6, nama: 'Daging Ayam Ras', kategori: 'Protein', harga: 45000, pasokan: 'Waspada' }
];

// Fungsi filter data menggunakan metode Array.filter
export function saringDataBerdasarkanKategori(data, kategori) {
    if (kategori === 'semua') return data;
    return data.filter(item => item.kategori === kategori);
}

// Fungsi format mata uang
export function formatRupiah(angka) {
    if (typeof angka !== 'number') throw new TypeError('Input harus berupa angka');
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(angka);
}