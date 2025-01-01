import React from 'react';
import ComparisonSection from '@/components/ComparisonSection';
import FAQ from '@/components/FAQ';
import FeaturesSection from '@/components/Features';
import Navigation from '@/components/Navigation';
import StepsSection from '@/components/StepsSection';
import Testemonials from '@/components/Testemonials';
import { Star } from 'lucide-react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Head from 'next/head';

const SITE_URL = 'https://toronto-drywall.com';
const SITE_NAME = 'Toronto Drywall Repairs';
const SITE_DESCRIPTION = 'Professional drywall installation, repair, and finishing services across the Greater Toronto Area. Expert contractors with 500+ satisfied clients.';

const Home = () => {
  const router = useRouter();
  
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE_NAME,
    image: `${SITE_URL}/photos/homepage/1.jpg`,
    description: SITE_DESCRIPTION,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Toronto',
      addressRegion: 'ON',
      addressCountry: 'CA'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 43.6532,
      longitude: -79.3832
    },
    url: SITE_URL,
    areaServed: ['Toronto', 'GTA', 'North York', 'Etobicoke', 'Scarborough'],
    serviceType: ['Drywall Installation', 'Drywall Repair', 'Drywall Finishing']
  };

  return (
    <>
      <Head>
        <title>{SITE_NAME} | Expert Drywall Services in Toronto</title>
        <meta name="description" content={SITE_DESCRIPTION} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:title" content={SITE_NAME} />
        <meta property="og:description" content={SITE_DESCRIPTION} />
        <meta property="og:image" content={`${SITE_URL}/photos/homepage/1.jpg`} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={SITE_URL} />
        <meta property="twitter:title" content={SITE_NAME} />
        <meta property="twitter:description" content={SITE_DESCRIPTION} />
        <meta property="twitter:image" content={`${SITE_URL}/photos/homepage/1.jpg`} />

        <link rel="canonical" href={SITE_URL} />
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation showActions={false} />

        {/* Hero Section - Adjusted for better proportions */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          {/* Background Image with Mask */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/photos/homepage/1.jpg"
              alt="Professional Drywall Repair Services in Toronto"
              fill
              className="mask-stripes object-cover object-[150%_-200%]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>
          </div>

          {/* Content */}
          <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-32 w-full">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-white">
                Expert Drywall Repairs in Toronto
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8">
                Professional drywall installation, repair, and finishing services across the GTA
              </p>
              <button
                onClick={() => window.open('/quote', '_current')}
                className="bg-white text-black px-8 py-4 rounded-lg text-lg font-medium mb-8 hover:bg-yellow-400 transition-colors duration-300">
                Get Free Estimate
              </button>
              <div className="flex items-center gap-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-white text-lg">500+ Satisfied Clients in Toronto</span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Sections */}
        <div className="relative z-10">
          <ComparisonSection />
          <StepsSection />
          <Testemonials />
          <FAQ />
        </div>

        {/* CTA Section - Enhanced */}
        <section className="bg-black text-white py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Need Professional Drywall Services in Toronto?
            </h2>
            <p className="text-gray-400 mb-12 text-lg md:text-xl max-w-3xl mx-auto">
              Join hundreds of satisfied Toronto homeowners who trust us with their drywall needs
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() => router.push('/quote')}
                className="w-full sm:w-auto bg-white text-black px-8 py-4 rounded-lg text-lg font-medium hover:bg-yellow-400 transition-colors duration-300">
                Request Free Quote
              </button>
              <button
                onClick={() => router.push('/services')}
                className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-white hover:text-black transition-colors duration-300">
                View All Services
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;