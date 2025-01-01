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

// Add this CSS to your global.css or create a new module
`
.mask-stripes {
  mask-image: repeating-linear-gradient(
    -45deg,
    black,
    black 8px,
    transparent 8px,
    transparent 16px
  );
  -webkit-mask-image: repeating-linear-gradient(
    -45deg,
    black,
    black 8px,
    transparent 8px,
    transparent 16px
  );
}
`;

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
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:title" content={SITE_NAME} />
        <meta property="og:description" content={SITE_DESCRIPTION} />
        <meta property="og:image" content={`${SITE_URL}/photos/homepage/1.jpg`} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={SITE_URL} />
        <meta property="twitter:title" content={SITE_NAME} />
        <meta property="twitter:description" content={SITE_DESCRIPTION} />
        <meta property="twitter:image" content={`${SITE_URL}/photos/homepage/1.jpg`} />

        {/* Canonical URL */}
        <link rel="canonical" href={SITE_URL} />

        {/* Schema.org JSON-LD */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation showActions={false} />

        {/* Hero Section - Mobile First */}
        <section className="max-w-7xl mx-auto px-4 py-8 md:py-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="w-full md:max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6">
              Expert Drywall Repairs in Toronto
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8">
              Professional drywall installation, repair, and finishing services across the GTA
            </p>
            <button
              onClick={() => window.open('/quote', '_current')}
              className="w-full md:w-auto bg-black text-white px-6 py-3 rounded-lg text-lg font-medium mb-6">
              Get Free Estimate
            </button>
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-gray-600 text-sm md:text-base">500+ Satisfied Clients in Toronto</span>
            </div>
          </div>
          <div className="w-full md:w-[500px] lg:w-[600px] relative h-[400px]">
            <Image
              src="/photos/homepage/1.jpg"
              alt="Professional Drywall Repair Services in Toronto"
              fill
              className="mask-stripes object-cover object-[150%_-1000%] rounded-lg"
              priority
            />
          </div>
        </section>

        <ComparisonSection />
        <StepsSection />
        <Testemonials />
        <FAQ />

        {/* CTA Section */}
        <section className="bg-black text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Professional Drywall Services in Toronto?
            </h2>
            <p className="text-gray-400 mb-8 text-sm md:text-base">
              Join hundreds of satisfied Toronto homeowners who trust us with their drywall needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => router.push('/quote')}
                className="w-full sm:w-auto bg-white text-black px-6 py-3 rounded-lg text-lg font-medium">
                Request Free Quote
              </button>
              <button
                onClick={() => router.push('/services')}
                className="w-full sm:w-auto bg-transparent border border-white text-white px-6 py-3 rounded-lg text-lg font-medium">
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