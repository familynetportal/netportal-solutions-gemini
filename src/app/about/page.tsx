export const metadata = {
  title: "About Us - Netportal Solutions",
  description: "Learn more about Netportal Solutions, our mission, vision, and values.",
};

export default function AboutPage() {
  return (
    <div className="bg-gray-50 dark:bg-zinc-900 py-16 md:py-24">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-gray-900 dark:text-gray-50">
          About Netportal Solutions
        </h1>

        <div className="max-w-4xl mx-auto text-lg text-gray-700 dark:text-gray-300 space-y-8">
          <p>
            Welcome to Netportal Solutions, your dedicated partner in navigating the ever-evolving landscape of information technology.
            Founded with a vision to empower businesses through innovative and strategic IT consulting, we pride ourselves on
            delivering tailored solutions that drive efficiency, foster growth, and enhance security.
          </p>
          <p>
            Our team comprises seasoned IT professionals, strategists, and technologists who are passionate about
            solving complex challenges. We believe in a collaborative approach, working closely with our clients to
            understand their unique needs, objectives, and pain points. This enables us to craft bespoke strategies
            and implement cutting-edge technologies that yield tangible, measurable results.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-gray-50">Our Mission</h2>
          <p>
            To empower businesses of all sizes with strategic IT solutions and expert guidance,
            enabling them to achieve their full potential in a rapidly advancing digital world.
            We strive to be a catalyst for innovation, efficiency, and sustainable growth for our clients.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-gray-50">Our Vision</h2>
          <p>
            To be the leading IT consulting firm, recognized for our unparalleled expertise, client-centric approach,
            and commitment to excellence. We aim to build long-lasting partnerships based on trust, transparency,
            and mutual success.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-gray-50">Our Values</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong className="text-blue-600 dark:text-blue-400">Integrity:</strong> Upholding the highest ethical standards in all our interactions.</li>
            <li><strong className="text-blue-600 dark:text-blue-400">Innovation:</strong> Continuously seeking and applying creative solutions to complex problems.</li>
            <li><strong className="text-blue-600 dark:text-blue-400">Excellence:</strong> Delivering superior quality and exceeding client expectations.</li>
            <li><strong className="text-blue-600 dark:text-blue-400">Collaboration:</strong> Partnering with clients to achieve shared goals and foster mutual growth.</li>
            <li><strong className="text-blue-600 dark:text-blue-400">Client-Centricity:</strong> Placing our clients' success at the heart of everything we do.</li>
          </ul>
        </div>

        <section className="mt-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-50">
            Ready to Collaborate?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
            Discover how our expertise can drive your business forward.
          </p>
          <Link
            href="/contact"
            className="bg-blue-600 text-white hover:bg-blue-700 transition duration-300 ease-in-out px-8 py-3 rounded-full text-lg font-semibold shadow-lg"
          >
            Contact Our Team
          </Link>
        </section>
      </div>
    </div>
  );
}
