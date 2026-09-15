# Sembako Hub Tarakan - Modul 3 Praktikum Pemrograman Web OBE

Repository ini berisi implementasi Tugas Praktikum Pemrograman Web Modul 3 (CSS Modern, Responsive Design, Flexbox/Grid, dan Dasar UI/UX) berbasis *Outcome-Based Education* (OBE). Proyek ini merupakan *landing page* dan *dashboard* informasi kelistrikan pasar atau kebutuhan pokok (sembako) yang interaktif dan responsif.

## Informasi Mahasiswa
* **Nama:** Ahmad Fauzan Al Ghifari.
* **NPM:** 2440304012.
* **Program Studi:** Sarjana Teknik Komputer.
* **Universitas:** Universitas Borneo Tarakan (2026).

---

## Catatan Keputusan Desain (Design Decisions)

Dalam pengembangan UI/UX Sembako Hub, beberapa keputusan desain teknis telah diambil untuk memenuhi standar aksesibilitas dan responsivitas modern:

### 1. Arsitektur CSS & Custom Properties
Menggunakan pendekatan *CSS Variables* (`:root`) untuk membangun sistem desain yang konsisten.. Palet warna diatur secara terpusat (seperti `--primary: #10b981;`, `--bg-surface`, dan `--text-main`), termasuk pengelolaan variabel *shadow* (`--shadow-sm`, `--shadow-md`) dan *border-radius* agar memudahkan transisi tema di masa depan..

### 2. Pendekatan Layout (Flexbox & CSS Grid)
* **Flexbox:** Digunakan pada komponen 1-dimensi seperti navigasi (`nav ul`) dengan kombinasi `display: flex; flex-wrap: wrap; justify-content: center;` untuk memastikan menu beradaptasi dengan baik di layar sempit tanpa terpotong..
* **CSS Grid:** Diterapkan pada layout utama (`.main-grid`). Pada mode *mobile*, layout menggunakan `grid-template-columns: 1fr;` (satu kolom), yang kemudian diubah strukturnya pada layar lebar..

### 3. Responsive Design (Mobile-First)
Desain dibangun dengan prinsip *mobile-first*, di mana pengaturan default CSS ditujukan untuk layar kecil (HP). Penyesuaian tata letak untuk Desktop dan Tablet dilakukan menggunakan Media Query `@media (min-width: 64rem)` yang secara otomatis menyesuaikan tata letak kolom *header* (`flex-direction: row; justify-content: space-between;`) agar proporsional di layar lebar..

### 4. Komponen UI Reusable
Proyek ini memecah elemen antarmuka menjadi minimal 3 kelas komponen yang dapat digunakan ulang (reusable).:
* **`.card`**: Komponen kotak pembungkus konten dengan efek transisi *hover* dan *box-shadow* dinamis (`box-shadow: var(--shadow-hover); transform: translateY(-4px);`)..
* **`.btn`**: Tombol interaktif (Call-to-Action) dengan properti animasi, *padding*, dan efek bayangan..
* **`.hero-section`**: Area *banner* utama yang dikelola menggunakan pengaturan Flexbox sentral (`align-items: center; text-align: center;`)..

### 5. Aksesibilitas Visual (a11y)
Untuk memenuhi standar aksesibilitas dasar (keterbacaan dan navigasi *keyboard*), properti `:focus-visible` diterapkan pada semua elemen tautan (`a`), tombol (`button`), dan *form* (`input`, `select`).. Ketika elemen tersebut difokuskan via *keyboard* (tombol Tab), akan muncul *outline* tebal sebesar `3px solid var(--accent)` dengan *offset* `2px`, sehingga pengguna disabilitas visual dapat dengan mudah mengetahui posisi interaksi mereka..

---

## Dokumentasi Responsivitas (Pengujian)

Proyek ini telah melalui tahap pengujian resolusi layar menggunakan mode *Responsive Design Mode* pada *browser*. Bukti visual dapat dilihat pada dokumentasi internal.:
1. **Desktop View:** Menampilkan struktur grid sejajar ke samping dengan pemanfaatan ruang layar yang maksimal..
2. **Tablet View:** Tampilan adaptif di mana elemen mulai menyesuaikan proporsi lebar.
3. **Mobile View:** Tampilan menyusut menjadi format satu kolom (`1fr`) ke bawah agar konten mudah digulir (scroll) di ponsel pintar tanpa adanya *horizontal scrolling*..

---

## Panduan Menjalankan Proyek Lokal

1. Pastikan **Laragon** (atau *local web server* sejenis) dalam keadaan aktif (Apache berjalan).
2. Kloning repository ini atau letakkan folder proyek di dalam direktori `C:\laragon\www\pemweb-obe`.
3. Buka *browser* dan akses URL: `http://localhost/pemweb-obe/`