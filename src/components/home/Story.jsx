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
            
            <p className="font-dmsans text-base md:text-lg text-espresso/80 leading-relaxed">
              Muladari Coffee berdiri bukan sekadar sebagai penyedia asupan kafein harian Anda. Kami lahir dari kecintaan mendalam terhadap budaya kumpul, bercerita, dan berdiskusi masyarakat lokal Batusangkar.
            </p>
            
            <p className="font-dmsans text-base md:text-lg text-espresso/80 leading-relaxed">
              Di setiap cangkir kopi yang kami sajikan, ada cerita perjuangan petani kopi lokal, dedikasi barista kami, serta mimpi-mimpi besar dari setiap pelanggan yang datang berdiskusi di meja-meja kami. Kami percaya bahwa kopi adalah jembatan yang menghubungkan setiap ide menjadi sebuah kenyataan.
            </p>

            <div className="pt-4">
              <div className="border-l-4 border-caramel pl-4 italic text-mocha font-playfair text-lg">
                "Kami hadir untuk menemani setiap proses kreatifmu, mendengarkan keluh kesahmu, dan menyambut setiap keberhasilanmu dengan secangkir kopi hangat."
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
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-cream">
              <img 
                src="https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?q=80&w=800&auto=format&fit=crop" 
                alt="Proses Brewing Kopi Muladari" 
                className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
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
                className="bg-cream/40 p-6 rounded-xl border border-mocha/10 hover:border-caramel/40 hover:bg-cream transition-all duration-300 group shadow-sm hover:shadow-md text-center"
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
