# Dashboard Informasi Harga Pangan Tarakan

Portal informasi layanan publik untuk memantau fluktuasi harga komoditas pangan di area pasar Kota Tarakan.

## Cara Menjalankan melalui Laragon 5

1. Pastikan folder proyek `pemweb-obe` berada di direktori `c:\laragon\www\`.
2. Buka aplikasi Laragon 5 dan klik Start All (pastikan layanan Apache berjalan).
3. Akses tautan URL di bawah ini melalui web browser.

## URL

* URL: [http://localhost/pemweb-obe/]

## Tugas OBE

| No. | Nama Request | Method | Status | Type |
|:---:|---|:---:|:---:|---|
| 1 | `swiper-bundle.min.css` | GET | 200 | `stylesheet` |
| 2 | `UBT_bkkbn01.jpg` | GET | 200 | `webp` |
| 3 | `imagesloaded.min.js?ver=5.0.0` | GET | 200 | `script` |
| 4 | `...pxiDyp8kv8JHg...woff2` | GET | 200 | `woff2` |
| 5 | `/css2?family=Poppins:wght@400;600;700&display=swap` | GET | 200 | `stylesheet` |

## Modul 2

| Indikator | Status | Keterangan Verifikasi |
|---|---|---|
| Deklarasi Bahasa (`lang="id"`) | Terpenuhi | Terpasang pada tag pembuka `<html>` untuk parser screen reader. |
| Hierarki Heading | Terpenuhi | Memiliki 1 `<h1>`, 3 `<h2>` untuk tiap section, dan `<h3>` untuk article. Tidak ada heading yang melompat tingkat. |
| Atribut Alt Gambar | Terpenuhi | Gambar informatif menyertakan deskripsi kontekstual; gambar dekoratif menggunakan `alt=""`. |
| Label Form | Terpenuhi | Seluruh elemen `<select>` dan tombol terhubung secara eksplisit via `for` dan `id`. |
| Navigasi Keyboard | Terpenuhi | Tab index mengikuti aliran visual dokumen alami tanpa keyboard trap; dilengkapi skip link ke `#main`. |