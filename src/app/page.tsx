import Link from "next/link";
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const services = [
    {
      title: "AI Strategy Consulting",
      description: "We help you identify and implement high-impact AI opportunities to drive business growth and innovation.",
      href: "/services#ai-strategy"
    },
    {
      title: "Custom AI Model Development",
      description: "Our experts build bespoke AI and machine learning models tailored to your unique business challenges and data.",
      href: "/services#custom-models"
    },
    {
      title: "LLM & Generative AI Integration",
      description: "Leverage the power of Large Language Models by integrating them into your products and internal workflows.",
      href: "/services#llm-integration"
    },
  ];

  return (
    <div className="bg-brand-light dark:bg-brand-dark text-brand-dark dark:text-brand-light">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-accent-cyan to-accent-purple py-24 md:py-32 text-white text-center animate-fade-in">
        <div className="container mx-auto px-6 z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Unlock the Future with AI
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-300 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Netportal Solutions delivers cutting-edge AI strategy and custom model development to propel your business forward.
          </p>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Link
              href="/contact"
              className="bg-brand-primary text-white hover:bg-blue-700 transition-all duration-300 ease-in-out px-8 py-4 rounded-lg text-lg font-semibold shadow-lg inline-flex items-center group"
            >
              Schedule a Consultation <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Transform Your Business with Artificial Intelligence</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">We provide the expertise and tools to integrate AI seamlessly into your operations.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white dark:bg-zinc-800 p-8 rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
                <h3 className="text-2xl font-semibold mb-4 text-brand-secondary dark:text-white">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {service.description}
                </p>
                <Link href={service.href} className="text-brand-primary dark:text-accent-cyan font-semibold hover:underline">
                  Learn More &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 md:py-28 bg-white dark:bg-zinc-800">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-secondary dark:text-white">Your Partner in AI Innovation</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 space-y-4">
                Partnering with Netportal Solutions means more than just hiring a consultant. We become an extension of your team, deeply invested in your success. Our agile approach ensures we deliver value quickly and adapt to your evolving needs, turning your AI ambitions into reality.
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">&#10003;</span>
                  <span><strong>Expert Team:</strong> Access to world-class AI experts and data scientists.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">&#10003;</span>
                  <span><strong>Tailored Solutions:</strong> We build custom solutions that fit your specific challenges.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">&#10003;</span>
                  <span><strong>Proven Results:</strong> A track record of successful AI implementations across various industries.</span>
                </li>

              </ul>
            </div>
            <div className="bg-gradient-to-br from-brand-primary to-accent-purple p-8 rounded-xl shadow-lg">
              <p className="text-white text-xl italic leading-relaxed">"Netportal Solutions transformed our data strategy. Their custom AI models have unlocked insights we never thought possible, giving us a significant competitive edge."</p>
              <p className="text-white text-right font-semibold mt-4">- CEO, FutureCorp</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Final CTA */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build Your AI-Powered Future?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">Let's start the conversation. Contact us for a no-obligation consultation to explore how AI can benefit your business.</p>
          <Link href="/contact" className="bg-brand-primary text-white hover:bg-blue-700 transition-all duration-300 ease-in-out px-10 py-4 rounded-lg text-xl font-semibold shadow-lg">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
