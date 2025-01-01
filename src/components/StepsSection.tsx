import React from 'react';
import { Phone, ClipboardCheck, Building2, Wrench, CheckCircle2, Sparkles } from 'lucide-react';

const StepsSection = () => {
  const steps = [
    {
      icon: Phone,
      number: "01",
      title: "Initial Contact",
      description: "The journey to perfect walls begins here. Our expert team takes the time to deeply understand your project requirements, whether you're dealing with a minor repair or planning a multi-floor commercial installation. We'll discuss your timeline, specific requirements, and any unique challenges your project might present. Within 24 hours, you'll receive a comprehensive quote that breaks down every aspect of the work, ensuring complete transparency from day one."
    },
    {
      icon: ClipboardCheck,
      number: "02",
      title: "Expert Assessment",
      description: "This crucial step sets the foundation for success. Our seasoned professionals conduct a thorough on-site evaluation, analyzing everything from substrate conditions to environmental factors that could impact your project. We'll identify potential challenges before they become issues and develop a strategic approach tailored to your specific situation. Years of handling projects across every scale have taught us that proper planning eliminates 90% of potential complications."
    },
    {
      icon: Building2,
      number: "03",
      title: "Professional Construction",
      description: "This is where experience truly matters. Our crews bring decades of combined expertise to every project, from precise patch jobs to complete building envelopes. We utilize advanced techniques and premium materials that ensure longevity and perfection. Our team coordinates seamlessly with other trades when necessary, maintaining strict timelines while never compromising on quality. Whether it's a small repair or a massive commercial project, we approach each task with the same level of dedication and precision."
    },
    {
      icon: Wrench,
      number: "04",
      title: "Expert Finishing",
      description: "The difference between good and exceptional lies in the details. Our finishing process involves multiple stages of careful preparation and skilled application. We've mastered the art of matching existing textures and creating flawless new surfaces. Each wall receives multiple inspections under various lighting conditions to ensure perfect uniformity. This meticulous attention to detail is why our work stands out and why clients consistently trust us with their most demanding projects."
    },
    {
      icon: CheckCircle2,
      number: "05",
      title: "Quality Inspection",
      description: "Our quality control process is what sets us apart in the industry. Every surface undergoes a comprehensive multi-point inspection. We examine not just the obvious aspects but delve deeper - checking for proper depth of joints, perfect seam alignment, and complete uniformity of finish. We use specialized lighting and advanced techniques to identify and address any imperfections that might be invisible to the untrained eye. This thoroughness ensures that your project will meet not just industry standards, but our own exacting criteria."
    },
    {
      icon: Sparkles,
      number: "06",
      title: "Complete Satisfaction",
      description: "The final step is ensuring your complete satisfaction with our work. We conduct a detailed walkthrough, explaining the technical aspects of what we've done and how to maintain the perfect finish we've achieved. Any concerns are addressed immediately by our expert team. This commitment to excellence doesn't end with project completion - we're always available to provide expert advice or address any future needs. It's this dedication to client satisfaction that's earned us our reputation as Toronto's premier drywall specialists."
    }
  ];

  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">6 STEPS TO PROJECT SUCCESS</h2>
          <div className="flex items-center justify-center mb-6">
            <div className="h-px w-12 bg-yellow-500"></div>
            <p className="mx-4 text-lg">From Small Repairs to Enterprise Solutions</p>
            <div className="h-px w-12 bg-yellow-500"></div>
          </div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Our refined six-step process represents decades of industry expertise, designed to deliver 
            exceptional results regardless of project scale. Every step is carefully crafted to ensure 
            superior quality and complete client satisfaction.
          </p>
        </div>

        <div className="relative">
          <div className="space-y-16">
            {steps.map((step, index) => {
              const StepIcon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div key={index} className="relative">
                  {/* Connecting Line */}
                  {index !== steps.length - 1 && (
                    <div className="absolute left-8 top-20 w-0.5 h-32 bg-gray-200"></div>
                  )}

                  <div className={`flex flex-col md:flex-row items-start ${isEven ? '' : 'md:flex-row-reverse'} gap-8`}>
                    {/* Icon and Number */}
                    <div className="flex-shrink-0 relative">
                      <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center">
                        <StepIcon className="w-8 h-8 text-yellow-500" />
                      </div>
                      <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center text-sm font-bold">
                        {step.number}
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`flex-grow md:max-w-xl ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                      <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button 
            onClick={() => window.open('/quote', '_current')}
            className="bg-black text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-yellow-500 transition-colors duration-300"
          >
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;