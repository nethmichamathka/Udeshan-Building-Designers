/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Twitter, 
  Share2, 
  Bookmark, 
  Navigation, 
  Star, 
  ChevronRight,
  Play,
  ExternalLink,
  Menu,
  X,
  ArrowRight,
  PenTool,
  Calculator,
  Building2,
  Box,
  HardHat,
  FileCheck,
  Globe,
  Wrench,
  ClipboardList
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Logo } from './components/Logo';
import { InquiryForm } from './components/InquiryForm';
import { Gallery } from './components/Gallery';
import { ProfessionalDirectory } from './components/Directory';

const SERVICES = [
  {
    title: "Architectural Drawings",
    icon: PenTool,
    description: "Detailed floor plans, elevations, sections, and working drawings prepared by experienced architects for residential and commercial projects.",
    highlights: ["Floor Plans", "Elevations", "Sections"],
    color: "from-orange-500 to-amber-500"
  },
  {
    title: "BOQs / Estimates",
    icon: Calculator,
    description: "Accurate Bill of Quantities and cost estimates to help you plan your budget effectively before construction begins.",
    highlights: ["Cost Analysis", "Material Estimates", "Budget Planning"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Structural Designing",
    icon: Building2,
    description: "Safe and efficient structural designs including beams, columns, slabs, and foundations compliant with SLS standards.",
    highlights: ["RCC Design", "Foundation Design", "SLS Compliance"],
    color: "from-violet-500 to-purple-500"
  },
  {
    title: "3D Designing",
    icon: Box,
    description: "Photorealistic 3D visualizations and walkthroughs that bring your dream project to life before construction starts.",
    highlights: ["3D Renders", "Walkthroughs", "Interior Views"],
    color: "from-emerald-500 to-green-500"
  },
  {
    title: "Building Constructions",
    icon: HardHat,
    description: "End-to-end construction management with quality workmanship, timely delivery, and professional site supervision.",
    highlights: ["Site Management", "Quality Control", "On-Time Delivery"],
    color: "from-rose-500 to-pink-500"
  },
  {
    title: "Land/Building Approvals",
    icon: FileCheck,
    description: "Hassle-free processing of local authority approvals including municipal council, UDA, and divisional secretary permits.",
    highlights: ["Municipal Council", "UDA Approval", "DS Permits"],
    color: "from-sky-500 to-blue-500"
  },
  {
    title: "UDA Online Services",
    icon: Globe,
    description: "Fast and efficient handling of all UDA online submissions, permit applications, and compliance documentation.",
    highlights: ["Online Submissions", "Permit Processing", "E-Compliance"],
    color: "from-teal-500 to-emerald-500"
  },
  {
    title: "Building Services Designing",
    icon: Wrench,
    description: "Comprehensive MEP designs including electrical layouts, plumbing, drainage, and fire safety system planning.",
    highlights: ["Electrical", "Plumbing", "Fire Safety"],
    color: "from-amber-500 to-yellow-500"
  },
  {
    title: "As-Built Drawings",
    icon: ClipboardList,
    description: "Precise documentation of completed structures showing actual dimensions, positions, and modifications made during construction.",
    highlights: ["Measured Surveys", "Documentation", "Record Drawings"],
    color: "from-indigo-500 to-violet-500"
  }
];

const BUSINESS_HOURS = [
  { day: "Monday", hours: "8 AM–5 PM" },
  { day: "Tuesday", hours: "8 AM–5 PM" },
  { day: "Wednesday", hours: "8 AM–5 PM" },
  { day: "Thursday", hours: "8 AM–5 PM" },
  { day: "Friday", hours: "8 AM–5 PM" },
  { day: "Saturday", hours: "8 AM–1 PM" },
  { day: "Sunday", hours: "Closed" },
];

const REVIEWS = [
  { name: "Saman Perera", rating: 5, text: "Excellent architectural service. Very professional and timely delivery of drawings.", date: "2 months ago" },
  { name: "Nimali Silva", rating: 4, text: "Great 3D designs. They really understood my vision for the new house.", date: "5 months ago" },
  { name: "Kasun Jayawardena", rating: 5, text: "The best construction consultants in Gampaha. Highly recommended!", date: "1 year ago" },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = "Check out Udeshan Building Designers!";
    if (platform === 'facebook') window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`);
    if (platform === 'twitter') window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`);
    if (platform === 'email') window.location.href = `mailto:?subject=${text}&body=${url}`;
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-bottom border-black/5">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Logo className="h-12 w-auto" />
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold leading-tight">Udeshan</h1>
              <p className="text-[10px] uppercase tracking-widest text-orange-600 font-bold">Building Designers</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium hover:text-orange-600 transition-colors">Services</a>
            <a href="#gallery" className="text-sm font-medium hover:text-orange-600 transition-colors">Gallery</a>
            <a href="#directory" className="text-sm font-medium hover:text-orange-600 transition-colors">Directory</a>
            <a href="#contact" className="text-sm font-medium hover:text-orange-600 transition-colors">Contact</a>
            <button 
              onClick={() => document.getElementById('inquiry')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-orange-500 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-orange-600 transition-all shadow-lg shadow-orange-200"
            >
              Inquire Now
            </button>
          </div>

          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-white z-40 pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-xl font-bold">
              <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
              <a href="#gallery" onClick={() => setIsMenuOpen(false)}>Gallery</a>
              <a href="#directory" onClick={() => setIsMenuOpen(false)}>Directory</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
              <button className="bg-orange-500 text-white py-4 rounded-2xl">Inquire Now</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative pt-24 pb-0 overflow-hidden min-h-screen flex items-center">
        {/* Full background image */}
        <div className="absolute inset-0">
          <img 
            src={`${import.meta.env.BASE_URL}images/cover.jpg`} 
            className="w-full h-full object-cover" 
            alt="Architectural Design"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-slate-900/30"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 w-full">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 backdrop-blur-sm border border-orange-400/30 text-orange-300 text-xs font-bold uppercase tracking-wider mb-8"
              >
                <Star className="w-3.5 h-3.5 fill-current" />
                Top Rated in Gampaha
              </motion.div>

              <h2 className="text-5xl md:text-7xl font-bold leading-[1.05] mb-8 text-white">
                Crafting Your{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">Dream Space</span>
                <br />with Precision.
              </h2>

              <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-xl leading-relaxed">
                Expert architectural drawings, 3D designs, and construction consulting services based in the heart of Gampaha.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <a href="#services" className="bg-orange-500 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/25 text-lg">
                  Our Services <ArrowRight className="w-5 h-5" />
                </a>
                <a href="#contact" className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 hover:bg-white/20 transition-all border border-white/20">
                  <Phone className="w-5 h-5" /> Contact Us
                </a>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="text-3xl font-bold text-orange-400">500+</div>
                  <div className="text-sm text-slate-400 leading-tight">Projects<br/>Completed</div>
                </div>
                <div className="w-px h-10 bg-white/10"></div>
                <div className="flex items-center gap-3">
                  <div className="text-3xl font-bold text-orange-400">15+</div>
                  <div className="text-sm text-slate-400 leading-tight">Years of<br/>Experience</div>
                </div>
                <div className="w-px h-10 bg-white/10"></div>
                <div className="flex items-center gap-2">
                  <div className="flex text-orange-400">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <span className="text-sm text-slate-400 font-medium">5.0 Rating</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Bottom wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60L1440 60L1440 30C1440 30 1200 0 720 0C240 0 0 30 0 30L0 60Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Quick Actions Bar */}
      <div className="sticky top-20 bg-white/90 backdrop-blur-md border-y border-black/5 py-4 z-30">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <a href="tel:0776738859" className="flex items-center gap-2 text-sm font-bold text-orange-600">
              <Phone className="w-4 h-4" /> Call Now
            </a>
            <a href="https://maps.google.com/?q=104/7+Church+Rd,+Gampaha" target="_blank" className="flex items-center gap-2 text-sm font-bold text-slate-600">
              <Navigation className="w-4 h-4" /> Directions
            </a>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSaved(!isSaved)}
              className={`flex items-center gap-2 text-sm font-bold px-4 py-2 rounded-full transition-all ${isSaved ? 'bg-orange-500 text-white' : 'bg-slate-100 text-slate-600'}`}
            >
              <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} /> {isSaved ? 'Saved' : 'Save'}
            </button>
            <div className="flex items-center gap-2 border-l border-slate-200 pl-4">
              <span className="text-xs font-bold text-slate-400 uppercase mr-2">Share:</span>
              <button onClick={() => handleShare('facebook')} className="p-2 hover:bg-slate-100 rounded-full transition-colors"><Facebook className="w-4 h-4 text-blue-600" /></button>
              <button onClick={() => handleShare('twitter')} className="p-2 hover:bg-slate-100 rounded-full transition-colors"><Twitter className="w-4 h-4 text-sky-500" /></button>
              <button onClick={() => handleShare('email')} className="p-2 hover:bg-slate-100 rounded-full transition-colors"><Mail className="w-4 h-4 text-slate-600" /></button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-slate-50 to-white" id="services">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-wider mb-6">
                <Wrench className="w-3.5 h-3.5" />
                What We Offer
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-5">Our <span className="text-orange-500">Expertise</span></h2>
              <p className="text-slate-500 max-w-2xl mx-auto text-lg">From concept to completion — comprehensive building design and construction solutions trusted by 500+ clients across Sri Lanka.</p>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="bg-white p-8 rounded-3xl shadow-sm border border-black/5 flex flex-col justify-between group hover:shadow-xl hover:shadow-orange-100/50 transition-shadow duration-300 relative overflow-hidden"
                >
                  {/* Gradient accent on hover */}
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  
                  <div>
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${service.color} text-white shadow-lg`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-orange-600 transition-colors">{service.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-5">{service.description}</p>
                    
                    {/* Highlight tags */}
                    <div className="flex flex-wrap gap-2">
                      {service.highlights.map((tag, i) => (
                        <span key={i} className="text-xs font-medium px-3 py-1 rounded-full bg-slate-100 text-slate-600 group-hover:bg-orange-50 group-hover:text-orange-600 transition-colors">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                </motion.div>
              );
            })}
          </div>
          
          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 bg-slate-900 rounded-3xl p-8 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-white"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-500">500+</div>
              <div className="text-sm text-slate-400 mt-1">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-500">15+</div>
              <div className="text-sm text-slate-400 mt-1">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-500">9</div>
              <div className="text-sm text-slate-400 mt-1">Services Offered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-500">100%</div>
              <div className="text-sm text-slate-400 mt-1">Client Satisfaction</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <Gallery />

      {/* Design Philosophy Section */}
      <section className="py-24 px-4 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl font-bold mb-8 leading-tight">Our Design <span className="text-orange-500">Philosophy</span></h2>
              <p className="text-slate-400 mb-10 text-xl leading-relaxed">
                At Udeshan Building Designers, we believe that architecture is more than just structures; it's about creating environments that inspire and endure.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="text-3xl font-bold text-orange-500">01</div>
                  <h4 className="text-xl font-bold">Innovation</h4>
                  <p className="text-slate-500 text-sm">Pushing boundaries with modern techniques and sustainable materials.</p>
                </div>
                <div className="space-y-4">
                  <div className="text-3xl font-bold text-orange-500">02</div>
                  <h4 className="text-xl font-bold">Functionality</h4>
                  <p className="text-slate-500 text-sm">Designing spaces that work seamlessly for your lifestyle or business.</p>
                </div>
                <div className="space-y-4">
                  <div className="text-3xl font-bold text-orange-500">03</div>
                  <h4 className="text-xl font-bold">Aesthetics</h4>
                  <p className="text-slate-500 text-sm">Creating visual harmony that reflects your unique personality.</p>
                </div>
                <div className="space-y-4">
                  <div className="text-3xl font-bold text-orange-500">04</div>
                  <h4 className="text-xl font-bold">Integrity</h4>
                  <p className="text-slate-500 text-sm">Honest consulting and transparent construction management.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square rounded-full border border-white/10 absolute -inset-10 animate-pulse"></div>
              <div className="aspect-square rounded-full border border-white/5 absolute -inset-20"></div>
              <div className="relative z-10 aspect-square rounded-3xl overflow-hidden shadow-2xl rotate-3">
                <img src={`${import.meta.env.BASE_URL}images/philosophy.jpg`} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Design Philosophy" />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-orange-500 p-10 rounded-full text-white font-bold text-center shadow-2xl z-20">
                <div className="text-4xl">15+</div>
                <div className="text-xs uppercase tracking-widest">Years of<br/>Experience</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Professional Directory */}
      <section id="directory">
        <ProfessionalDirectory />
      </section>

      {/* Contact & Reviews Section */}
      <section className="py-24 px-4 bg-white" id="contact">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
            <div className="space-y-8 mb-12">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-600 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Corporate Office</h4>
                  <p className="text-slate-500">104/7 Church Rd, Gampaha</p>
                  <a href="#" className="text-orange-600 text-sm font-bold flex items-center gap-1 mt-2">
                    View on Google Maps <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-600 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Contact Details</h4>
                  <p className="text-slate-500">Devinda Karunanayake</p>
                  <p className="text-slate-900 font-medium">Land: 033 2234336</p>
                  <p className="text-slate-900 font-medium">Mobile: 077 6738859</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-600 shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Business Hours</h4>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-1 mt-2">
                    {BUSINESS_HOURS.map((item, i) => (
                      <React.Fragment key={i}>
                        <span className="text-sm text-slate-500">{item.day}</span>
                        <span className="text-sm font-medium text-slate-900">{item.hours}</span>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-100 pt-12">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                Client Reviews
                <div className="flex text-orange-400 ml-2">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
              </h3>
              <div className="space-y-6">
                {REVIEWS.map((review, i) => (
                  <div key={i} className="bg-slate-50 p-6 rounded-2xl">
                    <div className="flex justify-between items-start mb-3">
                      <h5 className="font-bold">{review.name}</h5>
                      <span className="text-xs text-slate-400">{review.date}</span>
                    </div>
                    <div className="flex text-orange-400 mb-3">
                      {Array.from({ length: review.rating }).map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                    </div>
                    <p className="text-slate-600 text-sm italic">"{review.text}"</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <InquiryForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-20 pb-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <Logo className="h-10 w-auto" />
                <div>
                  <h1 className="text-lg font-bold leading-tight">Udeshan</h1>
                  <p className="text-[8px] uppercase tracking-widest text-orange-500 font-bold">Building Designers</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Leading architectural and construction firm in Gampaha, dedicated to transforming your vision into reality with innovative designs and expert craftsmanship.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-orange-500 transition-colors"><Facebook className="w-4 h-4" /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-orange-500 transition-colors"><Twitter className="w-4 h-4" /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-orange-500 transition-colors"><Mail className="w-4 h-4" /></a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-orange-500 transition-colors">Home</a></li>
                <li><a href="#services" className="hover:text-orange-500 transition-colors">Services</a></li>
                <li><a href="#gallery" className="hover:text-orange-500 transition-colors">Project Gallery</a></li>
                <li><a href="#directory" className="hover:text-orange-500 transition-colors">Professional Directory</a></li>
                <li><a href="#contact" className="hover:text-orange-500 transition-colors">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6">Services</h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-orange-500 transition-colors">Architectural Drawings</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">3D Designing</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Structural Designing</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">BOQs & Estimates</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Building Approvals</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6">Newsletter</h4>
              <p className="text-slate-400 text-sm mb-6">Subscribe to get the latest updates and project highlights.</p>
              <div className="flex gap-2">
                <input type="email" placeholder="Your email" className="bg-white/5 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-orange-500 outline-none w-full" />
                <button className="bg-orange-500 p-3 rounded-xl hover:bg-orange-600 transition-colors">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-500 text-xs">© 2026 Udeshan Building Designers. All rights reserved.</p>
            <div className="flex gap-8 text-slate-500 text-xs">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
              <a href="#" className="hover:text-white">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
