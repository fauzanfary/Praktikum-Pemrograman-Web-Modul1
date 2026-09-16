// Memenuhi Langkah Praktikum 6 & 8: Fungsi ringkasInventaris diekstrak ke utils.js
export function ringkasInventaris(data) {
    if (!Array.isArray(data)) throw new TypeError('Data harus berupa array');
    return {
        jenisAlat: data.length,
        totalUnit: data.reduce((sum, item) => sum + item.jumlah, 0),
        perluCek: data.filter(item => item.kondisi !== 'Baik').length
    };
}

// Memenuhi Latihan 2: Fungsi mencari alat berdasarkan id menggunakan 'find'
export function cariAlatBerdasarkanId(data, idDicari) {
    return data.find(item => item.id === idDicari);
}