import React from 'react';
import { ArrowRight } from 'lucide-react';

const FAQ = () => {
  const faqData = [
    {
      question: "How long does a typical drywall repair take?",
      answer: "Small repairs like patching holes can be completed in 2-4 hours. Larger repairs or full room installations typically take 1-2 days. We ensure proper drying time between coats for the best results."
    },
    {
      question: "Do you provide free estimates for drywall work?",
      answer: "Yes, we provide free, detailed estimates for all drywall projects. We'll assess the damage or project scope and provide you with a clear, written quote before any work begins."
    },
    {
      question: "Are your drywall contractors licensed and insured?",
      answer: "Yes, all our drywall contractors are fully licensed, insured, and have extensive experience in both residential and commercial projects. We maintain comprehensive insurance coverage for your peace of mind."
    },
    {
      question: "How quickly can you start a drywall project?",
      answer: "We typically can schedule most repairs within 24-48 hours. For emergency repairs, like water damage, we offer priority scheduling. Larger projects are scheduled based on scope and availability."
    }
  ];

  return (
    <section className="py-16 px-5" id="faq">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <h3 className="text-3xl lg:text-4xl font-bold lg:tracking-tight">
              Frequently Asked Questions
            </h3>
            <p className="text-lg mt-4 text-slate-600 dark:text-slate-400">
              Everything you need to know about our drywall services
            </p>
          </div>
          
          <div className="w-full md:w-1/2 max-w-xl mx-auto">
            <div className="grid divide-y divide-neutral-200 dark:divide-slate-400">
              {faqData.map((faq, index) => (
                <div className="py-5" key={index}>
                  <details className="group">
                    <summary className="flex justify-between text-lg items-center font-medium cursor-pointer list-none">
                      <span>{faq.question}</span>
                      <span className="transition group-open:rotate-180">
                        <ArrowRight className="h-5 w-5" />
                      </span>
                    </summary>
                    <p className="text-slate-600 dark:text-slate-400 mt-3 group-open:animate-fadeIn">
                      {faq.answer}
                    </p>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;