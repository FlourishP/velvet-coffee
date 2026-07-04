/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Coffee, MapPin, Clock, Mail, Instagram, Facebook, Twitter, Menu as MenuIcon, X, ChevronRight } from "lucide-react";
import { useState } from "react";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-soft border-b border-velvet-red/5" aria-label="Main Navigation">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-24 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full flex items-center justify-center" style={{background: 'linear-gradient(135deg, #4A0E0E 0%, #5D1515 100%)'}} aria-hidden="true">
              <Coffee className="text-warm-cream w-5 h-5" />
            </div>
            <span className="font-serif text-2xl font-semibold tracking-tight text-velvet-red">Velvet</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10 text-[13px] font-medium uppercase tracking-[0.2em] text-charcoal/70">
            <a href="#menu" className="underline-elegant hover:text-velvet-red transition-colors focus:outline-none focus:ring-2 focus:ring-honey/50 rounded px-2 py-1">Menu</a>
            <a href="#about" className="underline-elegant hover:text-velvet-red transition-colors focus:outline-none focus:ring-2 focus:ring-honey/50 rounded px-2 py-1">About</a>
            <a href="#location" className="underline-elegant hover:text-velvet-red transition-colors focus:outline-none focus:ring-2 focus:ring-honey/50 rounded px-2 py-1">Location</a>
            <a href="#contact" className="underline-elegant hover:text-velvet-red transition-colors focus:outline-none focus:ring-2 focus:ring-honey/50 rounded px-2 py-1">Contact</a>
            <button className="btn-refined text-warm-cream px-7 py-2.5 rounded-full text-[13px] font-medium tracking-wider focus:outline-none focus:ring-2 focus:ring-honey/50">
              Order Online
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-velvet-red p-2 hover:bg-velvet-red/5 rounded-xl transition-colors" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass-soft border-b border-velvet-red/5 px-6 py-10 flex flex-col gap-6 text-xl font-serif italic"
          >
            <a href="#menu" onClick={() => setIsMenuOpen(false)} className="hover:text-velvet-red transition-colors">Menu</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-velvet-red transition-colors">About</a>
            <a href="#location" onClick={() => setIsMenuOpen(false)} className="hover:text-velvet-red transition-colors">Location</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="hover:text-velvet-red transition-colors">Contact</a>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=2078&auto=format&fit=crop" 
            alt="Coffee shop interior" 
            className="w-full h-full object-cover"
            style={{filter: 'brightness(0.35) saturate(1.1)'}}
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0" style={{background: 'linear-gradient(180deg, rgba(74,14,14,0.3) 0%, rgba(253,251,247,0.1) 50%, rgba(212,163,115,0.2) 100%)'}} />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.div variants={fadeIn} className="mb-6">
              <span className="inline-block px-4 py-1.5 bg-warm-cream/10 backdrop-blur-sm border border-warm-cream/20 rounded-full text-warm-cream/80 text-sm tracking-widest uppercase">
                Portland's Finest Since 2018
              </span>
            </motion.div>
            
            <motion.h1 
              variants={fadeIn}
              className="text-5xl md:text-7xl lg:text-8xl text-warm-cream leading-[0.95] mb-8 font-light"
            >
              Smooth as <span className="italic font-light text-honey">Velvet</span>, <br />
              Bold as <span className="font-medium">Portland</span>.
            </motion.h1>
            
            <motion.p 
              variants={fadeIn}
              className="text-lg md:text-xl text-warm-cream/70 mb-12 font-light max-w-xl leading-relaxed"
            >
              Experience the art of the perfect roast. We source the finest single-origin beans and brew them with precision in the heart of the Pacific Northwest.
            </motion.p>
            
            <motion.div 
              variants={fadeIn}
              className="flex flex-wrap gap-4"
            >
              <button className="btn-honey text-white px-10 py-4 rounded-full text-base font-medium tracking-wide flex items-center gap-2.5 group">
                View Menu 
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border border-warm-cream/40 text-warm-cream px-10 py-4 rounded-full text-base font-medium tracking-wide hover:bg-warm-cream/10 backdrop-blur-sm transition-all">
                Find Us
              </button>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="w-px h-16 bg-gradient-to-b from-warm-cream/40 to-transparent" />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <span className="text-honey uppercase tracking-[0.25em] text-xs font-semibold">What We Offer</span>
            <h2 className="text-4xl md:text-5xl font-serif mt-4 text-velvet-red">Crafted for You</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
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
                initial={{ opacity: 0, y: 40 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.15, duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/5] overflow-hidden rounded-[2rem] mb-8 shadow-elegant-lg hover-glow">
                  <img 
                    src={feature.img} 
                    alt={feature.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-2xl font-serif mb-3 text-velvet-red group-hover:text-honey transition-colors duration-300">{feature.title}</h3>
                <p className="text-charcoal/60 leading-relaxed text-[15px]">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section id="menu" className="py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[120px] opacity-30" style={{background: 'radial-gradient(circle, rgba(212,163,115,0.4) 0%, transparent 70%)'}} />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-[120px] opacity-20" style={{background: 'radial-gradient(circle, rgba(163,177,138,0.4) 0%, transparent 70%)'}} />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-20">
            <span className="text-honey uppercase tracking-[0.25em] text-xs font-semibold">Signature Brews</span>
            <h2 className="text-4xl md:text-5xl font-serif mt-4 text-velvet-red">From Our Bar</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
            {[
              { name: "Velvet Cortado", price: "$4.50", desc: "Equal parts espresso and steamed milk with a hint of dark chocolate.", img: "https://images.unsplash.com/photo-1534706936160-d5ee67737249?q=80&w=1974&auto=format&fit=crop" },
              { name: "Honey Lavender Latte", price: "$5.75", desc: "Local wildflower honey and organic lavender buds steeped in oat milk.", img: "https://images.unsplash.com/photo-1572286258217-31500463991c?q=80&w=1974&auto=format&fit=crop" },
              { name: "Portland Fog", price: "$5.25", desc: "Earl Grey tea, vanilla bean syrup, and velvety steamed milk.", img: "https://images.unsplash.com/photo-1544787210-228394c3d3e2?q=80&w=1974&auto=format&fit=crop" },
              { name: "Nitro Cold Brew", price: "$6.00", desc: "18-hour slow steep infused with nitrogen for a creamy finish.", img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=2071&auto=format&fit=crop" }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                className="flex gap-6 items-center pb-10 border-b border-velvet-red/10 group"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0 shadow-elegant group-hover:shadow-elegant-lg transition-shadow duration-500">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-baseline mb-2">
                    <h4 className="text-xl font-serif font-semibold text-velvet-red group-hover:text-honey transition-colors duration-300">{item.name}</h4>
                    <span className="text-honey font-medium tracking-wide">{item.price}</span>
                  </div>
                  <p className="text-sm text-charcoal/50 italic leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <button className="btn-refined text-warm-cream px-12 py-4 rounded-full font-medium tracking-wide">
              Explore Full Menu
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-elegant-lg relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1525470854769-ad05a36d13d4?q=80&w=1974&auto=format&fit=crop" 
                  alt="Founder roasting coffee" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full blur-[80px] opacity-40" style={{background: 'radial-gradient(circle, rgba(212,163,115,0.5) 0%, transparent 70%)'}} />
              <div className="absolute -bottom-16 -right-16 w-80 h-80 rounded-full blur-[100px] opacity-30" style={{background: 'radial-gradient(circle, rgba(163,177,138,0.5) 0%, transparent 70%)'}} />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            >
              <span className="text-honey uppercase tracking-[0.25em] text-xs font-semibold">Our Story</span>
              <h2 className="text-4xl md:text-5xl font-serif mt-4 mb-10 text-velvet-red leading-tight">Crafted with Heart in the Rose City</h2>
              <div className="space-y-6 text-[17px] text-charcoal/65 leading-[1.8]">
                <p>
                  Velvet Coffee Roasters began in a small garage in Southeast Portland with a simple mission: to make specialty coffee approachable without sacrificing quality. Our founder, Elias Thorne, spent a decade traveling to coffee-growing regions, building direct relationships with farmers who share our commitment to sustainability.
                </p>
                <p>
                  Today, our flagship cafe serves as a community hub where the aroma of freshly roasted beans meets the sound of local artists and innovators. We believe every cup tells a story of the soil it grew in and the hands that nurtured it. Welcome to our table.
                </p>
              </div>
              <div className="mt-12 flex items-center gap-5">
                <div className="w-16 h-px bg-gradient-to-r from-honey to-honey/0" />
                <span className="font-serif italic text-xl text-velvet-red/80">Elias Thorne, Founder</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[150px] opacity-20" style={{background: 'radial-gradient(circle, rgba(212,163,115,0.4) 0%, transparent 70%)'}} />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
            <motion.div 
              className="bg-white p-12 lg:p-14 rounded-[2.5rem] shadow-elegant-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-4xl font-serif mb-10 text-velvet-red">Visit Us</h2>
              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0" style={{background: 'linear-gradient(135deg, rgba(212,163,115,0.15) 0%, rgba(212,163,115,0.05) 100%)'}}>
                    <MapPin className="text-honey w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1.5 text-velvet-red">Address</h5>
                    <p className="text-charcoal/60 leading-relaxed">1234 SE Division St,<br />Portland, OR 97202</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0" style={{background: 'linear-gradient(135deg, rgba(212,163,115,0.15) 0%, rgba(212,163,115,0.05) 100%)'}}>
                    <Clock className="text-honey w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1.5 text-velvet-red">Hours</h5>
                    <p className="text-charcoal/60 leading-relaxed">Mon – Fri: 7am – 6pm<br />Sat – Sun: 8am – 7pm</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0" style={{background: 'linear-gradient(135deg, rgba(212,163,115,0.15) 0%, rgba(212,163,115,0.05) 100%)'}}>
                    <Mail className="text-honey w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1.5 text-velvet-red">Contact</h5>
                    <p className="text-charcoal/60 leading-relaxed">hello@velvetcoffee.com<br />(503) 555-0123</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="rounded-[2.5rem] overflow-hidden min-h-[450px] relative shadow-elegant-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center text-charcoal/40 z-10">
                <MapPin className="w-14 h-14 mb-4 opacity-40" />
                <span className="font-serif italic text-lg">Interactive Map Loading...</span>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2066&auto=format&fit=crop" 
                alt="Map of Portland" 
                className="w-full h-full object-cover opacity-20 grayscale"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section id="contact" className="py-32 relative overflow-hidden" style={{background: 'linear-gradient(135deg, #4A0E0E 0%, #3D0B0B 50%, #2D0808 100%)'}}>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-30" style={{background: 'radial-gradient(circle, rgba(212,163,115,0.4) 0%, transparent 70%)'}} />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-[100px] opacity-20" style={{background: 'radial-gradient(circle, rgba(253,251,247,0.2) 0%, transparent 70%)'}} />
        
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-warm-cream">Join the Brew</h2>
            <p className="text-warm-cream/60 text-lg mb-12 leading-relaxed">
              Subscribe to our newsletter for exclusive tasting notes, early access to new roasts, and brewing tips from our head roaster.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 bg-white/5 border border-white/15 rounded-full px-8 py-4 focus:outline-none focus:border-honey/60 focus:bg-white/10 transition-all text-warm-cream placeholder:text-warm-cream/35 text-[15px]"
                aria-label="Email address"
              />
              <button className="btn-honey text-white px-10 py-4 rounded-full font-medium tracking-wide">
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-charcoal text-warm-cream/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{background: 'linear-gradient(135deg, #4A0E0E 0%, #5D1515 100%)'}}>
                <Coffee className="text-warm-cream w-4 h-4" />
              </div>
              <span className="font-serif text-xl font-semibold tracking-tight text-warm-cream/80">Velvet</span>
            </div>
            
            <div className="flex gap-10 text-[13px] uppercase tracking-[0.2em] text-warm-cream/40">
              <a href="#" className="hover:text-honey transition-colors duration-300">Privacy</a>
              <a href="#" className="hover:text-honey transition-colors duration-300">Terms</a>
              <a href="#" className="hover:text-honey transition-colors duration-300">Careers</a>
              <a href="#" className="hover:text-honey transition-colors duration-300">Press</a>
            </div>

            <div className="flex gap-6">
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-warm-cream/5 transition-colors duration-300" aria-label="Instagram"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-warm-cream/5 transition-colors duration-300" aria-label="Facebook"><Facebook className="w-4 h-4" /></a>
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-warm-cream/5 transition-colors duration-300" aria-label="Twitter"><Twitter className="w-4 h-4" /></a>
            </div>
          </div>
          
          <div className="pt-12 border-t border-warm-cream/5 text-center text-[13px] text-warm-cream/30">
            <p>&copy; {new Date().getFullYear()} Velvet Coffee Roasters. All rights reserved. Hand-roasted in Portland, Oregon.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
