export const metadata = {
  title: "Our Services - Netportal Solutions",
  description: "Comprehensive IT consulting services offered by Netportal Solutions.",
};

export default function ServicesPage() {
  const services = [
    {
      title: "Cloud Migration & Management",
      description: "Seamlessly transition to the cloud and optimize your cloud infrastructure for performance and cost-efficiency. We support AWS, Azure, and Google Cloud.",
      icon: "☁️",
    },
    {
      title: "Cybersecurity Solutions",
      description: "Protect your business from evolving cyber threats with our robust security strategies, including threat detection, incident response, and compliance.",
      icon: "🔒",
    },
    {
      title: "Managed IT Services",
      description: "Proactive monitoring, maintenance, and support for your IT infrastructure, ensuring maximum uptime and operational efficiency.",
      icon: "🛠️",
    },
    {
      title: "Digital Transformation Consulting",
      description: "Guide your business through digital change, adopting new technologies and processes to enhance productivity and competitive advantage.",
      icon: "🚀",
    },
    {
      title: "Data Analytics & Business Intelligence",
      description: "Turn raw data into actionable insights. We help you implement powerful analytics tools and strategies to make informed business decisions.",
      icon: "📊",
    },
    {
      title: "Network & Infrastructure Solutions",
      description: "Design, implement, and maintain scalable and secure network infrastructures that form the backbone of your digital operations.",
      icon: "🌐",
    },
  ];

  return (
    <div className="bg-gray-50 dark:bg-zinc-900 py-16 md:py-24">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-gray-900 dark:text-gray-50">
          Our Comprehensive IT Consulting Services
        </h1>

        <p className="text-xl text-center max-w-3xl mx-auto mb-16 text-gray-700 dark:text-gray-300">
          At Netportal Solutions, we offer a wide range of expert IT consulting
          services designed to help your business navigate the complexities of
          the digital landscape and achieve its strategic goals.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-zinc-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">
                {service.title}
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <section className="mt-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-50">
            Ready to Elevate Your IT Strategy?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
            Contact us today to discuss your specific needs and discover how our tailored solutions can empower your business.
          </p>
          <Link
            href="/contact"
            className="bg-blue-600 text-white hover:bg-blue-700 transition duration-300 ease-in-out px-8 py-3 rounded-full text-lg font-semibold shadow-lg"
          >
            Get in Touch
          </Link>
        </section>
      </div>
    </div>
  );
}
