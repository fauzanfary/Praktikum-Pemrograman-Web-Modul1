// js/utils.js

/**
 * Format angka ke Rupiah
 */
const formatRupiah = (angka) => {
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
const getBadgeConfig = (status, selisih) => {
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
};