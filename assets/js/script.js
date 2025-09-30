'use strict';

const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const elemArr = [navOpenBtn, navCloseBtn, overlay];

for (let i = 0; i < elemArr.length; i++) {
  elemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 50 ? header.classList.add("active") : header.classList.remove("active");
});


const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  window.scrollY >= 500 ? goTopBtn.classList.add("active") : goTopBtn.classList.remove("active");
});



document.addEventListener('DOMContentLoaded', () => {
  const products = {
      'gwk': {
          title: 'Garuda Wisnu Kencana (GWK) 🇮🇩',
          description: 'Garuda Wisnu Kencana (GWK) Cultural Park adalah salah satu ikon pariwisata terbesar di Bali yang menampilkan perpaduan seni, budaya, dan keagungan arsitektur modern. Patung Garuda Wisnu Kencana setinggi lebih dari 120 meter berdiri megah, menggambarkan Dewa Wisnu yang mengendarai burung Garuda sebagai lambang kesetiaan dan pengabdian. Di dalam kawasan seluas 60 hektar ini, wisatawan dapat menikmati berbagai atraksi seperti pertunjukan tari Bali, pameran seni, hingga acara budaya internasional. Tidak hanya itu, dari ketinggian GWK, pengunjung juga disuguhi panorama menakjubkan meliputi garis pantai Bali Selatan, Bandara Ngurah Rai, hingga Gunung Agung. Dengan suasana yang penuh nilai spiritual, GWK menjadi destinasi wisata yang menghadirkan pengalaman budaya dan keindahan alam dalam satu tempat.',
          images: [
              'https://drive.google.com/thumbnail?id=1O0bATM-jZKpoRDGHWxULvkHLtesw81HC&sz=s800',
              'https://drive.google.com/thumbnail?id=1buqG4RCZNbI_JHFNp3XKjdGz6QN_Att4&sz=s800',
              'https://drive.google.com/thumbnail?id=1jvo2D9Fo8B1yzJ8JGATDX_kIpuehveWg&sz=s800',
              'https://drive.google.com/thumbnail?id=1hXwd2p3oF9OL8oIg5d2S_NErqAbrQ9da&sz=s800',
          ],
          location: 'Badung, Bali.',
          hours: '16:00 - 19:00 WITA'
      },
      'pandawa': {
          title: 'Pantai Pandawa',
          description: 'Pantai Pandawa terletak di Desa Kutuh, Bali Selatan, dan dikenal sebagai salah satu pantai eksotis yang dulunya tersembunyi di balik tebing kapur tinggi. Pantai ini memiliki pasir putih bersih, air laut biru jernih, serta ombak yang tenang sehingga aman untuk berenang maupun bermain kano. Di sepanjang jalan menuju pantai, wisatawan akan disambut oleh patung besar Pandawa Lima yang dipahat pada tebing, menambah kesan budaya yang kental. Pantai Pandawa juga sering digunakan untuk kegiatan budaya dan festival, sekaligus menjadi destinasi favorit wisatawan yang mencari suasana alami, pemandangan spektakuler, dan pengalaman menenangkan jauh dari keramaian.',
          images: [
              'https://drive.google.com/thumbnail?id=1MCaqKyViXBO4iSOUs1Iy8h3d9rlGoQxc&sz=s800',
              'https://drive.google.com/thumbnail?id=1F2wxKWWigG0fKpwgI3K4ymHZ3nF9Vn44&sz=s800',
              'https://drive.google.com/thumbnail?id=1bit6ZhKeU7v1gVw0bfB1sk_IVDKTj6c-&sz=s800',
              'https://drive.google.com/thumbnail?id=1axJqZm4B59kopbMyQ7tVwl5qhKO99YZq&sz=s800',
              'https://drive.google.com/thumbnail?id=1HIaz9hX1s2mQLC7ZGoLz70MgqHy81noz&sz=s800',
          ],

          location: 'Badung, Bali.',
          hours: '14:00 - 15:30 WITA'
      },
      'candi': {
          title: 'Candi Kuning (Pasar Buah dan Sayur Bedugul) 🍎🌿',
          description: 'Candi Kuning merupakan pasar tradisional yang terletak di kawasan Bedugul, daerah pegunungan Bali yang sejuk. Pasar ini menjadi pusat oleh-oleh khas dataran tinggi, menawarkan aneka buah-buahan segar seperti stroberi, jeruk, pisang, serta sayuran organik hasil perkebunan lokal. Selain itu, wisatawan juga bisa menemukan bunga tropis berwarna-warni, rempah-rempah, hingga camilan khas Bali. Dengan suasana pasar yang hangat dan harga terjangkau, Candi Kuning sering menjadi persinggahan wisatawan setelah berkunjung ke Danau Beratan atau Kebun Raya Bedugul. Tempat ini menghadirkan pengalaman belanja sederhana namun penuh keaslian budaya dan kekayaan alam Bali.',
          images: [
              'https://drive.google.com/thumbnail?id=1zq2QvssnVzW_bWC0W51zPxD_aGrUEQaJ&sz=s800',
              'https://drive.google.com/thumbnail?id=1iEa95JRxxuWZWiyVDf0jJAg2x5ZEaZWr&sz=s800',
              'https://drive.google.com/thumbnail?id=1LrisvvDfupcKogUjLEOypJvqsf03G6BP&sz=s800',
              'https://drive.google.com/thumbnail?id=1lX0MsC0JnJ3n6QSINopzOXSrN-wnq1af&sz=s800',
          ],
          location: 'Tabanan, Bali.',
          hours: '09:00 - 11:00 WITA'
      },
      'krisna': {
          title: 'Pusat Oleh-Oleh Krisna 🛍️',
          description: 'Krisna Bali adalah pusat oleh-oleh terbesar dan paling terkenal di Pulau Dewata. Dengan konsep belanja modern yang nyaman, Krisna menyediakan ribuan pilihan produk khas Bali mulai dari pakaian tradisional, kerajinan tangan, aksesoris, makanan dan minuman khas, hingga pernak-pernik unik untuk buah tangan. Keunggulannya adalah harga yang transparan dan ramah di kantong, sehingga wisatawan bisa berbelanja tanpa khawatir tawar-menawar. Selain itu, beberapa cabang Krisna juga dilengkapi dengan restoran, area kuliner, dan fasilitas yang nyaman bagi keluarga. Tidak heran, Krisna selalu menjadi tempat wajib bagi wisatawan untuk mengakhiri perjalanan mereka di Bali dengan membawa pulang kenangan khas pulau ini.',
          images: [
              'https://drive.google.com/thumbnail?id=1hUR5ZhljIcbKVG1eewCCHOxh7lZAbetm&sz=s800',
              'https://drive.google.com/thumbnail?id=1XzX6ghBm8kIaQ1-zMprVKrVBlrLID7D8&sz=s800',
              'https://drive.google.com/thumbnail?id=1ziwykm9tXrk-0pU8YQ029D7cRLgbEW3c&sz=s800',
              'https://drive.google.com/thumbnail?id=1NAdI1RA8lihORmOzhaG_D9tURUQpLW1A&sz=s800',
          ],
          location: 'Denpasar, Bali',
          hours: '18:00 - 20:00 WITA'
      },
      'balai': {
          title: 'Balai Diklat 🏛️',
          description: 'Balai Diklat Industri (BDI) Denpasar merupakan lembaga pelatihan di bawah Kementerian Perindustrian Republik Indonesia yang berperan penting dalam mencetak sumber daya manusia berkualitas di bidang industri kreatif. Fokus utama BDI Denpasar adalah mengembangkan keahlian di sektor fesyen, kerajinan, dan desain berbasis budaya lokal Bali. Melalui program pendidikan dan pelatihan, BDI menyediakan ruang bagi generasi muda untuk berinovasi, berkreasi, dan berwirausaha sehingga mampu bersaing di tingkat nasional maupun internasional. Dengan fasilitas pelatihan yang lengkap dan dukungan instruktur berpengalaman, BDI Denpasar menjadi salah satu motor penggerak tumbuhnya industri kreatif di Bali.',
          images: [
            'https://drive.google.com/thumbnail?id=1PW4JBXwMQ8YQLK6lKbjnMQ7A0b5xo553&sz=s800',
            'https://drive.google.com/thumbnail?id=1A2EaLsaLB38SjLmxH-BhCNfrzbojIkh-&sz=s800',
            'https://drive.google.com/thumbnail?id=1Bz6X5HUIZOvzgKa0hNeaju9ixvFfNtFJ&sz=s800',
            'https://drive.google.com/thumbnail?id=1rmlxpNaYMokpuPIHf3j9wiUui97jGpnz&sz=s800',
          ],
          location: 'Museum Kirti, Bali',
          hours: '09:00 - 10:30 WITA'
      },
      'jimbaran': {
          title: 'Café Jimbaran (Jimbaran Seafood Dinner) 🍽️🌅',
          description: 'Jimbaran adalah salah satu kawasan wisata kuliner paling populer di Bali, terkenal dengan deretan kafe dan restoran tepi pantai yang menyajikan seafood segar. Menikmati makan malam di tepi pantai Jimbaran memberikan pengalaman istimewa: duduk di atas pasir putih, mendengar deburan ombak, dan menyaksikan matahari terbenam yang romantis di cakrawala. Hidangan andalan berupa ikan bakar, udang, cumi, dan kerang dimasak dengan bumbu khas Bali yang menggugah selera, dilengkapi dengan sambal pedas dan aneka sayuran. Lampu-lampu temaram dan alunan musik tradisional menambah suasana hangat dan intim, menjadikan Jimbaran sebagai destinasi favorit untuk wisata kuliner keluarga, pasangan, maupun acara khusus.',
          images: [
              'https://drive.google.com/thumbnail?id=18NsZdTG9GmLz3CBNLHfE1jzxVAZwhf7i&sz=s800',
              'https://drive.google.com/thumbnail?id=1_HIarQYFD-cn4ht7BeYnWI7I57aGhfBD&sz=s800',
              'https://drive.google.com/thumbnail?id=1BvhXOMWI5WUQcsS8kJK8Zl6JktMiPtCL&sz=s800',
          ],
          location: 'Badung, Bali.',
          hours: '20:00 - 21:30 WITA'
      },
  };

  // untuk mendapatkan parameter dari URL
  const getUrlParameter = (name) => {
      name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
      const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
      const results = regex.exec(location.search);
      return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  };

  const productType = getUrlParameter('item');
  const productData = products[productType] || products['gwk']; 

  // UNTUK Mendapatkan semua elemen HTML
  const mainImage = document.getElementById('main-image');
  const productTitle = document.getElementById('product-title');
  const productDescription = document.getElementById('product-description');
  const thumbnailsContainer = document.getElementById('thumbnail-images');
  const productLocation = document.getElementById('product-location');
  const productHours = document.getElementById('product-hours');     

  // Cek apakah elemen-elemen penting ada di halaman 
  if (!mainImage || !productTitle || !productDescription || !thumbnailsContainer || !productLocation || !productHours) {
      console.error("Salah satu elemen ID (main-image, title, description, thumbnails, location, or hours) tidak ditemukan di HTML.");
      return; 
  }
//untuk me-render data
  const renderProductData = (data) => {
      productTitle.textContent = data.title;
      productDescription.textContent = data.description;
      
      // MENAMBAH LOGIKA UNTUK LOKASI & JAM BUKA
      productLocation.textContent = data.location;
      productHours.textContent = data.hours;

      // Set gambar utama awal
      mainImage.src = data.images[0];
      mainImage.alt = data.title;

      // Memuat thumbnail
      thumbnailsContainer.innerHTML = '';

      data.images.forEach((src, index) => {
          const img = document.createElement('img');
          img.src = src;
          img.alt = data.title;
          img.className = `w-16 h-16 object-cover rounded-lg cursor-pointer border-2 transition duration-200 hover:border-blue-500 ${index === 0 ? 'border-blue-500' : 'border-gray-200'}`;
          
          img.addEventListener('click', () => {
              mainImage.src = src;
              
              document.querySelectorAll('#thumbnail-images img').forEach(t => {
                  t.classList.remove('border-blue-500');
                  t.classList.add('border-gray-200');
              });
              
              img.classList.remove('border-gray-200');
              img.classList.add('border-blue-500');
          });
          thumbnailsContainer.appendChild(img);
      });
  };

  // Panggil fungsi render dengan data yang sudah dipilih
  renderProductData(productData);
});



function openDay(evt, dayName) {
  let i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("schedule-day");
  for (i = 0; i < tabcontent.length; i++) {

    tabcontent[i].classList.remove("active-content");
  }


  tablinks = document.getElementsByClassName("tab-button");
  for (i = 0; i < tablinks.length; i++) {

    tablinks[i].classList.remove("active");
  }


  document.getElementById(dayName).classList.add("active-content");


  evt.currentTarget.classList.add("active");
}


document.addEventListener('DOMContentLoaded', () => {
  const defaultButton = document.querySelector('.day-tabs .tab-button');
  const defaultContent = document.getElementById('day1');

  if (defaultButton && defaultContent) {
    defaultButton.classList.add('active');
    defaultContent.classList.add('active-content');
  } else {
    console.error("Elemen tombol atau konten jadwal tidak ditemukan.");
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const confettiContainer = document.getElementById('confetti-container');
  const colors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4CAF50', '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800', '#FF5722'];
  const numConfetti = 50; 

  function createConfetti() {
      for (let i = 0; i < numConfetti; i++) {
          const confetti = document.createElement('div');
          confetti.classList.add('confetti');
          confetti.style.left = Math.random() * 100 + 'vw';
          confetti.style.animationDelay = Math.random() * 3 + 's';
          confetti.style.setProperty('--color', colors[Math.floor(Math.random() * colors.length)]);
          confetti.style.setProperty('--duration', (Math.random() * 3 + 2) + 's');
          confetti.style.width = Math.random() * 8 + 5 + 'px';
          confetti.style.height = confetti.style.width; 
          confettiContainer.appendChild(confetti);
      }
  }

  setTimeout(createConfetti, 1000);

  const scrollButton = document.getElementById('scroll-to-gallery');
  if (scrollButton) {
      scrollButton.addEventListener('click', (e) => {
          e.preventDefault();
          const targetId = scrollButton.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
              window.scrollTo({
                  top: targetElement.offsetTop - 20, // Kurangi sedikit agar ada jarak
                  behavior: 'smooth'
              });
          }
      });
  }
});