import { Service, Accomplishment, Testimonial } from './types';

export const SERVICES_DATA: Service[] = [
  {
    id: 'exploration-drilling',
    title: 'Exploration & Deepwater Drilling',
    description: 'State-of-the-art seismic surveying, reservoir modeling, and advanced offshore/onshore drilling for safe hydrocarbon extraction.',
    longDescription: 'Our Upstream division utilizes top-tier geophysical and drilling technology. We specialize in high-precision deepwater drilling, directional drilling, and reservoir characterization. Safety is integrated into every phase of exploration, ensuring maximum recovery efficiency while minimizing environmental impact.',
    iconName: 'Compass',
    category: 'upstream'
  },
  {
    id: 'refining-processing',
    title: 'Refining & Chemical Processing',
    description: 'High-efficiency distillation and refining producing ultra-low sulfur diesel, gasoline, aviation fuel, and high-purity industrial petrochemicals.',
    longDescription: 'Primo operates cutting-edge refinery assets that transform crude hydrocarbons into refined fuels, lubricating oils, and petrochemical feedstocks. Our continuous optimization systems reduce emission intensity and optimize processing throughput with industry-leading uptime.',
    iconName: 'Factory',
    category: 'downstream'
  },
  {
    id: 'transport-distribution',
    title: 'Oil & Gas Transport & Logistics',
    description: 'Comprehensive midstream solutions utilizing advanced pipelines, double-hull oil tankers, and global logistics networks for reliable supply.',
    longDescription: 'We manage secure logistics channels connecting production sites to end-user markets. Our infrastructure includes double-hull maritime vessels, digitized pipeline networks with automated leak detection, and specialized storage facilities with strict safety protocols.',
    iconName: 'Truck',
    category: 'midstream'
  },
  {
    id: 'renewable-energy',
    title: 'Transitional & Renewable Solutions',
    description: 'Pioneering clean energy initiatives including biofuel integration, carbon capture and storage (CCS), and utility-scale solar power generation.',
    longDescription: 'Positioning Primo for the global energy transition, we invest heavily in bio-fuels, green hydrogen projects, and solar/wind asset management. Our goal is to balance traditional fossil energy operations with low-carbon alternatives to meet future net-zero targets.',
    iconName: 'Zap',
    category: 'renewables'
  },
  {
    id: 'maintenance-repair',
    title: 'Pipeline Maintenance & Asset Integrity',
    description: 'Round-the-clock preventative maintenance, non-destructive testing, and rapid-response repair services for critical pipelines and refineries.',
    longDescription: 'Our integrity management group provides routine testing, non-destructive examinations, and asset refurbishment. With a rapid-response field dispatch team, we ensure pipeline systems and facilities maintain flawless operating integrity and zero downtime.',
    iconName: 'Wrench',
    category: 'support'
  },
  {
    id: 'management-sustainability',
    title: 'ESG Management & Environmental Safety',
    description: 'Strategic energy management consulting, HSE regulatory compliance auditing, and ecological mitigation strategy design.',
    longDescription: 'Primo provides operational advisory and environmental stewardship protocols. We help partners navigate strict ESG compliance, conduct ecological impact assessments, and execute site remediation efforts that align with international sustainability standards.',
    iconName: 'ShieldCheck',
    category: 'support'
  }
];

export const ACCOMPLISHMENTS_DATA: Accomplishment[] = [
  {
    id: 'deep-sea-drilling',
    title: 'Offshore Deepwater Rig Installation',
    description: 'Deployment and commissioning of a ultra-deepwater semi-submersible drilling platform, operating safely at ocean depths exceeding 2,400 meters.',
    location: 'Gulf of Guinea / Offshore West Africa',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
    year: '2024'
  },
  {
    id: 'onshore-oil-field',
    title: 'Smart Onshore Wellfield Automation',
    description: 'Integration of automated hydraulic pumpjacks and digital twin telemetry across 180 active extraction wells, increasing production efficiency by 22%.',
    location: 'Permian Basin & West African Fields',
    imageUrl: 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=800&q=80',
    year: '2025'
  },
  {
    id: 'refinery-expansion',
    title: 'High-Capacity Crude Refinery Terminal',
    description: 'Completed engineering, construction, and commissioning of a 250,000 barrel/day catalytic cracking refinery unit with zero recordable safety incidents.',
    location: 'Lekki Industrial Zone / Coastal Hub',
    imageUrl: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=800&q=80',
    year: '2025'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't1',
    name: 'Kwame Mensah',
    role: 'Managing Director',
    company: 'West Africa Energy Logistics',
    quote: 'Primo has been our primary bulk fueling partner for over a decade. Their commitment to supply-chain reliability and high-spec fuels has enabled us to optimize our transport fleet efficiency while meeting strict environmental quotas.',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80'
  },
  {
    id: 't2',
    name: 'Oluchi Nnamdi',
    role: 'VP of Refinery Operations',
    company: 'Sahara Industrial Refining Corp',
    quote: 'Our refinery complex relies on top-grade crude feedstocks. Primo consistently delivers high-purity crude with precise chemical analysis logs. Their technical HSE compliance teams are exceptionally thorough.',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80'
  },
  {
    id: 't3',
    name: 'Tariq Al-Mansoor',
    role: 'Offshore Field Director',
    company: 'Global Petroleum Partners',
    quote: 'When we required urgent sub-sea pipeline diagnostic support, Primo\'s rapid maintenance team dispatched within hours. Their ultrasonic testing pinpointed pressure anomalies, averting major operational downtime.',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80'
  },
  {
    id: 't4',
    name: 'Amara Diallo',
    role: 'Director of Energy Transition',
    company: 'Pan-African Power Grid',
    quote: 'Primo\'s emerging low-carbon biofuel products have allowed us to blend traditional fuel sources seamlessly. This has significantly reduced our carbon intensity without compromising turbine energy output.',
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&h=150&q=80'
  }
];
