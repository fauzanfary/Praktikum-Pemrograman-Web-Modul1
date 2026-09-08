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

<<<<<<< HEAD
| Parameter | Implementasi pada Kode | Status |
| :--- | :--- | :--- |
| **lang** | Menggunakan `<html lang="id">` untuk bahasa Indonesia. | ✓ |
| **Heading** | Terstruktur runtut dari h1, h2, hingga h3 tanpa melompat. | ✓ |
| **alt** | Gambar informatif memiliki deskripsi jelas, ikon dekoratif memakai `alt=""`. | ✓ |
| **Label Form** | Setiap input terhubung dengan label via atribut `for` dan `id`. | ✓ |
| **Teks link** | Deskriptif (misal: "Kalkulator Estimasi Belanja", bukan "klik di sini"). | ✓ |
| **Keyboard** | Bisa dinavigasi menggunakan tombol Tab dan menyediakan *skip link*. | ✓ |
=======
**1. Analisis Request-Response (Target: ubt.ac.id)**
Pada tahap awal proyek, telah dilakukan inspeksi jaringan untuk memahami komunikasi *client-server*. Berdasarkan tab *Network*, lima *request* utama menggunakan metode `GET` (Status `200 OK`) telah diidentifikasi:
* Memuat pustaka CSS eksternal (`swiper-bundle.min.css`) untuk pengaturan tata letak.
* Mengunduh aset visual situs (`UBT_bkkbn01.jpg`) yang disajikan dalam format WebP.
* Memuat skrip JavaScript (`imagesloaded.min.js`) untuk mendeteksi status pemuatan aset.
* Mengambil dua berkas tipografi dari peladen Google: *stylesheet* API aturan font (`/css2?family=Poppins`) dan *web font* itu sendiri (format `.woff2`).

**2. Refleksi Praktikum**
Melalui tugas ini, saya lebih memahami alur komunikasi protokol HTTP/HTTPS serta mekanisme *request-response* saat peramban memuat berbagai aset web secara terpisah. Saya juga telah berhasil mempraktikkan fondasi *version control* menggunakan Git, mulai dari inisialisasi (*init*), rekam perubahan (*commit*), hingga pengunggahan (*push*) ke GitHub. Kendala utama berupa banyaknya *request* yang bertumpuk pada *developer tools* dapat diselesaikan dengan memfilter *header* secara spesifik untuk memastikan tidak ada data sensitif yang terekam.

<!-- SUKES LANCAR REZEKI -->
>>>>>>> feature/struktur-home
