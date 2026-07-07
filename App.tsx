import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  ChevronRight,
  X,
  CheckCircle2,
  ArrowUpRight,
  Store,
  Truck,
  BarChart3,
  Globe,
  Zap,
  Users,
  ShieldCheck,
  Building2,
  ExternalLink,
  Layers,
  Search,
  Smartphone,
  ClipboardCheck,
  ShoppingBag,
  Palette,
  MapPin,
  CreditCard,
  Target,
  BadgeCheck,
  PackageCheck,
  Clock
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';

/**
 * ARK Assured - Premier Infrastructure for Construction & Interiors
 */

const FadeIn: React.FC<{ children: React.ReactNode; delay?: number; direction?: 'up' | 'down' | 'left' | 'right'; scale?: number }> = ({ children, delay = 0, direction = 'up', scale = 1 }) => {
  const directions = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: scale, ...directions[direction] }}
      whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
};

const Section: React.FC<{ id?: string; className?: string; children: React.ReactNode; label?: string; light?: boolean }> = ({ id, className = '', children, label, light }) => (
  <section id={id} className={`py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-12 lg:px-24 ${light ? 'bg-white text-[#061226]' : 'bg-[#061226] text-white'} ${className} relative overflow-hidden`}>
    <div className="max-w-7xl mx-auto relative z-10">
      {label && (
        <FadeIn direction="right">
          <div className="mb-8 sm:mb-12 md:mb-20 flex items-center gap-4 sm:gap-6 md:gap-12 flex-wrap">
            <div className="h-[2px] w-16 sm:w-24 md:w-48 bg-gradient-to-r from-[#D4AF37] to-transparent opacity-100 shrink-0" />
            <span className="text-base sm:text-xl md:text-2xl font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] text-metallic-gold">
              {label}
            </span>
          </div>
        </FadeIn>
      )}
      {children}
    </div>
  </section>
);

const LogoSeal = ({ size = 60, className = "" }) => (
  <motion.div
    whileHover={{ rotate: 10, scale: 1.1 }}
    transition={{ type: "spring", stiffness: 200 }}
    className={`relative flex items-center justify-center ${className}`}
    style={{ width: size, height: size }}
  >
    <motion.div
      animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
      transition={{ duration: 5, repeat: Infinity }}
      className="absolute inset-0 bg-[#D4AF37] blur-3xl rounded-full pointer-events-none"
    />
    <svg viewBox="0 0 100 100" className="w-full h-full text-[#D4AF37] relative z-10 drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]">
      <path d="M50 2 L65 8 L80 20 L92 35 L98 50 L92 65 L80 80 L65 92 L50 98 L35 92 L20 80 L8 65 L2 50 L8 35 L20 20 L35 8 Z" fill="none" stroke="currentColor" strokeWidth="0.5" className="opacity-30" />
      <path d="M50 8 L62 20 L78 20 L80 38 L92 50 L80 62 L78 80 L62 80 L50 92 L38 80 L22 80 L20 62 L8 50 L20 38 L22 20 L38 20 Z" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <path d="M50 30 L70 75 M50 30 L30 75 M38 58 L62 58 M50 30 L50 75" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  </motion.div>
);

const Modal: React.FC<{ isOpen: boolean; onClose: () => void; type: 'partner' | 'access' }> = ({ isOpen, onClose, type }) => {
  const [submitted, setSubmitted] = useState(false);
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-6">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="absolute inset-0 bg-black/90 backdrop-blur-xl" />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-[#0b1e3b] w-full max-w-xl p-8 md:p-16 border border-white/10 relative z-[130] shadow-2xl"
          >
            <button onClick={onClose} className="absolute top-6 right-6 text-neutral-500 hover:text-white"><X size={24} /></button>
            {submitted ? (
              <div className="text-center py-12">
                <CheckCircle2 size={60} className="mx-auto mb-6 text-[#D4AF37]" />
                <h3 className="serif text-3xl mb-4 text-white">Application Received</h3>
                <p className="text-neutral-400 font-light">One of our relationship managers will reach out within 24 hours.</p>
              </div>
            ) : (
              <div>
                <h3 className="serif text-4xl mb-6 text-white leading-tight">
                  {type === 'partner' ? 'Professional Registration' : 'Early Access Request'}
                </h3>
                <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                  <input required type="text" className="w-full bg-transparent border-b border-white/20 py-4 focus:border-[#D4AF37] outline-none text-white font-light" placeholder="Full Name" />
                  <input required type="email" className="w-full bg-transparent border-b border-white/20 py-4 focus:border-[#D4AF37] outline-none text-white font-light" placeholder="Email Address" />
                  <input required type="text" className="w-full bg-transparent border-b border-white/20 py-4 focus:border-[#D4AF37] outline-none text-white font-light" placeholder={type === 'partner' ? 'Profession (Architect/Designer/etc)' : 'Location'} />
                  <button type="submit" className="w-full bg-[#D4AF37] text-[#061226] py-5 uppercase tracking-[0.4em] font-black text-xs hover:scale-[1.02] transition-transform">
                    {type === 'partner' ? 'Submit Registration' : 'Join Waiting List'}
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default function App() {
  const [modalType, setModalType] = useState<'partner' | 'access'>('access');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [workflowTab, setWorkflowTab] = useState<'b2b' | 'b2c'>('b2b');
  const { scrollYProgress } = useScroll();
  const scaleProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openModal = (type: 'partner' | 'access') => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const navLinks = [
    { name: 'Core', id: 'core' },
    { name: 'Platform', id: 'platform' },
    { name: 'Network', id: 'network' }
  ];

  const handleGlide = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
  };

  const b2bWorkflow = [
    { title: "Registration", role: "Vaishnavi (Designer)", desc: "Join the elite network of ARK Partners to unlock exclusive material sourcing tools.", icon: <Smartphone /> },
    { title: "Lead Connection", role: "Growth", desc: "Gain access to high-intent clients looking for your specific design expertise.", icon: <Target /> },
    { title: "Project Scope", role: "Client Success", desc: "Collaborate with clients using our integrated suite of design-to-order tools.", icon: <Users /> },
    { title: "Physical Validation", role: "Verification", desc: "Use ARK Experience Centers to show physical samples to your clients.", icon: <Store /> },
    { title: "Unified Sourcing", role: "Procurement", desc: "Order from multiple brands with one click at exclusive institutional rates.", icon: <ShoppingBag /> },
    { title: "Project Handover", role: "Completion", desc: "Deliver on time with ARK's logistics guarantee and 100% material assurance.", icon: <CheckCircle2 /> }
  ];

  const b2cWorkflow = [
    { title: "Style Discovery", role: "Raju (Homeowner)", desc: "Browse a curated catalog of verified premium materials and interior styles.", icon: <Search /> },
    { title: "Pro Matching", role: "Connection", desc: "Find ARK-verified designers and contractors tailored to your budget.", icon: <Users /> },
    { title: "Tactile Testing", role: "Sampling", desc: "Order sample kits of paints, hardware, or finishes directly to your door.", icon: <Palette /> },
    { title: "OTRC Discount", role: "Savings", desc: "Apply professional referral codes for direct brand-to-consumer discounts.", icon: <Zap /> },
    { title: "Real-Time Tracking", role: "Transaction", desc: "Materials arrive from our Regional Distribution Centers with full tracking.", icon: <Truck /> },
    { title: "Home Realized", role: "Impact", desc: "Move into your new space with the peace of mind of 100% genuine products.", icon: <CheckCircle2 /> }
  ];

  return (
    <div className="bg-[#061226] text-white selection:bg-[#D4AF37] selection:text-[#061226]">
      <motion.div className="fixed top-0 left-0 right-0 h-[3px] bg-metallic-gold z-[110] origin-left" style={{ scaleX: scaleProgress }} />

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-[100] px-4 sm:px-6 md:px-12 flex justify-between items-center transition-all duration-500 ${scrolled ? 'bg-[#061226]/95 backdrop-blur-lg py-3 sm:py-4 border-b border-white/10' : 'bg-transparent py-6 sm:py-8'}`}>
        <div className="flex items-center gap-2 sm:gap-4 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <LogoSeal size={32} className="sm:w-9 sm:h-9 md:w-[38px] md:h-[38px]" />
          <span className="serif text-base sm:text-xl md:text-2xl tracking-widest uppercase font-light">ARK <span className="text-metallic-gold font-bold">ASSURED</span></span>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-12">
          {navLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`} onClick={(e) => handleGlide(e, link.id)} className="text-[10px] uppercase tracking-[0.4em] text-neutral-400 hover:text-[#D4AF37] font-black transition-all">
              {link.name}
            </a>
          ))}
          <button onClick={() => openModal('partner')} className="border border-[#D4AF37] px-8 py-3 text-[10px] uppercase tracking-[0.4em] text-[#D4AF37] font-black hover:bg-[#D4AF37] hover:text-[#061226] transition-all">
            Join as Partner
          </button>
        </div>

        {/* Mobile - Show GET ACCESS button */}
        <div className="flex lg:hidden items-center">
          <button
            onClick={() => openModal('access')}
            className="text-[#D4AF37] font-black text-[10px] uppercase tracking-widest underline decoration-dotted underline-offset-4"
          >
            GET ACCESS
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center px-4 sm:px-6 md:px-12 lg:px-24 pt-20 sm:pt-24 pb-8 sm:pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#061226] via-[#061226]/80 to-transparent" />

        <div className="max-w-7xl relative z-10 w-full mx-auto">
          {/* Decorative Gold Bar Pillar */}
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{ duration: 1.5, ease: "circOut", delay: 0.2 }}
            className="absolute left-[-10px] sm:left-[-20px] md:left-[-40px] top-0 w-[2px] bg-gradient-to-b from-[#D4AF37] via-[#F1D382] to-transparent shadow-[0_0_15px_rgba(212,175,55,0.5)] hidden md:block"
          />

          <FadeIn direction="right">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-8 sm:mb-12">
              <LogoSeal size={60} className="sm:w-16 sm:h-16 md:w-20 md:h-20" />
              <div className="flex flex-col">
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.6em] sm:tracking-[0.8em] font-black text-[#D4AF37]">THE NEW STANDARD</span>
                <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.3em] sm:tracking-[0.4em] text-neutral-500 mt-1 sm:mt-2 leading-tight">ZERO COUNTERFEITS • DIRECT SOURCING • PURE QUALITY</span>
              </div>
            </div>
          </FadeIn>

          <div className="mb-6 sm:mb-10 text-center">
            <FadeIn delay={0.2}>
              <h1 className="serif text-[2.5rem] xs:text-[3rem] sm:text-[3.8rem] md:text-[5rem] lg:text-[6.5rem] xl:text-[8rem] tracking-tighter text-[#f5f5f7] leading-[1.05]">
                Ready to build your
              </h1>
            </FadeIn>
            <FadeIn delay={0.5}>
              <div className="mt-2 sm:mt-4 md:mt-8">
                <h1 className="serif text-[2.5rem] xs:text-[3rem] sm:text-[3.8rem] md:text-[5rem] lg:text-[6.5rem] xl:text-[8rem] tracking-tighter text-[#D4AF37] leading-[1.05]">
                  dream home
                </h1>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.7}>
            <p className="text-neutral-400 text-base sm:text-xl md:text-2xl lg:text-3xl font-light max-w-5xl mx-auto mb-8 sm:mb-12 md:mb-16 leading-relaxed text-center">
              India's trusted one stop platform for genuine, high-quality building materials and interior materials
              <br className="hidden sm:block" /> No Middlemen, No Counterfeits. Just the REAL DEAL
            </p>
          </FadeIn>

          <FadeIn delay={0.9}>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
              <button onClick={() => openModal('access')} className="bg-[#D4AF37] text-[#061226] px-8 sm:px-12 py-4 sm:py-6 text-[10px] sm:text-xs uppercase tracking-[0.3em] sm:tracking-[0.4em] font-black flex items-center justify-center gap-4 sm:gap-6 hover:scale-[1.02] transition-transform shadow-[0_20px_50px_rgba(212,175,55,0.2)]">
                Get Early Access <ArrowUpRight size={16} className="sm:w-[18px] sm:h-[18px]" />
              </button>
              <div className="flex items-center gap-3 sm:gap-4 justify-center sm:justify-start">
                <div className="h-[1px] w-8 sm:w-12 bg-white/20" />
                <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-neutral-500 font-bold">Launching in Hyderabad</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* T-Hub Marquee */}
      <div className="relative z-20 bg-white/[0.02] border-y border-white/5 backdrop-blur-sm overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#061226] via-transparent to-[#061226] z-10 pointer-events-none" />
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="flex py-3 sm:py-4 w-max"
        >
          {[...Array(20)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 sm:gap-12 px-4 sm:px-6 opacity-90 hover:opacity-100 transition-opacity">
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-neutral-300 font-medium">
                Incubated with <span className="text-white font-bold">T-Hub</span>
              </span>
              <div className="w-1 h-1 rounded-full bg-[#D4AF37]/40" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Market Problem - "The Chaos" */}
      <Section id="core" label="01. The Chaos">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-start">
          <FadeIn>
            <h2 className="serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl leading-tight mb-6 sm:mb-8">A Broken <br /><span className="text-metallic-gold italic">Supply Chain.</span></h2>
            <p className="text-neutral-400 text-base sm:text-lg md:text-xl lg:text-2xl font-light leading-relaxed mb-8 sm:mb-12">
              Building a home shouldn't be a gamble. Today's market forces you to navigate a maze of untrusted dealers and inflated costs.
            </p>
          </FadeIn>

          <div className="space-y-8">
            {[
              { title: "The Duplicate Epidemic", desc: "Up to 20% of materials in local markets are counterfeits or lower-grade substitutes.", icon: <ShieldCheck className="text-[#D4AF37]" /> },
              { title: "Price Inflation", desc: "Layers of distribution can add 25-30% in hidden margins that you end up paying for.", icon: <Layers className="text-[#D4AF37]" /> },
              { title: "Service Fragmentation", desc: "Finding verified professionals who use genuine materials is currently left to chance.", icon: <Search className="text-[#D4AF37]" /> }
            ].map((item, i) => (
              <FadeIn key={i} delay={0.1 * i} direction="left">
                <div className="p-10 border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all group">
                  <div className="mb-6 transform group-hover:scale-110 transition-transform">{item.icon}</div>
                  <h4 className="serif text-2xl text-white mb-4">{item.title}</h4>
                  <p className="text-neutral-500 text-sm uppercase tracking-widest leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* Solution Section */}
      <Section id="platform" label="02. The ARK Platform" className="bg-[#040d1a]">
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 md:mb-20">
          <FadeIn>
            <h2 className="serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl mb-6 sm:mb-8 leading-tight">One Hub. <span className="text-metallic-gold italic">Total Trust.</span></h2>
            <p className="text-neutral-500 text-[10px] sm:text-xs md:text-sm font-black uppercase tracking-[0.6em] sm:tracking-[0.8em]">A Dual-Interface Ecosystem for Everyone</p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
          <FadeIn direction="right">
            <div className="p-8 sm:p-10 md:p-12 border border-white/10 bg-white/5 h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 p-2 sm:p-4 opacity-10"><Users size={80} className="sm:w-24 sm:h-24 md:w-[120px] md:h-[120px]" /></div>
              <h3 className="serif text-2xl sm:text-3xl mb-6 sm:mb-8 text-white">ARK Assured</h3>
              <p className="text-neutral-400 text-xs sm:text-sm uppercase tracking-widest mb-6 sm:mb-10">Homeowners & Self-Builders</p>
              <ul className="space-y-4 sm:space-y-6 text-neutral-300 text-xs sm:text-sm md:text-base">
                <li className="flex gap-3 sm:gap-4"><CheckCircle2 className="text-neutral-400 shrink-0 w-4 h-4 sm:w-[18px] sm:h-[18px]" /> 100% Brand authenticity and Guarantee</li>
                <li className="flex gap-3 sm:gap-4"><CheckCircle2 className="text-neutral-400 shrink-0 w-4 h-4 sm:w-[18px] sm:h-[18px]" /> Doorstep sample delivery for tactile choice</li>
                <li className="flex gap-3 sm:gap-4"><CheckCircle2 className="text-neutral-400 shrink-0 w-4 h-4 sm:w-[18px] sm:h-[18px]" /> Match with verified, top-rated local professionals</li>
                <li className="flex gap-3 sm:gap-4"><CheckCircle2 className="text-neutral-400 shrink-0 w-4 h-4 sm:w-[18px] sm:h-[18px]" /> Direct brand-to-door logistics with tracking</li>
              </ul>
              <button onClick={() => openModal('access')} className="mt-8 sm:mt-12 text-[9px] sm:text-[10px] uppercase font-black tracking-widest text-white flex items-center gap-3 sm:gap-4 hover:translate-x-2 transition-transform">Get Early Access <ArrowRight size={12} className="sm:w-[14px] sm:h-[14px]" /></button>
            </div>
          </FadeIn>
          <FadeIn direction="left">
            <div className="p-8 sm:p-10 md:p-12 border border-[#D4AF37]/20 bg-[#D4AF37]/5 h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 p-2 sm:p-4 opacity-10"><Building2 size={80} className="sm:w-24 sm:h-24 md:w-[120px] md:h-[120px]" /></div>
              <h3 className="serif text-2xl sm:text-3xl mb-6 sm:mb-8 text-[#D4AF37]">ARK Partner</h3>
              <p className="text-neutral-400 text-xs sm:text-sm uppercase tracking-widest mb-6 sm:mb-10">Architects, Designers & Contractors</p>
              <ul className="space-y-4 sm:space-y-6 text-neutral-300 text-xs sm:text-sm md:text-base">
                <li className="flex gap-3 sm:gap-4"><CheckCircle2 className="text-[#D4AF37] shrink-0 w-4 h-4 sm:w-[18px] sm:h-[18px]" /> Institutional pricing on bulk brand orders</li>
                <li className="flex gap-3 sm:gap-4"><CheckCircle2 className="text-[#D4AF37] shrink-0 w-4 h-4 sm:w-[18px] sm:h-[18px]" /> Commission on B2C orders</li>
                <li className="flex gap-3 sm:gap-4"><CheckCircle2 className="text-[#D4AF37] shrink-0 w-4 h-4 sm:w-[18px] sm:h-[18px]" /> Digital portfolio and lead-generation tools</li>
                <li className="flex gap-3 sm:gap-4"><CheckCircle2 className="text-[#D4AF37] shrink-0 w-4 h-4 sm:w-[18px] sm:h-[18px]" /> Flexible credit limits for project scaling</li>
                <li className="flex gap-3 sm:gap-4"><CheckCircle2 className="text-[#D4AF37] shrink-0 w-4 h-4 sm:w-[18px] sm:h-[18px]" /> Integrated project management dashboard</li>
              </ul>
              <button onClick={() => openModal('partner')} className="mt-8 sm:mt-12 text-[9px] sm:text-[10px] uppercase font-black tracking-widest text-[#D4AF37] flex items-center gap-3 sm:gap-4 hover:translate-x-2 transition-transform">Register as Partner <ArrowRight size={12} className="sm:w-[14px] sm:h-[14px]" /></button>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Workflow */}
      <Section id="network" label="03. User Journeys">
        <div className="flex flex-col items-center mb-10 sm:mb-12 md:mb-16">
          <FadeIn>
            <div className="flex bg-white/5 p-1 rounded-sm border border-white/10 mb-8 sm:mb-10 md:mb-12 w-full sm:w-auto">
              <button
                onClick={() => setWorkflowTab('b2b')}
                className={`flex-1 sm:flex-none px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 text-[9px] sm:text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.4em] font-black transition-all ${workflowTab === 'b2b' ? 'bg-[#D4AF37] text-[#061226]' : 'text-neutral-500 hover:text-white'}`}
              >
                For Professionals
              </button>
              <button
                onClick={() => setWorkflowTab('b2c')}
                className={`flex-1 sm:flex-none px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 text-[9px] sm:text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.4em] font-black transition-all ${workflowTab === 'b2c' ? 'bg-[#D4AF37] text-[#061226]' : 'text-neutral-500 hover:text-white'}`}
              >
                For Homeowners
              </button>
            </div>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 overflow-hidden">
          <AnimatePresence mode="wait">
            {(workflowTab === 'b2b' ? b2bWorkflow : b2cWorkflow).map((step, i) => (
              <motion.div
                key={`${workflowTab}-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="p-8 sm:p-10 md:p-12 lg:p-16 bg-[#061226] hover:bg-white/[0.03] transition-colors relative"
              >
                <div className="text-[6rem] sm:text-[8rem] md:text-[10rem] font-serif font-black absolute -top-4 sm:-top-6 md:-top-8 -right-2 sm:-right-3 md:-right-4 opacity-[0.08] text-[#D4AF37] select-none pointer-events-none">{i + 1}</div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-[#D4AF37] mb-6 sm:mb-8 border border-[#D4AF37]/30">
                  {step.icon}
                </div>
                <span className="text-[9px] sm:text-[10px] font-black text-[#D4AF37] uppercase tracking-[0.4em] sm:tracking-[0.5em] mb-3 sm:mb-4 block">{step.role}</span>
                <h4 className="serif text-xl sm:text-2xl text-white mb-4 sm:mb-6">{step.title}</h4>
                <p className="text-neutral-400 text-[10px] sm:text-xs font-light leading-relaxed uppercase tracking-wider">{step.desc}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </Section >

      {/* The ARK Guarantee */}
      < Section id="guarantee" label="04. The ARK Guarantee" >
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <FadeIn>
              <h2 className="serif text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl mb-8 sm:mb-12 text-[#f5f5f7]">Total <br /><span className="text-metallic-gold italic">Assurance.</span></h2>
              <div className="space-y-8 sm:space-y-12">
                <div className="border-l-4 border-[#D4AF37] pl-6 sm:pl-8 md:pl-10">
                  <div className="serif text-4xl sm:text-5xl md:text-6xl text-white mb-2">100% Real</div>
                  <p className="text-[10px] sm:text-[11px] text-neutral-500 uppercase tracking-[0.5em] sm:tracking-[0.6em] font-black">All products are verified brand-direct</p>
                </div>
                <div className="border-l-4 border-white/10 pl-6 sm:pl-8 md:pl-10">
                  <div className="serif text-4xl sm:text-5xl md:text-6xl text-white/40 mb-2">30% Savings</div>
                  <p className="text-[10px] sm:text-[11px] text-neutral-500 uppercase tracking-[0.5em] sm:tracking-[0.6em] font-black">Average reduction in sourcing costs</p>
                </div>
              </div>
            </FadeIn>
          </div>
          <div className="lg:col-span-5 bg-white/5 p-8 sm:p-10 md:p-12 border border-white/10">
            <h4 className="serif text-2xl sm:text-3xl mb-6 sm:mb-10 text-metallic-gold">Core Service Pillars</h4>
            <div className="space-y-4 sm:space-y-6">
              {[
                "Direct-from-Manufacturer Sourcing",
                "ARK-Verified Professional Matching",
                "Integrated Credit & BNPL Solutions",
                "Last Mile Delivery",
                "Physical Material Experience Centers",
                "OTRC Discounts and Commissions",
                "Door Step Sampling"
              ].map((usp, i) => (
                <div key={i} className="flex gap-3 sm:gap-4 items-center group">
                  <div className="h-px w-4 sm:w-6 bg-[#D4AF37] group-hover:w-8 sm:group-hover:w-10 transition-all" />
                  <span className="text-[9px] sm:text-[10px] uppercase font-black tracking-widest text-neutral-400">{usp}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section >



      {/* Closure / Final CTA */}
      <section className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 text-center bg-ark-gradient">
        <FadeIn>
          <div className="flex justify-center mb-10 sm:mb-12 md:mb-16"><LogoSeal size={80} className="sm:w-24 sm:h-24 md:w-[120px] md:h-[120px]" /></div>
          <h2 className="serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl mb-10 sm:mb-12 md:mb-16 leading-tight">Ready for a <br /><span className="text-metallic-gold italic">Better Build?</span></h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 md:gap-8">
            <button onClick={() => openModal('partner')} className="border-2 border-[#D4AF37] px-10 sm:px-12 md:px-16 py-4 sm:py-5 md:py-6 text-[10px] sm:text-xs uppercase tracking-[0.5em] sm:tracking-[0.6em] font-black text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#061226] transition-all">
              Register as Professional
            </button>
            <button onClick={() => openModal('access')} className="bg-[#D4AF37] text-[#061226] px-10 sm:px-12 md:px-16 py-4 sm:py-5 md:py-6 text-[10px] sm:text-xs uppercase tracking-[0.3em] sm:tracking-[0.4em] font-black hover:bg-white transition-all">
              Get Early Access
            </button>
          </div>
        </FadeIn>
      </section>

      {/* Footer */}
      <footer className="bg-[#040d1a] py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 lg:px-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 sm:gap-12 md:gap-16 lg:gap-32">
          <div className="md:col-span-6">
            <div className="flex items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
              <LogoSeal size={40} className="sm:w-12 sm:h-12 md:w-[50px] md:h-[50px]" />
              <span className="serif text-xl sm:text-2xl tracking-[0.2em] uppercase text-white font-light">ARK <span className="text-[#D4AF37] font-black">ASSURED</span></span>
            </div>
            <p className="text-neutral-300 text-xs sm:text-sm font-light leading-relaxed uppercase tracking-[0.2em] max-w-sm">
              India's infrastructure-scale marketplace for authenticated building materials and premium interior solutions.
            </p>
          </div>
          <div className="md:col-span-3">
            <h5 className="text-[9px] sm:text-[10px] uppercase tracking-[0.5em] sm:tracking-[0.6em] text-neutral-500 font-black mb-6 sm:mb-8">Platform</h5>
            <ul className="space-y-3 sm:space-y-4 text-xs font-black tracking-widest text-neutral-300 uppercase">
              <li><button onClick={() => openModal('partner')} className="hover:text-[#D4AF37] transition-colors text-left">Professional Registration</button></li>
              <li><button onClick={() => openModal('access')} className="hover:text-[#D4AF37] transition-colors text-left">Homeowner Waitlist</button></li>
              <li><a href="#network" onClick={(e) => handleGlide(e, 'network')} className="hover:text-[#D4AF37] transition-colors">How it Works</a></li>
              <li><a href="#guarantee" onClick={(e) => handleGlide(e, 'guarantee')} className="hover:text-[#D4AF37] transition-colors">Quality Assurance</a></li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <h5 className="text-[9px] sm:text-[10px] uppercase tracking-[0.5em] sm:tracking-[0.6em] text-neutral-500 font-black mb-6 sm:mb-8">Contact</h5>
            <p className="text-neutral-300 text-xs font-black tracking-widest uppercase leading-loose">
              support@arkassured.com <br />
              Kukatpally, Hyderabad <br />
              Telangana, India
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 sm:mt-16 md:mt-24 pt-8 sm:pt-10 md:pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.5em] sm:tracking-[0.6em] text-neutral-600">
          <span>© 2025 ARK Assured. All Rights Reserved.</span>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12">
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Partner Agreement</span>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-6 pt-6 border-t border-white/5 text-center">
          <a
            href="https://tarsnetworks.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.5em] sm:tracking-[0.6em] text-neutral-500 hover:text-[#D4AF37] transition-colors"
          >
            Developed by <span className="text-[#D4AF37]">TarsNetworks</span>
          </a>
        </div>
      </footer >

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} type={modalType} />
    </div >
  );
}