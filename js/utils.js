// js/utils.js

/**
 * Fungsi untuk mengubah angka menjadi format mata uang Rupiah
 * @param {number} number 
 * @returns {string} Format Rp
 */
function formatRupiah(number) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(number);
}

/**
 * Fungsi untuk menentukan class CSS dan Icon berdasarkan status harga
 * @param {string} status ('up', 'down', 'stable')
 * @returns {object} Object berisi class css dan icon class
 */
function getIndicatorStyle(status) {
    switch(status) {
        case 'up':
            return { class: 'up', icon: 'fa-arrow-up' };
        case 'down':
            return { class: 'down', icon: 'fa-arrow-down' };
        default:
            return { class: 'stable', icon: 'fa-minus' };
    }
}