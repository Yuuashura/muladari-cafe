import { motion } from 'framer-motion';
import { Coffee, Award, Sparkles, Users } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';

const values = [
  {
    icon: Coffee,
    title: 'Kopi Nusantara Pilihan',
    description: 'Biji kopi pilihan terbaik yang diseleksi ketat untuk menghasilkan rasa otentik.'
  },
  {
    icon: Award,
    title: 'Kualitas Konsisten',
    description: 'Penyajian dengan ketelitian tinggi oleh barista profesional di setiap cangkirnya.'
  },
  {
    icon: Sparkles,
    title: 'Suasana Hangat',
    description: 'Desain ruang bernuansa kayu klasik untuk membangkitkan kenyamanan bercerita.'
  },
  {
    icon: Users,
    title: 'Tempat Kolaborasi',
    description: 'Menjadi wadah bersatunya berbagai ide kreatif, komunitas, dan cita-cita.'
  }
];

const Story = () => {
  return (
    <section id="story" className="py-24 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Cerita di Balik Muladari" 
          subtitle="Tentang Kami" 
        />

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-espresso"
          >
            <h3 className="font-playfair text-2xl md:text-3xl font-bold leading-snug">
              "Berawal dari cerita menjadi sebuah cita-cita."
            </h3>
            
            <p className="font-dmsans text-sm md:text-base text-espresso/80 leading-relaxed">
              Perjalanan kami tidak dimulai dari sebuah bangunan yang nyaman, melainkan dari atas sadel Vespa di pinggir Jalan Koto Gadih, Lima Kaum. Menyeduh kopi dari siang hingga larut malam, lapak kami kala itu menjadi ruang singgah bagi anak-anak muda dan riuhnya jalanan malam. Namun, dinamika jalanan dan ketidaknyamanan warga sekitar membuat kami harus menepi dan menutup lapak sementara waktu.
            </p>
            
            <p className="font-dmsans text-sm md:text-base text-espresso/80 leading-relaxed">
              Kami tak lantas menyerah. Berpindah haluan ke depan Gedung Nasional Batusangkar, kami mencoba peruntungan baru dengan menyajikan kopi racikan manual brew. Sayangnya, tantangan belum usai. Konsep "kopi kedai" masih sangat awam di mata publik yang terbiasa dengan kopi saset. Menyadari hal tersebut, kami memutuskan rehat sejenak, menjadikan momen itu sebagai waktu untuk berbenah dan mengoreksi arah langkah kami.
            </p>

            <p className="font-dmsans text-sm md:text-base text-espresso/80 leading-relaxed">
              Berbekal hasil introspeksi, pada awal tahun 2025 kami kembali merajut asa dengan menyewa sebuah kedai kecil di Jalan Minang. Di titik inilah, nama Mula Dari Kopi resmi digunakan. Perlahan tapi pasti, racikan kopi kami mulai dipahami dan dicintai. Aroma kopi yang diseduh berhasil menarik penikmat setianya, dan rasa kebersamaan di kedai kecil itu tumbuh semakin pekat.
            </p>

            <p className="font-dmsans text-sm md:text-base text-espresso/80 leading-relaxed">
              Antusiasme luar biasa dari para pelanggan membawa kami pada sebuah lompatan besar hanya dalam kurun waktu empat bulan. Kami berekspansi ke kawasan Parak Juar dan berevolusi menjadi Distrik Mula Dari Kopi. Mengusung vibes nostalgia era sebelum 2000-an, tempat ini bukan lagi sekadar kedai kopi, melainkan ruang kumpul yang hidup dengan fasilitas photobooth, barbershop, hingga event mingguan.
            </p>

            <div className="pt-2">
              <div className="border-l-4 border-caramel pl-4 italic text-mocha font-playfair text-base">
                "Dari kerasnya jalanan menjadi sebuah distrik yang hangat, satu hal yang tak pernah berubah: semuanya memang mula dari kopi."
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Image stack effect */}
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(19,62,43,0.18)] border-[12px] border-cream">
              <img 
                src="/images/about.jpg" 
                alt="Kedai Muladari Kopi" 
                className="w-full h-[550px] object-cover hover:scale-105 transition-transform duration-700 vintage-photo"
              />
            </div>
            
            {/* Decorative background blocks */}
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-caramel/10 -z-0 rounded-2xl"></div>
            <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-mocha/10 -z-0 rounded-2xl"></div>
          </motion.div>
        </div>

        {/* Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((val, idx) => {
            const Icon = val.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-cream/40 p-6 rounded-xl border-2 border-espresso/15 hover:border-espresso/35 hover:bg-cream transition-all duration-300 group shadow-[4px_4px_0px_0px_rgba(19,62,43,0.12)] hover:shadow-[6px_6px_0px_0px_rgba(19,62,43,0.25)] text-center"
              >
                <div className="w-12 h-12 bg-mocha text-cream rounded-lg flex items-center justify-center mx-auto mb-5 group-hover:bg-caramel transition-colors duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="font-playfair text-lg font-bold text-espresso mb-2">{val.title}</h4>
                <p className="font-dmsans text-sm text-espresso/70 leading-relaxed">{val.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Story;
