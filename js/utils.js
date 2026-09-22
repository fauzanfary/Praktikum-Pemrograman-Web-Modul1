// js/utils.js

/**
 * Format angka ke Rupiah
 */
export const formatRupiah = (angka) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(angka);
};

/**
 * Mendapatkan konfigurasi UI berdasarkan status harga
 */
export const getBadgeConfig = (status, selisih) => {
    if (status === 'up') {
        return { class: 'up', icon: 'fa-arrow-up', text: `Harga Naik Rp ${selisih}` };
    } else if (status === 'down') {
        return { class: 'down', icon: 'fa-arrow-down', text: `Harga Turun Rp ${selisih}` };
    } else {
        return { class: 'stable', icon: 'fa-minus', text: 'Stabil' };
    }
};

/**
 * FUNGSI PRAKTIKUM MODUL 4: Mengolah ringkasan data komoditas
 * Menggunakan Arrow Function, array method (reduce, filter, map), dan Error Handling
 */
export const ringkasDataKomoditas = (data) => {
    // Error Handling Dasar (Melempar error jika data bukan array)
    if (!Array.isArray(data)) {
        throw new TypeError("Data komoditas yang dimasukkan harus berupa array");
    }

    return {
        totalJenisKomo: data.length,
        // Reduce: Mengkalkulasi total seluruh harga
        totalHarga: data.reduce((sum, item) => sum + item.harga, 0),
        // Filter: Menghitung berapa komoditas yang harganya stabil
        jumlahStabil: data.filter(item => item.status === 'stable').length,
        // Map: Mengambil hanya nama komoditas lalu digabung menjadi satu kalimat string
        daftarNama: data.map(item => item.nama).join(', ')
    };
};

/**
 * FUNGSI LATIHAN: Mencari komoditas berdasarkan ID
 * Menggunakan array method: find
 */
export const cariKomoditasById = (data, idDicari) => {
    return data.find(item => item.id === idDicari);
};