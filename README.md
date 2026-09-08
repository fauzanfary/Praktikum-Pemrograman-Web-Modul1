# Sembako Hub - Sistem Informasi & Prediksi Harga Pangan Tarakan

Proyek Praktikum Pemrograman Web (OBE 2026) - Pertemuan 2
Program Studi Sarjana Teknik Komputer, Universitas Borneo Tarakan
Oleh: Ahmad Fauzan Al Ghifari (2440304012)

## Deskripsi Singkat

Sembako Hub Tarakan adalah portal informasi harga pangan dan kalkulator estimasi belanja berbasis web yang dirancang menggunakan standar semantik HTML5 dan aksesibilitas dasar (WCAG 2.1). Sistem ini memfasilitasi pemantauan tren harga komoditas lokal bagi masyarakat umum.

## Cara Menjalankan Menggunakan Laragon 5

1. Jalankan aplikasi Laragon dan klik **Start All**.
2. Pastikan folder proyek berada di direktori: `C:\laragon\www\pemweb-obe` (atau menyesuaikan letak instalasi Anda).
3. Buka browser dan akses URL: `http://localhost/pemweb-obe/`

## Checklist Aksesibilitas Dasar

| Parameter | Implementasi pada Kode | Status |
| :--- | :--- | :--- |
| **lang** | Menggunakan `<html lang="id">` untuk bahasa Indonesia. | ✓ |
| **Heading** | Terstruktur runtut dari h1, h2, hingga h3 tanpa melompat. | ✓ |
| **alt** | Gambar informatif memiliki deskripsi jelas, ikon dekoratif memakai `alt=""`. | ✓ |
| **Label Form** | Setiap input terhubung dengan label via atribut `for` dan `id`. | ✓ |
| **Teks link** | Deskriptif (misal: "Kalkulator Estimasi Belanja", bukan "klik di sini"). | ✓ |
| **Keyboard** | Bisa dinavigasi menggunakan tombol Tab dan menyediakan *skip link*. | ✓ |