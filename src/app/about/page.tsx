import Link from "next/link";
import { Users, Target, Eye } from 'lucide-react';

export const metadata = {
  title: "About Us - Netportal Solutions",
  description: "Learn more about Netportal Solutions, our mission, vision, and the team driving AI innovation.",
};

export default function AboutPage() {
  return (
    <div className="bg-brand-light dark:bg-brand-dark animate-fade-in">
      {/* Page Header */}
      <header className="bg-white dark:bg-zinc-800 py-16 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-secondary dark:text-white">
            About Netportal Solutions
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-3xl mx-auto">
            We are a team of passionate technologists, strategists, and innovators dedicated to harnessing the power of AI to solve complex business challenges.
          </p>
        </div>
      </header>

      {/* Mission and Vision Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="bg-white dark:bg-zinc-800 p-8 rounded-xl shadow-lg">
              <div className="flex items-center text-brand-primary dark:text-accent-cyan mb-4">
                <Target className="h-8 w-8 mr-3" />
                <h2 className="text-3xl font-bold">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                To empower businesses with transformative AI solutions that drive growth, efficiency, and a sustainable competitive advantage in the digital age.
              </p>
            </div>
            <div className="bg-white dark:bg-zinc-800 p-8 rounded-xl shadow-lg">
              <div className="flex items-center text-brand-primary dark:text-accent-cyan mb-4">
                <Eye className="h-8 w-8 mr-3" />
                <h2 className="text-3xl font-bold">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                To be the most trusted and sought-after partner for AI strategy and implementation, known for our expertise, integrity, and commitment to client success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-20 bg-white dark:bg-zinc-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-brand-secondary dark:text-white">
            Meet Our Leadership
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {/* Team Member Placeholder 1 */}
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 dark:bg-zinc-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="h-16 w-16 text-gray-500" />
              </div>
              <h3 className="text-xl font-semibold">Jane Doe</h3>
              <p className="text-brand-primary dark:text-accent-cyan">CEO & AI Strategist</p>
            </div>
            {/* Team Member Placeholder 2 */}
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 dark:bg-zinc-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="h-16 w-16 text-gray-500" />
              </div>
              <h3 className="text-xl font-semibold">John Smith</h3>
              <p className="text-brand-primary dark:text-accent-cyan">CTO & Lead ML Engineer</p>
            </div>
            {/* Team Member Placeholder 3 */}
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 dark:bg-zinc-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="h-16 w-16 text-gray-500" />
              </div>
              <h3 className="text-xl font-semibold">Alex Ray</h3>
              <p className="text-brand-primary dark:text-accent-cyan">Head of Data Science</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Us on the Forefront of AI</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">Let's connect and explore how our team can help shape your company's future.</p>
          <Link href="/contact" className="bg-brand-primary text-white hover:bg-blue-700 transition-all duration-300 ease-in-out px-10 py-4 rounded-lg text-xl font-semibold shadow-lg">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
