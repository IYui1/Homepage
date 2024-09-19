$(document).ready(function() {
    let originalColor = 'rgb(242, 249, 254)'; // Warna asli (#F2F9FE) dalam format RGB

    $('.toggle-switch').click(function() {
        let currentColor = $('body').css('background-color');
        
        if (currentColor === originalColor) {
            // Mengubah ke tema gelap
            $('body').css('background-color', '#111729');
            $('.img-logo').attr("src","alarado-icon-homepage-dark.svg");
            $('.container-1').css('color','#FFFFFF');
            $('.comment').css('color','#909193')
            $('.home a').css('color','#FFFFFF');
            $('.home a').hover(
                function() {
                    $(this).css('color', '#909193');
                },
                function() {
                    $(this).css('color', '#ffff');
                }
            );
            $('.dropdown-content').css('background-color','#111729');
            $('.dropdown-content a').css('color','#ffff');

        } else {
            // Mengembalikan ke tema terang
            $('body').css('background-color', '#F2F9FE');
            $('.img-logo').attr("src","alarado-icon-homepage.svg");
            $('.container-1').css('color', '#223344');
            $('.home a').css('color', '#223344');
            $('.home a').hover(
                function() {
                    $(this).css('color', '#909193');
                },
                function() {
                    $(this).css('color', '#223344');
                }
            );
            $('.dropdown-content').css('background-color','#F2F9FE');
            $('.dropdown-content a').css('color','#111729');


        }
    });
});
$(document).ready(function () {
    // Fungsi untuk menambahkan atau menghapus tombol dropdown berdasarkan ukuran layar
    function handleResize() {
        if ($(window).width() <= 640) {
            // Jika tombol belum ada, tambahkan
            if ($('.dropdown-btn').length === 0) {
                $('#menu-container').prepend('<button class="dropdown-btn">☰</button>');
            }

            // Tambahkan event listener untuk tombol
            $('.dropdown-btn').off('click').on('click', function () {
                $('.dropdown-content').toggleClass('show');
            });
        } else {
            // Jika ukuran layar lebih dari 640px, hapus tombol dropdown
            $('.dropdown-btn').remove();
            // Pastikan dropdown ditutup saat kembali ke layar lebih besar
            $('.dropdown-content').removeClass('show');
        }
    }

    // Jalankan fungsi saat halaman dimuat pertama kali
    handleResize();

    // Jalankan fungsi saat ukuran jendela berubah
    $(window).resize(function () {
        handleResize();
    });
});
// Fungsi untuk memindahkan elemen
// Fungsi untuk memindahkan elemen
function moveToggleSwitch() {
    const header = document.querySelector('.header');
    const toggleSwitch = document.querySelector('.toggle-switch');
    const dropdownContent = document.querySelector('.dropdown-content');

    if (window.innerWidth <= 640) {
        // Pindahkan elemen .toggle-switch ke dalam .dropdown-content
        if (toggleSwitch && dropdownContent && !dropdownContent.contains(toggleSwitch)) {
            dropdownContent.appendChild(toggleSwitch);
        }
    } else {
        // Kembalikan elemen .toggle-switch ke posisi semula jika lebar lebih besar dari 640px
        if (toggleSwitch && dropdownContent.contains(toggleSwitch)) {
            header.appendChild(toggleSwitch);
        }
    }
}

// Jalankan fungsi saat halaman dimuat
window.addEventListener('load', moveToggleSwitch);

// Jalankan fungsi setiap kali ukuran jendela diubah
window.addEventListener('resize', moveToggleSwitch);
