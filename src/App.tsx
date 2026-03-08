/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Coffee, MapPin, Clock, Mail, Instagram, Facebook, Twitter, Menu as MenuIcon, X, ChevronRight } from "lucide-react";
import { useState } from "react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen selection:bg-honey selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-warm-cream/80 backdrop-blur-md border-b border-velvet-red/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-velvet-red rounded-full flex items-center justify-center">
              <Coffee className="text-warm-cream w-6 h-6" />
            </div>
            <span className="font-serif text-2xl font-bold tracking-tight text-velvet-red">Velvet</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest">
            <a href="#menu" className="hover:text-honey transition-colors">Menu</a>
            <a href="#about" className="hover:text-honey transition-colors">About</a>
            <a href="#location" className="hover:text-honey transition-colors">Location</a>
            <a href="#contact" className="hover:text-honey transition-colors">Contact</a>
            <button className="bg-velvet-red text-warm-cream px-6 py-2 rounded-full hover:bg-velvet-red/90 transition-all">
              Order Online
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-velvet-red" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <MenuIcon />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-warm-cream border-b border-velvet-red/5 px-6 py-8 flex flex-col gap-6 text-lg font-serif italic"
          >
            <a href="#menu" onClick={() => setIsMenuOpen(false)}>Menu</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#location" onClick={() => setIsMenuOpen(false)}>Location</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=2078&auto=format&fit=crop" 
            alt="Coffee shop interior" 
            className="w-full h-full object-cover brightness-[0.4]"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.h1 
              variants={fadeIn}
              className="text-6xl md:text-8xl text-warm-cream leading-[0.9] mb-8"
            >
              Smooth as <span className="italic font-light">Velvet</span>, <br />
              Bold as <span className="text-honey">Portland</span>.
            </motion.h1>
            <motion.p 
              variants={fadeIn}
              className="text-xl text-warm-cream/80 mb-10 font-light max-w-xl"
            >
              Experience the art of the perfect roast. We source the finest single-origin beans and brew them with precision in the heart of the Pacific Northwest.
            </motion.p>
            <motion.div 
              variants={fadeIn}
              className="flex flex-wrap gap-4"
            >
              <button className="bg-honey text-white px-8 py-4 rounded-full text-lg font-medium hover:scale-105 transition-transform flex items-center gap-2">
                View Menu <ChevronRight className="w-5 h-5" />
              </button>
              <button className="border border-warm-cream text-warm-cream px-8 py-4 rounded-full text-lg font-medium hover:bg-warm-cream hover:text-velvet-red transition-all">
                Find Us
              </button>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-warm-cream/50"
        >
          <div className="w-px h-12 bg-gradient-to-b from-warm-cream/50 to-transparent mx-auto" />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Single Origin Beans",
                desc: "Ethically sourced from small-batch farmers across the globe, roasted daily in-house.",
                img: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=2061&auto=format&fit=crop"
              },
              {
                title: "Latte Art Classes",
                desc: "Master the pour with our award-winning baristas in our weekend workshop series.",
                img: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?q=80&w=1974&auto=format&fit=crop"
              },
              {
                title: "Cozy Workspace",
                desc: "High-speed fiber, quiet corners, and plenty of outlets for your deep work sessions.",
                img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop"
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/5] overflow-hidden rounded-3xl mb-6">
                  <img 
                    src={feature.img} 
                    alt={feature.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-2xl font-serif mb-3 text-velvet-red">{feature.title}</h3>
                <p className="text-charcoal/70 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section id="menu" className="py-24 bg-warm-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-honey uppercase tracking-widest text-sm font-bold">Signature Brews</span>
            <h2 className="text-5xl font-serif mt-4 text-velvet-red">From Our Bar</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {[
              { name: "Velvet Cortado", price: "$4.50", desc: "Equal parts espresso and steamed milk with a hint of dark chocolate.", img: "https://images.unsplash.com/photo-1534706936160-d5ee67737249?q=80&w=1974&auto=format&fit=crop" },
              { name: "Honey Lavender Latte", price: "$5.75", desc: "Local wildflower honey and organic lavender buds steeped in oat milk.", img: "https://images.unsplash.com/photo-1572286258217-31500463991c?q=80&w=1974&auto=format&fit=crop" },
              { name: "Portland Fog", price: "$5.25", desc: "Earl Grey tea, vanilla bean syrup, and velvety steamed milk.", img: "https://images.unsplash.com/photo-1544787210-228394c3d3e2?q=80&w=1974&auto=format&fit=crop" },
              { name: "Nitro Cold Brew", price: "$6.00", desc: "18-hour slow steep infused with nitrogen for a creamy finish.", img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=2071&auto=format&fit=crop" }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-center border-b border-velvet-red/10 pb-8">
                <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="text-xl font-serif font-bold text-velvet-red">{item.name}</h4>
                    <span className="text-honey font-medium">{item.price}</span>
                  </div>
                  <p className="text-sm text-charcoal/60 italic">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <button className="bg-velvet-red text-warm-cream px-10 py-4 rounded-full hover:bg-velvet-red/90 transition-all font-medium">
              Explore Full Menu
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square rounded-full overflow-hidden border-[12px] border-warm-cream shadow-2xl relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1525470854769-ad05a36d13d4?q=80&w=1974&auto=format&fit=crop" 
                  alt="Founder roasting coffee" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-honey/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-velvet-red/5 rounded-full blur-3xl" />
            </div>
            <div>
              <span className="text-honey uppercase tracking-widest text-sm font-bold">Our Story</span>
              <h2 className="text-5xl font-serif mt-4 mb-8 text-velvet-red">Crafted with Heart in the Rose City</h2>
              <div className="space-y-6 text-lg text-charcoal/80 leading-relaxed">
                <p>
                  Velvet Coffee Roasters began in a small garage in Southeast Portland with a simple mission: to make specialty coffee approachable without sacrificing quality. Our founder, Elias Thorne, spent a decade traveling to coffee-growing regions, building direct relationships with farmers who share our commitment to sustainability.
                </p>
                <p>
                  Today, our flagship cafe serves as a community hub where the aroma of freshly roasted beans meets the sound of local artists and innovators. We believe every cup tells a story of the soil it grew in and the hands that nurtured it. Welcome to our table.
                </p>
              </div>
              <div className="mt-10 flex items-center gap-4">
                <div className="w-12 h-px bg-honey" />
                <span className="font-serif italic text-xl">Elias Thorne, Founder</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-24 bg-warm-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-12 rounded-[2rem] shadow-sm">
              <h2 className="text-4xl font-serif mb-8 text-velvet-red">Visit Us</h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <MapPin className="text-honey shrink-0" />
                  <div>
                    <h5 className="font-bold mb-1">Address</h5>
                    <p className="text-charcoal/70">1234 SE Division St,<br />Portland, OR 97202</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Clock className="text-honey shrink-0" />
                  <div>
                    <h5 className="font-bold mb-1">Hours</h5>
                    <p className="text-charcoal/70">Mon – Fri: 7am – 6pm<br />Sat – Sun: 8am – 7pm</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Mail className="text-honey shrink-0" />
                  <div>
                    <h5 className="font-bold mb-1">Contact</h5>
                    <p className="text-charcoal/70">hello@velvetcoffee.com<br />(503) 555-0123</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-[2rem] overflow-hidden bg-sage/20 min-h-[400px] relative">
              {/* Map Placeholder */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-sage">
                <MapPin className="w-16 h-16 mb-4 opacity-50" />
                <span className="font-serif italic text-xl">Interactive Map Loading...</span>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2066&auto=format&fit=crop" 
                alt="Map of Portland" 
                className="w-full h-full object-cover opacity-30 grayscale"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-velvet-red text-warm-cream relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-honey/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl font-serif mb-6">Join the Brew</h2>
          <p className="text-warm-cream/70 text-lg mb-10">
            Subscribe to our newsletter for exclusive tasting notes, early access to new roasts, and brewing tips from our head roaster.
          </p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 bg-white/10 border border-white/20 rounded-full px-8 py-4 focus:outline-none focus:border-honey transition-colors text-warm-cream placeholder:text-warm-cream/40"
            />
            <button className="bg-honey text-white px-10 py-4 rounded-full font-medium hover:scale-105 transition-transform">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-charcoal text-warm-cream/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-12">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-velvet-red rounded-full flex items-center justify-center">
                <Coffee className="text-warm-cream w-4 h-4" />
              </div>
              <span className="font-serif text-xl font-bold tracking-tight text-warm-cream">Velvet</span>
            </div>
            
            <div className="flex gap-8 text-sm uppercase tracking-widest">
              <a href="#" className="hover:text-honey transition-colors">Privacy</a>
              <a href="#" className="hover:text-honey transition-colors">Terms</a>
              <a href="#" className="hover:text-honey transition-colors">Careers</a>
              <a href="#" className="hover:text-honey transition-colors">Press</a>
            </div>

            <div className="flex gap-6">
              <a href="#" className="hover:text-honey transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-honey transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-honey transition-colors"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/5 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Velvet Coffee Roasters. All rights reserved. Hand-roasted in Portland, Oregon.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
