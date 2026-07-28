import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Compass, Factory, Truck, Zap, Wrench, ShieldCheck, 
  ChevronRight, Calculator, Clock, Cpu, Settings, ArrowRight, Gauge
} from 'lucide-react';
import { SERVICES_DATA } from '../data';
import { Service } from '../types';

interface ServicesViewProps {
  onRequestQuoteWithService: (serviceId: string) => void;
}

export default function ServicesView({ onRequestQuoteWithService }: ServicesViewProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeAccordionId, setActiveAccordionId] = useState<string>('exploration-drilling');

  // Interactive Calculator State
  const [calcService, setCalcService] = useState<string>('exploration-drilling');
  const [calcScale, setCalcScale] = useState<number>(30); // scale value 10 to 100
  const [calcDuration, setCalcDuration] = useState<number>(6); // months

  const categories = [
    { id: 'all', label: 'All Operations' },
    { id: 'upstream', label: 'Upstream (Exploration)' },
    { id: 'midstream', label: 'Midstream (Logistics)' },
    { id: 'downstream', label: 'Downstream (Refining)' },
    { id: 'renewables', label: 'Renewables (Clean Tech)' },
    { id: 'support', label: 'Support Services' },
  ];

  const filteredServices = selectedCategory === 'all' 
    ? SERVICES_DATA 
    : SERVICES_DATA.filter(s => s.category === selectedCategory || (selectedCategory === 'support' && s.category === 'support'));

  // Simple copy map to assign matching icons
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass': return Compass;
      case 'Factory': return Factory;
      case 'Truck': return Truck;
      case 'Zap': return Zap;
      case 'Wrench': return Wrench;
      case 'ShieldCheck': return ShieldCheck;
      default: return Settings;
    }
  };

  // Calculator Logic
  const getSimulatedMetrics = () => {
    let baseRate = 120000; // base price multiplier
    let label = 'Estimated Barrels / Day';
    let outputVal = Math.round(calcScale * 1250);
    let requirements: string[] = [];

    switch (calcService) {
      case 'exploration-drilling':
        baseRate = 150000;
        label = 'Target Drilling Depth (Meters)';
        outputVal = calcScale * 65;
        requirements = ['High-temp seismic sensors', 'BOP safety stack certification', 'Deepwater drilling fluid array'];
        break;
      case 'refining-processing':
        baseRate = 95000;
        label = 'Processing Capacity (Barrels/Day)';
        outputVal = calcScale * 2500;
        requirements = ['Catalytic cracking catalyst pack', 'Hydrogen desulfurization module', 'HSE atmospheric monitors'];
        break;
      case 'transport-distribution':
        baseRate = 60000;
        label = 'Distribution Range (Kilometers)';
        outputVal = calcScale * 35;
        requirements = ['Fibre-optic continuous leak sensor', 'Cathodic corrosion prevention', 'Multi-pump regulator nodes'];
        break;
      case 'renewable-energy':
        baseRate = 110000;
        label = 'Simulated Clean Output (Megawatts)';
        outputVal = calcScale * 8;
        requirements = ['Grid substation interconnectors', 'Bio-mass pre-heating chambers', 'Carbon emission audit reports'];
        break;
      default:
        baseRate = 45000;
        label = 'Inspected Asset Units';
        outputVal = Math.round(calcScale * 1.5);
        requirements = ['Ultrasonic thickness gauges', 'Non-destructive pipeline crawlers', 'ISO regulatory safety loggers'];
    }

    const estimatedInvestment = calcScale * baseRate * (calcDuration / 6);
    
    return {
      label,
      outputVal: outputVal.toLocaleString(),
      requirements,
      investment: estimatedInvestment.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }),
      timelineWeeks: Math.round(calcDuration * 4.3)
    };
  };

  const metrics = getSimulatedMetrics();

  return (
    <div className="bg-brand-light text-brand-dark min-h-screen py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <motion.div 
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16 space-y-4"
        >
          <span className="block text-xs font-bold uppercase tracking-widest text-brand-accent">Primo Energy Operations</span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-brand-dark">Our Energy Infrastructure</h1>
          <p className="text-sm text-brand-muted leading-relaxed">
            Deepwater exploration, high-spec distillation, leak-proof smart transport, and low-carbon fuel alternatives managed under strict safety standards.
          </p>
        </motion.div>

        {/* Categories Tab Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg border transition-all ${
                selectedCategory === cat.id
                  ? 'bg-brand-dark text-white border-brand-dark shadow-xs'
                  : 'bg-white text-brand-dark/70 border-gray-200 hover:text-brand-accent hover:border-brand-accent/20'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
          
          {/* Left: Active Service Detail Accordion */}
          <div className="lg:col-span-8 space-y-4">
            {filteredServices.map((service) => {
              const ServiceIcon = getIcon(service.iconName);
              const isActive = activeAccordionId === service.id;

              return (
                <div 
                  key={service.id} 
                  className={`rounded-xl border bg-white overflow-hidden transition-all duration-300 ${
                    isActive ? 'border-brand-accent shadow-sm' : 'border-gray-100 hover:border-gray-200 shadow-2xs'
                  }`}
                >
                  {/* Summary Header */}
                  <button
                    onClick={() => setActiveAccordionId(isActive ? '' : service.id)}
                    className="w-full text-left p-6 flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`h-12 w-12 rounded-lg flex items-center justify-center transition-colors ${
                        isActive ? 'bg-brand-accent text-white' : 'bg-brand-light text-brand-accent'
                      }`}>
                        <ServiceIcon className="h-6 w-6" />
                      </div>
                      <div>
                        <span className="block text-[10px] font-bold text-brand-accent tracking-widest uppercase">{service.category} Division</span>
                        <h3 className="font-display text-lg font-bold text-brand-dark">{service.title}</h3>
                      </div>
                    </div>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-md transition-colors ${
                      isActive ? 'bg-brand-accent/10 text-brand-accent' : 'bg-gray-100 text-brand-muted'
                    }`}>
                      {isActive ? 'Hide Scope' : 'Review Details'}
                    </span>
                  </button>

                  {/* Expanded content */}
                  {isActive && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      className="border-t border-gray-100 p-6 bg-brand-light/40 space-y-4"
                    >
                      <p className="text-xs text-brand-muted leading-relaxed">
                        {service.longDescription}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-2">
                        <div className="p-4 bg-white rounded-lg border border-gray-100 space-y-1">
                          <span className="block text-[10px] font-bold text-gray-400 uppercase font-mono">Industry Compliance</span>
                          <span className="block font-semibold text-brand-dark">ISO 9001, ISO 14001, ISO 45001</span>
                        </div>
                        <div className="p-4 bg-white rounded-lg border border-gray-100 space-y-1">
                          <span className="block text-[10px] font-bold text-gray-400 uppercase font-mono">Response Protocol</span>
                          <span className="block font-semibold text-brand-accent">24/7 Rapid Field Response</span>
                        </div>
                      </div>

                      <div className="flex justify-end pt-2">
                        <button
                          onClick={() => onRequestQuoteWithService(service.id)}
                          className="flex items-center gap-1.5 bg-brand-accent hover:bg-brand-accent-hover text-white px-5 py-2.5 rounded-lg text-xs font-bold transition-all"
                        >
                          Select Service & Request Quote
                          <ArrowRight className="h-4 w-4" />
                        </button>
                      </div>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right: Interactive Planner Sidebar Widget */}
          <div className="lg:col-span-4 bg-brand-dark text-white rounded-xl p-6 border border-white/5 sticky top-24 shadow-xl">
            <div className="flex items-center gap-2.5 border-b border-white/10 pb-4 mb-6">
              <Calculator className="h-5 w-5 text-brand-accent animate-pulse" />
              <div>
                <h3 className="font-display text-base font-bold text-white">Project Planner</h3>
                <span className="block text-[9px] font-mono tracking-wider text-gray-400 uppercase">Simulated Scope Estimator</span>
              </div>
            </div>

            <div className="space-y-4">
              {/* Select Service */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1.5">
                  Operational Division
                </label>
                <select
                  value={calcService}
                  onChange={(e) => setCalcService(e.target.value)}
                  className="w-full rounded-lg bg-black/40 border border-white/15 px-3 py-2 text-xs text-white focus:outline-hidden focus:border-brand-accent"
                >
                  <option value="exploration-drilling">Exploration & Drilling</option>
                  <option value="refining-processing">Refining & Processing</option>
                  <option value="transport-distribution">Transport & Logistics</option>
                  <option value="renewable-energy">Renewable Solutions</option>
                  <option value="maintenance-repair">Maintenance & Safety</option>
                </select>
              </div>

              {/* Scope slider */}
              <div>
                <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1.5">
                  <span>Resource Scale</span>
                  <span className="text-brand-accent font-mono">Factor: {calcScale}%</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="100"
                  value={calcScale}
                  onChange={(e) => setCalcScale(parseInt(e.target.value))}
                  className="w-full accent-brand-accent bg-black/40 h-1.5 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              {/* Duration selection */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1.5">
                  Target Duration: <span className="text-brand-accent font-mono">{calcDuration} Months</span>
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[3, 6, 12].map((m) => (
                    <button
                      key={m}
                      type="button"
                      onClick={() => setCalcDuration(m)}
                      className={`py-1.5 rounded-lg text-xs font-semibold border transition ${
                        calcDuration === m 
                          ? 'bg-brand-accent text-white border-brand-accent'
                          : 'bg-black/30 text-gray-400 border-white/10 hover:text-white hover:border-white/20'
                      }`}
                    >
                      {m} Mo
                    </button>
                  ))}
                </div>
              </div>

              {/* Output parameters */}
              <div className="bg-black/40 rounded-lg p-4 border border-white/10 space-y-3 pt-3">
                
                <div className="flex items-center justify-between text-xs border-b border-white/5 pb-2">
                  <span className="text-gray-400 flex items-center gap-1">
                    <Gauge className="h-3.5 w-3.5 text-brand-accent" /> {metrics.label}
                  </span>
                  <span className="font-mono font-bold text-white">{metrics.outputVal}</span>
                </div>

                <div className="flex items-center justify-between text-xs border-b border-white/5 pb-2">
                  <span className="text-gray-400 flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5 text-brand-accent" /> Est. Schedule
                  </span>
                  <span className="font-mono font-bold text-white">{metrics.timelineWeeks} Weeks</span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-400 flex items-center gap-1">
                    <Cpu className="h-3.5 w-3.5 text-brand-accent" /> Est. Capital investment
                  </span>
                  <span className="font-mono font-bold text-brand-accent">{metrics.investment}</span>
                </div>

              </div>

              {/* Simulated technical requirements */}
              <div className="space-y-1.5">
                <span className="block text-[9px] font-mono tracking-wider text-gray-500 uppercase">Core Infrastructure Required</span>
                <div className="space-y-1">
                  {metrics.requirements.map((req, i) => (
                    <span key={i} className="block text-[10px] text-gray-400 flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-accent shrink-0" />
                      {req}
                    </span>
                  ))}
                </div>
              </div>

              {/* Preselected CTA */}
              <button
                onClick={() => onRequestQuoteWithService(calcService)}
                className="w-full bg-brand-accent hover:bg-brand-accent-hover text-white py-3 px-4 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors mt-2"
              >
                Apply Parameters & Request Quote
              </button>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
