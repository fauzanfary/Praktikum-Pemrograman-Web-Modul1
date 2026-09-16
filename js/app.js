// Memenuhi Langkah Praktikum 1 & 8: Mengimpor fungsi dari utils.js
import { ringkasInventaris, cariAlatBerdasarkanId } from './utils.js';

// Memenuhi Langkah Praktikum 2 & Latihan 1 (penambahan properti 'lokasi')
const inventaris = [
    { id: 1, nama: 'Router', kategori: 'Jaringan', jumlah: 4, kondisi: 'Baik', lokasi: 'Lab Jaringan' },
    { id: 2, nama: 'Multimeter', kategori: 'Elektronika', jumlah: 6, kondisi: 'Baik', lokasi: 'Lab Elektronika' },
    { id: 3, nama: 'Kabel UTP', kategori: 'Jaringan', jumlah: 20, kondisi: 'Perlu Cek', lokasi: 'Gudang' },
    { id: 4, nama: 'Switch', kategori: 'Jaringan', jumlah: 2, kondisi: 'Baik', lokasi: 'Lab Jaringan' }
];

console.log("=== HASIL LANGKAH PRAKTIKUM ===");

// Memenuhi Langkah Praktikum 3: Gunakan filter untuk mengambil alat kondisi "Baik"
const alatBaik = inventaris.filter(item => item.kondisi === 'Baik');
console.log("1. Alat Kondisi Baik:", alatBaik);

// Memenuhi Langkah Praktikum 4: Gunakan map untuk menghasilkan array nama alat
const namaAlat = inventaris.map(({ nama }) => nama);
console.log("2. Daftar Nama Alat:", namaAlat);

// Memenuhi Langkah Praktikum 5: Gunakan reduce untuk menghitung total jumlah alat
const totalUnit = inventaris.reduce((total, item) => total + item.jumlah, 0);
console.log("3. Total Keseluruhan Alat:", totalUnit);

// Memenuhi Langkah Praktikum 7: Tampilkan hasil fungsi ringkasInventaris di Console
console.log("4. Ringkasan Inventaris:", ringkasInventaris(inventaris));


console.log("\n=== HASIL LATIHAN ===");

// Memenuhi Latihan 1: Tampilkan semua alat pada lokasi tertentu menggunakan filter[cite: 1]
const alatDiLabJaringan = inventaris.filter(item => item.lokasi === 'Lab Jaringan');
console.log("A. Alat di Lab Jaringan:", alatDiLabJaringan);

// Memenuhi Latihan 2: Mencari alat berdasarkan id[cite: 1]
const pencarianAlat = cariAlatBerdasarkanId(inventaris, 2);
console.log("B. Hasil Pencarian ID 2:", pencarianAlat);

// Memenuhi Latihan 3: Gunakan destructuring dan template literal untuk string ringkasan[cite: 1]
console.log("C. String Ringkasan Alat:");
inventaris.forEach(item => {
    const { nama, jumlah, kondisi, lokasi } = item;
    console.log(`- Alat ${nama} berjumlah ${jumlah} unit dalam kondisi ${kondisi} dan berada di ${lokasi}.`);
});