import React, { useState } from 'react';
import { Check } from 'lucide-react';
import Image from 'next/image';

interface Service {
  title: string;
  description: string;
  buttonText: string;
  image: string;
  orientation: 'left' | 'right';
  url: string;
}

interface ServiceCardProps {
  service: Service;
}

const ComparisonSection = () => {
  const services: Service[] = [
    {
      title: "RESIDENTIAL DRYWALL",
      description: "From single room repairs to complete home renovations, our expert team delivers flawless results for homeowners across Toronto. We handle everything from water damage repairs to texture matching, ensuring your walls look perfect every time.",
      buttonText: "RESIDENTIAL SERVICES",
      image: "/photos/homepage/1.jpg",
      orientation: "right",
      url: "/residential"
    },
    {
      title: "COMMERCIAL DRYWALL",
      description: "Specializing in large-scale commercial projects, we bring efficiency and expertise to office buildings, retail spaces, and industrial facilities. Our experienced crews handle multi-floor installations, meeting strict deadlines without compromising quality.",
      buttonText: "COMMERCIAL SERVICES",
      image: "/photos/homepage/2.jpg",
      orientation: "left",
      url: "/commercial"
    },
    {
      title: "NEW CONSTRUCTION",
      description: "Partner with Toronto's leading drywall experts for your new construction project. We work seamlessly with developers and contractors to deliver superior installations that meet all building codes and project specifications.",
      buttonText: "NEW CONSTRUCTION",
      image: "/photos/homepage/3.jpg",
      orientation: "right",
      url: "/new-construction"
    },
    {
      title: "SPECIALTY FINISHES",
      description: "Elevate your spaces with our specialty drywall finishes. From custom textures to Level 5 finishes for high-end properties, we bring artistry and technical excellence to every project.",
      buttonText: "SPECIALTY SERVICES",
      image: "/photos/homepage/1.jpg",
      orientation: "left",
      url: "/specialty"
    }
  ];

  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyToClipboard = async (text: string, isPhone: boolean) => {
    try {
      await navigator.clipboard.writeText(text);
      if (isPhone) {
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 1500);
      } else {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 1500);
      }
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => (
    <div className={`flex flex-col md:flex-row items-center w-full gap-8 py-16 ${
      service.orientation === 'left' ? 'md:flex-row-reverse' : ''
    }`}>
      <div className="w-full md:w-1/2 relative group overflow-hidden">
        <a href={service.url} className="block cursor-pointer">
          <div className="relative overflow-hidden rounded-xl shadow-2xl transform transition-transform duration-500 hover:-translate-y-2">
            <div className="relative h-[600px]">
              <Image 
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/40 group-hover:to-black/60 transition-all duration-300"/>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
              <p className="text-sm opacity-90">Learn more about our {service.title.toLowerCase()} expertise</p>
            </div>
          </div>
        </a>
      </div>
      
      <div className="w-full md:w-1/2 px-6">
        <h2 className="text-4xl font-bold mb-6 tracking-wide">{service.title}</h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">{service.description}</p>
        <a 
          href={service.url}
          className="group inline-flex items-center gap-2 bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-all duration-300"
        >
          {service.buttonText}
          <svg 
            className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M5 12h14"/>
            <path d="m12 5 7 7-7 7"/>
          </svg>
        </a>
      </div>
    </div>
  );

  return (
    <div>
      <div className="bg-black w-full p-8 space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
          Toronto Premier Drywall Specialists
        </h1>
        
        <div className="flex justify-center">
          <svg className="w-16 h-16 mb-6" viewBox="0 0 24 24" fill="white">
            <path d="M20 10.999h2C22 5.869 18.127 2 12.99 2v2C17.052 4 20 6.943 20 10.999z"/>
            <path d="M13 8c2.103 0 3 .897 3 3h2c0-3.225-1.775-5-5-5v2zm3.422 5.443a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a1 1 0 0 0-.086-1.391l-4.064-3.696z"/>
          </svg>
        </div>
        
        <button
          onClick={() => copyToClipboard("7786534862", true)}
          className="w-full text-center transition-transform duration-200"
        >
          <div 
            className={`text-4xl md:text-6xl font-black text-white tracking-wider mb-8 text-center transition-colors duration-200 ${
              copiedPhone ? 'text-green-400' : 'text-white'
            }`}
            style={{
              textShadow: '4px 4px 0 rgba(0,0,0,0.3)',
            }}
          >
            {copiedPhone ? (
              <div className="flex items-center justify-center gap-4">
                <span>Copied!</span>
                <Check className="w-8 h-8 md:w-12 md:h-12 animate-in fade-in duration-200" />
              </div>
            ) : (
              '+1 778-653-4862'
            )}
          </div>
        </button>

        <h2 className="text-xl md:text-2xl text-white text-center mb-6">
          Expert Drywall Solutions for Every Project
        </h2>

        <div className="flex justify-center">
          <button 
            onClick={() => copyToClipboard("office@toronto-drywall.com", false)}
            className={`${
              copiedEmail 
                ? 'bg-green-400 scale-95' 
                : 'bg-yellow-400 hover:bg-yellow-300'
            } text-black px-8 py-2 font-medium rounded-full transition-all duration-300 flex items-center gap-2`}
          >
            {copiedEmail ? (
              <>
                <span>Copied!</span>
                <Check className="w-5 h-5 animate-in fade-in duration-200" />
              </>
            ) : (
              'Email Us'
            )}
          </button>
        </div>
      </div>

      <section className="py-16 px-5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-5xl font-bold mb-6">OUR EXPERTISE</h1>
            <div className="flex justify-center items-center gap-4 mb-8">
              <div className="h-px w-16 bg-yellow-400" />
              <p className="text-lg text-gray-600">Comprehensive Drywall Solutions</p>
              <div className="h-px w-16 bg-yellow-400" />
            </div>
            <p className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
              From precise repairs to complete commercial installations, we bring decades of expertise 
              to every project. Our skilled teams handle everything from basic patches to complex 
              multi-floor developments, delivering superior results that stand the test of time.
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComparisonSection;