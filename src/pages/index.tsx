import React from 'react';
import ComparisonSection from '@/components/ComparisonSection';
import FAQ from '@/components/FAQ';
import FeaturesSection from '@/components/Features';
import Navigation from '@/components/Navigation';
import StepsSection from '@/components/StepsSection';
import Reviews from '@/components/reviews';
import { Star } from 'lucide-react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Head from 'next/head';

const SITE_URL = 'https://toronto-drywall.com';
const SITE_NAME = 'Toronto Drywall Repairs';
const SITE_DESCRIPTION = 'Professional drywall installation, repair, and finishing services across the Greater Toronto Area. Expert contractors with 500+ satisfied clients.';
const BUSINESS_EMAIL = 'office@toronto-drywall.com';

const Home = () => {
  const router = useRouter();
  
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    image: `${SITE_URL}/photos/homepage/1.jpg`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    email: BUSINESS_EMAIL,
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
    areaServed: [
      {
        '@type': 'City',
        name: 'Toronto'
      },
      {
        '@type': 'City',
        name: 'North York'
      },
      {
        '@type': 'City',
        name: 'Etobicoke'
      },
      {
        '@type': 'City',
        name: 'Scarborough'
      }
    ],
    priceRange: '$$',
    openingHours: 'Mo-Sa 08:00-18:00'
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: ['Drywall Installation', 'Drywall Repair', 'Drywall Finishing'],
    provider: {
      '@id': `${SITE_URL}/#organization`
    },
    areaServed: {
      '@type': 'City',
      name: 'Toronto'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Drywall Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Drywall Installation',
            description: 'Professional drywall installation services in Toronto'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Drywall Repair',
            description: 'Expert drywall repair and patch services'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Drywall Finishing',
            description: 'High-quality drywall finishing and texturing'
          }
        }
      ]
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How long does a typical drywall repair take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Small repairs like patching holes can be completed in 2-4 hours. Larger repairs or full room installations typically take 1-2 days.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do you provide free estimates?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we provide free, no-obligation estimates for all drywall repair and installation projects in Toronto.'
        }
      }
    ]
  };

  return (
    <>
      <Head>
        <title>{SITE_NAME} | Expert Drywall Services in Toronto</title>
        <meta name="description" content={SITE_DESCRIPTION} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:title" content={`${SITE_NAME} | Expert Drywall Services in Toronto`} />
        <meta property="og:description" content={SITE_DESCRIPTION} />
        <meta property="og:image" content={`${SITE_URL}/photos/homepage/1.jpg`} />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:locale" content="en_CA" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={SITE_URL} />
        <meta name="twitter:title" content={`${SITE_NAME} | Expert Drywall Services`} />
        <meta name="twitter:description" content={SITE_DESCRIPTION} />
        <meta name="twitter:image" content={`${SITE_URL}/photos/homepage/1.jpg`} />

        {/* Additional SEO Meta Tags */}
        <meta name="keywords" content="drywall repair toronto, drywall installation, drywall contractors, toronto drywall services, gta drywall repair" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content={SITE_NAME} />
        <meta name="geo.region" content="CA-ON" />
        <meta name="geo.placename" content="Toronto" />
        <meta name="geo.position" content="43.6532;-79.3832" />
        <meta name="ICBM" content="43.6532, -79.3832" />

        {/* Canonical URL */}
        <link rel="canonical" href={SITE_URL} />
        
        {/* Structured Data */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation showActions={false} />

        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center">
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/photos/homepage/1.jpg"
              alt="Professional Drywall Repair Services in Toronto"
              fill
              className="object-cover object-[85%_25%]"
              priority
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-32 w-full">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-white">
                Expert Drywall Repairs in Toronto
              </h1>
              <p className="text-xl md:text-2xl text-white mb-8">
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

        <div className="relative z-10">
          <ComparisonSection />
          <StepsSection />
          <Reviews />
          <FAQ />
        </div>

        {/* CTA Section */}
        <section className="bg-black text-white py-24">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Need Professional Drywall Services in Toronto?
            </h2>
            <p className="text-gray-300 mb-12 text-xl max-w-3xl mx-auto">
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