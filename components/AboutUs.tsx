import React, { useEffect, useRef, useState } from 'react';

// --- Types & Interfaces ---

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

interface ValueProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

interface StatItem {
  value: string;
  label: string;
  icon: React.ReactNode;
}

// --- Icons (Inline SVGs) ---

const IconLeaf = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const IconSprout = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const IconChart = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

const IconGroup = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const IconGlobe = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const IconBadgeCheck = () => (
  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>
);

// --- Animation Wrapper Component ---
// Uses Intersection Observer to fade elements in when they scroll into view
const FadeInSection: React.FC<{ children: React.ReactNode; delay?: string }> = ({ children, delay = '0ms' }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    if (domRef.current) observer.observe(domRef.current);
    return () => {
      if (domRef.current) observer.unobserve(domRef.current);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: delay }}
    >
      {children}
    </div>
  );
};

// --- Main Component ---

const AboutUs: React.FC = () => {
  
  // --- Data Definitions ---

  const teamMembers: TeamMember[] = [
    {
      id: '1',
      name: 'Carlos Mendoza',
      role: 'Founder & CEO',
      bio: 'Agricultural engineer with 20 years of experience in Andean soil restoration. Passionate about sustainable farming.',
      imageUrl: '/api/placeholder/400/400', // Placeholder image
    },
    {
      id: '2',
      name: 'Elena Quispe',
      role: 'Head of Agronomy',
      bio: 'Specialist in tuber physiology and carbon sequestration. Leads our field research in the Huancayo region.',
      imageUrl: '/api/placeholder/400/400', // Placeholder image
    },
    {
      id: '3',
      name: 'David Webb',
      role: 'Chief Technology Officer',
      bio: 'Biochar production expert focused on optimizing pyrolysis processes for maximum soil retention.',
      imageUrl: '/api/placeholder/400/400', // Placeholder image
    },
  ];

  const values: ValueProps[] = [
    {
      title: 'Sustainability First',
      description: 'Our biochar products permanently sequester carbon in the soil, fighting climate change while feeding the world.',
      icon: <IconLeaf />,
    },
    {
      title: 'Ancestral Wisdom',
      description: 'We honor the traditional agricultural techniques of the Andes, enhancing them with modern science.',
      icon: <IconSprout />,
    },
    {
      title: 'Scientific Rigor',
      description: 'Every product batch is tested for pH, porosity, and nutrient retention capability.',
      icon: <IconChart />,
    },
    {
      title: 'Community Growth',
      description: 'We partner directly with smallholder farmers in Peru to improve their yields and livelihoods.',
      icon: <IconGroup />,
    },
  ];

  const timeline: TimelineItem[] = [
    { year: '2018', title: 'The Seed is Planted', description: 'Founded in Cusco with a mission to restore degraded potato fields using biochar.' },
    { year: '2020', title: 'Expansion to Junín', description: 'Opened our first large-scale pyrolysis facility in the heart of Peru’s potato belt.' },
    { year: '2022', title: 'Tech Innovation', description: 'Patented our Goodfries™ Soil Enhancer formula specifically for Andean tubers.' },
    { year: '2024', title: 'Global Reach', description: 'Started exporting premium charcoal substrates to international markets.' },
  ];

  const stats: StatItem[] = [
    { value: '5,000+', label: 'Hectares Treated', icon: <IconGlobe /> },
    { value: '1,200', label: 'Farmers Partnered', icon: <IconGroup /> },
    { value: '15k', label: 'Tons of Biochar', icon: <IconLeaf /> },
    { value: '30%', label: 'Avg. Yield Increase', icon: <IconChart /> },
  ];

  return (
    <div className="font-sans text-stone-800 bg-stone-50 overflow-x-hidden">
      
      {/* --- Header Section --- */}
      <header className="relative bg-green-900 text-white py-24 md:py-32">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          {/* Abstract pattern background */}
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="#3f6212" />
          </svg>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <FadeInSection>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Cultivating the Future of <span className="text-green-400">Peruvian Potatoes</span>
            </h1>
            <p className="text-xl md:text-2xl text-stone-200 max-w-3xl mx-auto leading-relaxed">
              Goodfries combines ancient Andean agricultural wisdom with cutting-edge charcoal technology to regenerate soil health and boost productivity sustainably.
            </p>
          </FadeInSection>
        </div>
      </header>

      {/* --- Statistics Section --- */}
      <section className="py-16 bg-white shadow-sm relative z-20 -mt-10 mx-4 md:mx-12 rounded-xl border border-stone-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <FadeInSection key={idx} delay={`${idx * 100}ms`}>
                <div className="text-center group">
                  <div className="text-green-600 mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-stone-900 mb-1">{stat.value}</div>
                  <div className="text-sm uppercase tracking-wide text-stone-500 font-semibold">{stat.label}</div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* --- Mission & Story Section --- */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            
            {/* Timeline/History */}
            <div className="md:w-1/2">
              <FadeInSection>
                <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-8">Our Journey</h2>
                <div className="border-l-4 border-green-200 ml-3 space-y-10">
                  {timeline.map((item, idx) => (
                    <div key={idx} className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 h-6 w-6 rounded-full bg-green-600 border-4 border-stone-50"></div>
                      <span className="text-green-700 font-bold text-lg">{item.year}</span>
                      <h3 className="text-xl font-semibold text-stone-900">{item.title}</h3>
                      <p className="text-stone-600 mt-1">{item.description}</p>
                    </div>
                  ))}
                </div>
              </FadeInSection>
            </div>

            {/* Mission Text */}
            <div className="md:w-1/2">
              <FadeInSection delay="200ms">
                <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border-t-4 border-green-600">
                  <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6">Rooted in Earth</h2>
                  <p className="text-lg text-stone-700 mb-6 leading-relaxed">
                    At Goodfries, we believe that the best potatoes start with the best soil. Our mission is to empower farmers by providing premium, charcoal-based agricultural inputs that improve water retention, reduce fertilizer dependency, and sequester carbon.
                  </p>
                  <p className="text-lg text-stone-700 leading-relaxed">
                    We work hand-in-hand with communities in the Peruvian highlands, ensuring that our technology not only grows better crops but also grows better futures.
                  </p>
                </div>
              </FadeInSection>
            </div>

          </div>
        </div>
      </section>

      {/* --- Values Section --- */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-6">
          <FadeInSection>
            <div className="text-center mb-16">
              <span className="text-green-700 font-bold tracking-wider uppercase text-sm">Why We Do It</span>
              <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mt-2">Our Core Principles</h2>
            </div>
          </FadeInSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <FadeInSection key={idx} delay={`${idx * 100}ms`}>
                <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 h-full border border-green-100">
                  <div className="w-12 h-12 bg-green-100 text-green-700 rounded-lg flex items-center justify-center mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mb-3">{value.title}</h3>
                  <p className="text-stone-600">{value.description}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* --- Sustainability & Certification --- */}
      <section className="py-20 bg-stone-900 text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-2/3">
              <FadeInSection>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Certified Organic & Sustainable</h2>
                <p className="text-stone-300 text-lg mb-8">
                  Our production process is closed-loop and carbon negative. We are proud to be certified by leading agricultural standards organizations for organic farming inputs in Peru and abroad.
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="px-4 py-2 bg-stone-800 rounded-full border border-stone-700 text-sm font-medium">USDA Organic Compliant</span>
                  <span className="px-4 py-2 bg-stone-800 rounded-full border border-stone-700 text-sm font-medium">Carbon Neutral</span>
                  <span className="px-4 py-2 bg-stone-800 rounded-full border border-stone-700 text-sm font-medium">Fair Trade Sourcing</span>
                </div>
              </FadeInSection>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <FadeInSection delay="200ms">
                <div className="text-green-500 animate-pulse">
                   <IconBadgeCheck />
                </div>
              </FadeInSection>
            </div>
          </div>
        </div>
      </section>

      {/* --- Team Section --- */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-6">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-stone-900 mb-16">Meet the Growers</h2>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-10">
            {teamMembers.map((member, idx) => (
              <FadeInSection key={member.id} delay={`${idx * 150}ms`}>
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="h-64 bg-stone-200 relative overflow-hidden group">
                    <img 
                      src={member.imageUrl} 
                      alt={member.name} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-green-900 bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-stone-900">{member.name}</h3>
                    <p className="text-green-700 font-medium mb-4 text-sm uppercase tracking-wide">{member.role}</p>
                    <p className="text-stone-600 text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* --- Call to Action --- */}
      <section className="py-24 bg-green-800 text-center px-6">
        <FadeInSection>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Harvest?</h2>
          <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto">
