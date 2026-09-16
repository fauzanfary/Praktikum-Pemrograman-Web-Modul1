// js/app.js

// Simulasi Data Komoditas Pangan
const mockData = [
    {
        id: 1,
        nama: "Beras Medium",
        harga: 14500,
        selisih: 200,
        status: "up", // up, down, stable
        satuan: "/ kg",
        img: "https://cdn-icons-png.flaticon.com/512/3014/3014522.png" // placeholder icon
    },
    {
        id: 2,
        nama: "Minyak Goreng Curah",
        harga: 16000,
        selisih: 500,
        status: "down",
        satuan: "/ kg",
        img: "https://cdn-icons-png.flaticon.com/512/1154/1154378.png"
    },
    {
        id: 3,
        nama: "Cabai Rawit Merah",
        harga: 75000,
        selisih: 0,
        status: "stable",
        satuan: "/ kg",
        img: "https://cdn-icons-png.flaticon.com/512/1205/1205938.png"
    },
    {
        id: 4,
        nama: "Bawang Merah",
        harga: 40000,
        selisih: 1500,
        status: "up",
        satuan: "/ kg",
        img: "https://cdn-icons-png.flaticon.com/512/3967/3967115.png"
    },
    {
        id: 5,
        nama: "Daging Ayam Ras",
        harga: 42000,
        selisih: 1000,
        status: "down",
        satuan: "/ ekor",
        img: "https://cdn-icons-png.flaticon.com/512/1895/1895697.png"
    },
    {
        id: 6,
        nama: "Telur Ayam Ras",
        harga: 28000,
        selisih: 0,
        status: "stable",
        satuan: "/ kg",
        img: "https://cdn-icons-png.flaticon.com/512/837/837560.png"
    }
];

// Menjalankan fungsi saat DOM sudah siap diload
document.addEventListener('DOMContentLoaded', () => {
    renderKomoditas();
});

function renderKomoditas() {
    const container = document.getElementById('komoditas-container');
    container.innerHTML = ''; // Kosongkan container

    mockData.forEach(item => {
        // Menggunakan fungsi dari utils.js
        const indicator = getIndicatorStyle(item.status);
        const hargaFormatted = formatRupiah(item.harga);
        
        let textSelisih = "Harga Stabil";
        if (item.status === 'up') {
            textSelisih = `Naik Rp ${item.selisih}`;
        } else if (item.status === 'down') {
            textSelisih = `Turun Rp ${item.selisih}`;
        }

        // Membuat elemen HTML untuk setiap card
        const cardHTML = `
            <div class="card">
                <img src="${item.img}" alt="${item.nama}">
                <div class="card-title">${item.nama}</div>
                <div class="card-price">${hargaFormatted} <span style="font-size: 0.8rem; font-weight: normal; color: #6b7280">${item.satuan}</span></div>
                <div class="indicator ${indicator.class}">
                    <i class="fa-solid ${indicator.icon}"></i> ${textSelisih}
                </div>
            </div>
        `;
        
        container.innerHTML += cardHTML;
    });
}