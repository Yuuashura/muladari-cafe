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
              Muladari Kopi is a charming coffee shop situated in the heart of Baringin, Lima Kaum, Tanah Datar Regency, West Sumatra, offering a cozy retreat for coffee enthusiasts and casual visitors alike. This spot expertly blends a vintage aesthetic with warm hospitality, creating an inviting atmosphere that feels both nostalgic and fresh.
            </p>
            
            <p className="font-dmsans text-sm md:text-base text-espresso/80 leading-relaxed">
              The highlight here is undoubtedly their coffee selection, with a particular nod to their signature hazelnut milk coffee. It strikes a perfect balance, rich in flavor without overpowering sweetness, satisfying both those who cherish robust coffee notes and those who prefer a smoother sip. Customers have praised how the coffee compares favorably with offerings from the more established coffee shops in nearby Batusangkar.
            </p>

            <p className="font-dmsans text-sm md:text-base text-espresso/80 leading-relaxed">
              Muladari Kopi thrives on delivering not just great coffee but a complete experience. The ambiance is thoughtfully crafted, featuring aesthetically pleasing decor that evokes a vintage vibe, making it an excellent place for relaxing, socializing, or enjoying a quiet moment. Friendly and attentive service adds to the comfort, tailoring each visit to leave a lasting impression.
            </p>

            <p className="font-dmsans text-sm md:text-base text-espresso/80 leading-relaxed">
              The location in Tanah Datar provides a scenic backdrop, allowing patrons to enjoy views of the surrounding cityscape while sipping their drinks. This makes Muladari Kopi a perfect destination for friends, couples, or anyone looking to unwind.
            </p>

            <div className="pt-2">
              <div className="border-l-4 border-caramel pl-4 italic text-mocha font-playfair text-base">
                "For those visiting West Sumatra or locals seeking a delightful coffee break, Muladari Kopi stands out as a must-visit. Its combination of carefully crafted coffee, a welcoming atmosphere, and affordability invites repeat visits."
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
                className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700 vintage-photo"
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
