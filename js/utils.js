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
 * Dalam harga pangan: Harga Naik = Merah (Warning), Harga Turun = Hijau (Good)
 */
export const getBadgeConfig = (status, selisih) => {
    if (status === 'up') {
        return { 
            class: 'up', 
            icon: 'fa-arrow-up', 
            text: `Harga Naik Rp ${selisih}` 
        };
    } else if (status === 'down') {
        return { 
            class: 'down', 
            icon: 'fa-arrow-down', 
            text: `Harga Turun Rp ${selisih}` 
        };
    } else {
        return { 
            class: 'stable', 
            icon: 'fa-minus', 
            text: 'Stabil' 
        };
    }
}
/**
 * FUNGSI PRAKTIKUM MODUL 4: Mengolah ringkasan data komoditas
 * Menggunakan Arrow Function, array method (reduce, filter), dan Error Handling
 */
export const ringkasDataKomoditas = (data) => {
    if (!Array.isArray(data)) {
        throw new TypeError("Data komoditas yang dimasukkan harus berupa array");
    }

    return {
        totalItem: data.length,
        // Reduce: Mencari total seluruh harga
        rataRataHarga: data.reduce((sum, item) => sum + item.harga, 0) / data.length,
        // Filter: Menghitung berapa komoditas yang harganya naik
        jumlahNaik: data.filter(item => item.status === 'up').length,
        // Filter: Menghitung komoditas dengan harga stabil
        jumlahStabil: data.filter(item => item.status === 'stable').length
    };
};

/**
 * FUNGSI LATIHAN: Mencari komoditas berdasarkan ID
 */
export const cariKomoditasById = (data, idDicari) => {
    return data.find(item => item.id === idDicari);
};