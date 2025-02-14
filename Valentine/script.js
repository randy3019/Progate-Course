// Ambil elemen yang diperlukan
const valentineButton = document.getElementById('valentineButton');
const popup = document.getElementById('popup');
const closeButton = document.querySelector('.close');

// Tampilkan pop-up saat tombol diklik
valentineButton.addEventListener('click', () => {
    popup.style.display = 'flex';
});

// Sembunyikan pop-up saat tombol close diklik
closeButton.addEventListener('click', () => {
    popup.style.display = 'none';
});

// Sembunyikan pop-up saat mengklik di luar pop-up
window.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});