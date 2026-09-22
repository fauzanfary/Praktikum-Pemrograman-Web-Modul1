# Catatan Penggunaan AI (AI Usage Log)

**Mata Kuliah:** Praktikum Pemrograman Web (OBE)  
**Proyek:** Sembako Hub Tarakan  
**Pengembang:** Ahmad Fauzan Al Ghifari  

---

## Log Modul 1: Pengenalan Lingkungan Kerja & Git
| Tanggal | Asisten AI | Ringkasan Prompt / Instruksi | Hasil & Implementasi pada Proyek |
| :--- | :--- | :--- | :--- |
| 26 Agu 2026 | Gemini | Memperbaiki localhost yang mengarah ke XAMPP saat menggunakan Laragon. | AI menjelaskan adanya bentrok Port 80 karena XAMPP masih aktif. Solusi dilakukan dengan mematikan Apache di XAMPP dan melakukan restart server di Laragon. |
| 26 Agu 2026 | Gemini | Memperbaiki error saat perintah `git add` dan `git commit` pada langkah praktikum. | Identifikasi typo pada perintah Git dan pendaftaran identitas pengguna melalui perintah `git config`. Commit lokal berhasil dilakukan. |

---

## Log Modul 2: Struktur HTML Semantik & Aksesibilitas
| Tanggal | Asisten AI | Ringkasan Prompt / Instruksi | Hasil & Implementasi pada Proyek |
| :--- | :--- | :--- | :--- |
| 08 Sept 2026 | Gemini | Menyusun kerangka *semantic tags* awal dan merumuskan teks *alt* deskriptif berdasarkan referensi visual dashboard harga pangan. | Implementasi struktur tag `<figure>`, `<img>` (dengan atribut `alt` deskriptif), dan `<figcaption>` pada artikel berita. |
| 08 Sept 2026 | Gemini | Meminta evaluasi kode HTML terhadap parameter aksesibilitas WCAG 2.1. | Identifikasi kekurangan aksesibilitas *keyboard* serta penambahan fitur *skip link* (`<a href="#konten-utama">`). |
| 08 Sept 2026 | Gemini | Meminta pembuatan visualisasi *sitemap* dan *wireframe* awal. | Pembuatan hierarki blok diagram ASCII dan kode diagram Mermaid.js untuk dokumentasi proyek. |

---

## Log Modul 3: CSS Modern, Layout (Flexbox & Grid), dan Responsive Design
| Tanggal | Asisten AI | Ringkasan Prompt / Instruksi | Hasil & Implementasi pada Proyek |
| :--- | :--- | :--- | :--- |
| 15 Sept 2026 | Gemini | Meminta panduan penataan layout menggunakan CSS Grid dan Flexbox untuk komponen kartu komoditas. | Penerapan CSS Grid 1-kolom pada tampilan *mobile* dan penyesuaian multi-kolom responsif untuk tampilan *desktop*. |
| 15 Sept 2026 | Gemini | Meminta konfigurasi *CSS Custom Properties* (`:root`) untuk konsistensi sistem warna UI. | Pembentukan variabel warna utama, *surface*, serta efek *focus-visible* untuk aksesibilitas *keyboard*. |

---

## Log Modul 4: JavaScript Modern (ES6+), Modules, dan Async/Error Handling
| Tanggal | Asisten AI | Ringkasan Prompt / Instruksi | Hasil & Implementasi pada Proyek |
| :--- | :--- | :--- | :--- |
| 22 Sept 2026 | Gemini | Meminta struktur kode JavaScript ES6 Modules (`export`/`import`) untuk pengolahan data komoditas dan wilayah. | Pemisahan logika pengolahan data ke `js/utils.js` dan rendering antarmuka utama pada `js/app.js`. |
| 22 Sept 2026 | Gemini | Meminta implementasi penanganan kesalahan (*error handling*) dan penggunaan *array methods* (`filter`, `map`, `reduce`, `find`). | Penerapan blok `try...catch` pada inisialisasi aplikasi serta fungsi pencarian komoditas berdasarkan ID yang melempar (*throw*) error jika data tidak ditemukan. |