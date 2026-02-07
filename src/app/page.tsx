import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-50 dark:bg-zinc-900 text-gray-900 dark:text-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 py-20 md:py-32 text-white overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            Netportal Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Your Trusted Partner for Innovative IT Consulting and Digital Transformation.
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-700 hover:bg-gray-100 hover:text-blue-800 transition duration-300 ease-in-out px-8 py-3 rounded-full text-lg font-semibold shadow-lg"
          >
            Get a Free Consultation
          </Link>
        </div>
        {/* Abstract shapes for background */}
        <div className="absolute inset-0 z-0 opacity-10">
          <svg className="w-full h-full" fill="none" viewBox="0 0 1440 500" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#4F46E5" />
                <stop offset="100%" stopColor="#3B82F6" />
              </linearGradient>
            </defs>
            <circle cx="200" cy="150" r="100" fill="url(#grad1)" opacity="0.6" />
            <circle cx="1200" cy="350" r="150" fill="url(#grad1)" opacity="0.4" />
            <rect x="500" y="50" width="200" height="100" fill="url(#grad1)" opacity="0.3" transform="rotate(20 500 50)" />
          </svg>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-zinc-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800 dark:text-gray-50">
            Our Core IT Consulting Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Service 1 */}
            <div className="bg-gray-100 dark:bg-zinc-700 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Cloud Solutions</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Leverage the power of the cloud for scalability, flexibility, and cost-efficiency. From migration to management, we've got you covered.
              </p>
            </div>
            {/* Service 2 */}
            <div className="bg-gray-100 dark:bg-zinc-700 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Cybersecurity</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Protect your digital assets from evolving threats with our comprehensive cybersecurity strategies and solutions.
              </p>
            </div>
            {/* Service 3 */}
            <div className="bg-gray-100 dark:bg-zinc-700 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Digital Transformation</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Modernize your business processes and technology stack to drive innovation and competitive advantage.
              </p>
            </div>
          </div>
          <div className="mt-12">
            <Link
              href="/services"
              className="bg-blue-600 text-white hover:bg-blue-700 transition duration-300 ease-in-out px-8 py-3 rounded-full text-lg font-semibold shadow-lg"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us / Value Proposition Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-zinc-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800 dark:text-gray-50">
            Why Partner with Netportal Solutions?
          </h2>
          <div className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300 space-y-6">
            <p>
              At Netportal Solutions, we don't just provide IT services; we
              become an extension of your team, dedicated to your success. Our
              experts bring years of experience, a client-first approach, and a
              passion for technology that drives real business results.
            </p>
            <p>
              We focus on understanding your unique challenges to deliver
              tailored, scalable, and secure solutions that empower your
              business to thrive in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-700 dark:bg-indigo-900 py-16 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your IT?
          </h2>
          <p className="text-xl mb-8">
            Let's discuss how Netportal Solutions can elevate your business.
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-700 hover:bg-gray-100 hover:text-blue-800 transition duration-300 ease-in-out px-10 py-4 rounded-full text-xl font-semibold shadow-lg"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}
