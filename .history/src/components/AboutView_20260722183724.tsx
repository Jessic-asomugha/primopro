import React from 'react';
import { motion } from 'motion/react';
import { Shield, Eye, Target, Award, HardHat, Building2, Globe2 } from 'lucide-react';

interface AboutViewProps {
  onRequestQuote: () => void;
}

export default function AboutView({ onRequestQuote }: AboutViewProps) {
  const leadership = [
    {
      name: 'Dr. Kwame Osei',
      role: 'Chief Executive Officer & Founder',
      desc: 'Former Director of Upstream Exploration with 24 years leading deepwater offshore operations and reservoir characterization across West Africa and the Gulf of Guinea.',
      avatarUrl: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&w=500&h=500&q=80'
    },
    {
      name: 'Amina Bello, M.Sc.',
      role: 'Chief Technology Officer',
      desc: 'Petroleum & Chemical Engineering lead driving Primo low-carbon transitional fuels, catalytic refining optimizations, and smart pipeline telemetry.',
      avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&h=500&q=80'
    },
    {
      name: 'Olusegun Adebayo, P.Eng',
      role: 'Head of Marine & Field Infrastructure',
      desc: 'Overlooks offshore FPSO vessel fleets, sub-sea pipe networks, and double-hull LNG tanker logistics across international maritime channels.',
      avatarUrl: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&fit=crop&w=500&h=500&q=80'
    },
    {
      name: 'Zuri Mthembu, CPA',
      role: 'Chief Financial Officer',
      desc: 'Specializes in energy commodity trading, capital allocation for mega oil & gas infrastructure projects, and ESG sustainability investments.',
      avatarUrl: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=500&h=500&q=80'
    }
  ];

  const milestones = [
    { year: '2008', title: 'Founding of Primo', desc: 'Established as a specialized seismic surveying and hydrocarbon exploration firm.' },
    { year: '2014', title: 'Smart Field Automation', desc: 'Introduced automated wellhead telemetry across 120 active production sites.' },
    { year: '2019', title: 'Deepwater Rig Deployment', desc: 'Successfully deployed ultra-deepwater drilling platforms operating at depths of 2,400m.' },
    { year: '2024', title: 'Transitional Biofuel Hub', desc: 'Initiated utility-scale biofuel blending, achieving net emissions reduction of 22%.' }
  ];

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.1 }
    })
  };

  return (
    <div className="bg-white text-brand-dark min-h-screen">
      
      {/* 1. Hero Block */}
      <section className="relative py-24 bg-brand-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:20px_20px] opacity-60" />
        
        {/* Background Oil Rig Image overlay */}
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80" 
            alt="Offshore Drilling Rig" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <motion.span 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-accent px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20"
          >
            <Globe2 className="h-3.5 w-3.5" />
            Global Energy Heritage • Since 2008
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
          >
            Engineering Africa & Global <br />
            <span className="text-brand-accent">Energy Independence</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            Primo is a vertically-integrated oil, gas, and energy corporation. We secure high-yield hydrocarbon assets, refine under strict international quality standards, and pioneer clean transitional power grids.
          </motion.p>
        </div>
      </section>

      {/* 2. Core Values & Mission Grid with Light Animation */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <motion.div 
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInVariants}
              className="p-8 rounded-xl bg-brand-light border border-gray-100 space-y-4 hover:shadow-md transition-shadow duration-300"
            >
              <div className="h-12 w-12 rounded-lg bg-brand-accent/10 flex items-center justify-center text-brand-accent">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-bold">Our Mission</h3>
              <p className="text-xs text-brand-muted leading-relaxed">
                To fulfill global industrial oil and fuel requirements securely and safely, while pioneering smart technological refinements that minimize carbon footprint during transition.
              </p>
            </motion.div>

            <motion.div 
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInVariants}
              className="p-8 rounded-xl bg-brand-light border border-gray-100 space-y-4 hover:shadow-md transition-shadow duration-300"
            >
              <div className="h-12 w-12 rounded-lg bg-brand-accent/10 flex items-center justify-center text-brand-accent">
                <Eye className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-bold">Our Vision</h3>
              <p className="text-xs text-brand-muted leading-relaxed">
                To remain a premier tier-one sustainable energy partner, setting the absolute benchmark for zero-accident safety compliance and high-spec chemical feedstock synthesis.
              </p>
            </motion.div>

            <motion.div 
              custom={3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInVariants}
              className="p-8 rounded-xl bg-brand-light border border-gray-100 space-y-4 hover:shadow-md transition-shadow duration-300"
            >
              <div className="h-12 w-12 rounded-lg bg-brand-accent/10 flex items-center justify-center text-brand-accent">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-bold">Environmental Safety</h3>
              <p className="text-xs text-brand-muted leading-relaxed">
                Operating with a zero-incident mandate (HSE). Our pipeline networks employ predictive machine learning sensors to intercept leakages before ecological damages can occur.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. Operational Integrity & Safety (Checklist + Oil/Gas Visual) */}
      <section className="py-20 bg-brand-light border-y border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <span className="block text-xs font-bold uppercase tracking-widest text-brand-accent">HSE Quality Standards</span>
              <h2 className="font-display text-3xl font-bold tracking-tight text-brand-dark">Uncompromising Safety Code</h2>
              <p className="text-sm text-brand-muted leading-relaxed">
                Primo believes commercial success is fully dependent on protecting our workforce, local communities, and delicate marine ecosystems. We maintain active HSE certifications across all operational fields.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 bg-white p-4 rounded-lg border border-gray-100 shadow-2xs">
                  <HardHat className="h-5 w-5 text-brand-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-brand-dark">Zero Harm Workspaces</h4>
                    <p className="text-[11px] text-brand-muted mt-0.5">Continuous field training and real-time site inspections prevent pipeline accidents.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white p-4 rounded-lg border border-gray-100 shadow-2xs">
                  <Award className="h-5 w-5 text-brand-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-brand-dark">ISO Certification Elite</h4>
                    <p className="text-[11px] text-brand-muted mt-0.5">Compliant with ISO 9001, 14001, and 45001 frameworks for total quality control.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white p-4 rounded-lg border border-gray-100 shadow-2xs">
                  <Building2 className="h-5 w-5 text-brand-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-brand-dark">Regulatory Compliance</h4>
                    <p className="text-[11px] text-brand-muted mt-0.5">Fully aligned with EPA, OSHA, and international marine transport safety treaties.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Oil & Gas Pipeline inspection image with overlay */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="overflow-hidden rounded-xl shadow-lg border border-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80" 
                  alt="Industrial oil and gas engineers inspecting high-pressure pipeline" 
                  className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute top-4 right-4 bg-brand-dark text-white px-4 py-2 rounded-lg text-xs font-mono border border-white/10 shadow-md">
                <span>SAFETY INCIDENTS IN 2025: 0</span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. Timeline Milestones */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-16 space-y-2">
            <span className="block text-xs font-bold uppercase tracking-widest text-brand-accent">Our Journey</span>
            <h2 className="font-display text-3xl font-bold tracking-tight text-brand-dark">Chronology of Expansion</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 relative">
            {milestones.map((m, index) => (
              <motion.div 
                key={m.year} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 bg-brand-light rounded-xl border border-gray-100 space-y-3 relative hover:border-brand-accent/30 transition-all"
              >
                <span className="block font-display text-2xl font-black text-brand-accent">{m.year}</span>
                <h4 className="text-xs font-bold text-brand-dark uppercase tracking-wider">{m.title}</h4>
                <p className="text-[11px] text-brand-muted leading-relaxed">{m.desc}</p>
                {index < 3 && (
                  <div className="hidden sm:block absolute top-1/2 -right-3 h-0.5 w-6 bg-gray-200 z-10" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Executive Leadership (African Executive Team) */}
      <section className="py-20 bg-brand-light">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="block text-xs font-bold uppercase tracking-widest text-brand-accent">Executive Board</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-dark">
              African Executive Leadership
            </h2>
            <p className="text-xs sm:text-sm text-brand-muted">
              Distinguished industry pioneers bringing decades of engineering, energy economics, and deepwater exploration expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((member, idx) => (
              <motion.div 
                key={member.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-xs hover:shadow-md transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="h-64 overflow-hidden bg-gray-100 relative">
                    <img 
                      src={member.avatarUrl} 
                      alt={member.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="p-6 space-y-2">
                    <h4 className="font-display text-base font-bold text-brand-dark leading-snug">{member.name}</h4>
                    <span className="block text-[11px] text-brand-accent font-semibold uppercase tracking-wider">{member.role}</span>
                    <p className="text-[11px] text-brand-muted leading-relaxed pt-2 border-t border-gray-100">{member.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={onRequestQuote}
              className="bg-brand-accent hover:bg-brand-accent-hover text-white font-bold py-3.5 px-8 rounded-lg text-xs uppercase tracking-wider transition shadow-sm hover:shadow-md"
            >
              Partner With Primo Energy
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}

