import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import Image from 'next/image';

interface Service {
  title: string;
  description: string;
  buttonText: string;
  image: string;
  url: string;
}

const ComparisonSection = () => {
  const services: Service[] = [
    {
      title: "RESIDENTIAL DRYWALL",
      description: "From single room repairs to complete home renovations, our expert team delivers flawless results for homeowners across Toronto.",
      buttonText: "RESIDENTIAL SERVICES",
      image: "/photos/homepage/1.jpg",
      url: "/residential"
    },
    {
      title: "COMMERCIAL DRYWALL",
      description: "Specializing in large-scale commercial projects, we bring efficiency and expertise to office buildings, retail spaces, and industrial facilities.",
      buttonText: "COMMERCIAL SERVICES",
      image: "/photos/homepage/2.jpg",
      url: "/commercial"
    },
    {
      title: "NEW CONSTRUCTION",
      description: "Partner with Toronto&apos;s leading drywall experts for your new construction project. We work seamlessly with developers and contractors.",
      buttonText: "NEW CONSTRUCTION",
      image: "/photos/homepage/3.jpg",
      url: "/new-construction"
    },
    {
      title: "SPECIALTY FINISHES",
      description: "Elevate your spaces with our specialty drywall finishes. From custom textures to Level 5 finishes for high-end properties.",
      buttonText: "SPECIALTY SERVICES",
      image: "/photos/homepage/1.jpg",
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

  return (
    <div>
      {/* Contact Banner */}
      <div className="bg-black w-full py-12 px-4">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-12">
            Toronto&apos;s Premier Drywall Specialists
          </h1>
          
          <button
            onClick={() => copyToClipboard("7786534862", true)}
            className="w-full text-center transition-transform duration-200"
          >
            <div 
              className={`text-4xl md:text-6xl font-black tracking-wider transition-colors duration-200 ${
                copiedPhone ? 'text-green-400' : 'text-white'
              }`}
              style={{ textShadow: '4px 4px 0 rgba(0,0,0,0.3)' }}
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

          <div className="flex justify-center">
            <button 
              onClick={() => copyToClipboard("office@toronto-drywall.com", false)}
              className={`${
                copiedEmail 
                  ? 'bg-green-400 scale-95' 
                  : 'bg-yellow-400 hover:bg-yellow-300'
              } text-black px-8 py-3 rounded-full transition-all duration-300 flex items-center gap-2 text-lg font-medium`}
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
      </div>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">OUR EXPERTISE</h2>
            <div className="flex justify-center items-center gap-4 mb-8">
              <div className="h-px w-16 bg-yellow-400" />
              <p className="text-lg text-gray-600">Comprehensive Drywall Solutions</p>
              <div className="h-px w-16 bg-yellow-400" />
            </div>
          </div>

          <div className="relative">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`flex flex-col lg:flex-row items-center gap-8 mb-32 last:mb-0 ${
                  index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Image Side */}
                <div className={`w-full lg:w-2/3 relative ${
                  index % 2 === 0 ? 'lg:-mr-16' : 'lg:-ml-16'
                } z-10`}>
                  <div className="aspect-[16/9] relative rounded-xl overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Content Side */}
                <div className={`w-full lg:w-1/2 bg-white p-8 lg:p-12 rounded-xl shadow-xl ${
                  index % 2 === 0 ? 'lg:-ml-16' : 'lg:-mr-16'
                } relative z-20`}>
                  <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-8 text-lg">{service.description}</p>
                  <a
                    href={service.url}
                    className="inline-flex items-center gap-2 text-lg font-medium hover:gap-4 transition-all duration-300"
                  >
                    {service.buttonText}
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>

                {/* Decorative Elements */}
                <div className={`absolute top-1/2 ${
                  index % 2 === 0 ? 'right-0' : 'left-0'
                } w-32 h-32 bg-yellow-400/10 rounded-full -translate-y-1/2 hidden lg:block`} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComparisonSection;