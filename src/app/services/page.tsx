import Link from "next/link";

import Link from "next/link";

export const metadata = {
  title: "Our Services - Netportal Solutions",
  description: "Comprehensive AI consulting services offered by Netportal Solutions.",
};

export default function ServicesPage() {
  const services = [
    {
      id: "ai-strategy",
      title: "AI Strategy Consulting",
      description: "We help you navigate the complex AI landscape, identifying the most valuable opportunities for your business. Our experts work with you to create a robust, scalable, and ethical AI roadmap.",
      icon: "🧠",
      details: [
        "Opportunity Analysis & Use-Case Identification",
        "AI Readiness Assessment",
        "Technology Stack & Vendor Selection",
        "Ethical AI & Governance Frameworks",
      ],
    },
    {
      id: "custom-models",
      title: "Custom AI Model Development",
      description: "Our team of data scientists and ML engineers design, train, and deploy high-performance, custom AI models tailored to your specific data and business challenges.",
      icon: "🔬",
      details: [
        "Natural Language Processing (NLP)",
        "Computer Vision & Image Analysis",
        "Predictive Analytics & Forecasting",
        "Anomaly Detection Systems",
      ],
    },
    {
      id: "llm-integration",
      title: "LLM & Generative AI Integration",
      description: "Unlock the power of Large Language Models and generative AI. We help you integrate and fine-tune models like GPT-4, Claude, and Llama for your enterprise applications.",
      icon: "🤖",
      details: [
        "Chatbot & Virtual Assistant Development",
        "Content Generation & Summarization Tools",
        "Internal Knowledge Base Search",
        "Fine-tuning on Proprietary Data",
      ],
    },
    {
      id: "data-analytics",
      title: "AI-Powered Data Analytics",
      description: "Transform your data into a strategic asset. We implement intelligent analytics platforms that uncover deep insights, predict trends, and automate decision-making.",
      icon: "📊",
      details: [
        "Data Warehousing & ETL Pipelines",
        "Interactive Business Intelligence Dashboards",
        "Customer Segmentation & Churn Prediction",
        "Real-time Data Processing & Analysis",
      ],
    },
  ];

  return (
    <div className="bg-brand-light dark:bg-brand-dark animate-fade-in">
      {/* Page Header */}
      <header className="bg-white dark:bg-zinc-800 py-16 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-secondary dark:text-white">
            Our AI Solutions
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-3xl mx-auto">
            We offer a comprehensive suite of services to help you harness the power of Artificial Intelligence.
          </p>
        </div>
      </header>

      {/* Services List */}
      <main className="py-20">
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            {services.map((service) => (
              <div key={service.id} id={service.id} className="grid md:grid-cols-2 gap-10 items-center scroll-mt-20">
                <div className="md:pr-10">
                  <span className="text-5xl">{service.icon}</span>
                  <h2 className="text-3xl font-bold my-4 text-brand-primary dark:text-accent-cyan">{service.title}</h2>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1">&#10003;</span>
                        <span className="text-gray-700 dark:text-gray-300">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      {/* Final CTA */}
      <section className="py-20 text-center bg-white dark:bg-zinc-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Innovate?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">Let's discuss your project and discover how our AI expertise can create value for your business.</p>
          <Link href="/contact" className="bg-brand-primary text-white hover:bg-blue-700 transition-all duration-300 ease-in-out px-10 py-4 rounded-lg text-xl font-semibold shadow-lg">
            Book Your Discovery Call
          </Link>
        </div>
      </section>
    </div>
  );
}
