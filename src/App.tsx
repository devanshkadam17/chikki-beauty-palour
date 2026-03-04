import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  MessageCircle, 
  Scissors, 
  Heart, 
  Sparkles, 
  Calendar, 
  Clock, 
  MapPin, 
  Instagram, 
  ChevronRight, 
  Star,
  CheckCircle2,
  X,
  Menu
} from 'lucide-react';
import confetti from 'canvas-confetti';

// --- Constants ---
const PHONE_NUMBER = "918341251164";
const LOCATION = "17, 1016, Tilak Nagar, Guntakal, Andhra Pradesh 515801";
const BUSINESS_NAME = "Chikki Beauty Parlour & Tailoring";

const SERVICES = {
  BEAUTY: [
    "Bridal Makeup", "Party Makeup", "Hair Styling", "Facials", "Threading & Waxing"
  ],
  TAILORING: [
    "Blouse Stitching", "Bridal Dresses", "Alterations", "Custom Designs"
  ]
};

const TIME_SLOTS = [
  "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM", 
  "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM", "07:00 PM"
];

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Booking', href: '#booking' },
    { name: 'Wedding Makeup', href: '#wedding-makeup' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-3 shadow-sm' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex flex-col">
          <span className="font-display text-2xl font-bold text-rose-gold leading-none">Chikki</span>
          <span className="text-[10px] uppercase tracking-widest text-stone-500">Beauty & Matches</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-stone-600 hover:text-rose-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#booking" 
            className="bg-rose-gold text-white px-6 py-2 rounded-full text-sm font-semibold btn-glow transition-all"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-rose-gold" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/20 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-stone-700"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay - Improved contrast */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1920" 
          alt="Premium Salon" 
          className="w-full h-full object-cover opacity-60"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream/95 via-cream/80 to-cream" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-rose-gold/10 text-rose-gold text-sm font-semibold tracking-wider uppercase mb-6">
            Beauty | Tailoring | Wedding Makeup
          </span>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-stone-900 mb-6 leading-tight">
            Enhance Your Beauty & <br />
            <span className="text-rose-gold italic">Shine on Your Special Day</span>
          </h1>
          <p className="text-lg text-stone-600 mb-10 max-w-2xl mx-auto">
            Experience the finest bridal services, custom tailoring, and professional wedding makeup for the bride and groom.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#booking" 
              className="w-full sm:w-auto bg-rose-gold text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-rose-gold/90 transition-all btn-glow flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Book Beauty Slot
            </a>
            <a 
              href="#wedding-makeup" 
              className="w-full sm:w-auto glass text-rose-gold border-rose-gold/30 px-10 py-4 rounded-full font-bold text-lg hover:bg-white transition-all flex items-center justify-center gap-2"
            >
              <Heart className="w-5 h-5" />
              Wedding Makeup
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-rose-gold opacity-50"
      >
        <div className="w-6 h-10 border-2 border-rose-gold rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-rose-gold rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

const ServiceCard = ({ icon: Icon, title, items, buttonText, onClick, color }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="glass p-8 rounded-3xl shadow-sm border border-white/50 flex flex-col h-full"
  >
    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${color}`}>
      <Icon className="w-8 h-8 text-white" />
    </div>
    <h3 className="font-display text-2xl font-bold text-stone-900 mb-4">{title}</h3>
    <ul className="space-y-3 mb-8 flex-grow">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-center gap-3 text-stone-600">
          <CheckCircle2 className="w-4 h-4 text-rose-gold" />
          {item}
        </li>
      ))}
    </ul>
    <button 
      onClick={onClick}
      className="w-full py-3 rounded-xl border-2 border-rose-gold text-rose-gold font-bold hover:bg-rose-gold hover:text-white transition-all"
    >
      {buttonText}
    </button>
  </motion.div>
);

const Services = () => {
  return (
    <section id="services" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-stone-900 mb-4">Our Premium Services</h2>
          <p className="text-stone-500 max-w-xl mx-auto">Crafted with care, designed for elegance, and managed with trust.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard 
            icon={Sparkles}
            title="Beauty Parlour"
            items={SERVICES.BEAUTY}
            buttonText="Book Appointment"
            color="bg-soft-pink"
            onClick={() => document.getElementById('booking')?.scrollIntoView()}
          />
          <ServiceCard 
            icon={Scissors}
            title="Tailoring Services"
            items={SERVICES.TAILORING}
            buttonText="Request Tailoring"
            color="bg-rose-gold"
            onClick={() => document.getElementById('tailoring')?.scrollIntoView()}
          />
          <ServiceCard 
            icon={Heart}
            title="Wedding Makeup"
            items={["Complete Bridal Makeup", "Groom Special Styling", "Engagement Packages", "Family Group Makeup"]}
            buttonText="Book Wedding Slot"
            color="bg-stone-800"
            onClick={() => document.getElementById('wedding-makeup')?.scrollIntoView()}
          />
        </div>
      </div>
    </section>
  );
};

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    slot: '',
    notes: ''
  });
  const [bookedSlots, setBookedSlots] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('booked_slots');
    if (saved) setBookedSlots(JSON.parse(saved));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const slotKey = `${formData.date}_${formData.slot}`;
    
    if (bookedSlots.includes(slotKey)) {
      alert("This slot is already booked. Please choose another one.");
      return;
    }

    const newBookings = [...bookedSlots, slotKey];
    setBookedSlots(newBookings);
    localStorage.setItem('booked_slots', JSON.stringify(newBookings));

    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#f8c8dc', '#b76e79', '#ffffff']
    });

    const text = `*NEW BEAUTY BOOKING*%0AName: ${formData.name}%0APhone: ${formData.phone}%0AService: ${formData.service}%0ADate: ${formData.date}%0ASlot: ${formData.slot}%0ANotes: ${formData.notes}`;
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${text}`, '_blank');
  };

  return (
    <section id="booking" className="py-24 px-6 bg-cream">
      <div className="max-w-4xl mx-auto glass p-8 md:p-12 rounded-[2rem] shadow-xl">
        <div className="text-center mb-10">
          <Sparkles className="w-10 h-10 text-rose-gold mx-auto mb-4" />
          <h2 className="font-display text-4xl font-bold text-stone-900 mb-2">Book Your Beauty Slot</h2>
          <p className="text-stone-500">Select your preferred time and service.</p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-stone-700">Full Name</label>
            <input 
              required
              type="text" 
              className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-rose-gold outline-none transition-all"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-stone-700">Phone Number</label>
            <input 
              required
              type="tel" 
              className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-rose-gold outline-none transition-all"
              placeholder="Your WhatsApp number"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-stone-700">Select Service</label>
            <select 
              required
              className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-rose-gold outline-none transition-all bg-white"
              value={formData.service}
              onChange={(e) => setFormData({...formData, service: e.target.value})}
            >
              <option value="">Choose a service</option>
              {SERVICES.BEAUTY.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-stone-700">Preferred Date</label>
            <input 
              required
              type="date" 
              min={new Date().toISOString().split('T')[0]}
              className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-rose-gold outline-none transition-all"
              value={formData.date}
              onChange={(e) => setFormData({...formData, date: e.target.value})}
            />
          </div>
          <div className="md:col-span-2 space-y-4">
            <label className="text-sm font-semibold text-stone-700">Available Time Slots</label>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {TIME_SLOTS.map(slot => {
                const isBooked = bookedSlots.includes(`${formData.date}_${slot}`);
                return (
                  <button
                    key={slot}
                    type="button"
                    disabled={isBooked || !formData.date}
                    onClick={() => setFormData({...formData, slot})}
                    className={`py-2 rounded-lg text-sm font-medium transition-all border ${
                      formData.slot === slot 
                        ? 'bg-rose-gold text-white border-rose-gold' 
                        : isBooked 
                          ? 'bg-stone-100 text-stone-400 border-stone-100 cursor-not-allowed'
                          : 'bg-white text-stone-600 border-stone-200 hover:border-rose-gold'
                    }`}
                  >
                    {slot}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="md:col-span-2 space-y-2">
            <label className="text-sm font-semibold text-stone-700">Additional Notes</label>
            <textarea 
              className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-rose-gold outline-none transition-all h-24"
              placeholder="Any special requests?"
              value={formData.notes}
              onChange={(e) => setFormData({...formData, notes: e.target.value})}
            />
          </div>
          <button 
            type="submit"
            className="md:col-span-2 bg-rose-gold text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-rose-gold/90 transition-all btn-glow"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </section>
  );
};

const TailoringForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    type: '',
    measurements: '',
    date: '',
    instructions: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    confetti({
      particleCount: 100,
      spread: 50,
      origin: { y: 0.8 },
      colors: ['#b76e79', '#ffffff']
    });
    const text = `*NEW TAILORING REQUEST*%0AName: ${formData.name}%0APhone: ${formData.phone}%0ADress Type: ${formData.type}%0AMeasurements: ${formData.measurements}%0ADelivery Date: ${formData.date}%0AInstructions: ${formData.instructions}`;
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${text}`, '_blank');
  };

  return (
    <section id="tailoring" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto glass p-8 md:p-12 rounded-[2rem] shadow-xl border-rose-gold/10">
        <div className="text-center mb-10">
          <Scissors className="w-10 h-10 text-rose-gold mx-auto mb-4" />
          <h2 className="font-display text-4xl font-bold text-stone-900 mb-2">Request Tailoring Service</h2>
          <p className="text-stone-500">Custom designs and perfect stitching for your special occasions.</p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-stone-700">Full Name</label>
            <input 
              required
              type="text" 
              className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-rose-gold outline-none transition-all"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-stone-700">Phone Number</label>
            <input 
              required
              type="tel" 
              className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-rose-gold outline-none transition-all"
              placeholder="Your WhatsApp number"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-stone-700">Type of Dress</label>
            <select 
              required
              className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-rose-gold outline-none transition-all bg-white"
              value={formData.type}
              onChange={(e) => setFormData({...formData, type: e.target.value})}
            >
              <option value="">Select dress type</option>
              {SERVICES.TAILORING.map(t => <option key={t} value={t}>{t}</option>)}
              <option value="Other">Other (Specify in instructions)</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-stone-700">Required Delivery Date</label>
            <input 
              required
              type="date" 
              min={new Date().toISOString().split('T')[0]}
              className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-rose-gold outline-none transition-all"
              value={formData.date}
              onChange={(e) => setFormData({...formData, date: e.target.value})}
            />
          </div>
          <div className="md:col-span-2 space-y-2">
            <label className="text-sm font-semibold text-stone-700">Measurement Details (Optional)</label>
            <textarea 
              className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-rose-gold outline-none transition-all h-24"
              placeholder="E.g., Chest: 34, Waist: 28... or mention if you'll provide a sample."
              value={formData.measurements}
              onChange={(e) => setFormData({...formData, measurements: e.target.value})}
            />
          </div>
          <div className="md:col-span-2 space-y-2">
            <label className="text-sm font-semibold text-stone-700">Special Instructions</label>
            <textarea 
              className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-rose-gold outline-none transition-all h-24"
              placeholder="Any specific design details or patterns?"
              value={formData.instructions}
              onChange={(e) => setFormData({...formData, instructions: e.target.value})}
            />
          </div>
          <button 
            type="submit"
            className="md:col-span-2 bg-stone-800 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-stone-900 transition-all"
          >
            Submit Request
          </button>
        </form>
      </div>
    </section>
  );
};

const WeddingMakeupForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    type: '', // Bridal, Groom, Both
    date: '',
    people: '1',
    location: 'Parlour', // Parlour or Venue
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#f8c8dc', '#b76e79', '#ffffff']
    });

    const text = `*NEW WEDDING MAKEUP BOOKING*%0AName: ${formData.name}%0APhone: ${formData.phone}%0APackage: ${formData.type}%0AEvent Date: ${formData.date}%0ANo. of People: ${formData.people}%0ALocation: ${formData.location}%0ANotes: ${formData.notes}`;
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${text}`, '_blank');
  };

  return (
    <section id="wedding-makeup" className="py-24 px-6 bg-cream">
      <div className="max-w-4xl mx-auto glass p-8 md:p-12 rounded-[2rem] shadow-xl border-rose-gold/20">
        <div className="text-center mb-10">
          <Heart className="w-10 h-10 text-rose-gold mx-auto mb-4" />
          <h2 className="font-display text-4xl font-bold text-stone-900 mb-2">Wedding Makeup Booking</h2>
          <p className="text-stone-500">Specialized makeup services for the Bride, Groom, and Family.</p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-stone-700">Full Name</label>
            <input required type="text" className="w-full px-4 py-3 rounded-xl border border-stone-200 outline-none" placeholder="Enter your name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-stone-700">Phone Number</label>
            <input required type="tel" className="w-full px-4 py-3 rounded-xl border border-stone-200 outline-none" placeholder="WhatsApp number" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-stone-700">Select Package</label>
            <select required className="w-full px-4 py-3 rounded-xl border border-stone-200 outline-none bg-white" value={formData.type} onChange={e => setFormData({...formData, type: e.target.value})}>
              <option value="">Choose Package</option>
              <option value="Bridal Makeup">Bridal Makeup</option>
              <option value="Groom Makeup">Groom Makeup</option>
              <option value="Bridal & Groom Combo">Bridal & Groom Combo</option>
              <option value="Engagement Makeup">Engagement Makeup</option>
              <option value="Family Makeup">Family Makeup</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-stone-700">Event Date</label>
            <input required type="date" min={new Date().toISOString().split('T')[0]} className="w-full px-4 py-3 rounded-xl border border-stone-200 outline-none" value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-stone-700">Number of People</label>
            <input required type="number" min="1" className="w-full px-4 py-3 rounded-xl border border-stone-200 outline-none" value={formData.people} onChange={e => setFormData({...formData, people: e.target.value})} />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-stone-700">Service Location</label>
            <select required className="w-full px-4 py-3 rounded-xl border border-stone-200 outline-none bg-white" value={formData.location} onChange={e => setFormData({...formData, location: e.target.value})}>
              <option value="Parlour">At Parlour</option>
              <option value="Venue">At Venue (Home/Hotel)</option>
            </select>
          </div>
          <div className="md:col-span-2 space-y-2">
            <label className="text-sm font-semibold text-stone-700">Additional Instructions</label>
            <textarea className="w-full px-4 py-3 rounded-xl border border-stone-200 outline-none h-24" placeholder="Any specific requirements?" value={formData.notes} onChange={e => setFormData({...formData, notes: e.target.value})} />
          </div>
          <button type="submit" className="md:col-span-2 bg-rose-gold text-white py-4 rounded-xl font-bold text-lg shadow-lg btn-glow">Book Wedding Slot</button>
        </form>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-stone-900 mb-6">Get In Touch</h2>
          <p className="text-stone-600 mb-10 text-lg">Visit us for a consultation or book your services over a call. We're here to make you shine.</p>
          
          <div className="space-y-6 mb-10">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-soft-pink flex items-center justify-center shrink-0">
                <MapPin className="text-rose-gold" />
              </div>
              <div>
                <h4 className="font-bold text-stone-900">Our Location</h4>
                <p className="text-stone-500">{LOCATION}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-soft-pink flex items-center justify-center shrink-0">
                <Phone className="text-rose-gold" />
              </div>
              <div>
                <h4 className="font-bold text-stone-900">Call / WhatsApp</h4>
                <p className="text-stone-500">+{PHONE_NUMBER}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-soft-pink flex items-center justify-center shrink-0">
                <Clock className="text-rose-gold" />
              </div>
              <div>
                <h4 className="font-bold text-stone-900">Business Hours</h4>
                <p className="text-stone-500">Mon - Sun: 10:00 AM - 08:00 PM</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <a href={`tel:${PHONE_NUMBER}`} className="bg-rose-gold text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 btn-glow">
              <Phone className="w-5 h-5" /> Call Now
            </a>
            <a href={`https://wa.me/${PHONE_NUMBER}`} className="bg-green-500 text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2">
              <MessageCircle className="w-5 h-5" /> WhatsApp
            </a>
            <a href="#" className="glass p-3 rounded-xl text-rose-gold hover:bg-rose-gold hover:text-white transition-all">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="h-[450px] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3854.456789!2d77.37!3d15.17!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDEwJzEyLjAiTiA3N8KwMjInMTIuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy"
            title="Google Maps"
          />
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-1">
          <div className="flex flex-col mb-6">
            <span className="font-display text-3xl font-bold text-soft-pink leading-none">Chikki</span>
            <span className="text-[10px] uppercase tracking-widest text-stone-400">Beauty & Matches</span>
          </div>
          <p className="text-stone-400">Your one-stop destination for beauty, custom tailoring, and finding your perfect life partner.</p>
        </div>
        
        <div>
          <h4 className="font-bold text-lg mb-6">Our Services</h4>
          <ul className="space-y-3 text-stone-400">
            <li><a href="#services" className="hover:text-soft-pink transition-colors">Bridal Makeup</a></li>
            <li><a href="#services" className="hover:text-soft-pink transition-colors">Hair Styling</a></li>
            <li><a href="#services" className="hover:text-soft-pink transition-colors">Custom Tailoring</a></li>
            <li><a href="#wedding-makeup" className="hover:text-soft-pink transition-colors">Wedding Makeup</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6">Quick Links</h4>
          <ul className="space-y-3 text-stone-400">
            <li><a href="#home" className="hover:text-soft-pink transition-colors">Home</a></li>
            <li><a href="#booking" className="hover:text-soft-pink transition-colors">Book Appointment</a></li>
            <li><a href="#contact" className="hover:text-soft-pink transition-colors">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6">Contact Info</h4>
          <ul className="space-y-3 text-stone-400">
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> {LOCATION}</li>
            <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +{PHONE_NUMBER}</li>
            <li className="flex items-center gap-2"><MessageCircle className="w-4 h-4" /> WhatsApp Available</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-12 border-t border-white/10 text-center text-stone-500 text-sm">
        <p>&copy; {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved. Designed for Elegance.</p>
      </div>
    </footer>
  );
};

const ScrollProgress = () => {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setWidth((winScroll / height) * 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <div className="fixed top-0 left-0 h-1 bg-rose-gold z-[60] transition-all duration-100" style={{ width: `${width}%` }} />;
};

const FloatingButtons = () => (
  <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-4">
    <a 
      href={`https://wa.me/${PHONE_NUMBER}`} 
      className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
      title="WhatsApp Us"
    >
      <MessageCircle className="w-8 h-8" />
    </a>
    <a 
      href="#booking" 
      className="md:hidden bg-rose-gold text-white px-6 py-3 rounded-full font-bold shadow-2xl flex items-center gap-2"
    >
      <Calendar className="w-5 h-5" /> Book Now
    </a>
  </div>
);

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div 
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-cream flex flex-col items-center justify-center"
        >
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [1, 0.8, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center"
          >
            <Sparkles className="w-16 h-16 text-rose-gold mb-4" />
            <h1 className="font-display text-4xl font-bold text-stone-900">Chikki</h1>
            <div className="w-48 h-1 bg-stone-200 rounded-full mt-4 overflow-hidden">
              <motion.div 
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                className="w-full h-full bg-rose-gold"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function App() {
  return (
    <div className="relative">
      <LoadingScreen />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Services />
      <BookingForm />
      <TailoringForm />
      <WeddingMakeupForm />
      <Contact />
      <Footer />
      <FloatingButtons />
    </div>
  );
}
