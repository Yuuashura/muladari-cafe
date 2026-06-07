const namedItems = [
  { id: 1, title: 'Koper Besi Era Kolonial', caption: 'Koper besi antik asal zaman penjajahan Belanda dengan nuansa rustik yang bernilai sejarah tinggi', image: '/images/Galery/1.jpg' },
  { id: 2, title: 'TV Jadul Era 70s', caption: 'Televisi kayu antik bergaya retro atau dikenal sebagai TV Jengki yang populer di era 1970-an', image: '/images/Galery/2.jpg' },
  { id: 3, title: 'Nostalgia Elektronik 70-90s', caption: 'Koleksi barang elektronik lawas mulai dari TV tabung antik, radio tape boombox, telepon kabel, hingga kamera SLR analog klasik', image: '/images/Galery/3.jpg' },
  { id: 4, title: 'Cermin Jadul Ukir', caption: 'Cermin dinding dengan bingkai kayu solid berukir detail khas era 80-an yang menghadirkan keindahan vintage', image: '/images/Galery/4.jpg' },
  { id: 5, title: 'Sepeda Federal', caption: 'Sepeda gunung Federal klasik yang populer di Indonesia pada era 1980-an hingga 1990-an', image: '/images/Galery/5.jpg' },
  { id: 6, title: 'Pigura Vintage', caption: 'Lukisan oval potret wanita dengan busana era 1960-an dalam bingkai ukiran gaya Baroque yang mewah', image: '/images/Galery/6.jpg' },
  { id: 7, title: 'Topeng Asmat Papua', caption: 'Topeng kayu tradisional bercorak etnik eksotis dengan teknik lukis titik (dot painting) khas Papua', image: '/images/Galery/7.jpg' },
  { id: 8, title: 'Patung Dewi Sri', caption: 'Ukiran kayu tradisional Bali menggambarkan sosok Dewi Sri sebagai simbol kemakmuran dan kesuburan', image: '/images/Galery/8.jpg' },
  { id: 9, title: 'Patung Seni Tradisional', caption: 'Koleksi patung kayu eksotis mulai dari patung primitif suku Kamoro Papua hingga patung penari Legong khas Bali', image: '/images/Galery/9.jpg' },
  { id: 10, title: 'Figura Seni Bali', caption: 'Lukisan tradisional Bali yang menampilkan sosok Dewi Saraswati dan penari Bali klasik dalam bingkai ukir kayu estetis', image: '/images/Galery/10.jpg' },
  { id: 11, title: 'Uang Kertas Kuno', caption: 'Koleksi uang kertas kuno Indonesia (seri tahun 1950-an) yang dibingkai rapi bernilai numismatik tinggi', image: '/images/Galery/11.jpg' },
  { id: 12, title: 'Keris dan Kujang', caption: 'Senjata tradisional khas Nusantara berupa Keris Melayu/Minang dan Kujang Sunda sebagai pajangan antik bernilai seni', image: '/images/Galery/12.jpg' },
  { id: 13, title: 'Patung Garuda Wisnu Kencana', caption: 'Karya seni ukir kayu khas Bali menggambarkan Dewa Wisnu yang bertengger gagah di atas burung mitologi Garuda', image: '/images/Galery/13.jpg' },
  { id: 14, title: 'Patung Dewi Sita', caption: 'Ukiran kayu vertikal khas Bali yang menggambarkan sosok Dewi Sita dengan warna polikrom antik bernuansa rustic', image: '/images/Galery/14.jpg' },
];

const waFiles = [
  'WhatsApp Image 2026-06-06 at 23.27.54.jpeg',
  'WhatsApp Image 2026-06-06 at 23.27.55 (1).jpeg',
  'WhatsApp Image 2026-06-06 at 23.27.55.jpeg',
  'WhatsApp Image 2026-06-06 at 23.27.56 (1).jpeg',
  'WhatsApp Image 2026-06-06 at 23.27.56 (2).jpeg',
  'WhatsApp Image 2026-06-06 at 23.27.56.jpeg',
  'WhatsApp Image 2026-06-06 at 23.27.57 (1).jpeg',
  'WhatsApp Image 2026-06-06 at 23.27.57 (2).jpeg',
  'WhatsApp Image 2026-06-06 at 23.27.57.jpeg',
  'WhatsApp Image 2026-06-06 at 23.27.58 (1).jpeg',
  'WhatsApp Image 2026-06-06 at 23.27.58.jpeg',
  'WhatsApp Image 2026-06-06 at 23.27.59 (1).jpeg',
  'WhatsApp Image 2026-06-06 at 23.27.59 (2).jpeg',
  'WhatsApp Image 2026-06-06 at 23.27.59.jpeg',
  'WhatsApp Image 2026-06-06 at 23.28.00 (1).jpeg',
  'WhatsApp Image 2026-06-06 at 23.28.00 (2).jpeg',
  'WhatsApp Image 2026-06-06 at 23.28.00.jpeg',
  'WhatsApp Image 2026-06-06 at 23.28.01 (1).jpeg',
  'WhatsApp Image 2026-06-06 at 23.28.01 (2).jpeg',
  'WhatsApp Image 2026-06-06 at 23.28.01 (3).jpeg',
  'WhatsApp Image 2026-06-06 at 23.28.01.jpeg',
  'WhatsApp Image 2026-06-06 at 23.28.02 (1).jpeg',
  'WhatsApp Image 2026-06-06 at 23.28.02 (2).jpeg',
  'WhatsApp Image 2026-06-06 at 23.28.02 (3).jpeg',
  'WhatsApp Image 2026-06-06 at 23.28.02.jpeg',
  'WhatsApp Image 2026-06-06 at 23.28.03 (1).jpeg',
  'WhatsApp Image 2026-06-06 at 23.28.03 (2).jpeg',
  'WhatsApp Image 2026-06-06 at 23.28.03.jpeg',
  'WhatsApp Image 2026-06-06 at 23.28.04 (1).jpeg',
  'WhatsApp Image 2026-06-06 at 23.28.04 (2).jpeg',
  'WhatsApp Image 2026-06-06 at 23.28.04.jpeg',
  'WhatsApp Image 2026-06-06 at 23.28.05 (1).jpeg',
  'WhatsApp Image 2026-06-06 at 23.28.05.jpeg',
  'WhatsApp Image 2026-06-06 at 23.28.06 (1).jpeg',
  'WhatsApp Image 2026-06-06 at 23.28.06 (2).jpeg',
  'WhatsApp Image 2026-06-06 at 23.28.06 (3).jpeg',
  'WhatsApp Image 2026-06-06 at 23.28.06.jpeg',
  'WhatsApp Image 2026-06-06 at 23.28.07.jpeg',
  'WhatsApp Image 2026-06-06 at 23.28.08 (1).jpeg',
  'WhatsApp Image 2026-06-06 at 23.28.08 (2).jpeg',
  'WhatsApp Image 2026-06-06 at 23.28.08.jpeg',
  'WhatsApp Image 2026-06-06 at 23.28.09.jpeg',
  'WhatsApp Image 2026-06-06 at 23.28.10 (1).jpeg',
  'WhatsApp Image 2026-06-06 at 23.28.10.jpeg',
  'WhatsApp Image 2026-06-06 at 23.28.11 (1).jpeg',
  'WhatsApp Image 2026-06-06 at 23.28.11.jpeg',
  'WhatsApp Image 2026-06-06 at 23.28.12 (1).jpeg',
  'WhatsApp Image 2026-06-06 at 23.28.12.jpeg',
  'WhatsApp Image 2026-06-06 at 23.28.13 (1).jpeg',
  'WhatsApp Image 2026-06-06 at 23.28.13.jpeg',
  'WhatsApp Image 2026-06-06 at 23.28.14.jpeg',
  'WhatsApp Image 2026-06-06 at 23.28.15.jpeg',
  'WhatsApp Image 2026-06-06 at 23.28.16 (1).jpeg',
  'WhatsApp Image 2026-06-06 at 23.28.16 (2).jpeg',
  'WhatsApp Image 2026-06-06 at 23.28.16.jpeg',
  'WhatsApp Image 2026-06-06 at 23.28.17 (1).jpeg',
  'WhatsApp Image 2026-06-06 at 23.28.17.jpeg',
  'WhatsApp Image 2026-06-06 at 23.28.18 (1).jpeg',
  'WhatsApp Image 2026-06-06 at 23.28.18 (2).jpeg',
  'WhatsApp Image 2026-06-06 at 23.28.18.jpeg',
  'WhatsApp Image 2026-06-06 at 23.28.19 (1).jpeg',
  'WhatsApp Image 2026-06-06 at 23.28.19.jpeg',
  'WhatsApp Image 2026-06-06 at 23.28.20 (1).jpeg',
  'WhatsApp Image 2026-06-06 at 23.28.20 (2).jpeg',
  'WhatsApp Image 2026-06-06 at 23.28.20.jpeg',
  'WhatsApp Image 2026-06-06 at 23.28.21 (1).jpeg',
  'WhatsApp Image 2026-06-06 at 23.28.21.jpeg',
  'WhatsApp Image 2026-06-06 at 23.28.22 (1).jpeg',
  'WhatsApp Image 2026-06-06 at 23.28.22 (2).jpeg',
  'WhatsApp Image 2026-06-06 at 23.28.22.jpeg',
  'WhatsApp Image 2026-06-06 at 23.28.23 (1).jpeg',
  'WhatsApp Image 2026-06-06 at 23.28.23.jpeg',
  'WhatsApp Image 2026-06-06 at 23.28.24 (1).jpeg',
  'WhatsApp Image 2026-06-06 at 23.28.24 (2).jpeg',
  'WhatsApp Image 2026-06-06 at 23.28.24.jpeg',
  'WhatsApp Image 2026-06-06 at 23.28.25 (1).jpeg',
  'WhatsApp Image 2026-06-06 at 23.28.25.jpeg',
  'WhatsApp Image 2026-06-06 at 23.28.26 (1).jpeg',
  'WhatsApp Image 2026-06-06 at 23.28.26 (2).jpeg',
  'WhatsApp Image 2026-06-06 at 23.28.26.jpeg',
  'WhatsApp Image 2026-06-06 at 23.28.27 (1).jpeg',
  'WhatsApp Image 2026-06-06 at 23.28.27.jpeg',
  'WhatsApp Image 2026-06-06 at 23.28.28 (1).jpeg',
  'WhatsApp Image 2026-06-06 at 23.28.28 (2).jpeg',
  'WhatsApp Image 2026-06-06 at 23.28.28.jpeg',
  'WhatsApp Image 2026-06-06 at 23.28.29 (1).jpeg',
  'WhatsApp Image 2026-06-06 at 23.28.29 (2).jpeg',
  'WhatsApp Image 2026-06-06 at 23.28.29.jpeg',
];

// Exact descriptions for ALL 89 files based on walkthrough photo sequence
const waDetailsMap = {
  'WhatsApp Image 2026-06-06 at 23.27.54.jpeg': {
    title: 'Gantungan Kalung Vintique',
    caption: 'Display deretan kalung antik dengan liontin bintang dan simbol klasik di lemari kaca Vintique Accessories.'
  },
  'WhatsApp Image 2026-06-06 at 23.27.55 (1).jpeg': {
    title: 'Pajangan Cincin Retro',
    caption: 'Koleksi cincin perak, batu akik, dan kuningan klasik yang tertata rapi di dalam laci display.'
  },
  'WhatsApp Image 2026-06-06 at 23.27.55.jpeg': {
    title: 'Signboard Muladari Kopi',
    caption: 'Papan nama hijau Muladari Kopi yang menyembul segar di balik rimbunnya tanaman alocasia berdaun lebar.'
  },
  'WhatsApp Image 2026-06-06 at 23.27.56 (1).jpeg': {
    title: 'Koleksi Anting Klasik',
    caption: 'Anting-anting bermotif etnik buatan lokal terpajang pada rak kain pajangan Vintique Accessories.'
  },
  'WhatsApp Image 2026-06-06 at 23.27.56 (2).jpeg': {
    title: 'Sudut Pajangan Vintique',
    caption: 'Barisan aksesoris retro tertata rapi menciptakan atmosfer vintage di area toko aksesoris.'
  },
  'WhatsApp Image 2026-06-06 at 23.27.56.jpeg': {
    title: 'Pintu Kaca Vintique',
    caption: 'Refleksi pintu kaca bertuliskan District Muladari dan sign neon merah Vintique Accessories di malam hari.'
  },
  'WhatsApp Image 2026-06-06 at 23.27.57 (1).jpeg': {
    title: 'Dekorasi Poster Alternatif',
    caption: 'Poster bergaya retro minimalis terpajang rapi pada dinding semen ekspos di area outdoor.'
  },
  'WhatsApp Image 2026-06-06 at 23.27.57 (2).jpeg': {
    title: 'Deretan Kursi Merah Retro',
    caption: 'Kursi plastik merah dengan kaki besi berbaris rapi siap menyambut pengunjung di koridor luar.'
  },
  'WhatsApp Image 2026-06-06 at 23.27.57.jpeg': {
    title: 'Kursi Retro & Poster Seni',
    caption: 'Tiga buah kursi merah retro plastik di area taman berdampingan dengan poster estetis di dinding semen ekspos.'
  },
  'WhatsApp Image 2026-06-06 at 23.27.58 (1).jpeg': {
    title: 'Meja Taman Besi Hijau',
    caption: 'Set meja kursi besi minimalis hijau yang kokoh ditempatkan di atas lantai semen luar ruangan.'
  },
  'WhatsApp Image 2026-06-06 at 23.27.58.jpeg': {
    title: 'Sudut Duduk Santai Outdoor',
    caption: 'Kombinasi kursi hijau dan lantai kerikil memberikan nuansa alam yang menenangkan.'
  },
  'WhatsApp Image 2026-06-06 at 23.27.59 (1).jpeg': {
    title: 'Penerangan Lampu Gantung',
    caption: 'Lampu bohlam gantung berkap hijau retro menerangi area duduk luar ruangan saat hari mulai gelap.'
  },
  'WhatsApp Image 2026-06-06 at 23.27.59 (2).jpeg': {
    title: 'Tanaman Hijau Penghias Dinding',
    caption: 'Rimbunnya tanaman hias merambat di sepanjang tembok batas semen luar ruangan kafe.'
  },
  'WhatsApp Image 2026-06-06 at 23.27.59.jpeg': {
    title: 'Pojok Hijau Teduh Taman',
    caption: 'Pepohonan rindang di area taman belakang menyaring terik matahari sore Batusangkar.'
  },
  'WhatsApp Image 2026-06-06 at 23.28.00 (1).jpeg': {
    title: 'Patung Kayu Primitif Etnik',
    caption: 'Koleksi patung kayu etnik suku pedalaman Nusantara bernilai seni tinggi terpajang di galeri.'
  },
  'WhatsApp Image 2026-06-06 at 23.28.00 (2).jpeg': {
    title: 'Ukiran Jati Vertikal Klasik',
    caption: 'Detail dekorasi ukiran kayu tradisional bertema alam dipasang menghiasi tiang ruangan.'
  },
  'WhatsApp Image 2026-06-06 at 23.28.00.jpeg': {
    title: 'Bingkai Foto Kayu Antik',
    caption: 'Pigura kayu jati ukir lawas dengan foto bernuansa hitam putih terpajang rapi.'
  },
  'WhatsApp Image 2026-06-06 at 23.28.01 (1).jpeg': {
    title: 'Patung Penari Bali Mahkota',
    caption: 'Detail patung ukiran penari Bali dengan hiasan mahkota kepala yang sangat rumit dan indah.'
  },
  'WhatsApp Image 2026-06-06 at 23.28.01 (2).jpeg': {
    title: 'Ukiran Patung Penari Bali',
    caption: 'Detail ukiran kayu gelap penari Bali tradisional bernilai estetis tinggi yang diterangi cahaya kuning hangat.'
  },
  'WhatsApp Image 2026-06-06 at 23.28.01 (3).jpeg': {
    title: 'Pajangan Patung Etnik Bali',
    caption: 'Patung kayu dekoratif penari klasik Bali sebagai pemanis sudut interior bernuansa hangat.'
  },
  'WhatsApp Image 2026-06-06 at 23.28.01.jpeg': {
    title: 'Sudut Pajangan Ornamen Kayu',
    caption: 'Kombinasi patung ukir dan lukisan antik berpigura emas di bawah sorot lampu temaram.'
  },
  'WhatsApp Image 2026-06-06 at 23.28.02 (1).jpeg': {
    title: 'Koleksi Rupiah Kuno Kertas',
    caption: 'Lembaran uang kertas kuno Indonesia tahun emisi lawas dibingkai rapi untuk nilai sejarah.'
  },
  'WhatsApp Image 2026-06-06 at 23.28.02 (2).jpeg': {
    title: 'Pajangan Keris Tradisional',
    caption: 'Senjata tradisional keris pusaka dengan warangka kayu berukir estetis dipajang di dinding.'
  },
  'WhatsApp Image 2026-06-06 at 23.28.02 (3).jpeg': {
    title: 'Sudut Antik Galeri Kafe',
    caption: 'Berbagai koleksi benda bersejarah dipamerkan rapi menambah keunikan atmosfer ruangan.'
  },
  'WhatsApp Image 2026-06-06 at 23.28.02.jpeg': {
    title: 'Seni Kerajinan Kayu Nusantara',
    caption: 'Patung-patung kayu tradisional dipajang bersanding memberikan sentuhan magis bernilai seni.'
  },
  'WhatsApp Image 2026-06-06 at 23.28.03 (1).jpeg': {
    title: 'Hiasan Topeng Kayu Kanan',
    caption: 'Ukiran topeng kayu ekspresif terpasang menghias bingkai kayu jati pintu masuk utama.'
  },
  'WhatsApp Image 2026-06-06 at 23.28.03 (2).jpeg': {
    title: 'Kusen Pintu Kayu Jati',
    caption: 'Kusen kayu solid tebal dengan detail pengerjaan klasik yang tampak kokoh menyambut tamu.'
  },
  'WhatsApp Image 2026-06-06 at 23.28.03.jpeg': {
    title: 'Lorong Masuk Utama Kafe',
    caption: 'Lorong pintu masuk kafe dengan tulisan penunjuk arah pesanan yang tampak hangat berkat pencahayaan.'
  },
  'WhatsApp Image 2026-06-06 at 23.28.04 (1).jpeg': {
    title: 'Topeng Kayu Etnik Kiri',
    caption: 'Topeng hiasan kayu bermotif adat Nusantara terpasang simetris di kusen pintu masuk.'
  },
  'WhatsApp Image 2026-06-06 at 23.28.04 (2).jpeg': {
    title: 'Cermin Bulat Bingkai Hitam',
    caption: 'Cermin hias dinding bergaya Baroque klasik terpasang anggun di samping pintu masuk kafe.'
  },
  'WhatsApp Image 2026-06-06 at 23.28.04.jpeg': {
    title: 'Pintu Utama District Muladari',
    caption: 'Daun pintu kayu jati berlogo District Muladari yang menjadi akses utama menuju area indoor.'
  },
  'WhatsApp Image 2026-06-06 at 23.28.05 (1).jpeg': {
    title: 'Neon Lightbox Order Here',
    caption: 'Papan lampu bertuliskan Order Here yang berpendar terang dengan font retro khas kafe.'
  },
  'WhatsApp Image 2026-06-06 at 23.28.05.jpeg': {
    title: 'Pintu Kayu Utama Kafe',
    caption: 'Pintu masuk kayu bertuliskan District Muladari diapit topeng etnik dan penanda Order Here menyala.'
  },
  'WhatsApp Image 2026-06-06 at 23.28.06 (1).jpeg': {
    title: 'Lampu Dinding Klasik Luar',
    caption: 'Lampu hias besi bergaya lentera nempel di dinding luar memberikan penerangan temaram.'
  },
  'WhatsApp Image 2026-06-06 at 23.28.06 (2).jpeg': {
    title: 'Kesejukan Halaman Belakang',
    caption: 'Pemandangan asri area outdoor yang dikelilingi pepohonan pelindung yang rindang.'
  },
  'WhatsApp Image 2026-06-06 at 23.28.06 (3).jpeg': {
    title: 'Lantai Kerikil Jalan Setapak',
    caption: 'Jalan setapak dari kerikil batu alam untuk menyerap air hujan dan memberi kesan alami taman.'
  },
  'WhatsApp Image 2026-06-06 at 23.28.06.jpeg': {
    title: 'Kap Lampu Gantung Hijau',
    caption: 'Kap lampu besi hijau klasik yang terpasang di langit-langit teras luar bangunan kafe.'
  },
  'WhatsApp Image 2026-06-06 at 23.28.07.jpeg': {
    title: 'Batang Pohon Peneduh Taman',
    caption: 'Batang pohon besar kokoh di halaman tengah yang menjadi penopang asri area outdoor.'
  },
  'WhatsApp Image 2026-06-06 at 23.28.08 (1).jpeg': {
    title: 'Meja Duduk Teduh Luar',
    caption: 'Set meja kursi besi hijau yang nyaman beralaskan beton cetak di bawah naungan pohon.'
  },
  'WhatsApp Image 2026-06-06 at 23.28.08 (2).jpeg': {
    title: 'Hammock Gantung Kain Rileks',
    caption: 'Hammock anyaman terpasang rileks di halaman luar, siap digunakan bersantai menikmati senja.'
  },
  'WhatsApp Image 2026-06-06 at 23.28.08.jpeg': {
    title: 'Meja Duduk Bawah Hammock',
    caption: 'Ruang rileks halaman outdoor berlantai beton ekspos di bawah pohon dengan hammock gantung yang santai.'
  },
  'WhatsApp Image 2026-06-06 at 23.28.09.jpeg': {
    title: 'Pagar Tembok & Suasana Sore',
    caption: 'Sudut luar berpagar tembok semen berhiaskan tanaman rambat alami di sore hari yang damai.'
  },
  'WhatsApp Image 2026-06-06 at 23.28.10 (1).jpeg': {
    title: 'Pengunjung Rileks di Halaman',
    caption: 'Sepasang sahabat duduk asyik menikmati hidangan di area outdoor bernuansa taman.'
  },
  'WhatsApp Image 2026-06-06 at 23.28.10.jpeg': {
    title: 'Nongkrong Santai Sore Hari',
    caption: 'Pengunjung asyik mengobrol di meja outdoor berlatar tanaman pisang hias besar dan lampu gantung teduh.'
  },
  'WhatsApp Image 2026-06-06 at 23.28.11 (1).jpeg': {
    title: 'Gantungan Hammock Kain Hijau',
    caption: 'Hammock kain bernuansa hijau terpasang kokoh pada dahan pohon peneduh halaman kafe.'
  },
  'WhatsApp Image 2026-06-06 at 23.28.11.jpeg': {
    title: 'Hammock Teduh Halaman',
    caption: 'Hammock gantung yang diikat di antara pohon peneduh halaman kafe untuk tempat istirahat santai.'
  },
  'WhatsApp Image 2026-06-06 at 23.28.12 (1).jpeg': {
    title: 'Kedaunan Pohon Rindang',
    caption: 'Rimbunnya dedaunan hijau pohon pelindung menyaring cahaya matahari senja secara alami.'
  },
  'WhatsApp Image 2026-06-06 at 23.28.12.jpeg': {
    title: 'Dinding Semen Ekspos Luar',
    caption: 'Tembok semen lawas dengan panel hijau dekoratif menciptakan suasana industrial kuno.'
  },
  'WhatsApp Image 2026-06-06 at 23.28.13 (1).jpeg': {
    title: 'Kursi Besi Hijau Sendiri',
    caption: 'Satu unit kursi taman besi hijau diletakkan tenang di pojokan halaman berkerikil.'
  },
  'WhatsApp Image 2026-06-06 at 23.28.13.jpeg': {
    title: 'Rimbun Tanaman Hias Daun',
    caption: 'Kumpulan tanaman tropis berdaun lebar memberikan kesegaran di area santai outdoor.'
  },
  'WhatsApp Image 2026-06-06 at 23.28.14.jpeg': {
    title: 'Intipan Taman dari Dedaunan',
    caption: 'Perspektif tersembunyi meja kursi taman berwarna hijau segar dibingkai dedaunan hijau di latar depan.'
  },
  'WhatsApp Image 2026-06-06 at 23.28.15.jpeg': {
    title: 'Aksi Barista & Botol Sirup',
    caption: 'Barista berkaos Bali Vibes meracik racikan menu di meja bar di samping pajangan botol sirup.'
  },
  'WhatsApp Image 2026-06-06 at 23.28.16 (1).jpeg': {
    title: 'Order & Pay Here Board',
    caption: 'Papan penunjuk kayu bertuliskan Order & Pay Here diletakkan di depan meja kasir saji.'
  },
  'WhatsApp Image 2026-06-06 at 23.28.16 (2).jpeg': {
    title: 'Barisan Botol Sirup Pump',
    caption: 'Botol sirup rasa premium berjejer rapi siap digunakan barista menyeduh racikan favorit.'
  },
  'WhatsApp Image 2026-06-06 at 23.28.16.jpeg': {
    title: 'Detail Perlengkapan Bar Kopi',
    caption: 'Botol sirup manis, shaker, dan cangkir stainless steel tertata bersih di area meja bar.'
  },
  'WhatsApp Image 2026-06-06 at 23.28.17 (1).jpeg': {
    title: 'Tangan Barista Memompa Sirup',
    caption: 'Detail kesibukan tangan barista menekan botol sirup pump untuk takaran manis yang presisi.'
  },
  'WhatsApp Image 2026-06-06 at 23.28.17.jpeg': {
    title: 'Kebersihan Meja Bar Racik',
    caption: 'Suasana bersih dan higienis meja bar persiapan sebelum minuman disajikan ke pelanggan.'
  },
  'WhatsApp Image 2026-06-06 at 23.28.18 (1).jpeg': {
    title: 'Kusen Jendela Hijau Klasik',
    caption: 'Jendela kaca besar berbingkai kayu hijau retro yang menghadirkan karakter bangunan lawas.'
  },
  'WhatsApp Image 2026-06-06 at 23.28.18 (2).jpeg': {
    title: 'Papan Larangan Gantung Kaca',
    caption: 'Tanda dilarang membawa makanan luar yang digantung menggunakan rantai kecil pada kaca jendela.'
  },
  'WhatsApp Image 2026-06-06 at 23.28.18.jpeg': {
    title: 'Aturan Kafe & Hiasan Topeng',
    caption: 'Papan larangan membawa makanan luar berdampingan dengan ukiran kayu topeng wajah berambut serabut.'
  },
  'WhatsApp Image 2026-06-06 at 23.28.19 (1).jpeg': {
    title: 'Topeng Kayu Ornamen Jendela',
    caption: 'Topeng ukiran kayu berwajah suku tradisional tergantung artistik menghias kusen jendela hijau.'
  },
  'WhatsApp Image 2026-06-06 at 23.28.19.jpeg': {
    title: 'Kaca Jendela Berdekorasi Sign',
    caption: 'Sudut pandang estetis kaca jendela luar bangunan kafe dengan hiasan gantung penanda aturan.'
  },
  'WhatsApp Image 2026-06-06 at 23.28.20 (1).jpeg': {
    title: 'Tiang Payung Taman Outdoor',
    caption: 'Detail tiang penyangga payung pelindung matahari di sela-sela meja kayu halaman.'
  },
  'WhatsApp Image 2026-06-06 at 23.28.20 (2).jpeg': {
    title: 'Meja Kursi Halaman Kerikil',
    caption: 'Kombinasi meja kayu solid kaki besi hitam dan kursi besi hijau di atas tanah berkerikil.'
  },
  'WhatsApp Image 2026-06-06 at 23.28.20.jpeg': {
    title: 'Payung Teduh Area Garden',
    caption: 'Set meja kursi besi hijau dan payung taman besar di area outdoor beralas kerikil yang asri.'
  },
  'WhatsApp Image 2026-06-06 at 23.28.21 (1).jpeg': {
    title: 'Payung Taman Hijau Berbaris',
    caption: 'Deretan payung besar berwarna hijau terpasang berjejer melingupi meja kursi luar ruangan.'
  },
  'WhatsApp Image 2026-06-06 at 23.28.21.jpeg': {
    title: 'Suasana Duduk Outdoor Tenang',
    caption: 'Ketenangan suasana luar ruangan yang asri dan sejuk berkat pepohonan rindang di sekeliling.'
  },
  'WhatsApp Image 2026-06-06 at 23.28.22 (1).jpeg': {
    title: 'Kursi Besi Hijau Minimalis',
    caption: 'Satu set kursi besi hijau di halaman belakang kafe, menawarkan spot foto bergaya retro.'
  },
  'WhatsApp Image 2026-06-06 at 23.28.22 (2).jpeg': {
    title: 'Rimbun Pepohonan Atas Halaman',
    caption: 'Teduhnya suasana halaman belakang berkat naungan daun-daun rimbun dari pepohonan besar.'
  },
  'WhatsApp Image 2026-06-06 at 23.28.22.jpeg': {
    title: 'Halaman Belakang Luas Kafe',
    caption: 'Area outdoor berkapasitas besar beralaskan batu kerikil kecil yang sangat cocok untuk gathering.'
  },
  'WhatsApp Image 2026-06-06 at 23.28.23 (1).jpeg': {
    title: 'Display Gelang Manik Kreasi',
    caption: 'Koleksi gelang manik-manik warna-warni kreasi handmade unik tertata rapi di gantungan kayu.'
  },
  'WhatsApp Image 2026-06-06 at 23.28.23.jpeg': {
    title: 'Rak Gelang Manik Vintique',
    caption: 'Pilihan gelang manik warna-warni kreasi handmade unik yang tertata rapi di gantungan pajangan.'
  },
  'WhatsApp Image 2026-06-06 at 23.28.24 (1).jpeg': {
    title: 'Gantungan Kalung Manik Toko',
    caption: 'Display kalung buatan tangan berhiaskan manik warna-warni dipajang di etalase Vintique.'
  },
  'WhatsApp Image 2026-06-06 at 23.28.24 (2).jpeg': {
    title: 'Manik Bintang Gelang Tangan',
    caption: 'Detail manik-manik berbentuk bintang, bunga, dan batu alam pada gelang buatan tangan.'
  },
  'WhatsApp Image 2026-06-06 at 23.28.24.jpeg': {
    title: 'Aksesoris Manik Buatan Tangan',
    caption: 'Aneka perhiasan manik warna-warni handmade dipajang di atas meja kayu Vintique Accessories.'
  },
  'WhatsApp Image 2026-06-06 at 23.28.25 (1).jpeg': {
    title: 'Etalase Cincin Manik Elastis',
    caption: 'Koleksi cincin elastis berhias manik-manik kecil lucu berbagai warna dipajang rapi.'
  },
  'WhatsApp Image 2026-06-06 at 23.28.25.jpeg': {
    title: 'Gantungan Aksesoris Kunci',
    caption: 'Gantungan kunci manik-manik dan gantungan HP etnik tergantung manis di rak pajangan.'
  },
  'WhatsApp Image 2026-06-06 at 23.28.26 (1).jpeg': {
    title: 'Aksesoris Model Etnik Kuno',
    caption: 'Koleksi aksesoris dengan ornamen bergaya tradisional antik dipamerkan di lemari kaca.'
  },
  'WhatsApp Image 2026-06-06 at 23.28.26 (2).jpeg': {
    title: 'Koleksi Gelang Batuan Alam',
    caption: 'Gelang tangan pria dan wanita berhias manik-manik batu alam berwarna biru dan hitam gelap.'
  },
  'WhatsApp Image 2026-06-06 at 23.28.26.jpeg': {
    title: 'Sudut Belanja Souvenir',
    caption: 'Berbagai souvenir perhiasan manik buatan tangan yang dapat dibeli oleh pengunjung kafe.'
  },
  'WhatsApp Image 2026-06-06 at 23.28.27 (1).jpeg': {
    title: 'Tulisan Papan Selancar Pajangan',
    caption: 'Detail tulisan tangan kreatif di papan selancar kuning yang dipajang di dinding semen kafe.'
  },
  'WhatsApp Image 2026-06-06 at 23.28.27.jpeg': {
    title: 'Papan Selancar Hiasan Dinding',
    caption: 'Dekorasi papan selancar kayu berwarna kuning cerah bertuliskan motto positif menghias taman.'
  },
  'WhatsApp Image 2026-06-06 at 23.28.28 (1).jpeg': {
    title: 'Tembok Batako Ekspos Natural',
    caption: 'Permukaan dinding batako semen ekspos berlumut alami memberikan kesan rustic yang kuat.'
  },
  'WhatsApp Image 2026-06-06 at 23.28.28 (2).jpeg': {
    title: 'Daun Alocasia Raksasa Halaman',
    caption: 'Daun tanaman hias alocasia berukuran besar berdiri rimbun mempercantik sudut pagar semen.'
  },
  'WhatsApp Image 2026-06-06 at 23.28.28.jpeg': {
    title: 'Tembok Asri Taman Belakang',
    caption: 'Kombinasi papan nama retro kafe, tembok semen terekspos, dan rimbunnya tanaman hias.'
  },
  'WhatsApp Image 2026-06-06 at 23.28.29 (1).jpeg': {
    title: 'Detail Signboard Papan Catur',
    caption: 'Papan nama retro District Muladari Kopi dengan aksen motif kotak catur merah putih yang unik.'
  },
  'WhatsApp Image 2026-06-06 at 23.28.29 (2).jpeg': {
    title: 'Signboard Muladari Kopi Taman',
    caption: 'Papan nama bernuansa retro pink bertuliskan Muladari Kopi terpasang di dinding taman luar.'
  },
  'WhatsApp Image 2026-06-06 at 23.28.29.jpeg': {
    title: 'Surfboard Decor & Motto Kopi',
    caption: 'Pajangan papan selancar kuning bertuliskan pesan tentang kopi dan getaran positif di samping sign kafe.'
  }
};

const waGallery = waFiles.map((filename, i) => {
  const details = waDetailsMap[filename] || {
    title: 'Momen Muladari Kopi',
    caption: 'Keseruan, kehangatan, dan kenangan indah bersama di Muladari Kopi, Batusangkar.'
  };
  
  return {
    id: 15 + i,
    title: details.title,
    caption: details.caption,
    image: `/images/Galery/${encodeURIComponent(filename)}`
  };
});

export const galleryList = [...namedItems, ...waGallery];
