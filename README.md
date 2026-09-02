# Dashboard Informasi Harga Pangan Tarakan

Portal informasi layanan publik untuk memantau fluktuasi harga komoditas pangan di area pasar Kota Tarakan[cite: 1]. 

## Cara Menjalankan melalui Laragon 5
1. Pastikan folder proyek `pemweb-obe` berada di direktori `C:\laragon\www\`[cite: 1].
2. Buka aplikasi Laragon 5 dan klik **Start All** (pastikan layanan Apache berjalan)[cite: 1].
3. Akses tautan URL di bawah ini melalui web browser[cite: 1].

## URL
* URL: [http://localhost/pemweb-obe/]

## Tugas OBE

| No. | Nama Request | Method | Status | Type |
| :--- | :--- | :--- | :--- | :--- |
| 1. | www.bpjs-kesehatan.go.id | GET | 200 | document |
| 2. | jquery.js | GET | 200 | script |
| 3. | main.2d9811335dac0a91.js | GET | 200 | script |
| 4. | id.json | GET | 200 | xhr |
| 5. | id.json | GET | 200 | svg+xml |

## Modul 2

| Indikator | Status | Keterangan Verifikasi |
| :--- | :--- | :--- |
| Deklarasi Bahasa (`lang="id"`) | Terpenuhi | Terpasang pada tag pembuka `<html>` untuk parser screen reader. |
| Hierarki Heading | Terpenuhi | Memiliki 1 `<h1>`, 3 `<h2>` untuk tiap section, dan `<h3>` untuk article. Tidak ada heading yang melompat tingkat. |
| Atribut Alt Gambar | Terpenuhi | Gambar informatif menyertakan deskripsi kontekstual; gambar dekoratif menggunakan `alt=""`. |
| Label Form | Terpenuhi | Seluruh elemen `<select>` dan tombol terhubung secara eksplisit via `for` dan `id`. |
| Navigasi Keyboard | Terpenuhi | Tab index mengikuti aliran visual dokumen alami tanpa keyboard trap; dilengkapi skip link ke `#main`. |

