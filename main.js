
    // Inisialisasi Typed.js untuk teks yang muncul
    var typed = new Typed(".text", {
        strings: ["UI/UX Designer", "IT Support"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });

    // Event listener untuk hamburger menu
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar');

    hamburger.addEventListener('click', () => {
        navbar.classList.toggle('active'); // Menambahkan kelas aktif untuk menampilkan navbar

        // Mengubah ikon menjadi silang
        if (navbar.classList.contains('active')) {
            hamburger.innerHTML = "<i class='bx bx-x'></i>"; // Mengubah ikon menjadi silang
        } else {
            hamburger.innerHTML = "<i class='bx bx-menu'></i>"; // Kembali ke ikon hamburger
        }
    });

    // Scroll ke atas
    window.onscroll = function() {
        const topButton = document.querySelector('.top');
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            topButton.classList.add('show');
        } else {
            topButton.classList.remove('show');
        }
    };

    document.querySelector('.top').addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Scroll halus ke elemen yang dituju
    document.querySelectorAll('.navbar a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault(); // Mencegah perilaku default dari tautan

            // Ambil target elemen yang sesuai dengan href
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            // Jika elemen target ada, lakukan scroll halus ke elemen tersebut
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth', // Efek scroll halus
                    block: 'start' // Posisi scroll di bagian atas elemen
                });
            }
        });
    });

 // Fungsi untuk membuka modal
 function openModal(element) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("imgModal");

    // Ambil gambar yang diklik
    modalImg.src = element.querySelector("img").src; 
    modal.style.display = "flex"; // Pastikan display diatur ke flex saat modal dibuka

    setTimeout(function() {
        modal.classList.add("show"); // Tambahkan kelas "show" untuk membuka modal dengan animasi
    }, 10); // Berikan sedikit delay agar transisi bisa dipicu dengan benar
}

// Fungsi untuk menutup modal
function closeModal() {
    var modal = document.getElementById("myModal");
    modal.classList.remove("show"); // Hapus kelas "show" untuk animasi keluar

    // Tunggu animasi selesai, lalu sembunyikan modal
    setTimeout(function() {
        modal.style.display = "none"; // Sembunyikan modal setelah animasi selesai
    }, 600); // Sesuaikan durasi dengan waktu animasi (0.6s)
}

// Membuat IntersectionObserver untuk setiap elemen
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active'); // Tambah kelas jika elemen terlihat
        } else {
            entry.target.classList.remove('active'); // Hapus kelas jika elemen keluar dari viewport
        }
    });
}, {
    threshold: 0.5 // Elemen harus 50% terlihat sebelum animasi dipicu
});

// Menerapkan observer ke semua elemen dengan kelas .row
document.querySelectorAll('.row').forEach(row => {
    observer.observe(row);
});
    

    // Mendaftarkan elemen yang akan dipantau dari bagian "About"
    const aboutH2 = document.querySelector('.about-text h2');
    const aboutH4 = document.querySelector('.about-text h4');
    const aboutP = document.querySelector('.about-text p');

    observer.observe(aboutH2); // Observasi h2
    observer.observe(aboutH4); // Observasi h4
    observer.observe(aboutP);  // Observasi p

    // Mendaftarkan elemen yang akan dipantau dari bagian "Services"
    const servicesList = document.querySelectorAll('.services-list div'); // Ambil semua div di dalam services-list
    servicesList.forEach(service => {
        observer.observe(service); // Pantau setiap layanan
    });

    // Mendaftarkan elemen yang akan dipantau dari bagian "Skills"
    const skillBoxes = document.querySelectorAll('.skills-list .skill-box'); // Ambil semua skill-box
    skillBoxes.forEach(skill => {
        observer.observe(skill); // Pantau setiap skill
    });

    // Mendaftarkan elemen yang akan dipantau dari bagian "Portfolio"
    const portfolioRows = document.querySelectorAll('.portfolio-content .row'); // Ambil semua row di dalam portfolio
    portfolioRows.forEach(row => {
        observer.observe(row); // Pantau setiap row
    });

