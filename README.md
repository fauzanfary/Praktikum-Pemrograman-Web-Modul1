# Tugas Pemrograman Web (OBE)

Proyek ini dibuat untuk tugas semester mata kuliah Pemrograman Web. Website ini akan dibangun perlahan secara bertahap. Mulai dari sekadar membuat kerangka dan bentuk tampilannya saja, sampai nanti akhirnya menjadi sebuah website utuh yang benar-benar bisa digunakan.

**Identitas Mahasiswa:**
* **Nama:** Ahmad Fauzan Al Ghifari
* **NPM:** 2440304012
* **Info Matkul:** Pemrograman Web 

**Teknologi yang Dipakai:**
* HTML5
* Server: Apache (menggunakan Laragon 5)
* Version Control: Git & GitHub

**Cara Jalanin Proyeknya:**
1. Install Laragon 5.
2. Simpan atau *clone* folder proyek ini tepat di `C:\laragon\www\pemweb-obe`.
3. Buka Laragon, lalu klik **Start All** buat nyalain servernya.
4. Buka browser, terus buka link: [http://localhost/pemweb-obe/](http://localhost/pemweb-obe/)

---

## Ringkasan Laporan Tugas 1: Analisis Jaringan & Setup Repositori

**1. Analisis Request-Response (Target: ubt.ac.id)**
Pada tahap awal proyek, telah dilakukan inspeksi jaringan untuk memahami komunikasi *client-server*. Berdasarkan tab *Network*, lima *request* utama menggunakan metode `GET` (Status `200 OK`) telah diidentifikasi:
* Memuat pustaka CSS eksternal (`swiper-bundle.min.css`) untuk pengaturan tata letak.
* Mengunduh aset visual situs (`UBT_bkkbn01.jpg`) yang disajikan dalam format WebP.
* Memuat skrip JavaScript (`imagesloaded.min.js`) untuk mendeteksi status pemuatan aset.
* Mengambil dua berkas tipografi dari peladen Google: *stylesheet* API aturan font (`/css2?family=Poppins`) dan *web font* itu sendiri (format `.woff2`).

**2. Refleksi Praktikum**
Melalui tugas ini, saya lebih memahami alur komunikasi protokol HTTP/HTTPS serta mekanisme *request-response* saat peramban memuat berbagai aset web secara terpisah. Saya juga telah berhasil mempraktikkan fondasi *version control* menggunakan Git, mulai dari inisialisasi (*init*), rekam perubahan (*commit*), hingga pengunggahan (*push*) ke GitHub. Kendala utama berupa banyaknya *request* yang bertumpuk pada *developer tools* dapat diselesaikan dengan memfilter *header* secara spesifik untuk memastikan tidak ada data sensitif yang terekam.

<!-- SUKES LANCAR REZEKI -->